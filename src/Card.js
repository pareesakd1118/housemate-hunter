
export default function Card({ id, image, name, age }){
    return (
        <div>
          <h1>{name}, {age}</h1>
        <img src={image}/>  
        </div>
    )
}