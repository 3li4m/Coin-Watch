import React, {useState} from 'react'
import "./NavigationBar.css"
import {Link, NavLink} from "react-router-dom"
import { MenuItem, Select } from '@mui/material'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import LanguageIcon from '@mui/icons-material/Language';
import { textAlign } from '@mui/system'

const NavigationBar = () => {  
  const [currency, setCurrency] = useState("AUD");

  const changeCurrency = (e) => {
    setCurrency(e.target.value)
  }

  const [toggleHamgburger, setHamburger] = useState();

  const hamburgerClick = () =>{
    setHamburger(!toggleHamgburger);
  }
  
  return (
    <div>
        <header className='desktop-navigation'>
        <p style={{color: "red", textAlign:"center"}}>WORK IN PROGRESS</p>
          <Navbar>
            <Container className="nav-container">
              <br></br>
              <Link to="/"><Navbar.Brand>Coin<span className='second--color__title'>Watch</span></Navbar.Brand></Link>
              <Nav>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>Search</Nav.Link>
                <Nav.Link href='#'>Trade</Nav.Link>
              </Nav>

              <Nav.Item className="justify-content-end">
              <LanguageIcon />
              <div className='divider' />
              <Select className="currency-selector" variant='standard' value={currency} onChange={changeCurrency}>
                <MenuItem className="currency--item" value={"AUD"}>AUD</MenuItem>
                <MenuItem className="currency--item" value={"USD"}>USD</MenuItem>
                <MenuItem className="currency--item"value={"RUB"}>RUB</MenuItem>
              </Select>
              <Button>Login</Button>
              </Nav.Item>

              <div>
                <button className={toggleHamgburger ? "nav-hamburger is-active" : "nav-hamburger"} onClick={hamburgerClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

            </Container>
          </Navbar>

          {/* <Navbar className={toggleHamgburger ? "mobile-nav is-active" : "mobile-nav"}>
            <div className='centerObjects'>
              <Nav>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>Search</Nav.Link>
                <Nav.Link href='#'>Trade</Nav.Link>
              </Nav>
            </div>
          </Navbar> */}

        </header>
    </div>
  )
}

export default NavigationBar