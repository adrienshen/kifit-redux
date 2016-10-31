import React from 'react';

const Comments = React.createClass({

	validateCommentFields(a, c) {
		const minLenTextAllowed = 5;
		return (!a || c.length < minLenTextAllowed) ? false : true;
	},

	validateAuthorName(author) {
		const res = /\s+/.test(author);
		return !res;
	},

	handleSubmit(e) {
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		if(this.validateCommentFields(author, comment)){
			console.log(postId, author, comment);
			if (this.validateAuthorName(author)) {
				this.props.addComment(postId, author, comment);
				this.refs.commentForm.reset();
			} else {
				alert('There should be no spaces in User Name.');
			}
		} else {
			alert('Cmon, you have to say a bit more!');
		}
		this.refs.commentForm.reset();
		this.refs.author.focus();
	},

	render() {
		const postComments = this.props.postComments;
		const removeCommentFn = this.props.removeComment;
		const postId = this.props.params.postId;
		return (
			<div className="comment">
				{this.props.activityComments.map(function(comment, i){
					return (
						<div className="comment" key={i}>
							<p>
								<strong>{comment.user}</strong>
								{comment.text}
								<button className="remove-comment" onClick={removeCommentFn.bind(null, postId, i)}>&times;</button>
							</p>
						</div>
					)
				})}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="your name: " />
					<input type="text" ref="comment" placeholder="your comment: " />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
});

export default Comments;