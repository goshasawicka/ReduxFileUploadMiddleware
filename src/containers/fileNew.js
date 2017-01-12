import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';

class FileNew extends Component{
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.actions.createFile(props)
    }

    render (){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create new file</h3>
                <div className="form-group">
                    <label>Name</label>
                    <Field className="form-control" name="file_name" component="input" type="text"/>
                </div>

                <div className="form-group">
                    <label>File</label>
                    <Field className="form-control" name="file_content" component="input" type="file"/>
                </div>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.file_name){
        errors.file_name = 'Enter a name';
    }
    return errors;
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'FileNewForm',
    fields: ['file_name', 'id', 'file_content'],
    validate
})(FileNew));
