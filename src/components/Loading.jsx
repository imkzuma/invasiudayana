import React from "react";
import INVASI from '../img/invasi.webp';
import '../style/Loading.css';

export default class Loading extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <img src = {INVASI} width = "100%" alt = "Logo Invasi Udayana"></img>
                <h1 className = 'text-center'>Invasi 2022</h1>
                <div className='box-wrap'>
                    <div className="box one"></div>
                    <div className="box two"></div>
                    <div className="box three"></div>
                    <div className="box four"></div>
                    <div className="box five"></div>
                    <div className="box six"></div>
                </div>
            </div>
        );
    }
}