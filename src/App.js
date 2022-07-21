 
import './App.css';
 

import axios from "axios";
import React from "react";
 
const baseURL = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY";

export default function App() 

{
 

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post[0].title}</h1>
      <p>{post[0].body}</p>
    </div>
  );
}

 
