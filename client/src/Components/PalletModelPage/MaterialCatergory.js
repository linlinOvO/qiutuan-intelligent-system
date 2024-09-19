import React from "react";
import '../../Pages/PalletModelPage.css'

const MaterialConcentrated = (props) => {

    const handleChange = (m, n, e) => {
        //判断是否为纯数字
        if(isNaN(Number(e.target.value))){
            return
        }
        const l = props.materialDryProportion
        l[m][n] = Number(e.target.value)
        props.setMaterialDryProportion(l)
        props.setElementAmounts(props.calculateProportion(props.inputFeO))
    }

    return (
        <div className='palletModelPage_materialPart'>
            <div className='palletModelPage_category_left'>
                <div className='palletModelPage_materialPart_title_category'>膨润土配比</div>
                <div className='palletModelPage_materialPart_table_category'>
                    <table>
                        <thead>
                        <tr>
                            <th className='category_id'>ID</th>
                            <th className='category_name'>膨润土名称</th>
                            <th className='category_input'>
                                {props.ratio === "dry" ? "干配比(%)" : "湿配比(%)"}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.materialChosen[0].map((m, index) => (
                            <tr key={index}>
                                <td className='category_id'>{m.materialId}</td>
                                <td className='category_name'>{m.materialName}</td>
                                <td className='category_input'>
                                    <input defaultValue={props.materialDryProportion[1][index]}
                                           value={props.ratio === "dry" ? props.materialDryProportion[0][index] : props.materialWetProportion[0][index]}
                                           onChange={(e) => {
                                               handleChange(0, index, e)
                                           }}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='palletModelPage_category_right'>
                <div className='palletModelPage_materialPart_title_category'>铁矿粉配比</div>
                <div className='palletModelPage_materialPart_table_category'>
                    <table>
                        <thead>
                        <tr>
                            <th className='category_id'>ID</th>
                            <th className='category_name'>铁矿粉名称</th>
                            <th className='category_input'>
                                {props.ratio === "dry" ? "干配比(%)" : "湿配比(%)"}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.materialChosen[1].map((m, index) => (
                            <tr key={index}>
                                <td className='category_id'>{m.materialId}</td>
                                <td className='category_name'>{m.materialName}</td>
                                <td className='category_input'>
                                    <input defaultValue={props.materialDryProportion[1][index]}
                                           onChange={(e) => {
                                               handleChange(1, index, e)
                                           }}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='palletModelPage_category_left'>
                <div className='palletModelPage_materialPart_title_category'>熔剂配比</div>
                <div className='palletModelPage_materialPart_table_category'>
                    <table>
                        <thead>
                        <tr>
                            <th className='category_id'>ID</th>
                            <th className='category_name'>熔剂名称</th>
                            <th className='category_input'>
                                {props.ratio === "dry" ? "干配比(%)" : "湿配比(%)"}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.materialChosen[2].map((m, index) => (
                            <tr key={index}>
                                <td className='category_id'>{m.materialId}</td>
                                <td className='category_name'>{m.materialName}</td>
                                <td className='category_input'>
                                    <input defaultValue={props.materialDryProportion[2][index]}
                                           onChange={(e) => {
                                               handleChange(2, index, e)
                                           }}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='palletModelPage_category_right'>
                <div className='palletModelPage_materialPart_title_category'>喷吹煤配比</div>
                <div className='palletModelPage_materialPart_table_category'>
                    <table>
                        <thead>
                        <tr>
                            <th className='category_id'>ID</th>
                            <th className='category_name'>喷吹煤名称</th>
                            <th className='category_input'>
                                {props.ratio === "dry" ? "干配比(%)" : "湿配比(%)"}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.materialChosen[3].map((m, index) => (
                            <tr key={index}>
                                <td className='category_id'>{m.materialId}</td>
                                <td className='category_name'>{m.materialName}</td>
                                <td className='category_input'>
                                    <input defaultValue={props.materialDryProportion[3][index]}
                                           onChange={(e) => {
                                               handleChange(3, index, e)
                                           }}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MaterialConcentrated