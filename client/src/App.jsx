import { useState } from "react";
import "./App.css"
import Chat from "./components/chat/chat"
import Join from "./components/join/join"

const App = () => {
  const [chatVisibility, setChatVisibility] = useState(true)
  return (
    <>
    <div className="App">
      {chatVisibility ? <Chat/> :<Join/>}
    </div>
    </>
    );
};

export default App