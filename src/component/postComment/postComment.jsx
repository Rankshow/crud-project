import React, { useEffect, useState } from 'react'

const PostComment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  // const [show, setShow] = useState();


  const getPostComments = () => {
    // console.log("post id", postId)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then((data) => {
        setComments(data);
        // setShow(true);
         console.log("data", data)
         }
      )
  }

  useEffect(() => {
    getPostComments();
  }, [])


  return (
    <>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title fs-5" id="staticBackdropLabel">
          Comment for Post with id: {postId}
          </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      { 
       comments && (comments.map((comment) => 
       (<div className="card mb-3" key={comment.id}>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">
                {comment.name} {" "}
                </h5>
              <p className="card-text">{comment.email}<small className="text-muted">Last updated 3 mins ago</small></p>
              <p className="card-text">{comment.body}</p>
            </div>
          </div>
        </div>
      </div>
       )))
      }

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
  export default PostComment;