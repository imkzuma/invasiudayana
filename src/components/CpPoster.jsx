import { Container , Row , Col , Button } from 'react-bootstrap';
import "../style/CpLomba.css";

export default function CpPoster(){
    function CpOne(){
        window.open("https://api.whatsapp.com/send?phone=62895375289546");
    }

    function CpTwo(){
        window.open("https://api.whatsapp.com/send?phone=62895381520553");
    }

    function Home(){
        window.location.replace('/');
    }
    return(
        <div className = 'Cp-Lomba'>
            <Container>
                <div className = "Cp-Lomba-Header">
                    <p>INVASI 2022</p>
                    <h1>Contact Person Lomba Poster</h1>
                </div>
                <Row className = "row-cplomba">
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Desak</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpOne }>Wa: 0895375289546 </Button>
                        <Button className = 'btn-cp-lomba'>Line : dewidntr</Button>
                    </Col>
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Cita</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpTwo }>Wa: 0895381520553 </Button>
                        <Button className = 'btn-cp-lomba'>Line : citakartini</Button>
                    </Col>  
                    <Button className = 'btn-to-home' onClick = { Home }>Back To Home</Button>
                </Row>
            </Container>
        </div>
    );
}