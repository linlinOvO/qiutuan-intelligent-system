import './ThresholdManagement.css'
import React, {useEffect, useState} from "react";

const AdjustBar = (props) => {

    return (
        <div className="tm-popup-adjust">
            <div className="tm-popup-adjust-symbol" onClick={() => {
                const data = parseFloat(props.val) - 0.1
                props.setVal(data.toFixed(2))
            }}>{"-"}</div>
            <input className="tm-popup-adjust-input" value={props.val} onChange={(e) => {props.setVal(e.target.value)}}/>
            <div className="tm-popup-adjust-symbol" onClick={() => {
                const data = parseFloat(props.val) + 0.1
                props.setVal(data.toFixed(2))
            }}>{"+"}</div>
        </div>
    )
}

const PopUpPage = (props) => {

    const [name, setName] = useState(props.target.elementName)
    const [beginVal, setBeginVal] = useState(props.target.beginVal)
    const [endVal, setEndVal] = useState(props.target.endVal)
    const [template, setTemplate] = useState(props.target.template)

    console.log(props.target.id)

    const handleClick = () => {
        if(props.popUp === "add"){
            fetch('http://localhost:3001/api/v1/threshold', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({//request message
                    elementName: name,
                    beginVal: beginVal,
                    endVal: endVal,
                    norm: "",
                    template: template,
                    otherNorm: ""
                })
            }).then(() => {
                fetch('http://localhost:3001/api/v1/threshold/')
                    .then(response => response.json())
                    .then((data) => {
                        props.setElements(data)
                        props.setPopUp("close")
                    })
            })
        }else{
            fetch('http://localhost:3001/api/v1/threshold', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({//request message
                    id: props.target.id,
                    elementName: name,
                    beginVal: beginVal,
                    endVal: endVal,
                    norm: "",
                    template: template,
                    otherNorm: ""
                })
            }).then(() => {
                fetch('http://localhost:3001/api/v1/threshold/')
                    .then(response => response.json())
                    .then((data) => {
                        props.setElements(data)
                        props.setPopUp("close")
                    })
            })
        }
    }

    // console.log(beginVal)

    return (
        <div className="tm-popup-box">
            {/* 头部部分 */}
            <div className="tm-popup">
                <div className='tm-popup-head'>
                    {"指标评价配置"}
                    <div className="tm-popup-close" onClick={() => {
                        props.setPopUp("close")
                    }}>
                        {"X"}
                    </div>
                </div>
                {/* 表单（身体）部分 */}
                <div className='tm-popup-body'>
                    <div className="tm-popup-inputPart">
                        <div className="tm-popup-line">
                            <div className="tm-popup-name">
                                {"名称"}
                            </div>
                            <input className="tm-popup-input" defaultValue={name} onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <div className="tm-popup-line">
                            <div className="tm-popup-name">
                                {"所属分组"}
                            </div>
                            <select className='tm-popup-select'
                                    onChange={() => {
                                        // setMaterialType(e.target.value)
                                    }}>
                                <option value='0'>{"混匀矿"}</option>
                                <option value='1'>{"test1"}</option>
                                <option value='2'>{"test2"}</option>
                                <option value='3'>{"test3"}</option>
                            </select>
                        </div>
                        <div className="tm-popup-line">
                            <div className="tm-popup-name">
                                {"评价指标"}
                            </div>
                            <select className='tm-popup-select'
                                    onChange={() => {
                                        // setMaterialType(e.target.value)
                                    }}>
                                <option value='0'>{"Al2O3"}</option>
                                <option value='1'>{"test1"}</option>
                                <option value='2'>{"test2"}</option>
                                <option value='3'>{"test3"}</option>
                            </select>
                        </div>
                        <div className="tm-popup-line">
                            <div className="tm-popup-name">
                                {"关联指标"}
                            </div>
                            <select className='tm-popup-select'
                                    style={{width:"calc(100% - 200px)"}}
                                    onChange={() => {
                                        // setMaterialType(e.target.value)
                                    }}>
                                <option value='0'>{"混匀矿"}</option>
                                <option value='1'>{"test1"}</option>
                                <option value='2'>{"test2"}</option>
                                <option value='3'>{"test3"}</option>
                            </select>
                        </div>
                        <div className="tm-popup-line">
                            <div className="tm-popup-name">
                                {"指标范围"}
                            </div>
                            <AdjustBar val={beginVal} setVal={setBeginVal}/>
                            <div style={{float:"left", marginLeft:"15px", lineHeight:"31px"}}>{"至"}</div>
                            <AdjustBar val={endVal} setVal={setEndVal}/>
                        </div>
                        <div className="tm-popup-line">
                            <div className="tm-popup-name">
                                {"评价文案模版"}
                            </div>
                            <textarea style={{width:"calc(100% - 200px)", height:"80px", border:"1px solid black", marginLeft:"15px"}}
                            defaultValue={template}
                            onChange={(e) => {
                                setTemplate(e.target.value)
                            }}/>
                        </div>
                        <button className="tm-popup-confirm" onClick={() => {
                            if(window.confirm("确定提交表格")){
                                handleClick()
                            }
                        }}>{"确认"}</button>
                        <button className="tm-popup-cancel" onClick={() => {
                            props.setPopUp("close")
                        }}>{"取消"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ThresholdManagement = () => {

    const [elements, setElements] = useState([])
    const [target, setTarget] = useState()
    const [popUp, setPopUp] = useState("close") // close, add, update

    // console.log(elements)

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/threshold/')
            .then(response => response.json())
            .then(data => setElements(data))
    }, [])


    return (
        <div className="thresholdManagement">
            {popUp !== "close" && <PopUpPage target={target} popUp={popUp} setPopUp={setPopUp} setElements={setElements}/>}
            <table className="tm-table">
                <thead>
                <tr className="tm-table-head">
                    <th className="tm-table-number">{"序号"}</th>
                    <th className="tm-table-name">{"名称"}</th>
                    <th className="tm-table-norm">{"评价指标"}</th>
                    <th className="tm-table-begin">{"起始值"}</th>
                    <th className="tm-table-end">{"结束值"}</th>
                    <th className="tm-table-template">{"评价模版"}</th>
                    <th className="tm-table-others">{"其他指标"}</th>
                    <th className="tm-table-operation">{"操作"}</th>
                </tr>
                {elements.map((element, i) => (
                    <tr key={i} className="tm-table-body">
                        <td>{i + 1}</td>
                        <td>{element.elementName}</td>
                        <td>{element.norm}</td>
                        <td>{element.beginVal}</td>
                        <td>{element.endVal}</td>
                        <td>{element.template}</td>
                        <td>{element.otherNorm}</td>
                        <td>
                            <div className="tm-edit"
                                 onClick={() => {
                                     setPopUp("update")
                                     setTarget(element)
                                 }}>{"编辑"}</div>
                            <div className="tm-gap">{"|"}</div>
                            <div className="tm-add"
                                 onClick={() => {
                                     setPopUp("add")
                                     setTarget({
                                         elementName: "",
                                         norm: "",
                                         beginVal: 0,
                                         endVal: 0,
                                         template: "edit here",
                                         otherNorm: "",
                                         id: 0,
                                     })
                                 }}>{"追加"}</div>
                            <div className="tm-gap">{"|"}</div>
                            <div className="tm-delete"
                                onClick={() => {
                                    if(window.confirm("确定删除表格")){
                                        fetch('http://localhost:3001/api/v1/threshold', {
                                            method: "DELETE",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({//request message
                                                id: element.id,
                                            })
                                        }).then(() => {
                                            fetch('http://localhost:3001/api/v1/threshold/')
                                                .then(response => response.json())
                                                .then((data) => {
                                                    setElements(data)
                                                    setPopUp("close")
                                                })
                                        })
                                    }

                                }}>{"删除"}</div>
                        </td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
    )
}

export default ThresholdManagement
