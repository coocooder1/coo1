import { Link,Routes,Route } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Forme from './Forme'
import Register from './components/RRegister';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
            React Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home
              </Nav.Link>
              <Nav.Link href='/menu' className=' text-uppercase'>Menu
              </Nav.Link>
              <Nav.Link href='/about' className=' text-uppercase'>About
              </Nav.Link>
              <Nav.Link href='/contact' className=' text-uppercase'>Contact
              </Nav.Link>
              <Nav.Link href='/forme' className=' text-uppercase'>Form
              </Nav.Link>
              <Nav.Link href='/register' className=' text-uppercase'>register
              </Nav.Link>


            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/forme' element={<Forme/>}></Route>
        <Route path='/register' element={<Register/>}></Route>


      </Routes>
      
      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'></p>
      </footer>
    </div>
  );
}

export default App;
