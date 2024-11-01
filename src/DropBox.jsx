import { useRef } from "react";

function DropBox()
{


    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);
    const handleAddition = () => {
        const num1 = parseFloat(num1Ref.current.value);
        const num2 = parseFloat(num2Ref.current.value);
        const sum=num1+num2;
        resultRef.current.value=sum;
};
return(
    <>
    <h2>Addition of two numbers</h2>
    <label>enter first number</label>
    <input ref={num1Ref} type="number" placeholder="enter first number"></input>
    <label>enter second  number</label>
    <input ref={num2Ref} type="number" placeholder="enter second number"></input>
    <button onClick={handleAddition}>calucate</button>
    <input ref={resultRef} type="text" placeholder="Result" readOnly />
    </>
)
}
export default DropBox;