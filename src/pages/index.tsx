import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"



const IndexPage: React.FC<PageProps> = () => {
  const [isActive, setisActive] = React.useState(false);
  return (

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Documentation</a>
        </div>
      </div>
    </nav>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
