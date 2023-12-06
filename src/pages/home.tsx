import { Component } from "react";
import '../styles/styles.css';
import '../styles/root.css';
import FooterComp from "../components/footerComponent";
import HeaderComp from "../components/headerComponent";


export default class Home extends Component {
    render() {
        return (
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="welcome">
                            <h1>Bem-vindo ao sistema do PetLovers!</h1>
                            <h2>O <span className="color-text">melhor </span>e <span className="color-text"> mais completo</span> sistema de gerenciamento de PetShops do mundo!</h2>
                        </div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}