import React from "react";

export default function post_content(probes) {
  return (
    <>
      <div
        className="container card mb-5"
        style={{
          
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="card-body">
          <p className="card-text">{probes.description}</p>
          <button disabled={true} type="button" className="btn btn-primary-outline btn-sm">
            Likes: <span className="badge text-bg-secondary">4</span>
          </button>
        </div>
      </div>
    </>
  );
}
