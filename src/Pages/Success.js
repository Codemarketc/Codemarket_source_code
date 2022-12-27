import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { ProFormTextArea } from '@ant-design/pro-components'
import {Row, Col} from 'antd'

function Success(){
    const params = useParams()
    const {html, css, js} = params

    return(
        <div>
            <NavBar>
                    <Row className='table'>
                        <Col>
                            <h1>HTML code</h1>
                            <hr />
                            <br />
                            <textarea style={{padding: 20}} className="codings" Rows={20} Cols={75}>{html}</textarea>
                        </Col>
                        <Col>
                            <h1>CSS code</h1>
                            <hr />
                            <br />
                            <textarea style={{padding: 20}} className='codings' Rows={20} Cols={75}>{css}</textarea>
                        </Col>
                        <Col>
                            <h1>JS code</h1>
                            <hr />
                            <br />
                            <textarea style={{padding: 20 }} className='codings' Rows={20} Cols={75}>{js}</textarea>
                        </Col>
                    </Row>
            </NavBar>
        </div>
    )
}

export default Success
