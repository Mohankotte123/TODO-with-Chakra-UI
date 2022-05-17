import React from 'react'
import {Button ,HStack ,Input,useToast} from '@chakra-ui/react';
import {useState} from "react";
import {nanoid} from 'nanoid';
function Addtodolist({addTodo}) {

  const toast = useToast()
  function handleSubmit(e){
    e.preventDefault();
    if(!content){
      toast({
        title: 'No content.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return
    }
const todo = {
  id: nanoid(),
  body: content,
}
addTodo(todo);
setContent('')
  }
const [content ,setContent] = useState('')
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
    <Input varaiant="filled" placeholder="ADD TASK" 
      value={content} 
    onChange={ (e) => setContent(e.target.value)}/>
    <Button colorScheme="whatsapp" px="8" type="submit">Add</Button>
      </HStack>
    </form>
  )
}

export default Addtodolist
