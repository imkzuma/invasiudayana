import { Container , Row , Col , Button } from "react-bootstrap";
import Qris from "./img/qris.png";
import "./PembayaranForm.css";

export default function PembayaranForm(){
    return(
        <div className = "Pembayaran-Form">
            <Container>
                <Row className = "row-form">
                    <Col lg = {12} md = {12} sm = {12} className = "text-center">
                        <img src = { Qris } width = "50%" />
                    </Col>
                </Row>
            </Container>
        </div>

    );
}