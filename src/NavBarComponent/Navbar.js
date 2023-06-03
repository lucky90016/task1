

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
    <>
     
  

   
       
               <Navbar bg='danger' expand='sm'>
                <Container>
                    {/* <Navbar.Brand href='#'>
                        <img src='logo192.png' height='30'
                        width='30'
                        className='align-top'></img>
                        &nbsp;
                        MY Website
                    </Navbar.Brand> */}
                     <Navbar.Toggle aria-aria-controls='my-nav'/> {/*use for responsive*/}
                     <Navbar.Collapse id='my-nav'>
                    <Nav className='me-auto fw-bold'> {/*it is use to adjust text*/}
                    <Nav.Link href='/' >Home</Nav.Link>
                        <Nav.Link href='/ragister' >Register</Nav.Link>
                        <Nav.Link href='/login' >Login</Nav.Link>
                        <Nav.Link href='/edit' >Edit</Nav.Link>
                      

                    </Nav>
                    </Navbar.Collapse>

                </Container>
                </Navbar>
              
      
    </>
  );
}

export default ColorSchemesExample;