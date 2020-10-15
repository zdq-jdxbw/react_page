import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons'
import Router from 'next/router'
const Author =()=>{

    const goDetailed=(key)=>{
        sessionStorage.setItem("key",key)
        Router.push('/detailed')
    }

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="/img/myAvatar.jpg"  /></div>
            <div className="author-introduction">
                <div onClick={()=>goDetailed(0)}><a href="#!">this is a page for yourself,click me,you can see more infomation about me</a></div>
                <Divider>社交账号</Divider>
                <Avatar onClick={()=>goDetailed(1)} size={28} style={{ backgroundColor: '#441f1f' }} icon={<GithubOutlined /> }  className="account"  />
                <Avatar onClick={()=>goDetailed(2)} size={28} style={{ backgroundColor: '#90da88' }} icon={<WechatOutlined />}   className="account" />
                <Avatar onClick={()=>goDetailed(3)} size={28} style={{ backgroundColor: '#d8d8d8' }} icon={<QqOutlined />}   className="account"  />
                <Divider>tips</Divider>
                <p>1.  I made a debounce funtion for the click event.</p>
                <p>2.  I use cache in this system,strong cache by Cache-Control,negotiation cache by Last-Modified.</p>
                <p>3.  I use token which product by jwt to verified user's authorization.</p>
                <p>4.  Of course I must set CORS,and it already work.</p>
                <p>5.  In fact,after you load this page successfully,this system will download the data of other pages automatically.</p>
            </div>
        </div>
    )

}

export default Author