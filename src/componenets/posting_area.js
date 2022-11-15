import React, { useState } from "react";

export default function Posting_area() {
  const handleOnChage = (event) => {
    setText(event.target.value);
  };

  const handleOnclick = () => {
    setText("On clicked function called");
  };
  const [text, setText] = useState("Hlo world");

  return (
    <>
    <div style={{border : '5px black' , borderRadius: '25px' , boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

      <div style={{ marginTop: "100px" }}>
        <div className="mb-3">
          <form action>
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{margin:'20px'}}>
              Need some comrades ??
            </label>
            <div style={{marginLeft: '20px' , marginRight: '20px'}}>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              name="myPost"
              value={text}
              onChange={handleOnChage}
              style={{marginRight : '5px' }}
              />
            </div>
            <button className="btn btn-primary my-3" onClick={handleOnclick} style={{marginLeft :'20px'}}>
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
