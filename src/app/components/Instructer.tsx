import { Box, Container, Flex, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import {data} from '../components/database'
import RevealWrapper from 'next-reveal/dist/esm/components/RevealWrapper'

export default function Instructer() {
  return (
        <Box>
            <Container maxW={1400}>
                <center>
                    <Heading>Our Instructer</Heading>
                </center>
              <RevealWrapper origin='top' delay={200}  duration={1000} distance='500px' reset={true}>  
                <Flex flexDir='row'>
                    {data.map((ins)=>(
                        <Box key={ins.id}>
                           <center>
                             <Image borderRadius='full' width={90} height={90} src={ins.src}/>
                           </center>
                           <Heading textAlign='center' size='md'>{ins.heading}</Heading>
                            <Text px='30px' fontSize='sm' textAlign='center'>{ins.text}</Text>
                        </Box>
                         ))}
                </Flex>
             </RevealWrapper>
            </Container>
        </Box>
  )
}
