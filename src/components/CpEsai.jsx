import { Container , Row , Col , Button } from 'react-bootstrap';
import "../style/CpLomba.css";

export default function CpLKTI(){
    function CpOne(){
        window.open("https://api.whatsapp.com/send?phone=6283115379075");
    }

    function CpTwo(){
        window.open("https://api.whatsapp.com/send?phone=6287754294425");
    }

    function Home(){
        window.location.replace('/');
    }
    return(
        <div className = 'Cp-Lomba'>
            <Container>
                <div className = "Cp-Lomba-Header">
                    <p>INVASI 2022</p>
                    <h1>Contact Person Lomba Esai</h1>
                </div>
                <Row className = "row-cplomba">
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Diantari</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpOne }>Wa: 083115379075 </Button>
                        <Button className = 'btn-cp-lomba'>Line : srdntari11</Button>
                    </Col>
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Lestari</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpTwo }>Wa: 087754294425 </Button>
                        <Button className = 'btn-cp-lomba'>Line : dewilestariayu15</Button>
                    </Col>  
                    <Button className = 'btn-to-home' onClick = { Home }>Back To Home</Button>
                </Row>
            </Container>
        </div>
    );
}