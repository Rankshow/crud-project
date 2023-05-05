import React, { useEffect, useState } from 'react'
import PostComment from './postComment/postComment';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postCommentId, setPostCommentId] = useState();

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
      // setShow(true);
      setPostCommentId(postId)
    }

    useEffect(() => {
      getPosts()
    }, [])

  return (
    <>
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
                <PostComment postId={postCommentId} />
              </div>)
        ))}    
    </>
  )
}
export default Posts;

