import { Container , Row , Col , Button } from 'react-bootstrap';
import React from 'react';
import '../style/ContactUs.css';
import Udel from '../img/udel.webp';
import Sandrina from '../img/sandrina.webp';

export default class ContactUs extends React.Component {
    Home = () =>{
        window.location.replace('/');
    }
    Udel(){
        window.open("https://api.whatsapp.com/send?phone=6285239191431");
    }
    udelInstagram(){
        window.open("https://www.instagram.com/dharmagus_/");
    }
    Sandrina(){
        window.open("https://api.whatsapp.com/send?phone=6289602418176");
    }
    sandrinaInstagram(){
        window.open("https://www.instagram.com/sandrinafrn");
    }
    render() {
        return (
            <div className='contact-us'>
                <Container>
                    <p className='paragraph-judul'>Invasi 2022</p>
                    <h1 className='text-judul'>Contact Person</h1>
                    <Row className = 'row-contact'>
                        <Col md = {6}>
                            <img src = {Udel} width = "70%" alt='Agus Dharma Picture'></img>
                        </Col>
                        <Col md = {6} className = 'text-contact'>
                            <h1>Agus Dharma</h1>
                            <h3>Ketua Inovasi Sains 2022</h3>
                            <hr className = 'line-contact'></hr>
                            <h2>Connect with me </h2>
                            <Button className = "btn-contact" onClick={ this.Udel }>Whatsapp</Button>
                            <Button className = "btn-contact" onClick={ this.udelInstagram }>Instagram</Button> 
                        </Col>
                    </Row>
                    <Row className = 'row-contact'>
                    <Col md = {6}>
                            <img src = {Sandrina} width = "70%" alt='Sandrina Picture'></img>
                        </Col>
                        <Col md = {6} className = 'text-contact-two'>
                            <h1>Sandrina</h1>
                            <h3>Humas Inovasi Sains 2022</h3>
                            <hr className = 'line-contact'></hr>
                            <h2>Connect with me </h2>
                            <Button className = "btn-contact" onClick={ this.Sandrina } >Whatsapp</Button>
                            <Button className = "btn-contact" onClick={ this.sandrinaInstagram }>Instagram</Button>
                        </Col>
                    </Row>
                    <Button className = 'btn-home' onClick = { this.Home }>Back To Home</Button>
                </Container>
            </div>
        );
    }
}