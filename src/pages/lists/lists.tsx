import { Component } from "react";
import '../../styles/styles.css';
import '../../styles/root.css';
import '../../styles/listsStyle.css';
import FooterComp from "../../components/footerComponent";
import HeaderComp from "../../components/headerComponent";
import { Outlet } from "react-router-dom";


export default class Lists extends Component {
    render() {
        return (
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title">
                            <h1>LISTAGENS GERAIS</h1>
                        </div>
                        <div className="title">
                            <h2>Escolha a listagem que deseja: </h2>
                        </div>
                        <div className="lists">
                            <a href="/lists/top-ten-quantity">Top 10 clientes que mais consumiram produtos e serviços (quantidade)</a>
                            <a href="/lists/top-five-value">Top 5 clientes que mais consumiram produtos e serviços (valor)</a>
                            <a href="/lists/products-most-consumed">Listagem geral dos produtos mais consumidos</a>
                            <a href="/lists/services-most-consumed">Listagem geral dos serviços mais consumidos</a>
                            <a href="/lists/serv-and-prod-most-consumed">Listagem geral dos produtos e serviços mais consumidos</a>
                            <a href="/lists/prod-most-consumed-per-species">Listagem geral dos produtos mais consumidos por tipo (espécie)</a>
                            <a href="/lists/prod-most-consumed-per-breed">Listagem geral dos produtos mais consumidos por raça</a>
                            <a href="/lists/serv-most-consumed-per-species">Listagem geral dos serviços mais consumidos por tipo (espécie)</a>
                            <a href="/lists/serv-most-consumed-per-breed">Listagem geral dos serviços mais consumidos por raça</a>
                        </div>
                        <Outlet />
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}