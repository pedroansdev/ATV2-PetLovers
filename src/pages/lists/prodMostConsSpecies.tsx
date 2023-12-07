import { Component } from "react";

export default class ProdMostConsSpecies extends Component {
    render() {
        return (
            <div>
                <div className="rank-title">
                    <h2>Listando produtos mais consumidos por: Pássaro</h2>  
                </div>
                <div className="rank">
                    <p><b>1. </b> Gravata (1) </p>
                    <p><b>2. </b> Lacinho (0) </p>
                </div>
                <div>
                    <p> <i>Obs.: Este é apenas um exemplo de como ficará, no projeto final terá um filtro para a listagem</i> </p>
                </div>
            </div>
        )
    }
}