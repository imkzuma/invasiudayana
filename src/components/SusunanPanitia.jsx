import { Container , Row , Col, Button } from 'react-bootstrap';
import { useState , useEffect } from 'react';

// Inti
import Udel from "../img/panitia/inti/udel.png";
import Indra from "../img/panitia/inti/indra.webp";
import Dian from "../img/panitia/inti/dian.png";
import Yunita from "../img/panitia/inti/yunita.webp";
// End of Inti

// Koor
import Ayu from "../img/panitia/ayu.png";
import Bintang from "../img/panitia/bintang.png";
import Disa from "../img/panitia/disa.png";
import Gusnan from "../img/panitia/gusnan.png";
import Iik from "../img/panitia/iik.webp";
import Rahman from "../img/panitia/rahman.png";
import Sandrina from "../img/panitia/sandrina.webp";
import Siska from "../img/panitia/siska.webp";
import Tika from "../img/panitia/tika.webp";
// End of Koor

// WebDev
import Joni from "../img/panitia/joni.png";
// End of WebDev

import "../style/SusunanPanitia.css";

export default function SusunanPanitia(){
    function Home(){
        window.location.replace('/');
    }
    return(
        <div className = 'Panitia'>
            <div className = "header-panitia">
                <p>Invasi 2022</p>
                <h1>Susunan Panitia</h1>
            </div>
            
            <Container>
                <Row className = "row-panitia text-center">
                    <h2>Inti Invasi 2022</h2>
                    <Col md = { 3 } className = "col-panitia">
                        <img src = { Udel } alt = "udel" width = "100%" />
                    </Col>
                    <Col md = { 3 } className = "col-panitia">
                        <img src = { Dian } alt = "indra" width = "100%" />
                    </Col>
                    <Col md = { 3 } className = "col-panitia">
                        <img src = { Indra } alt = "dian" width = "100%" />
                    </Col>
                    <Col md = { 3 } className = "col-panitia">
                        <img src = { Yunita } alt = "dian" width = "100%" />
                    </Col>
                </Row>
                
                <Row className = "row-panitia text-center">
                    <h2>Koordinator Invasi 2022</h2>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Ayu } alt = "udel" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Rahman } alt = "indra" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Disa } alt = "dian" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Gusnan } alt = "dian" width = "100%" />
                    </Col>

                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Iik } alt = "udel" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Bintang } alt = "indra" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Sandrina } alt = "dian" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Siska } alt = "dian" width = "100%" />
                    </Col>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Tika } alt = "dian" width = "100%" />
                    </Col>
                </Row>

                <Row className = "row-panitia text-center">
                    <h2>Web Developer</h2>
                    <Col md = { 4 } className = "col-panitia">
                        <img src = { Joni } alt = "udel" width = "100%" />
                    </Col>
                </Row>
                <Button className = "btn-panitia" onClick = { Home }>Back To Home</Button>
            </Container>
        </div>  
    );
}