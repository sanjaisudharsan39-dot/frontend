import React from 'react'
import Task from './Components/Task'
import Factorial from './Components/Factorial'
import Parentdrops from './Components/Parentdrops'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseState from './Components/UseState'
import Routing from './Components/Routing'
import UseEffectHook from './Components/UseEffectHook'
import UseContextHook from './Components/UseContextHook'
import UseParamsHook from './Components/UseParamsHook'
import Login from './Components/Login'
import UseLocationHook from './Components/UseLocationHook'
import UseFormik from './Components/UseFormik'
import DataTableComp from './Components/DataTableComp'
import Crud from './Components/Crud'
import LibraryCrud from './Components/LibraryCrud'
import LibraryCrud2 from './Components/LibraryCrud2'
import Wheather from './Components/Wheather'
import Task2 from './Components/Task2'
import RegistrationForm from './Components/RegistrationForm'
import TodoList from './Components/TodoList'
import UseReducerHook from './Components/UseReducerHook'
import TodoApp from './Components/TodoApp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Task />}></Route>
      <Route path='/path' element={<Factorial />}></Route>  
      <Route path='/props' element={<Parentdrops />}></Route>
      <Route path='/route' element={<Routing />}></Route>
      <Route path='/UseState' element={<UseState />}></Route>       
      <Route path='/UseEffect' element={<UseEffectHook />}></Route>       
      <Route path='/usecontext' element={<UseContextHook />}></Route>       
      <Route path='/params/:id' element={<UseParamsHook />}></Route>       
      <Route path='/loginpage' element={<Login />}></Route>       
      <Route path='/location' element={<UseLocationHook />}></Route>       
      <Route path='/useformik' element={<UseFormik />}></Route>       
      <Route path='/datatablecomp' element={<DataTableComp />}></Route>       
      <Route path='/Crud' element={<Crud />}></Route>       
      <Route path='/librarycrud' element={<LibraryCrud />}></Route>      
      <Route path='/Librarycrud2' element={<LibraryCrud2 />}></Route>      
      <Route path='/project' element={<Wheather />}></Route>      
      <Route path='/Task2' element={<Task2 />}></Route>  
      <Route path='/Regirstation' element={<RegistrationForm />}></Route>    
      <Route path='/todolist' element={<TodoList />}></Route> 
      <Route path='/UseReducer' element={<UseReducerHook />}></Route>    
      <Route path='/todoapp' element={<TodoApp />}></Route>    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
