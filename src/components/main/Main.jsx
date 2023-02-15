import "./Main.css"
import { data }from "../../helper/data"
import Card from "../card/Card"


const Main = () => {
  return (
    <div className="main">
         <div className="card-container">
    {data.map((item) =><Card {...item}/>)}
    
     
      
    </div>
    </div>

   
  )
}

export default Main
