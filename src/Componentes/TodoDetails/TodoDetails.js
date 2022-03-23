import Todo from "../Todo/Todo";

function TodoDetails( props ){
   
   const todoSeleccionado = props.todos.find( (todo, indice) => todo.id === Number(props.match.params.identificador) );

   return(
       <div>
           {
               (todoSeleccionado) ? <Todo todo={todoSeleccionado} /> : <div> Todo no encontrado </div>
           }
       </div>
   );
}

export default TodoDetails;