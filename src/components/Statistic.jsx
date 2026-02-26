
function Statistic({average,min,max}){
    return(
        <>
        <div className="statistic">
            <p>Average {average.toFixed(2)}</p>
            <p>Min {min}</p>
            <p>Max {max}</p>
        </div>
        </>
    )
}
export default Statistic;