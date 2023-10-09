import React from 'react';
import { Component } from 'react';


import Blogcards from './Blogcards';
import { isArrayEmpty } from './Utility';

import classes from './Blogcard.module.css'


export class App extends Component {
  state = {
    showBlogs:true,
    blogArr : [
      {
        id: 1,
        title: 'Blog Title 1',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likecount: 0,
      },
  
      {
        id: 2,
        title: 'Blog Title 2',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likecount: 0,
      },
  
      {
        id: 3,
        title: 'Blog Title 3',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likecount: 0,
      }
    ]
  }



  onLikeButtonClick =(pos) =>{
    // alert('like button clicked at pos:' + pos)
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObject = updatedBlogList[pos];

    updatedBlogObject.likecount = updatedBlogObject.likecount + 1;
    updatedBlogList[pos] = updatedBlogObject;

    this.setState({blogArr: updatedBlogList})

    console.log(updatedBlogObject)
  } 



  onHideButtonClick =()=>{
    let updatedState = !this.state.showBlogs;
    // this.setState((prevState, prevProps) =>{
    //   return{showBlogs: !prevState.showBlogs}
    // })
    this.setState({showBlogs: updatedState});
     
    console.log(this.state.showBlogs)
  }



  render(){

    const blogCards = isArrayEmpty(this.state.blogArr)? [] : this.state.blogArr.map((item,pos)  => {
      console.log(item);
  
      return(
        <Blogcards key={pos} title={item.title} description={item.description}
        id= {item.id} likecount={item.likecount} onLikeButtonClick={() => this.onLikeButtonClick(pos)} />
        // <div className={classes.Blogcard} key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>
        // </div>
      )
    })


    // console.log('render called')
    return (
      <div className={classes.App}>
         <button onClick={this.onHideButtonClick}>{this.state.showBlogs? 'Hide List' : 'Show List'}</button>
         <br></br>
         {this.state.showBlogs ? blogCards : null }
         {/* <Blogcards/>*/}
      </div>
    );
  }



}
