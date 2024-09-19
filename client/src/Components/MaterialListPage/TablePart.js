import React, {useState} from "react";
import '../../Pages/MaterialListPage.css'
import ManageMaterialPopup from "./ManageMaterialForm";

// const Table = (props) => {
//
//     const setMaterials = props.setMaterials
//     const headers = [
//         ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O","Cl", "Na2O", "MnO",
//             "ZnO", "TiO2", "P2O5", "S", "Zn", "F", "P", "水", "烧损", "胶质价", "吸蓝量", "蒙脱石含量", "膨胀容",
//             "+0.150mm", "0.150-0.124mm", "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm",
//             "<0.045mm", "平均粒径mm", "比表面积","更新时间"],
//         ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O",
//             "Cl", "Mn", "f", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损", "+0.150mm", "0.150-0.124mm",
//             "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm", "<0.045mm", "平均粒径mm",
//             "最大分子水", "最大毛细水", "成球性指数", "小于200目", "小于300目", "比表面积", "更新时间"],
//         ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O", "Cl", "Na2O", "MnO",
//             "ZnO", "TiO2", "P2O5", "S", "Zn", "F", "P", "水", "烧损",
//             "+0.150mm", "0.150-0.124mm", "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm",
//             "<0.045mm", "平均粒径mm", "比表面积", "更新时间"],
//         ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O","Cl", "Na2O", "MnO",
//             "ZnO", "TiO2", "P2O5", "Zn", "F", "P", "S", "水分", "烧损", "+0.150mm", "0.150-0.124mm", "0.124-0.098mm", "0.098-0.074mm",
//             "0.074-0.048mm", "-0.048mm", "<0.074mm", "<0.045mm", "平均粒径mm", "比表面积", "灰分", "挥发分", "热值", "燃烧性", "灰熔点",
//             "反应性", "可磨性", "爆炸性", "更新时间"]
//     ]
//
//     // 是否打开新窗口
//     const [isOpen, setIsOpen] = useState(false);
//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     }
//
//     // 点击'详情'给id赋值，传递给 UpdateMaterialForm
//     const [id, setId] = useState(0)
//     const [materialId, setMaterialId] = useState(0)
//
//     // 每个checkbox的状态，如果是true就添加到checkBox里面
//     const checkBox = props.checkBox
//     const materialChosen = props.materialChosen
//     const toggleCheckbox = (e, material) => {
//         if (e.target.name === 'selectAll') {
//             if (checkBox[props.id].length === props.materials.length) {
//                 if (materialChosen !== undefined) materialChosen[props.id].splice(0, checkBox[props.id].length)
//                 checkBox[props.id].splice(0, checkBox[props.id].length)
//             } else {
//                 for (let i = 0; i < props.materials.length; i++) {
//                     if (checkBox[props.id].indexOf(props.materials[i].materialId) === -1) {
//                         if (materialChosen !== undefined) {
//                             materialChosen[props.id].push(props.materials[i])
//                         }
//                         checkBox[props.id].push(props.materials[i].materialId)
//                     }
//                 }
//             }
//         } else {
//             if (checkBox[props.id].indexOf(material.materialId) === -1) {
//                 if (materialChosen !== undefined) {
//                     materialChosen[props.id].push(material)
//                 }
//                 checkBox[props.id].push(material.materialId);
//             } else {
//                 if (materialChosen !== undefined) {
//                     materialChosen[props.id].splice(checkBox[props.id].indexOf(material.materialId), 1)
//                 }
//                 checkBox[props.id].splice(checkBox[props.id].indexOf(material.materialId), 1);
//             }
//         }
//     }
//
//     // 全选函数
//     // console.log(checks)
//     const handleChange = (e, id) => {
//         const {checked, name} = e.target
//         if (name === 'selectAll') {
//             let temp = props.materials.map((material) => {
//                 return {...material, isChecked: checked}
//             })
//             setMaterials(temp)
//         } else {
//             let temp = props.materials.map((material) =>
//                 material.materialId === id ? {...material, isChecked: checked} : material
//             )
//             setMaterials(temp)
//         }
//         // console.log(materials)
//     }
//
//     const [scrollTop, setScrollTop] = useState(0)
//     const [scrollLeft, setScrollLeft] = useState(0)
//
//     return (
//         <div className='materialListPage_materialList'>
//             <ListHead
//                 materials={props.materials} handleChange={handleChange} toggleCheckbox={toggleCheckbox}
//                 secondHeaders={headers[props.id]} onScroll={setScrollLeft} scrollLeft={scrollLeft}
//                 length={props.length}
//             />
//             <ListBody
//                 materials={props.materials} handleChange={handleChange} toggleCheckbox={toggleCheckbox}
//                 togglePopup={togglePopup} setMaterialId={setMaterialId} setId={setId} setScrollTop={setScrollTop}
//                 scrollTop={scrollTop} scrollLeft={scrollLeft} setScrollLeft={setScrollLeft}
//             />
//             <div className='materialList_fixed'>
//                 <FixedListHead materials={props.materials} handleChange={handleChange} toggleCheckbox={toggleCheckbox}/>
//                 <FixedListBody
//                     materials={props.materials} handleChange={handleChange} toggleCheckbox={toggleCheckbox}
//                     togglePopup={togglePopup} setMaterialId={setMaterialId} setId={setId}
//                     materialChosen={props.materialChosen}
//                     onScroll={setScrollTop} scrollTop={scrollTop} checkbox={checkBox} listId={props.id}
//                 />
//             </div>
//             {isOpen && <ManageMaterialPopup
//                 data={props.materials[id]}
//                 materialType={props.id}
//                 materialId={materialId}
//                 handleClose={togglePopup}
//             />}
//         </div>
//     )
// }

const TypeChooseBar = (props) => {
    const materialType = ['膨润土', '铁矿粉', '熔剂', '喷吹煤']

    return (
        <div className='materialListPage_materialType'>
            {materialType.map((type, index) => (
                <div
                    className={props.listId === index ? 'tablePart' : 'tablePart1'}
                    key={index}
                    onClick={() => {
                        props.setListId(index)
                    }}
                >
                    {type}
                </div>
            ))}
        </div>
    )
}

const Table = (props) => {

    const headers = [
        ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O","Cl", "Na2O", "MnO",
            "ZnO", "TiO2", "P2O5", "S", "Zn", "F", "P", "水", "烧损", "胶质价", "吸蓝量", "蒙脱石含量", "膨胀容",
            "+0.150mm", "0.150-0.124mm", "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm",
            "<0.045mm", "平均粒径mm", "比表面积","更新时间"],
        ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O",
            "Cl", "Mn", "f", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损", "+0.150mm", "0.150-0.124mm",
            "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm", "<0.045mm", "平均粒径mm",
            "最大分子水", "最大毛细水", "成球性指数", "小于200目", "小于300目", "比表面积", "更新时间"],
        ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O", "Cl", "Na2O", "MnO",
            "ZnO", "TiO2", "P2O5", "S", "Zn", "F", "P", "水", "烧损",
            "+0.150mm", "0.150-0.124mm", "0.124-0.098mm", "0.098-0.074mm", "0.074-0.048mm","-0.048mm", "<0.074mm",
            "<0.045mm", "平均粒径mm", "比表面积", "更新时间"],
        ["原料产地", "公司", "检测时间", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3", "K2O","Cl", "Na2O", "MnO",
            "ZnO", "TiO2", "P2O5", "Zn", "F", "P", "S", "水分", "烧损", "+0.150mm", "0.150-0.124mm", "0.124-0.098mm", "0.098-0.074mm",
            "0.074-0.048mm", "-0.048mm", "<0.074mm", "<0.045mm", "平均粒径mm", "比表面积", "灰分", "挥发分", "热值", "燃烧性", "灰熔点",
            "反应性", "可磨性", "爆炸性", "更新时间"]
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [material, setMaterial] = useState({})

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const selectAll = (e) => {

        const { checked } = e.target;

        let tempIsCheckAll = props.isCheckAll.map((isChecked, i) => (
            i === props.listId ? !isChecked : isChecked
        ))
        props.setIsCheckAll(tempIsCheckAll)

        let tempCheckBox = props.checkBox.map((box, i) => {
            if(i !== props.listId){
                return box
            }
            // 不是全选时
            if(checked){
                return props.materials.map(material => material.materialId)
            }

            return []
        })

        props.setCheckBox(tempCheckBox)

        if(props.materialChosen !== undefined){
            let tempMaterialChosen = props.materialChosen.map((box, i) => {
                if(i !== props.listId){
                    return box
                }
                // 不是全选时
                if(checked){
                    return props.materials
                }

                return []
            })
            props.setMaterialChosen(tempMaterialChosen)
        }
    }

    const selectSingle = (e) => {
        const { id, checked } = e.target;

        let tempCheckBox = props.checkBox.map((box, i) => {
            if(i !== props.listId){
                return box
            }
            // 选择时
            if(!checked){
                return box.filter(item => item !== parseFloat(id))
            }
            box.push(parseFloat(id))

            //没有选择时
            return box
        })

        props.setCheckBox(tempCheckBox)

        if(props.materialChosen !== undefined){
            let tempMaterialChosen = props.materialChosen.map((box, i) => {
                if(i !== props.listId){
                    return box
                }

                for(let m in props.materials){
                    if(props.materials[m].materialId === parseFloat(id)){
                        // 选择时
                        if(checked){
                            // console.log(1)
                            box.push(props.materials[m])
                        }else{
                            // console.log(2)
                            box.splice(box.indexOf(props.materials[m]), 1)
                        }
                    }
                }

                return box
            })
            if(props.setMaterialChosen !== undefined){
                props.setMaterialChosen(tempMaterialChosen)
            }
        }

        let tempIsCheckAll = props.isCheckAll.map((isChecked, i) => {

            if(i !== props.listId) return isChecked

            if(!checked){
                //选择时
                return false
            }
            //没有选择时

            return props.checkBox[props.listId].length === props.materials.length;



        })

        props.setIsCheckAll(tempIsCheckAll)
    }

    return (
        <div className="ml-test1">
            {isOpen && <ManageMaterialPopup
                data={material}
                materialType={props.listId}
                handleClose={togglePopup}
                setMaterials={props.setMaterials}
            />}
            <table>
                <thead>
                <tr>
                    <th className="ml_checkbox">
                        <input type='checkbox' name={'selectAll'} checked={props.isCheckAll[props.listId]
                            || props.materials.length === props.materialChosen[props.listId].length} onChange={selectAll}/>
                    </th>
                    <th>{"审核状态"}</th>
                    <th>{"原料id"}</th>
                    <th className="ml_name">{"原料名称"}</th>
                    {headers[props.listId].map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                    <th>{"操作"}</th>
                </tr>
                {props.materials.map((material, index) => (
                    <tr key={index}>
                        <td className="ml_checkbox">
                            <input type='checkbox' name={'single'} onChange={selectSingle} id={material.materialId}
                                   checked={props.isCheckAll[props.listId] ||
                                       props.checkBox[props.listId].includes(material.materialId)}/>
                        </td>
                        <td>
                            <div className={material.ifCheck ? 'state2' : 'state1'}>
                                {material.ifCheck ? '已审核' : '未审核'}
                            </div>
                        </td>
                        <td>{material.materialId}</td>
                        <td className="ml_name">{material.materialName}</td>
                        <td className="ml_name">{material.materialOriginal}</td>
                        <td className="ml_name">{material.companyName}</td>
                        <td style={{minWidth:"90px"}}>{material.testDate.slice(0, 10)}</td>
                        <td>{material.materialPrice.toFixed(2)}</td>
                        <td>{material.TFe.toFixed(3)}</td>
                        <td>{material.FeO.toFixed(3)}</td>
                        <td>{material.SiO2.toFixed(3)}</td>
                        <td>{material.CaO.toFixed(3)}</td>
                        <td>{material.MgO.toFixed(3)}</td>
                        <td>{material.Al2O3.toFixed(3)}</td>
                        <td>{material.K2O.toFixed(3)}</td>
                        {material.hasOwnProperty('Cl') ? <td>{material.Cl.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('Mn') ? <td>{material.Mn.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('F') ? <td>{material.F.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('P') ? <td>{material.P.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('Na2O') ? <td>{material.Na2O.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('MnO') ? <td>{material.MnO.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('ZnO') ? <td>{material.ZnO.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('TiO2') ? <td>{material.TiO2.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('P2O5') ? <td>{material.P2O5.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('S') ? <td>{material.S.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('Zn') ? <td>{material.Zn.toFixed(3)}</td> : null}
                        <td>{material.water.toFixed(3)}</td>
                        <td>{material.burningLoss.toFixed(3)}</td>
                        {material.hasOwnProperty('colloidIndex') ?
                            <td>{material.colloidIndex.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('blueAbsorption') ?
                            <td>{material.blueAbsorption.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('montmorilloniteContent') ?
                            <td style={{minWidth:"86px"}}>{material.montmorilloniteContent.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('expansionCapacity') ?
                            <td>{material.expansionCapacity.toFixed(3)}</td> : null}
                        <td style={{minWidth:"80px"}}>{material.O_15.toFixed(3)}</td>
                        <td style={{minWidth:"115px"}}>{material.O_15ToO_124.toFixed(3)}</td>
                        <td style={{minWidth:"115px"}}>{material.O_124ToO_O98.toFixed(3)}</td>
                        <td style={{minWidth:"115px"}}>{material.O_O98ToO_O74.toFixed(3)}</td>
                        <td style={{minWidth:"115px"}}>{material.O_O74ToO_O48.toFixed(3)}</td>
                        <td style={{minWidth:"75px"}}>{material.O_O48.toFixed(3)}</td>
                        <td style={{minWidth:"75px"}}>{material.lessThan0_074.toFixed(3)}</td>
                        <td style={{minWidth:"75px"}}>{material.lessThan0_045.toFixed(3)}</td>
                        <td style={{minWidth:"90px"}}>{material.averageDiameter.toFixed(3)}</td>
                        <td style={{minWidth:"80px"}}>{material.specificSurfaceArea.toFixed(3)}</td>
                        {material.hasOwnProperty('maxMolecularWater') ?
                            <td style={{minWidth:"80px"}}>{material.maxMolecularWater.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('maxCapillaryWater') ?
                            <td style={{minWidth:"80px"}}>{material.maxCapillaryWater.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('ballingIndex') ?
                            <td style={{minWidth:"80px"}}>{material.ballingIndex.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('less200Mesh') ? <td style={{minWidth:"80px"}}>{material.less200Mesh.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('less300Mesh') ? <td style={{minWidth:"80px"}}>{material.less300Mesh.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('ash') ? <td>{material.ash.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('volatiles') ? <td>{material.volatiles.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('calorificValue') ?
                            <td>{material.calorificValue.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('flammability') ?
                            <td>{material.flammability.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('ashFusionPoint') ?
                            <td>{material.ashFusionPoint.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('reactivity') ? <td>{material.reactivity.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('grindability') ?
                            <td>{material.grindability.toFixed(3)}</td> : null}
                        {material.hasOwnProperty('explosibility') ?
                            <td>{material.explosibility.toFixed(3)}</td> : null}
                        <td style={{minWidth:"90px"}}>{material.updateDate.slice(0, 10)}</td>
                        <td>
                            <div className="ml_table_detail"
                            onClick={() => {
                                setMaterial(material)
                                setIsOpen(true)
                            }}>{"详情"}</div>
                        </td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
    )

}

const PaginationPart = (props) => {

    const handleChange = (e) => {
        props.setRowNum(e.target.value)
    }

    const PagePart = () => {
        if(props.endPage < 6){
            return (
                <div className="ml_pagination_pagePart">
                    {[1, 2, 3, 4, 5].map(num => {
                        if(num <= props.endPage){
                            return <div key={num}
                                        onClick={() => {props.setCurrentPage(num)}}
                                        className={props.currentPage === num ? "ml_pagination_focus" : "ml_pagination_unFocus"}>
                                {num}</div>
                        }
                        return null
                    })}
                </div>
            )
        }

        return (
            <div className="ml_pagination_pagePart">
                <div
                    className={props.currentPage === 1 ? "ml_pagination_focus" : "ml_pagination_unFocus"}
                    onClick={() => {props.setCurrentPage(1)}}
                >{1}</div>
                {props.currentPage > 2 && props.currentPage < props.endPage - 1 ?
                    <div className="ml_pagination_unFocus">{"..."}</div> :
                    <div
                        className={props.currentPage === 2 ? "ml_pagination_focus" : "ml_pagination_unFocus"}
                        onClick={() => {props.setCurrentPage(2)}}>{2}</div>}
                {props.currentPage > 2 && props.currentPage < props.endPage - 1 ? <div className="ml_pagination_focus">{props.currentPage}</div> :
                    <div className="ml_pagination_unFocus">{"..."}</div>}
                {props.currentPage > 2 && props.currentPage < props.endPage - 1 ?
                    <div className="ml_pagination_unFocus">{"..."}</div> :
                    <div
                        className={props.currentPage === props.endPage - 1 ? "ml_pagination_focus" : "ml_pagination_unFocus"}
                        onClick={() => {props.setCurrentPage(props.endPage - 1)}}>
                        {props.endPage - 1}</div>}
                <div
                    className={props.currentPage === props.endPage ? "ml_pagination_focus" : "ml_pagination_unFocus"}
                    onClick={() => {props.setCurrentPage(props.endPage)}}
                >{props.endPage}</div>
            </div>
        )
    }

    const currentPageRise = () => {
        if(props.currentPage !== props.endPage){
            props.setCurrentPage(props.currentPage + 1)
        }
    }

    const currentPageDecrease = () => {
        if(props.currentPage !== 1){
            props.setCurrentPage(props.currentPage - 1)
        }
    }

    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    const jump = () => {
        if(isNumeric(props.jumpPage)){
            const p = parseInt(props.jumpPage)
            if(p < 1 || p > props.endPage){
                window.alert("请输入正确数字")
            }else{
                props.setCurrentPage(p)
            }
        }
    }

    return (
        <div className="ml_pagination">
            <div className="ml_pagination_less" onClick={currentPageDecrease}>{"<"}</div>
            <PagePart/>
            <div className="ml_pagination_more" onClick={currentPageRise}>{">"}</div>
            <div className="ml_pagination_skip">
                {"到第"}
                <input defaultValue={props.jumpPage} onChange={e => props.setJumpPage(e.target.value)}/>
                {"页"}
                <button onClick={() => {jump()}}>{"确定"}</button>
            </div>
            <div className="ml_pagination_number">{"共 " + props.materials.length + " 条"}</div>
            <select className='ml_pagination_select'
                    onChange={handleChange}
            >
                <option value={20}>{"20条/页"}</option>
                <option value={50}>{"50条/页"}</option>
                <option value={100}>{"100条/页"}</option>
            </select>
        </div>
    )
}
//
// const TablePart = (props) => {
//
//     return(
//         <div className="materialListPage_tablePart">
//             <TypeChooseBar listId={props.listId} setListId={props.setListId}/>
//             <Table isCheckAll={props.isCheckAll} setIsCheckAll={props.setIsCheckAll}
//                    listId={props.listId} setCheckBox={props.setCheckBox} checkBox={props.checkBox}
//                    materials={props.materials} setMaterials={props.setMaterials}/>
//             <PaginationPart materials={props.allMaterials} setMaterials={props.setMaterials}/>
//         </div>
//     )
// }

// class AblePart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listId: 0
//         };
//     }
//
//     render() {
//
//         const materialType = ['膨润土', '铁矿粉', '熔剂', '喷吹煤',]
//         return (
//             <div className="materialListPage_tablePart">
//                 <div className='materialListPage_materialType'>
//                     {materialType.map((type, index) => (
//                         <div
//                             className={this.props.listId === index ? 'tablePart' : 'tablePart1'}
//                             key={index}
//                             onClick={() => {
//                                 this.props.setListId(index)
//                                 //this.props.setCheckBox([])
//                             }}
//                         >
//                             {type}
//                         </div>
//                     ))}
//                 </div>
//                 <Table id={this.props.listId} checkBox={this.props.checkBox} materialChosen={this.props.materialChosen}
//                        materials={this.props.materials} setMaterials={this.props.setMaterials}
//                        length={this.props.length}/>
//             </div>
//         )
//     }
// }

export {TypeChooseBar, Table, PaginationPart}