import React, {useEffect, useState} from "react";
import "./HeatBalanceModel.css"
import '../App.css'
import MenuBar from "../Components/HeatBalanceModel/MenuBar";
import Window0 from "../Components/HeatBalanceModel/Window-0";
import Window1 from "../Components/HeatBalanceModel/Window-1";
import Window2 from "../Components/HeatBalanceModel/Window-2";
import Window3 from "../Components/HeatBalanceModel/Window-3";
import Window4 from "../Components/HeatBalanceModel/Window-4";
import Window5 from "../Components/HeatBalanceModel/Window-5";
import {getPart1, getPart2, getPart3, getPart4} from "../Components/HeatBalanceModel/Parameters";


const HeatBalanceModel = () => {
    const [window, setWindow] = useState(0) //当前是那个界面

    return (
        <div className="heatBalanceModelPage">
            <MenuBar window={window} setWindow={setWindow}/>
            <Windows window={window}/>
        </div>
    )
}

const Windows = (props) => {

    const [part1Cells, setPart1Parts] = useState([])
    const [part2Cells, setPart2Parts] = useState([])
    const [part3Cells, setPart3Parts] = useState([])
    const [part4Cells, setPart4Parts] = useState([])
    const [part5Cells, setPart5Parts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/part/' + 1)
            .then(response => response.json())
            .then(data => getPart1(data[0]))
            .then(p1 => {
                setPart1Parts(p1)
            })
        fetch('http://localhost:3001/api/v1/part/' + 2)
            .then(response => response.json())
            .then(data => getPart2(data[0]))
            .then(p2 => {
                setPart2Parts(p2)
            })

        fetch('http://localhost:3001/api/v1/part/' + 4)
            .then(response => response.json())
            .then(data => getPart4(data[0]))
            .then(p4 => {
                setPart4Parts(p4)
                console.log(p4)
                fetch('http://localhost:3001/api/v1/part/' + 3)
                    .then(response => response.json())
                    .then(data => getPart3(data[0], p4[0][2]))
                    .then(p3 => {
                        setPart3Parts(p3)
                    })
            })
    }, [1])

    switch (props.window) {
        case 0:
            return <Window0 part5Cells={part5Cells}/>
        case 1:
            return <Window1/>
        case 2:
            return <Window2/>
        case 3:
            return <Window3/>
        case 4:
            return <Window4 part1Cells={part1Cells} setPart1Parts={setPart1Parts}
                            part2Cells={part2Cells} setPart2Parts={setPart2Parts}
                            part3Cells={part3Cells} setPart3Parts={setPart3Parts}
                            part4Cells={part4Cells} setPart4Parts={setPart4Parts}/>
        case 5:
            return <Window5 part1Cells={part1Cells} setPart1Parts={setPart1Parts}
                            part2Cells={part2Cells} setPart2Parts={setPart2Parts}
                            part3Cells={part3Cells} setPart3Parts={setPart3Parts}
                            part4Cells={part4Cells} setPart4Parts={setPart4Parts}
                            part5Cells={part5Cells} setPart5Parts={setPart5Parts}/>
        default:
            return null
    }
}

export default HeatBalanceModel
