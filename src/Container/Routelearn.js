import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
import Posts from '../Component/Posts/Posts'
import Fullpost from '../Component/Fullpost/Fullpost'
class RouteLearn extends Component {
    state = {
        search: null
    }

    typed = (e) => {
        var searchedItem = e.target.value;
        this.setState({ search: searchedItem })
    }


    render() {
        return (
            <>
                <Navbar
                    typed={(e) => this.typed(e)} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/" exact component={Posts} />
                <Route path="/posts/:id" exact component={Fullpost} />
                {/* <Route path="/search/:name" exact component={SeaechResult}/> */}
            </>
        )
    }
}

export default RouteLearn