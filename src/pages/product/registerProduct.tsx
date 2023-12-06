import { Component } from "react";
import '../../App.css';
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

export default class RegisterProduct extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>CADASTRO DE NOVO PRODUTO</h1>
                        </div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}