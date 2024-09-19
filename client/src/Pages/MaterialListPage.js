import React, {useEffect, useState} from "react";
import './MaterialListPage.css'
import '../App.css'
import SearchPart from "../Components/MaterialListPage/SearchPart";
import ButtonsPart from "../Components/MaterialListPage/ButtonsPart";
import {PaginationPart, Table, TypeChooseBar} from "../Components/MaterialListPage/TablePart";

const MaterialListPage = () => {

    const [allMaterials, setAllMaterials] = useState([])
    const [materials, setMaterials] = useState([])  // 分页以后的结果
    const [listId, setListId] = useState(0) // 0 膨润土，1 铁矿粉，2熔剂, 3 喷吹煤，
    const [checkBox, setCheckBox] = useState([[], [], [], []])    // 选择框, 0 膨润土，1 铁矿粉，2熔剂, 3 喷吹煤
    const [isCheckAll, setIsCheckAll] = useState([false, false, false, false]); //是否全选


    const [currentPage, setCurrentPage] = useState(1)
    const [rowNum, setRowNum] = useState(20)
    const [jumpPage, setJumpPage] = useState(1)
    const endPage = Math.ceil(allMaterials.length / rowNum)

    // console.log(allMaterials.length, rowNum, allMaterials.length / rowNum)

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/materials/' + listId)
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

    return (
        <div className="materialListPage">
            <SearchPart setMaterials={setMaterials} listId={listId}/>
            <ButtonsPart checkBox={checkBox} listId={listId} setMaterials={setMaterials}/>
            <div className="materialListPage_tablePart">
                <TypeChooseBar listId={listId} setListId={setListId}/>
                <Table isCheckAll={isCheckAll} setIsCheckAll={setIsCheckAll}
                       listId={listId} setCheckBox={setCheckBox} checkBox={checkBox}
                       materials={materials} setMaterials={setMaterials}
                materialChosen={[[], [], [], []]}/>
                <PaginationPart currentPage={currentPage} setCurrentPage={setCurrentPage}
                                rowNum={rowNum} setRowNum={setRowNum} endPage={endPage}
                                jumpPage={jumpPage} setJumpPage={setJumpPage} materials={allMaterials}/>
            </div>
        </div>
    )
}

export default MaterialListPage
