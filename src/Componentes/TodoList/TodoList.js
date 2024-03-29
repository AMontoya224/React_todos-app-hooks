import Todo from "../Todo/Todo";

function TodoList( props ){
    return(
        <div>
            <h3>
                Lista de pendientes
            </h3>
            <div className="lista_todos">
            {
                props.todos.map( (todo, indice) => { 
                    return ( 
                    <Todo todo={todo} actualizarTodo={props.actualizarTodo} key={'todo_' + indice} />
                    );
                })
            }
            </div>
        </div>
    )
}

export default TodoList;