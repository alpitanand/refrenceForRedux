import {POSTS} from '../action/actionType'
import Axios from 'axios'

export const savePost = (res)=>{
    return{
        post: res,
        type:POSTS
      
    }
}

export const getPost = ()=>{
    return (dispatch)=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts/").then((response)=>{    
        dispatch(savePost(response.data));
        })
    }
} 