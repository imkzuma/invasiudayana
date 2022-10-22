import { Container , Col , Row} from 'react-bootstrap';
import React from 'react';
import '../style/SosialMedia.css';
import { BsYoutube , BsInstagram , BsEnvelopeFill } from 'react-icons/bs';

class SosialMedia extends React.Component{
    render(){

        function Youtube(){
            window.open('https://www.youtube.com/channel/UCjW1rsItnbMVVkm-p9rcMpw' , '_blank');
        }
        function Instagram(){
            window.open('https://www.instagram.com/invasiudayana/' , '_blank');
        }
        function Email(){
            window.open('mailto:invasiudayana@gmail.com' , '_blank');
        }
        return(
            <div className = 'Sosmed-Content'>
                <Container>
                    <h1 className = 'text-center'>Invasi Sosial Media</h1>
                    <Row className='text-center'>
                        <Col md = { 4 } className = 'content-link'>
                            <a onClick={Youtube}>
                                <BsYoutube className = 'Youtube'/>
                                <span>INVASI UNUD</span>
                            </a>
                        </Col>
                        <Col md = { 4 } className = 'content-link'>
                            <a onClick={Instagram}>
                                <BsInstagram className = 'Instagram'/>
                                <span>invasiudayana</span>
                            </a>
                        </Col>
                        <Col md = { 4 } className = 'content-link'>
                            <a onClick={Email}>
                                <BsEnvelopeFill className = 'Email'/>
                                <span>invasiunud@gmail.com</span>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                    </svg>
                </div>
            </div>
        );
    }
}
export default SosialMedia;