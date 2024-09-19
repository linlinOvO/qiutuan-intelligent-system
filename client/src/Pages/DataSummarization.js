import React from "react";
import Header from "../Components/General/Header";
import './DataSummarization.css'
import '../App.css'

const DataSummarization = (props) => {
    return (
        <div className={props.length === "long" ? 'mainPart' : 'mainPart1'}>
            <Header pageName="数据驾驶舱" length={props.length}/>
            <div className='ds-part'>原料录入</div>
            <div className='ds-part'>氧含量</div>
            <div className='ds-part'>球团</div>
            <div className='ds-part'>4</div>
            <div className='ds-part'>5</div>
            <div className='ds-part'>6</div>
        </div>
    )
}

export default DataSummarization