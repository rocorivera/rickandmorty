import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
    const [hasError, setHasError] = useState(false)
    const [infoApi, setInfoApi] = useState()
console.log(infoApi)
    const getApi=() =>{

        axios.get(url)
        .then(res=>{
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err=>{
            console.log(err)
            setHasError(true)
        })
    }
    return[infoApi,getApi,hasError]
}

export default useFetch