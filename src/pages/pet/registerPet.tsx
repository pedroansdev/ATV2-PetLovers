import { Component } from "react";
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";

function registerPet() {
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não foi cadastrado nenhum pet!`);
};

export default class RegisterPet extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>CADASTRO DE NOVO PET</h1>
                        </div>
                        <div className="formReg">
                            <form action="">
                                <div className="row">
                                    <div>
                                        <label htmlFor="namePe">Nome:</label><br/>
                                        <input type="text" name="namePe" placeholder="Digite o nome do pet..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="genderPe">Gênero:</label><br/>
                                        <select name="genderPe" required>
                                            <option value="Macho">Macho</option>
                                            <option value="Fêmea">Fêmea</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="sizePe">Porte:</label><br/>
                                        <select name="sizePe" required>
                                            <option value="Pequeno">Pequeno</option>
                                            <option value="Médio">Médio</option>
                                            <option value="Grande">Grande</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="ownerPe">Dono:</label><br/>
                                        <select name="ownerPe">
                                            <option value="1">Pedro (919.929.810-43)</option>
                                            <option value="2">João (053.171.190-06)</option>
                                            <option value="3">Lucas (708.775.820-92)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <label htmlFor="speciesPe">Espécie:</label><br/>
                                        <input type="text" name="speciesPe" placeholder="Digite a espécie do pet..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="breedPe">Raça:</label><br/>
                                        <input type="text" name="breedPe" placeholder="Digite a raça do pet..." required />
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="regButton" onClick={registerPet}>CADASTRAR</button>
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