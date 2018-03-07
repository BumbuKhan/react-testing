import React, {Component} from 'react';
import {connect} from 'react-redux';

const CommentList = ({comments}) => {
  const commentList = comments.map((comment) => <li key={comment}>{comment}</li>);

  return(
    <ul className="comment-list">
      {commentList}
    </ul>
  );
}

function mapStateToProps(state) {
  return {comments: state.comments};
}

export default connect(mapStateToProps, null)(CommentList);
