/*
    修改原料
 */
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PostMaterialForm.css'

const UpdateButton = (props) => {
    // Data 转化成 String
    // month加一是因为month是从0开始的
    const testDate = props.testDate.getFullYear() + '-' + (props.testDate.getMonth() + 1) + '-' + props.updateDate.getDate()
    const updateDate = props.updateDate.getFullYear() + '-' + (props.updateDate.getMonth() + 1) + '-' + props.updateDate.getDate()

    return (
        <button className='add_button' onClick={() => {

            if (window.confirm('确定更新?')) {
                // console.log(props.checkBox)
                fetch('/api/v1/update_materials/' + props.materialType, {
                    'method': 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({//request message
                        materialId: props.materialId,
                        variables: props.variables,
                        testDate: testDate,
                        updateDate: updateDate
                    })
                }).then(() => {
                    fetch('/api/v1/materials/' + props.materialType)
                        .then(response => response.json())
                        .then(data => {
                            props.setMaterials(data)
                            props.handleClose()
                        })
                })
            }

        }}>
            修改
        </button>
    )
}

const DeleteButton = (props) => {
    return (
        <button className='add_button' onClick={() => {
            if (window.confirm('确定删除?')) {
                fetch('/api/v1/delete_materials/' + props.materialType, {
                    'method': 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({//request message
                        materialId: props.materialId
                    })
                }).then(() => {
                    fetch('/api/v1/materials/' + props.materialType)
                        .then(response => response.json())
                        .then(data => {
                            props.setMaterials(data)
                            props.handleClose()
                        })
                })
            }
        }}>
            删除
        </button>
    )
}

const ManageMaterialPopup = props => {

    const headers = ["原料名称", "原料产地", "公司", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3",
        "K2O", "Cl", "Mn", "F", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损",
        "小于200目", "小于300目", "比表面积", "胶质价", "吸蓝量", "蒙脱石含量", "膨胀容", "灰分", "挥发分", "热值",
        "燃烧性", "灰熔点", "反应性", "可磨性", "爆炸性"]

    // console.log(props.materialId)

    //  有一些成分（例如Cl）不是所有原料都有，先判断有没有这个值，如果有就把初始值设为当前数据，没有则赋值为0
    const [materialType] = useState(props.materialType)
    const [name, setName] = useState(props.data.materialName);
    const [materialOriginal, setMaterialOriginal] = useState(props.data.materialOriginal);
    const [companyName, setCompanyName] = useState(props.data.companyName);
    const [testDate, setTestDate] = useState(new Date(props.data.testDate));
    const [materialPrice, setMaterialPrice] = useState(props.data.materialPrice);
    const [TFe, setTFe] = useState(props.data.TFe);
    const [FeO, setFeO] = useState(props.data.FeO);
    const [SiO2, setSiO2] = useState(props.data.SiO2);
    const [CaO, setCaO] = useState(props.data.CaO);
    const [MgO, setMgO] = useState(props.data.MgO);
    const [Al2O3, setAl2O3] = useState(props.data.Al2O3);
    const [K2O, setK2O] = useState(props.data.K2O);
    const [Cl, setCl] = useState(props.data.hasOwnProperty('Cl') ? props.data.Cl : 0);
    const [Mn, setMn] = useState(props.data.hasOwnProperty('Mn') ? props.data.Mn : 0);
    const [F, setF] = useState(props.data.hasOwnProperty('F') ? props.data.F : 0);
    const [P, setP] = useState(props.data.hasOwnProperty('P') ? props.data.P : 0);
    const [Na2O, setNa2O] = useState(props.data.hasOwnProperty('Na2O') ? props.data.Na2O : 0);
    const [MnO, setMnO] = useState(props.data.hasOwnProperty('MnO') ? props.data.MnO : 0);
    const [ZnO, setZnO] = useState(props.data.hasOwnProperty('ZnO') ? props.data.ZnO : 0);
    const [TiO2, setTiO2] = useState(props.data.hasOwnProperty('TiO2') ? props.data.TiO2 : 0);
    const [P2O5, setP2O5] = useState(props.data.hasOwnProperty('P2O5') ? props.data.P2O5 : 0);
    const [S, setS] = useState(props.data.hasOwnProperty('S') ? props.data.S : 0);
    const [Zn, setZn] = useState(props.data.hasOwnProperty('Zn') ? props.data.Zn : 0);
    const [water, setWater] = useState(props.data.water);
    const [burningLoss, setBurningLoss] = useState(props.data.burningLoss);
    const [O_15, setO_15] = useState(0);
    const [O_15ToO_124, setO_15ToO_124] = useState(0);
    const [O_124ToO_O98, setO_124ToO_O98] = useState(0);
    const [O_O98ToO_O74, setO_O98ToO_O74] = useState(0);
    const [O_O74ToO_O48, setO_O74ToO_O48] = useState(0);
    const [O_O48, setO_O48] = useState(0);
    const [lessThan0_074, setLessThan0_074] = useState(0);//30
    const [lessThan0_045, setLessThan0_045] = useState(0);
    const [averageDiameter, setAverageDiameter] = useState(0);
    const [maxMolecularWater, setMaxMolecularWater] = useState(props.data.hasOwnProperty('maxMolecularWater') ? props.data.less200Mesh : 0);    //最大分子水
    const [maxCapillaryWater, setMaxCapillaryWater] = useState(props.data.hasOwnProperty('maxCapillaryWater') ? props.data.less200Mesh : 0);    //最大毛细水
    const [ballingIndex, setBallingIndex] = useState(props.data.hasOwnProperty('ballingIndex') ? props.data.less200Mesh : 0); //成球性指数
    const [less200Mesh, setLess200Mesh] = useState(props.data.hasOwnProperty('less200Mesh') ? props.data.less200Mesh : 0);
    const [less300Mesh, setLess300Mesh] = useState(props.data.hasOwnProperty('less300Mesh') ? props.data.less300Mesh : 0);
    const [specificSurfaceArea, setSpecificSurfaceArea] = useState(props.data.hasOwnProperty('specificSurfaceArea') ? props.data.specificSurfaceArea : 0);
    const [colloidIndex, setColloidIndex] = useState(props.data.hasOwnProperty('colloidIndex') ? props.data.colloidIndex : 0);
    const [blueAbsorption, setBlueAbsorption] = useState(props.data.hasOwnProperty('blueAbsorption') ? props.data.blueAbsorption : 0);
    const [montmorilloniteContent, setMontmorilloniteContent] = useState(props.data.hasOwnProperty('montmorilloniteContent') ? props.data.montmorilloniteContent : 0);
    const [expansionCapacity, setExpansionCapacity] = useState(props.data.hasOwnProperty('expansionCapacity') ? props.data.expansionCapacity : 0);
    const [updateDate, setUpdateDate] = useState(new Date());
    const [ash, setAsh] = useState(props.data.hasOwnProperty('ash') ? props.data.ash : 0);  // 灰分
    const [volatiles, setVolatiles] = useState(props.data.hasOwnProperty('volatiles') ? props.data.volatiles : 0);  // 挥发分
    const [calorificValue, setCalorificValue] = useState(props.data.hasOwnProperty('calorificValue') ? props.data.calorificValue : 0);    // 热值
    const [flammability, setFlammability] = useState(props.data.hasOwnProperty('flammability') ? props.data.flammability : 0);    // 燃烧性
    const [ashFusionPoint, setAshFusionPoint] = useState(props.data.hasOwnProperty('ashFusionPoint') ? props.data.ashFusionPoint : 0);   // 灰熔点
    const [reactivity, setReactivity] = useState(props.data.hasOwnProperty('reactivity') ? props.data.reactivity : 0);  // "反应性"
    const [grindability, setGrindability] = useState(props.data.hasOwnProperty('grindability') ? props.data.grindability : 0);  // "可磨性"
    const [explosibility, setExplosibility] = useState(props.data.hasOwnProperty('explosibility') ? props.data.explosibility : 0);  // "爆炸性"

    // 表单的值的列表
    const variables = [name, materialOriginal, companyName, materialPrice, TFe, FeO, SiO2,
        CaO, MgO, Al2O3, K2O, Cl, Mn, F, P, Na2O, MnO, ZnO, TiO2, P2O5, S, Zn, water, burningLoss, O_15, O_15ToO_124,
        O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045,
        averageDiameter, maxMolecularWater, maxCapillaryWater, ballingIndex, less200Mesh,
        less300Mesh, specificSurfaceArea, colloidIndex, blueAbsorption, montmorilloniteContent, expansionCapacity,
        ash, volatiles, calorificValue, flammability, ashFusionPoint, reactivity, grindability, explosibility,
        props.data.ifCheck]

    // 表单值的赋值函数的列表
    const functions = [setName, setMaterialOriginal, setCompanyName, setMaterialPrice, setTFe, setFeO, setSiO2,
        setCaO, setMgO, setAl2O3, setK2O, setCl, setMn, setF, setP, setNa2O, setMnO, setZnO, setTiO2, setP2O5, setS,
        setZn, setWater, setBurningLoss, setO_15, setO_15ToO_124, setO_124ToO_O98, setO_O98ToO_O74, setO_O74ToO_O48,
        setO_O48, setLessThan0_074, setLessThan0_045, setAverageDiameter, setMaxMolecularWater, setMaxCapillaryWater,
        setBallingIndex, setLess200Mesh, setLess300Mesh, setSpecificSurfaceArea, setColloidIndex,
        setBlueAbsorption, setMontmorilloniteContent, setExpansionCapacity, setAsh, setVolatiles, setCalorificValue,
        setFlammability, setAshFusionPoint, setReactivity, setGrindability, setExplosibility]

    return (
        <div className="popup-box">
            {/* 头部部分 */}
            <div className="box">
                <div className='popup-box_head'>
                    {/* 确认按钮按钮 */}
                    <UpdateButton materialId={props.data.materialId} variables={variables} testDate={testDate}
                                  updateDate={updateDate} materialType={materialType} handleClose={props.handleClose}
                                  setMaterials={props.setMaterials}/>
                    <DeleteButton materialId={props.data.materialId} materialType={materialType}
                                  setMaterials={props.setMaterials} handleClose={props.handleClose}/>
                    {/* 取消按钮 */}
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                </div>
                {/* 表单（身体）部分 */}
                <div className='popup-box_body'>
                    {/* 选择框 */}
                    <div className='popup-input'>
                        <span className='postFrom_words'>原料种类</span>
                        <select className='manageForm_input'
                                defaultValue={materialType}
                                multiple={false}
                        >
                            <option value='0'>膨润土</option>
                            <option value='1'>铁矿粉</option>
                            <option value='2'>熔剂</option>
                            <option value='3'>喷吹煤</option>
                        </select>
                    </div>
                    {/* 遍历headers，通过variables和functions给每个表单加上对应的函数和值 */}
                    {headers.map((head, index) => (
                        <div className='popup-input' key={index}>
                            <span className='postFrom_words'>{head}</span>
                            <input className='postFrom_input' value={variables[index]}
                                   onChange={(e) => {
                                       const f = functions[index]
                                       f(e.target.value)
                                   }}/>
                        </div>
                    ))}
                    <div className='popup-time'>
                        <span className='postFrom_words'>检测时间</span>
                        <DatePicker selected={testDate} onChange={date => setTestDate(date)}/>
                    </div>
                    <div className='popup-time'>
                        <span className='postFrom_words'>更新时间</span>
                        <DatePicker selected={updateDate} onChange={date => setUpdateDate(date)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageMaterialPopup;