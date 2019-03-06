import React, { Component } from "react";
import ReactDOM from "react-dom";

class InicialPage  extends React.Component {
    render(){
        return (
            <div className="panel">
                <h2>Tiago Jesus</h2>
                <h1>Uma apaixonado por tecnologia</h1>
                <div>
                    Ola pessoal,
                </div>
                <p>
                    eu acretido que sou uma pessoa muito curiosa, que atua na área de tecnologia desde 2003.
                </p>

                <p>Por isso, gosto de participar das comunidades/encontros de desenvolvedores como o
                    GDG (Google Developer Group) e outros.</p>
                <p>
                    Atualmente estou atuando mais fortemente com Java(JEE, spring) e javascript(React).
                </p>
                <p>
                    Para aumentar meu conhecimento e <b> não ficar parado no tempo</b>. Estou estudando:
                    <ul>
                        <li> Contabilidade Geral e Bancária. </li>
                        <li> Linguagem de programação: Kotlin e Dart</li>
                        <li> Blockchain: Hyperledger Fabric, Corda</li>
                        <li> Para passar conhecimento: Desenho e Adobe Character Animator.
                            <div className="conhecimento__obs">Este último é uma forma de criar material interessante
                                para ensino de tecnologia(Projeto pessoal).</div>
                        </li>
                    </ul>
                </p>
                <div className="rede-sociais">
                    <a href="https://www.linkedin.com/in/tiagojesusbr/" target="_blank" className="rede-social-button">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/tiagojesusbr" target="_blank" className="rede-social-button">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/tiagojesusbr" target="_blank" className="rede-social-button">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default InicialPage;