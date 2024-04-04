import { useId } from "react"
import Card from "./Card"
import './City.css'

export default function City({userInfo}){

const allUsers = userInfo.map(user => {
    
            return (
        <Card
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            image={user.image}
        />
    )

    })


    return (
        <div className='roommate-container'>
            {allUsers} 
        </div>
       
    )
}