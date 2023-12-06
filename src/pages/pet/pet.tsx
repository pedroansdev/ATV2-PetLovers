import { Component } from "react";
import '../../styles/styles.css';
import '../../styles/root.css';
import '../../styles/petStyle.css';
import FooterComp from "../../components/footerComponent";
import HeaderComp from "../../components/headerComponent";


export default class Pet extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>PETS</h1>
                        </div>
                        <div className="new">
                            <a className="regButton" href="/pet/register">Cadastrar</a>
                        </div>
                        <div className="table">
                            <table>
                                <tr>
                                    <th className="idPe">ID</th>
                                    <th className="namePe">NOME (GÊNERO)</th>
                                    <th className="breedPe">RAÇA</th>
                                    <th className="speciesPe">ESPÉCIE (PORTE)</th>
                                    <th className="ownerPe">DONO</th>
                                    <th className="operationsPe">OPERAÇÕES</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Juninho (Macho)</td>
                                    <td>Cachorro</td>
                                    <td>Beagle (Pequeno)</td>
                                    <td>Pedro (919.929.810-43)</td>
                                    <td><a className="upButton" href="/product/update">Atualizar</a><a className="delButton" href="/product/delete">Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Leandrinho (Macho)</td>
                                    <td>Gato</td>
                                    <td>Siamês (Pequeno)</td>
                                    <td>João (053.171.190-06)</td>
                                    <td><a className="upButton" href="/product/update">Atualizar</a><a className="delButton" href="/product/delete">Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Gersinho (Macho)</td>
                                    <td>Pássaro</td>
                                    <td>Andorinha (Pequeno)</td>
                                    <td>Lucas (708.775.820-92)</td>
                                    <td><a className="upButton" href="/product/update">Atualizar</a><a className="delButton" href="/product/delete">Deletar</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Visconde (Macho)</td>
                                    <td>Tartaruga</td>
                                    <td>Cágado (Médio)</td>
                                    <td>Lucas (708.775.820-92)</td>
                                    <td><a className="upButton" href="/product/update">Atualizar</a><a className="delButton" href="/product/delete">Deletar</a></td>
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