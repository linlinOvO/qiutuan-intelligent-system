import React from "react";
import '../../Pages/PalletModelPage.css'

const MaterialConcentrated = (props) => {
    // console.log(props.materialChosen)
    const headers = ["TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O", "Cl", "Mn", "P", "Na2O", "MnO", "ZnO",
        "TiO2", "P2O5", "S", "Zn", "F", "水分", "烧损", "胶质价", "吸蓝量", "蒙脱石含量", "膨胀容", "+0.150mm", "0.150-0.124mm",
        "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm", "<0.045mm", "最大分子水", "最大毛细水", "成球性指数", "平均粒径mm","小于200目",
        "小于300目", "比表面积", "灰分", "挥发分", "热值", "燃烧性", "灰熔点", "反应性", "可磨性", "爆炸性", "成本"]
    const type = ['膨润土', '铁矿粉', '熔剂', '喷吹煤']

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

    const getSum = () => {
        let sum = 0
        for (let i in props.materialDryProportion){
            for(let j in props.materialDryProportion[i]){
                sum += props.materialDryProportion[i][j]
            }
        }

        return sum
    }

    return (
        <div className='palletModelPage_materialPart'>
            <div className='palletModelPage_materialPart_title'>原料配比</div>
            <div className='palletModelPage_materialPart_table'>
                {/* 中间的表格 */}
                <div className="palletModelPage_materialPart_table2">
                    <table>
                        <thead>
                        <tr>
                            <th className='table1_body_name'>原料</th>
                            <th className='table1_body_type'>原料类别</th>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                            <th>{"干配比(%) " + getSum()}</th>
                        </tr>
                        {props.materialChosen.map((ms, i) => (
                            ms.map((m, index) => (
                                <tr key={index}>
                                    <td className='table1_body_name'>{m.materialName}</td>
                                    <td className='table1_body_type'>{type[i]}</td>
                                    <td>{m.hasOwnProperty('TFe') ? m.TFe.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('FeO') ? m.FeO.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('SiO2') ? m.SiO2.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('CaO') ? m.CaO.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('MgO') ? m.MgO.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('Al2O3') ? m.Al2O3.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('K2O') ? m.K2O.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('Cl') ? m.Cl.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('Mn') ? m.Mn.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('P') ? m.P.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('Na2O') ? m.Na2O.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('MnO') ? m.MnO.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('ZnO') ? m.ZnO.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('TiO2') ? m.TiO2.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('P2O5') ? m.P2O5.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('S') ? m.S.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('Zn') ? m.Zn.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('F') ? m.F.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('water') ? m.water.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('burningLoss') ? m.burningLoss.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('O_15') ? m.O_15.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('O_15ToO_124') ? m.O_15ToO_124.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('O_124ToO_O98') ? m.O_124ToO_O98.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('O_O98ToO_O74') ? m.O_O98ToO_O74.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('O_O74ToO_O48') ? m.O_O74ToO_O48.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('O_O48') ? m.O_O48.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('lessThan0_074') ? m.lessThan0_074.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('lessThan0_045') ? m.lessThan0_045.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('averageDiameter') ? m.averageDiameter.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('maxMolecularWater') ? m.maxMolecularWater.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('maxCapillaryWater') ? m.maxCapillaryWater.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('ballingIndex') ? m.ballingIndex.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('colloidIndex') ? m.colloidIndex.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('blueAbsorption') ? m.blueAbsorption.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('montmorilloniteContent') ? m.montmorilloniteContent.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('expansionCapacity') ? m.expansionCapacity.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('less200Mesh') ? m.less200Mesh.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('less300Mesh') ? m.less300Mesh.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('specificSurfaceArea') ? m.specificSurfaceArea.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('ash') ? m.ash.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('volatiles') ? m.volatiles.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('calorificValue') ? m.calorificValue.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('flammability') ? m.flammability.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('ashFusionPoint') ? m.ashFusionPoint.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('reactivity') ? m.reactivity.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('grindability') ? m.grindability.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('explosibility') ? m.explosibility.toFixed(3) : ' '}</td>
                                    <td>{m.hasOwnProperty('materialPrice') ? m.materialPrice.toFixed(3) : ' '}</td>
                                    <td>
                                        <input defaultValue={props.materialDryProportion[i][index]} onChange={(e) => {
                                            handleChange(i, index, e)
                                        }}/>
                                    </td>
                                </tr>
                            ))
                        ))}
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MaterialConcentrated