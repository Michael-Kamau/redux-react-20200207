import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deletePost, fetchPosts} from "../actions/postActions";

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    deletePost(post) {
        this.props.deletePost(post)
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={deletePost(post)}>Delete Item</button>
            </div>
        ))
        return (
            <div>
                <h1>Todos</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    deletePost:state.posts.item
})

const mapDispatchToProps=()=>{

}
export default connect(mapStateToProps, {fetchPosts,deletePost})(Posts);
