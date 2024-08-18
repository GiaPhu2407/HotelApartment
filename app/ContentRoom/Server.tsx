import React from "react";
import Header from "./HeaderRoom";
import Content from "./Content";
import Footer from "./Footer";
export async function Server() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Server;
