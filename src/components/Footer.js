import {Container , Row , Col , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

function FooterContent(){
        function Udel(){
            window.open("https://api.whatsapp.com/send?phone=6285239191431");
        }

        function Sandrina(){
            window.open("https://api.whatsapp.com/send?phone=6289602418176");
        }

    return(
        <div className='Footer'>
            <Container>
                <Row className = 'Row-footer'>
                    <Col md = { 3 }>
                        <h3>Sosial Media</h3>
                        <p>
                            <a href = "/Youtube">
                                <b>Youtube: </b> INVASI UNUD
                            </a> <br></br> 

                            <a href = "/Instagram">
                                <b>Instagram: </b>invasiudayana
                            </a><br></br> 

                            <a href = "/TiktokInvasi">
                                <b>Tiktok: </b>@invasiudayana
                            </a><br></br> 

                            <a href = "/Email">
                            <b>Email: </b>invasiunud@gmail.com
                            </a>
                        </p>
                    </Col>

                    <Col md = { 3 }>
                        <h3>Lomba Invasi</h3>
                        <p>Lomba LKTI <br></br>
                        Lomba Esai <br></br>
                        Lomba Poster <br></br>
                        Lomba Podcast </p>
                    </Col>

                    <Col md = { 3 }>
                        <h3>About Invasi</h3>
                        <p> 
                            Inovasi sains atau invasi merupakan salah satu wadah bagi mahasiswa yang disiapkan oleh BEM FMIPA Universitas Udayana sebagai 
                            wadah bagi para inovator muda untuk menuangkan ide - ide dan gagasan kreatif mereka tentang ilmu sains dan teknologi ke dalam 
                            sebuah karya 
                        </p>
                    </Col>

                    <Col md = { 3 }>
                        <h3>Contact Person</h3>
                        <p> <a onClick = { Udel } > Gus Dharma: 085239191431 </a> <br></br> 
                        <a onClick={ Sandrina } > Sandrina : 089602418176 </a> </p>
                    </Col>

                    <hr className = 'hr-footer'></hr>

                    <div className='text-center Copyright-footer'>
                        <p> 
                            &copy; Invasi 2022 • All Right Reserved
                        </p>
                    </div>
                </Row>
            </Container>
            <div className='hr-bg'></div>
        </div>
    );
}
export default FooterContent;