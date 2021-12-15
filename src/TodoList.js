import { Button, Col, Input, Row, Modal } from 'antd'
import React, { useState } from 'react'
import Dashboard from './Dashboard'

function TodoList() {
    const [inputValue, setinputValue] = useState('')
    const [todoItems, setTodoItems] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editIndex, setEditIndex] = useState()
    const [editInputValue, setEditInputValue] = useState('')
  
    function addTodoItem(){

        setTodoItems([...todoItems, inputValue])
        


        console.log(todoItems)

    }

    const showModal = (index) => {
        setEditInputValue(todoItems[index])
        setEditIndex(index)
        setIsModalVisible(true);
      };
    
      const editTodoItem = () => {
        var dupItems = [...todoItems];

        dupItems[editIndex] = editInputValue;
        setTodoItems(dupItems)
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      function deleteTodoItem(index){
        var dupItems = [...todoItems];

        dupItems.splice(index, 1)

        setTodoItems(dupItems)
      }

    return (
        <Dashboard>
            <div className='todo'>

                    <h3 className='ml-2' style={{textAlign : 'center'}}><b>Todo List</b></h3>

                    <Row justify='center'>
                        <Col lg={10} sm={24} className='bs p-2'>
                            <div className='flex'>
                                <Input value={inputValue} onChange={(e)=>{setinputValue(e.target.value)}} placeholder='enter items'/>
                                <Button className='ml-2' onClick={addTodoItem}>ADD</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row justify='center' className='mt-3'>
                        <Col lg={10} sm={24} className='bs p-2'>
                            {todoItems.map((item, index)=>{
                                
                                return <div className='flex' style={{justifyContent : 'space-between'}}>
                                        <h3>{item}</h3>
                                        <div>
                                            <Button type='primary mr-2' onClick={()=>{showModal(index)}}>Edit</Button>
                                            <Button type='danger' onClick={()=>{deleteTodoItem(index)}}>Delete</Button>
                                        </div>
                                    </div>
                            })}
                        </Col>
                    </Row>

                    <Modal title="Edit Todo Item" visible={isModalVisible} onOk={editTodoItem} onCancel={handleCancel} okText='edit'>
                        <Input value={editInputValue} onChange={(e)=>{setEditInputValue(e.target.value)}}/>
                    </Modal>

            </div>
        </Dashboard>
    )
}

export default TodoList
