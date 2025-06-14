import "./style.css"
// import photo from "./accept/img"
export default function App(){
  return (
    <>
      <img src="./src/img/Group 1 (1).svg" alt="icon" className='icon'/>
      <div className='section-1'>
        <hr />
        <h1>Popular wordpress plugins</h1>
        <div className="container1">
          <div className="card">
            <img src="./src/img/image 43.png" alt="picture" className='cardImg'/>
            <h4>RubIcon</h4>
            <p>$100</p> 
            <button className='but'>Buy</button>
          </div>
          <div className="card">
            <img src="./src/img/image 39.png" alt="picture" className='cardImg'/>
            <h4>Сamera</h4>
            <p>$200</p> 
            <button className='but'>Buy</button>
          </div>
          <div className="card">
            <img src="./src/img/image 36.png" alt="picture" className='cardImg'/>
            <h4>G Generator</h4>
            <p>$1000</p> 
            <button className='but'>Buy</button>
          </div>
          <div className="card">
            <img src="./src/img/image 38.png" alt="picture" className='cardImg'/>
            <h4>Invoice Creator</h4>
            <p>$100</p> 
            <button className='but'>Buy</button>
          </div>
        </div>
        <hr />
        <div className="footer">
          <h3>© DUGIMAIL. All rights reserved. </h3>
          <p className='pFoot'><span>If you have any questions please contact us sabrihakuli@outlook.com</span>sabrihakuli@outlook.com</p>
          <img src="./src/img/Social Media Icons.svg" alt="" className='imgFooter'/>
        </div>
      </div>
    </>
  )
}