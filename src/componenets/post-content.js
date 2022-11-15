import React from "react";
import "./post_content.css"

export default function post_content(probes) {
  return (
    <>
      <div className="card mb-3" id="bg_23">
        <div className="card-body">
          <p className="card-text">
            {probes.description}
          </p>
          <a href="#" className="btn btn-sm btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
