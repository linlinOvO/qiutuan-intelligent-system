import React, {useState} from "react";
import '../../Pages/MaterialListPage.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NamePart = (props) => {

    const handleIdChange = (e) => {
        props.setMaterialId(e.target.value)
    }

    const handleMaterialNameChange = (e) => {
        props.setMaterialName(e.target.value)
    }

    const handleCompanyNameChange = (e) => {
        props.setCompanyName(e.target.value)
    }

    return (
        <div className="ml_search_line">
            <div className="ml_search_name">
                {"原料ID"}
            </div>
            <input
                type="text"
                id="id"
                name="id"
                onChange={handleIdChange}
                value={props.materialId}
            />
            <div className="ml_search_name">
                {"原料名称"}
            </div>
            <input
                type="text"
                id="materialName"
                name="materialName"
                onChange={handleMaterialNameChange}
                value={props.materialName}
            />
            <div className="ml_search_name">
                {"公司名称"}
            </div>
            <input
                type="text"
                id="company"
                name="company"
                onChange={handleCompanyNameChange}
                value={props.companyName}
            />
        </div>
    )
}

const ChemistryPart = (props) => {

    const chemicalComponents = ["TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3",
        "K2O", "Cl", "Mn", "F", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损",
        "小于200目", "小于300目", "比表面积", "胶质价", "吸蓝量", "蒙脱石含量", "膨胀容", "灰分", "挥发分", "热值",
        "燃烧性", "灰熔点", "反应性", "可磨性", "爆炸性"]

    const handleChange = (e) => {
        props.setChemistry(e.target.value)
    }

    const handleMinValChange = (e) => {
        props.setMinVal(e.target.value)
    }

    const handleMaxValChange = (e) => {
        props.setMaxVal(e.target.value)
    }

    return (
        <div className="ml_search_line">
            <div className="ml_search_name">
                {"化学成分"}
            </div>
            <select className='searchPart_select'
                    onChange={handleChange}>
                {chemicalComponents.map((c, index) => (
                    <option value={props.chemistry} key={index}>{c}</option>
                ))}
            </select>
            <div className="ml_search_symbol">{":"}</div>
            <input
                type="text"
                id="minVal"
                name="minVal"
                onChange={handleMinValChange}
                value={props.minVal}
                style={{width: "100px"}}
            />
            <div className="ml_search_symbol">{"~"}</div>
            <input
                type="text"
                id="maxVal"
                name="maxVal"
                onChange={handleMaxValChange}
                value={props.maxVal}
                style={{width: "100px"}}
            />
        </div>
    )
}

const TimePart = (props) => {

    const handleBeginDateChange = (date) => {
        props.setBeginData(date)
    }

    const handleEndDateChange = (date) => {
        props.setEndDate(date)
    }

    return(
        <div className="ml_search_line">
            <div className="ml_search_name">
                {"检测时间"}
            </div>
            <DatePicker selected={props.beginDate} onChange={handleBeginDateChange} />
            <div className="ml_search_symbol">{"~"}</div>
            <DatePicker selected={props.endData} onChange={handleEndDateChange} />
        </div>
    )
}

const SearchPart = (props) => {

    const [materialId, setMaterialId] = useState('')
    const [materialName, setMaterialName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [chemistry, setChemistry] = useState('TFe')
    const [minVal, setMinVal] = useState('')
    const [maxVal, setMaxVal] = useState('')
    const [beginDate, setBeginData] = useState('')
    const [endData, setEndDate] = useState('')

    // 判断字符是不是数字
    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!
        if(str.length === 0)    return true
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    const search = () => {
        // console.log(materialId, materialName, companyName, chemistry, minVal, maxVal, beginDate, endData)
        if(isNumeric(minVal) && isNumeric(maxVal)){
            fetch('/api/v1/search', {
                'method': 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({//request message
                    listId: props.listId,
                    materialId: materialId,
                    materialName: materialName,
                    companyName: companyName,
                    chemistry: chemistry,
                    chemistryMin: minVal,
                    chemistryMax: maxVal,
                    beginTime: beginDate,
                    endTime: endData,
                })
            }).then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    props.setMaterials(data)
                    // window.location.reload(false)
                })
        }else{
            window.confirm('请输入正确数字')
        }
    }

    return (
        <div className="materialListPage_search">
            <NamePart materialId={materialId} setMaterialId={setMaterialId}
                      materialName={materialName} setMaterialName={setMaterialName}
                      companyName={companyName} setCompanyName={setCompanyName}/>
            <ChemistryPart chemistry={chemistry} setChemistry={setChemistry}
                           minVal={minVal} setMinVal={setMinVal}
                           maxVal={maxVal} setMaxVal={setMaxVal}/>
            <TimePart beginDate={beginDate} setBeginData={setBeginData}
                      endData={endData} setEndDate={setEndDate}/>
            <button onClick={search} className="ml_search_line_button">
                {"查询"}
            </button>
        </div>
    )
}

// class EarPart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             materialId: '',
//             materialName: '',
//             materialDate: '',    // 例2022-02-03 to 2022-02-04
//             companyName: '',
//             chemistry: 'TFe',
//             chemistryMax: '',
//             chemistryMin: '',
//             beginTime: '',
//             endTime: ''
//
//         }
//     }
//
//     // 记录原料id改变
//     handleMaterialId = (e) => {
//         this.setState({
//             materialId: e.target.value
//         })
//     }
//
//     // 记录原料名称改变
//     handleMaterialName = (e) => {
//         this.setState({
//             materialName: e.target.value
//         })
//     }
//
//     // 记录原料公司改变
//     handleCompanyName = (e) => {
//         this.setState({
//             companyName: e.target.value
//         })
//     }
//
//     // 记录化学成分
//     handleChemistry = (e) => {
//         this.setState({
//             chemistry: e.target.value
//         })
//     }
//
//     // 记录化学成分最小值
//     handleChemistryMin = (e) => {
//         this.setState({
//             chemistryMin: e.target.value
//         })
//     }
//
//     // 记录化学成分最大值
//     handleChemistryMax = (e) => {
//         this.setState({
//             chemistryMax: e.target.value
//         })
//     }
//
//     // 记录时间检测
//     handleBeginTime = (data) => {
//         this.setState({
//             beginTime: data
//         })
//     }
//
//     handleEndTime = (data) => {
//         this.setState({
//             endTime: data
//         })
//     }
//
//     // 判断能否转化成数字
//     isNumeric(str) {
//         if (str.length === 0) return true // length = 0
//         return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
//             !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
//     }
//
//     // 提交数据, 发送给数据库
//     search = () => {
//         console.log(
//             '原料ID：' + this.state.materialId +
//             ' 原料名字：' + this.state.materialName +
//             ' 原料时间：' + this.state.materialDate +
//             ' 公司名字：' + this.state.companyName +
//             ' 化学成分：' + this.state.chemistry +
//             ' 化学最小值：' + this.state.chemistryMin +
//             ' 化学最大值：' + this.state.chemistryMax +
//             ' 起始时间：' + this.state.beginTime +
//             ' 终止时间：' + this.state.endTime
//         )
//         if (!this.isNumeric(this.state.chemistryMin) || !this.isNumeric(this.state.chemistryMax)) {   // 输入化学最大值最小值不正确
//             window.confirm('请输入正确数字')
//         } else {
//             fetch('/api/v1/search', {
//                 'method': 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({//request message
//                     listId: this.props.listId,
//                     materialId: this.state.materialId,
//                     materialName: this.state.materialName,
//                     companyName: this.state.companyName,
//                     chemistry: this.state.chemistry,
//                     chemistryMin: this.state.chemistryMin,
//                     chemistryMax: this.state.chemistryMax,
//                     beginTime: this.state.beginTime,
//                     endTime: this.state.endTime,
//                 })
//             }).then(response => response.json())
//                 .then((data) => {
//                     this.props.setMaterials(data)
//                     // window.location.reload(false)
//                 })
//         }
//         //console.log(this.isNumeric(this.state.chemistryMin))
//     }
//
//     render() {
//
//         let materialId = this.state.materialId;
//         let materialName = this.state.materialName;
//         // let materialDate = this.state.materialDate;
//         let companyName = this.state.companyName;
//         let chemistryMin = this.state.chemistryMin;
//         let chemistryMax = this.state.chemistryMax;
//         let beginTime = this.state.beginTime;
//         let endTime = this.state.endTime;
//
//         const chemicalComponents = ["TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3",
//             "K2O", "Cl", "Mn", "F", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损",
//             "小于200目", "小于300目", "比表面积", "胶质价", "吸蓝量", "蒙脱石含量", "膨胀容", "灰分", "挥发分", "热值",
//             "燃烧性", "灰熔点", "反应性", "可磨性", "爆炸性"]
//
//         const chemicalComponents_en = ["TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3",
//             "K2O", "Cl", "Mn", "F", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "water", "burningLoss",
//             "less200Mesh", "less300Mesh", "specificSurfaceArea", "colloidIndex", "blueAbsorption", "montmorilloniteContent",
//             "expansionCapacity", "ash", "volatiles", "calorificValue", "flammability", "ashFusionPoint", "reactivity",
//             "grindability", "explosibility"]
//
//         return (
//             <div className='materialListPage_search'>
//                 <div className='searchPart' style={{ display: "flex", flexDirection: " row", justifyContent: " flex-start", alignItems: "center" }}>
//                     <div className='searchPartWords'
//                          style={{
//                              backgroundColor: "rgb(145, 149, 152)", width: "74.66px", height: "26.85px",
//                              borderRadius: "5px"
//                              // , border: "2px solid #a1a1a1"
//                          }}>
//                         原料ID:</div>
//                     <input type='text' className='searchPart' value={materialId} onChange={this.handleMaterialId} />
//                 </div>
//                 <div className='searchPart' style={{ display: "flex", flexDirection: " row", justifyContent: " flex-start", alignItems: "center" }}>
//                     <div className='searchPartWords'
//                          style={{ backgroundColor: "rgb(145, 149, 152)", borderRadius: "5px", border: "2px solid #a1a1a1" }}>
//                         原料名称:</div>
//                     <input type='text' className='searchPart' value={materialName} onChange={this.handleMaterialName} />
//                 </div>
//                 <div className='searchPart' style={{ display: "flex", flexDirection: " row", justifyContent: " flex-start", alignItems: "center" }}>
//                     <div className='searchPartWords'
//                          style={{ backgroundColor: "rgb(145, 149, 152)", borderRadius: "5px", border: "2px solid #a1a1a1" }}>
//                         公司名称:</div>
//                     <input type='text' className='searchPart' value={companyName} onChange={this.handleCompanyName} />
//                 </div>
//                 <div className='chemistryPart' style={{ display: "flex", flexDirection: " row", justifyContent: " flex-start", alignItems: "center" }}>
//                     <div className='searchPartWords'
//                          style={{ backgroundColor: "rgb(145, 149, 152)", borderRadius: "5px", border: "2px solid #a1a1a1" }}>
//                         化学成分:</div>
//                     <select className='searchPart_select'
//                             onChange={this.handleChemistry}>
//                         {chemicalComponents.map((c, index) => (
//                             <option value={chemicalComponents_en[index]} key={index}>{c}</option>
//                         ))}
//                     </select>
//                     <div className='chemistry'>:</div>
//                     <input type='text' className='chemistry' value={chemistryMin} onChange={this.handleChemistryMin} />
//                     <div className='chemistry'>~</div>
//                     <input type='text' className='chemistry' value={chemistryMax} onChange={this.handleChemistryMax} />
//                 </div>
//                 <div className='timePart' style={{ display: "flex", flexDirection: " row", justifyContent: " flex-start", alignItems: "center" }}>
//                     <div className='searchPartWords'
//                          style={{ backgroundColor: "rgb(145, 149, 152)", borderRadius: "5px", border: "2px solid #a1a1a1" }}>
//                         检测时间:</div>
//                     <DatePicker selected={beginTime} onChange={(data) => this.handleBeginTime(data)} />
//                     <div className='time'>~</div>
//                     <DatePicker selected={endTime} onChange={(data) => this.handleEndTime(data)} />
//                 </div>
//                 <div className='searchPart' onClick={this.search}>
//                     查询:
//                 </div>
//             </div>
//         )
//     }
// }

export default SearchPart