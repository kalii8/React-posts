import React from 'react';
import  './wall.css';
import Post from './../posts/post.js'


export default class Wall extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                posts: json
            })
        })
    }

    render(){
         console.log(this.state);
        return(
            <div className="wall">
            
            {  

                this.state.posts.map(post => {
                    return (
                      <Post title={post.title} 
                             text={post.body}
                         />

                    )
                }
        )}
            </div>
        )}
}
