import React, {useEffect, useState} from "react";
import '../../Pages/MaterialListPage.css'
import ManageMaterialPopup from "../MaterialListPage/ManageMaterialForm";
/*
    铁矿粉列表
 */

const IronOrePowderList = (props) => {

    const secondHeaders = ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3",
        "K2O", "Cl", "Mn", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损",
        "小于200目", "小于300目", "比表面积", "更新时间"]

    // 绑定一个列表和函数，调用 setMaterials（data）就可以把data里的数添加到列表 materials 里
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        fetch('/api/v1/materials/1')
            .then(response => response.json())
            .then(data => setMaterials(data));
    }, [])

    // 是否打开新窗口
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // 点击'详情'给id赋值，传递给 UpdateMaterialForm
    const [id, setId] = useState(0)
    const [materialId, setMaterialId] = useState(0)

    // 每个checkbox的状态，如果是true就添加到checkBox里面
    const checkBox = props.checkBox
    const toggleCheckbox = (e, id) => {
        if (e.target.name === 'selectAll') {
            if (checkBox.length === materials.length) {
                checkBox.splice(0, checkBox.length)
            } else {
                for (let i = 0; i < materials.length; i++) {
                    if (checkBox.indexOf(materials[i].materialId) === -1) {
                        checkBox.push(materials[i].materialId)
                    }
                }
            }
        } else {
            if (checkBox.indexOf(id) === -1) {
                checkBox.push(id);
            } else {
                checkBox.splice(checkBox.indexOf(id), 1);
            }
        }
        // console.log(checkBox);
    }

    // 全选函数
    // console.log(checks)
    const handleChange = (e, id) => {
        const {checked, name} = e.target
        if (name === 'selectAll') {
            let temp = materials.map((material) => {
                return {...material, isChecked: checked}
            })
            setMaterials(temp)
        } else {
            let temp = materials.map((material) =>
                material.materialId === id ? {...material, isChecked: checked} : material
            )
            setMaterials(temp)
        }
        // console.log(materials)
    }
    console.log(materials)
    return (
        <div className='materialListPage_materialList'>
            <div className='materialList_first'>
                <table>
                    <thead>
                    <tr className='tablePart'>
                        <th className='checkBox'>
                            <input
                                className='checkBox'
                                type='checkbox'
                                name={'selectAll'}
                                checked={materials.filter((material) => material?.isChecked !== true).length < 1}
                                onChange={(e) => {
                                    handleChange(e, 0)
                                    toggleCheckbox(e, 0)
                                }}
                            /></th>
                        <th className='state'>操作</th>
                        <th className='check'>审核状态</th>
                        <th className='id'>原料id</th>
                        <th className='name'>原料名称</th>
                    </tr>
                    </thead>
                    <tbody>
                    {materials.map((material, index) => (
                        <tr key={index}>
                            <td className='checkBox'>
                                <input
                                    className='checkBox'
                                    type='checkbox'
                                    checked={material?.isChecked || false}
                                    name={'single'}
                                    onChange={(e) => {
                                        toggleCheckbox(e, material.materialId)
                                        handleChange(e, material.materialId)
                                    }}
                                /></td>
                            <td className='state'>
                                <button
                                    className='operation'
                                    onClick={() => {
                                        togglePopup()
                                        setMaterialId(material.materialId)
                                        setId(index)
                                    }}
                                >详情
                                </button>
                            </td>
                            <td className='check'>
                                <div className={material.ifCheck ? 'state2' : 'state1'}>
                                    {material.ifCheck ? '已审核' : '未审核'}
                                </div>
                            </td>
                            <td className='id'>{material.materialId}</td>
                            <td className='name'>{material.materialName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {isOpen && <ManageMaterialPopup
                    data={materials[id]}
                    materialType={'0'}
                    materialId={materialId}
                    handleClose={togglePopup}
                />}
            </div>
            <div className='materialList_second'>
                <table>
                    <thead>
                    <tr className='tablePart'>
                        {secondHeaders.map((header, index) => (
                            <th
                                className={header === '原料产地' || header === '公司' ? 'name' : 'tablePart'}
                                key={index}>{header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {materials.map((material, index) => (
                        <tr key={index}>
                            <td className='name'>{material.materialOriginal}</td>
                            <td className='name'>{material.companyName}</td>
                            <td>{material.testDate.slice(0, 10)}</td>
                            <td>{material.materialPrice.toFixed(2)}</td>
                            <td>{material.TFe.toFixed(3)}</td>
                            <td>{material.FeO.toFixed(3)}</td>
                            <td>{material.SiO2.toFixed(3)}</td>
                            <td>{material.CaO.toFixed(3)}</td>
                            <td>{material.MgO.toFixed(3)}</td>
                            <td>{material.Al2O3.toFixed(3)}</td>
                            <td>{material.K2O.toFixed(3)}</td>
                            <td>{material.Cl.toFixed(3)}</td>
                            <td>{material.Mn.toFixed(3)}</td>
                            <td>{material.P.toFixed(3)}</td>
                            <td>{material.Na2O.toFixed(3)}</td>
                            <td>{material.MnO.toFixed(3)}</td>
                            <td>{material.ZnO.toFixed(3)}</td>
                            <td>{material.TiO2.toFixed(3)}</td>
                            <td>{material.P2O5.toFixed(3)}</td>
                            <td>{material.S.toFixed(3)}</td>
                            <td>{material.Zn.toFixed(3)}</td>
                            <td>{material.water.toFixed(3)}</td>
                            <td>{material.burningLoss.toFixed(3)}</td>
                            <td>{material.less200Mesh.toFixed(3)}</td>
                            <td>{material.less300Mesh.toFixed(3)}</td>
                            <td>{material.specificSurfaceArea.toFixed(3)}</td>
                            <td>{material.updateDate.slice(0, 10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IronOrePowderList