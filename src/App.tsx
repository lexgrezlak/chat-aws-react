import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listMessages } from "./graphql/queries";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await API.graphql(graphqlOperation(listMessages));
        console.log(response);
      } catch (err) {
        console.log("error fetching messages", err);
      }
    }

    fetchBlogs();
  }, []);
  return (
    <div className="App">
      <div>messages</div>
      <div></div>
    </div>
  );
}

export default App;
