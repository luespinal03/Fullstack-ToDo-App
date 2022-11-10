import React from 'react'
import ToDocard from '../Components/ToDoCard'

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const HomePage = (props) => {
    console.log(props)

    return (
        <div>
            <h1>Fullstack ToDo Application </h1>
            {props.toDoList.map((todo, index) => {
                return <ToDocard key={index} toDoList={todo} urlEndpoint={urlEndpoint} refetch={props.refetch} />
            })}
        </div>
    )
}

export default HomePage