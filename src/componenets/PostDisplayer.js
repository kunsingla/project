import React from "react";
import PostContent from "./PostContent";

export default function post_displayer(probes) {
  if (probes.array.length === 0) {
    return (
      <>
        <div
          className=" container row-12 w-100 h-100"
          style={{
            backgroundColor: "#B2B2B2",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <span className="align-middle">
            <p className="text-center fs-1">
              <strong className="mx-auto">No Post Yet</strong>
            </p>
          </span>
        </div>
      </>
    );
  } else {
    return probes.array.map((element) => {
      return <PostContent description={element} />;
    });
  }
}
