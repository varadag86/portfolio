import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"
import Navbar from "../components/navbar/navbar.component"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Navbar />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
