import { VStack,IconButton,Container,Center,Heading} from '@chakra-ui/react' ;
import TodoList from './components/TodoList';
import AddTodo  from './components/AddTodo';
import {FaSun} from 'react-icons/fa';
import {useState ,useEffect} from 'react';
function App() {
  const initialTodos =[
    {
        id:1,
        body: 'task 1',
    },
    {
        id:2,
        body: 'task 2',
    },
]

const [todos,setTodos] = useState(
  () => JSON.parse(localStorage.getItem('todos')) || []
);
useEffect(()=> {
  localStorage.setItem('todos',JSON.stringify(todos));
},[todos])
function deleteTodo(id){
  const newTodos = todos.filter(todo =>{
    return todo.id!== id
  })
  setTodos(newTodos);
}
function addTodo(todo){
  setTodos([...todos,todo])
}
  return (
    <container>
    <Center bg='#cc2b5e' ml='400px' mr='400px' mt="65" h='450px'>
     <Container bg='white' width='85%' h='370px'>
     <Heading size="40%" mt="20px"color="black">
       Todo App
     </Heading>
       <VStack>
        <IconButton 
        icon ={<FaSun/>} 
        isRound = "true"
        alignSelf="flex-end"></IconButton>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
     </VStack>
    </Container>    
     </Center>
     </container>


  )
}

export default App;
