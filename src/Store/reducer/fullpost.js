import * as actionType from '../action/actionType'
const intitalState = {
    fetchedText:""
}

const reducer = (state=intitalState, action)=>{
    console.log(action.full)
    // eslint-disable-next-line default-case
    switch(action.type){
        case actionType.FULLPOST:
        console.log(action.full)
            return{
                fetchedText:action.full
            }
    }
    return state
}

export default reducer 