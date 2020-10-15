import React,{useState,useEffect} from 'react'
import '../public/style/components/header.css'
import Router from 'next/router'
import Link from 'next/link'
import {Row,Col, Menu} from 'antd'
import {LogoutOutlined, AliwangwangOutlined } from '@ant-design/icons';
import axios from 'axios'
import servicePath from '../config/apiURL'




const Header = () => {
    const [data,setData] = useState({}) 

    const getToken=()=>{
        const tokenStr = JSON.parse(sessionStorage.getItem('token'))
        return tokenStr
    }

    useEffect(()=>{
        let info=getToken()
        console.log(info);
        info?setData(getToken()):Router.push('/login')
    },[])


    const preventMove1=(func,time)=>{
        let timeout=null
        return function(args){
            let that=this
            if (timeout) clearTimeout(timeout)
            let callnow=!timeout
            timeout=setTimeout(()=>{
                timeout=null
            },time)
            if (callnow) func.call(that,args)
        }

    }

    // const preventMove2=(func,time)=>{
    //     let timeout=null
    //     return function(args) {
    //         let that=this

    //         if(timeout) clearTimeout(timeout)
    //         timeout=setTimeout(()=>{
    //             func.call(that,args)
    //         },time)
    //     }
    // }

    // const saveStream=(func,time)=>{
    //     let timeout=null
    //     return function(args) {
    //         let that=this
    //         if(!timeout){
    //             timeout=setTimeout(() => {
    //                 func.apply(that,args)
    //                 timeout=null
    //             }, time);
    //         }

    //     }
    // }

    function debounce(func,time) {
        let timeout;
        console.log('防抖中，点击不生效');
        return function () {
            let context = this;
            let args = arguments;
    
            if (timeout) clearTimeout(timeout);
    
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
                console.log('防抖结束');
            }, time)
    
            if (callNow) func.apply(context, args)
        }
    }

    const handleClick = ()=>{
            Router.push('/index')
    }

    const logout = ()=>{
        sessionStorage.clear()
        Router.push('/login')
    }
    return (
        <div className="header">
        <Row justify="center">
            <Col xs={24} sm={24} md={18} lg={15} xl={12}>
                <span className="header-logo">HELLO</span>
                <span className="header-txt">this is a page for you ! {data.name}</span>
            </Col>
    
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="0" onClick={()=>debounce(handleClick,2000)}>
                        <AliwangwangOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item onClick={()=>logout()}>
                    <LogoutOutlined />
                        退出
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
     </div>
    )
}

export default Header