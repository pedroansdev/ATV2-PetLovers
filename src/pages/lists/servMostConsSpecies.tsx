import { Component } from "react";

export default class ServMostConsSpecies extends Component {
    render() {
        return (
            <div>
                <div className="rank-title">
                    <h2>Listando serviços mais consumidos por: Gato</h2>  
                </div>
                <div className="rank">
                    <p><b>1. </b> Adestramento (2) </p>
                    <p><b>2. </b> Banho e tosa (1) </p>
                </div>
                <div>
                    <p> <i>Obs.: Este é apenas um exemplo de como ficará, no projeto final terá um filtro para a listagem</i> </p>
                </div>
            </div>
        )
    }
}