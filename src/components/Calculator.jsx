import './Calculator.css'

import Select from 'react-select'
import { CountyData, BedroomData, quaters} from '../assets/CData'
import { useState, useEffect } from 'react'
import {calculus} from '../helpers/actualCalc'

export const Calculator = () => {

  let [county, setCounty] = useState('');
  let [bedroom, setBedroom] = useState('')

  useEffect(()=>{
   let quaters = document.querySelectorAll('.quater-container');
   for(const quater of quaters){
    let DI= quater.querySelector('.DI');
    let AMI= quater.querySelector('.AMI');
    let top = quater.querySelector('.up-container').style;
    let bottom = quater.querySelector('.down-container').style;
    let QN = quater.querySelector('.quaterNumber').innerText;
    let result = calculus(county, QN, bedroom)
    if(!result){
      return
    }
    if (result && result[1] !==0){
      DI.innerText=`$ ${result[0]}`
      AMI.innerText=`$ ${result[1]}`
      if(window.innerWidth <481){
        top.height= '30vh';
      } else{
        top.height='20vh';
        bottom.height= '10vh';
      }
    } else if (result[1] === 0){
      DI.innerText=`There are not enough properties of this size in the top 25% to create an average`
      AMI.innerText=`There are not enough properties of this size in the top 25% to create an average`
      if(window.innerWidth < 481){
        top.width = '100%';
        bottom.width = '100%'
        top.height = '40vh'
        bottom.height = '100%'
      }else{
        top.height='30vh';
        bottom.height= '20vh';
        top.width ='19vw';
        bottom.width = '19vw'
      }

    }
   }
  }, [county, bedroom])


  const handleChange = (e) =>{
    if(typeof e.value === 'string'){
      setCounty(e.value)
    } else {
      switch(e.value){
      case 1: setBedroom('OBedroom')
              break;
      case 2: setBedroom('TBedrooms')
              break;
      case 3: setBedroom('THBedrooms')
              break;
      case 4: setBedroom('FBedrooms')
              break;
      case 5: setBedroom('FVBedrooms')
              break;
      default: console.log('hi')
              break;
      }
    }
  }
  return (
    <>
    <div className='selects'>
      <Select 
      defaultValue={ {label: 'Your Location +', value: 'XXXX'}}
      options={CountyData}
      onChange ={(e)=>{handleChange(e)}}
      classNamePrefix ='selection'
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "#01b4d2",
          borderRadius: '50px',
          background: '#01b4d2',
          fontWeight: 500,
          fontSize: "2rem",
          color:"#0A0045",
          "@media only screen and (max-width: 320px)":{
            ...baseStyles["@media only screen and (max-width: 320px)"],
            fontSize: "20px"
          }
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: "#0A0045",
          
        })
      }}
      />

      <Select 
      defaultValue={ {label: 'Number Of Bedrooms', value: 'XXXX'}}
      options={BedroomData}
      onChange ={(e)=>{handleChange(e)}}
      classNamePrefix='Selection'
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "#01b4d2",
          borderRadius: '50px',
          background: '#01b4d2',
          fontWeight: 500,
          fontSize: "2rem",
          color:"#0A0045"
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: "#0A0045",
          
        })
      }}
      />
    </div>
    <div className = 'calculator'>
      {
        quaters.map((quaters)=>(
          <div key={quaters.Number} className= 'quater-container' >
            <div className = 'up-container'> 
              <h3 className='quaterNumber'>Q{quaters.Number}</h3>
              <h3>({quaters.Month})</h3>
              <p>{quaters.Description}</p>
              <p className='DI'>$XX,XXX</p>
            </div>
            <div className = 'down-container'> 
            <strong><p>Average Monthly income -<span className='AMI'>$X,XXX</span> </p></strong>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}
