import React, { useEffect } from "react";

function Nav({bgcolor = "yellow", textcolor = "black", a=0}) {
    return (
        <>
            <nav className=" w-screen h-18" style={{backgroundColor: bgcolor, color: textcolor}}>
                <ul className=" flex gap-48 flex-wrap">
                    <li className=" list-none">Home</li>
                    <li  className=" list-none">About</li>
                    <li  className=" list-none">Contact</li>
                    <li className=" list-none">{a}</li>
                </ul>
            </nav>
        </>

    )
}

export default Nav;