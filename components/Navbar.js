import React, { useState } from 'react'
import Link from 'next/link'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggler = () => setIsOpen(!isOpen)

  return (
    <Navbar dark expand="md" className="bg-dark mb-4">
      <Container>
        <NavbarBrand href="/">BitzzPrice</NavbarBrand>
        <NavbarToggler onClick={toggler} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about">
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
