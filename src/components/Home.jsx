import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/Home.css'


export default function Home() {
    const navigate = useNavigate();

    return(
        <>
        <h1 style={{ textAlign: "center" }} >Select Label Type</h1>
        </>
    )
}