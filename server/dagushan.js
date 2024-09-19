//数据库
const pool = require('./store')
const exportExcel = require('./excel')

const getAllMaterialsBentonite = async (request, response) => {
    // console.log('getAllMaterials: '+request.body)
    // console.log('getAllMaterialsBentonite: ')
    pool.query(
        'SELECT * FROM DaGuShan.bentonite;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getAllMaterialsIronOrePowder = async (request, response) => {
    // console.log('getAllMaterialsIronOrePowder: '+request.body)
    // console.log('getAllMaterialsIronOrePowder: ')
    pool.query(
        'SELECT * FROM DaGuShan.ironOrePowder;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getAllMaterialsFlux = async (request, response) => {
    // console.log('getAllMaterialsFlux: '+request.body)
    // console.log('getAllMaterialsFlux: ')
    pool.query(
        'SELECT * FROM DaGuShan.flux;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getAllMaterialsCoalinjection = async (request, response) => {
    // console.log('getAllMaterialsFlux: '+request.body)
    // console.log('getAllMaterialsFlux: ')
    pool.query(
        'SELECT * FROM DaGuShan.coalinjection;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const addMaterialsBentonite= async (request, response) => {
    // console.log('addMaterialsBentonite: '+request.body)
    // console.log('addMaterialsIronOrePowder: ')
    const { variables, testDate, updateDate} = request.body

    // mysql语句,记得给string类型加上引号
    const sentence = "insert into DaGuShan.bentonite(materialName,materialOriginal,companyName,testDate,materialPrice,TFe,FeO,SiO2,CaO,MgO,Al2O3,K2O,Cl, Na2O, MnO, ZnO, TiO2, P2O5, S, Zn, F,P,water,burningLoss,O_15, O_15ToO_124, O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045, averageDiameter,specificSurfaceArea,colloidIndex,blueAbsorption,montmorilloniteContent,expansionCapacity,updateDate,ifCheck)" +
        "values(" + "'"+variables[0]+"'" + ',' + "'"+variables[1]+"'" + ',' + "'"+variables[2]+"'" + ',' + "'"+testDate+"'" + ',' + variables[3] + ',' +
        variables[4] + ',' + variables[5] + ',' + variables[6] + ',' + variables[7] + ',' + variables[8] + ',' +
        variables[9] + ',' + variables[10] + ',' + variables[11] + ','+ variables[15] + ','+ variables[16] + ','+ variables[17] + ','+ variables[18] + ','+ variables[19] + ','+ variables[20] + ','+ variables[21] + ','+ variables[13] + ','+ variables[14] + ',' + variables[22] + ',' +
        variables[23] + ',' + variables[24] + ',' + variables[25] + ',' + variables[26] + ',' + variables[27] + ',' +
        variables[28] + ',' + variables[29] + ',' + variables[30] + ',' + variables[31] + ',' + variables[32] + ',' + variables[38] + ',' +
        variables[39] + ',' + variables[40] + ',' + variables[41] + ',' + variables[42] + ',' +
        "'"+updateDate+"'" + ", false);"
    // console.log(sentence)
    pool.query(sentence, (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加成功')
        }
    );
};

const addMaterialsIronOrePowder = async (request, response) => {
    // console.log('addMaterialsIronOrePowder: '+request.body)
    // console.log('addMaterialsIronOrePowder: ')
    const { variables, testDate, updateDate} = request.body

    // mysql语句,记得给string类型加上引号
    const sentence = "insert into DaGuShan.ironOrePowder(materialName, materialOriginal, companyName, testDate, " +
        "materialPrice,TFe,FeO,SiO2,CaO,MgO,Al2O3,K2O,Cl ,Mn ,P ,Na2O ,MnO ,ZnO, TiO2 ,P2O5,S,Zn,F,water, " +
        "burningLoss,O_15, O_15ToO_124, O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045, " +
        "averageDiameter,maxMolecularWater, maxCapillaryWater, ballingIndex, less200Mesh, less300Mesh, specificSurfaceArea, " +
        "updateDate,ifCheck) " +
        "values(" + "'"+variables[0]+"'" + ',' + "'"+variables[1]+"'" + ',' + "'"+variables[2]+"'" + ',' + "'"+testDate+"'" +
        ',' + variables[3] + ',' + variables[4] + ',' + variables[5] + ',' + variables[6] + ',' + variables[7] + ',' +
        variables[8] + ',' + variables[9] + ',' + variables[10] + ',' + variables[11] + ',' + variables[12] + ',' +
        variables[14] + ',' + variables[15] + ',' + variables[16] + ',' + variables[17] + ',' + variables[18] + ',' +
        variables[19] + ',' + variables[20] + ',' + variables[21] + ',' + variables[13] + ',' + variables[22] + ',' + variables[23] + ',' +
        variables[24] + ',' +variables[25] + ',' +variables[26] + ',' +variables[27] + ',' +variables[28] + ',' +
        variables[29] + ',' +variables[30] + ',' +variables[31] + ',' +variables[32] + ',' +variables[33] + ',' +
        variables[34] + ',' +variables[35] + ',' + variables[36] + ',' + variables[37] + ',' + variables[38] + ',' +
        "'"+updateDate+"'" + ", false);"
    // console.log(sentence)
    pool.query(sentence, (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加成功')
        }
    );
}

const addMaterialsFlux = async (request, response) => {
    // console.log('addMaterialsFlux: '+request.body)
    // console.log('addMaterialsFlux: ')
    const { variables, testDate, updateDate} = request.body

    // mysql语句,记得给string类型加上引号
    const sentence = "insert into DaGuShan.flux(materialName,materialOriginal,companyName,testDate,materialPrice,TFe,FeO,SiO2,CaO,MgO,Al2O3,K2O,Cl, Na2O, MnO, ZnO, TiO2, P2O5, S, Zn, F,P,water,burningLoss,O_15, O_15ToO_124, O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045, averageDiameter,specificSurfaceArea,updateDate,ifCheck)" +
        "values(" + "'"+variables[0]+"'" + ',' + "'"+variables[1]+"'" + ',' + "'"+variables[2]+"'" + ',' + "'"+testDate+"'" + ',' +
        variables[3] + ',' + variables[4] + ',' + variables[5] + ',' + variables[6] + ',' + variables[7] + ',' +
        variables[8] + ',' + variables[9] + ',' + variables[10] + ','+ variables[11] + ','+ variables[15] + ','+ variables[16] + ','+ variables[17] + ','+ variables[18] + ','+ variables[19] + ','+ variables[20] + ','+ variables[21] + ',' + variables[13] + ',' + variables[14] + ',' +
        variables[22] + ',' + variables[23] + ',' + variables[24] + ',' + variables[25] + ',' + variables[26] + ',' +
        variables[27] + ',' + variables[28] + ',' + variables[29] + ',' + variables[30] + ',' + variables[31] + ',' +
        variables[32] + ',' + variables[38] + ',' + "'"+updateDate+"'" + ", false);"
    // console.log(sentence)
    pool.query(sentence, (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加成功')
        }
    );
};

const addMaterialsCoalinjection = async (request, response) => {
    // console.log('addMaterialsFlux: '+request.body)
    // console.log('addMaterialsCoalinjection: ')
    const { variables, testDate, updateDate} = request.body

    // mysql语句,记得给string类型加上引号
    const sentence = "insert into DaGuShan.coalinjection(materialName,materialOriginal,companyName,testDate,materialPrice,TFe,FeO,SiO2,CaO,MgO,Al2O3,K2O,Cl, Na2O, MnO, ZnO, TiO2, P2O5, Zn, F,P,S,water,burningLoss,O_15, O_15ToO_124, O_124ToO_O98, O_O98ToO_O74, O_O74ToO_O48, O_O48, lessThan0_074, lessThan0_045, averageDiameter,specificSurfaceArea,ash,volatiles,calorificValue,flammability,ashFusionPoint,reactivity,grindability,explosibility,updateDate,ifCheck)" +
        "values(" + "'"+variables[0]+"'" + ',' + "'"+variables[1]+"'" + ',' + "'"+variables[2]+"'" + ',' + "'"+testDate+"'" + ',' +
        variables[3] + ',' + variables[4] + ',' + variables[5] + ',' + variables[6] + ',' + variables[7] + ',' +
        variables[8] + ',' + variables[9] + ',' + variables[10] + ','+ variables[10] + ','+ variables[11] + ','+ variables[15] + ','+ variables[16] + ','+ variables[17] + ','+ variables[18] + ','+ variables[19] + ','+ variables[21] + ','+ variables[13] + ',' + variables[14] + ',' + variables[22] + ',' +
        variables[23] + ',' + variables[24] + ',' + variables[25] + ',' + variables[26] + ',' + variables[27] + ',' +
        variables[28] + ',' + variables[29] + ',' + variables[30] + ',' + variables[31] + ',' + variables[32] + ',' +
        variables[38] + ',' + variables[43] + ',' + variables[44] + ',' + variables[45] + ',' + variables[46]  + ',' +
        variables[47] + ',' + variables[48] + ',' + variables[49] + ',' + variables[50]+ ',' + "'"+updateDate+"'" + ", false);"
    // console.log(sentence)
    pool.query(sentence, (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加成功')
        }
    );
};

const updateMaterialsBentonite= async (request, response) => {
    // console.log('addMaterialsBentonite: '+request.body)
    // console.log('updateMaterialsBentonite: ')
    const { materialId, variables, testDate, updateDate} = request.body

    // console.log(sentence)
    pool.query('UPDATE DaGuShan.bentonite SET materialName = ?, materialOriginal = ?, companyName = ?, testDate = ?, materialPrice = ?, TFe = ?, FeO = ?, SiO2 = ?, CaO = ?, MgO = ?, Al2O3 = ?, K2O = ?, F = ?, P = ?, water = ?, burningLoss = ?, O_15 = ?, O_15ToO_124 = ?, O_124ToO_O98 = ?, O_O98ToO_O74 = ?, O_O74ToO_O48 = ?, O_O48 = ?, lessThan0_074 = ?, lessThan0_045 = ?, averageDiameter = ?, specificSurfaceArea = ?, colloidIndex = ?, blueAbsorption = ?, montmorilloniteContent = ?, expansionCapacity = ?, updateDate = ? WHERE materialId = ?',
        [variables[0], variables[1], variables[2], testDate, variables[3], variables[4], variables[5], variables[6],
            variables[7], variables[8], variables[9], variables[10], variables[13], variables[14], variables[22],
            variables[23], variables[24], variables[25], variables[26], variables[27], variables[28], variables[29],
            variables[30], variables[31], variables[32], variables[38], variables[39], variables[40], variables[41],
            variables[42], updateDate, materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('更新成功')
        }
    );
};

const updateMaterialsIronOrePowder= async (request, response) => {
    // console.log('updateMaterialsIronOrePowder: '+request.body)
    // console.log('updateMaterialsIronOrePowder: ')
    const { materialId, variables, testDate, updateDate} = request.body

    // console.log(sentence)
    pool.query('UPDATE DaGuShan.ironOrePowder SET materialName = ?, materialOriginal = ?, companyName = ?, testDate = ?, materialPrice = ?, TFe = ?, FeO = ?, SiO2 = ?, CaO = ?, MgO = ?, Al2O3 = ?, K2O = ?, Cl  = ?,Mn = ?,P = ?,Na2O = ?,MnO = ?, ZnO = ?, TiO2 = ?,P2O5 = ?,S = ?,Zn = ?, water = ?, burningLoss = ?, O_15 = ?, O_15ToO_124 = ?, O_124ToO_O98 = ?, O_O98ToO_O74 = ?, O_O74ToO_O48 = ?, O_O48 = ?, lessThan0_074 = ?, lessThan0_045 = ?, averageDiameter = ?, maxMolecularWater = ?, maxCapillaryWater = ?, ballingIndex = ?, less200Mesh = ?, less300Mesh = ?, specificSurfaceArea = ?, updateDate = ? WHERE materialId = ?',
        [variables[0], variables[1], variables[2], testDate, variables[3], variables[4], variables[5], variables[6],
            variables[7], variables[8], variables[9], variables[10], variables[11], variables[12], variables[4],
            variables[15], variables[16], variables[17], variables[18],variables[19], variables[20], variables[21],
            variables[22], variables[23], variables[24], variables[25], variables[26], variables[27], variables[28],
            variables[29], variables[30], variables[31], variables[32], variables[33], variables[34], variables[35],
            variables[36], variables[37], variables[38], updateDate, materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('更新成功')
        }
    );
};

const updateMaterialsFlux= async (request, response) => {
    // console.log('updateMaterialsFlux: '+request.body)
    // console.log('updateMaterialsFlux: ')
    const { materialId, variables, testDate, updateDate} = request.body

    console.log(materialId)
    pool.query('UPDATE DaGuShan.flux SET materialName = ?, materialOriginal = ?, companyName = ?, testDate = ?, materialPrice = ?, TFe = ?, FeO = ?, SiO2 = ?, CaO = ?, MgO = ?, Al2O3 = ?, K2O = ?, F = ?, P = ?, water = ?, burningLoss = ?, O_15 = ?, O_15ToO_124 = ?, O_124ToO_O98 = ?, O_O98ToO_O74 = ?, O_O74ToO_O48 = ?, O_O48 = ?, lessThan0_074 = ?, lessThan0_045 = ?, averageDiameter = ?, specificSurfaceArea = ?, updateDate = ? WHERE materialId = ?',
        [variables[0], variables[1], variables[2], testDate, variables[3], variables[4], variables[5], variables[6],
            variables[7], variables[8], variables[9], variables[10], variables[13], variables[14], variables[22],
            variables[23], variables[24], variables[25], variables[26], variables[27], variables[28], variables[29],
            variables[30], variables[31], variables[32], variables[38], updateDate, materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('更新成功')
        }
    );
};

const updateMaterialsCoalinjection= async (request, response) => {
    // console.log('updateMaterialsFlux: '+request.body)
    // console.log('updateMaterialsCoalinjection: ')
    const { materialId, variables, testDate, updateDate} = request.body

    console.log(materialId)
    console.log(variables)
    pool.query('UPDATE DaGuShan.coalinjection SET materialName = ?,materialOriginal = ?,companyName = ?,testDate = ?,materialPrice = ?,TFe = ?,FeO = ?,SiO2 = ?,CaO = ?,MgO = ?,Al2O3 = ?,K2O = ?,S = ?,water = ?,burningLoss = ?,O_15 = ?, O_15ToO_124 = ?, O_124ToO_O98 = ?, O_O98ToO_O74 = ?, O_O74ToO_O48 = ?, O_O48 = ?, lessThan0_074 = ?, lessThan0_045 = ?, averageDiameter = ?, specificSurfaceArea = ?, ash = ?,volatiles = ?,calorificValue = ?,flammability = ?,ashFusionPoint = ?,reactivity = ?,grindability = ?,explosibility = ?,updateDate = ? WHERE materialId = ?',
        [variables[0], variables[1], variables[2], testDate, variables[3], variables[4], variables[5], variables[6],
            variables[7], variables[8], variables[9], variables[10], variables[20], variables[22], variables[23],
            variables[24], variables[25], variables[26], variables[27], variables[28], variables[29], variables[30],
            variables[31], variables[32], variables[38], variables[43],variables[44],variables[45],variables[46],
            variables[47],variables[48],variables[49],variables[50], updateDate, materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('更新成功')
        }
    );
};

const deleteMaterialsBentonite = (request, response) => {
    // console.log('deleteMaterialsBentonite: '+request.body)
    // console.log('deleteMaterialsBentonite: ')
    const { materialId } = request.body;
    console.log(materialId)
    pool.query("DELETE FROM DaGuShan.bentonite WHERE materialId = ?;",
        [materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('删除成功')
        });
};

const deleteMaterialsIronOrePowder = (request, response) => {
    // console.log('deleteMaterialsIronOrePowder: '+request.body)
    // console.log('deleteMaterialsIronOrePowder: ')
    const { materialId } = request.body;
    console.log(materialId)
    pool.query("DELETE FROM DaGuShan.ironOrePowder WHERE materialId = ?;",
        [materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('删除成功')
        });
};

const deleteMaterialsFlux = (request, response) => {
    // console.log('deleteMaterialsFlux: '+request.body)
    // console.log('deleteMaterialsFlux: ')
    const { materialId } = request.body;
    console.log(materialId)
    pool.query("DELETE FROM DaGuShan.flux WHERE materialId = ?;",
        [materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('删除成功')
        });
};

const deleteMaterialsCoalinjection= (request, response) => {
    // console.log('deleteMaterialsFlux: '+request.body)
    // console.log('deleteMaterialsCoalinjection: ')
    const { materialId } = request.body;
    console.log(materialId)
    pool.query("DELETE FROM DaGuShan.coalinjection WHERE materialId = ?;",
        [materialId],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('删除成功')
        });
};

const deleteAllSelected = (request, response) => {
    // console.log('deleteAllSelected: '+request.body)
    // console.log('deleteAllSelected: ')
    const { checkBox } = request.body;
    let sentence = ''
    let list = ''
    if(checkBox[0].length !== 0){
        list = '('+checkBox[0]+')'
        sentence += "DELETE FROM DaGuShan." + 'bentonite' + " WHERE materialId in " + list + ';'
    }
    if(checkBox[1].length !== 0){
        list = '('+checkBox[1]+')'
        sentence += "DELETE FROM DaGuShan." + 'ironOrePowder' + " WHERE materialId in " + list + ';'
    }
    if(checkBox[2].length !== 0){
        list = '('+checkBox[2]+')'
        sentence += "DELETE FROM DaGuShan." + 'flux' + " WHERE materialId in " + list + ';'
    }
    if(checkBox[3].length !== 0){
        list = '('+checkBox[3]+')'
        sentence += "DELETE FROM DaGuShan." + 'coalinjection' + " WHERE materialId in " + list + ';'
    }
    pool.query(sentence,
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('删除成功')
        });
};

const checkAllSelected = (request, response) => {
    // console.log('checkAllSelected: '+request.body)
    // console.log('checkAllSelected: ')
    const { checkBox } = request.body;
    let list = ''
    let sentence = ''
    if(checkBox[0].length !== 0){
        list = '('+checkBox[0]+')'
        sentence = "UPDATE DaGuShan." + 'bentonite' + " SET ifCheck = true WHERE materialId in " + list + ';'
    }
    if(checkBox[1].length !== 0){
        list = '('+checkBox[1]+')'
        sentence += "UPDATE DaGuShan." + 'ironOrePowder' + " SET ifCheck = true WHERE materialId in " + list + ';'
    }
    if(checkBox[2].length !== 0){
        list = '('+checkBox[2]+')'
        sentence += "UPDATE DaGuShan." + 'flux' + " SET ifCheck = true WHERE materialId in " + list + ';'
    }
    if(checkBox[3].length !== 0){
        list = '('+checkBox[3]+')'
        sentence += "UPDATE DaGuShan." + 'coalinjection' + " SET ifCheck = true WHERE materialId in " + list + ';'
    }
    if(sentence.length === 0){
        response.status(200).send('更新成功')
        return

    }
    //console.log(sentence)
    pool.query(sentence,
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('更新成功')
        });
};

const search = (request, response) => {
    // console.log('search')
    const { listId, materialId, materialName,companyName,chemistry,
        chemistryMin,chemistryMax, beginTime,endTime } = request.body;
    // console.log(request.body)
    const list = ['bentonite', 'ironOrePowder', 'flux', 'coalinjection'][listId]
    let sentence = 'SELECT * FROM DaGuShan.' + list

    // 查询内容
    let searchList = []
    if(materialId.length !== 0)     searchList.push('materialId = ' + materialId)
    if(materialName.length !== 0)     searchList.push('materialName = ' + "'" + materialName + "'")
    if(companyName.length !== 0)     searchList.push('companyName = ' + "'" + companyName + "'")
    if(chemistryMin.length !== 0)     searchList.push(chemistry + ' >= ' + "'" + chemistryMin + "'")
    if(chemistryMax.length !== 0)     searchList.push(chemistry + ' <= ' + "'" + chemistryMax + "'")
    if(beginTime.length !== 0)
        searchList.push("DATEDIFF(testDate, CONVERT_TZ('"+ beginTime + "','+00:00','+8:00')) >= 0")
    if(endTime.length !== 0)
        searchList.push("DATEDIFF(testDate, CONVERT_TZ('"+ endTime + "','+00:00','+8:00')) <= 0")

    // console.log(searchList)
    if(searchList.length !== 0){
        sentence += ' WHERE'
        for(let i=0; i < searchList.length; i++){
            sentence += ' '+searchList[i]
            if(i+1 < searchList.length){
                sentence += ' &&'
            }
        }
    }
    sentence += ';'
    // console.log(sentence)
    pool.query(
        sentence,
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
}

const randomData = () =>{
    //console.log('randomData:')
    // mysql语句,记得给string类型加上引号
    const value = (Math.random() + 19.9).toFixed(3)//随机数
    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    pool.query('insert into DaGuShan.oxygenDetection(oxygenContent, testTime)values (?, ?)',
        [value, now],
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
}//往数据库添加数据
const randomData2 = () =>{
    //console.log('randomData:')
    // mysql语句,记得给string类型加上引号
    const value = (Math.random() + 13).toFixed(3)//随机数
    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    pool.query('insert into DaGuShan.oxygenDetectiontwo(oxygenContent, testTime)values (?, ?)',
        [value, now],
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
}//往数据库添加数据，氧探头2
const randomData3 = () =>{
    //console.log('randomData:')
    // mysql语句,记得给string类型加上引号
    const value = ((Math.random()*10) + 970).toFixed(3)//随机数
    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    pool.query('insert into DaGuShan.oxygenDetectionthree(oxygenContent, testTime)values (?, ?)',
        [value, now],
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
}//往数据库添加数据

Date.prototype.Format = function (fmt) { //author: meizz
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() < 8 ? this.getHours() + 16 : this.getHours() - 8, //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

const getRealTimeOxygenData = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SELECT * FROM DaGuShan.oxygenDetection where testTime >= now() - interval 4 hour order by testTime desc limit 100",
        (error, results) => {
            if (error) {
                throw error;
            }

            const temp = []
            for (let i = 0; i < results.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(results[i].testTime),
                        results[i].oxygenContent
                    ]
                })

                // 判断时间间隔是否大于1min，如果有则在中间补充数据
                if(i < results.length - 1){
                    const currentTime = results[i].testTime
                    const nextTime = results[i+1].testTime

                    var diff = Math.abs(currentTime.getTime() - nextTime.getTime());

                    if(diff > 60 * 1000){
                        while(diff > 60 * 1000){
                            const midTime = new Date(currentTime.getTime() + 10000);
                            diff -= 60 * 1000
                            temp.push({
                                value: [
                                    midTime,
                                    0
                                ]
                            })
                        }
                    }
                }
            }
            temp.reverse()
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//预热1段氧含量

const getRealTimeOxygenData2 = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SELECT * FROM DaGuShan.oxygenDetectionTwo where testTime >= now() - interval 4 hour order by testTime desc limit 100;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const temp = []
            for (let i = 0; i < results.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(results[i].testTime),
                        results[i].oxygenContent
                    ]
                })

                // 判断时间间隔是否大于1min，如果有则在中间补充数据
                if(i < results.length - 1){
                    const currentTime = results[i].testTime
                    const nextTime = results[i+1].testTime

                    var diff = Math.abs(currentTime.getTime() - nextTime.getTime());

                    if(diff > 60 * 1000){
                        while(diff > 60 * 1000){
                            const midTime = new Date(currentTime.getTime() + 10000);
                            diff -= 60 * 1000
                            temp.push({
                                value: [
                                    midTime,
                                    0
                                ]
                            })
                        }
                    }
                }

            }
            temp.reverse()
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//预热2段氧含量

const getDayOxygenData = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SELECT * FROM DaGuShan.oxygenDetection where TIMESTAMPDIFF(SECOND, testTime, now()) < 1 * 60 * 60 * 24;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const temp = []
            for (let i = 0; i < results.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(results[i].testTime),
                        results[i].oxygenContent
                    ]
                })
            }
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//预热1段氧含量
const getDayOxygenData2 = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SELECT *FROM DaGuShan.oxygenDetectiontwo where TIMESTAMPDIFF(DAY, oxygenDetectiontwo.testTime, now()) < 1;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const temp = []
            for (let i = 0; i < results.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(results[i].testTime),
                        results[i].oxygenContent
                    ]
                })

            }

            response.status(200).json(temp);
        }
    );
};//预热2段氧哈量
// const getDayOxygenData3 = async (request, response) => {
//     //console.log('getAllOxygenData: '+request.body)
//     pool.query(
//         "SELECT * FROM DaGuShan.oxygenDetectionthree where TIMESTAMPDIFF(SECOND, testTime, now()) < 1 * 60 * 60 * 24;",
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             const temp = []
//             for (let i = 0; i < results.length; i ++) {
//                 temp.push({
//                     value: [
//                         Date.parse(results[i].testTime),
//                         results[i].oxygenContent
//                     ]
//                 })
//             }
//             // console.log(temp)
//             response.status(200).json(temp);
//         }
//     );
// };//预热2段

const getMonthOxygenData = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SET @a = -1; SELECT * FROM DaGuShan.oxygenDetection where (@a := @a + 1) % 6 = 0 AND TIMESTAMPDIFF(MONTH, testTime, now()) < 1 order by testTime;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const data = results[1]
            const temp = []
            for (let i = 0; i < data.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(data[i].testTime),
                        data[i].oxygenContent
                    ]
                })
            }
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//预热1段温度
const getMonthOxygenData2 = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SET @a = -1; SELECT * FROM DaGuShan.oxygenDetectiontwo where (@a := @a + 1) % 6 = 0 AND TIMESTAMPDIFF(MONTH, testTime, now()) < 1 order by testTime;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const data = results[1]
            const temp = []
            for (let i = 0; i < data.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(data[i].testTime),
                        data[i].oxygenContent
                    ]
                })
            }
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//预热2段温度
// const getMonthOxygenData3 = async (request, response) => {
//     //console.log('getAllOxygenData: '+request.body)
//     pool.query(
//         "SET @a = -1; SELECT * FROM DaGuShan.oxygenDetectionthree where (@a := @a + 1) % 6 = 0 AND TIMESTAMPDIFF(MONTH, testTime, now()) < 1 order by testTime;",
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             const data = results[1]
//             const temp = []
//             for (let i = 0; i < data.length; i ++) {
//                 temp.push({
//                     value: [
//                         Date.parse(data[i].testTime),
//                         data[i].oxygenContent
//                     ]
//                 })
//             }
//             // console.log(temp)
//             response.status(200).json(temp);
//         }
//     );
// };//预热2段氧含量

const getYearOxygenData = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SET @a = -1; SELECT * FROM DaGuShan.oxygenDetection where (@a := @a + 1) % 36 = 0 AND TIMESTAMPDIFF(YEAR, testTime, now()) < 1 order by testTime;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const data = results[1]
            const temp = []
            for (let i = 0; i < data.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(data[i].testTime),
                        data[i].oxygenContent
                    ]
                })
            }
            response.status(200).json(temp);
        }
    );
};//预热1段温度
const getYearOxygenData2 = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SET @a = -1; SELECT * FROM DaGuShan.oxygenDetectiontwo where (@a := @a + 1) % 36 = 0 AND TIMESTAMPDIFF(YEAR, testTime, now()) < 1 order by testTime;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const data = results[1]
            const temp = []
            for (let i = 0; i < data.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(data[i].testTime),
                        data[i].oxygenContent
                    ]
                })
            }
            response.status(200).json(temp);
        }
    );
};//预热2段温度
// const getYearOxygenData3 = async (request, response) => {
//     //console.log('getAllOxygenData: '+request.body)
//     pool.query(
//         "SET @a = -1; SELECT * FROM DaGuShan.oxygenDetectionthree where (@a := @a + 1) % 36 = 0 AND TIMESTAMPDIFF(YEAR, testTime, now()) < 1 order by testTime;",
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//
//             const data = results[1]
//             const temp = []
//             for (let i = 0; i < data.length; i ++) {
//                 temp.push({
//                     value: [
//                         Date.parse(data[i].testTime),
//                         data[i].oxygenContent
//                     ]
//                 })
//             }
//             response.status(200).json(temp);
//         }
//     );
// };//预热2段氧含量

const getOxygenData3 = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    pool.query(
        'select * from DaGuShan.oxygenDetectionthree order by testTime desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            for (let i = result.length - 1; i >= 0; i--) {
                initialData.push({
                    value: [
                        result[i].testTime,
                        result[i].oxygenContent
                    ]
                })
            }

            const temp = {
                initialData: initialData,
                currentVal: result[0].oxygenContent,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};

const getCurrentVals = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    pool.query(
        'select a.oxygenContent as leftData, b.oxygenContent as rightData from (select oxygenContent from DaGuShan.oxygenDetection order by testTime desc limit 1) as a,(select oxygenContent from DaGuShan.oxygenDetectiontwo order by testTime desc limit 1) as b;',
        (error, result) => {
            if (error) {
                throw error;
            }

            // console.log(temp.initialData)

            response.status(200).json(result[0]);
        }
    );
};

const getRangeOxygenData = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    const { beginTime, endTime } = request.body;
    //console.log("select a1.testTime, a1.oxygenContent, a2.oxygenContent as 'oxygenContentTwo', a3.oxygenContent as 'oxygenContentThree' from (select * from DaGuShan.oxygenDetection where TIMESTAMPDIFF(SECOND, CONVERT_TZ(" + beginTime + ", '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(" + endTime + ", '+00:00', '+8:00'), testTime) <= 0) as a1 ,(select * from DaGuShan.oxygenDetectiontwo where TIMESTAMPDIFF(SECOND, CONVERT_TZ(" + beginTime + ", '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(" + endTime + ", '+00:00', '+8:00'), testTime) <= 0) as a2 ,(select * from DaGuShan.oxygenDetectionthree where TIMESTAMPDIFF(SECOND, CONVERT_TZ(" + beginTime + ", '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(" + endTime + ", '+00:00', '+8:00'), testTime) <= 0) as a3 where a1.testTime = a2.testTime;")
    pool.query(
        "select a1.testTime, a1.oxygenContent, a2.oxygenContent as 'oxygenContentTwo' from (select * from DaGuShan.oxygenDetection where TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) <= 0) as a1 ,(select * from DaGuShan.oxygenDetectiontwo where TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) <= 0) as a2 where a1.testTime = a2.testTime;",
        [beginTime, endTime, beginTime, endTime],
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};


const getSingleOxygenData = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        'SELECT oxygenContent FROM DaGuShan.oxygenDetection ORDER BY testTime DESC LIMIT 1;',
        (error, results) => {
            if (error) {
                throw error;
            }

            response.status(200).json(results);
        }
    );
};//获取氧含量的方法
const getSingleOxygenData2 = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        'SELECT oxygenContent FROM DaGuShan.oxygenDetectiontwo ORDER BY testTime DESC LIMIT 1;',
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results);
        }
    );
};//获取氧含量的方法，氧探头2
const getSingleOxygenData3 = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        'SELECT oxygenContent FROM DaGuShan.oxygenDetectionthree ORDER BY testTime DESC LIMIT 1;',
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results);
        }
    );
};//获取氧含量的方法，氧探头3


const createExcel = async (request, response) => {
    const { beginTime, endTime } = request.body

    pool.query(
        "select a1.testTime, a1.oxygenContent, a2.oxygenContent as 'oxygenContentTwo' from (select * from DaGuShan.oxygenDetection where TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) <= 0) as a1 ,(select * from DaGuShan.oxygenDetectiontwo where TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) >= 0 AND TIMESTAMPDIFF(SECOND, CONVERT_TZ(?, '+00:00', '+8:00'), testTime) <= 0) as a2 where a1.testTime = a2.testTime",
        [beginTime, endTime, beginTime, endTime],
        async (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            await exportExcel(results, "Sheet1", __dirname + "/test.xlsx")

            const file = __dirname + '/test.xlsx';
            response.download(file);
        }
    );
};

const getPart1Parameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'SELECT * FROM DaGuShan.part1Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getPart2Parameters = async (request, response) => {
    // console.log('getPart2Parameters: ')
    pool.query(
        'SELECT * FROM DaGuShan.part2Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
           // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getPart3Parameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'SELECT * FROM DaGuShan.part3Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getPart4Parameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'SELECT * FROM DaGuShan.part4Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getAllParameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'SELECT * FROM DaGuShan.part1Data;' +
        'SELECT * FROM DaGuShan.part2Data;' +
        'SELECT * FROM DaGuShan.part3Data;' +
        'SELECT * FROM DaGuShan.part4Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results);
        }
    );
};

const getLbjParameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'select N3 as ggdOut, N6 as cgdOut, N9 as yr1Out, N12 as yr2Out, N16 as ggdIn, N17 as yr1In, N18 as yr2In from DaGushan.part2Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results[0]);
        }
    );
};

const getHzyParameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'select part4Data.N13 as ecf, part3Data.N5 as hzy, part3Data.N1 as pml1, part4Data.N0 as pml2 from DaGushan.part3Data, DaGushan.part4Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            const result = results[0]

            const temp = {
                ecf: result.ecf,
                hzy: result.hzy,
                pml: result.pml1 * result.pml2 ,
            }
            response.status(200).json(temp);
        }
    );
};

const getHljParameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'select part4Data.N5 as hl1Speed, part4Data.N6 as hl2Speed, part4Data.N7 as hl3Speed, part4Data.N8 as hl4Speed, part4Data.N13 as hl1Temperature, part4Data.N14 as hl2Temperature, part4Data.N15 as hl3Temperature, part4Data.N16 as hl4Temperature from DaGuShan.part4Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            // console.log(results)
            response.status(200).json(results[0]);
        }
    );
};

const getLhhParameters = async (request, response) => {
    // console.log('getPart1Parameters: ')
    pool.query(
        'select' +
        'part1Data.N5 as N1_5, part1Data.N6 as N1_6, part1Data.N7 as N1_7, part1Data.N8 as N1_8, part1Data.N9 as N1_9, part1Data.N10 as N1_10, part1Data.N11 as N1_11, part1Data.N12 as N1_12, part1Data.N13 as N1_13, part1Data.N14 as N1_14, part1Data.N15 as N1_15, part1Data.N16 as N1_16, part1Data.N18 as N1_18, part1Data.N19 as N1_19, ' +
        'part2Data.N0 as N2_0, part2Data.N49 as N2_49, part2Data.N50 as N2_50, part2Data.N51 as N2_51, part2Data.N52 as N2_52, part2Data.N53 as N2_53, part2Data.N54 as N2_54, part2Data.N55 as N2_55, part2Data.N56 as N2_56, part2Data.N57 as N2_57, part2Data.N83 as N2_83, part2Data.N84 as N2_84, part2Data.N85 as N2_85, part2Data.N86 as N2_86, part2Data.N87 as N2_87, ' +
        ' ' +
        'part4Data.N0 as N4_0, part4Data.N7 as N4_7, part4Data.N11 as N4_11, part4Data.N15 as N4_15, part4Data.N59 as N4_59, part4Data.N78 as N4_78, part4Data.N80 as N4_80, part4Data.N81 as N4_81, part4Data.N82 as N4_82 ' +
        'from DaGushan.part1Data, DaGushan.part2Data, DaGushan.part3Data, DaGushan.part4Data;',
        (error, results) => {
            if (error) {
                throw error;
            }
            //const data = results[0]

            // const N30 = data.N2_0 * (data.N2_49 / 100 * data.N1_6 + (100 - data.N2_49) / 100 *
            //     (data.N2_50 * data.N1_7 + data.N2_51 * data.N1_8 + data.N2_52 * data.N1_9
            //         + data.N2_53 * data.N1_10 + data.N2_54 * data.N1_11 + data.N2_55 * data.N1_12
            //         + data.N2_56 * data.N1_13 + data.N2_57 * data.N1_14) / 100) * data.N2_48
            //
            // const N31 = data.N4_0 * (data.N2_51 - data.N4_59) / 100 / 72 * data.N1_5 * 1000000
            //
            // const N32 = data.N4_7 * data.N4_11 / 1000 * data.N4_15 *
            //     (data.N4_78 * data.N1_16 + data.N4_80 * data.N1_18 + data.N4_81 * data.N1_19 + data.N4_82 * data.N1_15)
            //     / 100 * 1000
            //
            // const N33 = part4Data[7][2] * part4Data[11][2] / 1000 * 1000 * (part2Data[83][2] * part1Data[14][2] + part2Data[84][2] * part1Data[15][2] + part2Data[85][2] * part1Data[18][2]
            //     + part2Data[86][2] * part1Data[19][2] + part2Data[87][2] * part1Data[15][2]) / 100 * 1000


            // console.log(results)
            response.status(200).json(results[0]);
        }
    );
};

const updateParameters= async (request, response) => {
    const { changedCells } = request.body
    // console.log(changedCells)
    const f = (j) => {
        const arr = []
        for(let i in Object.keys(j)){
            const key = Object.keys(j)[i]
            const s = "N" + key + " = " + j[key]
            arr.push(s)
        }
        return arr
    }

    let sentence = ''

    if(Object.keys(changedCells[0]).length !== 0){
        sentence += "UPDATE DaGuShan.part1Data SET " + f(changedCells[0]).join(', ') + " LIMIT 1;"
    }
    if(Object.keys(changedCells[1]).length !== 0){
        sentence += "UPDATE DaGuShan.part2Data SET " + f(changedCells[1]).join(', ') + " LIMIT 1;"
    }
    if(Object.keys(changedCells[2]).length !== 0){
        sentence += "UPDATE DaGuShan.part3Data SET " + f(changedCells[2]).join(', ') + " LIMIT 1;"
    }
    if(Object.keys(changedCells[3]).length !== 0){
        sentence += "UPDATE DaGuShan.part4Data SET " + f(changedCells[3]).join(', ') + " LIMIT 1;"
    }
    // console.log(sentence)
    if(sentence.length === 0){
        response.status(200).send('更新成功')
        return
    }
    pool.query(sentence,
        (error) => {
            if (error) {
                response.status(400).send('更新失败, 错误信息:' + error)
                throw error;
            }
            // console.log(111)
            response.status(200).send('更新成功')
        }
    );

};

const getCalculatedData = (request, response) => {
    pool.query('select * from DaGuShan.calculatedData where dataTime >= DATE_SUB(NOW(), interval 24 hour) order by dataTime desc;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            const data1 = []
            const data2 = []
            const data3 = []
            const interval = results.length < 28 ? 1: Math.ceil(results.length / 14)
            for(let i = 0; i < results.length ; i += interval){
                const result = results[i]
                // const formattedDate = `${result.dataTime.getMonth()}-${result.dataTime.getDate()} ${result.dataTime.getHours()}:${result.dataTime.getMinutes()}`
                data1.push([result.dataTime, result.N3])
                data2.push([result.dataTime, result.N1])
                data3.push([result.dataTime, result.N2])
            }
            data1.reverse()
            data2.reverse()
            data3.reverse()
            response.status(200).json({
                data1: data1,
                data2: data2,
                data3: data3
            })
        }
    );
}


const getLatestCalculatedData = (request, response) => {
    pool.query('select * from DaGuShan.calculatedData order by dataTime desc limit 1;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }

            response.status(200).json({
                N1: results[0].N1,
                N2: results[0].N2,
                N3: results[0].N3
            })
        }
    );
}

const insertData1 = (request, response) => {
    const { value } = request.body
    // console.log("insertData1: "+value)

    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()

    pool.query('select * from DaGuShan.threshold where id in (13, 14);',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }

            const higherLine = results[0]
            const lowerLine = results[1]

            if(value < lowerLine.beginVal){
                insertWarningThings(value, now, "yr1_oxygen", lowerLine.template.replace("#{result}", value.toFixed(3).toString()))
            }else if(value > higherLine.endVal){
                insertWarningThings(value, now, "yr1_oxygen", higherLine.template.replace("#{result}", value.toFixed(3).toString()))
            }
        }
    );

    pool.query('insert into DaGuShan.oxygenDetection(oxygenContent, testTime)values (?, ?)',
        [value, now],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加氧探头1成功')
        }
    );

    pool.query('select count(*) from DaGuShan.oxygenDetection;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            if(results[0]["count(*)"] > 10000){
                pool.query('delete from DaGuShan.oxygenDetection limit 1;',
                    [],
                    (error) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    );
}

const insertData2 = (request, response) => {
    const { value } = request.body

    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()

    pool.query('select * from DaGuShan.threshold where id in (15, 16);',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }

            const higherLine = results[0]
            const lowerLine = results[1]

            if(value < lowerLine.beginVal){
                insertWarningThings(value, now, "yr2_oxygen", lowerLine.template.replace("#{result}", value.toFixed(3).toString()))
            }else if(value > higherLine.endVal){
                insertWarningThings(value, now, "yr2_oxygen", higherLine.template.replace("#{result}", value.toFixed(3).toString()))
            }
        }
    );

    pool.query('insert into DaGuShan.oxygenDetectiontwo(oxygenContent, testTime)values (?, ?)',
        [value, now],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加氧探头2成功')
        }
    );

    pool.query('select count(*) from DaGuShan.oxygenDetectiontwo;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            if(results[0]["count(*)"] > 10000){
                pool.query('delete from DaGuShan.oxygenDetectiontwo limit 1;',
                    [],
                    (error) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    );
}

// const insertData3 = (request, response) => {
//     const { value } = request.body
//
//     const d = new Date()//日期
//     const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
//     if(value < 970 || value > 980){
//         pool.query('insert into DaGuShan.oxygenDetection(oxygenContent, testTime)values (?, ?); insert into DaGuShan.abnormalData(abnormalValue, abnormalText, testTime)values (?, ?, ?);',
//             [value, now, value, "预热II段温度数据异常", now],
//             (error) => {
//                 if (error) {
//                     throw error;
//                 }
//                 response.status(200).send('添加氧探头3成功，数据异常')
//             }
//         );
//     }else{
//         pool.query('insert into DaGuShan.oxygenDetectionthree(oxygenContent, testTime)values (?, ?)',
//             [value, now],
//             (error) => {
//                 if (error) {
//                     throw error;
//                 }
//                 response.status(200).send('添加氧探头3成功')
//             }
//         );
//     }
// }

const insertFurnaceParameters = (request, response) => {
    const { yt, yw, yr2, yr1, cgd, ggd } = request.body

    // console.log(yt, yw, yr2, yr1, cgd, ggd)

    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()

    pool.query('select * from DaGuShan.threshold where id < 13;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }

            const ggdHigherLine = results[0]
            const ggdLowerLine = results[1]

            // console.log(ggdHigherLine)

            if(ggd < ggdLowerLine.beginVal){
                insertWarningThings(ggd, now, "ggd", ggdLowerLine.template.replace("#{result}", ggd.toFixed(3).toString()))
            }else if(ggd > ggdHigherLine.endVal){
                insertWarningThings(ggd, now, "ggd", ggdHigherLine.template.replace("#{result}", ggd.toFixed(3).toString()))
            }

            const cgdHigherLine = results[2]
            const cgdLowerLine = results[3]

            if(cgd < cgdLowerLine.beginVal){
                insertWarningThings(cgd, now, "cgd", cgdLowerLine.template.replace("#{result}", cgd.toFixed(3).toString()))
            }else if(cgd > cgdHigherLine.endVal){
                insertWarningThings(cgd, now, "cgd", cgdHigherLine.template.replace("#{result}", cgd.toFixed(3).toString()))
            }

            const yr1HigherLine = results[4]
            const yr1LowerLine = results[5]

            if(yr1 < yr1LowerLine.beginVal){
                insertWarningThings(yr1, now, "yr1", yr1LowerLine.template.replace("#{result}", yr1.toFixed(3).toString()))
            }else if(yr1 > yr1HigherLine.endVal){
                insertWarningThings(yr1, now, "yr1", yr1HigherLine.template.replace("#{result}", yr1.toFixed(3).toString()))
            }

            const yr2HigherLine = results[6]
            const yr2LowerLine = results[7]

            if(yr2 < yr2LowerLine.beginVal){
                insertWarningThings(yr2, now, "yr2", yr2LowerLine.template.replace("#{result}", yr2.toFixed(3).toString()))
            }else if(yr2 > yr2HigherLine.endVal){
                insertWarningThings(yr2, now, "yr2", yr2HigherLine.template.replace("#{result}", yr2.toFixed(3).toString()))
            }

            const ywHigherLine = results[8]
            const ywLowerLine = results[9]

            if(yw < ywLowerLine.beginVal){
                insertWarningThings(yw, now, "yw", ywLowerLine.template.replace("#{result}", yw.toFixed(3).toString()))
            }else if(yw > ywHigherLine.endVal){
                insertWarningThings(yw, now, "yw", ywHigherLine.template.replace("#{result}", yw.toFixed(3).toString()))
            }

            const ytHigherLine = results[10]
            const ytLowerLine = results[11]

            if(yt < ytLowerLine.beginVal){
                insertWarningThings(yt, now, "yt", ytLowerLine.template.replace("#{result}", yt.toFixed(3).toString()))
            }else if(yt > ytHigherLine.endVal){
                insertWarningThings(yt, now, "yt", ytHigherLine.template.replace("#{result}", yt.toFixed(3).toString()))
            }


        }
    );


    pool.query('insert into DaGuShan.furnace(addTime, yt, yw, yr2, yr1, cgd, ggd)values (?, ?, ?, ?, ?, ?, ?)',
        [now, yt, yw, yr2, yr1, cgd, ggd],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加炉内系数成功')
        }
    );

    pool.query('select count(*) from DaGuShan.furnace;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            if(results[0]["count(*)"] > 10000){
                pool.query('delete from DaGuShan.furnace limit 1;',
                    [],
                    (error) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    );
}


const getFurnaceRadarChart = async (request, response) => {
    pool.query(
        'select addTime, yr1, yr2, yt, yw, cgd, ggd from DaGuShan.furnace order by id desc limit 1;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const data = result[0]
            // console.log(data)

            const initialData = [data.yr1, data.yr2, data.yt, data.yw, data.cgd, data.ggd]
            // const modifiedData = [data.yr1_new, data.yr2_new, data.yt_new, data.yw_new, data.cgd_new, data.ggd_new]

            const temp = {
                initialData: initialData,
                // modifiedData: modifiedData,
                addTime: data.addTime
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};

const getFurnaceSicLineChart = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //  console.log('getFurnaceRadarChart: ')
    pool.query(
        'select addTime, yr1, yr2, yt, yw, cgd, ggd from DaGuShan.furnace order by addTime desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }

            const yr1Data = []
            const yr2Data = []
            const ytData = []
            const ywData = []
            const cgdData = []
            const ggdData = []

            for(let i = 0; i < result.length; i++){
                const data = result[i]
                const addTime = data.addTime

                yr1Data.push({
                    value: [
                        addTime,
                        data.yr1
                    ]
                })

                yr2Data.push({
                    value: [
                        addTime,
                        data.yr2
                    ]
                })

                ytData.push({
                    value: [
                        addTime,
                        data.yt
                    ]
                })

                ywData.push({
                    value: [
                        addTime,
                        data.yw
                    ]
                })

                cgdData.push({
                    value: [
                        addTime,
                        data.cgd
                    ]
                })

                ggdData.push({
                    value: [
                        addTime,
                        data.ggd
                    ]
                })
            }

            yr1Data.reverse()
            yr2Data.reverse()
            ytData.reverse()
            ywData.reverse()
            cgdData.reverse()
            ggdData.reverse()

            const temp = {
                yr1Data: yr1Data,
                yr2Data: yr2Data,
                ytData: ytData,
                ywData: ywData,
                cgdData: cgdData,
                ggdData: ggdData,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};

const getFurnaceMaterial = async (request, response) => {
    response.status(200).json({
        addTime: new Date(),
        aq: 1,
        prt: 1,
        dc: 1
    });
    // console.log('getPart1Parameters: ')
    // pool.query(
    //     'select addTime, aq, prt, dc from DaGuShan.furnace order by id desc limit 1;',
    //     (error, results) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(results)
    //         response.status(200).json(results[0]);
    //     }
    // );
};

// const getFurnaceDbzts = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, dbzts, dbzts_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].dbzts
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].dbzts_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].dbzts,
//                 currentNewVal: result[0].dbzts_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnaceCql = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, cql, cql_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].cql
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].cql_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].cql,
//                 currentNewVal: result[0].cql_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnaceFll = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, fll, fll_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].fll
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].fll_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].fll,
//                 currentNewVal: result[0].fll_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnaceHhlsf = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, hhlsf, hhlsf_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].hhlsf
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].hhlsf_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].hhlsf,
//                 currentNewVal: result[0].hhlsf_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnaceQhyxsj = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, qhyxsj, qhyxsj_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].qhyxsj
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].qhyxsj_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].qhyxsj,
//                 currentNewVal: result[0].qhyxsj_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnacePrt = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, prt, prt_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].prt
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].prt_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].prt,
//                 currentNewVal: result[0].prt_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnaceAq = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, aq, aq_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].aq
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].aq_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].aq,
//                 currentNewVal: result[0].aq_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };
//
//
// const getFurnaceDc = async (request, response) => {
//     // console.log('getFurnace: '+request.body)
//     //console.log('getFurnace: ')
//     pool.query(
//         'select addTime, dc, dc_new from DaGuShan.furnace order by id desc limit 50;',
//         (error, result) => {
//             if (error) {
//                 throw error;
//             }
//             // console.log(result)
//             const initialData = []
//             const modifiedData = []
//
//             for (let i = result.length - 1; i >= 0; i--) {
//                 initialData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].dc
//                     ]
//                 })
//                 modifiedData.push({
//                     value: [
//                         result[i].addTime,
//                         result[i].dc_new
//                     ]
//                 })
//             }
//
//             const temp = {
//                 initialData: initialData,
//                 modifiedData: modifiedData,
//                 currentVal: result[0].dc,
//                 currentNewVal: result[0].dc_new
//             }
//             // console.log(temp.initialData)
//
//             response.status(200).json(temp);
//         }
//     );
// };


const getFurnaceYt = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    // pool.query(
    //     'select addTime, yt, yt_new from DaGuShan.furnace order by id desc limit 50;',
    //     (error, result) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(result)
    //         const initialData = []
    //         const modifiedData = []
    //
    //         for (let i = result.length - 1; i >= 0; i--) {
    //             initialData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].yt
    //                 ]
    //             })
    //             modifiedData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].yt_new
    //                 ]
    //             })
    //         }
    //
    //         const temp = {
    //             initialData: initialData,
    //             modifiedData: modifiedData,
    //             currentVal: result[0].yt,
    //             currentNewVal: result[0].yt_new
    //         }
    //         // console.log(temp.initialData)
    //
    //         response.status(200).json(temp);
    //     }
    // );

    pool.query(
        'select addTime, yt from DaGuShan.furnace order by id desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            const initialData = []

            for (let i = 0; i < result.length; i++) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].yt
                    ]
                })
            }
            initialData.reverse()

            const temp = {
                initialData: initialData,
                currentVal: result[0].yt,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};


const getFurnaceYw = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    // pool.query(
    //     'select addTime, yw, yw_new from DaGuShan.furnace order by id desc limit 50;',
    //     (error, result) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(result)
    //         const initialData = []
    //         const modifiedData = []
    //
    //         for (let i = result.length - 1; i >= 0; i--) {
    //             initialData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].yw
    //                 ]
    //             })
    //             modifiedData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].yw_new
    //                 ]
    //             })
    //         }
    //
    //         const temp = {
    //             initialData: initialData,
    //             modifiedData: modifiedData,
    //             currentVal: result[0].yw,
    //             currentNewVal: result[0].yw_new
    //         }
    //         // console.log(temp.initialData)
    //
    //         response.status(200).json(temp);
    //     }
    // );

    pool.query(
        'select addTime, yw from DaGuShan.furnace order by id desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            for (let i = 0; i < result.length; i++) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].yw
                    ]
                })
            }
            initialData.reverse()

            const temp = {
                initialData: initialData,
                currentVal: result[0].yw,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};


const getFurnaceYr2 = async (request, response) => {
    pool.query(
        'select addTime, yr2 from DaGuShan.furnace order by id desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            for (let i = 0; i < result.length; i++) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].yr2
                    ]
                })
            }
            initialData.reverse()

            const temp = {
                initialData: initialData,
                currentVal: result[0].yr2
            }

            response.status(200).json(temp);
        }
    );
};


const getFurnaceYr1 = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    // pool.query(
    //     'select addTime, yr1, yr1_new from DaGuShan.furnace order by id desc limit 50;',
    //     (error, result) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(result)
    //         const initialData = []
    //         const modifiedData = []
    //
    //         for (let i = result.length - 1; i >= 0; i--) {
    //             initialData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].yr1
    //                 ]
    //             })
    //             modifiedData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].yr1_new
    //                 ]
    //             })
    //         }
    //
    //         const temp = {
    //             initialData: initialData,
    //             modifiedData: modifiedData,
    //             currentVal: result[0].yr1,
    //             currentNewVal: result[0].yr1_new
    //         }
    //         // console.log(temp.initialData)
    //
    //         response.status(200).json(temp);
    //     }
    // );

    pool.query(
        'select addTime, yr1 from DaGuShan.furnace order by id desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            // for (let i = result.length - 1; i >= 0; i--) {
            //     initialData.push({
            //         value: [
            //             result[i].addTime,
            //             result[i].yr1
            //         ]
            //     })
            // }

            for (let i = 0; i < result.length; i++) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].yr1
                    ]
                })
            }
            initialData.reverse()

            const temp = {
                initialData: initialData,
                currentVal: result[0].yr1,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};


const getFurnaceCgd = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    // pool.query(
    //     'select addTime, cgd, cgd_new from DaGuShan.furnace order by id desc limit 50;',
    //     (error, result) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(result)
    //         const initialData = []
    //         const modifiedData = []
    //
    //         for (let i = result.length - 1; i >= 0; i--) {
    //             initialData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].cgd
    //                 ]
    //             })
    //             modifiedData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].cgd_new
    //                 ]
    //             })
    //         }
    //
    //         const temp = {
    //             initialData: initialData,
    //             modifiedData: modifiedData,
    //             currentVal: result[0].cgd,
    //             currentNewVal: result[0].cgd_new
    //         }
    //         // console.log(temp.initialData)
    //
    //         response.status(200).json(temp);
    //     }
    // );

    pool.query(
        'select addTime, cgd from DaGuShan.furnace order by id desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            for (let i = 0; i < result.length; i++) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].cgd
                    ]
                })
            }
            initialData.reverse()

            const temp = {
                initialData: initialData,
                currentVal: result[0].cgd,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};


const getFurnaceGgd = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    // pool.query(
    //     'select addTime, ggd, ggd_new from DaGuShan.furnace order by id desc limit 50;',
    //     (error, result) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(result)
    //         const initialData = []
    //         const modifiedData = []
    //
    //         for (let i = result.length - 1; i >= 0; i--) {
    //             initialData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].ggd
    //                 ]
    //             })
    //             modifiedData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].ggd_new
    //                 ]
    //             })
    //         }
    //
    //         const temp = {
    //             initialData: initialData,
    //             modifiedData: modifiedData,
    //             currentVal: result[0].ggd,
    //             currentNewVal: result[0].ggd_new
    //         }
    //         // console.log(temp.initialData)
    //
    //         response.status(200).json(temp);
    //     }
    // );

    pool.query(
        'select addTime, ggd from DaGuShan.furnace order by id desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            for (let i = 0; i < result.length; i++) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].ggd
                    ]
                })
            }
            initialData.reverse()

            const temp = {
                initialData: initialData,
                currentVal: result[0].ggd,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};

const getThreshold = async (request, response) => {

    //console.log('getFurnace: ')
    pool.query(
        'select * from DaGuShan.threshold;',
        (error, result) => {
            if (error) {
                throw error;
            }

            response.status(200).json(result);
        }
    );
};

const addThreshold = (request, response) => {
    const { elementName, norm, beginVal, endVal, template, otherNorm } = request.body

    pool.query('insert into DaGuShan.threshold(elementName, norm, beginVal, endVal, template, otherNorm)values (?, ?, ?, ?, ?, ?)',
        [elementName, norm, beginVal, endVal, template, otherNorm],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加阈值管理系数成功')
        }
    );
}

const updateThreshold  = async (request, response) => {

    const { elementName, norm, beginVal, endVal, template, otherNorm, id } = request.body

    pool.query('UPDATE DaGuShan.threshold SET elementName = ?,norm = ?,beginVal = ?,endVal = ?,template = ?,otherNorm = ? WHERE id = ?',
        [elementName, norm, beginVal, endVal, template, otherNorm, id],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('更新成功')
        }
    );
};


const deleteThreshold = (request, response) => {

    const { id } = request.body;

    pool.query("DELETE FROM DaGuShan.threshold WHERE id = ?;",
        [id],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('删除成功')
        });
};

const addCoal = (request, response) => {
    const { coalValue } = request.body

    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()

    pool.query('select * from DaGuShan.threshold where id in (17, 18);',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }

            const higherLine = results[0]
            const lowerLine = results[1]

            if(coalValue < lowerLine.beginVal){
                insertWarningThings(coalValue, now, "pml", lowerLine.template.replace("#{result}", coalValue.toFixed(3).toString()))
            }else if(coalValue > higherLine.endVal){
                insertWarningThings(coalValue, now, "pml", higherLine.template.replace("#{result}", coalValue.toFixed(3).toString()))
            }
        }
    );

    // pool.query('select * from DaGuShan.threshold where id < 13;',
    //     [],
    //     (error, results) => {
    //         if (error) {
    //             throw error;
    //         }
    //
    //         const ggdHigherLine = results[0]
    //         const ggdLowerLine = results[1]
    //
    //         if(ggd < ggdLowerLine.beginVal){
    //             insertWarningThings(ggd, now, "ggd", ggdLowerLine.template.replace("#{result}", ggd.toFixed(3).toString()))
    //         }else if(ggd > ggdHigherLine.endVal){
    //             insertWarningThings(ggd, now, "ggd", ggdHigherLine.template.replace("#{result}", ggd.toFixed(3).toString()))
    //         }
    //     }
    // );


    pool.query('insert into DaGuShan.coalInjectionQuantity(addTime, coalValue)values (?, ?)',
        [now, coalValue],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加喷煤量成功')
        }
    );

    pool.query('select count(*) from DaGuShan.coalInjectionQuantity;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            if(results[0]["count(*)"] > 10000){
                pool.query('delete from DaGuShan.coalInjectionQuantity limit 1;',
                    [],
                    (error) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    );
}


const getCoal = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    pool.query(
        'select addTime, coalValue from DaGuShan.coalInjectionQuantity where addTime >= now() - interval 4 hour order by addTime desc limit 50;',
        (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result)
            const initialData = []

            if(result.length === 0){
                const temp = {
                    initialData: [],
                    currentVal: 0,
                }

                response.status(200).json(temp);

                return
            }

            for (let i = result.length - 1; i >= 0; i--) {
                initialData.push({
                    value: [
                        result[i].addTime,
                        result[i].coalValue
                    ]
                })
            }

            const temp = {
                initialData: initialData,
                currentVal: result[0].coalValue,
            }
            // console.log(temp.initialData)

            response.status(200).json(temp);
        }
    );
};

const getCoalSingle = async (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    pool.query(
        'select addTime, coalValue from DaGuShan.coalInjectionQuantity order by addTime desc limit 1;',
        (error, result) => {
            if (error) {
                throw error;
            }
            response.status(200).json(result[0]);
        }
    );
};

const getCoalDay = async (request, response) => {
    pool.query(
        'select addTime, coalValue from DaGuShan.coalInjectionQuantity WHERE addTime >= DATE_SUB(NOW(), INTERVAL 1 DAY) AND addTime < NOW() ORDER BY addTime;',
        (error, result) => {
            if (error) {
                throw error;
            }

            const temp = []
            if(result.length <= 12){
                for(let i = 0; i < result.length; i++){
                    const data = result[i]
                    const formattedDate = `${data.addTime.getMonth()}-${data.addTime.getDate()} ${data.addTime.getHours()}:${data.addTime.getMinutes()}`
                    // console.log(data)
                    temp.push({
                        value: [
                            formattedDate,
                            data.coalValue
                        ]
                    })
                }
            }else{
                const step = Math.floor(result.length / 12)
                // console.log(step)
                for(let i = 0; i < result.length; i += step){
                    const data = result[i]
                    const formattedDate = `${data.addTime.getMonth()}-${data.addTime.getDate()} ${data.addTime.getHours()}:${data.addTime.getMinutes()}`
                    // console.log(i)
                    temp.push({
                        value: [
                            formattedDate,
                            data.coalValue
                        ]
                    })
                }
            }
            //
            // for(let i = 0; i < results.length ; i += interval){
            //     const result = results[i]
            //     const formattedDate = `${result.dataTime.getMonth()}-${result.dataTime.getDate()} ${result.dataTime.getHours()}:${result.dataTime.getMinutes()}`
            //     data1.push([formattedDate, result.N3])
            //     data2.push([formattedDate, result.N1])
            //     data3.push([formattedDate, result.N2])
            // }
            // data1.reverse()
            // data2.reverse()
            // data3.reverse()

            response.status(200).json(temp);
        }
    );
};

const getCoalMonth = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SET @a = -1; SELECT * FROM DaGuShan.coalInjectionQuantity where (@a := @a + 1) % 6 = 0 AND TIMESTAMPDIFF(MONTH, addTime, now()) < 1 order by addTime;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const data = results[1]
            const temp = []
            for (let i = 0; i < data.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(data[i].addTime),
                        data[i].coalValue
                    ]
                })
            }
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//喷煤监控量

const getCoalYear = async (request, response) => {
    //console.log('getAllOxygenData: '+request.body)
    pool.query(
        "SET @a = -1; SELECT * FROM DaGuShan.coalInjectionQuantity where (@a := @a + 1) % 6 = 0 AND TIMESTAMPDIFF(YEAR, addTime, now()) < 1 order by addTime;",
        (error, results) => {
            if (error) {
                throw error;
            }

            const data = results[1]
            const temp = []
            for (let i = 0; i < data.length; i ++) {
                temp.push({
                    value: [
                        Date.parse(data[i].addTime),
                        data[i].coalValue
                    ]
                })
            }
            // console.log(temp)
            response.status(200).json(temp);
        }
    );
};//喷煤监控

const insertWarningThings = (warningValue, warningTime, warningType, warningText) => {
    // const { warningValue, warningType, ifMore } = request.body

    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()


    pool.query('insert into DaGuShan.warningThings( warningValue, warningTime, warningType, warningText)values (?, ?, ?, ?)',
        [warningValue, now, warningType, warningText],
        (error) => {
            if (error) {
                throw error;
            }
            // response.status(200).send('添加错误信息成功')
        }
    );

    pool.query('select count(*) from DaGuShan.warningThings;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            if(results[0]["count(*)"] > 10000){
                pool.query('delete from DaGuShan.warningThings limit 1;',
                    [],
                    (error) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    );
}

const getWarningThings = (request, response) => {
    const { warningTypeList } = request.body    //

    pool.query('select * from DaGUShan.warningThings where warningType in (?) order by warningTime desc;',
        [warningTypeList],
        (error, result) => {
            if (error) {
                throw error;
            }
            response.status(200).json(result)
        }
    );
}

const getAllWarningThings = (request, response) => {

    pool.query('select * from DaGUShan.warningThings order by warningTime desc limit 50;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            const temp = []
            for(let i in results){
                const result = results[i]
                const time = result.warningTime
                const formattedTime = `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

                temp.push({
                    warningTime: formattedTime,
                    warningText: result.warningText
                })
            }
            temp.reverse()
            response.status(200).json(temp)
        }
    );
}

const addHeatMapPoints = (request, response) => {
    const { points } = request.body

    const values = points.x_location.map((x, i) => `(${x}, ${points.y_location[i]}, ${points.result[i]})`);
    const joinedValues = values.join(',');

    // console.log(joinedValues);
    console.log(1)


    pool.query('delete from DaGuShan.heatMapPoints; insert into DaGuShan.heatMapPoints(points)values ?;',
        [joinedValues],
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('添加热力图成功')
        }
    );
}

const getHeatMapPoints = (request, response) => {
    // console.log(1)
    pool.query('select * from DaGuShan.heatMapPoints;',
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            const data = []
            // const xData = []
            // const yData = []
            // const values = []
            for(let i in results){
                // xData.push(results[i].x)
                // yData.push(results[i].y)
                // values.push(results[i].result)
                data.push([results[i].x * 10, results[i].y * 12 + 40, results[i].result])
                data.push([results[i].x * 10, results[i].y * (-12) + 40, results[i].result])
            }

            response.status(200).json({data: data})
        }
    );
}

const getHeatMapColumn = (request, response) => {
    // console.log('getFurnace: '+request.body)
    //console.log('getFurnace: ')
    // pool.query(
    //     'select addTime, cgd, cgd_new from DaGuShan.furnace order by id desc limit 50;',
    //     (error, result) => {
    //         if (error) {
    //             throw error;
    //         }
    //         // console.log(result)
    //         const initialData = []
    //         const modifiedData = []
    //
    //         for (let i = result.length - 1; i >= 0; i--) {
    //             initialData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].cgd
    //                 ]
    //             })
    //             modifiedData.push({
    //                 value: [
    //                     result[i].addTime,
    //                     result[i].cgd_new
    //                 ]
    //             })
    //         }
    //
    //         const temp = {
    //             initialData: initialData,
    //             modifiedData: modifiedData,
    //             currentVal: result[0].cgd,
    //             currentNewVal: result[0].cgd_new
    //         }
    //         // console.log(temp.initialData)
    //
    //         response.status(200).json(temp);
    //     }
    // );

    pool.query(
        'select * from DaGuShan.heatMapColumn order by addTime desc limit 1;',
        (error, results) => {
            if (error) {
                throw error;
            }
            const result = results[0]
            const temp = {
                time: result.addTime,
                data: [result["yt"], result["4m"], result["8m"], result["12m"], result["16m"], result["20m"],
                    result["24m"], result["28m"], result["32m"], result["36m"], result["yw"]]
            }
            response.status(200).json(temp);
        }
    );
};

/*
const addWarningThingsByParams = (warningText, warningValue, warningType) => {

    const d = new Date()//日期
    const now = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()


    pool.query('insert into DaGuShan.warningThings(warningText, warningValue, warningTime, warningType)values (?, ?, ?, ?)',
        [warningText, warningValue, now, warningType],
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
}

 */


module.exports ={
    pool,
    getAllMaterialsBentonite,
    getAllMaterialsIronOrePowder,
    getAllMaterialsFlux,
    getAllMaterialsCoalinjection,

    addMaterialsBentonite,
    addMaterialsIronOrePowder,
    addMaterialsFlux,
    addMaterialsCoalinjection,

    updateMaterialsBentonite,
    updateMaterialsIronOrePowder,
    updateMaterialsFlux,
    updateMaterialsCoalinjection,

    deleteMaterialsBentonite,
    deleteMaterialsIronOrePowder,
    deleteMaterialsFlux,
    deleteMaterialsCoalinjection,

    deleteAllSelected,
    checkAllSelected,
    search,

    randomData,
    getDayOxygenData,
    getMonthOxygenData,
    getYearOxygenData,
    getSingleOxygenData,
    getRealTimeOxygenData,

    randomData2,
    getDayOxygenData2,
    getMonthOxygenData2,
    getYearOxygenData2,
    getSingleOxygenData2,
    getRealTimeOxygenData2,

    randomData3,
    getOxygenData3,
    // getDayOxygenData3,
    // getMonthOxygenData3,
    // getYearOxygenData3,
    getSingleOxygenData3,

    getCurrentVals,

    getRangeOxygenData,

    createExcel,

    getPart1Parameters,
    getPart2Parameters,
    getPart3Parameters,
    getPart4Parameters,
    getCalculatedData,
    getLatestCalculatedData,
    getAllParameters,
    updateParameters,
    getLbjParameters,
    getHzyParameters,
    getHljParameters,
    getLhhParameters,

    insertData1,
    insertData2,
    // insertData3,

    insertFurnaceParameters,
    getFurnaceRadarChart,
    getFurnaceSicLineChart,
    getFurnaceMaterial,
    // getFurnaceDbzts,
    // getFurnaceCql,
    // getFurnaceFll,
    // getFurnaceHhlsf,
    // getFurnaceQhyxsj,
    // getFurnacePrt,
    // getFurnaceAq,
    // getFurnaceDc,
    getFurnaceYt,
    getFurnaceYw,
    getFurnaceYr2,
    getFurnaceYr1,
    getFurnaceCgd,
    getFurnaceGgd,
    // getFurnaceDbcl,
    // getFurnaceDh,
    // getFurnaceMfld,
    getThreshold,
    addThreshold,
    updateThreshold,
    deleteThreshold,

    addCoal,
    getCoalSingle,
    getCoal,
    getCoalDay,
    getCoalMonth,
    getCoalYear,

    insertWarningThings,
    getWarningThings,
    getAllWarningThings,

    addHeatMapPoints,
    getHeatMapPoints,
    getHeatMapColumn
}