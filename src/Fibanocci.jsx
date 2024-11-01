function Fibanocci() {
    const fibSequence = [0, 1]; // Start with the first two Fibonacci numbers

    // Generate the next Fibonacci numbers (you can adjust how many you want)
    for (let i = 2; i < 10; i++) {
        const next = fibSequence[i - 1] + fibSequence[i - 2]; // Sum of the last two numbers
        fibSequence.push(next);
    }
    const fibItems = fibSequence.map((num, index) => 
    <p key={index}>{num}</p>);


    return (
        <>
            <h2>Fibonacci Series</h2>
            <p>{fibItems}</p>
            
        </>
    );
}

export default Fibanocci;
