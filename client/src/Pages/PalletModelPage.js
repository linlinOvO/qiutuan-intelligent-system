import React, {useEffect, useState} from "react";
import './PalletModelPage.css'
import '../App.css'
import ButtonPart from "../Components/PalletModelPage/ButtonPart";
import ConditionPart from "../Components/PalletModelPage/ConditionPart";
import MaterialConcentrated from "../Components/PalletModelPage/MaterialConcentrated";
import ResultPart from "../Components/PalletModelPage/ResultPart";
import ChooseMaterialPopup from "../Components/PalletModelPage/ChooseMaterialPopup";
import MaterialCatergory from "../Components/PalletModelPage/MaterialCatergory";
import ReactEcharts from "echarts-for-react";

const PMChart1 = (props) => {

    const data = []
    for(let i in props.materialChosen){
        for(let j in props.materialChosen[i]){
            const name = props.materialChosen[i][j].materialName
            const value = props.materialDryProportion[i][j]
            const item = {name: name, value: value}
            data.push(item)
        }
    }

    const option = {
        title: {
            text: '物料成分'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '20%',
            orient: 'vertical',
            type: 'scroll',
            left: "70%",
        },
        series: [
            {
                name: '物料成分',
                type: 'pie',
                radius: ['40%', '70%'],
                center:['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: data
            }
        ]
    };

    return (
        <div className="palletModelPage_chart1">
            <ReactEcharts option={option} style={{height: "100%", width: '100%'}}/>
        </div>
    )
}

const PMChart2 = (props) => {

    const elementAmounts = props.elementAmounts

    const data = [
        {name: "TFe", value: elementAmounts.TFe},
        {name: "FeO", value: elementAmounts.FeO},
        {name: "SiO2", value: elementAmounts.SiO2},
        {name: "CaO", value: elementAmounts.CaO},
        {name: "MgO", value: elementAmounts.MgO},
        {name: "Al2O3", value: elementAmounts.Al2O3},
        {name: "Mn", value: elementAmounts.Mn},
        {name: "Na2O", value: elementAmounts.Na2O},
        {name: "MnO", value: elementAmounts.MnO},
        {name: "ZnO", value: elementAmounts.ZnO},
        {name: "TiO2", value: elementAmounts.TiO2},
        {name: "P2O5", value: elementAmounts.P2O5},
    ]
    // console.log(data2.map((d) => d.name))
    // console.log(data2.map((d) => Number(d.value)))


    // 图二
    const option = {
        title: {
            text: '主要成分'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '20%',
            orient: 'vertical',
            type: 'scroll',
            left: "70%",
        },
        series: [
            {
                name: '物料成分',
                type: 'pie',
                radius: ['40%', '70%'],
                center:['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: data
            }
        ]
    };

    return (
        <div className="palletModelPage_chart1">
            <ReactEcharts option={option} style={{height: "100%", width: '100%'}}/>
        </div>
    )
}

const PMChart3 = (props) => {

    const elementAmounts = props.elementAmounts

    const data = [
        {name: "Cl", value: elementAmounts.Cl},
        {name: "P", value: elementAmounts.P},
        {name: "S", value: elementAmounts.S},
        {name: "Zn", value: elementAmounts.Zn},
        {name: "F", value: elementAmounts.F},
    ]
    // console.log(data2.map((d) => d.name))
    // console.log(data2.map((d) => Number(d.value)))


    // 图二
    const option = {
        title: {
            text: '微量成分'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '20%',
            orient: 'vertical',
            type: 'scroll',
            left: "70%",
        },
        series: [
            {
                name: '物料成分',
                type: 'pie',
                radius: ['40%', '70%'],
                center:['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: data
            }
        ]
    };

    return (
        <div className="palletModelPage_chart1">
            <ReactEcharts option={option} style={{height: "100%", width: '100%'}}/>
        </div>
    )
}

const PMChart4 = (props) => {

    const elementAmounts = props.elementAmounts

    const data = [
        {name: "TFe", value: elementAmounts.TFe},
        {name: "FeO", value: elementAmounts.FeO},
        {name: "SiO2", value: elementAmounts.SiO2},
        {name: "CaO", value: elementAmounts.CaO},
        {name: "MgO", value: elementAmounts.MgO},
        {name: "Al2O3", value: elementAmounts.Al2O3},
        {name: "Mn", value: elementAmounts.Mn},
        {name: "Na2O", value: elementAmounts.Na2O},
        {name: "MnO", value: elementAmounts.MnO},
        {name: "ZnO", value: elementAmounts.ZnO},
        {name: "TiO2", value: elementAmounts.TiO2},
        {name: "P2O5", value: elementAmounts.P2O5},
    ]
    // console.log(data2.map((d) => d.name))
    // console.log(data2.map((d) => Number(d.value)))


    // 图二
    const option = {
        title: {
            text: '主要成分'
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            data: data.map((d) => d.name)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data.map((d) => Number(d.value)),
                type: 'bar',
                showBackground: true,
                label: {
                    show: true,
                    position: 'top'
                },
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    return (
        <div className="palletModelPage_chart">
            <ReactEcharts option={option} style={{height: "100%", width: '100%'}}/>
        </div>
    )
}

const PMChart5 = (props) => {

    const elementAmounts = props.elementAmounts

    const data = [
        {name: "Cl", value: elementAmounts.Cl},
        {name: "P", value: elementAmounts.P},
        {name: "S", value: elementAmounts.S},
        {name: "Zn", value: elementAmounts.Zn},
        {name: "F", value: elementAmounts.F},
    ]
    // console.log(data2.map((d) => d.name))
    // console.log(data2.map((d) => Number(d.value)))


    // 图二
    const option = {
        title: {
            text: '微量成分'
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            data: data.map((d) => d.name)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data.map((d) => Number(d.value)),
                type: 'bar',
                showBackground: true,
                label: {
                    show: true,
                    position: 'top'
                },
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    return (
        <div className="palletModelPage_chart">
            <ReactEcharts option={option} style={{height: "100%", width: '100%'}}/>
        </div>
    )
}

const PalletModelPage = (props) => {

    // 是否打开新窗口
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [checkBox, setCheckBox] = useState([[], [], [], [], []])
    // 选中的原料 膨润土、铁矿粉、熔剂、喷吹煤
    const [materialChosen, setMaterialChosen] = useState([[], [], [], []])
    // console.log(materialChosen)
    //选中原料干配比
    const [materialDryProportion, setMaterialDryProportion] = useState([[], [], [], [], []])
    //选中原料湿配比
    const [materialWetProportion, setMaterialWetProportion] = useState([[], [], [], []])

    // 展示方式
    const [display, setDisplay] = useState('concentrated')
    // 干湿配比
    const [ratio, setRatio] = useState('dry')  // dry and wet

    //预计球团FeO含量
    const [inputFeO, setInputFeO] = useState(1)

    // 各元素占比
    const [elementAmounts, setElementAmounts] = useState({
        TFe : 0,
        FeO : 0,
        SiO2 : 0,
        CaO : 0,
        MgO : 0,
        Al2O3 : 0,
        K2O : 0,
        Cl : 0,
        Mn : 0,
        P : 0,
        Na2O : 0,
        MnO : 0,
        ZnO : 0,
        TiO2 : 0,
        P2O5 : 0,
        S : 0,
        Zn : 0,
        F : 0,
        water: 0
    })

    //  计算各成分占比
    const calculateProportion = (input_FeO) => {
        if(JSON.stringify(materialChosen) === "[[],[],[],[]]")  return {}

        const ls = materialChosen
        const ratios = materialDryProportion

        let TFe = 0, FeO = 0, SiO2 = 0, CaO = 0, MgO = 0, Al2O3 = 0, K2O = 0, Cl = 0, Mn = 0, P = 0, Na2O = 0,
            MnO = 0, ZnO = 0, TiO2 = 0, P2O5 = 0, S = 0, Zn = 0, F = 0, water = 0
        let totalBurnLoss = 0

        // console.log(inputFeO)
        // 计算混匀矿各成分含量，计算总烧损
        for(let i in ls){
            for(let j in ls[i]){
                TFe += (ls[i][j].hasOwnProperty('TFe') ? ls[i][j]['TFe'] : 0) * ratios[i][j] / 100
                CaO += (ls[i][j].hasOwnProperty('CaO') ? ls[i][j]['CaO'] : 0) * ratios[i][j] / 100
                MgO += (ls[i][j].hasOwnProperty('MgO') ? ls[i][j]['MgO'] : 0) * ratios[i][j] / 100
                SiO2 += (ls[i][j].hasOwnProperty('SiO2') ? ls[i][j]['SiO2'] : 0) * ratios[i][j] / 100
                Al2O3 += (ls[i][j].hasOwnProperty('Al2O3') ? ls[i][j]['Al2O3'] : 0) * ratios[i][j] / 100
                FeO += (ls[i][j].hasOwnProperty('FeO') ? ls[i][j]['FeO'] : 0) * ratios[i][j] / 100
                K2O += (ls[i][j].hasOwnProperty('K2O') ? ls[i][j]['K2O'] : 0) * ratios[i][j] / 100
                Na2O += (ls[i][j].hasOwnProperty('Na2O') ? ls[i][j]['Na2O'] : 0) * ratios[i][j] / 100
                TiO2 += (ls[i][j].hasOwnProperty('TiO2') ? ls[i][j]['TiO2'] : 0) * ratios[i][j] / 100
                P2O5 += (ls[i][j].hasOwnProperty('P2O5') ? ls[i][j]['P2O5'] : 0) * ratios[i][j] / 100
                MnO += (ls[i][j].hasOwnProperty('MnO') ? ls[i][j]['MnO'] : 0) * ratios[i][j] / 100
                Cl += (ls[i][j].hasOwnProperty('Cl') ? ls[i][j]['Cl'] : 0) * ratios[i][j] / 100
                S += (ls[i][j].hasOwnProperty('S') ? ls[i][j]['S'] : 0) * ratios[i][j] / 100
                F += (ls[i][j].hasOwnProperty('F') ? ls[i][j]['F'] : 0) * ratios[i][j] / 100
                Mn += (ls[i][j].hasOwnProperty('Mn') ? ls[i][j]['Mn'] : 0) * ratios[i][j] / 100
                Zn += (ls[i][j].hasOwnProperty('Zn') ? ls[i][j]['Zn'] : 0) * ratios[i][j] / 100
                P += (ls[i][j].hasOwnProperty('P') ? ls[i][j]['P'] : 0) * ratios[i][j] / 100
                water += (ls[i][j].hasOwnProperty('water') ? ls[i][j]['water'] : 0) * ratios[i][j] / 100
                totalBurnLoss += ls[i][j].burningLoss * ratios[i][j] / 100
            }
        }

        totalBurnLoss = 100 - totalBurnLoss

        // console.log("first")
        // console.log(TFe, FeO, CaO, SiO2, F, MgO, Al2O3, totalBurnLoss)

        // 亚铁增重
        const FeOIncrement = 0

        water = inputFeO / 9

        // 总残存
        const totalRest = totalBurnLoss + water * totalBurnLoss / 100

        TFe = (TFe / (totalBurnLoss - water) * 100).toFixed(2)

        CaO = CaO / 100
        SiO2 = SiO2 / 100
        F = F / 100
        FeO = FeO / 100
        MgO = MgO / 100
        Al2O3 = Al2O3 / 100
        // totalBurnLoss = (CaO - 1.47 * F) / SiO2

        // console.log("second")
        // console.log(TFe, FeO, CaO, SiO2, F, MgO, Al2O3, totalBurnLoss)

        // TFe = (TFe / totalRest * 100).toFixed(3)

        //
        //
        // MgO = (MgO / 100).toFixed(3)
        // Al2O3 = (Al2O3 * 100).toFixed(3)
        // MnO = (MnO * 100).toFixed(3)
        // P = (P * 100).toFixed(3)
        // // water = (water / totalRest * 100).toFixed(3)
        // Mn = (Mn * 100).toFixed(3)
        // ZnO = (ZnO * 100).toFixed(3)
        // TiO2 = (TiO2 * 100).toFixed(3)
        // P2O5 = (P2O5 * 100).toFixed(3)
        // FeO = input_FeO;
        // K2O = (K2O / 100).toFixed(3)
        // Na2O = (Na2O / 100).toFixed(3)
        // Cl = (Cl / 100).toFixed(3)
        // S = (S / 100).toFixed(3)
        // Zn = (Zn / 100).toFixed(3)
        // water = (inputFeO / 9).toFixed(3)

        CaO = (CaO * 100 / (totalBurnLoss - water) * 100).toFixed(3)
        MgO = (MgO * 100 / (totalBurnLoss - water) * 100).toFixed(3)
        SiO2 = (SiO2 * 100 / (totalBurnLoss - water) * 100).toFixed(3)
        Al2O3 = (Al2O3 * 100 / (totalBurnLoss - water) * 100).toFixed(3)
        F = (F * 100 / (100 + water) * 100).toFixed(3)
        FeO = input_FeO;
        K2O = (K2O / totalRest * 100 * (1 - 0.02)).toFixed(3)
        Na2O = (Na2O / totalRest * 100 * (1 - 0.11)).toFixed(3)
        Cl = (Cl / totalRest * 100 * (1 - 0.10)).toFixed(3)
        S = (S / totalRest * 100 * (1 - 0.80)).toFixed(3)
        Zn = (Zn / totalRest * 100 * (1 - 0.07)).toFixed(3)
        MnO = (MnO / totalRest * 100).toFixed(3)
        P = (P / totalRest * 100).toFixed(3)
        Mn = (Mn / totalRest * 100).toFixed(3)
        ZnO = (ZnO / totalRest * 100).toFixed(3)
        TiO2 = (TiO2 / totalRest * 100).toFixed(3)
        P2O5 = (P2O5 / totalRest * 100).toFixed(3)

        return {
            TFe : TFe,
            FeO : FeO,
            SiO2 : SiO2,
            CaO : CaO,
            MgO : MgO,
            Al2O3 : Al2O3,
            K2O : K2O,
            Cl : Cl,
            Mn : Mn,
            P : P,
            Na2O : Na2O,
            MnO : MnO,
            ZnO : ZnO,
            TiO2 : TiO2,
            P2O5 : P2O5,
            S : S,
            Zn : Zn,
            F : F,
            water: water
        }
    }

    // localStorage.clear()

    // 储存到Cookie里
    const storeToLocalStorage = () => {
        // console.log(checkBox)
        if(JSON.stringify(checkBox) === '[[],[],[],[],[]]') {
            return
        }
        // if(JSON.stringify(materialDryProportion) === '[[],[],[],[],[]]'){
        //     localStorage.removeItem("materialDryProportion")
        // }
        // if(JSON.stringify(materialChosen) === '[[{}],[],[],[]]'){
        //     localStorage.removeItem("materialChosen")
        // }


        if(JSON.stringify(checkBox) !== '[[],[],[],[],[]]'){
            localStorage.setItem("checkBox", JSON.stringify(checkBox))
            localStorage.setItem("materialDryProportion", JSON.stringify(materialDryProportion))

            const temp = [[], [], [], []]
            for(let i in materialChosen){
                for(let j in materialChosen[i]){
                    temp[i].push(JSON.stringify(materialChosen[i][j]))
                }
            }

            localStorage.setItem("materialChosen", JSON.stringify(temp))
        }
    }

    useEffect(() => {

        if(localStorage.getItem("materialChosen") !== null){
            const b = JSON.parse(localStorage.getItem("materialChosen"))
            const c = [[],[],[],[]]
            for(let i in b){
                for(let j in b[i]){
                    c[i].push(JSON.parse(b[i][j]))
                }
            }
            setMaterialChosen(c)
        }
        // console.log(JSON.parse(localStorage.getItem("checkBox")))
        if(localStorage.getItem("checkBox") !== null){
            setCheckBox(JSON.parse(localStorage.getItem("checkBox")))
        }
        if(localStorage.getItem("materialDryProportion") !== null){
            // console.log(localStorage.getItem("materialDryProportion"))

            setMaterialDryProportion(JSON.parse(localStorage.getItem("materialDryProportion")))
        }

    }, [])

    storeToLocalStorage()

    // localStorage.clear()

    return (
        <div className="palletModelPage">
            <ButtonPart handleClose={togglePopup} display={display} setDisplay={setDisplay}
                        ratio={ratio} setRatio={setRatio}/>
            {/*<button onClick={() => {*/}
            {/*    console.log(checkBox)*/}
            {/*    console.log(materialDryProportion)*/}
            {/*}}></button>*/}
            <div className="palletModelPage_calculatePart">
                <ConditionPart materialProportion={materialDryProportion} inputFeO={inputFeO} setInputFeO={setInputFeO}
                               calculateProportion={calculateProportion} setElementAmounts={setElementAmounts}/>
                {display === 'concentrated' ?
                    <MaterialConcentrated materialChosen={materialChosen} length={props.length}
                                          ratio={ratio} materialDryProportion={materialDryProportion}
                                          setMaterialDryProportion={setMaterialDryProportion}
                                          materialWetProportion={materialWetProportion}
                                          setMaterialWetProportion={setMaterialWetProportion}
                                          setElementAmounts={setElementAmounts}
                                          inputFeO={inputFeO}
                                          calculateProportion={calculateProportion}/> :
                    <MaterialCatergory materialChosen={materialChosen} ratio={ratio}
                                       materialDryProportion={materialDryProportion}
                                       setMaterialDryProportion={setMaterialDryProportion}
                                       materialWetProportion={materialWetProportion}
                                       setMaterialWetProportion={setMaterialWetProportion}
                                       setElementAmounts={setElementAmounts}
                                       inputFeO={inputFeO}
                                       calculateProportion={calculateProportion}/>}
            </div>
            <ResultPart materialChosen={materialChosen} ratio={ratio} elementAmounts={elementAmounts}/>
            <PMChart1 materialChosen={materialChosen} materialDryProportion={materialDryProportion}/>
            <PMChart2 elementAmounts={elementAmounts}/>
            <PMChart3 elementAmounts={elementAmounts}/>
            <PMChart4 elementAmounts={elementAmounts}/>
            <PMChart5 elementAmounts={elementAmounts}/>
            {isOpen && <ChooseMaterialPopup
                handleClose={togglePopup}
                checkBox={checkBox}
                setCheckBox={setCheckBox}
                materialChosen={materialChosen}
                setMaterialChosen={setMaterialChosen}
                materialDryProportion={materialDryProportion}
                setMaterialProportion={setMaterialDryProportion}
            />}
        </div>
    )
}

export default PalletModelPage
