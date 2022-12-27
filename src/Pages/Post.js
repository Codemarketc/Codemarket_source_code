import {
    ProForm,
    ProFormText,
    ProFormTextArea
  } from '@ant-design/pro-components';
  import { Col, message, Row} from 'antd';
  import { useState } from 'react';
  import NavBar from '../Components/NavBar'
  import { useNavigate } from 'react-router-dom';
  import {Button} from 'antd'
  import axios from 'axios'
  
  const LAYOUT_TYPE_VERTICLE = 'verticle';
  
  export default function Post(){

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [email, setEmail] = useState('')
    const [APIkey, setAPIkey] = useState('')
    const [description, setDescription] = useState('')
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    const formLayoutType = LAYOUT_TYPE_VERTICLE

    const finishButton = async() => {
      axios.get(`/acc/find/${username}/${password}`).then((res) => {
        if(res.data.length === 0){
          message.error("Error account not found")
        }
        else{
          message.success("Account found, posted")
          navigate("/")
          axios.post("/code/post", {username, name, email, category, image, html, css, js, description, APIkey, price}).then((res2) => {
            message.success("Posted")
          }).catch(error => message.error("Could not be posted "))
        }
        })
    }

    const submitCode = () => {
          const htmlCode = document.querySelector(".editor #html-code").value;
          const cssCode = "<style>" + document.querySelector(".editor #css-code").value + "</style>";
          const jsCode = document.querySelector(".editor #js-code").value;
          const output = document.querySelector(".editor #output");

          output.contentDocument.body.innerHTML = htmlCode+cssCode;
          output.contentWindow.eval(jsCode)
      }
  
    return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <NavBar />
        <ProForm
            className='posting-form'
            layout={formLayoutType}
            grid={true}
            onFinish={finishButton}
            rowProps={{
            gutter: [16, formLayoutType === 'inline' ? 16 : 0],
            }}
        >
            <ProFormText name="name" label="ProjectName" onChange={(e) => setName(e.target.value)} tooltip="" placeholder="name..." />
            <ProFormText colProps={{ md: 12, xl: 8 }} onChange={(e) => setUsername(e.target.value)} name="username" label="Username" placeholder="username..." />
            <ProFormText.Password colProps={{ md: 12, xl: 8 }} onChange={(e) => setPassword(e.target.value)} name="password" label="Password" placeholder="password..." />
            <ProFormText colProps={{ md: 12, xl: 8 }} onChange={(e) => setCategory(e.target.value)} name="category" label="Category" placeholder="category" />
            <ProFormText colProps={{ md: 12, xl: 8 }} onChange={(e) => setImage(e.target.value)} name="image" label="Image URL" placeholder="Image URL" />
            <ProFormText colProps={{ md: 12, xl: 8 }} onChange={(e) => setPrice(e.target.value)} name="price" label="price" placeholder="price in $" />
            <ProFormText colProps={{ md: 12, xl: 8 }} onChange={(e) => setEmail(e.target.value)} name="email" label="email" placeholder="your email" />
            <ProFormText colProps={{ md: 12, xl: 8 }} onChange={(e) => setAPIkey(e.target.value)} name="APIkey" label="APIkey" placeholder="Your stripe private key" />
            <ProFormTextArea colProps={{span: 24}} onChange={(e) => setDescription(e.target.value)} label="Description" name="description" placeholder="description" ></ProFormTextArea>
            <div class="editor">
                <Row>
              <Col>
                <h2>HTML code</h2>
                <hr />
                <br />
                <textarea placeholder='enter your html code here' onChange={(e) => setHtml(e.target.value)} id="html-code" rows={20} cols={70}></textarea>
              </Col>
              <Col>
                <h2>CSS code</h2>
                <hr />
                <br />
                <textarea placeholder='enter your css code here' onChange={(e) => setCss(e.target.value)} id="css-code" rows={20} cols={70}></textarea>
              </Col>
              <Col>
                <h2>JS code</h2>
                <hr />
                <br />
                <textarea placeholder='enter your js code here' onChange={(e) => setJs(e.target.value)} id="js-code" rows={20} cols={70}></textarea>
              </Col>
            </Row>
            <Button onClick={submitCode}>Run</Button>
            <Row>
              <Col>
                <iframe title={name} style={{width: 1000, height: 300}} id="output"></iframe>
              </Col>
            </Row>
            </div>
        </ProForm>
        <footer>
          <small>Need help? contact codemarketc@gmail.com</small>
        </footer>
      </div>
    );
  }