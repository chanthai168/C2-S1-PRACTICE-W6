import Statistic from "./Statistic";

function Scores({course_name,list_results}){

    let min = list_results[0].score;
    let max = list_results[0].score;
    let count = 0;
    let average = 0;

    list_results.forEach(result=>{
        count ++;
        let current = result.score;

        if(min < current){
            min = current;
        }

        if(max > current){
            max = current;
        }

        average += result.score;
    })
    if(count == 0) count = 1;

    average = average / count;


    return(
        <>
            <main className="scores-container">
                <div class="scores">
                    <h1>{course_name}</h1>

                    <table>
                        {list_results.map((result,index)=>{
                            return (
                                <tr key={index}>
                                    <th>{result.firstName}</th>
                                    <th>{result.lastName}</th>
                                    <th className={result.score < 50 ? "warning":"pass"}>{result.score}</th>
                                </tr>
                            )
                        })}
                    </table>
                    
                    <Statistic min={min} max={max} average={average} />
                </div>
                
            </main>
        </>
    )
}
export default Scores;