import React from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/404.css';

class NotFoundPage extends React.Component{
    render(){
      return(
        <div className = 'not-found'>
          <Container className = 'row-404'>
            <Row>
              <Col md = {12} className = 'text-center'>
                <h1><span>404</span> Not Found :)</h1>
                <h2>Page Not<span> &lt;Found /&gt; </span></h2>
                <p>
                  Halaman Yang anda Cari tidak ditemukan, silakan kembali ke Halaman Utama. <br></br>
                  <Link to="/"> Go to Home </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}
export default NotFoundPage;