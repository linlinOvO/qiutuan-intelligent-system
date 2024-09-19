import React, {useEffect, useState} from "react";
import "../../Pages/HeatBalanceModel.css"
import ReactEcharts from "echarts-for-react";
import {randomData} from "./Parameters";

const Part1 = (props) => {

    if(props.params.parts.length > 4){
        return (
            <div className="lbj_p1">
                <div className="lbj_subTitle">{props.params.title}</div>
                {props.params.parts.map((part, i) => (
                    <div className="lbj_p1_part_short" key={i}>
                        {part.name}<br/>{part.value.toString() + part.unit}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="lbj_p1">
            <div className="lbj_subTitle">{props.params.title}</div>
            {props.params.parts.map((part, i) => (
                part.value !== 0?
                    <div className="lbj_p1_part" key={i}>{part.name + " " + part.value.toString() + part.unit}</div> :
                    <div className="lbj_p1_part" key={i}>{part.name + " " + "加载中"}</div>
            ))}
        </div>
    )
}

const Part2 = (props) => {

    return(
        <div className="lbj_p2">
            <div className="lbj_subTitle">{props.params.title}</div>
            {props.params.parts.map((part, i) => (
                <div className="lbj_p2_part" key={i}>
                    <div className="lbj_p2_title">{part.title}</div>
                    <div className="lbj_p2_chart">
                        <ReactEcharts option={part.option} style={{top: '-25%' , left: '5%' ,height: '150%', width: '100%'}}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Part3 = (props) => {

    return(
        <div className="lbj_p5">
            <div className="lbj_subTitle">{props.params.title}</div>
            {props.params.parts.map((part, i) => (
                <div className="lbj_p3_part" key={i}>
                    <div className="lbj_p3_title">{part.title}</div>
                    <div className="lbj_p3_chart">
                        <ReactEcharts option={part.option} style={{top: '-25%' , left: '5%' ,height: '150%', width: '100%'}}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Part4 = (props) => {

    return(
        <div className="lbj_p3">
            <div className="lbj_subTitle">{props.params.title}</div>
            {props.params.parts.map((part, i) => (
                <div className="lbj_p3_part" key={i}>
                    <div className="lbj_p3_title">{part.title}</div>
                    <div className="lbj_p3_chart">
                        <ReactEcharts option={part.option} style={{top: '-25%' , left: '5%' ,height: '150%', width: '100%'}}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Part5 = (props) => {

    return (
        <div className="lbj_p4">
            <div className="lbj_subTitle">{props.params.title}</div>
            {props.params.parts.map((part, i) => (
                <div className="lbj_p4_part" key={i}>
                    <div className="lbj_p4_title">{part.title}</div>
                    <div className="lbj_p4_chart">
                        <ReactEcharts option={part.option1} style={{top: '-25%' , left: '5%' ,height: '150%', width: '100%'}}/>
                    </div>
                    <div className="lbj_p4_chart">
                        <ReactEcharts option={part.option2} style={{top: '-25%' , left: '5%' ,height: '150%', width: '100%'}}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Window0 = () => {

    const [params, setParams] = useState({
        yr1Out : 0,
        yr2Out: 0,
        ggdOut: 0,
        cgdOut: 0,
        yr1In: 0,
        yr2In: 0,
        ggdIn: 0,
        cgdIn: 0
    })

    useEffect(() => {
        fetch('/api/v1/part/lbj', {
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
                name: "鼓风干燥段进口温度",
                value: params.ggdOut,
                unit: "℃"
            },
            {
                name: "抽风干燥段进口温度",
                value: params.cgdOut,
                unit: "℃"
            },
            {
                name: "预热\u2160段进口温度",
                value: params.yr1Out,
                unit: "℃"
            },
            {
                name: "预热\u2161段进口温度",
                value: params.yr2Out,
                unit: "℃"
            },{
                name: "鼓风干燥段出口温度",
                value: params.ggdIn,
                unit: "℃"
            },
            {
                name: "抽风干燥段出口温度",
                value: params.ggdIn,
                unit: "℃"
            },
            {
                name: "预热\u2160段出口温度",
                value: params.yr1In,
                unit: "℃"
            },
            {
                name: "预热\u2161段出口温度",
                value: params.yr2In,
                unit: "℃"
            }
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
            <div className="hb-part2-0-title">链篦机物质能量监控平台</div>
            <Part1 params={part1Params}/>
            <Part2 params={part2Params}/>
            <Part3 params={part3Params}/>
            <Part4 params={part4Params}/>
            <Part5 params={part5Params}/>
        </div>
    )
}

export default Window0
export {Part1, Part2, Part3, Part4, Part5}