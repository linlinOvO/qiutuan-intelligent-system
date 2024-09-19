import React, {useEffect, useRef, useState} from "react";
import './GeneralPage.css'
import '../App.css'
import ReactEcharts from "echarts-for-react";
import Loading from "../Components/General/Loading";
// import {getPart5JSON} from "../Components/HeatBalanceModel/Parameters";
// import {Yr1Chart, Yr2Chart, YtChart, YwChart} from "./MonitoringPage";



// const ChartOne = () => {
//
//     const [value, setValue] = useState(0)
//     const [oxygenOne, setOxygenOne] = useState("normal")
//
//
//     const testWarningOne = () => {
//         setOxygenOne("abnormal")
//         setTimeout(() => {setOxygenOne("normal")}, 10 * 1000)
//     }
//
//     async function getData() {
//         fetch('/api/v1/oxygen-single', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setValue(data[0].oxygenContent)
//             })
//     }
//
//
//     useEffect(() => {
//         getData().then()
//     }, []);
//
//
//     setInterval(getData, 60 * 1000);
//
//
//     const option = {
//         title: {
//             text: '预热Ⅰ段氧含量'
//         },
//         tooltip: {
//             formatter: '{a} <br/>{b} : {c}%'
//         },
//         series: [
//             {
//                 name: '氧探头I',
//                 type: 'gauge',
//                 min: 18,
//                 max: 21,
//                 itemStyle: {
//                     color: oxygenOne === "normal" ? null : '#FD7347'
//                 },
//                 progress: {
//                     show: true
//                 },
//                 detail: {
//                     valueAnimation: true,
//                     formatter: '{value}',
//                     color: 'inherit'
//                 },
//                 data: [
//                     {
//                         value: value,
//                         name: '氧含量'
//                     }
//                 ]
//             }
//         ]
//     };
//
//     return(
//         <div className="gp-part1-chart">
//             <button onClick={testWarningOne}>{"预热I氧含量测试按钮"}</button>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
// }
//
// const ChartTwo = () => {
//
//     const [value, setValue] = useState(0)
//     const [oxygenTwo, setOxygenTwo] = useState("normal")
//
//     const testWarningOne = () => {
//         setOxygenTwo("abnormal")
//         setTimeout(() => {setOxygenTwo("normal")}, 10 * 1000)
//     }
//
//     async function getData() {
//         fetch('/api/v1/oxygen-single2', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setValue(data[0].oxygenContent)
//             })
//     }
//
//
//     useEffect(() => {
//         getData().then()
//     }, []);
//
//
//     setInterval(getData, 60 * 1000);
//
//
//     const option = {
//         title: {
//             text: '预热ⅠI段氧含量'
//         },
//         tooltip: {
//             formatter: '{a} <br/>{b} : {c}%'
//         },
//         series: [
//             {
//                 name: '氧探头II',
//                 type: 'gauge',
//                 min: 13,
//                 max: 14,
//                 itemStyle: {
//                     color: oxygenTwo === "normal" ? null : '#FD7347'
//                 },
//                 progress: {
//                     show: true
//                 },
//                 detail: {
//                     valueAnimation: true,
//                     formatter: '{value}',
//                     color: 'inherit'
//                 },
//                 data: [
//                     {
//                         value: value,
//                         name: '氧含量'
//                     }
//                 ]
//             }
//         ]
//     };
//
//     return(
//         <div className="gp-part1-chart">
//             <button onClick={testWarningOne}>{"预热II氧含量测试按钮"}</button>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
// }
//
// const ChartThree = () => {
//
//     const [value, setValue] = useState(0)
//     const [temperatureTwo, setTemperatureTwo] = useState("normal")
//
//     const testWarningOne = () => {
//         setTemperatureTwo("abnormal")
//         setTimeout(() => {setTemperatureTwo("normal")}, 10 * 1000)
//     }
//
//     async function getData() {
//         fetch('/api/v1/oxygen-single3', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setValue(data[0].oxygenContent)
//             })
//     }
//
// // Write this line
//
//     useEffect(() => {
//         getData()
//     }, []);
//
//
//     setInterval(getData, 60 * 1000);
//
//
//     const option = {
//         title: {
//             text: '预热ⅠI段温度'
//         },
//         series: [
//             {
//                 type: 'gauge',
//                 center: ['50%', '60%'],
//                 startAngle: 200,
//                 endAngle: -20,
//                 min: 970,
//                 max: 980,
//                 itemStyle: {
//                     color: temperatureTwo === "normal" ? '#9bacdc' : '#FFAB91'
//                 },
//                 progress: {
//                     show: true,
//                     width: 30
//                 },
//                 pointer: {
//                     show: false
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         width: 30
//                     }
//                 },
//                 axisTick: {
//                     distance: -45,
//                     splitNumber: 5,
//                     lineStyle: {
//                         width: 2,
//                         color: '#999'
//                     }
//                 },
//                 splitLine: {
//                     distance: -52,
//                     length: 14,
//                     lineStyle: {
//                         width: 3,
//                         color: '#999'
//                     }
//                 },
//                 axisLabel: {
//                     distance: -12,
//                     color: '#999',
//                     fontSize: 14
//                 },
//                 anchor: {
//                     show: false
//                 },
//                 title: {
//                     show: false
//                 },
//                 detail: {
//                     valueAnimation: true,
//                     width: '60%',
//                     lineHeight: 40,
//                     borderRadius: 8,
//                     offsetCenter: [0, '-15%'],
//                     fontSize: 30,
//                     fontWeight: 'bolder',
//                     formatter: '{value} °C',
//                     color: 'inherit'
//                 },
//                 data: [
//                     {
//                         value: value
//                     }
//                 ]
//             },
//             {
//                 type: 'gauge',
//                 center: ['50%', '60%'],
//                 startAngle: 200,
//                 endAngle: -20,
//                 min: 970,
//                 max: 980,
//                 itemStyle: {
//                     color: temperatureTwo === "normal" ? null : '#FD7347'
//                 },
//                 progress: {
//                     show: true,
//                     width: 8
//                 },
//                 pointer: {
//                     show: false
//                 },
//                 axisLine: {
//                     show: false
//                 },
//                 axisTick: {
//                     show: false
//                 },
//                 splitLine: {
//                     show: false
//                 },
//                 axisLabel: {
//                     show: false
//                 },
//                 detail: {
//                     show: false
//                 },
//                 data: [
//                     {
//                         value: value
//                     }
//                 ]
//             }
//         ]
//     };
//
//     return(
//         <div className="gp-part1-chart">
//             <button onClick={testWarningOne}>{"预热II温度测试按钮"}</button>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
// }
//
// const ChartFour = () => {
//     const option = {
//         title: {
//             text: '喷煤量'
//         },
//         series: [
//             {
//                 type: 'gauge',
//                 progress: {
//                     show: true,
//                     width: 18
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         width: 18
//                     }
//                 },
//                 axisTick: {
//                     show: false
//                 },
//                 splitLine: {
//                     length: 15,
//                     lineStyle: {
//                         width: 2,
//                         color: '#999'
//                     }
//                 },
//                 axisLabel: {
//                     distance: 25,
//                     color: '#999',
//                     fontSize: 20
//                 },
//                 anchor: {
//                     show: true,
//                     showAbove: true,
//                     size: 25,
//                     itemStyle: {
//                         borderWidth: 10
//                     }
//                 },
//                 title: {
//                     show: false
//                 },
//                 detail: {
//                     valueAnimation: true,
//                     fontSize: 80,
//                     offsetCenter: [0, '70%']
//                 },
//                 data: [
//                     {
//                         value: 70
//                     }
//                 ]
//             }
//         ]
//     };
//
//     return(
//         <div className="gp-part1-chart">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
// }
//
// const ChartFive = () => {
//     const option = {
//         title: {
//             text: '备用图'
//         },
//         series: [
//             {
//                 type: 'gauge',
//                 progress: {
//                     show: true,
//                     width: 18
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         width: 18
//                     }
//                 },
//                 axisTick: {
//                     show: false
//                 },
//                 splitLine: {
//                     length: 15,
//                     lineStyle: {
//                         width: 2,
//                         color: '#999'
//                     }
//                 },
//                 axisLabel: {
//                     distance: 25,
//                     color: '#999',
//                     fontSize: 20
//                 },
//                 anchor: {
//                     show: true,
//                     showAbove: true,
//                     size: 25,
//                     itemStyle: {
//                         borderWidth: 10
//                     }
//                 },
//                 title: {
//                     show: false
//                 },
//                 detail: {
//                     valueAnimation: true,
//                     fontSize: 80,
//                     offsetCenter: [0, '70%']
//                 },
//                 data: [
//                     {
//                         value: 70
//                     }
//                 ]
//             }
//         ]
//     };
//
//     return(
//         <div className="gp-part1-chart">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
// }

// const Yr1Chart = () => {
//
//     const [data, setData] = useState({
//         initialData: [],
//         currentVal: 0,
//         // currentNewVal: 0
//     })
//
//
//     // console.log(data.initialData)
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/yr1', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setData(data)
//             })
//     }
//     if(data.initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '预热\u2160段温度 ℃\''
//         },
//         tooltip: {
//             position: {right: "25%", top: 30},
//             trigger: 'axis',
//             axisPointer: {
//                 animation: false
//             }
//         },
//
//         grid: {
//             top: '50%',
//             left: '3%',
//             right: '21%',
//             bottom: '0',
//             containLabel: true
//         },
//         toolbox: {
//             feature: {
//                 saveAsImage: {}
//             }
//         },
//         xAxis: {
//             type: 'time',
//             splitLine: {
//                 show: false
//             },
//             splitNumber: 2
//         },
//         yAxis: {
//             type: 'value',
//             min: 780,
//             max: 900,
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: data.initialData,
//                 showSymbol: false,
//                 markLine: {
//                     data: [
//                         {
//                             name: '报警预测最高值',
//                             yAxis: 871.85,
//                             lineStyle: {
//                                 normal: {
//                                     color: 'red',
//                                 }
//                             },
//                         },
//                         {
//                             name: '报警预测最低值',
//                             yAxis: 843.02,
//                             lineStyle: {
//                                 normal: {
//                                     color: 'blue',
//                                 }
//                             },
//                         }
//                     ],
//                 }
//             }
//         ]
//     };
//
//     if(data.initialData.length === 0){
//         return(
//             <div className="gp-part1-part" style={{marginRight:"10px", marginBottom:"10px"}}>
//                 <div className="container">
//                     <div className="trans">
//                         <span>加载中...</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//
//     return(
//         <div className="gp-part1-part" style={{marginRight:"10px", marginBottom:"10px"}}>
//             <div className="gp-part1-current">{data.currentVal}</div>
//             {/*<div className="gp-part1-new">{data.currentNewVal}</div>*/}
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
//
// }
//
// const Yr2Chart = () => {
//
//     const [data, setData] = useState({
//         initialData: [],
//         currentVal: 0,
//         // currentNewVal: 0
//     })
//
//     // console.log(data.currentVal)
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/yr2', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setData(data)
//             })
//     }
//     if(data.initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '预热\u2161段温度 ℃'
//         },
//         tooltip: {
//             position: {right: "-70%", top: 30},
//             trigger: 'axis',
//             axisPointer: {
//                 animation: false
//             }
//         },
//
//         grid: {
//             top: '50%',
//             left: '3%',
//             right: '21%',
//             bottom: '0',
//             containLabel: true
//         },
//         toolbox: {
//             feature: {
//                 saveAsImage: {}
//             }
//         },
//         xAxis: {
//             type: 'time',
//             splitLine: {
//                 show: false
//             },
//             splitNumber: 2
//         },
//         yAxis: {
//             type: 'value',
//             min: 980,
//             max: 1050,
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: data.initialData,
//                 showSymbol: false,
//                 markLine: {
//                     data: [
//                         {
//                             name: '报警预测最高值',
//                             yAxis: 1025.11,
//                             lineStyle: {
//                                 normal: {
//                                     color: 'red',
//                                 }
//                             },
//                         },
//                         {
//                             name: '报警预测最低值',
//                             yAxis: 1008.09,
//                             lineStyle: {
//                                 normal: {
//                                     color: 'blue',
//                                 }
//                             },
//                         }
//                     ],
//                 }
//             }
//         ]
//     };
//
//     if(data.initialData.length === 0){
//         return(
//             <div className="gp-part1-part">
//                 <div className="container">
//                     <div className="trans">
//                         <span>加载中...</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//
//     return(
//         <div className="gp-part1-part">
//             <div className="gp-part1-current">{data.currentVal}</div>
//             {/*<div className="gp-part1-new">{data.currentNewVal}</div>*/}
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
//
// }
//
// const TemperatureChart = () => {
//
//     const [data, setData] = useState([])
//
//     // console.log(data.currentVal)
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/oxygen2/real-time', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setData(data)
//             })
//     }
//     if(data.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '预热\u2161段氧含量 %'
//         },
//         tooltip: {
//             position: {right: "-70%", bottom: 30},
//             trigger: 'axis',
//             axisPointer: {
//                 animation: false
//             }
//         },
//
//         grid: {
//             top: '50%',
//             left: '3%',
//             right: '21%',
//             bottom: '0',
//             containLabel: true
//         },
//         toolbox: {
//             feature: {
//                 saveAsImage: {}
//             }
//         },
//         xAxis: {
//             type: 'time',
//             splitLine: {
//                 show: false
//             },
//             splitNumber: 2
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: data,
//                 showSymbol: false,
//             }
//         ]
//     };
//
//     if(data.length === 0){
//         return(
//             <div className="gp-part1-part" style={{marginRight:"10px"}}>
//                 <Loading/>
//             </div>
//         )
//     }
//
//     return(
//         <div className="gp-part1-part" style={{marginRight:"10px"}}>
//             {/*<div className="gp-part1-current">{data[data.length - 1][1]}</div>*/}
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
//
// }
//
// const CoalChart = () => {
//
//     const [data, setData] = useState({
//         initialData: [],
//         currentVal: 0
//     })
//
//     // console.log(data.currentVal)
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/coal', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setData(data)
//             })
//     }
//     if(data.initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '喷煤量 t/h'
//         },
//         tooltip: {
//             position: {right: "-70%", bottom: 30},
//             trigger: 'axis',
//             axisPointer: {
//                 animation: false
//             }
//         },
//
//         grid: {
//             top: '50%',
//             left: '3%',
//             right: '21%',
//             bottom: '0',
//             containLabel: true
//         },
//         toolbox: {
//             feature: {
//                 saveAsImage: {}
//             }
//         },
//         xAxis: {
//             type: 'time',
//             splitLine: {
//                 show: false
//             },
//             splitNumber: 2
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: data.initialData,
//                 showSymbol: false,
//             }
//         ]
//     };
//
//     if(data.initialData.length === 0){
//         return(
//             <div className="gp-part1-part">
//                 <div className="container">
//                     <div className="trans">
//                         <span>加载中...</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//
//     return(
//         <div className="gp-part1-part">
//             <div className="gp-part1-current">{data.currentVal}</div>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
//
// }

// const PmlChart = () => {
//
//     const [data, setData] = useState({
//         initialData: [],
//         currentVal: 0,
//         currentNewVal: 0
//     })
//
//     console.log(data.currentVal)
//     const getData = () => {
//         fetch('/api/v1/furnace/yr1', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setData(data)
//             })
//     }
//     if(data.initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 31 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '预热\u2160数据'
//         },
//         tooltip: {
//             position: {right: "-70%", bottom: 30},
//             trigger: 'axis',
//             axisPointer: {
//                 animation: false
//             }
//         },
//
//         grid: {
//             top: '50%',
//             left: '3%',
//             right: '21%',
//             bottom: '0',
//             containLabel: true
//         },
//         toolbox: {
//             feature: {
//                 saveAsImage: {}
//             }
//         },
//         xAxis: {
//             type: 'time',
//             splitLine: {
//                 show: false
//             }
//         },
//         yAxis: {
//             type: 'value',
//             min: 780,
//             max: 900,
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: data.initialData,
//                 showSymbol: false,
//                 markLine: {
//                     data: [
//                         {
//                             name: '报警预测最高值',
//                             yAxis: 871.85,
//                             lineStyle: {
//                                 normal: {
//                                     color: 'red',
//                                 }
//                             },
//                         },
//                         {
//                             name: '报警预测最低值',
//                             yAxis: 843.02,
//                             lineStyle: {
//                                 normal: {
//                                     color: 'blue',
//                                 }
//                             },
//                         }
//                     ],
//                 }
//             }
//         ]
//     };
//
//     if(data.initialData.length === 0){
//         return(
//             <div className="gp-part1-part" style={{marginRight:"10px", marginBottom:"10px"}}>
//                 <div className="container">
//                     <div className="trans">
//                         <span>加载中...</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//
//     return(
//         <div className="gp-part1-part" style={{marginRight:"10px", marginBottom:"10px"}}>
//             <div className="gp-part1-current">{data.currentVal}</div>
//             <div className="gp-part1-new">{data.currentNewVal}</div>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
//
// }

// const RadarChart = () => {
//
//     const [time, setTime] = useState(Date.now());
//     const [initialData, setInitialData] = useState([])
//     // const [modifiedData, setModifiedData] = useState([])
//
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/radar', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 const addTime = new Date(data.addTime)
//
//                 setTime(addTime.getFullYear()+'-'+(addTime.getMonth()+1)+'-'+addTime.getDate()+' '
//                     +addTime.getHours()+':'+addTime.getMinutes()+':'+addTime.getSeconds())
//                 setInitialData(data.initialData)
//                 // setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//
//     const option = {
//         title: {
//             text: '雷达图'
//         },
//         tooltip: {
//             trigger: 'item',
//             axisPointer: {
//                 animation: false
//             }
//         },
//         legend: {
//             data: ['实时数据', '最大值', '最小值'],
//             //type: 'scroll',
//             //orient: 'vertical',
//             //top: '18%',
//             right: '0',
//             // itemGap: 1,
//             // textStyle: {
//             //     width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
//             //     height: 10,
//             //     overflow: "break",
//             //     fontSize: 10
//             // }
//         },
//         radar: {
//             // shape: 'circle',
//             center: ['50%', '58%'],
//             radius: 150,
//             indicator: [
//                 { name: '预热\u2160段氧含量', min: 780, max: 900 },
//                 { name: '预热\u2161段\n氧含量', min: 980, max: 1050 },
//                 { name: '窑头温度', min: 1110, max: 1160 },
//                 { name: '窑尾温度', min: 720, max: 900 },
//                 { name: '抽干段温度', min: 180, max: 320 },
//                 { name: '鼓干段温度', min: 50, max: 80 },
//             ]
//         },
//         series: [
//             {
//                 name: '雷达图',
//                 type: 'radar',
//                 data: [
//                     {
//                         value: initialData,
//                         name: '实时数据'
//                     },
//                     // {
//                     //     value: modifiedData,
//                     //     name: '优化数据'
//                     // },
//                     {
//                         value: [871.85, 1025.11, 1148.58, 881.83, 271.79, 71.87],
//                         name: '最大值'
//                     },
//                     {
//                         value: [843.02, 1008.09, 1126.94, 840.14, 252.29, 64.49],
//                         name: '最小值'
//                     }
//                 ]
//             }
//         ]
//     };
//
//     if(initialData.length === 0){
//         return (
//             <div className="gp-part2">
//                 <Loading/>
//             </div>
//         )
//     }
//
//     return (
//         <div className="gp-part2">
//             <div className="gp-part2-time">{"数据时间：" + time}</div>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
// }
//
// const MessageList = () => {
//
//     const [warningMessages, setWarningMessages] = useState([{
//         warningTime: new Date(),
//         warningValue: 0,
//         warningType: "",
//         warningRange: ""}])
//
//     const CH = ["预热\u2160段温度", "预热\u2161段温度", "窑头温度", "窑尾温度", "鼓干段温度", "抽干段温度"]
//     const EN = ["yr1", "yr2", "yt", "yw", "ggd", "cgd"]
//
//     useEffect(() => {
//         fetch('/api/v1/warning', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: JSON.stringify({
//                 warningTypeList: ["yr1", "yr2", "yt", "yw", "ggd", "cgd"]
//             })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setWarningMessages(data)
//             })
//     }, [])
//
//     return (
//         <div className="gp-part3">
//             <h3>{"异常消息提醒"}</h3>
//             <table className="gp-table">
//                 <thead>
//                 {warningMessages.map((message, index) => {
//
//                     const warningTime = new Date(message.warningTime)
//                     // console.log(typeof warningTime)
//                     const warningValue = message.warningValue
//                     const warningType = CH[EN.indexOf(message.warningType)]
//                     const warningRange = message.warningRange === "less" ? "过高, 建议降低" : "过低，建议增高"
//
//                     const warningText = `${warningTime.getFullYear()}年${warningTime.getMonth()}月${warningTime.getDate()}日
//                         ，${warningTime.getHours()}:${warningTime.getMinutes()}:${warningTime.getSeconds()}，
//                         ${warningType}值为${warningValue}, ${warningRange}${warningType}`
//
//                     return (
//                         <tr key={index}>
//                             <th>{warningText}</th>
//                         </tr>
//                     )
//                 })}
//                 </thead>
//             </table>
//         </div>
//     )
// }
//
// const SixLineChart = () => {
//
//     const [yr1Data, setYr1Data] = useState([])
//     const [yr2Data, setYr2Data] = useState([])
//     const [ytData, setYtData] = useState([])
//     const [ywData, setYwData] = useState([])
//     const [cgdData, setCgdData] = useState([])
//     const [ggdData, setGgdData] = useState([])
//
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/sixLine', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 //console.log(data)
//
//                 setYr1Data(data.yr1Data)
//                 setYr2Data(data.yr2Data)
//                 setYtData(data.ytData)
//                 setYwData(data.ywData)
//                 setCgdData(data.cgdData)
//                 setGgdData(data.ggdData)
//             })
//     }
//
//     if(yr1Data.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '历史温度曲线'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['预热\u2160段温度', '预热\u2161段温度', '窑头温度', '窑尾温度', '抽干段温度', '鼓干段温度'],
//
//             left: 120,
//             top: 0,
//             itemGap: 1,
//             textStyle: {
//                 width: 80, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
//                 height: 10,
//                 overflow: "break",
//                 fontSize: 10
//             }
//         },
//         grid: {
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             containLabel: true
//         },
//         toolbox: {
//             feature: {
//                 saveAsImage: {}
//             }
//         },
//         xAxis: {
//             type: 'time',
//             splitLine: {
//                 show: false
//             },
//             splitNumber: 4
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [
//             {
//                 name: '预热\u2160段温度',
//                 type: 'line',
//                 data: yr1Data
//             },
//             {
//                 name: '预热\u2161段温度',
//                 type: 'line',
//                 data: yr2Data
//             },
//             {
//                 name: '窑头温度',
//                 type: 'line',
//                 data: ytData
//             },
//             {
//                 name: '窑尾温度',
//                 type: 'line',
//                 data: ywData
//             },
//             {
//                 name: '抽干段温度',
//                 type: 'line',
//                 data: cgdData
//             },
//             {
//                 name: '鼓干段温度',
//                 type: 'line',
//                 data: ggdData
//             }
//         ]
//     };
//
//     return (
//         <div className="gp-part4">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left", zIndex: '10'}}/>
//         </div>
//     )
// }
//
// const MaterialPart = () => {
//
//     const [prtData, setPrtData] = useState([])
//     const [aqData, setAqData] = useState([])
//     const [dcData, setDcData] = useState([])
//
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/material', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 //console.log(data)
//
//                 setPrtData(data.prt)
//                 setAqData(data.aq)
//                 setDcData(data.dc)
//             })
//     }
//
//     if(prtData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 10 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     return (
//         <div className="gp-part5">
//             <div>{"膨润土：" + prtData + "%"}</div>
//             <div>{"鞍千：" + aqData + "%"}</div>
//             <div>{"大磁：" + dcData + "%"}</div>
//         </div>
//     )
// }

const GeneralPageDiv = (content) => {
    return (
            <div className="general_page_div">
                <div className="general_page_div_left_top_border"/>
                <div className="general_page_div_right_top_corner_border"/>
                <div className="general_page_div_right_top_top_border"/>
                <div className="general_page_div_right_top_right_border"/>
                <div className="general_page_div_left_bottom_corner"/>
                <div className="general_page_div_left_top_parallelogram1"/>
                <div className="general_page_div_left_top_parallelogram2"/>
                <div className="general_page_div_left_top_parallelogram3"/>
                <div className="general_page_div_left_top_parallelogram4"/>
                <div className="general_page_div_left_top_parallelogram5"/>
                <div className="general_page_div_left_bottom_parallelogram1"/>
                <div className="general_page_div_left_bottom_parallelogram2"/>
                <div className="general_page_div_left_bottom_parallelogram3"/>
                <div className="general_page_div_left_bottom_parallelogram4"/>
                <div className="general_page_div_left_bottom_parallelogram5"/>
                <div className="general_page_div_left_bottom_parallelogram6"/>
                {content}
            </div>
    )
}

const GeneralPageHeader = () => {
    return (
        <div className="general_page_header">
            <div className="general_page_header_top_bar">
                <div className="general_page_header_top_bar_left_bottom_corner"/>
                <div className="general_page_header_top_bar_right_bottom_corner"/>
            </div>
            <div className="general_page_header_top_box">
                <h2>{"大孤山球团厂大数据分析平台"}</h2>
                <p>{"Big Data Analysis Platform"}</p>
                <div className="general_page_header_top_box_left_bottom_corner"/>
                <div className="general_page_header_top_box_right_bottom_corner"/>
                <div className="general_page_header_top_box_left_parallelogram1"/>
                <div className="general_page_header_top_box_left_parallelogram2"/>
                <div className="general_page_header_top_box_left_parallelogram3"/>
                <div className="general_page_header_top_box_left_parallelogram4"/>
                <div className="general_page_header_top_box_left_parallelogram5"/>
                <div className="general_page_header_top_box_left_parallelogram6"/>
                <div className="general_page_header_top_box_left_parallelogram7"/>
                <div className="general_page_header_top_box_left_parallelogram8"/>

                <div className="general_page_header_top_box_right_parallelogram1"/>
                <div className="general_page_header_top_box_right_parallelogram2"/>
                <div className="general_page_header_top_box_right_parallelogram3"/>
                <div className="general_page_header_top_box_right_parallelogram4"/>
                <div className="general_page_header_top_box_right_parallelogram5"/>
                <div className="general_page_header_top_box_right_parallelogram6"/>
                <div className="general_page_header_top_box_right_parallelogram7"/>
                <div className="general_page_header_top_box_right_parallelogram8"/>

            </div>
        </div>
    )
}

// 左上角三个数值
const GeneralPagePart1 = () => {

    const [data, setData] = useState({N1: 0, N2: 0, N3: 0})

    const getData = () => {
        // 获取更新calculatedData里的数据
        fetch('/api/v1/part/calculated/single', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }

    // console.log(calculateData)

    if(data.N1 === 0){
        getData()
    }

    useEffect(() => {
        // 每 timeStamp 毫秒调用一次
        const timeStamp = 10 * 1000
        const interval = setInterval(getData, timeStamp);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="general_page_part1">
            {GeneralPageDiv(
                <div style={{height: "70px"}}>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data.N1.toFixed(3) + "%"}</div>
                        <div className="general_page_part1_part_name">
                            <div className="general_page_light_blue"/>
                            {"链回环热利用率"}
                        </div>
                    </div>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data.N2.toFixed(3) + "%"}</div>
                        <div className="general_page_part1_part_name">
                            <div className="general_page_light_green"/>
                            {"链回环热回收率"}
                        </div>
                    </div>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data.N3.toFixed(3) + "%"}</div>
                        <div className="general_page_part1_part_name">
                            <div className="general_page_light_red"/>
                            {"热损失"}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// 异常信息
const GeneralPagePart2 = () => {

    const [data, setData] = useState([
        {
            warningTime: "",
            warningText: ""
        }
    ])
    const scrollRef = useRef(null);

    const getData = () => {
        // 获取更新calculatedData里的数据
        fetch('/api/v1/warning', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }

    if(data[0].warningTime === ""){
        getData()
    }

    useEffect(() => {
        // 每 timeStamp 毫秒调用一次
        const timeStamp = 10 * 1000
        const interval = setInterval(getData, timeStamp);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="general_page_part2">
            {GeneralPageDiv(
                <div style={{height: "100%"}}>
                    <div className="general_page_part2_header">{"异常监控"}</div>
                    <div className="general_page_part2_table_header">
                        <div className="general_page_part2_table_time">{"时间"}</div>
                        <div className="general_page_part2_table_message">{"异常信息"}</div>
                        {/*<div className="general_page_part2_table_id">{"异常代码"}</div>*/}
                    </div>
                    <div
                        className="general_page_part2_table_body"
                        ref={scrollRef}
                    >
                        {data[0].warningTime === "" ? <Loading/>:
                            data.map((d, index) => {

                                return (
                                    <div className="general_page_part2_table_row" key={index}>
                                        <div className="general_page_part2_table_time">{d.warningTime}</div>
                                        <div className="general_page_part2_table_message">{d.warningText}</div>
                                        {/*<div className="general_page_part2_table_id">{index}</div>*/}
                                    </div>
                                )
                            })}
                    </div>

                </div>
            )}
        </div>
    )
}

// 右上角6个值
const GeneralPagePart3 = () => {

    const [data, setData] = useState([])

    const getData = () => {
        // 获取更新calculatedData里的数据
        fetch('/api/v1/furnace/radar', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setData(data.initialData)
            })
    }

    // console.log(calculateData)

    useEffect(() => {
        // 每 timeStamp 毫秒调用一次
        const timeStamp = 10 * 1000
        const interval = setInterval(getData, timeStamp);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(data)
    if(data.length === 0){
        getData()
        return <Loading/>
    }

    return (
        <div className="general_page_part3">
            {GeneralPageDiv(
                <div style={{height: "80px", width: "230px"}}>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data[0].toFixed(2)}</div>
                        <div className="general_page_part1_part_name">
                            <div style={{float: "left"}}>{"预热\u2160温度"}</div>
                            {data[0] < 834 ? <img alt={"箭头，向上"}
                                                  src={require("../Pictures/up_arrow.png")}
                                                  style={{width: "13px", float: "left", paddingTop: "1px"}}/> : null}
                            {data[0] > 871 ? <img alt={"箭头，向下"}
                                                  src={require("../Pictures/down_arrow.png")}
                                                  style={{width: "13px", float: "left", paddingTop: "2px"}}/> : null}
                        </div>
                    </div>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data[1].toFixed(2)}</div>
                        <div className="general_page_part1_part_name">
                            <div style={{float: "left"}}>{"预热\u2161温度"}</div>
                            {data[0] < 1005 ? <img alt={"箭头，向上"}
                                                   src={require("../Pictures/up_arrow.png")}
                                                   style={{width: "13px", float: "left", paddingTop: "1px"}}/> : null}
                            {data[0] > 1030 ? <img alt={"箭头，向下"}
                                                   src={require("../Pictures/down_arrow.png")}
                                                   style={{width: "13px", float: "left", paddingTop: "2px"}}/> : null}
                        </div>
                    </div>
                </div>
            )}
            <div style={{height: "50px"}}/>
            {GeneralPageDiv(
                <div style={{height: "80px", width: "230px"}}>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data[2].toFixed(2)}</div>
                        <div className="general_page_part1_part_name">
                            <div style={{float: "left"}}>{"窑头温度"}</div>
                            {data[2] < 1121 ? <img alt={"箭头，向上"}
                                                  src={require("../Pictures/up_arrow.png")}
                                                  style={{width: "13px", float: "left", paddingTop: "1px"}}/> : null}
                            {data[2] > 1152 ? <img alt={"箭头，向下"}
                                                  src={require("../Pictures/down_arrow.png")}
                                                  style={{width: "13px", float: "left", paddingTop: "2px"}}/> : null}
                        </div>
                    </div>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data[3].toFixed(2)}</div>
                        <div className="general_page_part1_part_name">
                            <div style={{float: "left"}}>{"窑尾温度"}</div>
                            {data[3] < 830 ? <img alt={"箭头，向上"}
                                                   src={require("../Pictures/up_arrow.png")}
                                                   style={{width: "13px", float: "left", paddingTop: "1px"}}/> : null}
                            {data[3] > 881 ? <img alt={"箭头，向下"}
                                                   src={require("../Pictures/down_arrow.png")}
                                                   style={{width: "13px", float: "left", paddingTop: "2px"}}/> : null}
                        </div>
                    </div>
                </div>
            )}
            <div style={{height: "50px"}}/>
            {GeneralPageDiv(
                <div style={{height: "80px", width: "230px"}}>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data[4].toFixed(2)}</div>
                        <div className="general_page_part1_part_name">
                            <div style={{float: "left"}}>{"抽干段温度"}</div>
                            {data[4] < 250 ? <img alt={"箭头，向上"}
                                                   src={require("../Pictures/up_arrow.png")}
                                                   style={{width: "13px", float: "left", paddingTop: "1px"}}/> : null}
                            {data[4] > 280 ? <img alt={"箭头，向下"}
                                                   src={require("../Pictures/down_arrow.png")}
                                                   style={{width: "13px", float: "left", paddingTop: "2px"}}/> : null}
                        </div>
                    </div>
                    <div className="general_page_part1_part">
                        <div className="general_page_part1_part_value">{data[5].toFixed(2)}</div>
                        <div className="general_page_part1_part_name">
                            <div style={{float: "left"}}>{"鼓干段温度"}</div>
                            {data[5] < 60 ? <img alt={"箭头，向上"}
                                                  src={require("../Pictures/up_arrow.png")}
                                                  style={{width: "13px", float: "left", paddingTop: "1px"}}/> : null}
                            {data[5] > 74 ? <img alt={"箭头，向下"}
                                                  src={require("../Pictures/down_arrow.png")}
                                                  style={{width: "13px", float: "left", paddingTop: "2px"}}/> : null}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// 热力图
const GeneralPagePart4 = () => {

    const [data, setData] = useState([])
    const getData = () => {
        fetch('http://localhost:3001/api/v1/heatMap', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data.data)
            })
    }

    if(data.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 30 * 60 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // let noise = getNoiseHelper();
    let xData = [];
    let yData = [];
    for (let j = 0; j <= 400; j++) {
        xData.push(j);
    }
    for (let j = -40; j <= 40; j++) {
        yData.push(j);
    }

    const option = {
        grid: {
            left: '100px'
        },
        title:{
            'text': "回转窑温度实时预测",
            textStyle: {
                color: 'white'
            }
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLabel: {
                formatter: (function(value){
                    if(value % 10 === 0){
                        return value / 10
                    }else{
                        return
                    }

                    // return value / 10;
                }),
                textStyle: {
                    color: 'white'
                }
            },
        },
        yAxis: {
            type: 'category',
            data: yData,
            axisLabel: {
                formatter: (function(value){
                    return value / 10

                    // return value / 10;
                }),
                textStyle: {
                    color: 'white'
                }
            },
        },
        visualMap: {
            top: "middle",
            // align: "auto",
            textStyle: {
                color: 'white'
            },
            itemHeight: 170,
            min: 770,
            max: 2200,
            calculable: true,
            realtime: false,
            inRange: {
                color: [
                    '#0000FF',
                    '#009999',
                    '#00FF00',
                    '#55FF00',
                    '#AAFF00',
                    '#FFFF00',
                    '#FFCC00',
                    '#FF9900',
                    '#FF6600',
                    '#FF3300',
                    '#FF0000',

                ]
            }
        },
        tooltip:{
            trigger: 'item',

            formatter: function(params) {
                const value = params.value

                return `(${(value[0] / 10).toFixed(1)}, ${((value[1] - 40) / 12).toFixed(2)})  ${value[2]}℃`
            },
            show: true
        },
        series: [
            {
                name: '回转窑温度',
                type: 'heatmap',
                data: data,
                emphasis: {
                    itemStyle: {
                        borderColor: '#333',
                        borderWidth: 1
                    }
                },
                progressive: 1000,
                animation: false,
            }
        ]
    };

    return (
        <div className="general_page_part4">
            {GeneralPageDiv(
                <ReactEcharts option={option} style={{height: '100%', width: '100%', marginLeft: "20px", marginTop: "10px"}}/>
            )}
        </div>
    )
}

const GeneralPagePart5 = () => {

    const [data, setData] = useState([])

    // console.log(data.currentVal)
    const getData = () => {
        fetch('http://localhost:3001/api/v1/oxygen/real-time', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }
    if(data.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 10 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '预热\u2160氧含量实时监控',
            textStyle: {
                color: 'white'
            }
        },
        tooltip: {
            position: {right: "-70%", bottom: 30},
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },

        grid: {
            // top: '50%',
            left: '1%',
            right: '13%',
            bottom: '10%',
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
            axisLabel: {
                textStyle: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'white'
                }
            },
            min: 16,
            max: 21
        },
        series: [
            {
                name: '实时数据',
                type: 'line',
                stack: 'Total',
                data: data,
                showSymbol: false,
                color: "red"
            }
        ]
    };

    if(data.length === 0){
        return(
            <div className="general_page_part5">
                <Loading/>
            </div>
        )
    }

    return (
        <div className="general_page_part5">
            {GeneralPageDiv(
                <ReactEcharts option={option} style={{height: '100%', width: '100%', marginTop: "10px", marginLeft: "20px"}}/>
            )}
        </div>
    )
}

const GeneralPagePart6 = () => {

    const [data, setData] = useState([])

    // console.log(data.currentVal)
    const getData = () => {
        fetch('http://localhost:3001/api/v1/oxygen2/real-time', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }
    if(data.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 10 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '预热\u2161氧含量实时监控',
            textStyle: {
                color: 'white'
            }
        },
        tooltip: {
            position: {right: "-70%", bottom: 30},
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },

        grid: {
            // top: '50%',
            left: '1%',
            right: '13%',
            bottom: '10%',
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
            axisLabel: {
                textStyle: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'white'
                }
            },
            min: 10,
            max: 14
        },
        series: [
            {
                name: '实时数据',
                type: 'line',
                stack: 'Total',
                data: data,
                showSymbol: false,
                color: "red"
            }
        ]
    };

    if(data.length === 0){
        return(
            <div className="general_page_part6">
                <Loading/>
            </div>
        )
    }

    return (
        <div className="general_page_part6">
            {GeneralPageDiv(
                <ReactEcharts option={option} style={{height: '100%', width: '100%', marginTop: "10px", marginLeft: "20px"}}/>
            )}
        </div>
    )
}

const GeneralPagePart7 = () => {
    const [currentVal, setCurrentVal] = useState(0)

    const getData = () => {
        fetch('http://localhost:3001/api/v1/coal/single', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setCurrentVal(data.coalValue)
            })
    }

    if(currentVal === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 30 * 60 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function formatDate(data){
        if(data < 4.6){
            return (data * 2.22 / 4.6).toFixed(2)
        }else if(data < 5.4){
            return (2.22 + (data - 4.6) * (5.18 - 2.22) / (5.4 - 4.6)).toFixed(2)
        }else{
            return (5.18 + (data - 5.4) * (7.4 - 5.18) / (7.4 - 5.4)).toFixed(2)
        }
    }

    const option = {
        series: [
            {
                type: 'gauge',
                min: 0,
                max: 7.4,
                axisLine: {
                    lineStyle: {
                        width: -26,
                        color: [
                            [0.299, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: 0,
                    length: 6,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: 0,
                    length: 20,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'auto',
                    distance: -16,
                    fontSize: 12,
                    formatter: function (value) {
                        switch (value + '') {
                            case '0':
                                return '0';
                            case '2.22':
                                return '4.6';
                            case '5.18':
                                return '5.4';
                            case '2.96':
                                return '4.8';
                            case '3.7':
                                return '5.0';
                            case '4.44':
                                return '5.2';
                            case '0.74':
                                return '1.53';
                            case '1.48':
                                return '3.07';
                            case '5.92':
                                return '6.06';
                            case '6.66':
                                return '6.73';
                            default:
                                return value + '';
                        }
                    },
                },
                detail: {
                    valueAnimation: true,
                    formatter: `${currentVal} t/h \n喷煤量`,
                    color: 'auto',
                    textStyle: {
                        fontSize: "16px"
                    }
                },
                data: [
                    {
                        value: formatDate(currentVal)
                    }
                ]
            }
        ]
    };

    if(currentVal === 0){
        return(
            <div className="general_page_part7">
                <Loading/>
            </div>
        )
    }

    return (
        <div className="general_page_part7">
            {GeneralPageDiv(
                <ReactEcharts option={option} style={{height: '100%', width: '100%', marginTop: "10px", marginLeft: "20px", left: "-20px", position: "absolute"}}/>
            )}
        </div>
    )
}


const Page = (props) => {
    return(
        <div style={{height: "10px", float: "left", padding: "6px"}}>
            <div className="hp-test1" onClick={() => {
                if(props.openedPages.indexOf(props.page) === -1){
                    const l = props.openedPages
                    l.push(props.page)
                    props.setOpenedPages(l)
                }
                props.setCurrentPage(props.page)
            }}>
                <div className="hp-test2">
                    <img src={require("../Pictures/navigateBar/" + props.icon)} alt={"1"}/>
                </div>
                <div className="hp-test3">
                    {props.page}
                </div>
            </div>
        </div>
    )
}


const NavigateWall = (props) => {
    const navigations = [
        {
            title: "数据库管理",
            pages: [
                {
                    title: "原料管理",
                    icon: "Picture 1.png"
                },
                // {
                //     title: "生产数据库",
                //     icon: "Picture 2.png"
                // }
            ]
        },
        {
            title: "生产状态监控",
            pages: [
                {
                    title: "氧势监控",
                    icon: "Picture 3.png"
                },
                {
                    title: "喷煤监控",
                    icon: "Picture 4.png"
                },
                {
                    title: "炉况监控",
                    icon: "Picture 5.png"
                }
            ]
        },
        {
            title: "工艺计算模型",
            pages: [
                {
                    title: "配料计算",
                    icon: "Picture 6.png"
                },
                {
                    title: "预设值参数",
                    icon: "Picture 6.png"
                },
                {
                    title: "离线计算",
                    icon: "Picture 8.png"
                },
                // {
                //     title: "链篦机系统",
                //     icon: "Picture 7.png"
                // },
                // {
                //     title: "回转窑系统",
                //     icon: "Picture 8.png"
                // },
                // {
                //     title: "环冷机系统",
                //     icon: "Picture 9.png"
                // },
                {
                    title: "链回环系统",
                    icon: "Picture 10.png"
                }
            ]
        },
        {
            title: "系统说明",
            pages: [
                {
                    title: "系统说明书",
                    icon: "Picture 11.png"
                },
                {
                    title: "帮助反馈",
                    icon: "Picture 12.png"
                }
            ]
        },
    ]

    return (
        <div>
            {navigations.map((navigation, index) => (
                <div className="homePage-form" key={index}>
                    <div className="homePage-title">
                        {navigation.title}
                    </div>
                    <div>
                        {navigation.pages.map((n, i) => (
                            <Page page={n.title}
                                  key={i}
                                  icon={n.icon}
                                  openedPages={props.openedPages}
                                  setOpenedPages={props.setOpenedPages}
                                  setCurrentPage={props.setCurrentPage}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const GeneralPagePart8 = (props) => {

    // const [currentVal, setCurrentVal] = useState(0)
    const [data, setData] = useState([])
    const [time, setTime] = useState(new Date())

    const getData = () => {
        fetch('http://localhost:3001/api/v1/heatMap/column', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data.data)
                setTime(new Date(data.time))
                // console.log(data.time)
            })
    }

    // console.log(time)
    if(data.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 30 * 60 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function formatDate(time){
        return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    }


    const option = {
        title: {
            text: `回转窑温度（当前时间：${formatDate(time)}）`,
            textStyle: {
                color: 'white',
                fontSize: 15
            }
        },
        xAxis: {
            type: 'category',
            data: ["窑头", "4m", "8m", "12m", "16m", "20m", "24m", "28m", "32m", "36m", "窑尾"],
            axisLabel: {
                textStyle: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#67d7fd"
                }
            },
        },
        series: [
            {
                data: data,
                type: 'bar',
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white',
                        fontSize: 10
                    }
                }
            }
        ]
    };

    if(data.length === 0){
        return(
            <div className="general_page_part8">
                <Loading/>
            </div>
        )
    }

    return (
        <div className="general_page_part8">
            {GeneralPageDiv(
                <ReactEcharts option={option} style={{height: '100%', width: '100% - 30px', marginTop: "10px", marginLeft: "30px"}}/>
            )}
        </div>
    )
}

const GeneralPage = (props) => {

    return (
        <div className="generalPage">
            <GeneralPageHeader/>
            <GeneralPagePart1/>
            <GeneralPagePart2/>
            <GeneralPagePart3/>
            <GeneralPagePart4/>
            <GeneralPagePart5/>
            <GeneralPagePart6/>
            <GeneralPagePart7/>
            <GeneralPagePart8
                openedPages={props.openedPages}
                setOpenedPages={props.setOpenedPages}
                setCurrentPage={props.setCurrentPage}
            />

            {/*{GeneralPageDiv(<div className="test_content">{""}</div>)}*/}
            {/*<div className="gp-bit1">*/}
            {/*    <div className="gp-part1">*/}
            {/*        <Yr1Chart/>*/}
            {/*        <Yr2Chart/>*/}
            {/*        <TemperatureChart/>*/}
            {/*        <CoalChart/>*/}
            {/*    </div>*/}
            {/*    <SixLineChart/>*/}
            {/*</div>*/}
            {/*<div className="gp-bit2">*/}
            {/*    <RadarChart/>*/}
            {/*    <MaterialPart/>*/}
            {/*</div>*/}
            {/*<div className="gp-bit3">*/}
            {/*    <MessageList/>*/}
            {/*    <div className="gp-part6">{"能质平衡 something"}</div>*/}
            {/*</div>*/}
        </div>
    )
}


export default GeneralPage
