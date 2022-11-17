import PostingArea from "./PostingArea";
import PostDisplayer from "./PostDisplayer";
import React from 'react'

export default function Home(probes) {
  return (
    <>
      <PostingArea/>
      <hr/>
      <PostDisplayer array={probes.arrays}/>
    </>
  )
}
