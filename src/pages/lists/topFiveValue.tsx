import { Component } from "react";

export default class TopFiveValue extends Component {
    render() {
        return (
            <div>
                <div className="rank-title">
                    <h2>Listando clientes que mais consumiram por valor</h2>  
                </div>
                <div className="rank">
                    <p><b>1. </b> Pedro (R$ 110.00) </p>
                    <p><b>2. </b> Lucas (R$ 80.00) </p>
                    <p><b>3. </b> João (R$ 100.00) </p>
                </div>
                <div>
                    <p> <i>Obs.: Este é apenas um exemplo de como ficará, no projeto final terá um filtro para a listagem</i> </p>
                </div>
            </div>
        )
    }
}