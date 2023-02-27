'use client'
import {Box,Button,Container,Flex,SimpleGrid,Menu,MenuButton,MenuList,MenuItem,} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/Logo.webp'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

export default function Header(): JSX.Element {
  return (
     <Box bg='blackAlpha.800' boxShadow='lg'>
      <Container maxW={1400}>
        <SimpleGrid color='black' templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
          <Box>
            <Image src={Logo} alt='panaverse-logo' ></Image>
          </Box>
          <Flex display={{lg:'flex', base:'none'}} placeItems='center' color='black' fontSize='18' fontWeight='semibold' gap={10} textColor='white'>
            <Link href=''>Home</Link>
            <Link href='/Syllabus'>Syllabus</Link>
            <Link href='/explore'>Explore</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </Flex>
          <Box display={{ lg: 'initial', base: 'none' }}>
            <Button mt='10px' size='lg' colorScheme='purple' float='right'>Apply</Button>
          </Box>
          <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
                        <Menu >
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon/>}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>
                                    Home
                                </MenuItem>
                                <MenuItem>
                                    Syllabus
                                </MenuItem>
                                <MenuItem>
                                    Explore
                                </MenuItem>
                                <MenuItem>
                                    About
                                </MenuItem>
                                <MenuItem>
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
        </SimpleGrid>
      </Container>
     </Box> 
  )
}
