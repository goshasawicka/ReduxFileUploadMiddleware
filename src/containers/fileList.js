//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';



class FileList extends Component {

    componentWillMount() {
        this.props.actions.getFiles();
    }

    renderFile(){
        return this.props.files.map((curr_file) => {
            var curr_id = curr_file.id;
            return(
                <div key={curr_file.id}>
                    <div className="col-md-3 single-file">
                        <span>{curr_file.file_name}</span><br/>
                        <span>file: {curr_file.file_content}</span><br/><hr/>
                        <img src={`http://localhost:8081/${curr_file.file_content}`} width="100%"/><hr/>
                        <button className="btn btn-danger"
                                onClick={() => this.props.actions.deleteFile(curr_file.id)}>
                            Delete</button>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <span>Files</span>
                <div className="row">{ this.renderFile() }</div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
    return{
        files:state.files.all
    };
}
export default connect(mapStateToProps, mapDispatchToProps )(FileList);
