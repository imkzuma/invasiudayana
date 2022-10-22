import { Navbar , NavDropdown , Nav , Container , Row , Col} from 'react-bootstrap';
import React from 'react';
import '../style/Navbar.css';
import LOGO from '../img/invasi.webp';

let Sticky; let  Navigate;
class NavigationBar extends React.Component{
    componentDidMount(){
        Navigate = document.getElementById('sticky-nav');
        Sticky = Navigate.offsetTop;
        window.addEventListener('scroll' , this.handleSticky);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll' , this.handleSticky);
    }
    handleSticky = () =>{
        window.pageYOffset > Sticky ? Navigate.classList.add('sticky') : Navigate.classList.remove('sticky');
    }

    Home = () =>{
        window.location.replace('/');
    }
    Invasi = () =>{
        window.location.replace('#tentang-kami');
    }
    Lomba = () =>{
        window.location.replace('#lomba');
    }
    Contact = () =>{
        window.location.replace('/ContactPerson');
    }
    Qris = () =>{
        window.location.replace('/QrisInvasi2022');
    }
    render(){
        return(
            <Navbar className='Navigation' id = 'sticky-nav' expand = 'lg' variant='dark' >
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Brand className='navbar-brand'> 
                                <a href="/   ">
                                    <img 
                                        src = { LOGO } 
                                        width = "90"
                                        height = "70" 
                                        className='logo'
                                        alt = 'Invasi Udayana Logo'
                                    ></img>
                                    <span className = 'logo-name'>INVASI 2022</span>
                                </a>
                        </Navbar.Brand>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            
                            <Nav className='Navigation-link'>
                                <Nav.Link className='px-4' onClick = { this.Home }> <p>Home</p> </Nav.Link>
                                <Nav.Link className='px-4' onClick = { this.Invasi }> <p>Invasi</p> </Nav.Link>
                                <Nav.Link className='px-4' onClick = { this.Lomba }> <p>Perlombaan</p> </Nav.Link>
                                <Nav.Link className='px-4' onClick = { this.Qris }> <p>Qris</p> </Nav.Link>
                                
                                <Nav.Link className='px-4' onClick = { this.Contact }> <p>Contact Person</p> </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default NavigationBar;