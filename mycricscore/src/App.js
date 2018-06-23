import React, { Component } from 'react';
class IdCard extends React.Component {
  render(){
    return(
      <div className="ids">
          <div className="idCard">
            <h4 className="unvName">University Of Melbourn</h4>
            <img  src={window.location.origin + "/imageid.jpg"}/>
            <div className="name">NAME:Adam Gilchrist</div>
            <div className="idNo">ID-No:000000</div>
            <div className="year">YEAR:2016-2017</div>
         </div>
    </div>
    );
  }
}
class IdCardTwo extends React.Component{
  render(){
    return(
      <div className="idCards">
      <IdCard/>
      <IdCard/>
      <IdCard/>
      </div>
    );
  }
}
export default IdCardTwo
