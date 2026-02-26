function Scores({course_name,list_results}){
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
                </div>
            </main>
        </>
    )
}
export default Scores;