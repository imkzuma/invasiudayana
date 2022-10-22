import { Container , Row , Col , Button } from 'react-bootstrap';
import "../style/CpLomba.css";

export default function CpLKTI(){
    function CpOne(){
        window.open("https://api.whatsapp.com/send?phone=6282144116066");
    }

    function CpTwo(){
        window.open("https://api.whatsapp.com/send?phone=6285156892134");
    }

    function Home(){
        window.location.replace('/');
    }
    return(
        <div className = 'Cp-Lomba'>
            <Container>
                <div className = "Cp-Lomba-Header">
                    <p>INVASI 2022</p>
                    <h1>Contact Person Lomba Podcast</h1>
                </div>
                <Row className = "row-cplomba">
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Desy</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpOne }>Wa: 082144116066 </Button>
                        <Button className = 'btn-cp-lomba'>Line : desyiryntii_</Button>
                    </Col>
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Mahardika</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpTwo }>Wa: 085156892134 </Button>
                        <Button className = 'btn-cp-lomba'>Line : tude_maha128</Button>
                    </Col>  
                    <Button className = 'btn-to-home' onClick = { Home }>Back To Home</Button>
                </Row>
            </Container>
        </div>
    );
}