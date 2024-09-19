import React, {useEffect, useState} from "react";
import "../../Pages/HeatBalanceModel.css"
import {randomData} from "./Parameters";
import {Part1, Part2, Part3, Part4, Part5} from "./Window-0";


const Window1 = () => {

    const [params, setParams] = useState({
        ecf : 0,
        hzy: 0,
        pml: 0
    })

    useEffect(() => {
        fetch('/api/v1/part/hzy', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                setParams(data)
            })
    }, [])

    const part1Params = {
        title: "技术参数",
        parts: [
            {
                name: "二次风温度",
                value: params.ecf,
                unit: "℃"
            },
            {
                name: "回转窑出口温度",
                value: params.hzy,
                unit: "℃"
            },
            {
                name: "喷煤量",
                value: params.pml.toFixed(3),
                unit: "t/h"
            },
        ]
    }

    const part2Params = {
        title: "技术经济指标",
        parts: [
            {
                title: "热效率",
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
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '20%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '实时数据',
                            type: 'line',
                            showSymbol: false,
                            data: randomData(),
                        }
                    ]
                }
            },
            {
                title: "热利用率",
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
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '20%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '实时数据',
                            type: 'line',
                            showSymbol: false,
                            data: randomData(),
                        }
                    ]
                }
            },
            {
                title: "热回收率",
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
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '20%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: '实时数据',
                            type: 'line',
                            showSymbol: false,
                            data: randomData(),
                        }
                    ]
                }
            },
        ]
    }

    const part3Params = {
        title: "物料平衡实时结果",
        parts: [
            {
                title: "物料输入",
                option: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '20%',
                        left: '52%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '20%',
                        left: '52%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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

    const part4Params = {
        title: "热平衡实时结果",
        parts: [
            {
                title: "热输入",
                option: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '20%',
                        left: '52%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '20%',
                        left: '52%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            center:['30%', '60%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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

    const part5Params = {
        title: "统计",
        parts: [
            {
                title: "昨日",
                option1: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '18%',
                        left: '50%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            height: 10,
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['30%', '50%'],
                            center:['25%', '50%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                },
                option2: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '18%',
                        left: '50%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            height: 10,
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['30%', '50%'],
                            center:['25%', '50%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                },
            },
            {
                title: "月均值",
                option1: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '18%',
                        left: '50%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            height: 10,
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['30%', '50%'],
                            center:['25%', '50%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                },
                option2: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '18%',
                        left: '50%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            height: 10,
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['30%', '50%'],
                            center:['25%', '50%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                },
            },
            {
                title: "年均值",
                option1: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '18%',
                        left: '50%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            height: 10,
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['30%', '50%'],
                            center:['25%', '50%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                },
                option2: {
                    tooltip: {
                        position: 'right'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        top: '18%',
                        left: '50%',
                        itemGap: 1,
                        textStyle: {
                            width: 70, //set to grid right - item width (default 25) - 5 set tooltip right to grid right
                            height: 10,
                            overflow: "break",
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['30%', '50%'],
                            center:['25%', '50%'],
                            data: [
                                { value: 1048, name: '数据一' },
                                { value: 735, name: '数据二' },
                                { value: 580, name: '数据三' },
                                { value: 484, name: '数据四' },
                                { value: 300, name: '数据五' }
                            ],
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
                },
            },
        ]
    }

    return (
        <div className="hb-part2">
            <div className="hb-part2-0-title">回转窑物质能量平衡监控平台</div>
            <Part1 params={part1Params}/>
            <Part2 params={part2Params}/>
            <Part3 params={part3Params}/>
            <Part4 params={part4Params}/>
            <Part5 params={part5Params}/>
        </div>
    )
}

export default Window1
