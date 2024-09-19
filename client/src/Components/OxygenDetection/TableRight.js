import React, {useEffect, useState} from "react";
import '../../Pages/OxygenDetection.css'
import '../../App.css'
import ReactEcharts from "echarts-for-react";
import Loading from "../General/Loading";
import NullData from "../General/NullData";

/**
 class TableLeft extends Component {
    intervalId = null;

    constructor() {
        super();
        this.state = {
            table: 'real-time',   // real-time实时，history历史
            timeZoom: 'hour',     // hour, day
            dataInRealTime: [],   //实时数据
            dataInOneHour: [],    //一小时内的数据
            dataInOneDay: [],     //一天内的数据
        }
        this.fetchData = this.fetchData.bind(this)
        this.leftOnclick = this.leftOnclick.bind(this)
        this.rightOnclick = this.rightOnclick.bind(this)
        this.hourOnclick = this.hourOnclick.bind(this)
        this.dayOnclick = this.dayOnclick.bind(this)
    }

    fetchData = async () => {
        const url = "/api/v1/oxygen";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({dataInRealTime: data});

        const url_hour = "/api/v1/oxygen-hour";
        const response_hour = await fetch(url_hour);
        const data_hour = await response_hour.json();
        this.setState({dataInOneHour: data_hour});

        const url_day = "/api/v1/oxygen-day";
        const response_day = await fetch(url_day);
        const data_day = await response_day.json();
        this.setState({dataInOneDay: data_day})
    }

    async componentDidMount() {
        await this.fetchData();
        this.props.setOxygenData(this.state.dataInRealTime)

        this.intervalId = setInterval(() => {
            if (this.state.table === 'real-time') {
                this.fetchData();
                //console.log(111)
            }
        }, 1000 * 10)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    leftOnclick = async () => {
        this.setState({table: 'real-time'});
        console.log("left on click")
        this.props.setOxygenData(this.state.dataInRealTime)
    }

    rightOnclick = async () => {
        this.setState({table: 'history'});
        console.log("right on click")
        this.props.setOxygenData(this.state.dataInOneHour)
    }

    hourOnclick = async () => {
        this.setState({timeZoom: 'hour'});
        console.log("hour on click")
        this.props.setOxygenData(this.state.dataInOneHour)
    }

    dayOnclick = async () => {
        this.setState({timeZoom: 'day'});
        console.log("day on click")
        this.props.setOxygenData(this.state.dataInOneDay)
    }

    render() {
        const {table, timeZoom} = this.state
        //console.log(this.props.oxygenData)
        const option = {
            title: {
                text: '预热Ⅰ段'
            },
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
                    data: this.props.oxygenData,
                    smooth: true
                }
            ]
        };
        if(this.props.oxygenData.length === 0){
            return <div className='od-part1'>
                <div className="container">
                    <div className="trans">
                        <span>加载中...</span>
                    </div>
                </div>
            </div>
        }
        //console.log(this.props.oxygenData)
        return (
            <div className='od-part1'>
                <label className={table === 'real-time' ? 'od-label2' : 'od-label1'}
                       onClick={this.leftOnclick}>实时数据</label>
                <label className={table === 'history' ? 'od-label2' : 'od-label1'}
                       onClick={this.rightOnclick}>历史数据</label>
                {table === 'history' ?
                    <div className='od-choose-time'>
                        <label className={timeZoom === 'hour' ? 'od-choose-time-label1' : 'od-choose-time-label2'}
                               onClick={this.hourOnclick}>1h</label>
                        <label className={timeZoom === 'day' ? 'od-choose-time-label1' : 'od-choose-time-label2'}
                               onClick={this.dayOnclick}>1d</label>
                    </div>
                    : null}
                <ReactEcharts option={option} style={{height: 340, width: '100%', float: "left"}}/>
            </div>
        )
    }
}
 */


const TableRight = () => {

    const [table, setTable] = useState("real-time")  // real-time实时，day一天, month一月, year一年
    const [tableData, setTableData] = useState([{value: []}])
    // const [oxygenData, setOxygenData] = useState([])

    // console.log(tableData)

    const getData = (tableType) => {
        if(tableType === "real-time"){
            fetch('/api/v1/oxygen2/real-time', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {

                    setTableData(data)
                })
        }else if(tableType === "day"){
            fetch('/api/v1/oxygen2/day', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    setTableData(data)
                })
        }else if(tableType === "month"){
            fetch('/api/v1/oxygen2/month', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setTableData(data)
                })
        }else{
            fetch('/api/v1/oxygen2/year', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    // console.log("year")
                    setTableData(data)
                })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // let newData = [];
            // console.log("setInterval: "+table)
            getData(table)
            // setTableData(newData);
        }, 10000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [table])

    const option = {
        title: {
            text: '预热\u2161段氧含量'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            },
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
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
            // min: 740,
            boundaryGap: [0, '20%'],
            splitLine: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            min: 10,
            max: 14
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 20
            },
            {
                start: 0,
                end: 20
            }
        ],
        series: [
            {
                name: '实时数据',
                type: 'line',
                showSymbol: false,
                data: tableData,
                smooth: true,
                markLine: {
                    data: [
                        {
                            name: '报警预测最高值',
                            yAxis: 13.7,
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                }
                            },
                        },
                        {
                            name: '报警预测最低值',
                            yAxis: 12.2,
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
        // title: {
        //     text: '预热Ⅱ段氧含量'
        // },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         animation: false
        //     }
        // },
        // grid: {
        //     top: '20%',
        // },
        // legend: {
        //     data:['氧含量'],
        //     top:40
        // },
        // xAxis: {
        //     name: "时间",
        //     type: 'time',
        //     splitLine: {
        //         show: false
        //     },
        //     axisTick: {
        //         length: 15,
        //         lineStyle: {
        //             type: 'dashed'
        //             // ...
        //         }
        //     }
        // },
        // yAxis: [
        //     {
        //         name: "氧含量",
        //         type: 'value',
        //         // max: 16,
        //         // min: 8,
        //         splitLine: {
        //             show: false
        //         },
        //         // axisLine: {
        //         //     lineStyle: {
        //         //         color: "blue",
        //         //     }
        //         // },
        //     },
        //     // {
        //     //     show: true,
        //     //     name: "温度",
        //     //     min: 940,
        //     //     type: 'value',
        //     //     splitLine: {
        //     //         show: false
        //     //     },
        //     //     axisLine: {
        //     //         lineStyle: {
        //     //             color: "orange",
        //     //         }
        //     //     },
        //     // }
        //     ],
        // dataZoom: [
        //     {
        //         type: 'inside',
        //         start: 0,
        //         end: 20
        //     },
        //     {
        //         start: 0,
        //         end: 20
        //     }
        // ],
        // series: [
        //     // {
        //     //     name: '温度',
        //     //     type: 'line',
        //     //     showSymbol: false,
        //     //     yAxisIndex: 1,
        //     //     data: temperatureData,
        //     //     smooth: true,
        //     //     color: "orange",
        //     //     markLine: {
        //     //         data: [
        //     //             {
        //     //                 name: '报警预测最高值',
        //     //                 yAxis: 1025.11,
        //     //                 lineStyle: {
        //     //                     normal: {
        //     //                         color: 'red',
        //     //                     }
        //     //                 },
        //     //             },
        //     //             {
        //     //                 name: '报警预测最低值',
        //     //                 yAxis: 1008.09,
        //     //                 lineStyle: {
        //     //                     normal: {
        //     //                         color: 'green',
        //     //                     }
        //     //                 },
        //     //             }
        //     //         ],
        //     //     },
        //     // },
        //     {
        //         name: '氧含量',
        //         type: 'line',
        //         showSymbol: false,
        //         data: oxygenData,
        //         smooth: true,
        //         color: "blue",
        //     },
        // ]
    };

    if(tableData.length > 0 && tableData[0].value.length === 0 && table === "real-time"){
        getData("real-time")
        return(
            <div className='od-part1'>
                <Loading/>
            </div>
        )
    }

    return (
        <div className='od-part2'>
            <label className={table === 'real-time' ? 'od-label2' : 'od-label1'}
                   onClick={() => {
                       setTable("real-time")
                       getData("real-time")
                   }}>实时数据</label>
            <label className={table !== 'real-time' ? 'od-label2' : 'od-label1'}
                   onClick={() => {
                       if(table === "real-time"){
                           setTable("day")
                           getData("day")
                       }
                   }}>历史数据</label>
            {table !== 'real-time' ?
                <div className='od-choose-time'>
                    <label className={table === 'day' ? 'od-choose-time-label1' : 'od-choose-time-label2'}
                           onClick={() => {
                               setTable("day")
                               getData("day")
                           }}>1天</label>
                    <label className={table === 'month' ? 'od-choose-time-label1' : 'od-choose-time-label2'}
                           onClick={() => {
                               setTable("month")
                               getData("month")
                           }}>1月</label>
                    <label className={table === 'year' ? 'od-choose-time-label1' : 'od-choose-time-label2'}
                           onClick={() => {
                               setTable("year")
                               getData("year")
                           }}>1年</label>
                </div>
                : null}
            {
                tableData.length === 0 ?
                    (
                        <div style={{width: "100%", height: "340px"}}>
                            <NullData/>
                        </div>
                    )
                    :
                    <ReactEcharts option={option} style={{height: 340, width: '100%', float: "left"}}/>
            }
        </div>
    )

}

export default TableRight;

