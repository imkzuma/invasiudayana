import { Container , Row , Col , Button } from "react-bootstrap";
import "../style/FormMsg.css"; 
import { useState } from "react";
import { motion } from "framer-motion";

export default function FormMsg(){
    function Submit(){
        alert("Pesan anda telah terkirim");
    }

    const FromTop = {
        init : {
            opacity : 0 ,
            y : "-200px",
        },
        animate : {
            y : 0, 
            opacity : 1 , 
            transition : {
                duration : 0.7 , 
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const FromLeft = {
        init : {
            opacity : 0 ,
            x : "-300px",
        },
        animate : {
            x : 0, 
            opacity : 1 , 
            transition : {
                duration : 0.7 , 
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    const FromRight = {
        init : {
            opacity : 0 ,
            x : "300px",
        },
        animate : {
            x : 0, 
            opacity : 1 , 
            transition : {
                duration : 0.7 , 
                when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }

    return(
        <div className = "FormMsg">
            <Container>
                
                    <h1 className = "text-center">
                        <motion.div variants = { FromTop } initial = 'init' whileInView = 'animate'> 
                            Kirim Pesan Kepada Kami
                        </motion.div>
                    </h1>
                
                <Row>
                    <Col md = { 6 } className = "col-msg-one">
                        <motion.div variants = { FromLeft } initial = 'init' whileInView = 'animate'>
                            <h3>Mari kirimkan Pesan Kepada Invasi</h3>
                            <p>
                                Berikan pesan kalian kepada kami. 
                                Berikan kritik atau saran kalian untuk kami, agar kami bisa membuat Acara ini menjadi lebih bagus.
                                Masukkan pertanyaan kalian disini jika ada yang ingin ditanyakan.
                                Kami akan membalas pesan anda melalui Email yang anda inputkan.
                            </p>
                            <h3>
                                Privasi
                            </h3>
                            <p>
                                Kami merahasiakan identitas anda, jadi jangan takut untuk mengirimkan pesan kepada kami.
                                Karena kritik dan saran anda sangat berarti bagi kami.
                            </p>
                        </motion.div>
                    </Col>
                    <Col md = { 6 } className = "col-msg-two">
                        <motion.div variants = { FromRight } initial = 'init' whileInView = 'animate'>
                            <h3>Masukkan Pesan</h3>
                            <form name = "Contact" method = "POST" data-netlify = "true" onSubmit={ Submit }>
                                <input type="hidden" name = "form-name" value = "Contact" />
                                <label htmlFor="name">
                                    <input type="text" placeholder="Name" id = "name" name = "name" required className="input-msg"/> 
                                </label>
                                <label htmlFor="email">
                                    <input type="email" placeholder="E-Mail" id="email" name = "email" required className="input-msg"/>
                                </label>
                                <label>
                                    <textarea placeholder="Message" name = "message" required className="input-msg"/>
                                </label>
                                
                                <input type="submit" value = "Kirim Pesan" className="btn-msg"/>
                            </form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}