import { Component } from "react";
import '../../styles/styles.css';
import '../../styles/root.css';
import '../../styles/productStyle.css';
import FooterComp from "../../components/footerComponent";
import HeaderComp from "../../components/headerComponent";
import { Outlet } from "react-router-dom";


export default class DeleteService extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>PRODUTOS</h1>
                        </div>
                        <div className="new">
                            <a className="regButton" href="/product/register">Cadastrar</a>
                        </div>
                        <div className="table">
                            <table>
                                <tr>
                                    <th className="idPr">ID</th>
                                    <th className="namePr">NOME</th>
                                    <th className="pricePr">PREÇO</th>
                                    <th className="operationsPr">OPERAÇÕES</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Gravata</td>
                                    <td>R$ 10.00</td>
                                    <td><a className="upButton" href="/product/update">Atualizar</a><a className="delButton" href="/product/delete">Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Lacinho</td>
                                    <td>R$ 10.00</td>
                                    <td><a className="upButton" href="/product/update">Atualizar</a><a className="delButton" href="/product/delete">Deletar</a></td>
                                </tr>
                            </table>
                        </div>
                        <Outlet />
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}