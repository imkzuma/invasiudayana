import { Container , Row , Col , Button } from 'react-bootstrap';
import '../style/ContentTentangKami.css';
import LOGO from '../img/invasi.webp';
import { motion } from 'framer-motion';
import { useState } from 'react';

function ContentCard(){
    const AnimateImg = {
        init: {
            opacity : 0,
            x : "-300px",
        },
        animate : {
            opacity : 1,
            x : 0,
            transition : {
                duration : 1,
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const AnimateTextHeader = {
        init:{
            opacity : 0,
            y : "-300px",
        },
        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration: 1,
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const AnimateTextParagraph = {
        init:{
            opacity : 0,
            y : "300px",
        },
        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration: 1,
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const HideContentText = {
        init: {
            opacity: 0,
            y: "-100px"
        },
        show: {
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1, 
                when: "beforeChildren",
                staggerChildren: 1
            }
        }
    }

    const [isShowed , setIsShowed] = useState(false);
    const Show = () => setIsShowed(true);
    const Hide = () => setIsShowed(false);

    return(
        <div className = 'Content-Card' id = 'tentang-kami'>
            <Container>
                <Row>
                    <Col md = {6} className = 'm-auto'>
                        <motion.div variants = {AnimateImg} initial = 'init' whileInView = 'animate'>
                            <img 
                                src = { LOGO } 
                                width = "100%"
                                height = "100%"
                                alt = 'Logo Invasi Udayana'
                            ></img>
                        </motion.div>
                    </Col>
                    <Col md = {6} className = "col-text-kami">
                        <motion.div variants = {AnimateTextHeader} initial = 'init' whileInView = 'animate'>
                            <h1>Apa Itu Invasi ? </h1>
                        </motion.div>
                        <motion.div variants = {AnimateTextParagraph} initial = 'init' whileInView = 'animate'>
                            <p>
                            Inovasi sains atau invasi merupakan salah satu wadah bagi mahasiswa yang disiapkan oleh BEM FMIPA Universitas Udayana sebagai wadah bagi para inovator 
                            muda untuk menuangkan ide - ide dan gagasan kreatif mereka.
                            </p>
                            {
                                isShowed ? <motion.div variants = {HideContentText} initial = 'init' whileInView = 'show'>
                                        <p>
                                            Berkaitan tentang ilmu sains dan teknologi ke dalam sebuah karya sehingga menumbuhkan minat dan bakat mahasiswa 
                                            sebagai agent of change guna mewujudkan pembangunan yang berkelanjutan di Indonesia.
                                        </p>
                                        
                                    </motion.div>
                                    : null
                            }
                            {
                                !isShowed   ? <Button variant = 'primary' onClick={ Show } className = 'btn-about' > Read More </Button> 
                                            : <Button variant = 'primary' style={{visibility : 'hidden'}} >  </Button>
                            }
                            
                        </motion.div>
                        {/*<hr></hr> */}
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}
export default ContentCard;