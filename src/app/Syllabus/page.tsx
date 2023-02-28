'use client'
import { Box, Container, Heading,Center,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import { cards, core } from '../components/database'
import { RevealWrapper } from 'next-reveal'

export default function page() {
  return (
    <>
    <Home title='Syllabus' src='https://t3.ftcdn.net/jpg/01/95/33/40/360_F_195334033_9jmAWjsXY11mgYyLd51XTuauxehHQcPP.jpg'></Home>
      <Box bgColor='grey' pt='30px'>
        <Container maxW={1400}>
          <Center flexDir='column'>
          <Heading size='2xl'>Cource Syllabus</Heading>
          <Text color='white' mt='20px' textAlign='center' px='130px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
          </Center>
          <Center flexDir='column' mt='20px'>
            <Heading>Common In All</Heading>
            <Text color='white' textAlign='center' px='130px'>Every participant of the program will start by completing the following three core courses</Text>
          </Center>

          <Center>
            <Flex mt='30px' gap='20px'>
              {core.map((elem) => ( 
              <RevealWrapper origin='top' delay={200} duration={2500} distance='200px' reset={true} key={elem.id}>
              <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px' >
                <Heading>{elem.heading}</Heading>
                <Text color='white' pt='5px'>{elem.text}</Text>
              </Box>
              </RevealWrapper>
              ))}
            </Flex>
          </Center>
          <Center flexDir='column' mt='50px'>
            <Heading size='2xl'>Specialized Tracks</Heading>
            <Text color='whiteAlpha.800' mt='20px' textAlign='center' px='130px' >After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
          </Center>
        </Container>

        <Container maxW={1400} mt='50px' bgSize='cover' bgAttachment='fixed' bgImage='https://t3.ftcdn.net/jpg/02/66/00/42/360_F_266004248_brGaUW8cSWcQBDt1NJshxSjHxBqTMUMo.jpg'>
          {cards.map((elem)=>(
            <Box pt='40px' key={elem.id}>
              <RevealWrapper origin='top' delay={200} duration={2500} distance='200px' reset={true} >
              <Center flexDir='column' mt='50px'>
                <Heading color={'whiteAlpha.400'} size='xl'>{elem.heading1}</Heading>
                  <Text fontWeight='medium' textAlign='center' color='white' mt='20px'px='130px'>{elem.text1}</Text>
              </Center>
              </RevealWrapper>
              <Center>
                <Flex mt='30px' gap='20px'>
                  <RevealWrapper origin='left' delay={200} duration={2500} distance='150px' reset={true} >
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                  <Heading size='xl'>{elem.heading2}</Heading>
                  <Text fontWeight='medium'  pt='5px'>{elem.text2}</Text>
                  </Box>
                  </RevealWrapper>
                  <RevealWrapper origin='right' delay={200} duration={2500} distance='150px' reset={true} >
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                  <Heading>{elem.heading3}</Heading>
                  <Text fontWeight='medium'  pt='5px'>{elem.text3}</Text>
                  </Box>
                  </RevealWrapper>
                </Flex>
              </Center>
            </Box>
            ))}
        </Container>
        </Box>
    </>
    
 )
}

