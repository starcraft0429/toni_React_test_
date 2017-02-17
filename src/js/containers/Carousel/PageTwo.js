import './PageTwo.scss';
import React, { Component } from "react";

import Form from "react-jsonschema-form";

const schema = {
  type: "object",
  properties: {
    "birthday": {
      "type": "string",
      "format": "date"
    },
    "gender": {
      "type": "string",
      "title": "GENDER",
      "enum": [
        'MALE',
        'FEMALE',
        'UNSPECIFIED'
      ]
    },
    "heared": {
      "type": "string",
      "title": "WHERE DID YOU HEAR ABOUT IS?",
      "enum": [
        'friend',
        'classmates',
        'social'
      ]
    },
  }
}

const uiSchema = {
  "birthday": {
    "ui:widget": "alt-date"
  },
  "gender": {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
}
const onSubmit = ({formData}) => {
    myform.user_data.date_of_birth = formData.birthday;
    myform.user_data.gender = formData.gender;
    myform.user_data.how_hear_about_us = formData.heared;
};

class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.toThirdPage = this.toThirdPage.bind(this);
    this.toFirstPage = this.toFirstPage.bind(this);
    this.state = {

                  };
  }
  toThirdPage() {
    $($(".btn")[2]).trigger("click");
    this.props.toNextPage();
  }
  toFirstPage() {
    this.props.toPrevPage();
  }
  render() {
    return (
      <div className="pageTwo">
        <div className="formDiv">
          <Form schema={schema}
          uiSchema={uiSchema}
          onSubmit={onSubmit}
          liveValidate={true} />
        </div>
        <div className="buttonDiv">
          <div className="prevBtnDiv" onClick={this.toFirstPage}>
            Back
          </div>
          <div className="nextBtnDiv" onClick={this.toThirdPage}>
            Next➔
          </div>
        </div>
      </div>
    );
  }
}
export default PageTwo;
