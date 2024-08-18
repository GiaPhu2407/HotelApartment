import React from "react";
import ContentImage from "./ContentImage";
import ContentProfileRoom from "./ContentProfileRoom";
export async function Content() {
  return (
    <div>
      <ContentImage />
      <ContentProfileRoom />
    </div>
  );
}

export default Content;
