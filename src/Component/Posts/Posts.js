import React, { Component } from 'react'
import Axios from 'axios'
import CardPost from '../Post/Post'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classes from './Posts.module.css'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../../Store/action/posts'
import { getFull } from '../../Store/action/fullPost'
class Posts extends Component {
    // state={
    //     fetchedData:[]
    // }

    // componentDidMount(){
    //     Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    //         const posts  = response.data.slice(0,4);
    //         const updatedPost = posts.map((post)=>{
    //             return{
    //             ...post
    //             }
    //         })
    //     this.setState({fetchedData:updatedPost})
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }

    componentDidMount() { 
        this.props.getPosts()
    }

    render() {
        let post = <p>Loading data...</p>
        console.log(this.props.oneLineData)
        if (this.props.bulkPost.length > 0) {
            console.log("rendering again")
            post = this.props.bulkPost.map((item) => {
                return (

                    <Col as={Link} to={"/posts/" + item.id} className={classes.topMargin} key={item.id} sm={4}>
                        <CardPost />
                    </Col>

                )

            })
        }
        return (
            <>
                <div>
                    <Container>
                        <Row>
                            {post}
                        </Row>
                    </Container>
                </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        bulkPost: state.pos.posts,
        oneLineData: state.full.fetchedText
    }
}

const mapDispatchToProps = dispatch => {
    //console.log(getPost())
    return {

        // onDeleteResult: (id)=>dispatch(actionCreator.deleteResult(id)),
        getPosts: () => dispatch(getPost()),
        // getFullPost:(id)=>dispatch(getFull(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)