import { useState } from 'react';
import { Container , Button , Row , Col } from 'react-bootstrap';
import "./Pembayaran.css";

export default function Pembayaran(){
    const[Pesan , setPesan] = useState("");
    function Submit(){
        alert("")
    }

    return(
        <div className = "Pembayaran">
            <Container>
                <Row className = 'row-header'>
                    <Col className='text-center' lg = {12} md = {12} sm = {12}>
                        <h1> Pembayaran Lomba Invasi </h1> 
                        <p>QRIS INVASI 2022</p>                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}