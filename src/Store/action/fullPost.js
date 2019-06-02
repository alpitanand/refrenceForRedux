import {FULLPOST} from '../action/actionType'
import Axios from 'axios'

export const saveFull = (res)=>{
   console.log(res)
    return{
        type:FULLPOST,
        full: res
    }
}

export const getFull = (page)=>{
    return (dispatch)=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts/"+page).then((response)=>{
            dispatch(saveFull(response.data.title));
        })
    }
} 