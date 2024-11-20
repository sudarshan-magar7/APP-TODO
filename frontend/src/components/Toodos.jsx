export function Toodos({ todos }) {

    return <div>
        {todos.map(function (toodos) {
            return <div>
                <h1 style={{ margin: 10 }}>{toodos.title}</h1>
                <h2 style={{ margin: 10 }}>{toodos.description}</h2>
                <button style={{ margin: 10, padding: 10 }}>{toodos.completed == true ? "Completed" : "Mark As Complete."}</button>
            </div>
        })}
    </div>
}