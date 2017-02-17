import './Carousel.scss';
import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';
import PageThree from './PageThree.js';
import { Line, Circle } from 'rc-progress';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.toNextPage = this.toNextPage.bind(this);
    this.toPrevPage = this.toPrevPage.bind(this);
    this.state = {
                  percent: 1,
                  };
  }
  toNextPage() {
    this.setState({percent: this.state.percent+1});
  }
  toPrevPage() {
    this.setState({percent: this.state.percent-1});
  }
  // setValue(key,val) {
  //   this.setState({key: val});
  // }
  render() {
    let formEl = null;
    let titleText = null;
    let buttonEl = null;
    if(this.state.percent == 1){
      titleText = <div className="title">Signup</div>;
      formEl = <PageOne 
                  toNextPage={this.toNextPage.bind(this)}
                />;
    }
    else if(this.state.percent == 2){
      titleText = <div className="title">Signup</div>;
      formEl = <PageTwo 
                  toNextPage={this.toNextPage.bind(this)} 
                  toPrevPage={this.toPrevPage.bind(this)}
                />;
    }
    else if(this.state.percent == 3){
      titleText = <div className="title">Thankyou!</div>;
      formEl = <PageThree/>;
    }

    return (
      <div id="mainView">
        <div className="innerMain">
          <div className="navDiv">
            <div className="titleDiv">
                {titleText}
            </div>
            <div className="progressDiv">
              <Line percent={this.state.percent*100/3} strokeWidth="1" strokeColor="#4a90e2" strokeLinecap="square"/>
            </div>
          </div>
          <div className="carouselDiv">
            {formEl}
          </div>
        </div>
      </div>
    )
  }
}