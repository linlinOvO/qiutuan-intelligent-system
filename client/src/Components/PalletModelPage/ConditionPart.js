import React from "react";
import '../../Pages/PalletModelPage.css'

const ConditionPart = (props) => {
    let total = 0
    let iron = 0
    let rongji = 0
    let other = 0
    let pengruntu = 0
    const ls = props.materialProportion

    for(let i in ls[0]){
        total += ls[0][i]
        pengruntu += ls[0][i]
    }
    for(let i in ls[1]){
        total += ls[1][i]
        iron += ls[1][i]
    }
    for(let i in ls[2]){
        total += ls[2][i]
        rongji += ls[2][i]
    }
    for(let i in ls[3]){
        total += ls[3][i]
        other += ls[3][i]
    }
    return (
        <div className='palletModelPage_conditionPart'>
            <div className='palletModelPage_conditionPart_title'>计算条件</div>
            <div className='palletModelPage_conditionPart_table'>
                <table>
                    <thead>
                    <tr>
                        <th>总批重</th>
                        <th>总配比</th>
                        <th>铁料比</th>
                        <th>熔剂配比</th>
                        <th style={{fontSize:"16px"}}>预计球团FeO含量</th>
                        <th>粘结剂配比</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='first'><input className='first' placeholder={0}/></td>
                        <td>{total}</td>
                        <td>{iron}</td>
                        <td>{rongji}</td>
                        <td><input className='first' value={props.inputFeO} onChange={(e) => {
                            props.setInputFeO(e.target.value)
                            props.setElementAmounts(props.calculateProportion(e.target.value))
                        }}/></td>
                        <td>{pengruntu}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ConditionPart