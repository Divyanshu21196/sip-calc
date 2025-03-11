import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import FormInput from './components/FormInput/FormInput';
import Listing from './components/Listing/Listing';
import { INPUT_NAMES, maxTimeSpan } from './components/constants';

function App() {
  const [investedData, setInvestmentData] = useState( {
    monthlyInvested:500,
    avgRoi:9,
    avgTimePeriod:1
  })

  const [hasInvalidData,setInvalidStatus] = useState(false);

  const errorMsg ='Please try with smaller calculation';

 function handleInputDataChanged (inputType,inputValue) {
  
    if(inputType == INPUT_NAMES['TIME_PERIOD'] && inputValue > maxTimeSpan) {
        setInvalidStatus(true);
        return
    }else{
      setInvalidStatus(false);
    }

    setInvestmentData((prevState)=>{
     return { ...prevState,
        [inputType]:inputValue
      }
    })
  }

  return (
    <>
      <Header />
      <FormInput 
        investmentData={investedData} 
        handleInputChanged={handleInputDataChanged}
      />
      {!hasInvalidData && <Listing investmentData={investedData}/>}

      {hasInvalidData && <p>{errorMsg}</p>}
    </>
  )
}

export default App
