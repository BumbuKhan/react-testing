import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = e.target.value;

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}/>
        <br />
        <button>Submit</button>
      </form>
    );
  };
}

export default connect(null, actions)(CommentBox);
