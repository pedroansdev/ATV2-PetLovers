import { Component } from "react";
import HeaderComp from "../../components/headerComponent";
import FooterComp from "../../components/footerComponent";
import { Outlet } from "react-router-dom";

export default class Consumption extends Component {
    render() {
        return (
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>CONSUMOS</h1>
                        </div>
                        <div className="new">
                            <a className="regButton" href="/consumption/product">Cadastrar consumo de produtos</a> 
                            <a className="regButton" href="/consumption/service">Cadastrar consumo de serviços</a>
                        </div>
                        <Outlet />
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}