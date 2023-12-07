import { Component } from "react";

export default class ServProdMostCons extends Component {
    render() {
        return (
            <div>
                <div className="rank-title">
                    <h2>Listando serviços mais consumidos por: Gato</h2>  
                </div>
                <div className="rank">
                    <p><b>1. </b> Gravata (4) </p>
                    <p><b>2. </b> Adestramento (3) </p>
                    <p><b>3. </b> Banho e tosa (1) </p>
                    <p><b>4. </b> Lacinho (0) </p>
                </div>
                <div>
                    <p> <i>Obs.: Este é apenas um exemplo de como ficará, no projeto final terá um filtro para a listagem</i> </p>
                </div>
            </div>
        )
    }
}