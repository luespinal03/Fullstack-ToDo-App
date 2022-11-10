

const ToDoCard = ({ toDoList, urlEndpoint, update }) => {
    const id = toDoList.id

    const handleSetToDoComplete = async () => {
        update(true)
        const request = await fetch(`${urlEndpoint}/todos/update-one/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // This Content-Type flag is used to tell the server that our request body should be parsed as a JSON object
            },
            body: JSON.stringify({
                isComplete: toDoList.isComplete ? false : true
            }),
        })
        // update needs to be set back to false otherwise it wont listen for anymore changes after the initial one
        update(false)
    }

    return (
        <div className="movie-list-card">
            <h2>{toDoList.title}</h2>
            <p>ID: {toDoList.id}</p>
            <p>Description: {toDoList.description}</p>
            <p>Priority: {toDoList.priority}</p>
            <p>Is Complete:{toDoList.isComplete ? ' Complete' : ' Incomplete'}</p>
            <button onClick={(e) => { handleSetToDoComplete() }}>Toggle Complete</button>
            <p>Creation Date: {toDoList.creationDate.toString()}</p>
            <p>Last Modified: {toDoList.lastModified.toString()}</p>
            <p>Completed Date: {toDoList.completedDate !== null && toDoList.completedDate}</p>
        </div>
    )
}

export default ToDoCard