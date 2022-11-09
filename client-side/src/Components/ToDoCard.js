import React from 'react'

const ToDoCard = ({ toDoList }) => {
    // const toDoItem = { props }
    return (
        <div className="movie-list-card">
            <h2>{toDoList.title}</h2>
            <p>ID: {toDoList.id}</p>
            <p>Description: {toDoList.description}</p>
            <p>Priority: {toDoList.priority}</p>
            <p>Is Complete:{toDoList.isComplete ? ' Complete' : ' Incomplete'}</p>
            <p>Creation Date: {toDoList.creationDate.toString()}</p>
            <p>Last Modified: {toDoList.lastModified.toString()}</p>
            <p>Completed Date: {toDoList.completedDate !== null && toDoList.completedDate}</p>
        </div>
    )
}

export default ToDoCard