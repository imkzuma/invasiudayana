import '../style/ContentTesti.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import Charis from '../img/testi/esai-charismaulana.webp';
import Kenny from '../img/testi/lkti-kenny.webp';
import Amanda from '../img/testi/podcast-amanda.webp';
import Felix from '../img/testi/poster-felix.webp';
import Arsana from '../img/testi/arsana.webp';
import Natalie from '../img/testi/weibnar-natalie.webp';
import { motion } from 'framer-motion';

export default class ContentTesti extends React.Component{
    render(){
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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            autoplaySpeed: 3000,
            arrows : true
          };
        return(
            
            <div className = 'Content-testi'>
                <motion.div variants = { AnimateHeaderContent } initial = 'init' animate = 'animate'>
                    <h1 className='text-center'>Testimonial Invasi</h1>
                </motion.div>

                <Slider {...settings}>
                    <div>
                        <img src = { Charis } alt = "Testimonial Invasi Charis"></img>
                        <div className = ' myCarousel'>
                            <h2>Charis Maulana</h2> 
                            <h3>Juara 1 Esai Invasi 2021</h3>
                            <p>
                                INVASI merupakan suatu wadah yang sangat membantu kami sebagai mahasiswa untuk melatih kreativitas dan kemampuan kepenulisan ilmiah. Meskipun diadakan secara daring, 
                                namun tidak mengurangi semangat dan jiwa kompetitif dari peserta. Tema yang diberikan juga sesuai dengan isu terkini sehingga bisa memicu inovasi-inovasi dari generasi 
                                muda Indonesia yang diharapkan bisa diimplementasikan untuk menyelesaikan permasalahan yang ada. Selain itu, ada webinar nasional yang sangat informatif untuk diikuti.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src = { Kenny } alt = "Testimonial Invasi Kenny"></img>
                        <div className = 'myCarousel'>
                            <h2>Kenny Aldebaran </h2>
                            <h3>Juara 2 LKTI Invasi 2021</h3>
                            <p>
                                Melalui kegiatan LKTI Invasi yang diadakan oleh Universitas Udayana tahun 2021, saya dan tim berasa bersyukur dan bangga dapat mengambil peran 
                                dalam memberikan gagasan menarik bagi perkembangan dunia iptek yang lebih baik. Kami merasa bahwa LKTI Invasi adalah salah satu wadah yang tepat
                                bagi seluruh mahasiswa/i Indonesia untuk dapat membagikan inovasi dan kreativitasnya kepada seluruh khalayak umum.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src = { Amanda } alt = "Testimonial Invasi Amanda"></img>
                        <div className = 'myCarousel'>
                            <h2>Amanda Amelia Putri</h2>
                            <h3>Juara Terbaik Podcast Invasi 2021   </h3>
                            <p>
                                Lomba podcast INVASI tahun lalu merupakan lomba podcast pertama saya dan tim, menurut kami invasi kemarin sudah berjalan dengan baik dan panitia sangat membantu 
                                jika kami perlu bantuan. Semoga invasi tahun ini dapat berjalan lancar dan lebih baik dari tahun sebelumnya
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src = { Felix } alt = "Testimonial Invasi Felix"></img>
                        <div className = 'myCarousel'>
                            <h2>Felix Irwanto</h2>
                            <h3> Juara Favorit Poster Invasi 2021  </h3>
                            <p>
                                Salah satu hal terpenting pada masa pandemi seperti sekarang ini, yaitu jangan sampai semangat berkreasi menurun. Oleh karena itu, kita dapat mengikuti 
                                berbagai kegiatan perlombaan, contohnya INVASI. Ragam dan tema perlombaan yang diadakan INVASI tentunya sangat menarik dan relevan. Jadi, tunggu apalagi..
                                Ayok bergabung dalam perlombaan INVASI 2022 dan raih prestasimu.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src = { Arsana } alt = "Testimonial Invasi Arsana"></img>
                        <div className = 'myCarousel'>
                            <h2>I Gede Arsana Wijaya</h2>
                            <h3> Panitia Invasi  </h3>
                            <p>
                                Pada saat saya ikut bergabung dalam kepanitiaan INVASI, banyak pembelajaran dan pengalaman yang saya dapatkan mulai dari bagaimana kita belajar untuk berkomunikasi 
                                antara satu dengan yang lainnya,bagaimana kita menyatukan pandangan dan pemikiran yang berbeda dari setiap orang yang ada dalam kepanitiaan INVASI dan bagaimana cara 
                                kita mencari solusi untuk menyelesaikan setiap permasalahan yang muncul di kepanitiaan. 
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src = { Natalie } alt = "Testimonial Invasi Natalie"></img>
                        <div className = 'myCarousel'>
                            <h2>Natalie Christanti </h2>
                            <h3> Mahasiswi Universitas Udayana </h3>
                            <p>
                                Webinarnya seruu banget, pembicara dan moderatornya juga asik dan banyak banget informasi yang bisa di dapat dari webinar invasi 2021
                            </p>
                        </div>
                    </div>
                    
                </Slider> 

            </div>
        );
    }
}