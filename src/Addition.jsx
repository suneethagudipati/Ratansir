import { useRef, useState } from "react";

function App() {
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);
    const [operation, setOperation] = useState("add");
  
    const handleOperation = () => {
      const num1 = parseFloat(num1Ref.current.value);
      const num2 = parseFloat(num2Ref.current.value);
      let result;
  
      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
          break;
        default:
          result = "Invalid operation";
      }
  
      resultRef.current.value = result;
    };
  
    return (
      <>
        <h1>Calculator</h1>
        <input ref={num1Ref} type="number" placeholder="Enter a number" />
        <input ref={num2Ref} type="number" placeholder="Enter another number" />
        
        <select onChange={(e) => setOperation(e.target.value)} value={operation}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        
        <button onClick={handleOperation}>Calculate</button>
        
        <input ref={resultRef} type="text" placeholder="Result" readOnly />
      </>
    );
  }
  
  export default App;