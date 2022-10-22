import { Container , Row , Col , Button } from 'react-bootstrap';
import "../style/CpLomba.css";

export default function CpLKTI(){
    function CpOne(){
        window.open("https://api.whatsapp.com/send?phone=6285738913760");
    }

    function CpTwo(){
        window.open("https://api.whatsapp.com/send?phone=6289607800526");
    }

    function Home(){
        window.location.replace('/');
    }
    return(
        <div className = 'Cp-Lomba'>
            <Container>
                <div className = "Cp-Lomba-Header">
                    <p>INVASI 2022</p>
                    <h1>Contact Person Lomba LKTI</h1>
                </div>
                <Row className = "row-cplomba">
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Gangga</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpOne }>Wa: 085738913760 </Button>
                        <Button className = 'btn-cp-lomba'>Line : gangga_3002</Button>
                    </Col>
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Desy Muliani</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpTwo }>Wa: 089607800526 </Button>
                        <Button className = 'btn-cp-lomba'>Line : luhdesymuliani212</Button>
                    </Col>  
                    <Button className = 'btn-to-home' onClick = { Home }>Back To Home</Button>
                </Row>
            </Container>
        </div>
    );
}