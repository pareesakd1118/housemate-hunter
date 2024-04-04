import { useId } from "react"
import Card from "./Card"

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
        <div>
            {allUsers} 
        </div>
       
    )
}