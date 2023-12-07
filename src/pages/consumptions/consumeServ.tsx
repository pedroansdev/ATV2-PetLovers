import { Component } from "react";

function registerConServ() {
    return window.alert(`ATENÇÃO\nEste botão NÃO está funcionando para este protótipo de design do site, portanto, não foi cadastrado nenhum consumo de serviço!`);
};

export default class ConsServ extends Component {
    render() {
        return(
            <div>
                <div className="title">
                    <h1>CADASTRO DE CONSUMO DE SERVIÇOS</h1>
                </div>
                <div className="formReg">
                    <form action="">
                        <div className="row">
                            <div>
                                <label htmlFor="client">Cliente:</label><br/>
                                <select name="client" required>
                                    <option value="1">Pedro (919.929.810-43)</option>
                                    <option value="2">João (053.171.190-06)</option>
                                    <option value="3">Lucas (708.775.820-92)</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="service">Serviço:</label><br/>
                                <select name="service" required>
                                    <option value="1">Banho e tosa (R$ 80.00)</option>
                                    <option value="2">Adestramento (R$ 100.00)</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pet">Pet:</label><br/>
                                <select name="pet" required>
                                    <option value="1">Juninho (Cachorro)</option>
                                    <option value="2">Leandrinho (Gato)</option>
                                    <option value="3">Gersinho (Pássaro)</option>
                                    <option value="4">Visconde (Tartaruga)</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <button className="regButton" onClick={registerConServ}>CADASTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}