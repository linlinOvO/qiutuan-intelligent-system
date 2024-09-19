import React, {useEffect, useState} from "react";
import './MonitoringPage.css'
import ReactEcharts from "echarts-for-react";


// const DbztsChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/dbzts', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '当班总台时数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const CqlChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/cql', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '成球率数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const FllChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/fll', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '返量料数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const HhlsfChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/hhlsf', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '混合料水分数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const QhyxsjChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/qhyxsj', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '强混运行时间数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const PrtChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/prt', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '膨润土数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const AqChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/aq', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '鞍千数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const DcChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/dc', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '大磁数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '4%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }

const YtChart = () => {

    const [initialData, setInitialData] = useState([])
    // const [modifiedData, setModifiedData] = useState([])
    // console.log(initialData)
    // console.log(modifiedData)
    const getData = () => {
        fetch('http://localhost:3001/api/v1/furnace/yt', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setInitialData(data.initialData)
                // setModifiedData(data.modifiedData)
            })
    }
    if(initialData.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 5 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '窑头温度（°C）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实时数据'],
            top: 20
        },
        grid: {
            left: '3%',
            right: '50px',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
        },
        yAxis: {
            type: 'value',
            min: 1100,
            splitLine: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            // {
            //     name: '建议优化数据',
            //     type: 'line',
            //     data: modifiedData,
            //     symbol: 'circle',
            //     symbolSize: 7,
            // },
            {
                name: '实时数据',
                type: 'line',
                data: initialData,
                symbol: 'circle',
                symbolSize: 7,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 1152,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 1121,
                            lineStyle: {
                                normal: {
                                    color: 'blue',
                                }
                            },
                        }
                    ],
                }
            }
        ]
    };

    if(initialData.length === 0){
        return(
            <div className='mp-part2'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mp-part2">
            <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
            <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
        </div>
    )

}

const YwChart = () => {

    const [initialData, setInitialData] = useState([])
    // const [modifiedData, setModifiedData] = useState([])
    const getData = () => {
        fetch('http://localhost:3001/api/v1/furnace/yw', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setInitialData(data.initialData)
                // setModifiedData(data.modifiedData)
            })
    }
    if(initialData.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 5 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '窑尾温度（°C）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实时数据'],
            top: 20
        },
        grid: {
            left: '3%',
            right: '50px',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            min: 800,
            max: 900,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            // {
            //     name: '建议优化数据',
            //     type: 'line',
            //     data: modifiedData,
            //     symbol: 'circle',
            //     symbolSize: 7,
            // },
            {
                name: '实时数据',
                type: 'line',
                data: initialData,
                symbol: 'circle',
                symbolSize: 7,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 830,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 881,
                            lineStyle: {
                                normal: {
                                    color: 'blue',
                                }
                            },
                        }
                    ],
                }
            }
        ]
    };

    if(initialData.length === 0){
        return(
            <div className='mp-part2'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mp-part2">
            <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
            <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
        </div>
    )

}

const Yr2Chart = () => {

    const [initialData, setInitialData] = useState([])
    // const [modifiedData, setModifiedData] = useState([])
    const getData = () => {
        fetch('http://localhost:3001/api/v1/furnace/yr2', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setInitialData(data.initialData)
                // setModifiedData(data.modifiedData)
            })
    }
    if(initialData.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 5 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '预热\u2161段温度（°C）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实时数据'],
            top: 20
        },
        grid: {
            left: '3%',
            right: '50px',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            min: 970,
            max: 1070,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            // {
            //     name: '建议优化数据',
            //     type: 'line',
            //     data: modifiedData,
            //     symbol: 'circle',
            //     symbolSize: 7,
            // },
            {
                name: '实时数据',
                type: 'line',
                data: initialData,
                symbol: 'circle',
                symbolSize: 7,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 1050,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 1010,
                            lineStyle: {
                                normal: {
                                    color: 'blue',
                                }
                            },
                        }
                    ],
                }
            }
        ]
    };

    if(initialData.length === 0){
        return(
            <div className='mp-part2'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mp-part2">
            <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
            <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
        </div>
    )

}

const Yr1Chart = () => {

    const [initialData, setInitialData] = useState([])
    // const [modifiedData, setModifiedData] = useState([])
    const getData = () => {
        fetch('http://localhost:3001/api/v1/furnace/yr1', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setInitialData(data.initialData)
                // setModifiedData(data.modifiedData)
            })
    }
    if(initialData.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 5 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '预热\u2160段温度（°C）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ '实时数据'],
            top: 20
        },
        grid: {
            left: '3%',
            right: '50px',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            min: 800,
            max: 900,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            // {
            //     name: '建议优化数据',
            //     type: 'line',
            //     data: modifiedData,
            //     symbol: 'circle',
            //     symbolSize: 7,
            // },
            {
                name: '实时数据',
                type: 'line',
                data: initialData,
                symbol: 'circle',
                symbolSize: 7,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 871,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 834,
                            lineStyle: {
                                normal: {
                                    color: 'blue',
                                }
                            },
                        }
                    ],
                }
            }
        ]
    };

    if(initialData.length === 0){
        return(
            <div className='mp-part2'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mp-part2">
            <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
            <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
        </div>
    )

}

const CgdChart = () => {

    const [initialData, setInitialData] = useState([])
    // const [modifiedData, setModifiedData] = useState([])
    const getData = () => {
        fetch('http://localhost:3001/api/v1/furnace/cgd', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setInitialData(data.initialData)
                // setModifiedData(data.modifiedData)
            })
    }

    if(initialData.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 10 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '抽干段温度（°C）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实时数据'],
            top: 20
        },
        grid: {
            left: '3%',
            right: '50px',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            min: 220,
            max: 300,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            // {
            //     name: '建议优化数据',
            //     type: 'line',
            //     data: modifiedData,
            //     symbol: 'circle',
            //     symbolSize: 7,
            // },
            {
                name: '实时数据',
                type: 'line',
                data: initialData,
                symbol: 'circle',
                symbolSize: 7,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 280,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 250,
                            lineStyle: {
                                normal: {
                                    color: 'blue',
                                }
                            },
                        }
                    ],
                }
            }
        ]
    };

    if(initialData.length === 0){
        return(
            <div className='mp-part2'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mp-part2">
            <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
            <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
        </div>
    )

}

const GgdChart = () => {

    const [initialData, setInitialData] = useState([])
    // console.log(initialData)
    // const [modifiedData, setModifiedData] = useState([])
    const getData = () => {
        fetch('http://localhost:3001/api/v1/furnace/ggd', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setInitialData(data.initialData)
                // setModifiedData(data.modifiedData)
            })
    }
    if(initialData.length === 0){
        getData()
    }

    useEffect(() => {
        const interval = setInterval(getData, 5 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '鼓干段温度（°C）'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实时数据'],
            top: 20
        },
        grid: {
            left: '3%',
            right: '50px',
            bottom: '3%',
            containLabel: true,
            containLine: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            splitNumber: 2 ,
            // minInterval: 3600 * 1000 * 24
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            min: 40,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            // {
            //     name: '建议优化数据',
            //     type: 'line',
            //     data: modifiedData,
            //     symbol: 'circle',
            //     symbolSize: 7,
            // },
            {
                name: '实时数据',
                type: 'line',
                data: initialData,
                symbol: 'circle',
                symbolSize: 7,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 62,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 50,
                            lineStyle: {
                                normal: {
                                    color: 'blue',
                                }
                            },
                        }
                    ],
                }
            }
        ]
    };

    if(initialData.length === 0){
        return(
            <div className='mp-part2'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mp-part2">
            <div className="mp-part2-current-value">{initialData[initialData.length - 1].value[1].toFixed(2) + "°C"}</div>
            <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
        </div>
    )

}

// const DbclChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/dbcl', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '当班产量数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const DhChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/dh', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '单耗数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }
//
// const MfldChart = () => {
//
//     const [initialData, setInitialData] = useState([])
//     const [modifiedData, setModifiedData] = useState([])
//     const getData = () => {
//         fetch('http://localhost:3001/api/v1/furnace/mfld', {
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setInitialData(data.initialData)
//                 setModifiedData(data.modifiedData)
//             })
//     }
//     if(initialData.length === 0){
//         getData()
//     }
//
//     useEffect(() => {
//         const interval = setInterval(getData, 5 * 1000);
//
//         return () => clearInterval(interval);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//
//     const option = {
//         title: {
//             text: '煤粉粒度数据'
//         },
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['建议优化数据', '实时数据'],
//             top: 20
//         },
//         grid: {
//             left: '3%',
//             right: '50px',
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
//             }
//         },
//         yAxis: {
//             type: 'value',
//             splitLine: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: '建议优化数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: modifiedData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             },
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 stack: 'Total',
//                 data: initialData,
//                 symbol: 'circle',
//                 symbolSize: 7,
//             }
//         ]
//     };
//
//     if(modifiedData.length === 0 || initialData.length === 0){
//         return(
//             <div className='mp-part2'>
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
//         <div className="mp-part2">
//             <ReactEcharts option={option} style={{height: '100%', width: '100%', float: "left"}}/>
//         </div>
//     )
//
// }

const MonitoringPage = () => {

    /*
    const params = ["当班总台时", "成球率", "返料量", "混合料水分", "强混运行时间", "膨润土", "鞍千", "大磁", "窑头", "窑尾",
    "预热2", "预热1", "抽干段", "鼓干段", "当班产量", "单耗", "煤粉粒度"]

     */

    return (
        <div className="monitoringPage">
            {/*<div className="mp-part1">*/}
            {/*    <img src={require("../../Pictures/链篦机回转窑2.png")} alt={"链篦机"}/>*/}
            {/*</div>*/}
            <CgdChart/>
            <GgdChart/>
            <Yr1Chart/>
            <Yr2Chart/>
            <YtChart/>
            <YwChart/>
            {/*<DbztsChart/>*/}
            {/*<CqlChart/>*/}
            {/*<FllChart/>*/}
            {/*<HhlsfChart/>*/}
            {/*<QhyxsjChart/>*/}
            {/*<PrtChart/>*/}
            {/*<AqChart/>*/}
            {/*<DcChart/>*/}
            {/*<DbclChart/>*/}
            {/*<DhChart/>*/}
            {/*<MfldChart/>*/}
        </div>
    )
}

export default MonitoringPage
export {YtChart, YwChart, Yr1Chart, Yr2Chart}
