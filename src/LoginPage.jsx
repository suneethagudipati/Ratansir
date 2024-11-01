import { useRef } from "react";

function LoginPage()
{
  const usernameRef=useRef(null);
  const passwordRef=useRef(null);
 
  //function to perform 
  const handleAddition=()=>{
    const username=usernameRef.current.value;
    const password=passwordRef.current.value;
    if (username && password) { // Check if both username and password are entered
      alert("Login successful");
    } else {
      alert("Please enter both username and password");
    }
  };

    
 
  return(
    <>
    <h2>login details</h2>
    <label>username:</label>
    <input ref={usernameRef} type="text" placeholder="enter username"></input>
    
    <br></br>

    <label>password:</label>
    <input ref={passwordRef} type="number" placeholder="enter password"></input>
    
    <br></br>

    <button onClick={handleAddition}>submit</button>
    
    <br></br>
    
    </>
  )

}
export default LoginPage;