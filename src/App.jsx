
import { useState } from 'react'
import './App.css'
import { countyListPart1, countyListPart2, familiar, faqs, objective, parts} from './assets/Data'
import { Calculator } from './components/Calculator'
import { PButton } from './components/PButton'
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function App() {
    let [selected, setSelected] = useState(null)

  const toggle = i =>{
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <>
      <header>
      <div id = 'callToAction'>        
        <img src= '/images/WF TRANSPARENT.png' alt = 'Water Front Property Management Logo' id='headerLogo'/>
        <PButton id='first' className='link' content='SPEAK WITH ME'/>
      </div>
      <div className='questionContainer'>
      <h3 className='question'>Have a Water Front Rental on Lake Simcoe?</h3>
      </div>
      <div className='questionContainer'>
        <h3 className='answer'>Watch This Video And Learn How We Increase The Revenue Of Water Front Rentals By 30 -85 %</h3>
      </div>
      <div className='videoPlaceholder'>
        <img src='/images/placeHolder.png' alt='Placeholder for the video' className='placeHolder'/>
      </div>
      </header>
      <main>
      <article id='FirstSection'>        
        <div id='secondCallToAction'>
          <h3 className='Description'>Get The Truly Passive Income You Deserve</h3>
          <PButton className='link' id='second' content='SPEAK WITH ME'/>
        </div>
        <div id='ServiceCall'>
          <h2>WORLD-CLASS SERVICE, RIGHT ON LAKE SIMCOE</h2>
          <h3>We Serve <strong>ALL</strong> Water Front Properties On Lake Simcoe, Find Your County Below</h3>
        </div>
      </article>
      <article id='SecondSection'>
      <img src='/images/Watermark.svg' aria-hidden='true'  id='watermark'/>
      <div id='countyList'>
      <div id='counties1'>
          {countyListPart1.map((county)=>(
            <div key={county.num} className='countyDiv' id={county.id} >
              <img src ={county.src} alt={county.Alt} id={county.id} className={county.className} />
              <h2>{county.id !== 'OroMedonte'? county.id: 'Oro Medonte'}</h2>
            </div>
          ))
          }
        </div>
        <div id='counties2'>
        {countyListPart2.map((county)=>(
            <div key={county.num} className='countyDiv' id={county.id} >
              <img src ={county.src} alt={county.Alt} id={county.id} className={county.className} />
              <h2>{county.id}</h2>
            </div>
          ))
          }
        </div>
      </div>
        <div id='calculator'>   
          <h2>ARE YOU LEAVING CASH ON THE TABLE?</h2>
          <p>This calculator Will Show you The Average Quaterly Income For the properties In the Top 25% in your Area.</p>
          <p>Select Your Location & Select How Many Bedrooms Your Property Has (Not Total Beds)</p>
          <p>**Data is from the 2022-2023 aggregated data by <strong>AirDNA</strong></p>
          <Calculator />
        </div>
      </article>
      <article id='thirdSection'>
        <h2>How do You Compare?</h2>
        <h3 className= 'fooH3'>{"Don't "}Shoot The Messenger, But If {"You're "}Making Less Than These Numbers, {"You're "} Losing, Badly</h3>
        <h3 className= 'fooH3' id='oH3'>If {"You're "} Making More Than These Numbers, Good. As A Water Front Rental, You Should Be. The Reality Is, You Should Be Far Above These Numbers.</h3>
        <p>Not Happy With How You Stack Up?</p>
        <p>{"Let's "} Make A Gameplan To Get You To The Top.</p>
        <PButton className='link' content='SPEAK WITH ME' id='third'/>
      </article>
      <article id='forthSection'>
        <h2>Waterfront is a locally owned & operated Management Company {"That's"} Designed For People With Water Front Rentals On Lake Simcoe</h2>
        <h3>Watch For A Quick Overview Of The Process</h3>
        <div className='videoPlaceholder'>
        <img src='/images/placeHolder.png' alt='Placeholder for the video' className='placeHolder'/>
      </div>
          <div className = 'container'>
            <div className='familiar'>
              <div className='speech bottom'>
                <h2>Does This Sound Familiar?</h2>
              </div>
                <ul className='list'>
                {familiar.map((familiar, index)=>(
                  <li key={index} className='familiarity' >
                    {familiar}
                  </li>
                    ))}
                </ul>
                <div>              
                  <img src='/images/Little Thing.png' aria-hidden= 'true'  className='LT'/>
                <h2 id='fooH2'>{"Let's "} Get Here...</h2>
            </div>
              <ul className='list'>
                {objective.map((objective, index)=>(
                  <li key = {index} className ='objective' >
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
           
            <div className='about'>
              {parts.map((part, index)=>(
                <div key={index} className='box'>
                  <h2>{part.title}</h2>
                  <p>{part.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='oContainer'>
            <h2>Ready For Truly Passive Income? So Are We. {"Let's "} Talk.</h2>
            <PButton className='link' content='SPEAK WITH ME' id='forth'/>
            </div>
            &nbsp;
          </div>
      </article>
      <article id='FiveSection'>
                    &nbsp;
        <h2> {"FAQ's"} </h2>
        <div className='accordion'>
        {faqs.map((faq, index)=>(
          <div className='item' key = {index}>
            <div className='title' onClick= {()=> toggle(index)}>
            <h2>{faq.question}</h2>
              <span style={{fontSize: '4rem'}}>{selected === index? '-': '+'}</span>
            </div>
            <div className={selected === index? 'content show':'content'}>
            {faq.answer}
            </div>
          </div>
              ))}
        </div>
        <div className = 'LastCall'>
          <h2>Still Have Questions? Perfect! Book A Call And {"We'll "} Answer Them</h2>
          <PButton className='link' content='SPEAK WITH ME' id='fifth'/>
        </div>
      </article>
      </main>
      <footer>
        <div id='focon'>
          <div>
            <img src= '/images/WF TRANSPARENT.png' alt = 'Water Front Property Management Logo' id='footerLogo'/>
          </div>
          <div id='reviewContainer'>
            <h2>Reviews</h2>
            <div>
            <img src= '/images/trustpilot.webp' alt = 'Trust Pilot Five Stars' id='TrustPilot'/>
            <img src ='/images/G.png' alt = 'Google' id=  'G'/>
            </div>
          </div>
          <div id ='socialsContainer'>
            <h2 id='social-title'>Socials</h2>
            <div id='socials'>
              <div className='iconContainer'>
              <FaYoutube className='icon' id='firstIcon'/>
              </div>
              <div className='iconContainer'>
              <FaInstagram className='icon'/>
              </div>
              <div className='iconContainer'>
              <FaLinkedinIn  className='icon' id='lastIcon'/>
              </div>
            </div>
          </div>
        </div>
        <PButton className='link' content='Click Here To Work With Us' id='final'/>
      </footer>
    </>
  )
}

export default App
