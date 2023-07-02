import { useState } from "react";

import TextEditor from "./Components/TextEditor";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TextEditor />
    </div>
  );
}

export default App;
