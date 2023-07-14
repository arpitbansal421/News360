import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Newsitem =(props)=> {

  
    let {title,description,imageurl,newsurl,author,date}=props;
    return (
      <div className="container my-3">
        <div className="card">
  <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2023/06/Artemis_Accords_Graphic_WEB_062223-770x433.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,45):""}..</h5>    <p className="card-text">{description?description.slice(0,88):""}...</p>
    <p class="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl?newsurl:""} target="_blank"className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        
      </div>
    )
  }


export default Newsitem
