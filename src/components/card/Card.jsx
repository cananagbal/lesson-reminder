import "./Card.css"


const Card = (props) => {
    const { name, age, image} =props
  return (
    <div className="cards">
    
        <div><img src= {image} alt="html resmi"/></div>
     
            <p>Lesson Name: {name}</p> 
            <p>Lesson Hour: {age} </p>
        </div>  
      
    
  )
}

export default Card
