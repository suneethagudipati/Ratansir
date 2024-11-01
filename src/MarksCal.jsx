import { useRef } from "react";

function MarksCal() {
    const mathsRef = useRef(null);
    const scienceRef = useRef(null);
    const socialRef = useRef(null);
    const totalRef = useRef(null);
    const averageRef = useRef(null);

    const handleCalculation = () => {
        const maths = parseFloat(mathsRef.current.value) 
        const science = parseFloat(scienceRef.current.value) 
        const social = parseFloat(socialRef.current.value) 

        const total = maths + science + social;
        const average = total / 3;

        totalRef.current.value = total;
        averageRef.current.value = average;
    };

    return (
        <>
            <h2>Total and Average Calculation</h2>
            <label>Enter Maths Marks</label>
            <input ref={mathsRef} type="number" placeholder="Enter maths marks" /><br />
            <label>Enter Science Marks</label>
            <input ref={scienceRef} type="number" placeholder="Enter science marks" /><br />
            <label>Enter Social Marks</label>
            <input ref={socialRef} type="number" placeholder="Enter social marks" /><br />
            <button onClick={handleCalculation}>Calculate Total and Average</button><br />
            <label>Total:</label>
            <input ref={totalRef} type="text" placeholder="Total" readOnly /><br />
            <label>Average:</label>
            <input ref={averageRef} type="text" placeholder="Average" readOnly /><br />
        </>
    );
}

export default MarksCal;
