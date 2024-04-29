import { useState } from 'react';
import { useSignup } from '../hooks/useSignup'
//import googleLoginImg from '../img/google_login.svg';
import { Form, Container, button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나
    // 때문에 다른 변수명을 사용하지 말기

    const { signup } = useSignup();
    const navigate = useNavigate();

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value)
        } else if (event.target.type === "password") {
            setPassword(event.target.value)
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //submit 버튼은 화면을 기본적으로 새로고침하므로
        console.log(email, password);
        signup(email, password, displayName)
        navigate('/')
    }

    return (
        <Container className='login_cont'>
            <Form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>회원가입</h1>
                    <Form.Group className='mb25'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={handleData} />
                    </Form.Group>

                    <Form.Group  className='mb25'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleData} />
                    </Form.Group>

                    <Form.Group className='mb25'>
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control type="text" placeholder="닉네임" onChange={handleData} />
                    </Form.Group>

                    <div className="btn_area">
                        <button type='submit' className='btn_join'>회원가입</button>
                        {/* <button type="submit" id="loginGoogle">
                            <img src={googleLoginImg} alt="구글로그인" />
                        </button> */}
                    </div>
                </fieldset>
            </Form >
        </Container>
    )
}