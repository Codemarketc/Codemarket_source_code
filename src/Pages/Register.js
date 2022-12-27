import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import NavBar from '../Components/NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  const Register = async () => {
    try{
      await axios.post("/acc/create", {username, userpassword, profile,email})
      message.success("Account Created")
      navigate("/")
    }catch(error){
      message.error("Username and email was already taken")
    }
  };

  const [username, setUsername] = useState('')
  const [userpassword, setUserPassword] = useState('')
  const [email, setEmail] = useState('')
  const [profile, setProfile] = useState('')

  return (
    <div>
      <NavBar />
      <Form

        className="form2"

        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <h1 className='header1'>Register</h1>
        <hr />
        <br />
        <Form.Item className='input-item' label="Username" name="username" >
          <Input onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item className='input-item' label="Password" name="userpassword">
          <Input.Password onChange={(e) => setUserPassword(e.target.value)} />
        </Form.Item>

        <Form.Item className='input-item' label="Email" name="email">
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item className='input-item' label="Profile" name="profile">
          <Input placeholder="image URL" onChange={(e) => setProfile(e.target.value)} />
        </Form.Item>

        <div>
          <Button wrapperCol={{offset: 8, span: 16}} style={{width: 70}} onClick={Register} type="primary" htmlType="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};
export default Register;