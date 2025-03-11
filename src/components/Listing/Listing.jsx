import getInvestedData from "../helper"


export default function Listing ( { investmentData } ) {
    
    const resultData  = getInvestedData(investmentData);

    return(
        <>
        <section>
        <h2>Your Investment Looks Like This!.....</h2>
        <table className="table table-striped">
            <thead className="table-primary">
                <tr>
                    <th>Time Period</th>
                    <th>Monthly Invested Annual Sum</th>
                    <th>Interest Gained</th>
                    <th>Total Sum</th>
                </tr>
            </thead>
            <tbody>
            {resultData.map(invesement=><tr key={invesement.timePeriod}>
                <td>{invesement.timePeriod}</td>
                <td>{invesement.totalSum}</td>
                <td>{invesement.roiAssured}</td>
                <td>{invesement.totalSumAfterGained}</td>
                </tr>
                )}
            </tbody>
            </table>
        </section>
    </>
    )

}