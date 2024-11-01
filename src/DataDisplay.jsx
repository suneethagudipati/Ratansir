function DataDisplay()
{
    const  now=new Date();
    const date=now.getDate();
    // const day=now.getDay();
    const dayIndex=now.getDay();
    const monthIndex=now.getMonth();
    const year=now.getFullYear();
    const days=["sunday","monday","tuesday","wenesday"," thrusday","friday","saturday"];
    const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    return(
        <>
        <p>Day:{days[dayIndex]}</p>
        <p>Date:{date}</p>
        <p>Month:{months[monthIndex]}</p>
        <p>year:{year}</p>
        </>
    )
} 
export default DataDisplay;