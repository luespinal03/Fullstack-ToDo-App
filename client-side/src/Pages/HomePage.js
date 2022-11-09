import React from 'react'
import ToDocard from '../Components/ToDoCard'

const HomePage = (props) => {
    console.log(props)

    return (
        <div>
            <h1>Fullstack ToDo Application </h1>
            {props.toDoList.map((todo, index) => {
                return <ToDocard key={index} toDoList={todo} />
            })}
        </div>
    )
}

export default HomePage