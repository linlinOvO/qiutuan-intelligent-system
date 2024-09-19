import React, {useState} from "react";
import '../../Pages/PalletModelPage.css'


const MainTable = (props) => {
    const mainConstituents = ["TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "Mn", "Na2O", "MnO", "ZnO",
        "TiO2", "P2O5"]
    return (
        <div className='palletModelPage_resultPart_body_table'>
            <table>
                <thead>
                {mainConstituents.map((c, index) => (
                    <tr key={index}>
                        <th>{c}</th>
                        <td>{props.elementAmounts.hasOwnProperty(c) ? props.elementAmounts[c] : 0}</td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
    )
}


const MicroTable = (props) => {
    const microConstituents = ["Cl", "P", "S", "Zn", "F"]
    return (
        <div className='palletModelPage_resultPart_body_table'>
            <table>
                <thead>
                {microConstituents.map((c, index) => (
                    <tr key={index}>
                        <th>{c}</th>
                        <td>{props.elementAmounts.hasOwnProperty(c) ? props.elementAmounts[c] : 0}</td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
    )
}


const Table = (props) => {
    if(props.constituent === "main"){
        return <MainTable elementAmounts={props.elementAmounts}/>
    }else if(props.constituent === "micro"){
        return <MicroTable elementAmounts={props.elementAmounts}/>
    }
}


const ResultPart = (props) => {
    const [constituent, setConstituent] = useState('main')  // main and micro, part3, part4

    return (
        <div className='palletModelPage_resultPart'>
            <div className='palletModelPage_resultPart_title'>计算结果</div>
            <div className='palletModelPage_resultPart_body'>
                <div
                    className={constituent === 'main' ?
                        'palletModelPage_resultPart_body_text1' : 'palletModelPage_resultPart_body_text2'}
                    onClick={() => {
                        setConstituent('main')
                    }}
                >主要成分
                </div>
                <div
                    className={constituent === 'micro' ?
                        'palletModelPage_resultPart_body_text1' : 'palletModelPage_resultPart_body_text2'}
                    onClick={() => {
                        setConstituent('micro')
                    }}
                >微量成分
                </div>
                {/*<div*/}
                {/*    className={constituent === 'part3' ?*/}
                {/*        'palletModelPage_resultPart_body_text1' : 'palletModelPage_resultPart_body_text2'}*/}
                {/*    onClick={() => {*/}
                {/*        setConstituent('part3')*/}
                {/*    }}*/}
                {/*>粒度组成*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className={constituent === 'part4' ?*/}
                {/*        'palletModelPage_resultPart_body_text1' : 'palletModelPage_resultPart_body_text2'}*/}
                {/*    onClick={() => {*/}
                {/*        setConstituent('part4')*/}
                {/*    }}*/}
                {/*>质量预测*/}
                {/*</div>*/}
                <Table constituent={constituent} elementAmounts={props.elementAmounts}/>
            </div>
        </div>
    )
}

export default ResultPart