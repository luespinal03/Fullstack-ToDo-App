

const ToDoCard = ({ toDoList, urlEndpoint, refetch }) => {
    const id = toDoList.id

    // this controls whether the todo is completed or not
    const handleSetToDoComplete = async () => {
        refetch(true)
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
        refetch(false)
    }


    // this function controls the ability to delete a todo
    const handleDeleteToDo = async () => {
        refetch(true)
        const request = await fetch(`${urlEndpoint}/todos/delete-one/${id}`, {
            method: "DELETE",
        })
        refetch(false)
    }


    return (
        <div className="movie-list-card">
            <h2>{toDoList.title}</h2>
            <p>ID: {toDoList.id}</p>
            <p>Description: {toDoList.description}</p>
            <p>Priority: {toDoList.priority}</p>
            <p>Is Complete:{toDoList.isComplete ? ' Complete' : ' Incomplete'}</p>
            <button onClick={(e) => { handleSetToDoComplete() }}>Toggle Complete</button>
            <br />
            <button onClick={(e) => { handleDeleteToDo() }}>Delete</button>
            <p>Creation Date: {toDoList.creationDate.toString()}</p>
            <p>Last Modified: {toDoList.lastModified.toString()}</p>
            <p>Completed Date: {toDoList.completedDate !== null && toDoList.completedDate}</p>
        </div>
    )
}

export default ToDoCard