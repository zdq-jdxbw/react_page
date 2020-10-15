import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {Row,Col,Result, Button} from 'antd'
import Header from '../components/Header'
import '../public/style/pages/detailed.css'
import { SmileOutlined } from '@ant-design/icons';
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiURL'

const Detailed = () => { 
    const [data,setData]=useState({})
    const [text,setText]=useState('')
    useEffect(()=>{
      const key = sessionStorage.getItem('key')
      setData(JSON.parse(sessionStorage.getItem('token')))
      switch (key) {
        case '0':
          setText(data.infomation)
          break;
        case '1':
          setText(data.github)
          break;
        case '2':
          setText(data.wechat)
          break;
        case '3':
          setText(data.qq)
          break;
        default:
          setText("出错了")
          break;
      }
    },[text])

    return (
        <>
        <Head>
          <title>Detailed</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" type="flex" justify="center">
          <Result
            icon={<SmileOutlined />}
            title={text}
            subTitle="we can't stop"
            extra={<Button type="primary">Back</Button>}
          />
          </Col>
        </Row>
        <Footer></Footer>
     </>
    )
}

// Detailed.getInitialProps =async(context)=>{
//   let id=context.query.id
//   const promise = new Promise((resolve)=>{
//     axios(servicePath.getArticleById+id)
//     .then((res)=>{
//       resolve(res.data.data[0])
//     })
//   })

//   return await promise
// }

export default Detailed