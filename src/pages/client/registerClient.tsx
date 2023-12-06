import { Component } from "react";
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

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
                        <div className="formClient">
                            <form action="" method="post">
                                <div className="row">
                                    <label htmlFor="nameC">Nome: </label>
                                    <input type="text" name="nameC" />
                                    <label htmlFor="socNameC">Nome Social: </label>
                                    <input type="text" name="socNameC" />
                                </div>
                                <div className="row">
                                    <label htmlFor="cpfC">CPF: </label>
                                    <input type="text" name="cpfC" id="cpfC" />
                                    <label htmlFor="cpfEmDate">Data de emissão do CPF:</label>
                                    <input type="date" name="cpfEmDate" id="cpfEmDate" />
                                </div>
                                <div className="row">
                                    <div className="textAreas">
                                        <label htmlFor="rgsC">RGS: </label>
                                        <textarea name="rgsC" />
                                    </div>
                                    <div className="textAreas">
                                        <label htmlFor="phonesC">Telefones: </label>
                                        <textarea name="phonesC" />
                                    </div>
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