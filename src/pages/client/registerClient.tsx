import { Component } from "react";
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

function registerClient() {
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não foi cadastrado nenhum cliente!`);
};

export default class RegisterClient extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>CADASTRO DE NOVO CLIENTE</h1>
                        </div>
                        <div className="formReg">
                            <form action="">
                                <div className="row">
                                    <div>
                                        <label htmlFor="nameC">Nome: </label><br/>
                                        <input type="text" name="nameC" placeholder="Digite seu nome..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="socNameC">Nome Social: </label><br/>
                                        <input type="text" name="socNameC" placeholder="Digite seu nome social..."/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <label htmlFor="cpfC">CPF: </label><br/>
                                        <input type="text" name="cpfC" id="cpfC" placeholder="Digite apenas os números do seu cpf..." minLength={11} maxLength={11} required />
                                    </div>
                                    <div>
                                        <label htmlFor="cpfEmDate">Data de emissão do CPF:</label><br/>
                                        <input type="date" name="cpfEmDate" id="cpfEmDate" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <label htmlFor="rgsC">RGS: </label><br/>
                                        <textarea rows={10} cols={55} name="rgsC" placeholder="Digite apenas os números do rg seguido da data de emissão, assim:
                                        123456789 01/01/2000" required />
                                    </div>
                                    <div>
                                        <label htmlFor="phonesC">Telefones: </label><br/>
                                        <textarea rows={10} cols={55} name="phonesC" placeholder="Digite o DDD seguido do número, assim:
                                        12 999999999" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="regButton" onClick={registerClient}>CADASTRAR</button>
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