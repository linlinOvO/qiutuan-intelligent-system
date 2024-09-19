import React, {useState} from "react";
import './../../Pages/OxygenDetection.css'
import DatePicker from "react-datepicker";
//
// const RealTimeTable = (props) => {
//     return (
//         <tbody>
//         {props.leftData.map((left, index) => (
//             <tr key={index}>
//                 <td className='index'>{index + 1}</td>
//                 <td>{left.value[0]}</td>
//                 <td>{left.value[1]}</td>
//                 <td>{props.rightData.length > index ? props.rightData[index].value[1] : null}</td>
//                 <td>{props.dataThree.length > index ? props.dataThree[index].value[1] : null}</td>
//             </tr>
//         ))}
//         </tbody>
//     )
// }

const SpecificTimeTable = (props) => {
    return (
        <tbody>
        {props.rangeData.map((data, index) => (
            <tr key={index}>
                <td className='index'>{index + 1}</td>
                <td>{data.testTime.slice(0, 19)}</td>
                <td>{data.oxygenContent}</td>
                <td>{data.oxygenContentTwo}</td>
            </tr>
        ))}
        </tbody>
    )
}

const handleClick = async (beginTime, endTime, setRangeData) => {
    if (beginTime - endTime < 0) {
        // console.log(beginTime, endTime)
        fetch('/api/v1/oxygen-range', {
            'method': 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({//request message
                beginTime: new Date(beginTime),
                endTime: new Date(endTime)
            })
        }).then(response => response.json())
            .then((data) => {
                //console.log(data)
                setRangeData(data)
            })
    }
}

function download(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // 文件名
    a.download = "大孤山智能与冷却项目.xls";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

const OxygenTablePart = () => {

    const [beginDate, setBeginDate] = useState(new Date())
    const [beginHour, setBeginHour] = useState(0)
    const [beginMinute, setBeginMinute] = useState(0)

    const [endDate, setEndDate] = useState(new Date())
    const [endHour, setEndHour] = useState(0)
    const [endMinute, setEndMinute] = useState(0)

    const hours = Array.from(Array(24).keys())
    const minutes = Array.from(Array(60).keys())

    let beginTime = new Date()
    let endTime = new Date()

    const [rangeData, setRangeData] = useState([])

    // console.log(rangeData)

    const [isOpen, setIsOpen] = useState(false)

    if(!isOpen){
        return (
            <div className="od-part3_1">
                <button className="od-button" onClick={() => {setIsOpen(true)}}>{"打开表格"}</button>
            </div>
        )
    }

    return (
        <div className="od-part3_1">
            <button className="od-button" onClick={() => {setIsOpen(false)}}>{"关闭表格"}</button>
            <style>
                {`.date-picker input {
                    width: 110px;
                    font-size: 20px;
                    background: none;
                    border: 1px black solid;
                    padding: 5px;
                    
                }`}
            </style>
            <div className='od-part3-button'>
                <div className='od-part3-button-time'>
                    <DatePicker selected={beginDate} onChange={setBeginDate} wrapperClassName="date-picker"/>
                    <select
                        value={beginHour}
                        onChange={(e) => {
                            setBeginHour(e.target.value)
                        }}
                    >
                        {hours.map((hour) => (
                            <option value={hour} key={hour}>{hour}</option>
                        ))}
                    </select>
                    <span>:</span>
                    <select
                        value={beginMinute}
                        onChange={(e) => {
                            setBeginMinute(e.target.value)
                        }}
                    >
                        {minutes.map((minute) => (
                            <option value={minute} key={minute}>{minute}</option>
                        ))}
                    </select>
                    <span>~</span>
                    <DatePicker selected={endDate} onChange={setEndDate} wrapperClassName="date-picker"/>
                    <select
                        value={endHour}
                        onChange={(e) => {
                            setEndHour(e.target.value)
                        }}>
                        {hours.map((hour) => (
                            <option value={hour} key={hour}>{hour}</option>
                        ))}
                    </select>
                    <span>:</span>
                    <select
                        value={endMinute}
                        onChange={(e) => {
                            setEndMinute(e.target.value)
                        }}>
                        {minutes.map((minute) => (
                            <option value={minute} key={minute}>{minute}</option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={async () => {
                        beginTime = beginDate
                        beginTime.setHours(beginHour)
                        beginTime.setMinutes(beginMinute)
                        beginTime.setSeconds("00")
                        endTime = endDate
                        endTime.setHours(endHour)
                        endTime.setMinutes(endMinute)
                        endTime.setSeconds("00")
                        // console.log(beginTime)
                        // console.log(endTime)
                        await handleClick(beginTime, endTime, setRangeData)
                    }}
                >选择时间
                </button>
                {/*<button*/}
                {/*    onClick={() => {*/}
                {/*        setIfSelected(false)*/}
                {/*    }}*/}
                {/*>实时数据*/}
                {/*</button>*/}
                <button onClick={() => {
                    beginTime = beginDate
                    beginTime.setHours(beginHour)
                    beginTime.setMinutes(beginMinute)
                    beginTime.setSeconds("00")
                    endTime = endDate
                    endTime.setHours(endHour)
                    endTime.setMinutes(endMinute)
                    endTime.setSeconds("00")

                    fetch('/api/v1/createExcel/', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({//request message
                            beginTime: beginTime,
                            endTime: endTime
                        })
                    })
                        .then(response => response.blob())
                        .then(blob => download(blob))
                }}>导出数据（excel）
                </button>
            </div>
            <table>
                <thead>
                <tr>
                    <th className='index'>编号</th>
                    <th>时间</th>
                    <th>{"预热\u2160段氧含量"}</th>
                    <th>{"预热\u2161段氧含量"}</th>
                </tr>
                </thead>
                <SpecificTimeTable rangeData={rangeData}/>
                {/*{ifSelected ?*/}
                {/*    <SpecificTimeTable rangeData={rangeData}/> :*/}
                {/*    <RealTimeTable leftData={leftData} rightData={rightData} dataThree={dataThree}/>*/}
                {/*}*/}
            </table>
        </div>
    )
}

export default OxygenTablePart