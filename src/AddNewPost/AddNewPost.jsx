import React, { useState } from 'react'

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

 const addUser = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

 }
  

  return (
    <div>
          <div className="modal fade" id="AddNewPost" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Text</label>
                    <input type="email" className="form-control" placeholder='Enter title of post' id="exampleInputEmail1" aria-describedby="emailHelp"
                    name='title'
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Body</label>
                    <textarea className='form-control' placeholder='Enter body text' rows={5}
                    name='body'
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    >
                    </textarea>
                  </div>

                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary" onClick={() => addUser()}>Submit</button>
                </div>
                </form>
              </div>
                </div>
                
              </div>
            </div>
          </div>
  )
}

export default AddNewPost;