import { Component } from "react";
import '../../styles/styles.css';
import '../../styles/root.css';
import FooterComp from "../../components/footerComponent";
import HeaderComp from "../../components/headerComponent";


export default class DeleteService extends Component {
    render() {
        return(
            <div>
                <HeaderComp />
                <main>
                    <body>
                        <div className="title"></div>
                    </body>
                </main>
                <FooterComp />
            </div>
        )
    }
}