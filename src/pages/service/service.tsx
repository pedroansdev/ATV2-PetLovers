import { Component } from "react";
import '../../styles/styles.css';
import '../../styles/root.css';
import '../../styles/serviceStyle.css';
import FooterComp from "../../components/footerComponent";
import HeaderComp from "../../components/headerComponent";

function warningUpdate(){
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não é possível atualizar nenhum serviço`);
}

function warningDelete(){
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não é possível deletar nenhum serviço`);
}

export default class DeleteService extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>SERVIÇOS</h1>
                        </div>
                        <div className="new">
                            <a className="regButton" href="/service/register">Cadastrar</a>
                        </div>
                        <div className="table">
                            <table>
                                <tr>
                                    <th className="idS">ID</th>
                                    <th className="nameS">NOME</th>
                                    <th className="typeS">TIPO</th>
                                    <th className="priceS">PREÇO</th>
                                    <th className="operationsS">OPERAÇÕES</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Banho e tosa</td>
                                    <td>Cuidados</td>
                                    <td>R$ 80.00</td>
                                    <td><a className="upButton" onClick={warningUpdate}>Atualizar</a><a className="delButton" onClick={warningDelete}>Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Adestramento</td>
                                    <td>Cuidados</td>
                                    <td>R$ 100.00</td>
                                    <td><a className="upButton" onClick={warningUpdate}>Atualizar</a><a className="delButton" onClick={warningDelete}>Deletar</a></td>
                                </tr>
                            </table>
                        </div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}