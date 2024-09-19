import React, {useEffect, useState} from "react";
import '../../Pages/MaterialListPage.css'
/*
    喷吹煤列表
 */
const CoalinjectionList = () => {
    // 表头
    const firstHeaders = ["原料ID", "原料名称",]

    const secondHeaders = ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO",
        "Al2O3", "K2O", "S", "水分", "烧损", "灰分", "挥发分", "热值", "燃烧性", "灰熔点", "反应性", "可磨性", "爆炸性", "更新时间"]

    // 绑定一个列表和函数，调用 setMaterials（data）就可以把data里的数添加到列表 materials 里
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        fetch('/api/v1/materials/3')
            .then(response => response.json())
            .then(data => setMaterials(data));
    }, [])

    return (
        <div className='materialListPage_materialList'>
            <div className='materialList_first'>
                <table>
                    <thead>
                    <tr className='tablePart'>
                        <th className='checkBox'><input type='checkbox' className='checkBox'/></th>
                        <th className='state'>状态</th>
                        {firstHeaders.map((header, index) => (
                            <th className='tablePart' key={index}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {materials.map((material, index) => (
                        <tr key={index}>
                            <td className='checkBox'><input type='checkbox' className='checkBox'/></td>
                            <td className='state'>状态</td>
                            <td>{material.materialId}</td>
                            <td>{material.materialName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className='materialList_second'>
                <table>
                    <thead>
                    <tr className='tablePart'>
                        {secondHeaders.map((header, index) => (
                            <th className='tablePart' key={index}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {materials.map((material, index) => (
                        <tr key={index}>
                            <td>{material.materialOriginal}</td>
                            <td>{material.companyName}</td>
                            <td>{material.testDate}</td>
                            <td>{material.materialPrice.toFixed(2)}</td>
                            <td>{material.TFe.toFixed(3)}</td>
                            <td>{material.FeO.toFixed(3)}</td>
                            <td>{material.SiO2.toFixed(3)}</td>
                            <td>{material.CaO.toFixed(3)}</td>
                            <td>{material.MgO.toFixed(3)}</td>
                            <td>{material.Al2O3.toFixed(3)}</td>
                            <td>{material.K2O.toFixed(3)}</td>
                            <td>{material.S.toFixed(3)}</td>
                            <td>{material.water.toFixed(3)}</td>
                            <td>{material.burningLoss.toFixed(3)}</td>
                            <td>{material.ash.toFixed(3)}</td>
                            <td>{material.volatiles.toFixed(3)}</td>
                            <td>{material.calorificValue.toFixed(3)}</td>
                            <td>{material.flammability.toFixed(3)}</td>
                            <td>{material.ashFusionPoint.toFixed(3)}</td>
                            <td>{material.reactivity.toFixed(3)}</td>
                            <td>{material.grindability.toFixed(3)}</td>
                            <td>{material.explosibility.toFixed(3)}</td>
                            <td>{material.updateDate.slice(0, 10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CoalinjectionList