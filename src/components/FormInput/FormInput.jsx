import { INPUT_NAMES } from "../constants";



export default function FormInput( { handleInputChanged , investmentData } ) {


    return(
        <>
        <section>
            <h2>Add a Listing</h2>
            <form>
            <div className="row g-3">
                <div className="col-md-6">
                    <label>Monthly Investment</label>
                    <input 
                        type="number" 
                        placeholder="Monthly Investment"
                        value={investmentData.monthlyInvested} 
                        onChange={(event) => handleInputChanged(INPUT_NAMES['MONTHLY_INVESTED'],event.target.value)} />
                </div>

                <div className="col-md-6">
                    <label>Expected Return Rate(p.a)</label>
                    <input 
                        type="number" 
                        placeholder="Expected Return Rate(p.a)" 
                        value={investmentData.avgRoi} 
                        onChange={(event) => handleInputChanged(INPUT_NAMES['EXPECTED_RETURN_RATE'],event.target.value)}
                        />
                </div>
            </div>
            <div className="col-md-12">
                <label>Time Period (in yrs)</label>
                <input 
                    type="number" 
                    placeholder="Time Period (in yrs)" 
                    value={investmentData.avgTimePeriod} 
                    onChange={(event) => handleInputChanged(INPUT_NAMES['TIME_PERIOD'],event.target.value)}
                    />            
            </div>
            </form>
        </section>
        </>
    )
}