import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './content';
import Header from './header';
function App() {
  return (
    <div className="App">
      {/* <Navbar expand="lg" className='top'>
  <Container>
    <Navbar.Brand className='topbar'>
    <div className='align'>
    <img src={check} alt="" width="15" height="15" class="d-inline-block align-text-top"></img>
We are open 24/7
<img src={mail} alt="" width="15" height="15" class="d-inline-block align-text-top"></img>
mailto@mail.com
</div>
</Navbar.Brand>
      <Nav className='navbarclass2'>
     
        <img src={linked} alt="" width="15" height="15" class="d-inline-block align-text-top"></img>
        <img src={fb} alt="" width="15" height="15" class="d-inline-block align-text-top"></img>


         <img src={twitter} alt="" width="15" height="15" class="d-inline-block align-text-top"></img>
    
      </Nav>
     
  </Container>
</Navbar>


<Navbar expand="lg">
  <Container>
    <Navbar.Brand className='logoss'>
    <img src={logos} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
Bisnes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className='navbarclass'>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Project</Nav.Link>
        <Nav.Link>Blog</Nav.Link>
        <Nav.Link>Services</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>


<div className='headercontent'>

</div> */}
<Header/>
<Content/>
    </div>
  );
}

export default App;
