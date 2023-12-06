import { Component } from "react";
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

export default class RegisterService extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>CADASTRO DE NOVO SERVIÇO</h1>
                        </div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}