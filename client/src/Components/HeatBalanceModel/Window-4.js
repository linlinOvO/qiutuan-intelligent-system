import React, {useEffect, useState} from "react";
import "../../Pages/HeatBalanceModel.css"
import '../../App.css'
import {getPart1, getPart2, getPart3, getPart4} from "./Parameters";
import Loading from "../General/Loading";

const Window4 = () => {

    const [changedCells, setChangedCells] = useState([{},{},{},{}])

    const handleClick = () => {
        if(window.confirm("确定提交修改修改")){
            /**
            console.log(changedCells)

            const part1Cells = props.part1Cells
            for(let k in Object.keys(changedCells[0])){
                const key = Object.keys(changedCells[0])[k]
                part1Cells[key][2] = changedCells[0][key]
            }

            const part2Cells = props.part2Cells
            for(let k in Object.keys(changedCells[1])){
                const key = Object.keys(changedCells[1])[k]
                part2Cells[key][2] = changedCells[1][key]
            }

            const part3Cells = props.part3Cells
            for(let k in Object.keys(changedCells[2])){
                const key = Object.keys(changedCells[2])[k]
                part3Cells[key][2] = changedCells[2][key]
            }

            const part4Cells = props.part4Cells
            for(let k in Object.keys(changedCells[3])){
                const key = Object.keys(changedCells[3])[k]
                part4Cells[key][2] = changedCells[3][key]
            }
            console.log(changedCells)
             */

            fetch('/api/v1/parameters', {
                'method': 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({//request message
                    changedCells: changedCells
                })
            })
                .then(response => response.text())
                .then((promise) => {
                    // console.log(promise)
                    window.confirm(promise)
                })

            setChangedCells([{},{},{},{}])
        }
    }

    return (
        <div className="hb-part2">
            <Part1 changedCells={changedCells} setChangedCells={setChangedCells}/>
            <Part2 changedCells={changedCells} setChangedCells={setChangedCells}/>
            <Part3 changedCells={changedCells} setChangedCells={setChangedCells}/>
            <Part4 changedCells={changedCells} setChangedCells={setChangedCells}/>
            <button className="hb-confirmButton" onClick={handleClick}>确认修改</button>
        </div>
    )

    /**
     * <div className="hb-part2">
     *             <div className="hb-part2-4-titles">
     *                 {titles.map((title, index) => (
     *                     <div
     *                         key={index}
     *                         className={index === part ? "hb-part2-4-titles-part1" : "hb-part2-4-titles-part"}
     *                         onClick={() => {
     *                             setPart(index)
     *                         }}
     *                     >{title}</div>
     *                 ))}
     *             </div>
     *             <div className="hb-part2-4-body">
     *                 <Parts part={part} changedCells={changedCells}
     *                        setChangedCells={setChangedCells}
     *                 />
     *             </div>
     *             <button className="hb-confirmButton" onClick={handleClick}>确认修改</button>
     * </div>
     */
}

const createUnites = (cells, listId, changedCells, setChangedCells) => {

    const handleChange = (e, key) => {
        // console.log(key)
        changedCells[listId][key] = e.target.value

        // console.log(changedCells)
        setChangedCells(changedCells)
    }

    const units = cells.map((p, index) => {
        return (
            <div className="hb-part2-longBar-unit" key={index}>
                <div className="hb-part2-longBar-name">
                    {p[3] === "" ? p[1] : p[1] + "(" + p[3] + ")"}
                </div>
                <input className="hb-part2-longBar-input"
                       defaultValue={p[2]} onChange={(e) => {handleChange(e, p[0])}}/>
            </div>
        )
    });

    const unitsList = [];
    let userList = []; // 每行
    let i = 0
    while (i < units.length) {
        userList.push(units[i]);
        if (i % 3 === 2) {
            unitsList.push(
                <div className="hb-part2-longBar-unitRow" key={"row " + i / 3}>
                    {userList}
                </div>
            );
            userList = [];
        }
        i ++;
    }
    if(userList.length !== 0){
        unitsList.push(
            <div className="hb-part2-longBar-unitRow" key={"row " + i / 3}>
                {userList}
            </div>
        );
    }

    return unitsList
}

const createPart = (title, cells, listId, changedCells, setChangedCells) => {
    return (
        <div className="hb-part2-part">
            <div className="hb-part2-part-title">
                {title}
            </div>
            {createUnites(cells, listId, changedCells, setChangedCells)}
        </div>
    )
}

const Part1 = (props) => {
    const [part1, setPart1] = useState([])

    useEffect(()=>{
        fetch('/api/v1/part/1')
            .then(response => response.json())
            .then(data => getPart1(data[0]))
            .then(p => {
                setPart1(p)
            })
    }, [])

    if(part1.length === 0){
        return (
            <div className='hb-part2-longBar'>
                <div className="hb-part2-longBar-title">
                    {"边界条件设置"}
                </div>
                <div className="hb-part2-longBar-body" style={{height: "200px"}}>
                    <Loading/>
                </div>
            </div>
        )
    }

    return (
        <div className="hb-part2-longBar">
            <div className="hb-part2-longBar-title">
                {"边界条件设置"}
            </div>
            <div className="hb-part2-longBar-body">
                {createUnites(part1, 0, props.changedCells, props.setChangedCells)}
            </div>
        </div>
    )

}

const Part2 = (props) => {
    const [part, setPart] = useState([])

    useEffect(()=>{
        fetch('/api/v1/part/2')
            .then(response => response.json())
            .then(data => getPart2(data[0]))
            .then(p => {
                setPart(p)
            })
    }, [])

    if(part.length === 0){
        return (
            <div className='hb-part2-longBar'>
                <div className="hb-part2-longBar-title">
                    {"链篦机参数设置"}
                </div>
                <div className="hb-part2-longBar-body" style={{height: "200px"}}>
                    <Loading/>
                </div>
            </div>
        )
    }

    return (
        <div className="hb-part2-longBar">
            <div className="hb-part2-longBar-title">
                {"链篦机参数设置"}
            </div>
            <div className="hb-part2-longBar-body">
                {createUnites(part.slice(0, 49), 1, props.changedCells, props.setChangedCells)}
                {createPart("生球成分", part.slice(49, 58), 1, props.changedCells, props.setChangedCells)}
                {createPart("链篦机出料球成分", part.slice(58, 66), 1, props.changedCells, props.setChangedCells)}
                {createPart("预热二段吸风成分", part.slice(66, 68), 1, props.changedCells, props.setChangedCells)}
                {createPart("鼓风干燥段烟气成分", part.slice(68, 73), 1, props.changedCells, props.setChangedCells)}
                {createPart("抽风干燥段烟气成分", part.slice(73, 78), 1, props.changedCells, props.setChangedCells)}
                {createPart("预热一段烟气成分", part.slice(78, 83), 1, props.changedCells, props.setChangedCells)}
                {createPart("预热二段烟气成分", part.slice(83, 88), 1, props.changedCells, props.setChangedCells)}
            </div>
        </div>
    )

}

const Part3 = (props) => {
    const [part, setPart] = useState([])

    useEffect(()=>{
        fetch('/api/v1/part/3')
            .then(response => response.json())
            .then(data => getPart3(data[0]))
            .then(p => {
                setPart(p)
            })
    }, [])

    if(part.length === 0){
        return (
            <div className='hb-part2-longBar'>
                <div className="hb-part2-longBar-title">
                    {"回转窑设备参数"}
                </div>
                <div className="hb-part2-longBar-body" style={{height: "200px"}}>
                    <Loading/>
                </div>
            </div>
        )
    }

    return (
        <div className="hb-part2-longBar">
            <div className="hb-part2-longBar-title">
                {"回转窑设备参数"}
            </div>
            <div className="hb-part2-longBar-body">
                {createUnites(part.slice(0, 14).concat(part.slice(21, 25)), 2, props.changedCells, props.setChangedCells)}
                {createPart("回转窑烟气成分", part.slice(14, 19), 2, props.changedCells, props.setChangedCells)}
                {createPart("助燃风成分", part.slice(19, 21), 2, props.changedCells, props.setChangedCells)}
            </div>
        </div>
    )

}

const Part4 = (props) => {
    const [part, setPart] = useState([])

    useEffect(()=>{
        fetch('/api/v1/part/4')
            .then(response => response.json())
            .then(data => getPart4(data[0]))
            .then(p => {
                setPart(p)
            })
    }, [])

    if(part.length === 0){
        return (
            <div className='hb-part2-longBar'>
                <div className="hb-part2-longBar-title">
                    {"环冷设备参数"}
                </div>
                <div className="hb-part2-longBar-body" style={{height: "200px"}}>
                    <Loading/>
                </div>
            </div>
        )
    }

    return (
        <div className="hb-part2-longBar">
            <div className="hb-part2-longBar-title">
                {"环冷设备参数"}
            </div>
            <div className="hb-part2-longBar-body">
                {createUnites(part.slice(0, 58), 3, props.changedCells, props.setChangedCells)}
                {createPart("出料球成分", part.slice(58, 66), 3, props.changedCells, props.setChangedCells)}
                {createPart("环冷一段烟气成分", part.slice(66, 71), 3, props.changedCells, props.setChangedCells)}
                {createPart("环冷二段烟气成分", part.slice(71, 76), 3, props.changedCells, props.setChangedCells)}
                {createPart("鼓风成分", part.slice(76, 78), 3, props.changedCells, props.setChangedCells)}
                {createPart("环冷三段烟气成分", part.slice(78, 83), 3, props.changedCells, props.setChangedCells)}
                {createPart("环冷四段烟气成分", part.slice(83, 88), 3, props.changedCells, props.setChangedCells)}
            </div>
        </div>
    )

}



// const Parts = (props) => {
//     switch (props.part) {
//         case 0:
//             return <Part1 part1Cells={props.part1Cells} changedCells={props.changedCells}/>
//         case 1:
//             return <Part2 part2Cells={props.part2Cells} changedCells={props.changedCells}/>
//         case 2:
//             return <Part3 part3Cells={props.part3Cells} changedCells={props.changedCells}/>
//         case 3:
//             return <Part4 part4Cells={props.part4Cells} changedCells={props.changedCells}/>
//         default:
//             return null
//     }
// }
//
// const Part1 = (props) => {
//
//     const [part1Cells, setPart1Cells] = useState([])
//
//     useEffect(()=>{
//         fetch('/api/v1/part/1')
//                 .then(response => response.json())
//                 .then(data => getPart1(data[0]))
//                 .then(p1 => {
//                     setPart1Cells(p1)
//                 })
//     }, [])
//
//     // console.log(part1Cells)
//
//     const setCell = (e, index) => {
//         const value = parseFloat(e.target.value)
//         part1Cells[index][2] = value
//         props.changedCells[0][index] = value
//     }
//
//     if(part1Cells.length === 0){
//         return <div className='hb-part2-window4-part1-body' style={{width: "100%"}}>
//             <div className="container">
//                 <div className="trans">
//                     <span>加载中...</span>
//                 </div>
//             </div>
//         </div>
//     }
//
//     return (
//         <div className="hb-part2-window4-part1-body">
//             <div className="test1">
//                 {/*气体密度*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">气体密度</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(0, 4).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*其他参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">其他参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part1Cells[4], part1Cells[5], part1Cells[62], part1Cells[71]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/*比热容*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">比热容</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part1Cells.slice(6, 16).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part1Cells.slice(16, 20).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     <div className="hb-part2-window4-part4-box-cell">
//                         <div>{part1Cells[70][1]}</div>
//                         <input defaultValue={part1Cells[70][2]} onChange={(e) => {
//                             setCell(e, part1Cells[70][0])
//                         }}/> {part1Cells[70][3]}
//                     </div>
//                     {part1Cells.slice(57, 62).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="test1">
//                 {/*鼓风干燥段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">鼓风干燥段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(20, 25).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(25, 28).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                         <div className="hb-part2-window4-part4-box-cell-long">
//                             <div>{part1Cells[54][1]}</div>
//                             <input defaultValue={part1Cells[54][2]} onChange={(e) => {
//                                 setCell(e, part1Cells[54][0])
//                             }}/> {part1Cells[54][3]}
//                         </div>
//                     </div>
//                 </div>
//                 {/*抽风干燥段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">抽风干燥段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(28, 33).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(33, 36).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                         <div className="hb-part2-window4-part4-box-cell-long">
//                             <div>{part1Cells[55][1]}</div>
//                             <input defaultValue={part1Cells[55][2]} onChange={(e) => {
//                                 setCell(e, part1Cells[55][0])
//                             }}/> {part1Cells[55][3]}
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//             <div className="test1">
//                 {/*预热一段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">预热一段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(36, 41).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(41, 44).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                         <div className="hb-part2-window4-part4-box-cell-long">
//                             <div>{part1Cells[56][1]}</div>
//                             <input defaultValue={part1Cells[56][2]} onChange={(e) => {
//                                 setCell(e, part1Cells[56][0])
//                             }}/> {part1Cells[56][3]}
//                         </div>
//                     </div>
//                 </div>
//                 {/*预热二段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">预热二段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(44, 48).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(48, 52).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/*链篦机参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">链篦机参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {[part1Cells[52], part1Cells[53], part1Cells[63], part1Cells[64], part1Cells[65]].map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*回转窑参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">回转窑参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part1Cells.slice(66, 70).concat(part1Cells.slice(72, 75)).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="test1">
//                 {/*环冷一段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷一段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(75, 79).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(79, 83).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*环冷二燥段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷二燥段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(83, 87).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(87, 91).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="test1">
//                 {/*环冷三段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷三段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(91, 95).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(95, 99).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*环冷四燥段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷四燥段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(99, 103).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part1Cells.slice(103, 107).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// const Part2 = (props) => {
//     const [part2Cells, setPart2Cells] = useState([])
//
//     useEffect(()=>{
//         fetch('/api/v1/part/2')
//             .then(response => response.json())
//             .then(data => getPart2(data[0]))
//             .then(p2 => {
//                 setPart2Cells(p2)
//             })
//     }, [])
//
//     const setCell = (e, index) => {
//         const value = parseFloat(e.target.value)
//         part2Cells[index][2] = value
//         props.changedCells[1][index] = value
//
//         // 抽风干燥段
//         if(index === 3 || index === 6 || index === 9 || index === 12){
//             const density = parseFloat((1.293 * 273 / (value + 273)).toFixed(3))
//             part2Cells[index - 1][2] = density
//             props.changedCells[1][index - 1] = density
//         }
//     }
//
//     const BigCell = (props) => {
//         const cells = part2Cells.slice(props.begin, props.end)
//         return (
//             <div className="hb-part2-window4-part2-body-cell-big">
//                 <div>{props.title}</div>
//                 {cells.map((cell, index) => (
//                     <div key={index}>{cell[1]} <input defaultValue={cell[2]} onChange={(e) => {
//                         setCell(e, cell[0])
//                     }}/> {cell[3]}</div>
//                 ))}
//             </div>
//         )
//     }
//
//     if(part2Cells.length === 0){
//         return <div className='hb-part2-window4-part1-body' style={{width: "100%"}}>
//             <div className="container">
//                 <div className="trans">
//                     <span>加载中...</span>
//                 </div>
//             </div>
//         </div>
//     }
//
//     //console.log(part2Cells)
//
//     return (
//         <div className="hb-part2-window4-part2-body">
//             {/*鼓风干燥段参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">鼓风干燥段参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part2Cells.slice(1, 4).concat([part2Cells[19]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     {part2Cells.slice(30, 34).concat([part2Cells[16]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*抽风干燥段参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">抽风干燥段参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part2Cells.slice(4, 7).concat([part2Cells[20]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     {part2Cells.slice(30, 34).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*预热一段参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">预热一段参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part2Cells.slice(7, 10).concat([part2Cells[21]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     {part2Cells.slice(38, 42).concat([part2Cells[17]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*预热二段参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">预热二段参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part2Cells.slice(10, 13).concat([part2Cells[22]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     {part2Cells.slice(42, 46).concat([part2Cells[18]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*冷却水参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">冷却水参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part2Cells.slice(23, 28).concat([part2Cells[22]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*其他参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">其他参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part2Cells.slice(13, 16).concat([part2Cells[0]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     {part2Cells.slice(28, 30).concat(part2Cells.slice(46, 49)).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"生球成分"} begin={49} end={58}/>
//                 <BigCell title={"链篦机出料球成分"} begin={58} end={66}/>
//             </div>
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"预热二段吸风成分"} begin={66} end={68}/>
//                 <BigCell title={"鼓风干燥段烟气成分"} begin={68} end={73}/>
//                 <BigCell title={"抽风干燥段烟气成分"} begin={73} end={78}/>
//             </div>
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"预热一段烟气成分"} begin={78} end={83}/>
//                 <BigCell title={"预热二段烟气成分"} begin={83} end={88}/>
//             </div>
//         </div>
//     )
// }
//
// const Part3 = (props) => {
//
//     const [part3Cells, setPart3Cells] = useState([])
//
//     useEffect(()=>{
//         fetch('/api/v1/part/3')
//             .then(response => response.json())
//             .then(data => getPart3(data[0]))
//             .then(p3 => {
//                 setPart3Cells(p3)
//             })
//     }, [])
//
//     const setCell = (e, index) => {
//         part3Cells[index][2] = e.target.value
//         props.changedCells[2][index] = parseFloat(e.target.value)
//     }
//
//     const BigCell = (props) => {
//         const cells = part3Cells.slice(props.begin, props.end)
//         return (
//             <div className="hb-part2-window4-part2-body-cell-big">
//                 <div>{props.title}</div>
//                 {cells.map((cell, index) => (
//                     <div key={index}>{cell[1]} <input defaultValue={cell[2]} onChange={(e) => {
//                         setCell(e, cell[0])
//                     }}/> {cell[3]}</div>
//                 ))}
//             </div>
//         )
//     }
//
//
//     if(part3Cells.length === 0){
//         return <div className='hb-part2-window4-part1-body' style={{width: "100%"}}>
//             <div className="container">
//                 <div className="trans">
//                     <span>加载中...</span>
//                 </div>
//             </div>
//         </div>
//     }
//
//     return (
//         <div className="hb-part2-window4-part3-body" style={{width: "100%"}}>
//             {/*回转窑参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">回转窑参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part3Cells.slice(4, 9).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part3Cells.slice(9, 14).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*煤粉参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">煤粉参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part3Cells.slice(1, 4).concat([part3Cells[21]]).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*其他参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">其他参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {[part3Cells[0], part3Cells[22]].map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     {[part3Cells[23], part3Cells[24]].map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"回转窑烟气成分"} begin={14} end={19}/>
//                 <BigCell title={"助燃风成分"} begin={19} end={21}/>
//             </div>
//         </div>
//     )
// }
//
// const Part4 = (props) => {
//
//     const [part4Cells, setPart4Cells] = useState([])
//
//     useEffect(()=>{
//         fetch('/api/v1/part/4')
//             .then(response => response.json())
//             .then(data => getPart4(data[0]))
//             .then(p4 => {
//                 setPart4Cells(p4)
//             })
//     }, [])
//
//     const setCell = (e, index) => {
//         part4Cells[index][2] = e.target.value
//         props.changedCells[3][index] = parseFloat(e.target.value)
//     }
//
//     const BigCell = (props) => {
//         const cells = part4Cells.slice(props.begin, props.end)
//         return (
//             <div className="hb-part2-window4-part2-body-cell-big">
//                 <div>{props.title}</div>
//                 {cells.map((cell, index) => (
//                     <div key={index}>{cell[1]} <input defaultValue={cell[2]} onChange={(e) => {
//                         setCell(e, cell[0])
//                     }}/> {cell[3]}</div>
//                 ))}
//             </div>
//         )
//     }
//
//     if(part4Cells.length === 0){
//         return <div className='hb-part2-window4-part1-body' style={{width: "100%"}}>
//             <div className="container">
//                 <div className="trans">
//                     <span>加载中...</span>
//                 </div>
//             </div>
//         </div>
//     }
//
//     return (
//         <div className="hb-part2-window4-part4-body">
//             <div className="test1">
//                 {/*环冷一段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷一段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part4Cells[1], part4Cells[5], part4Cells[9], part4Cells[13]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part4Cells.slice(41, 45).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*环冷二段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷二段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part4Cells[2], part4Cells[6], part4Cells[10], part4Cells[14]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part4Cells.slice(45, 49).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="test1">
//                 {/*环冷三段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷三段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part4Cells[3], part4Cells[7], part4Cells[11], part4Cells[15]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part4Cells.slice(45, 49).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*环冷四段参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">环冷四段参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part4Cells[4], part4Cells[8], part4Cells[12], part4Cells[16]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part4Cells.slice(53, 57).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/*冷却水参数*/}
//             <div className="hb-part2-window4-part4-box">
//                 <div className="hb-part2-window4-part4-box-title">冷却水参数</div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part4Cells.slice(19, 26).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="hb-part2-window4-part4-box-column">
//                     {part4Cells.slice(26, 32).map((cell, index) => (
//                         <div className="hb-part2-window4-part4-box-cell-long"
//                              key={index}>
//                             <div>{cell[1]}</div>
//                             <input defaultValue={cell[2]} onChange={(e) => {
//                                 setCell(e, cell[0])
//                             }}/> {cell[3]}
//                         </div>
//                     ))}
//                     <div className="hb-part2-window4-part4-box-cell-long" style={{width: "200px"}}>
//                         <div>{part4Cells[32][1]}</div>
//                         <input defaultValue={part4Cells[32][2]} onChange={(e) => {
//                             setCell(e, part4Cells[32][0])
//                         }}/> {part4Cells[32][3]}
//                     </div>
//                 </div>
//             </div>
//             <div className="test1">
//                 {/*冷却风参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">冷却风参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part4Cells.slice(33, 37).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell-long"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {part4Cells.slice(37, 41).map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell-long"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*其他参数*/}
//                 <div className="hb-part2-window4-part4-box">
//                     <div className="hb-part2-window4-part4-box-title">其他参数</div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part4Cells[0], part4Cells[17]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell-long"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hb-part2-window4-part4-box-column">
//                         {[part4Cells[18], part4Cells[57]].map((cell, index) => (
//                             <div className="hb-part2-window4-part4-box-cell-long"
//                                  key={index}>
//                                 <div>{cell[1]}</div>
//                                 <input defaultValue={cell[2]} onChange={(e) => {
//                                     setCell(e, cell[0])
//                                 }}/> {cell[3]}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"出料球成分"} begin={58} end={66}/>
//                 <BigCell title={"鼓风成分\n"} begin={76} end={78}/>
//             </div>
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"环冷一段烟气成分\n"} begin={66} end={71}/>
//                 <BigCell title={"环冷二段烟气成分\n"} begin={71} end={76}/>
//             </div>
//             <div className="hb-part2-window4-part2-body-column">
//                 <BigCell title={"环冷三段烟气成分\n"} begin={78} end={83}/>
//                 <BigCell title={"环冷四段烟气成分\n"} begin={83} end={88}/>
//             </div>
//         </div>
//     )
//
// }

export default Window4
