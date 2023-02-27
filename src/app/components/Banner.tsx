import { Box, Button, Container, Flex, Heading,Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/lo4.png'
import { RevealWrapper } from 'next-reveal'


export default function Banner() {
  return (
    <>
    <Box bgAttachment='fixed'bgImage='https://www.rollingstone.com/wp-content/uploads/2022/06/The-Basics-of-Virtual-Real-Estate-in-the-Metaverse.jpg'>
      <RevealWrapper origin='left' delay={200} opacity={0} duration={3000} distance='500px' reset={true}>
       <Container maxW={1400}>
         <Flex  pt={{lg:'150px',base:'30px'}} pb='100px' px={{ lg:'40px', base:'10px' }} display={{ lg: 'flex', base: 'grid' }} >
            <Box flexBasis='50%' >
               <Heading color='black' size='2xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
               <Text>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
               <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
            </Box>
            <Box mt={{lg:'-80px' , base:'0'}} flexBasis='50%'>
              <Image src={logo} alt='panaverse' width='500' height='200' />
            </Box>
         </Flex>
         
       </Container>
       </RevealWrapper>
    </Box>
    <Box bgColor='blackAlpha.700'>
       <Container maxW={1400} >
        <Flex gap={{lg:'100px', base:'10px' }}display={{lg:'flex', base:'grid'}} >
          <Box flexBasis='50%' >
          <RevealWrapper origin='left' delay={200}  duration={1000} distance='500px' reset={true}>
          <Image src='/logo3.png' alt='panaverse' width='400' height='200' />
          </RevealWrapper>
          </Box>
          <Box flexBasis='50%' pt={{lg:'80px', base:'10px'}} px={{ lg: '0', base: '5px' }} >
            <RevealWrapper origin='right' delay={200}  duration={1000} distance='500px' reset={true}>
            <Heading size='2xl'>Program Of Studies</Heading>
            <Text pr='50px' color='white' pt='10px' >This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
            <Button mt='10px' size='lg' colorScheme='purple' >Read More</Button>
            </RevealWrapper>
          </Box>
        </Flex>
       </Container>

    </Box>
    <Box bgColor='blackAlpha.700'>
       <Container maxW={1400} >
        <Flex gap={{lg:'100px', base:'10px' }}display={{lg:'flex', base:'grid'}}>
        <Box pl={{lg:'60px' , base:'5px' }}flexBasis='50%' pt={{lg:'80px' , base:'30px' }} px={{ lg: '0', base: '5px' }} >
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Heading size='2xl'>Program Of Studies</Heading>
            <Text pr='50px' color={'white'} pt='10px' >This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
            <Button mt='10px' size='lg' colorScheme='purple' >Read More</Button>
        </RevealWrapper>
          </Box>
          <Box flexBasis='50%' >
          <RevealWrapper origin='right' delay={200}  duration={1000} distance='500px' reset={true}>
          <Image src='/lo3.png' alt='panaverse' width='400' height='200' />
          </RevealWrapper>
          </Box>
          
        </Flex>
       </Container>

    </Box>
    </>

  )
}
