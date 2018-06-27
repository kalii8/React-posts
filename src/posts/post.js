import React from 'react';
import  './post.css';

export default class Post extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            liked: false
        }
    }

    like(){
        if(this.state.liked){
            this.setState({
                liked: false
            });
        }
      else {
        this.setState({
            liked: true
        });
        }
    }
    
    render(){

    let like_unlike = 'Like';
    let is_liked = 'like';
    if(this.state.liked){
        is_liked += ' liked';
        like_unlike = 'Unlike' 
    }

        return(
            <div className="post">
                <div className="title">{this.props.title}</div>
                <div className="text">{this.props.text}</div>
                <div className="likes">
                    <div className="likeunlike">{like_unlike}</div>
                    <div className={is_liked} onClick={this.like.bind(this)}></div>
                </div>
            </div>
        )}
    
}