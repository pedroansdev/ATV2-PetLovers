import { Component } from "react";
import '../../styles/styles.css';
import '../../styles/root.css';
import '../../styles/clientStyle.css';
import FooterComp from "../../components/footerComponent";
import HeaderComp from "../../components/headerComponent";

function warningUpdate(){
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não é possível atualizar nenhum cliente`);
}

function warningDelete(){
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não é possível deletar nenhum cliente`);
}

export default class Client extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>CLIENTES</h1>
                        </div>
                        <div className="new">
                            <a className="regButton" href="/client/register">Cadastrar</a>
                        </div>
                        <div className="table">
                            <table>
                                <tr>
                                    <th className="idC">ID</th>
                                    <th className="nameC">NOME (CPF) - NOME SOCIAL</th>
                                    <th className="rgsC">RGS</th>
                                    <th className="phonesC">TELEFONES</th>
                                    <th className="petsC">PETS</th>
                                    <th className="operationsC">OPERAÇÕES</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Pedro (919.929.810-43) - Não possui</td>
                                    <td>
                                        <ul>
                                            <li>33.070.553-2</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>(31) 97240-5268</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Juninho (Cachorro)</li>
                                        </ul>
                                    </td>
                                    <td><a className="upButton" onClick={warningUpdate}>Atualizar</a><a className="delButton" onClick={warningDelete}>Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>João (053.171.190-06) - Não possui</td>
                                    <td>
                                        <ul>
                                            <li>44.587.389-9</li>
                                            <li>26.635.848-2</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>(65) 98455-1971</li>
                                            <li>(83) 98953-6148</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Leandrinho (Gato)</li>
                                        </ul>
                                    </td>
                                    <td><a className="upButton" onClick={warningUpdate}>Atualizar</a><a className="delButton" onClick={warningDelete}>Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Lucas (708.775.820-92) - Não possui</td>
                                    <td>
                                        <ul>
                                            <li>37.476.967-9</li>
                                            <li>30.265.942-0</li>
                                            <li>11.139.609-8</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>(79) 98497-2701</li>
                                            <li>(81) 99181-8353</li>
                                            <li>(83) 98935-2827</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Gersinho (Pássaro)</li>
                                            <li>Visconde (Tartaruga)</li>
                                        </ul>
                                    </td>
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