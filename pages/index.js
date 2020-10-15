
import React,{useState} from 'react'
import Head from 'next/head'
import {List,Row,Col,Divider} from 'antd'
import Header from '../components/Header'
import { DashboardOutlined, FolderOpenOutlined, UsergroupDeleteOutlined } from '@ant-design/icons'
import '../public/style/pages/index.css'
import Author from '../components/Author'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiURL'


const Home = () => {
  
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" type="flex" justify="center">
          <Author></Author>
        </Col>
      </Row>
      <Footer></Footer>
      <style jsx>{`
          .icon-margin{
            margin:10px
          }
      `}
      </style>
    </>
  )
}

// Home.getInitialProps = async ()=>{
//   const promise = new Promise((resolve)=>{
//     axios(servicePath.getArticleList)
//     .then((res)=>{
//       resolve(res.data)     
//     })
//   })

//   return await promise
// }

export default Home