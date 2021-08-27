import React, { Fragment, useState } from "react";
const EditTodo = ({ todo }) => {
  const [biometric, setBiometric] = useState(todo.biometric);
  const [id, setId] = useState(todo.id);
  //edit description function
  const updateBiometric = async e => {
    e.preventDefault();
    try {
      const body = { biometric };
      const params={id};
      const response = await fetch   (
        `http://localhost:3001/user/biometric/test/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>
      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${todo.id}`}
        onClick={() => setBiometric(todo.biometric)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setBiometric(todo.biometric)}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={biometric}
                onChange={e => setBiometric(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateBiometric(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setBiometric(todo.biometric)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditTodo;