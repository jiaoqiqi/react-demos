import React, { Component } from 'react';
import { render } from 'react-dom';


class LikeButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            like:false
        }
    }

    handleClick(){
        this.setState({like:!this.state.like});
    }

    render(){
        const text = this.state.like ? "like" : "dislike";

        return <div>
            onClike = {this.handleClick.bind(this)} you {text} this. to toggle
        </div>
    }

}

render(
    <LikeButton/>,document.getElementById("example")
)