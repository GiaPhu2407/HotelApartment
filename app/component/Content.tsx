import React from "react";
import ContentHeader from "./ContentHeader";
import ContentRoom from "./ContentRoom";
import ContentText from "./ContentText";
import Profile from "./Profile";
import NewandEvent from "./NewandEvent";
import ContentNewandEvent from "./ContentNewandEvent";
export async function Content() {
  return (
    <div>
      <ContentHeader />
      <ContentRoom />
      <ContentText />
      <Profile />
      <ContentNewandEvent />
      <NewandEvent />
    </div>
  );
}

export default Content;
