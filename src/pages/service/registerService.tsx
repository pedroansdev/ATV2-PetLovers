import { Component } from "react";
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

function registerService() {
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não foi cadastrado nenhum serviço!`);
};

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
                        <div className="formReg">
                            <form action="">
                                <div className="row">
                                    <div>
                                        <label htmlFor="nameS">Nome:</label><br/>
                                        <input type="text" name="nameS" placeholder="Digite o nome do serviço..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="typeS">Tipo:</label><br/>
                                        <input type="text" name="typeS" placeholder="Digite o tipo do serviço..." required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <label htmlFor="priceS">Preço:</label><br/>
                                        <input type="number" name="priceS" placeholder="Digite o preço do serviço..." required />
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="regButton" onClick={registerService}>CADASTRAR</button>
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