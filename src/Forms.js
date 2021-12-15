import React from 'react'
import Dashboard from './Dashboard'
import { Form, Input, Radio, Select, Button, DatePicker } from 'antd'
import TextArea from 'rc-textarea'

function submitForm(values) {
    console.log(values)
}


function Forms() {
    return (
        <Dashboard>
            <div>
                <h3 className='ml-2' style={{textAlign : 'center'}}><b>Form with Validations</b></h3>


                <Form layout="vertical" className='p-2 form' onFinish={submitForm}>

                    <Form.Item label="First Name" name='firstName' required rules={[{required : true, min : 2}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Last Name" name='lastName' required rules={[{required : true, min : 2}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Email" name='email' required rules={[{required : true, type : 'email'}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Gender" name='gender' required rules={[{required : true}]}>
                        <Radio.Group>
                            <Radio value='male'>Male</Radio>
                            <Radio value='female'>Female</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Date of Birth" name='dob' required rules={[{required : true}]}>
                        <DatePicker />
                    </Form.Item>

                    <Form.Item label="Programming Language" name='program' required rules={[{required : true}]}>
                        <Select>
                            <Radio value='javascript'>Javascript</Radio>
                            <Radio value='java'>Java</Radio>
                            <Radio value='c#'>C#</Radio>
                            <Radio value='python'>Python</Radio>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Address" name='address' required rules={[{required : true, min : 10}]}>
                        <TextArea style={{width: '100%'}}/>
                    </Form.Item>

                    <Button htmlType='submit' type='primary'>Register</Button>

                </Form>
            </div>
        </Dashboard>
    )
}

export default Forms
