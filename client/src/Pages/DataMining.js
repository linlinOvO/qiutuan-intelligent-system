import React from "react";
import Header from "../Components/General/Header";
import '../App.css'

const DataMining = (props) => {
    return (
        <div className={props.length === "long" ? 'mainPart' : 'mainPart1'}>
            <Header pageName="数据挖掘" length={props.length}/>
        </div>
    )
}

export default DataMining