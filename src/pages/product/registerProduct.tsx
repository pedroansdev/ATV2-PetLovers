import { Component } from "react";
import '../../App.css';
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

function registerProduct() {
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não foi cadastrado nenhum produto!`);
};

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
                        <div className="formReg">
                            <form action="">
                                <div className="row">
                                    <div>
                                        <label htmlFor="namePr">Nome:</label><br/>
                                        <input type="text" name="namePr" placeholder="Digite o nome do produto..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="pricePr">Preço:</label><br/>
                                        <input type="number" name="pricePr" placeholder="Digite o preço do produto..." required />
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="regButton" onClick={registerProduct}>CADASTRAR</button>
                                </div>
                            </form>
                        </div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}