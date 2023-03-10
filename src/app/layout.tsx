'use client'
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Instructer from "./components/Instructer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Header/>
          {children}
          {/* <Instructer/> */}
          <Footer/>
          </ChakraProvider>
        </body>
    </html>
  )
}
