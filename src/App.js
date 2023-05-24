import React from "react";

function addQuestionMark(str) {
  if (str.endsWith("?")) {
    return str;
  } else {
    return str + "?";
  }
}

function App() {
  const originalString = "Hello, how are you?";
  const modifiedString = addQuestionMark(originalString);

  return (
    <div>
      <p>Original String: {originalString}</p>
      <p>Modified String: {modifiedString}</p>
    </div>
  );
}

export default App;
