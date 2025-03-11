import { maxTimeSpan } from "./constants";

export default function getInvestedData({monthlyInvested,avgRoi,avgTimePeriod}){


    let result = [];

    if(avgTimePeriod > 0 && avgTimePeriod < maxTimeSpan){

        let noOfYears=1

        while (noOfYears <= avgTimePeriod){

            let obj = {
                'timePeriod':`${noOfYears} yrs`,
                'totalSum':parseInt(monthlyInvested)*noOfYears*12, 
                'roiAssured':((noOfYears*12)*(parseInt(monthlyInvested) * avgRoi/100)), 
                'totalSumAfterGained': ((noOfYears*12)*(parseInt(monthlyInvested) * avgRoi/100))+( parseInt(monthlyInvested)*(noOfYears*12))
            };

            result.push(obj);
            noOfYears++
        }


    }
    return result

}

