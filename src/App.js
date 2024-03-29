import './App.css';
import { useState } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import TodoDetails from './Componentes/TodoDetails/TodoDetails';
import TodoForm from './Componentes/TodoForm/TodoForm';
import TodoList from './Componentes/TodoList/TodoList';


function App() {
  const todosIniciales = [{
    nombre : 'Aprender componentes de tipo clase.',
    status : 'En progreso',
    id : 123
  },
  {
    nombre : 'Aprender eventos en React.',
    status : 'En progreso',
    id : 456
  }];

  const todoNuevoInicial = {
    nombre : '',
    status : '',
    id : 0
  };

  const [nombre, setNombre] = useState( 'Alexander' );
  const [apellido, setApellido] = useState( 'Martinez' );
  const [edad, setEdad] = useState( 25 );
  const [todos, setTodos] = useState( todosIniciales );
  const [nuevoTodo, setNuevoTodo] = useState( todoNuevoInicial );

  const cambiarDatos = () => {
    setNombre( (nombrePrev) => 'Jose' );
    setApellido( (apellidoPrev) => 'Angulo' );
    setEdad( (edadPrev) => edadPrev + 1 );
  }

  const actualizarTodo = ( idTodo, statusNuevo ) => {
    let todosActualizados = [...todos];
    for( let i = 0; i < todosActualizados.length; i ++ ){
      if( todosActualizados[i].id === idTodo ){
        todosActualizados[i].status = statusNuevo;
      }
    }
    setTodos( (todosPrev) => todosActualizados );
  }

  const agregarNuevoTodo = (event) => {
    event.preventDefault();

    setTodos( (todosPrev) => [...todosPrev, nuevoTodo] );
    setNuevoTodo( (todoNuevoPrev) => todoNuevoInicial );
  }

  const actualizaCampoNuevoTodo = ( propiedad, valor ) => {
    setNuevoTodo({
        ...nuevoTodo,
        [propiedad] : valor
    });
  }

  return(
    <BrowserRouter>
        <h2>
          Bienvenido de vuelta {nombre} {apellido}. Edad {edad}
        </h2>
        <ul className="navegacion">
          <li className="opcion">
            <Link to="/"> Dashboard </Link>
          </li>
          <li className="opcion">
            <Link to="/todo/nuevo"> Agregar Todo </Link>
          </li>
          <li className="opcion">
            <Link to="/todos"> Lista de todos </Link>
          </li>
        </ul>
        <button onClick={cambiarDatos}>
          Cambiar Datos
        </button>
        <Switch>
          <Route path="/todo/nuevo" 
               render={ (routeProps) => <TodoForm agregarNuevoTodo={agregarNuevoTodo}
                                              nuevoTodo={nuevoTodo}
                                              actualizaCampoNuevoTodo={actualizaCampoNuevoTodo}
                                              {...routeProps}/>} />
          <Route path="/todos" render={ (routeProps) => <TodoList todos={todos} 
                                                          actualizarTodo={actualizarTodo}
                                                          {...routeProps}/>} />
          <Route path="/todo/:identificador" render={ (routeProps) => <TodoDetails {...routeProps} todos={todos} />} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
