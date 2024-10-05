import React from "react";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul className="flex justify-center items-center grap-4">
                    <li>
                        <a href="/">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="/aboutus/">About us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="/contactus/">Contact us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    </li>
                    <div className="subnav">
                        <button className="subnavbtn">Services <i className="fa fa-caret-down"></i></button>
                        <div className="subnav-content">
                            <a href="/services/erp/">ERP</a>&nbsp;&nbsp;
                            <a href="/services/BI/">Power BI</a>&nbsp;&nbsp;
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}