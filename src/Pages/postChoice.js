import {UserOutlined, AppstoreAddOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'

function Choice(){
    const navigate = useNavigate()
    const post = () => {
        navigate("/post")
    }

    const register = () => {
        navigate("/register")
    }
    return(
        <div>
            <NavBar />
            <div className="form">
                <Button className="button" onClick={post}><AppstoreAddOutlined /> Post New</Button>
                <br />
                <br />
                <Button className="button" onClick={register}><UserOutlined /> Register</Button>
            </div>
        </div>
    )
}

export default Choice