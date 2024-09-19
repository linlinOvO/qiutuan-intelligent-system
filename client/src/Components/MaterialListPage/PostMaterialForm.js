/*
    添加原料
 */
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PostMaterialForm.css'

const AddButton = (props) => {
    // Data 转化成 String
    // month加一是因为month是从0开始的
    const testDate = props.testDate.getFullYear() + '-' + (props.testDate.getMonth() + 1) + '-' + props.updateDate.getDate()
    const updateDate = props.updateDate.getFullYear() + '-' + (props.updateDate.getMonth() + 1) + '-' + props.updateDate.getDate()

    return (
        <button className='add_button' onClick={() => {
            // console.log('/api/v1/add_materials/' + props.materialType)
            fetch('/api/v1/add_materials/' + props.materialType, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({//request message
                    variables: props.variables,
                    testDate: testDate,
                    updateDate: updateDate,
                })
            }).then(() => {
                fetch('/api/v1/materials/' + props.materialType)
                    .then(response => response.json())
                    .then(data => props.setMaterials(data))
                props.handleClose()
            })


        }}>
            新增原料
        </button>
    )
}

const AddMaterialPopup = (props) => {

    const headers = ["原料名称", "原料产地", "公司", "单价", "TFe", "FeO", "SiO2", "CaO", "MgO", "Al2O3",
        "K2O", "Cl", "Mn", "F", "P", "Na2O", "MnO", "ZnO", "TiO2", "P2O5", "S", "Zn", "水份", "烧损", "+0.15",
        "0.15~0.124", "0.124~0.098", "0.098~0.074", "0.074~0.048", "-0.048", "<0.074", "<0.045", "平均粒径mm",
        "最大分子水", "最大毛细水", "成球性指数", "小于200目", "小于300目", "比表面积", "胶质价", "吸蓝量", "蒙脱石含量",
        "膨胀容", "灰分", "挥发分", "热值", "燃烧性", "灰熔点", "反应性", "可磨性", "爆炸性"]


    //  把每个表单的值和对应的赋值函数绑定
    const [materialType, setMaterialType] = useState('0');
    const [name, setName] = useState(''); //0
    const [materialOriginal, setMaterialOriginal] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [testDate, setTestDate] = useState(new Date());
    const [materialPrice, setMaterialPrice] = useState(0); //3
    const [TFe, setTFe] = useState(0);
    const [FeO, setFeO] = useState(0);
    const [SiO2, setSiO2] = useState(0);
    const [CaO, setCaO] = useState(0);
    const [MgO, setMgO] = useState(0);
    const [Al2O3, setAl2O3] = useState(0);
    const [K2O, setK2O] = useState(0);//10
    const [Cl, setCl] = useState(0); //11
    const [Mn, setMn] = useState(0);
    const [F, setF] = useState(0);//13
    const [P, setP] = useState(0);
    const [Na2O, setNa2O] = useState(0); //15
    const [MnO, setMnO] = useState(0);
    const [ZnO, setZnO] = useState(0);
    const [TiO2, setTiO2] = useState(0);
    const [P2O5, setP2O5] = useState(0);
    const [S, setS] = useState(0);//20
    const [Zn, setZn] = useState(0);//21
    const [water, setWater] = useState(0);
    const [burningLoss, setBurningLoss] = useState(0);
    const [O_15, setO_15] = useState(0);
    const [O_15ToO_124, setO_15ToO_124] = useState(0);
    const [O_124ToO_O98, setO_124ToO_O98] = useState(0);
    const [O_O98ToO_O74, setO_O98ToO_O74] = useState(0);
    const [O_O74ToO_O48, setO_O74ToO_O48] = useState(0);
    const [O_O48, setO_O48] = useState(0);
    const [lessThan0_074, setLessThan0_074] = useState(0);//30
    const [lessThan0_045, setLessThan0_045] = useState(0);
    const [averageDiameter, setAverageDiameter] = useState(0);
    const [maxMolecularWater, setMaxMolecularWater] = useState(0);    //最大分子水
    const [maxCapillaryWater, setMaxCapillaryWater] = useState(0);    //最大毛细水
    const [ballingIndex, setBallingIndex] = useState(0); //成球性指数
    // O_15, O_15ToO_124, O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045, averageDiameter, maxMolecularWater, maxCapillaryWater, ballingIndex
    const [less200Mesh, setLess200Mesh] = useState(0);
    const [less300Mesh, setLess300Mesh] = useState(0);
    const [specificSurfaceArea, setSpecificSurfaceArea] = useState(0);
    const [colloidIndex, setColloidIndex] = useState(0);
    const [blueAbsorption, setBlueAbsorption] = useState(0); //40
    const [montmorilloniteContent, setMontmorilloniteContent] = useState(0);
    const [expansionCapacity, setExpansionCapacity] = useState(0);  // 膨胀容
    const [ash, setAsh] = useState(0);  // 灰分
    const [volatiles, setVolatiles] = useState(0);  // 挥发分
    const [calorificValue, setCalorificValue] = useState(0);    // 热值
    const [flammability, setFlammability] = useState(0);    // 燃烧性
    const [ashFusionPoint, setAshFusionPoint] = useState(0);   // 灰熔点
    const [reactivity, setReactivity] = useState(0);  // "反应性"
    const [grindability, setGrindability] = useState(0);  // "可磨性"
    const [explosibility, setExplosibility] = useState(0);  // "爆炸性" //50
    const [updateDate, setUpdateDate] = useState(new Date());

    // 表单的值的列表
    const variables = [name, materialOriginal, companyName, materialPrice, TFe, FeO, SiO2,
        CaO, MgO, Al2O3, K2O, Cl, Mn, F, P, Na2O, MnO, ZnO, TiO2, P2O5, S, Zn, water, burningLoss, less200Mesh,
        less300Mesh, specificSurfaceArea, colloidIndex, blueAbsorption, montmorilloniteContent, expansionCapacity,
        ash, volatiles, calorificValue, flammability, ashFusionPoint, reactivity, grindability, explosibility,
        O_15, O_15ToO_124, O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045,
        averageDiameter, maxMolecularWater, maxCapillaryWater, ballingIndex]

    // 表单值的复制函数的列表
    const functions = [setName, setMaterialOriginal, setCompanyName, setMaterialPrice, setTFe, setFeO, setSiO2,
        setCaO, setMgO, setAl2O3, setK2O, setCl, setMn, setF, setP, setNa2O, setMnO, setZnO, setTiO2, setP2O5, setS,
        setZn, setWater, setBurningLoss, setLess200Mesh, setLess300Mesh, setSpecificSurfaceArea, setColloidIndex,
        setBlueAbsorption, setMontmorilloniteContent, setExpansionCapacity, setAsh, setVolatiles, setCalorificValue,
        setFlammability, setAshFusionPoint, setReactivity, setGrindability, setExplosibility, setO_15, setO_15ToO_124,
        setO_124ToO_O98, setO_O98ToO_O74, setO_O74ToO_O48, setO_O48, setLessThan0_074, setLessThan0_045,
        setAverageDiameter, setMaxMolecularWater, setMaxCapillaryWater, setBallingIndex]

    return (
        <div className="popup-box">
            {/* 头部部分 */}
            <div className="box">
                <div className='popup-box_head'>
                    {/* 确认按钮按钮 */}
                    <AddButton variables={variables} testDate={testDate} updateDate={updateDate}
                               materialType={materialType} handleClose={props.handleClose}
                               setMaterials={props.setMaterials}/>
                    {/* 取消按钮 */}
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                </div>
                {/* 表单（身体）部分 */}
                <div className='popup-box_body'>
                    {/* 选择框 */}
                    <div className='popup-input'>
                        <div className='postFrom_words'>原料种类</div>
                        <select className='postFrom_input'
                                onChange={(e) => {
                                    setMaterialType(e.target.value)
                                }}>
                            <option value='0'>膨润土</option>
                            <option value='1'>铁矿粉</option>
                            <option value='2'>熔剂</option>
                            <option value='3'>喷吹煤</option>

                        </select>
                    </div>
                    {/* 遍历headers，通过variables和functions给每个表单加上对应的函数和值 */}
                    {headers.map((head, index) => (
                        <div className='popup-input' key={index}>
                            <div className='postFrom_words'>{head}</div>
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

export default AddMaterialPopup;