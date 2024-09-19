import React, {useEffect, useState} from "react";
import '../../Pages/PalletModelPage.css'
import '../MaterialListPage/PostMaterialForm.css'
import SearchPart from "../MaterialListPage/SearchPart";
import {PaginationPart, Table, TypeChooseBar} from "../MaterialListPage/TablePart";

const ChooseMaterialPopup = (props) => {
    const [checkBox, setCheckBox] = useState(JSON.parse(JSON.stringify(props.checkBox)))    // 选择框
    const [listId, setListId] = useState(0) // 0 膨润土，1 铁矿粉，2熔剂, 3 喷吹煤，
    const [materials, setMaterials] = useState([])
    const [isCheckAll, setIsCheckAll] = useState([false, false, false, false]); //是否全选

    const [materialChosen, setMaterialChosen] = useState(JSON.parse(JSON.stringify(props.materialChosen)))
    const [allMaterials, setAllMaterials] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [rowNum, setRowNum] = useState(20)
    const [jumpPage, setJumpPage] = useState(1)
    const endPage = Math.ceil(allMaterials.length / rowNum)
    // console.log(props.materialChosen)



    useEffect(() => {
        fetch('/api/v1/materials/' + listId)
            .then(response => response.json())
            .then(data => {
                setAllMaterials(data)
            })
    }, [listId])


    useEffect(() => {
        if(endPage === 0){
            return
        }
        if(currentPage > endPage){
            setCurrentPage(endPage)
            setMaterials(allMaterials.slice((currentPage - 1) * rowNum, allMaterials.length))
        }else{
            setMaterials(allMaterials.slice((currentPage - 1) * rowNum, currentPage * rowNum))
        }
    }, [allMaterials, currentPage, rowNum, listId])

    const confirm = () => {
        // console.log(checkBox)
        props.setCheckBox(checkBox)
        props.setMaterialChosen(materialChosen)
        if(JSON.stringify(checkBox) === '[[],[],[],[],[]]'){
            localStorage.removeItem("checkBox")
            localStorage.removeItem("materialDryProportion")
            localStorage.removeItem("materialChosen")
        }

        const ls = []
        for(let i = 0; i < materialChosen.length; i++){
            const l = []
            for(let j = 0; j < materialChosen[i].length; j++){
                if(props.materialDryProportion[i][j] !== 0 && props.materialDryProportion[i][j]){
                    l.push(props.materialDryProportion[i][j])
                }else{
                    l.push(0)
                }
            }
            ls.push(l)
        }
        props.setMaterialProportion(ls)
        props.handleClose()
    }

    return (
        <div className="popup-box">
            {/* 头部部分 */}
            <div className="box">
                <div className='popup-box_head'>
                    {/* 取消按钮 */}
                    <span className="close-icon" onClick={() => {props.handleClose()}}>x</span>
                </div>
                {/* 表单（身体）部分 */}
                <div className='palletModelPage-popup-box_body'>
                    <SearchPart materials={materials} setMaterials={setMaterials} listId={listId}/>
                    <div className="materialListPage_tablePart">
                        <TypeChooseBar listId={listId} setListId={setListId}/>
                        <Table isCheckAll={isCheckAll} setIsCheckAll={setIsCheckAll}
                               listId={listId} setCheckBox={setCheckBox} checkBox={checkBox}
                               materials={materials} setMaterials={setMaterials}
                               materialChosen={materialChosen} setMaterialChosen={setMaterialChosen}/>
                        <PaginationPart currentPage={currentPage} setCurrentPage={setCurrentPage}
                                        rowNum={rowNum} setRowNum={setRowNum} endPage={endPage}
                                        jumpPage={jumpPage} setJumpPage={setJumpPage} materials={allMaterials}/>
                    </div>
                </div>
                <button
                    className='palletModelPage-popup-box_button'
                    onClick={confirm}
                >确认
                </button>
            </div>
        </div>
    )
}

export default ChooseMaterialPopup