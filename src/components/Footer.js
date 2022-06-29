import React, {Component} from 'react';
import {BiCopyright} from "react-icons/bi";

export default class Footer extends Component {
    render() {
        return (
                <footer className="text-center bg-dark text-light">
                    <div className="text-center p-3" >
                        <BiCopyright/> 2022 PyWiki, University of Ottawa
                    </div>
                </footer>
        )
    }
}
