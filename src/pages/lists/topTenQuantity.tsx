import { Component } from "react";

export default class TopTenQuantity extends Component {
    render() {
        return (
            <div>
                <div className="rank-title">
                    <h2>Listando clientes que mais consumiram por quantidade</h2>  
                </div>
                <div className="rank">
                    <p><b>1. </b> Pedro (4) </p>
                    <p><b>2. </b> Lucas (2) </p>
                    <p><b>3. </b> João (1) </p>
                </div>
                <div>
                    <p> <i>Obs.: Este é apenas um exemplo de como ficará, no projeto final terá um filtro para a listagem</i> </p>
                </div>
            </div>
        )
    }
}