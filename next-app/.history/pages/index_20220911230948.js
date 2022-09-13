import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import React from "react";

//import { Button,Flex,ListItem,UnorderedList,Text,Input} from '@chakra-ui/react';
const Home = ({ todolists}) => {
  const [items,setItems] = useState([todolists])
    //const [todoItem,setTodoItem] = useState("")

    const[todoItem,setTodoItem] = React.useState('')
    
   
 /* const Index = () => {

  

    const [todos,setTodos] = useState('')
    const [todo,setTodo] = useState([])

    const handleChange = (e) =>{
      e.preventDefault()

      setTodos(e.target.value)
    }
    const handleSubmit = (e) =>{
      e.preventDefault()

      setTodo(
        todos,
        ...todo
        )
    }
*/

const handleAdd = () =>{
  /*
  if (todoItem){ 
    setItems([{
      
      //id: todolists.id,
      name: todoItem,
      created_at: new Date(),
      archive: false,
    },
    ...items
    ]);
    console.log(items)
   
    setTodoItem('');
      

  
  }*/ 
   var student = new FormData();
        student.append('todoItem',todoItem)
     var  options = {
      method:"POST",
      body:student
    }
   fetch("http://localhost:3259/todolists",options)
   .then(res=>res.json())
   .then(resp=>console.log(resp))



};
  return (
    <ul>     
      <h1 >TODOLIST</h1> 
      
      <input type="text"  
      value={todoItem} 
      onChange={(e) => setTodoItem(e.target.value)}/>
      <button 
        type="submit" 
        className="btn btn-success" 
        onClick={handleAdd} >Success   
      </button>

        <table>
          <tr>
            <th>List</th>
            <th>action</th>
          </tr>
          {todolists.map((items) => (
          <tr>
            <td key={items.id}>
              {items.name}
              </td>
            <td>{items.id}</td>
          </tr>
          ))}
        </table>
      

    </ul>
   /* <Flex
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100%"
    flexDirection="column"
    >
      <UnorderedList>

        {tasks.map((task) => {
          return(
            <ListItem key={task.id}>
              {task}
              <Button 
              ml ={10} 
              onClick={()=> {
              removeItem(task);
              }}
              >
              removeItem
              
              </Button>

            </ListItem>
          )
        })
      }
      </UnorderedList>
    </Flex>*/
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  
   const res = await fetch('http://localhost:3259/todolists')
   const todolists = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    
    props: {
      todolists,
    },
  }

  
}
export  default Home;

