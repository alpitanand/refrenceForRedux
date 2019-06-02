import React from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {getFull} from '../../Store/action/fullPost'
class fullPost extends React.Component {

    // state={
    //     content:null
    // }
    // componentDidMount(){
    //     Axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id).then((response)=>{
    //         this.setState({content:response.data})
    //         console.log(this.state.content.body)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }

    componentDidMount(){
        this.props.getFullPost(this.props.match.params.id)
    }


    render(){

        var display=<p>Loading...</p>
        // console.log(this.props.oneLineData+"*************************");
        if(this.props.oneLineData!=null){
            display = this.props.oneLineData;
        }
        return(
        <span>{display}</span>
        )
    }


}

const mapStateToProps = state=>{
    return{ 
        bulkPost: state.pos.posts,
        oneLineData: state.full.fetchedText
    }
}

const mapDispatchToProps = dispatch =>{
    //console.log(getPost())
    return{
       
        // onDeleteResult: (id)=>dispatch(actionCreator.deleteResult(id)),
        // getPosts:()=>dispatch(getPost()),
        getFullPost:(id)=>dispatch(getFull(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(fullPost)
