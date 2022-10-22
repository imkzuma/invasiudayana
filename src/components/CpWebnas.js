import { Container , Row , Col , Button } from 'react-bootstrap';
import "../style/CpLomba.css";

export default function CpWebnas(){
    function CpOne(){
        window.open("https://api.whatsapp.com/send?phone=6285954110191");
    }

    function CpTwo(){
        window.open("https://api.whatsapp.com/send?phone=6289607800526");
    }

    function CpThree(){
        window.open("https://api.whatsapp.com/send?phone=6282147152431");
    }

    function Home(){
        window.location.replace('/');
    }
    return(
        <div className = 'Cp-Lomba'>
            <Container>
                <div className = "Cp-Lomba-Header">
                    <p>INVASI 2022</p>
                    <h1>Contact Person Lomba
                        <br /> Webinar dan Talkshow Invasi
                    </h1>
                </div>
                <Row className = "row-cplomba">
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Ilham</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpOne }>Wa: 085954110191 </Button>
                        <Button className = 'btn-cp-lomba'>Line : gael1911</Button>
                    </Col>
                    <Col md = { 5 } className = "col-cplomba">
                        <h1>Trisna</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpTwo }>Wa: 089607800526 </Button>
                        <Button className = 'btn-cp-lomba'>Line : aritrisnad </Button>
                    </Col>  
                </Row>
                <Row className = "row-cplomba">
                    <Col md = { 5 } className = "col-cplomba m-auto mb-4">
                        <h1>Ami</h1>
                        <p>Contact Person Panitia</p>
                        <Button className = 'btn-cp-lomba' onClick = { CpThree }>Wa: 082147152431 </Button>
                        <Button className = 'btn-cp-lomba'>Line : astriutami2</Button>
                    </Col>
                    <Button className = 'btn-to-home' onClick = { Home }>Back To Home</Button>
                </Row>
            </Container>
        </div>
    );
}