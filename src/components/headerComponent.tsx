import { Component } from "react";

export default class HeaderComp extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <img src={ require ("../images/paws.png")} alt="Logo pata em formato de coração" /> 
                    <p>PetLovers</p>
                    <a href="/">Home</a>
                    <a href="/client">Clientes</a>
                    <a href="/product">Produtos</a>
                    <a href="/service">Serviços</a>
                    <a href="/pet">Pets</a>
                    <a href="/lists">Listagens</a>
                    <a href="/consumption">Consumos</a>
                </div>
            </header>
        )
    }
}