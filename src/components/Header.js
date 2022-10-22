import { Container , Row , Col , Button } from 'react-bootstrap';
import { motion , MotionValue, useTransform} from 'framer-motion'; 
import '../style/Header.css';
import '../assets/magma-wave.otf';
import { useEffect , useState } from 'react';
import { useTypewriter , Cursor } from 'react-simple-typewriter';

function HeaderInvasi(){
    const { text } = useTypewriter({
        words : ['INVASI 2022' , 'Inovasi Sains'] , 
        loop : 0,
        delaySpeed: 5000
    })

    const AnimateHeader = {
        init : {
            opacity : 0 ,
            y : "-200px",
        },
        animate : {
            y : 0, 
            opacity : 1 , 
            transition : {
                duration : 1 , 
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const AnimateBtnOne = {
        init : {
            opacity : 0,
            y : "300px",
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

    const [isMobile , setIsMobile] = useState(false);
    function handleRes(){
        if(window.innerWidth < 720){
            setIsMobile(true);
        }
        else{
            setIsMobile(false);
        }
    }

    function Daftar(){
        window.location.replace("/#lomba");
    }

    function readMore(){
        window.location.replace("/#tentang-kami");
    }

    return(
        <div className = 'Header-bg' id = 'home'>
            <Container>
                <Row className = 'row-header'>
                    <Col className='text-center'>
                        <motion.div variants = { AnimateHeader } initial = 'init' whileInView = 'animate'>
                            <h1 > {text}<Cursor cursorStyle='.'/> </h1>
                            <p>
                                " Mewujudkan Pendekatan Sains dan Teknologi Digital pada Generasi-Z sebagai Gebrakan Nyata Implementasi Sustainable Development Goals 
                                (SDG's) 2030 "
                            </p>
                        </motion.div>

                        <motion.div variants = { AnimateBtnOne } initial = 'init' whileInView = 'animate'> 
                            <Button className = 'btn-rm' onClick = { readMore }>Baca Selengkapnya</Button> 
                            <Button className = 'btn-ds' onClick = { Daftar }>Daftar Sekarang</Button>
                        </motion.div>
                        
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}
export default HeaderInvasi;