import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import axios from 'axios'
import { Col, Input, Row } from 'antd'

function API() {

    const [meals , setmeals] = useState([])
    const [dupmeals , setdupmeals] = useState([])

    useEffect(() => {
        
        async function getData() {

            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')

                setmeals(response.data.meals)
                setdupmeals(response.data.meals)
                console.log(response)
            } catch (error) {
                console.log(error)
            }

        }

        getData()

    }, [])

    function searchItems(value){

        var filteredItems = dupmeals.filter(meal=>meal.strMeal.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

        setmeals(filteredItems)

    }
    
    return (
        <div>
            <Dashboard>
                <div className='m-2'>
                    <Input style={{width: '30%', marginLeft: 50}} placeholder='search items' onChange={(e)=>{searchItems(e.target.value)}}/>
                    <Row gutter={16} justify='center' className='mt-5'>
                        {meals.map(meal =>{
                            return <Col lg={5} sm={24} className='text-center bs m-3'>
                                <b><p>{meal.strMeal}</p></b>
                                <img src={meal.strMealThumb} alt='' height='200'/>
                                <p>Id : {meal.idMeal}</p>
                            </Col>
                        })}
                    </Row>
                </div>
            </Dashboard>
        </div>
    )
}

export default API
