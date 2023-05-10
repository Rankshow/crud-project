import React, { useEffect, useState } from 'react'
import PostComment from './postComment/postComment';
import AddNewPost from '../AddNewPost/AddNewPost';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postCommentId, setPostCommentId] = useState();
  const [post, setPost] = useState({
    title: "",
    body: ""
  })
    // fetching the comment from the Api for ost
    const getPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
        setPosts(data)
         console.log(data)
        }
         )
    }

    // fuction for posting of the comment
    const showHide = (postId) => {
      console.log("id", postId)
      setPostCommentId(postId)
    }

    useEffect(() => {
      getPosts()
    }, [])

 function onAddUser (e) {
  e.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: post.title,
    body: post.body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log("Post is successful", post));
 }

  function handleChange (e) {
    const [name, value] = e.target.value;
     
      setPost(prevState => ({
        post: { ...prevState.post, [name]: value }
      }))
  }

  return (
    <>
    <div className='d-flex justify-content-center'>
      <span></span>
    <button
     type="button" 
     className="btn btn-danger mb-2" 
     data-bs-toggle="modal"
      data-bs-target="#AddNewPost">
        Add New Post
      </button> 
      </div>
        {posts && (posts.map((post) =>
           (<div className="card" key={post.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
           
                  <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop" 
                  onClick={() => showHide(post.id)}>
                    View Comment
                  </button>
                </div> 
              </div>)
        ))}    
        <PostComment postId={postCommentId} />
        <AddNewPost handleChange={handleChange} addUser={onAddUser} post={post} />
    </>
  )
}
export default Posts;

