import * as actionType from '../action/actionType'
const intitalState = {
    posts:[]
}

const reducer = (state=intitalState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case actionType.POSTS:
                //console.log(state)
                const post  = action.post.slice(0,4);
                const updatedPost = post.map((post)=>{
                    return{
                    ...post
                    }
                })
                    return{
                        ...state,
                        posts:updatedPost
                    }
    }
    return state 
}

export default reducer