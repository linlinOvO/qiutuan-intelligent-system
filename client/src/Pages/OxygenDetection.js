import React, {useEffect, useRef, useState} from "react";
import './OxygenDetection.css'
import '../App.css'
import TableLeft from "../Components/OxygenDetection/TableLeft";
import TableRight from "../Components/OxygenDetection/TableRight";
import OxygenTablePart from "../Components/OxygenDetection/OxygenTablePart";

const OxygenWarningList = () => {
    const [warningMessages, setWarningMessages] = useState([{
        warningTime: new Date(),
        warningValue: 0,
        warningType: "",
        warningRange: ""}])

    const scrollRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/warning', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                warningTypeList: ["yr1_oxygen", "yr2_oxygen"]
            })
        })
            .then(response => response.json())
            .then(data => {
                setWarningMessages(data)
            })
    }, [])

    useEffect(() => {
        // console.log("scrolling")
        const interval = setInterval(() => {

            const { scrollTop, offsetHeight, scrollHeight } = scrollRef.current;
            const isAtBottom = scrollTop + offsetHeight >= scrollHeight;

            if (!isAtBottom) {
                scrollRef.current.scrollTop += 1;
            }

            // console.log(1)
        }, 20);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="od-part4"
             ref={scrollRef}>
            <h3>{"异常消息提醒"}</h3>
            <table>
                <thead>
                {warningMessages.map((message, index) => {
                    const warningTime = new Date(message.warningTime)
                    // console.log(typeof warningTime)

                    const warningText = `${warningTime.getFullYear()}年${warningTime.getMonth()}月${warningTime.getDate()}日
                        ，${warningTime.getHours()}:${warningTime.getMinutes()}:${warningTime.getSeconds()}，
                        ${message.warningText}`

                    return (
                        <tr key={index}>
                            <th>{warningText}</th>
                        </tr>
                    )
                })}
                </thead>
            </table>
        </div>
    )
}

const OxygenDetection = () => {

    const [params, setParams] = useState({
        leftData: "加载中...",
        rightData: "加载中..."
    })

    // console.log(tableData)

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/oxygen/current', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setParams(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="oxygenDetection">
            <div className="od-part0">
                <img src={require("../Pictures/链篦机回转窑2.png")} alt={"链篦机"} className="od-part0-background"/>
                <div className="od-part0-left">{params.leftData}</div>
                <div className="od-part0-right">{params.rightData}</div>
            </div>
            <OxygenWarningList/>
            <TableLeft/>
            <TableRight/>
            <OxygenTablePart/>
        </div>
    )
}

export default OxygenDetection
