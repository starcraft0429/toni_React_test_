import './PageOne.scss';
import React, { Component, PropTypes } from 'react';
import Form from "react-jsonschema-form";

const schema = {
  type: "object",
  properties: {
    "email": {
    	"title": "EMAIL IS REQUIRED",
      "type": "string",
      "format": "email"
    },
    "pass1": {
      "title": "PASSWORD",
      "type": "string",
      "minLength": 6
    },
    "pass2": {
      "title": "CONFIRM PASSWORD",
      "type": "string",
      "minLength": 6
    },
  }
}

const uiSchema = {
	"pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
  }
}
const onSubmit = ({formData}) => {
		myform.user_data.email = formData.email;
		myform.user_data.password = formData.pass1;
};
function pwdMatchValidate(formData, errors) {
  if (formData.pass1 !== formData.pass2) {
    errors.pass2.addError("Passwords don't match");
  }
  return errors;
}
class PageOne extends React.Component {
	constructor(props) {
    super(props);
    this.toSecondPage = this.toSecondPage.bind(this);
    this.state = {
                  };
  } 

  toSecondPage() {
  	$($(".btn")[0]).trigger("click");
    this.props.toNextPage();
  }

	render() {
	  return (
	    <div className="pageOne">
	    	<div className="formDiv">
		      <Form schema={schema}
	        uiSchema={uiSchema}
	        validate={pwdMatchValidate}
	        onSubmit={onSubmit}
	        liveValidate={true} />
	      </div>
        <div className="buttonDiv">
          <div className="nextBtnDiv" onClick={this.toSecondPage} >
            Next➔
          </div>
        </div>
	    </div>
	  );
	}
}

export default PageOne;