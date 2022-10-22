import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Youtube from './components/Youtube';
import Instagram from './components/Instagram';
import LogoInvasi2022 from './components/LogoInvasi2022';
import LogoLogoInvasi from './components/LogoLogoInvasi';
import PamfletInvasi from './components/PamfletInvasi';
import Persuratan from './components/PersuratanLKTI-ESAI-Invasi2022';
import GuidelineInvasi from './components/GuidelineInvasi';
import GuidelineEsai from './components/GuidelineEsai';
import GuidelineLKTI from './components/GuidelineLKTI';
import GuidelinePoster from './components/GuidelinePoster';
import GuidelinePodcast from './components/GuidelinePodcast';
import EGG from './components/177013';
import NotFound from './components/NotFound';
import Invasi from './components/Invasi';
import Author from './components/Author';
import Email from './components/Email';
import Loading from './components/Loading';
import './assets/magma-wave.otf';
import ContactUs from './components/ContactUs';

import PengumpulanEsaiInvasi2022 from './components/PengumpulanEsaiInvasi2022';
import PengumpulanLKTIInvasi2022 from './components/PengumpulanLKTIInvasi2022';
import PengumpulanPosterInvasi2022 from './components/PengumpulanPosterInvasi2022';
import PengumpulanPodcastInvasi2022 from './components/PengumpulanPodcastInvasi2022';

import PendaftaranEsaiInvasi2022 from './components/PendaftaranEsaiInvasi2022';
import PendaftaranLKTIInvasi2022 from './components/PendaftaranLKTIInvasi2022';
import PendaftaranPosterInvasi2022 from './components/PendaftaranPosterInvasi2022';
import PendaftaranPodcastInvasi2022 from './components/PendaftaranPodcastInvasi2022';

import PendaftaranWebnasInvasi from './components/PendaftaranWebnasInvasi';
import TiktokInvasi from './components/TiktokInvasi';

import IntroPodcastINVASI2022 from './components/IntroPodcastINVASI2022';

import CpLKTI from './components/CpLKTI';
import CpPoster from './components/CpPoster';
import CpEsai from './components/CpEsai';
import CpPodcast from './components/CpPodcast';
import TemplateSSInstagramdanYoutubeInvasi from './components/TemplateSSInstagramdanYoutubeInvasi';

import Pembayaran from './components/pembayaran/Pembayaran';

import './App.css';
import React , { useState , useEffect } from "react";
import ReactDOM from "react-dom";
import CpWebnas from './components/CpWebnas';

export default function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
    if(loading){
      return(
        <Router>  
          <Routes>
              <Route path="/Youtube" element={<Youtube />} />
              <Route path="/Instagram" element={<Instagram />} />
              <Route path="/Email" element={<Email />} />

              <Route path="/LogoInvasi2022" element={<LogoInvasi2022 />} /> 
              <Route path="/Logo-LogoInvasi2022" element={<LogoLogoInvasi />} />

              <Route path="/PamfletINVASI2022" element={<PamfletInvasi />} />
              <Route path="/Persuratan-LKTI-ESAI-Invasi2022" element={<Persuratan />} />

              <Route path="/GuidelineInvasi2022" element={<GuidelineInvasi />} />
              <Route path="/GuidelineEsaiInvasi2022" element={<GuidelineEsai />} />
              <Route path="/GuidelineLKTIInvasi2022" element={<GuidelineLKTI />} />
              <Route path="/GuidelinePosterInvasi2022" element={<GuidelinePoster />} />
              <Route path="/GuidelinePodcastInvasi2022" element={<GuidelinePodcast />} />

              <Route path="/PengumpulanEsaiInvasi2022" element={<PengumpulanEsaiInvasi2022 />} />
              <Route path="/PengumpulanLKTIInvasi2022" element={<PengumpulanLKTIInvasi2022 />} />
              <Route path="/PengumpulanPosterInvasi2022" element={<PengumpulanPosterInvasi2022 />} />
              <Route path="/PengumpulanPodcastInvasi2022" element={<PengumpulanPodcastInvasi2022 />} />

              <Route path="/PendaftaranEsaiInvasi2022" element={<PendaftaranEsaiInvasi2022 />} />
              <Route path="/PendaftaranLKTIInvasi2022" element={<PendaftaranLKTIInvasi2022 />} />
              <Route path="/PendaftaranPosterInvasi2022" element={<PendaftaranPosterInvasi2022 />} />
              <Route path="/PendaftaranPodcastInvasi2022" element={<PendaftaranPodcastInvasi2022 />} />
              
              <Route path="/IntroPodcastINVASI2022" element={<IntroPodcastINVASI2022 />} />
              <Route path='/TemplateSSInstagramdanYoutubeInvasi' element={<TemplateSSInstagramdanYoutubeInvasi />} />

              <Route path="/PendaftaranWebnasDanTalkshowInvasi" element={<PendaftaranWebnasInvasi />} />
              <Route path="/TiktokInvasi" element={<TiktokInvasi />} />

              <Route path="/author" element={<Author />} />
              <Route path="/177013" element={<EGG />} />
              
          </Routes>
          <Loading />
        </Router>
      );
    } 
    else{
      return(
        <Router> 
          <Routes>
            <Route path="/" element={<Invasi />} />
            
            <Route path="/ContactPerson" element={<ContactUs />} />

            <Route path="/GuidelineInvasi2022" element={<GuidelineInvasi />} />
            <Route path="/GuidelineEsaiInvasi2022" element={<GuidelineEsai />} />
            <Route path="/GuidelineLKTIInvasi2022" element={<GuidelineLKTI />} />
            <Route path="/GuidelinePosterInvasi2022" element={<GuidelinePoster />} />
            <Route path="/GuidelinePodcastInvasi2022" element={<GuidelinePodcast />} />

            <Route path="/PengumpulanEsaiInvasi2022" element={<PengumpulanEsaiInvasi2022 />} />
            <Route path="/PengumpulanLKTIInvasi2022" element={<PengumpulanLKTIInvasi2022 />} />
            <Route path="/PengumpulanPosterInvasi2022" element={<PengumpulanPosterInvasi2022 />} />
            <Route path="/PengumpulanPodcastInvasi2022" element={<PengumpulanPodcastInvasi2022 />} />

            <Route path="/PendaftaranEsaiInvasi2022" element={<PendaftaranEsaiInvasi2022 />} />
            <Route path="/PendaftaranLKTIInvasi2022" element={<PendaftaranLKTIInvasi2022 />} />
            <Route path="/PendaftaranPosterInvasi2022" element={<PendaftaranPosterInvasi2022 />} />
            <Route path="/PendaftaranPodcastInvasi2022" element={<PendaftaranPodcastInvasi2022 />} />
            
            <Route path="/CpLKTI" element={<CpLKTI />} />
            <Route path="/CpPoster" element={<CpPoster />} />
            <Route path="/CpEsai" element={<CpEsai />} />
            <Route path="/CpPodcast" element={<CpPodcast />} />
            <Route path="/CpWebnasDanTalkshowInvasi" element={<CpWebnas />} />
            <Route path="/TiktokInvasi" element={<TiktokInvasi />} />

            <Route path="/PendaftaranWebnasDanTalkshowInvasi" element={<PendaftaranWebnasInvasi />} />

            <Route path="/QRISInvasi2022" element={<Pembayaran />} />

            <Route path="/404" element={<NotFound />} />
            <Route path = '*' element={<NotFound />} />
          </Routes>
        </Router>
      );
    }
}

debugger;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);  