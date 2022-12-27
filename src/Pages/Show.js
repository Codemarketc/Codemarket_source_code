import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Params from '../Components/Params'
import NavBar from '../Components/NavBar'

function Product(){
    const params = useParams()
    const {id} = params

    const [code, setCode] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data} = await axios.get(`/products/${id}`)
                setCode(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    return(
        <div>
            <NavBar />
            {code.map((product) => (
                <Params product={product} />
            ))}
        </div>
    )
}

export default Product