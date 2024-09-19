import React, {useEffect, useRef, useState} from "react";
import '../App.css'
import './CoalMonitoring.css'
import ReactEcharts from "echarts-for-react";
import Loading from "../Components/General/Loading";

const CMPartOne = () => {
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
                        width: -27,
                        color: [
                            [0.3, '#67e0e3'],
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
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: 0,
                    length: 26,
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

    return (
        <div className={"cm-p1"}>
            <ReactEcharts option={option} style={{height: '100%', width: '100%'}}/>
        </div>
    )
}

const CMPartTwo = () => {

    const [dailyData, setDailyData] = useState([])

    const getData = () => {
        fetch('http://localhost:3001/api/v1/coal', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setDailyData(data.initialData)
            })
    }
    if(dailyData.length === 0){
        getData()
    }

    useEffect(() => {
        // 每 timeStamp 毫秒调用一次
        const timeStamp = 10 * 1000
        const interval = setInterval(getData, timeStamp);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const option = {
        title: {
            text: '喷煤量 t/h'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        grid: {
            containLabel: true,
            bottom: 0,
            left: 0,
            right: 50,

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
            tickAmount: 3,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            max: 8
        },
        series: [
            {
                name: '实时数据',
                type: 'line',
                stack: 'Total',
                data: dailyData,
                symbol: 'circle',
                symbolSize: 7,
                areaStyle: {},
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 5.4,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 4.6,
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

    if(dailyData.length === 0){
        return (
            <div className="cm-p2">
                <Loading/>
            </div>
        )
    }

    return (
        <div className={"cm-p2"}>
            <ReactEcharts option={option} style={{height: '100%', width: '100%'}}/>
        </div>
    )
}

// const CMPartThree = () => {
//
//     const [time, setTime] = useState("month")   // month & year
//     const [data, setData] = useState([])
//
//     useEffect(() => {
//         if(time === "month"){
//             fetch('http://localhost:3001/api/v1/coalMonth', {
//                 method: 'GET',
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     setData(data)
//                 })
//         }else{
//             fetch('http://localhost:3001/api/v1/coalYear', {
//                 method: 'GET',
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     // console.log("year")
//                     setData(data)
//                 })
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [time])
//
//     const option = {
//         title: {
//             text: '喷煤量'
//         },
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {
//                 animation: false
//             },
//             feature: {
//                 dataZoom: {
//                     yAxisIndex: 'none'
//                 },
//                 restore: {},
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
//             boundaryGap: [0, '20%'],
//             splitLine: {
//                 show: false
//             }
//         },
//         dataZoom: [
//             {
//                 type: 'inside',
//                 start: 0,
//                 end: 20
//             },
//             {
//                 start: 0,
//                 end: 20
//             }
//         ],
//         series: [
//             {
//                 name: '实时数据',
//                 type: 'line',
//                 symbol: 'circle',
//                 symbolSize: '5',
//                 data: data,
//                 smooth: true,
//             }
//         ]
//     };
//
//     if(data.length === 0){
//         return(
//             <div className='cm-p3'>
//                 <Loading/>
//             </div>
//         )
//     }
//
//     return (
//         <div className={"cm-p3"}>
//             <ReactEcharts option={option} style={{height: '100%', width: '100%'}}/>
//             <div className="cm-p3-label">
//                 <div
//                     className={time === "month" ? "cm-p3-label-focus" : "cm-p3-label-unFocus"}
//                     onClick={() => {setTime("month")}}
//                 >
//                     {"1月内"}
//                 </div>
//                 <div
//                     className={time === "year" ? "cm-p3-label-focus" : "cm-p3-label-unFocus"}
//                     onClick={() => {setTime("year")}}
//                 >
//                     {"1年内"}
//                 </div>
//             </div>
//         </div>
//     )
// }

const CMPartFour = () => {
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
        tooltip: {},
        title:{
            'text': "回转窑温度实时预测"
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
                })
            }
        },
        yAxis: {
            type: 'category',
            data: yData,
            axisLabel: {
                formatter: (function(value){
                    return value / 10

                    // return value / 10;
                })
            }
        },
        visualMap: {
            top: "middle",

            itemHeight: 250,
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
                animation: false
            }
        ]
    };

    return (
        <div className={"cm-p4"}>
            <ReactEcharts option={option} style={{height: '100%', width: '100%'}}/>
        </div>
    )
}

const CMPartFive = () => {
    const [warningMessages, setWarningMessages] = useState([{
        warningTime: new Date(),
        warningValue: 0,
        warningType: "",
        warningRange: ""}])
    const scrollRef = useRef(null);
    // console.log(warningMessages)

    const getData = () => {
        fetch('http://localhost:3001/api/v1/warning', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                warningTypeList: ["pml"]
            })
        })
            .then(response => response.json())
            .then(data => {
                setWarningMessages(data)
            })
    }

    if(warningMessages.length === 1){
        getData()
    }

    useEffect(() => {

        const interval = setInterval(getData, 30 * 60 * 1000);

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
        <div className="cm-p5" ref={scrollRef}>
            <h3>{"异常消息提醒"}</h3>
            <table>
                <thead>
                {warningMessages.map((message, index) => {
                    const warningTime = new Date(message.warningTime)
                    // console.log(typeof warningTime)
                    // const warningValue = message.warningValue
                    // const warningType = "喷煤量"
                    // const warningRange = message.warningRange === "less" ? "过高, 建议降低" : "过低，建议增高"

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

const CoalMonitoring = () => {


    return (
        <div className="cm">
            <CMPartOne/>
            <CMPartTwo/>
            <CMPartFive/>
            {/*<CMPartThree/>*/}
            <CMPartFour/>
        </div>
    )
}

export default CoalMonitoring