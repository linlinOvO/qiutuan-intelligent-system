import './App.css';
import MaterialListPage from "./Pages/MaterialListPage";
import OxygenDetection from "./Pages/OxygenDetection";
import PalletModelPage from "./Pages/PalletModelPage";
import LoginPage from "./Pages/LoginPage";
import useToken from './useToken';
import React, {useState} from "react";
import MenuList from "./Components/General/MenuList";
import Header from "./Components/General/Header";
import NavigateBar from "./Components/General/NavigateBar";
import Window0 from "./Components/HeatBalanceModel/Window-0";
import Window1 from "./Components/HeatBalanceModel/Window-1";
import Window2 from "./Components/HeatBalanceModel/Window-2";
import Window3 from "./Components/HeatBalanceModel/Window-3";
import Window4 from "./Components/HeatBalanceModel/Window-4";
import Window5 from "./Components/HeatBalanceModel/Window-5";
import MonitoringPage from "./Pages/MonitoringPage";
import HomePage from "./Pages/HomePage";
import GeneralPage from "./Pages/GeneralPage";
import PDFViewer from "./Pages/PDFViewer";
import ContactPage from "./Pages/ContactPage";
import ThresholdManagement from "./Pages/ThresholdManagement";
import CoalMonitoring from "./Pages/CoalMonitoring";

function App() {
    const {token, setToken, deleteToken} = useToken();
    const [length, setLength] = useState("long")    // long & short
    // const [page, setPage] = useState("首页")
    // const pages = ["原料录入数据库", "预热段氧含量监测", "球团配料计算模型", "能量流监控", "回转窑结圈周期预测", "数据挖掘、阈值设定", "数据驾驶舱"]
    const [openedPages, setOpenedPages] = useState([])
    const [currentPage, setCurrentPage] = useState("首页")
    // console.log(currentPage)

    const [part1Cells, setPart1Parts] = useState([])
    const [part2Cells, setPart2Parts] = useState([])
    const [part3Cells, setPart3Parts] = useState([])
    const [part4Cells, setPart4Parts] = useState([])
    const [part5Cells, setPart5Parts] = useState([])


    // useEffect(() => {
    //     fetch('/api/v1/part/' + 1)
    //         .then(response => response.json())
    //         .then(data => getPart1(data[0]))
    //         .then(p1 => {
    //             setPart1Parts(p1)
    //         })
    //     fetch('/api/v1/part/' + 2)
    //         .then(response => response.json())
    //         .then(data => getPart2(data[0]))
    //         .then(p2 => {
    //             setPart2Parts(p2)
    //         })
    //     fetch('/api/v1/part/' + 3)
    //         .then(response => response.json())
    //         .then(data => getPart3(data[0]))
    //         .then(p3 => {
    //             setPart3Parts(p3)
    //         })
    //     fetch('/api/v1/part/' + 4)
    //         .then(response => response.json())
    //         .then(data => getPart4(data[0]))
    //         .then(p4 => {
    //             setPart4Parts(p4)
    //         })
    // }, [1])

    // console.log(currentPage)

    if (!token) {
        return <LoginPage setToken={setToken}/>
    }
    //localStorage.clear()
    return (
        <div className="root">
            {/*上方标题开始*/}
            <Header deleteToken={deleteToken}/>
            {/*上方标题结束*/}
            {/*左侧菜单栏开始*/}
            <MenuList length={length} setLength={setLength} openedPages={openedPages}
                      setOpenedPages={setOpenedPages} setCurrentPage={setCurrentPage}/>
            {/*左侧菜单栏结束*/}
            <div className={length === "long" ? "app-body" : "app-body1"}>
                {/*右侧导航栏开始*/}
                <NavigateBar currentPage={currentPage} openedPages={openedPages}
                             setOpenedPages={setOpenedPages} setCurrentPage={setCurrentPage}/>
                {/*右侧导航栏结束*/}
                <div className="app-body-content">
                    <Content currentPage={currentPage} openedPages={openedPages}
                             setCurrentPage={setCurrentPage} setOpenedPages={setOpenedPages}
                             part1Cells={part1Cells} setPart1Parts={setPart1Parts}
                             part2Cells={part2Cells} setPart2Parts={setPart2Parts}
                             part3Cells={part3Cells} setPart3Parts={setPart3Parts}
                             part4Cells={part4Cells} setPart4Parts={setPart4Parts}
                             part5Cells={part5Cells} setPart5Parts={setPart5Parts}/>
                </div>
            </div>
        </div>
    );
}

const Content = (props) => {
    if(props.currentPage === "首页"){
        return <HomePage setOpenedPages={props.setOpenedPages}
                         setCurrentPage={props.setCurrentPage}
                         openedPages={props.openedPages}/>
    }

    if(props.currentPage === "系统总览"){
        return <GeneralPage setOpenedPages={props.setOpenedPages}
                            setCurrentPage={props.setCurrentPage}
                            openedPages={props.openedPages}/>
    }

    if(props.currentPage === "原料管理"){
        return <MaterialListPage/>
    }

    if(props.currentPage === "氧势监控"){
        return <OxygenDetection/>
    }

    if(props.currentPage === "配料计算"){
        return <PalletModelPage/>
    }

    if(props.currentPage === "链篦机系统"){
        return <Window0/>
    }
    if(props.currentPage === "回转窑系统"){
        return <Window1/>
    }
    if(props.currentPage === "环冷机系统"){
        return <Window2/>
    }
    if(props.currentPage === "链回环系统"){
        return <Window3/>
    }
    if(props.currentPage === "预设值参数"){
        return <Window4 part1Cells={props.part1Cells} setPart1Parts={props.setPart1Parts}
                        part2Cells={props.part2Cells} setPart2Parts={props.setPart2Parts}
                        part3Cells={props.part3Cells} setPart3Parts={props.setPart3Parts}
                        part4Cells={props.part4Cells} setPart4Parts={props.setPart4Parts}/>
    }
    if(props.currentPage === "离线计算"){
        return <Window5 part1Cells={props.part1Cells} setPart1Parts={props.setPart1Parts}
                        part2Cells={props.part2Cells} setPart2Parts={props.setPart2Parts}
                        part3Cells={props.part3Cells} setPart3Parts={props.setPart3Parts}
                        part4Cells={props.part4Cells} setPart4Parts={props.setPart4Parts}
                        part5Cells={props.part5Cells} setPart5Parts={props.setPart5Parts}/>
    }

    if(props.currentPage === "炉况监控"){
        return <MonitoringPage/>
    }

    if(props.currentPage === "说明书"){
        return <PDFViewer/>
    }

    if(props.currentPage === "帮助反馈"){
        return <ContactPage/>
    }

    if(props.currentPage === "阈值管理"){
        return <ThresholdManagement/>
    }

    if(props.currentPage === "喷煤监控"){
        return <CoalMonitoring/>
    }
}

export default App;
