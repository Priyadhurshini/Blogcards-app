import React from 'react'

import { dumpLogs } from './Utility'

import classes from './Blogcard.module.css'


const Blogcards=(props) => {
  // state={
  //   likecount: 0
  // }

  // onLikeButtonClick = () =>{
  //   this.setState((prevState, prevProps) =>{
  //   return(
  //     {likecount: prevState.likecount + 1 }
  //   )
  //   });
  // }

  
    dumpLogs(props);

    return (
      <div className={classes.Blogcard} >
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <p>Like Count: <span className={classes.LikeCount}>{props.likecount}</span> </p>
        <button onClick={props.onLikeButtonClick}>Like</button>
      </div>
    )
  
  
  }

export default Blogcards;
