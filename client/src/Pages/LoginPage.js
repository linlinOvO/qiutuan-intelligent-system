import React, {useState} from "react";
import './LoginPage.css'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function LoginPage({setToken}) {
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(token)
        if (token.token === 'login successfully') {
            setToken(token);
        } else {
            console.log(token)
        }
    }

    const testApi = () => {
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '300',
                'Connection':'keep-alive'
            },
            body: JSON.stringify({"dbzts":86.54,"cql":76.18,"fll":1125,"hhlsf":9.85,"qhyxsj":6.4,"prt":0.97,"aq":10,
                "dc":90,"yt":1129,"yw":872,"yr2":1018,"yr1":862,"cgd":265,"ggd":63,"dbcl":3732,"dh":18.7,"mfld":66})
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div className='background'>
            <div className="login-head">
                {/*<img src={require("../Pictures/schoolPhoto.jpg")} alt="school"/>*/}
                <div className="login_head_university_picture">
                    <img src={require("../Pictures/uni_new_logo.png")} alt="university_logo" className="un_logo"/>
                </div>
                <span>{"球团生产运行状态大数据分析平台"}</span>
            </div>
            <div className="login-information">
                <div className="login-information-title">
                    系统说明
                </div>
                <div className="login-information-body">{"1、请使用Chrome、Firefox、IE11、Edge、Safari等浏览器登录"}</div>
                <div className="login-information-body">{"2、账号须实名使用，由此带来的信息泄露等后果，由账号所有者承担"}</div>

            </div>
            <div className="login-body">
                <div className="login-body-title">
                    密码登陆
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" onChange={e => setUserName(e.target.value)} className='account'
                               placeholder='用户名'/>
                    </label>
                    <label>
                        <input type="password" onChange={e => setPassword(e.target.value)} className="password"
                               placeholder="密码"/>
                    </label>
                    <button className='login_button' type="submit">登陆</button>
                    <button onClick={testApi}>测试接口</button>
                </form>
            </div>
        </div>
    )
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
};
