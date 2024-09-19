import React, {useEffect, useState} from "react";
import "../../Pages/HeatBalanceModel.css"
import {getPart5JSON,} from "./Parameters";
import {Part1, Part2} from "./Window-0";
import ReactEcharts from "echarts-for-react";


const Window3 = () => {

    const [data, setData] = useState([[], [], [], []])
    const [calculateData, setCalculateData] = useState({})
    const [part2Data, setPart2Data] = useState([[], [], []])

    // console.log(part2Data[0])

    const getData = () => {
        // console.log(1)
        // 获取part1Data ~ part4Data里所有数据
        fetch('/api/v1/part/all', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
                setCalculateData(getPart5JSON(data[0][0], data[1][0], data[2][0], data[3][0]))
            })

        // 获取更新calculatedData里的数据
        fetch('/api/v1/part/calculated', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setPart2Data([data.data1, data.data2, data.data3])
            })
    }

    // console.log(calculateData)

    if(data[0].length === 0){
        getData()
    }

    useEffect(() => {
        // 每 timeStamp 毫秒调用一次
        const timeStamp = 10 * 1000
        const interval = setInterval(getData, timeStamp);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const part1Params = {
        title: "工艺参数",
        parts: [
            {
                name: "链回环热利用率",
                value: part2Data[1].length === 0 ? 0: part2Data[1][part2Data[1].length - 1][1],
                unit: "%"
            },
            {
                name: "链回环热回收率",
                value: part2Data[2].length === 0 ? 0: part2Data[2][part2Data[2].length - 1][1],
                unit: "%"
            },
            {
                name: "碳排放",
                value: part2Data[0].length === 0 ? 0: part2Data[0][part2Data[0].length - 1][1],
                unit: "t/h"
            },
            {
                name: "热损失",
                value: calculateData.N0 === undefined ? 0: ((calculateData.N53 + calculateData.N54 + calculateData.N55 + calculateData.N56 + calculateData.N57) / calculateData.N44 * 100).toFixed(3),
                unit: "%"
            },
        ]
    }

    const part2Params = {
        title: "技术经济指标",
        parts: [
            {
                title: "碳排放",
                option: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        },
                        splitNumber: 2
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '20%'],
                        splitLine: {
                            show: false
                        },
                        min: 10,
                        max: 40,
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '实时数据',
                            type: 'line',
                            showSymbol: false,
                            data: part2Data[0],
                        }
                    ]
                }
            },
            {
                title: "链回环热利用率",
                option: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        },
                        splitNumber: 2
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '20%'],
                        splitLine: {
                            show: false
                        },
                        min: 60,
                        max: 100,
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '实时数据',
                            type: 'line',
                            showSymbol: false,
                            data: part2Data[1],
                        }
                    ]
                }
            },
            {
                title: "链回环热回收率",
                option: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        },
                        splitNumber: 2
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '20%'],
                        splitLine: {
                            show: false
                        },
                        min: 60,
                        max: 100,
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '实时数据',
                            type: 'line',
                            showSymbol: false,
                            data: part2Data[2],
                        }
                    ]
                }
            },
        ]
    }

    // 物料平衡输入项
    const part3Data1 = [
        { value: calculateData.N0 === undefined? 0: calculateData.N0.toFixed(3), name: '生球进料量' },
        { value: calculateData.N1 === undefined? 0:  calculateData.N1.toFixed(3), name: '鼓风干燥段进风量' },
        { value: calculateData.N2 === undefined? 0:  calculateData.N2.toFixed(3), name: '抽风干燥段进风量' },
        { value: calculateData.N3 === undefined? 0:  calculateData.N3.toFixed(3), name: '预热一段进风量' },
        { value: calculateData.N4 === undefined? 0:  calculateData.N4.toFixed(3), name: '预热二段进风量' },
        { value: calculateData.N5 === undefined? 0:  calculateData.N5.toFixed(3), name: '预热二段吸风量' },
        { value: calculateData.N6 === undefined? 0:  calculateData.N6.toFixed(3), name: '喷煤消耗量' },
        { value: calculateData.N7 === undefined? 0:  calculateData.N7.toFixed(3), name: '回转窑助燃风质量' },
        { value: calculateData.N8 === undefined? 0:  calculateData.N8.toFixed(3), name: '回转窑二次风质量' },
        { value: calculateData.N9 === undefined? 0:  calculateData.N9.toFixed(3), name: '球团氧化增重' },
        { value: calculateData.N10 === undefined? 0:  calculateData.N10.toFixed(3), name: '1# 风机鼓风量' },
        { value: calculateData.N11 === undefined? 0:  calculateData.N11.toFixed(3), name: '2# 风机鼓风量' },
        { value: calculateData.N12 === undefined? 0:  calculateData.N12.toFixed(3), name: '3# 风机鼓风量' },
        { value: calculateData.N13 === undefined? 0:  calculateData.N13.toFixed(3), name: '4# 风机鼓风量' },
    ]
    const sumOfPart3Data1 = part3Data1.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0);

    // 物料平衡输出项
    const part3Data2 = [
        { value: calculateData.N0 === undefined? 0: calculateData.N15.toFixed(3), name: '鼓风干燥段出风量' },
        { value: calculateData.N1 === undefined? 0:  calculateData.N16.toFixed(3), name: '抽风干燥段出风量' },
        { value: calculateData.N2 === undefined? 0:  calculateData.N17.toFixed(3), name: '预热一段出风量' },
        { value: calculateData.N3 === undefined? 0:  calculateData.N18.toFixed(3), name: '预热二段出风量' },
        { value: calculateData.N4 === undefined? 0:  calculateData.N19.toFixed(3), name: '链篦机干返料' },
        { value: calculateData.N5 === undefined? 0:  calculateData.N20.toFixed(3), name: '链篦机除尘飞灰' },
        { value: calculateData.N6 === undefined? 0:  calculateData.N21.toFixed(3), name: '回转窑出风量' },
        { value: calculateData.N7 === undefined? 0:  calculateData.N22.toFixed(3), name: '球团出料量' },
        { value: calculateData.N8 === undefined? 0:  calculateData.N23.toFixed(3), name: '冷风一段出风量' },
        { value: calculateData.N9 === undefined? 0:  calculateData.N24.toFixed(3), name: '冷风二段出风量' },
        { value: calculateData.N10 === undefined? 0:  calculateData.N25.toFixed(3), name: '冷风三段出风量' },
        { value: calculateData.N11 === undefined? 0:  calculateData.N26.toFixed(3), name: '冷风四段出风量' },
        { value: calculateData.N12 === undefined? 0:  calculateData.N27.toFixed(3), name: '球团水分蒸发量' },
        { value: calculateData.N13 === undefined? 0:  calculateData.N28.toFixed(3), name: '误差' },
    ]

    const sumOfPart3Data2 = part3Data2.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0);

    const part3Params = {
        title: "物料平衡实时结果",
        parts: [
            {
                title: "物料输入",
                option: {
                    tooltip: {
                        position: 'right',
                        valueFormatter: (value) => value + "t"
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '0%',
                        right: 10,
                        itemGap: 3,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        },
                        tooltip:{
                            trigger: 'item',
                            formatter: function(params) {
                                let datum = part3Data1.find(d => d.name === params.name)
                                const percentage = (parseInt(datum.value)/sumOfPart3Data1 * 100).toFixed(3)
                                // console.log((parseInt(datum.value)/sum).toFixed(3))
                                return '' + datum.name + ' : ' + percentage + "%";
                            },
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '物料输入',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: part3Data1,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            },
            {
                title: "物料输出",
                option: {
                    tooltip: {
                        position: 'right',
                        valueFormatter: (value) => value + "t"
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '0%',
                        right: 10,
                        itemGap: 3,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        },
                        tooltip:{
                            trigger: 'item',
                            formatter: function(params) {
                                let datum = part3Data2.find(d => d.name === params.name)
                                const percentage = (parseInt(datum.value)/sumOfPart3Data2 * 100).toFixed(3)
                                // console.log((parseInt(datum.value)/sum).toFixed(3))
                                return '' + datum.name + ' : ' + percentage + "%";
                            },
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '物料输入',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: part3Data2,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            },
        ]
    }

    // 热平衡输入项
    const part4Data1 = [
        { value: calculateData.N30 === undefined? 0:  calculateData.N30.toFixed(3), name: '物料带入热量' },
        { value: calculateData.N31 === undefined? 0:  calculateData.N31.toFixed(3), name: '球团FeO放热' },
        { value: calculateData.N32 === undefined? 0:  calculateData.N32.toFixed(3), name: '鼓风干燥段进入热量' },
        { value: calculateData.N33 === undefined? 0:  calculateData.N33.toFixed(3), name: '抽风干燥段进入热量' },
        { value: calculateData.N34 === undefined? 0:  calculateData.N34.toFixed(3), name: '预热一段进入热量' },
        { value: calculateData.N35 === undefined? 0:  calculateData.N35.toFixed(3), name: '预热二段进入热量' },
        { value: calculateData.N36 === undefined? 0:  calculateData.N36.toFixed(3), name: '预热二段吸风热量' },
        { value: calculateData.N37 === undefined? 0:  calculateData.N37.toFixed(3), name: '回转窑燃料燃烧热量' },
        { value: calculateData.N38 === undefined? 0:  calculateData.N38.toFixed(3), name: '二次风带入热量' },
        { value: calculateData.N39 === undefined? 0:  calculateData.N39.toFixed(3), name: '助燃风带入热量' },
        { value: calculateData.N40 === undefined? 0:  calculateData.N40.toFixed(3), name: '1#风机带入热量' },
        { value: calculateData.N41 === undefined? 0:  calculateData.N41.toFixed(3), name: '2#风机带入热量' },
        { value: calculateData.N42 === undefined? 0:  calculateData.N42.toFixed(3), name: '3#风机带入热量' },
        { value: calculateData.N43 === undefined? 0:  calculateData.N43.toFixed(3), name: '4#风机带入热量' },
    ]

    const sumOfPart4Data1 = part4Data1.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0);

    // 热平衡输出项
    const part4Data2 = [
        { value: calculateData.N45 === undefined? 0:  calculateData.N45.toFixed(3), name: '物料带出热量' },
        { value: calculateData.N46 === undefined? 0:  calculateData.N46.toFixed(3), name: '鼓风干燥段带出热量' },
        { value: calculateData.N47 === undefined? 0:  calculateData.N47.toFixed(3), name: '抽风干燥段带出热量' },
        { value: calculateData.N48 === undefined? 0:  calculateData.N48.toFixed(3), name: '预热一段带出热量' },
        { value: calculateData.N49 === undefined? 0:  calculateData.N49.toFixed(3), name: '预热二段带出热量' },
        { value: calculateData.N50 === undefined? 0:  calculateData.N50.toFixed(3), name: '干返料带出热量' },
        { value: calculateData.N53 === undefined? 0:  calculateData.N53.toFixed(3), name: '链篦机冷却水带出热量' },
        { value: calculateData.N54 === undefined? 0:  calculateData.N54.toFixed(3), name: '链篦机炉体散热' },
        { value: calculateData.N51 === undefined? 0:  calculateData.N51.toFixed(3), name: '生料水分蒸发吸热' },
        { value: calculateData.N52 === undefined? 0:  calculateData.N52.toFixed(3), name: '篦板带出热量' },
        { value: calculateData.N55 === undefined? 0:  calculateData.N55.toFixed(3), name: '回转窑烟气带出热量' },
        // { value: calculateData.N57 === undefined? 0:  calculateData.N28.toFixed(3), name: '回转窑冷却风带出热量' },
        { value: calculateData.N57 === undefined? 0:  calculateData.N57.toFixed(3), name: '窑体表面散热' },
        { value: calculateData.N56 === undefined? 0:  calculateData.N56.toFixed(3), name: '回转窑炉门热辐射' },
        { value: calculateData.N58 === undefined? 0:  calculateData.N58.toFixed(3), name: '1冷风段带出热量' },
        { value: calculateData.N59 === undefined? 0:  calculateData.N59.toFixed(3), name: '2冷风段带出热量' },
        { value: calculateData.N60 === undefined? 0:  calculateData.N60.toFixed(3), name: '3冷风段带出热量' },
        { value: calculateData.N61 === undefined? 0:  calculateData.N61.toFixed(3), name: '4冷风段带出热量' },
        { value: calculateData.N62 === undefined? 0:  calculateData.N62.toFixed(3), name: '环冷机冷却水带出热量' },
        { value: calculateData.N63 === undefined? 0:  calculateData.N63.toFixed(3), name: '环冷机隔墙风带出热量' },
        { value: calculateData.N64 === undefined? 0:  calculateData.N64.toFixed(3), name: '环冷机机体散热' },
        { value: calculateData.N65 === undefined? 0:  calculateData.N65.toFixed(3), name: '误差' },
    ]

    const sumOfPart4Data2 = part4Data2.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0);

    const part4Params = {
        title: "热平衡实时结果",
        parts: [
            {
                title: "热输入",
                option: {
                    tooltip: {
                        position: 'right',
                        valueFormatter: (value) => value + "kJ/h"
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '0%',
                        right: 10,
                        itemGap: 3,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        },
                        tooltip:{
                            trigger: 'item',
                            formatter: function(params) {
                                let datum = part4Data1.find(d => d.name === params.name)
                                const percentage = (parseInt(datum.value)/sumOfPart4Data1 * 100).toFixed(3)
                                // console.log((parseInt(datum.value)/sum).toFixed(3))
                                return '' + datum.name + ' : ' + percentage + "%";
                            },
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '物料输入',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: part4Data1,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            },
            {
                title: "热输出",
                option: {
                    tooltip: {
                        position: 'left',
                        valueFormatter: (value) => value + "kJ/h"
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '0%',
                        right: 10,
                        itemGap: 3,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        },
                        tooltip:{
                            trigger: 'item',
                            formatter: function(params) {
                                let datum = part4Data2.find(d => d.name === params.name)
                                const percentage = (parseInt(datum.value)/sumOfPart4Data2 * 100).toFixed(3)
                                // console.log((parseInt(datum.value)/sum).toFixed(3))
                                return '' + datum.name + ' : ' + percentage + "%";
                            },
                            show: true
                        }
                    },
                    series: [
                        {
                            name: '物料输入',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: part4Data2,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            },
        ]
    }

    // // const part5Params = {
    // //     title: "统计",
    // //     parts: [
    // //         {
    // //             title: "昨日",
    // {/*            option1: {*/}
    // {/*                tooltip: {*/}
    // {/*                    position: 'right'*/}
    // {/*                },*/}
    // {/*                legend: {*/}
    // {/*                    type: 'scroll',*/}
    // {/*                    orient: 'vertical',*/}
    // {/*                    top: '18%',*/}
    // {/*                    left: '50%',*/}
    // {/*                    itemGap: 1,*/}
    // //                     textStyle: {
    // //                         width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
    // //                         height: 10,
    // {/*                        overflow: "break",*/}
    // {/*                        fontSize: 10*/}
    // {/*                    }*/}
    // {/*                },*/}
    // {/*                series: [*/}
    // {/*                    {*/}
    // //                         name: 'Access From',
    // //                         type: 'pie',
    // //                         radius: ['30%', '50%'],
    // {/*                        center:['25%', '50%'],*/}
    // {/*                        data: [*/}
    // {/*                            { value: 1048, name: '数据一' },*/}
    // //                             { value: 735, name: '数据二' },
    // //                             { value: 580, name: '数据三' },
    // //                             { value: 484, name: '数据四' },
    // //                             { value: 300, name: '数据五' }
    // {/*                        ],*/}
    // {/*                        label: {*/}
    // {/*                            show: false,*/}
    // {/*                            position: 'center'*/}
    // {/*                        },*/}
    // //                         emphasis: {
    // //                             itemStyle: {
    // //                                 shadowBlur: 10,
    // {/*                                shadowOffsetX: 0,*/}
    // {/*                                shadowColor: 'rgba(0, 0, 0, 0.5)'*/}
    //                             }
    //                         }
    //                     }
    // {/*                ]*/}
    //             },
    //             option2: {
    //                 tooltip: {
    //                     position: 'right'
    //                 },
    //                 legend: {
    //                     type: 'scroll',
    //                     orient: 'vertical',
    //                     top: '18%',
    //                     left: '50%',
    //                     itemGap: 1,
    //                     textStyle: {
    //                         width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
    //                         height: 10,
    //                         overflow: "break",
    //                         fontSize: 10
    //                     }
    //                 },
    //                 series: [
    // {/*                    {*/}
    // {/*                        name: 'Access From',*/}
    // {/*                        type: 'pie',*/}
    // {/*                        radius: ['30%', '50%'],*/}
    //                         center:['25%', '50%'],
    //                         data: [
    //                             { value: 1048, name: '数据一' },
    //                             { value: 735, name: '数据二' },
    //                             { value: 580, name: '数据三' },
    // {/*                            { value: 484, name: '数据四' },*/}
    // {/*                            { value: 300, name: '数据五' }*/}
    // {/*                        ],*/}
    //                         label: {
    //                             show: false,
    //                             position: 'center'
    //                         },
    // {/*                        emphasis: {*/}
    // {/*                            itemStyle: {*/}
    // {/*                                shadowBlur: 10,*/}
    // {/*                                shadowOffsetX: 0,*/}
    // {/*                                shadowColor: 'rgba(0, 0, 0, 0.5)'*/}
    //                             }
    //                         }
    //                     }
    //                 ]
    // {/*            },*/}
    // {/*        },*/}
    // {/*        {*/}
    // {/*            title: "月均值",*/}
    // {/*            option1: {*/}
    // {/*                tooltip: {*/}
    //                     position: 'right'
    //                 },
    //                 legend: {
    //                     type: 'scroll',
    //                     orient: 'vertical',
    //                     top: '18%',
    // {/*                    left: '50%',*/}
    // {/*                    itemGap: 1,*/}
    // {/*                    textStyle: {*/}
    // {/*                        width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right*/}
    // {/*                        height: 10,*/}
    // {/*                        overflow: "break",*/}
    // {/*                        fontSize: 10*/}
    // {/*                    }*/}
    // {/*                },*/}
    // {/*                series: [*/}
    //                     {
    //                         name: 'Access From',
    //                         type: 'pie',
    //                         radius: ['30%', '50%'],
    //                         center:['25%', '50%'],
    //                         data: [
    //                             { value: 1048, name: '数据一' },
    //                             { value: 735, name: '数据二' },
    //                             { value: 580, name: '数据三' },
    //                             { value: 484, name: '数据四' },
    //                             { value: 300, name: '数据五' }
    //                         ],
    //                         label: {
    //                             show: false,
    //                             position: 'center'
    //                         },
    //                         emphasis: {
    //                             itemStyle: {
    //                                 shadowBlur: 10,
    //                                 shadowOffsetX: 0,
    //                                 shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                             }
    //                         }
    //                     }
    //                 ]
    //             },
    //             option2: {
    //                 tooltip: {
    // {/*                    position: 'right'*/}
    // {/*                },*/}
    // {/*                legend: {*/}
    // {/*                    type: 'scroll',*/}
    // {/*                    orient: 'vertical',*/}
    // {/*                    top: '18%',*/}
    // {/*                    left: '50%',*/}
    // {/*                    itemGap: 1,*/}
    // {/*                    textStyle: {*/}
    // {/*                        width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right*/}
    //                         height: 10,
    //                         overflow: "break",
    //                         fontSize: 10
    // {/*                    }*/}
    // {/*                },*/}
    // {/*                series: [*/}
    // {/*                    {*/}
    // {/*                        name: 'Access From',*/}
    // {/*                        type: 'pie',*/}
    //                         radius: ['30%', '50%'],
    //                         center:['25%', '50%'],
    //                         data: [
    // {/*                            { value: 1048, name: '数据一' },*/}
    // {/*                            { value: 735, name: '数据二' },*/}
    // {/*                            { value: 580, name: '数据三' },*/}
    //                             { value: 484, name: '数据四' },
    //                             { value: 300, name: '数据五' }
    //                         ],
    // {/*                        label: {*/}
    // {/*                            show: false,*/}
    // {/*                            position: 'center'*/}
    // {/*                        },*/}
    // {/*                        emphasis: {*/}
    // {/*                            itemStyle: {*/}
    // {/*                                shadowBlur: 10,*/}
    // {/*                                shadowOffsetX: 0,*/}
    // {/*                                shadowColor: 'rgba(0, 0, 0, 0.5)'*/}
    //                             }
    //                         }
    // {/*                    }*/}
    //                 ]
    //             },
    //         },
    //         {
    //             title: "年均值",
    //             option1: {
    //                 tooltip: {
    //                     position: 'right'
    //                 },
    //                 legend: {
    //                     type: 'scroll',
    //                     orient: 'vertical',
    //                     top: '18%',
    //                     left: '50%',
    //                     itemGap: 1,
    //                     textStyle: {
    //                         width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
    //                         height: 10,
    //                         overflow: "break",
    //                         fontSize: 10
    // {/*                    }*/}
    // {/*                },*/}
    // {/*                series: [*/}
    // {/*                    {*/}
    //                         name: 'Access From',
    //                         type: 'pie',
    //                         radius: ['30%', '50%'],
    //                         center:['25%', '50%'],
    //                         data: [
    // {/*                            { value: 1048, name: '数据一' },*/}
    // {/*                            { value: 735, name: '数据二' },*/}
    // {/*                            { value: 580, name: '数据三' },*/}
    //                             { value: 484, name: '数据四' },
    //                             { value: 300, name: '数据五' }
    //                         ],
    //                         label: {
    // {/*                            show: false,*/}
    // {/*                            position: 'center'*/}
    // {/*                        },*/}
    // {/*                        emphasis: {*/}
    // {/*                            itemStyle: {*/}
    //                                 shadowBlur: 10,
    //                                 shadowOffsetX: 0,
    // {/*                                shadowColor: 'rgba(0, 0, 0, 0.5)'*/}
    // {/*                            }*/}
    // {/*                        }*/}
    // {/*                    }*/}
    //                 ]
    //             },
    //             option2: {
    //                 tooltip: {
    //                     position: 'right'
    //                 },
    // {/*                legend: {*/}
    // {/*                    type: 'scroll',*/}
    // {/*                    orient: 'vertical',*/}
    // {/*                    top: '18%',*/}
    //                     left: '50%',
    //                     itemGap: 1,
    //                     textStyle: {
    //                         width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
    //                         height: 10,
    //                         overflow: "break",
    // {/*                        fontSize: 10*/}
    // {/*                    }*/}
    // {/*                },*/}
    // {/*                series: [*/}
    // {/*                    {*/}
    // {/*                        name: 'Access From',*/}
    // {/*                        type: 'pie',*/}
    // {/*                        radius: ['30%', '50%'],*/}
    // {/*                        center:['25%', '50%'],*/}
    // {/*                        data: [*/}
    //                             { value: 1048, name: '数据一' },
    //                             { value: 735, name: '数据二' },
    //                             { value: 580, name: '数据三' },
    // {/*                            { value: 484, name: '数据四' },*/}
    // {/*                            { value: 300, name: '数据五' }*/}
    // {/*                        ],*/}
    // {/*                        label: {*/}
    // {/*                            show: false,*/}
    //                             position: 'center'
    //                         },
    //                         emphasis: {
    // {/*                            itemStyle: {*/}
    //                                 shadowBlur: 10,
    //                                 shadowOffsetX: 0,
    //                                 shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                             }
    //                         }
    //                     }
    //                 ]
    //             },
    //         },
    //     ]
    // }

    return (
        <div className="hb-part2">
            <div className="hb-part2-0-title">大孤山球团生产能量平衡监控平台</div>
            <Part1 params={part1Params}/>
            <Part2 params={part2Params}/>
            <div className="lbj_p6">
                <div className="lbj_subTitle">{part3Params.title}</div>
                {part3Params.parts.map((part, i) => (
                    <div className="lbj_p3_part" key={i}>
                        <div className="lbj_p3_title">{part.title}</div>
                        <div className="lbj_p3_chart">
                            <ReactEcharts option={part.option} style={{top: '0%' , left: '0%' ,height: '100%', width: '100%'}}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lbj_p6">
                <div className="lbj_subTitle">{part4Params.title}</div>
                {part4Params.parts.map((part, i) => (
                    <div className="lbj_p3_part" key={i}>
                        <div className="lbj_p3_title">{part.title}</div>
                        <div className="lbj_p3_chart">
                            <ReactEcharts option={part.option} style={{top: '0%' , left: '0%' ,height: '100%', width: '100%'}}/>
                        </div>
                    </div>
                ))}
            </div>
            {/*<Part4 params={part4Params}/>*/}
            {/*<Part5 params={part5Params}/>*/}
        </div>
    )
}

export default Window3
