import { Container , Row , Col , Button } from 'react-bootstrap';
import '../style/ContentLomba.css';
import { motion } from 'framer-motion';
import { BsBook , BsMicFill , BsLaptopFill , BsMicrosoft, BsCalendar, BsClockFill, BsRecord2Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Raditya from '../img/webnas/radit.png';
import Bella from '../img/webnas/bella.png';

export default function ContentLomba(){
    const AnimateHeaderContent = {
        init: {
            opacity : 0,
            y : "-100px",
        },
        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 1,
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const Fade = {
        init: {
            opacity : 0,
            y : "60px",
        },
        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 1
            }
        }
    }

    return(
        <div className = 'Content-Lomba' id = 'lomba'>
            <Container>
                <motion.div variants = { AnimateHeaderContent } initial = 'init' whileInView = 'animate'>
                    <h5 className = 'text-center'>INVASI 2022</h5>
                    <h1 className='text-center'>Perlombaan Inovasi Sains</h1>
                </motion.div>
                <Row>
                    <Col  className = 'card-one text-center'>
                        <motion.div variants = { Fade } initial = 'init' whileInView = 'animate'>
                            <BsBook className = 'Logo-Lomba'/>
                            <h3>Lomba KTI</h3>
                            <p>
                                Lomba Karya Tulis Ilmiah (LKTI) adalah salah satu cabang lomba dalam INVASI 2022 yang memberikan 
                                kesempatan bagi inovator muda untuk menuangkan, menyampaikan, dan membahas suatu topik atau masalah sebagai 
                                respon intelektual dengan beragam solusi dalam media tulisan ilmiah. Ide tersebut seyogyanya unik, kreatif dan bermanfaat sehingga idealisasi kampus sebagai pusat solusi dapat menjadi kenyataan.
                            </p>
                            
                            <Link to = "/PendaftaranLKTIInvasi2022">
                                <Button className='btn-lomba-one'> Daftar LKTI</Button>
                            </Link>

                            <Link to = "/GuidelineLKTIInvasi2022">
                                <Button className='btn-lomba-two'> Guideline LKTI </Button>
                            </Link>

                            <Link to = "/PengumpulanLKTIInvasi2022">
                                <Button className='btn-lomba-three'>Pengumpulan Karya</Button>
                            </Link>

                            <Link to = "/CpLkti">
                                <Button className='btn-lomba-four'>Contact Person</Button>
                            </Link>
                        </motion.div>
                    </Col>
                    <Col  className = 'card-two text-center'>
                        <motion.div variants = { Fade } initial = 'init' whileInView = 'animate'>
                            <BsMicrosoft className = 'Logo-Lomba'/>
                            <h3>Lomba Esai</h3>
                            <p>
                                Lomba Esai adalah cabang lomba dalam INVASI 2022 yang memberikan kesempatan bagi inovator muda untuk menuangkan, 
                                menyampaikan, dan membahas suatu persoalan dalam bentuk tulisan esai ilmiah. Lomba tulisan yang bersisi gagasan 
                                subjektif-personal ini diharapkan dapat mengacu pada informasi yang terpercaya dan permasalahan kekinian yang realible 
                                beserta pemecahannya. 
                            </p>

                            <Link to = "/PendaftaranEsaiInvasi2022">
                                <Button className='btn-lomba-one'>Daftar Esai</Button>
                            </Link>

                            <Link to = "/GuidelineEsaiInvasi2022">
                                <Button className='btn-lomba-two'>Guideline Esai</Button>
                            </Link>

                            <Link to = "/PengumpulanEsaiInvasi2022">
                                <Button className='btn-lomba-three'>Pengumpulan Karya</Button>
                            </Link>

                            <Link to = "/CpEsai">
                                <Button className='btn-lomba-four'>Contact Person</Button>
                            </Link>

                        </motion.div>
                    </Col>
                </Row>
                <Row className='pb-5'>
                    <Col className = 'card-three text-center'>
                        <motion.div variants = { Fade } initial = 'init' whileInView = 'animate'>
                            <BsLaptopFill className = 'Logo-Lomba'/>
                            <h3>Lomba Poster</h3>
                            <p>
                                Lomba Poster Publik merupakan cabang lomba dalam INVASI 2022 mengenai desain grafis yang berisi ide -ide kreatif dan 
                                berisi informasi serta data – data pendukung sebuah topik yang dibahas serta bersifat informatif, persuasif dan komunikatif 
                                yang nantinya informasi tersebut dapat tersampaikan ke masyarakat umum
                            </p>

                            <Link to = "/PendaftaranPosterInvasi2022">
                                <Button className='btn-lomba-one'>Daftar Poster</Button>
                            </Link>

                            <Link to = "/GuidelinePosterInvasi2022">
                                <Button className='btn-lomba-two'>Guideline Poster</Button>
                            </Link>

                            <Link to = "/PengumpulanPosterInvasi2022">
                                <Button className='btn-lomba-three'>Pengumpulan Karya</Button>
                            </Link>

                            <Link to = "/CpPoster">
                                <Button className='btn-lomba-four'>Contact Person</Button>
                            </Link>

                        </motion.div>
                    </Col>
                    <Col className = 'card-four text-center'>
                        <motion.div variants = { Fade } initial = 'init' whileInView = 'animate'>
                            <a><BsMicFill className = 'Logo-Lomba'/></a>
                            <h3>Lomba Podcast</h3>
                            <p>
                                Lomba podcast merupakan sebuah cabang lomba dalam INVASI 2022. Cabang lomba ini diharapkan dapat memberikan kesempatan 
                                bagi mahasiswa untuk menyampaikan berita atau pendapat dari narasumber maupun gagasan pribadi mengenai masalah yang terjadi 
                                saat ini melalui media audio visual
                            </p>

                            <Link to = "/PendaftaranPodcastInvasi2022">
                                <Button className='btn-lomba-one'>Daftar Podcast</Button>
                            </Link>

                            <Link to = "/GuidelinePodcastInvasi2022">
                                <Button className='btn-lomba-two'>Guideline Podcast</Button>
                            </Link>

                            <Link to = "/PengumpulanPodcastInvasi2022">
                                <Button className='btn-lomba-three'>Pengumpulan Karya</Button>
                            </Link>

                            <Link to = "/CpPodcast">
                                <Button className='btn-lomba-four'>Contact Person</Button>
                            </Link>

                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <Container className = 'container-webnas py-4 mt-4'>
                <h5 className = 'text-center'>INVASI 2022</h5>
                <h1 className = 'text-center'>Webinar Nasional & Talkshow</h1>
                <Row>
                    <Col lg = {6} className = 'm-auto '>
                        <Row className = 'card-wrapper p-4'>
                            <div className = 'd-flex justify-content-center vertical-align-center align-items-center card-webnas-date' >
                                <div className = 'd-flex justify-content-center vertical-align-center align-items-center'>
                                    <BsCalendar className = 'my-auto me-4 fs-3'/>
                                    <h3 className = 'my-auto'>20 November 2022</h3>
                                 </div>
                           
                                <div className = 'd-flex justify-content-center vertical-align-center align-items-center time-card'>
                                    <BsClockFill className = 'my-auto me-4 fs-3'/>
                                    <h3 className = 'my-auto'>09:00 Wita</h3>
                                 </div>
                            </div>
                        </Row>
                        <Col lg = {12}>
                            <div className = 'd-flex justify-content-center py-3'>
                                <BsRecord2Fill className = 'text-danger fs-2' />
                                <h2 className = 'text-light fw-bold text-center'>Live on Zoom</h2>
                            </div>
                        </Col>
                    </Col>
                </Row>
                
                <Row className = 'mt-1 mb-5'>
                    <Col lg = {4} className = 'm-auto'>
                        <Col lg = {12} className = 'text-center text-light'>
                            <img src = {Raditya} className = 'img-webnas m-auto text-center' width = '100%'/>
                            <div className = 'bg-for-speaker p-2 pb-3'>
                                <h2 className = 'fw-bold fs-1 pt-2 my-auto'>Raditya Dika</h2>
                                <small className = 'my-auto'>Content Creator</small>
                            </div>
                            
                        </Col>
                    </Col>

                    <Col lg = {4} className = 'm-auto'>
                        <Col lg = {12} className = 'mt-5 mb-3 p-4 py-5 card-detail-speakers'>
                            <div className = 'd-flex justify-content-start text-light'>
                                <h4 className = 'fw-bold'>Registration </h4>
                                <p className = 'fs-5 ps-3'>11 OKT - 17 NOV 2022</p>
                            </div>
                            <h4 className = 'fw-bold text-light'>Benefit</h4>
                            <div className = 'text-light'>
                                <li className = 'fs-5'>Participant E-Certificate</li>
                                <li className = 'fs-5'>National SKP Point</li>
                                <li className = 'fs-5'>Interact With Briliant Speakers</li>
                                <li className = 'fs-5'>Participant E-Certificate</li>
                            </div>
                        </Col>
                        <Col lg = {12} className = 'mb-2 p-4 py-3 card-detail-speakers'>
                            <div className = 'd-flex justify-content-center'>
                                <div className = 'd-flex justify-content-start me-3'>
                                    <h4 className = 'text-light fw-bold my-auto pe-3'>Pelajar</h4>
                                    <p className = 'text-light my-auto'>Rp. 20.000</p>
                                </div>
                                <div className = 'd-flex justify-content-start price-umum ps-3'>
                                    <h4 className = 'text-light fw-bold my-auto pe-3'>Umum</h4>
                                    <p className = 'text-light my-auto'>Rp. 25.000</p>
                                </div>
                            </div>
                        </Col>
                    </Col>
                    
                    <Col lg = {4} className = 'm-auto'>
                        <Col lg = {12} className = 'text-center text-light'>
                            <img src = {Bella} className = 'img-webnas m-auto text-center' width = '100%'/>
                            <div className = 'bg-for-speaker p-2 pb-3'>
                                <h2 className = 'fw-bold fs-1 pt-2 my-auto'>Bella Hana</h2>
                                <small className = 'my-auto'>SDG’s Indonesia Campus Ambassador 2020</small>
                            </div>
                        </Col>
                    </Col>
                </Row>

                <Row className = 'mb-5'>
                    <Col lg = {4} className = 'mb-3'>
                        <Col lg = {12} className = 'text-light text-center wrapper-registration p-5'>
                            <h4 className = 'mb-4'>Pendaftaran Webnas dan Talkshow</h4>
                            <Link to = '/PendaftaranWebnasDanTalkshowInvasi' target = '_blank'>
                                <Button className = 'btn-daftar-webnas p-3'>Daftar Disini</Button>
                            </Link>
                        </Col>
                    </Col>

                    <Col lg = {4} className = 'mb-3'>
                        <Col lg = {12} className = 'text-light wrapper-registration p-5'>
                            <h4>Pembayaran</h4>
                            
                            <div>
                                <p> Dapat dilakukan melalui,</p>
                                <p>BNI <b>0987460318</b> a/n KADEK YUNITA LIYANI</p>
                                <p className = 'pt-3'>Atau Melalui</p>
                            </div>
                            <p className = 'fs-5'>Qris Invasi</p>
                            <Link to = '/QRISInvasi2022' target = '_blank'>
                                <Button className = 'btn-daftar-webnas p-3'>Qris Invasi</Button>
                            </Link>
                        </Col>
                    </Col>

                    <Col lg = {4} className = 'mb-3'>
                        <Col lg = {12} className = 'text-light text-center wrapper-registration p-5'>
                            <h4 className = 'mb-4'>Contact Person Panitia Webnas dan Talkshow</h4>
                            <Link to = '/CpWebnasDanTalkshowInvasi' target = '_blank'>
                                <Button className = 'btn-daftar-webnas p-3'>Contact Person</Button>
                            </Link>
                        </Col>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}