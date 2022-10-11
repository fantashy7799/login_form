import React from 'react';
import './App.css';
import { Form, Input, Button } from 'antd';

function App() {
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Form 
          labelCol={{span: 8,}}
          wrapperCol={{span: 8,}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item 
            name='email'
            label='email'
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'you miss ...@gmail.com'
              },
              {
                validator(_,value) {
                  if (value.indexOf(' ') === -1)return Promise.resolve() 
                    else return Promise.reject('You much delete space')
                }
              },
              {
                validator(_,value) {
                  if (!/[!#$%^&*()]/.test(value)) return Promise.resolve()
                    else return Promise.reject('co ky tu dac biet')
                }
              },
            ]}
            hasFeedback
          >
            <Input placeholder='Email' />            
          </Form.Item>

          <Form.Item 
            name='password'
            label='pasword'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password placeholder='Password'/>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
