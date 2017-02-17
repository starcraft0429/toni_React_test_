import './PageThree.scss';
import React, {PropTypes, Component} from 'react';

class PageThree extends Component {

  constructor(props) {
    super(props);
    this.exportData = this.exportData.bind(this);
  }
  exportData(){
    console.log(myform);
  }
  render() {
    return (
      <div className="pageThree">
        <div className="checkImg">
          <img src="./images/check.png" width='200' height='200'/>
        </div>
        <div className="gotoDash">
          <img src="./images/dash.png" width='200' height='60' onClick={this.exportData}/>
        </div>
      </div>
    );
  }
}

export default PageThree;
