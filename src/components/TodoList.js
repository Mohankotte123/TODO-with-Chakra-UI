import React from 'react'
import {HStack, VStack,Text,IconButton, StackDivider, Spacer} from '@chakra-ui/react' ;
import {FaTrash} from "react-icons/fa";
function todolist({todos,deleteTodo}) {
    
  return ( 
    <VStack
    divider ={<StackDivider/>}
    borderColor="gray.400"
    borderwidth="1px"
    p="4"
    borderRadius="lg"
    w="100%"  
    maxW={{base: '90vw',sm: '80vw',lg: '50vw', xl: '40vw'}}
    alignItems ="stretch"
    >
      {todos.map(todo=>(
          <HStack overflow="auto"
          css={{
            '&:: -webkit-scrollbar':{
              width: '4px',
            },
            '&::-webkit-scrollbar-track':{
              width: '6px',
            },
            '&:;-webkit-scrollbsr-thumb':{
              background: scrollbarColor,
              borderRadius: '24px',
            },
          }}
          key={todo.id}>
            <Text>
            {todo.body}
            </Text>
           <Spacer />
          <IconButton icon={<FaTrash/>}
          isRound = "true"
          onClick={()=> deleteTodo(todo.id)}
          />
          </HStack>
      ))}
    </VStack>
  )
}

export default todolist
