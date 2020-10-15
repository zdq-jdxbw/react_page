import Router from 'next/router'
import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../public/style/pages/login.css'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'



const Login = () => {

  const onLogin = async (values) => {
    console.log('Received values of form: ', values);
    const result =await axios.post(servicePath.login,values)
    if (result.data.code!=400) {
      console.log(result);
      window.sessionStorage.setItem('token', JSON.stringify(result.data.data[0]))
      Router.push('/index')
    }
    else
      alert(result.data.statusText)
  };
  
  return (
    <>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" type="flex" justify="center">
          <span className="header-logo my-header-logo">HELLO, PLEASE LOGIN FIRST!</span>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onLogin}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" className="login-form-button"
              htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  )
}


export default Login