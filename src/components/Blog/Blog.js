import React from "react";
import "./Blog.css";

const Blog = (props) => {

    const hederStyle = {
        backgroundColor: 'purple',
        color: 'white',
        padding: '5px'
    }
  return (
    <div>
      <article className="blog">
        <h1 style={hederStyle}>{props.heading}</h1>
        <h4>{props.author}</h4>
        <p style={{color: 'white', backgroundColor: 'black'}} >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          pariatur, vel ad voluptates odio officia ipsum unde modi iusto
          architecto debitis doloribus enim animi laborum eveniet ea aliquid
          quibusdam veniam repellendus cupiditate odit illo repellat.
        </p>
      </article>
    </div>
  );
};

export default Blog;
