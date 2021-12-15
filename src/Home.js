import React from 'react';
import Dashboard from './Dashboard';
import { Row, Col } from 'antd';
import Desk from './desktop.svg';

function Home() {
    return (
        <Dashboard>
            <Row justify="center" className="home">
                <Col lg={10} sm={24}>
                    <img src={Desk} alt="" height="400"/>
                </Col>
                <Col lg={24} sm={24}>
                    <h3 style={{color : 'tomato'}}><b>Hi, I am Toyosi</b></h3>

                    <p>I am a FullStack Web Developer / Freelancer . I use React as Front-End 
                        and Node + Express as Backend and Mongo DB as Database for Web Applications.
                        Currently I am looking for an opportunity to work as a Front End / React Developer or MERN Stack Developer.
                    </p>
                </Col>
            </Row>
        </Dashboard>
    )
}

export default Home
