const express = require('express')
const app = express()
const port = 3001
const bodyParser = require("body-parser");
const daGuShan = require('./dagushan');
const cors = require('cors');
const pool = require("./store");
// const pool = require("./store");

// 使用body-parser作为中间件来解析request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({limit: "25mb", extended: true}))
app.use(express.urlencoded({limit: "25mb", extended: true}))
app.use(cors())

// app.all("*",function(req,res,next){
//   //设置允许跨域的域名，*代表允许任意域名跨域
//   res.header("Access-Control-Allow-Origin","*");
//   });

app.use(express.json());


app.use('/api/login', (req, res) => {
 // console.log('login in')
  const {username, password} = req.body
    // console.log(username, password)
  if(username === 'password' && password === 'password'){
    res.send({
      token: 'login successfully'
    });
  }else{
    res.send({
      token: 'failed to login'
    });
  }
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  //这段仅仅为了方便返回json而已
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 监听到请求
app.get('/api/v1/materials/0', daGuShan.getAllMaterialsBentonite);
app.get('/api/v1/materials/1', daGuShan.getAllMaterialsIronOrePowder);
app.get('/api/v1/materials/2', daGuShan.getAllMaterialsFlux);
app.get('/api/v1/materials/3', daGuShan.getAllMaterialsCoalinjection);

app.post('/api/v1/add_materials/0', daGuShan.addMaterialsBentonite);
app.post('/api/v1/add_materials/1', daGuShan.addMaterialsIronOrePowder);
app.post('/api/v1/add_materials/2', daGuShan.addMaterialsFlux);
app.post('/api/v1/add_materials/3', daGuShan.addMaterialsCoalinjection);

app.put('/api/v1/update_materials/0', daGuShan.updateMaterialsBentonite)
app.put('/api/v1/update_materials/1', daGuShan.updateMaterialsIronOrePowder)
app.put('/api/v1/update_materials/2', daGuShan.updateMaterialsFlux)
app.put('/api/v1/update_materials/3', daGuShan.updateMaterialsCoalinjection);

app.delete('/api/v1/delete_materials/0', daGuShan.deleteMaterialsBentonite)
app.delete('/api/v1/delete_materials/1', daGuShan.deleteMaterialsIronOrePowder)
app.delete('/api/v1/delete_materials/2', daGuShan.deleteMaterialsFlux)
app.delete('/api/v1/delete_materials/3', daGuShan.deleteMaterialsCoalinjection);

app.get('/api/v1/oxygen/real-time', daGuShan.getRealTimeOxygenData);
app.get('/api/v1/oxygen/day', daGuShan.getDayOxygenData);
app.get('/api/v1/oxygen/month', daGuShan.getMonthOxygenData);
app.get('/api/v1/oxygen/year', daGuShan.getYearOxygenData);
app.get('/api/v1/oxygen-single', daGuShan.getSingleOxygenData);

app.get('/api/v1/oxygen2/real-time', daGuShan.getRealTimeOxygenData2);
app.get('/api/v1/oxygen2/day', daGuShan.getDayOxygenData2);
app.get('/api/v1/oxygen2/month', daGuShan.getMonthOxygenData2);
app.get('/api/v1/oxygen2/year', daGuShan.getYearOxygenData2);
app.get('/api/v1/oxygen-single2', daGuShan.getSingleOxygenData2);

// app.get('/api/v1/oxygen3', daGuShan.getOxygenData3);
// app.get('/api/v1/oxygen3/day', daGuShan.getDayOxygenData3);
// app.get('/api/v1/oxygen3/month', daGuShan.getMonthOxygenData3);
// app.get('/api/v1/oxygen3/year', daGuShan.getYearOxygenData3);
// app.get('/api/v1/oxygen-single3', daGuShan.getSingleOxygenData3);

app.get('/api/v1/oxygen/current', daGuShan.getCurrentVals);

app.post('/api/v1/oxygen-range', daGuShan.getRangeOxygenData);

app.delete('/api/v1/delete_all_selected', daGuShan.deleteAllSelected)
app.put('/api/v1/check_all_selected', daGuShan.checkAllSelected)

app.post('/api/v1/search', daGuShan.search);
app.post('/api/v1/createExcel', daGuShan.createExcel);

app.get('/api/v1/part/1', daGuShan.getPart1Parameters);
app.get('/api/v1/part/2', daGuShan.getPart2Parameters);
app.get('/api/v1/part/3', daGuShan.getPart3Parameters);
app.get('/api/v1/part/4', daGuShan.getPart4Parameters);
app.get('/api/v1/part/all', daGuShan.getAllParameters); // 获取四个表里所有参数
// app.post('/api/v1/part/calculated', daGuShan.insertCalculatedData)
app.get('/api/v1/part/calculated', daGuShan.getCalculatedData)
app.get('/api/v1/part/calculated/single', daGuShan.getLatestCalculatedData)
app.get('/api/v1/part/lbj', daGuShan.getLbjParameters);
app.get('/api/v1/part/hzy', daGuShan.getHzyParameters);
app.get('/api/v1/part/hlj', daGuShan.getHljParameters);
app.get('/api/v1/part/lhh', daGuShan.getLhhParameters);

app.put('/api/v1/parameters', daGuShan.updateParameters);

app.post('/api/v1/add_oxygen1', daGuShan.insertData1);
app.post('/api/v1/add_oxygen2', daGuShan.insertData2);
// app.post('/api/v1/add_oxygen3', daGuShan.insertData3);


app.post('/api/v1/furnace', daGuShan.insertFurnaceParameters)

app.get('/api/v1/furnace/radar', daGuShan.getFurnaceRadarChart)
app.get('/api/v1/furnace/sixLine', daGuShan.getFurnaceSicLineChart)
app.get('/api/v1/furnace/material', daGuShan.getFurnaceMaterial)

// app.get('/api/v1/furnace/dbzts', daGuShan.getFurnaceDbzts)
// app.get('/api/v1/furnace/cql', daGuShan.getFurnaceCql)
// app.get('/api/v1/furnace/fll', daGuShan.getFurnaceFll)
// app.get('/api/v1/furnace/hhlsf', daGuShan.getFurnaceHhlsf)
// app.get('/api/v1/furnace/qhyxsj', daGuShan.getFurnaceQhyxsj)
// app.get('/api/v1/furnace/prt', daGuShan.getFurnacePrt)
// app.get('/api/v1/furnace/aq', daGuShan.getFurnaceAq)
// app.get('/api/v1/furnace/dc', daGuShan.getFurnaceDc)
app.get('/api/v1/furnace/yt', daGuShan.getFurnaceYt)
app.get('/api/v1/furnace/yw', daGuShan.getFurnaceYw)
app.get('/api/v1/furnace/yr2', daGuShan.getFurnaceYr2)
app.get('/api/v1/furnace/yr1', daGuShan.getFurnaceYr1)
app.get('/api/v1/furnace/cgd', daGuShan.getFurnaceCgd)
app.get('/api/v1/furnace/ggd', daGuShan.getFurnaceGgd)
// app.get('/api/v1/furnace/dbcl', daGuShan.getFurnaceDbcl)
// app.get('/api/v1/furnace/dh', daGuShan.getFurnaceDh)
// app.get('/api/v1/furnace/mfld', daGuShan.getFurnaceMfld)

app.get('/api/v1/threshold', daGuShan.getThreshold)
app.post('/api/v1/threshold', daGuShan.addThreshold);
app.put('/api/v1/threshold', daGuShan.updateThreshold)
app.delete('/api/v1/threshold', daGuShan.deleteThreshold)

app.get('/api/v1/coal', daGuShan.getCoal)
app.post('/api/v1/coal', daGuShan.addCoal);
app.get('/api/v1/coal/single', daGuShan.getCoalSingle)
app.get('/api/v1/coalDay', daGuShan.getCoalDay)
app.get('/api/v1/coalMonth', daGuShan.getCoalMonth);
app.get('/api/v1/coalYear', daGuShan.getCoalYear)

// app.post('/api/v1/addWarning', daGuShan.insertWarningThings)
app.post('/api/v1/warning', daGuShan.getWarningThings)
app.get('/api/v1/warning', daGuShan.getAllWarningThings)

// app.post('/api/v1/heatMap', daGuShan.addHeatMapPoints)
app.get('/api/v1/heatMap', daGuShan.getHeatMapPoints)
app.get('/api/v1/heatMap/column', daGuShan.getHeatMapColumn)

app.get('/api/test', (req, res) => {
  res.json({
    code: 0,
    message: '成功',
    content: '接口调用成功',
  })
})

// 监听3001端口
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//
function intervalFunc() {
    pool.query('insert into DaGuShan.calculatedData(N1, N2, N3, N4, dataTime) ' +
        'select (((part2Data.N0 * (part2Data.N49 / 100 * part1Data.N6 + (100 - part2Data.N49) / 100 *\n' +
        '        (part2Data.N50 * part1Data.N7 + part2Data.N51 * part1Data.N8 + part2Data.N52 * part1Data.N9\n' +
        '            + part2Data.N53 * part1Data.N10 + part2Data.N54 * part1Data.N11 + part2Data.N55 * part1Data.N12\n' +
        '            + part2Data.N56 * part1Data.N13 + part2Data.N57 * part1Data.N14) / 100) * part2Data.N48)\n' +
        ' + \n' +
        '(part4Data.N0 * (part2Data.N51 - part4Data.N59) / 100 / 72 * part1Data.N5 * 1000000)\n' +
        ' + \n' +
        '(\n' +
        '(part4Data.N3 * 1.1845/1000*0.92)\n' +
        ' * part4Data.N15 * (part4Data.N78 * part1Data.N16 + part4Data.N80 * part1Data.N18\n' +
        '        + part4Data.N81 * part1Data.N19 + part4Data.N82 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part2Data.N10 * part2Data.N11 / 1000)\n' +
        ' * 1000 * (part2Data.N83 * part1Data.N16 + part2Data.N84 * part1Data.N17 + part2Data.N85 * part1Data.N18\n' +
        '        + part2Data.N86 * part1Data.N19 + part2Data.N87 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part4Data.N3 * 1.1845/1000*0.92)\n' +
        ' * part4Data.N14 * (part4Data.N71 * part1Data.N16 + part4Data.N74 * part1Data.N19\n' +
        '        + part4Data.N75 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part3Data.N3 * 1.328466 / 1000)\n' +
        ' * part3Data.N5 * (part3Data.N14 * part1Data.N16 + part3Data.N15 * part1Data.N17\n' +
        '        + part3Data.N18 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part2Data.N10 * part2Data.N11 / 1000 - part3Data.N3 * 1.328466 / 1000)\n' +
        ' * 25 * (part2Data.N66 * part1Data.N16 + part2Data.N67 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part3Data.N1 * part4Data.N0 * 28181.1 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part4Data.N1 * 1.1845/1000*0.89)\n' +
        ' * part4Data.N13 * (part4Data.N66 * part1Data.N16 + part4Data.N70 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part3Data.N0 * 1.1845 / 1000)\n' +
        ' * part3Data.N4 * (part3Data.N19 * part1Data.N16 + part3Data.N20 * part1Data.N15) / 100 * 1000)\n' +
        ' + (\n' +
        ' (part4Data.N1 * 1.1845/1000)\n' +
        '  * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000)\n' +
        '  + \n' +
        '   (\n' +
        '    (part4Data.N2 * 1.1845/1000)\n' +
        '    * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000)\n' +
        '   + \n' +
        '    ((part4Data.N3 * 1.1845/1000) * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000)\n' +
        '    + \n' +
        '    ((part4Data.N4 * 1.1845/1000) * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000)\n' +
        '    )\n' +
        ' - ((part2Data.N1 * part2Data.N2 / 1000) * part2Data.N3 * (part2Data.N68 * part1Data.N16 + part2Data.N69 * part1Data.N17 + part2Data.N70 * part1Data.N18\n' +
        '        + part2Data.N71 * part1Data.N19 + part2Data.N72 * part1Data.N15) / 100 * 1000)\n' +
        '         - \n' +
        '          ((part2Data.N4 * part2Data.N5 / 1000) * part2Data.N6 * (part2Data.N73 * part1Data.N16 + part2Data.N74 * part1Data.N17 + part2Data.N75 * part1Data.N18\n' +
        '        + part2Data.N76 * part1Data.N19 + part2Data.N77 * part1Data.N15) / 100 * 1000)\n' +
        '          - \n' +
        '           ((part2Data.N7 * part2Data.N8 / 1000) * part2Data.N9 * (part2Data.N78 * part1Data.N16 + part2Data.N79 * part1Data.N17 + part2Data.N80 * part1Data.N18\n' +
        '        + part2Data.N81 * part1Data.N19 + part2Data.N82 * part1Data.N15) / 100 * 1000)\n' +
        '           - \n' +
        '           ( (part4Data.N4 * 1.1845/1000*0.94) * part4Data.N16 * (part4Data.N83 * part1Data.N16 + part4Data.N85 * part1Data.N18\n' +
        '        + part4Data.N86 * part1Data.N19 + part4Data.N87 * part1Data.N15) / 100 * 1000)\n' +
        '           ) / \n' +
        '((part2Data.N0 * (part2Data.N49 / 100 * part1Data.N6 + (100 - part2Data.N49) / 100 *\n' +
        '        (part2Data.N50 * part1Data.N7 + part2Data.N51 * part1Data.N8 + part2Data.N52 * part1Data.N9\n' +
        '            + part2Data.N53 * part1Data.N10 + part2Data.N54 * part1Data.N11 + part2Data.N55 * part1Data.N12\n' +
        '            + part2Data.N56 * part1Data.N13 + part2Data.N57 * part1Data.N14) / 100) * part2Data.N48)\n' +
        ' + \n' +
        '(part4Data.N0 * (part2Data.N51 - part4Data.N59) / 100 / 72 * part1Data.N5 * 1000000)\n' +
        ' + \n' +
        '(\n' +
        '(part4Data.N3 * 1.1845/1000*0.92)\n' +
        ' * part4Data.N15 * (part4Data.N78 * part1Data.N16 + part4Data.N80 * part1Data.N18\n' +
        '        + part4Data.N81 * part1Data.N19 + part4Data.N82 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part2Data.N10 * part2Data.N11 / 1000)\n' +
        ' * 1000 * (part2Data.N83 * part1Data.N16 + part2Data.N84 * part1Data.N17 + part2Data.N85 * part1Data.N18\n' +
        '        + part2Data.N86 * part1Data.N19 + part2Data.N87 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part4Data.N3 * 1.1845/1000*0.92)\n' +
        ' * part4Data.N14 * (part4Data.N71 * part1Data.N16 + part4Data.N74 * part1Data.N19\n' +
        '        + part4Data.N75 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part3Data.N3 * 1.328466 / 1000)\n' +
        ' * part3Data.N5 * (part3Data.N14 * part1Data.N16 + part3Data.N15 * part1Data.N17\n' +
        '        + part3Data.N18 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part2Data.N10 * part2Data.N11 / 1000 - part3Data.N3 * 1.328466 / 1000)\n' +
        ' * 25 * (part2Data.N66 * part1Data.N16 + part2Data.N67 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part3Data.N1 * part4Data.N0 * 28181.1 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part4Data.N1 * 1.1845/1000*0.89)\n' +
        ' * part4Data.N13 * (part4Data.N66 * part1Data.N16 + part4Data.N70 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(\n' +
        '(part3Data.N0 * 1.1845 / 1000)\n' +
        ' * part3Data.N4 * (part3Data.N19 * part1Data.N16 + part3Data.N20 * part1Data.N15) / 100 * 1000)\n' +
        ' + ((part4Data.N2 * 1.1845/1000) * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000) \n' +
        ' + ((part4Data.N3 * 1.1845/1000) * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000) \n' +
        ' + ((part4Data.N4 * 1.1845/1000) * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 \n' +
        ' * part1Data.N15) / 100 * 1000)) * 100,\n' +
        '\n' +
        ' (\n' +
        '(part2Data.N10 * part2Data.N11 / 1000  * 1000 * (part2Data.N83 * part1Data.N16 + part2Data.N84 * part1Data.N17 + part2Data.N85 * part1Data.N18\n' +
        '        + part2Data.N86 * part1Data.N19 + part2Data.N87 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part3Data.N3 * 1.328466 / 1000 * part3Data.N5 * (part3Data.N14 * part1Data.N16 + part3Data.N15 * part1Data.N17\n' +
        '        + part3Data.N18 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part4Data.N1 * 1.1845/1000*0.89 * part4Data.N13 * (part4Data.N66 * part1Data.N16 + part4Data.N70 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part4Data.N3 * 1.1845/1000 *0.92 * part4Data.N14 * (part4Data.N71 * part1Data.N16 + part4Data.N74 * part1Data.N19\n' +
        '        + part4Data.N75 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part4Data.N3 * 1.1845/1000 *0.92 * part4Data.N15 * (part4Data.N78 * part1Data.N16 + part4Data.N80 * part1Data.N18\n' +
        '        + part4Data.N81 * part1Data.N19 + part4Data.N82 * part1Data.N15) / 100 * 1000)\n' +
        ') / (\n' +
        '(part4Data.N0 * part4Data.N18 * (part4Data.N58 * part1Data.N7 + part4Data.N59 * part1Data.N8\n' +
        '        + part4Data.N60 * part1Data.N9 + part4Data.N61 * part1Data.N10 + part4Data.N62 * part1Data.N11\n' +
        '        + part4Data.N63 * part1Data.N12  + part4Data.N64 * part1Data.N13 + part4Data.N65 * part1Data.N14) / 100)\n' +
        ' + \n' +
        '((part2Data.N1 * part2Data.N2 / 1000) * part2Data.N3 * (part2Data.N68 * part1Data.N16 + part2Data.N69 * part1Data.N17 + part2Data.N70 * part1Data.N18\n' +
        '        + part2Data.N71 * part1Data.N19 + part2Data.N72 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part2Data.N4 * part2Data.N5 / 1000 * part2Data.N6 * (part2Data.N73 * part1Data.N16 + part2Data.N74 * part1Data.N17 + part2Data.N75 * part1Data.N18\n' +
        '        + part2Data.N76 * part1Data.N19 + part2Data.N77 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part2Data.N7 * part2Data.N8 / 1000 * part2Data.N9 * (part2Data.N78 * part1Data.N16 + part2Data.N79 * part1Data.N17 + part2Data.N80 * part1Data.N18\n' +
        '        + part2Data.N81 * part1Data.N19 + part2Data.N82 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part2Data.N10 * part2Data.N11 / 1000 * 1000 * (part2Data.N83 * part1Data.N16 + part2Data.N84 * part1Data.N17 + part2Data.N85 * part1Data.N18\n' +
        '        + part2Data.N86 * part1Data.N19 + part2Data.N87 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part2Data.N13 * (0.2 * part2Data.N19 + 0.2 * part2Data.N20 + 0.3 * part2Data.N21 + 0.3 * part2Data.N22)\n' +
        '        * (part2Data.N58 * part1Data.N7 + part2Data.N59 * part1Data.N8 + part2Data.N60 * part1Data.N10\n' +
        '            + part2Data.N61 * part1Data.N11 + part2Data.N62 * part1Data.N12 + part2Data.N63 * part1Data.N13\n' +
        '            + part2Data.N64 * part1Data.N13 + part2Data.N65 * part1Data.N14) / 100)\n' +
        ' + \n' +
        '(31500 * 0.15 * (part1Data.N57 * (100 - 30) + part1Data.N62 + part1Data.N60 * (120 - 100))\n' +
        '        + 31500 * (1 - 0.15) * part1Data.N57 * (51 - 30)\n' +
        '        + 31500 * 0.55 * (part1Data.N59 * (100 - 51) + part1Data.N62 + part1Data.N61 * (144.55 - 100))\n' +
        '        + 31500 * 0.3 * part1Data.N58 * (95 - 51)\n' +
        '        + 31500 * 0.3 * (part1Data.N59 * (100 - 95) + part1Data.N62 + part1Data.N61 * (144.55 - 100)))\n' +
        ' + \n' +
        '(part1Data.N65 * (part1Data.N63 * part2Data.N28 - part1Data.N64 * part2Data.N29))\n' +
        ' + \n' +
        '(part2Data.N23 * (part2Data.N26 * part2Data.N27 - part2Data.N24 * part2Data.N25)*1000)\n' +
        ' + \n' +
        '((\n' +
        '            (part2Data.N30 - part2Data.N47) * part1Data.N24 * part1Data.N20 * 3.6\n' +
        '            + (part2Data.N31 - part2Data.N47) * part1Data.N25 * part1Data.N21 * 3.6\n' +
        '            + (part2Data.N32 - part2Data.N47) * part1Data.N26 * part1Data.N32 * 3.6\n' +
        '            + (part2Data.N33 - part2Data.N47) * part1Data.N27 * part1Data.N23 * 3.6)\n' +
        '        + (\n' +
        '            (part2Data.N34 - part2Data.N47) * part1Data.N28 * part1Data.N32 * 3.6\n' +
        '            + (part2Data.N35 - part2Data.N47) * part1Data.N29 * part1Data.N33 * 3.6\n' +
        '            + (part2Data.N36 - part2Data.N47) * part1Data.N30 * part1Data.N34 * 3.6\n' +
        '            + (part2Data.N37 - part2Data.N47) * part1Data.N31 * part1Data.N35 * 3.6)\n' +
        '        + ((part2Data.N38 - part2Data.N47) * part1Data.N36 * part1Data.N40 * 3.6\n' +
        '            + (part2Data.N39 - part2Data.N47) * part1Data.N37 * part1Data.N41 * 3.6\n' +
        '            + (part2Data.N40 - part2Data.N47) * part1Data.N38 * part1Data.N42 * 3.6\n' +
        '            + (part2Data.N41 - part2Data.N47) * part1Data.N39 * part1Data.N43 * 3.6)\n' +
        '        + ((part2Data.N42 - part2Data.N47) * part1Data.N44 * part1Data.N48 * 3.6\n' +
        '            + (part2Data.N43 - part2Data.N47) * part1Data.N45 * part1Data.N49 * 3.6\n' +
        '            + (part2Data.N44 - part2Data.N47) * part1Data.N46 * part1Data.N50 * 3.6\n' +
        '            + (part2Data.N45 - part2Data.N47) * part1Data.N47 * part1Data.N51 * 3.6)\n' +
        '        + (part2Data.N46 - part2Data.N47) * part1Data.N51 * part1Data.N52 * 3.6)\n' +
        ' + \n' +
        '(part3Data.N3 * 1.328466 / 1000 * part3Data.N5 * (part3Data.N14 * part1Data.N16 + part3Data.N15 * part1Data.N17\n' +
        '        + part3Data.N18 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(0.65 * part1Data.N74 * 20.43 * (pow((273 + part3Data.N12) / 100, 4) - pow((273 + part2Data.N47) / 100, 4))\n' +
        '        + 0.65 * part1Data.N74 * 20.43 * (pow((273 + part3Data.N13) / 100, 4) - pow((273 + part2Data.N47) / 100, 4)))\n' +
        ' + \n' +
        '((part3Data.N10 - 25) * part1Data.N66 * part1Data.N68 * 3.6 + (part3Data.N11 - 25) * part1Data.N67 * part1Data.N69 * 3.6)\n' +
        ' + \n' +
        '(part4Data.N1 * 1.1845/1000*0.89 * part4Data.N13 * (part4Data.N66 * part1Data.N16 + part4Data.N70 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part4Data.N3 * 1.1845/1000 *0.92 * part4Data.N14 * (part4Data.N71 * part1Data.N16 + part4Data.N74 * part1Data.N19\n' +
        '        + part4Data.N75 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part4Data.N3 * 1.1845/1000 *0.92 * part4Data.N15 * (part4Data.N78 * part1Data.N16 + part4Data.N80 * part1Data.N18\n' +
        '        + part4Data.N81 * part1Data.N19 + part4Data.N82 * part1Data.N15) / 100 * 1000)\n' +
        ' + \n' +
        '(part4Data.N4 * 1.1845/1000*0.94 * part4Data.N16 * (part4Data.N83 * part1Data.N16 + part4Data.N85 * part1Data.N18\n' +
        '        + part4Data.N86 * part1Data.N19 + part4Data.N87 * part1Data.N15) / 100 * 1000)\n' +
        ' + 5557763 + 519190 + \n' +
        '(((part4Data.N41 - part2Data.N47) * part1Data.N75 * part1Data.N79 * 3.6\n' +
        '            + (part4Data.N42 - part2Data.N47) * part1Data.N76 * part1Data.N80 * 3.6\n' +
        '            + (part4Data.N43 - part2Data.N47) * part1Data.N77 * part1Data.N81 * 3.6\n' +
        '            + (part4Data.N44 - part2Data.N47) * part1Data.N78 * part1Data.N82 * 3.6)\n' +
        '        + ((part4Data.N45 - part2Data.N47) * part1Data.N83 * part1Data.N87 * 3.6\n' +
        '            + (part4Data.N46 - part2Data.N47) * part1Data.N84 * part1Data.N88 * 3.6\n' +
        '            + (part4Data.N47 - part2Data.N47) * part1Data.N85 * part1Data.N89 * 3.6\n' +
        '            + (part4Data.N48 - part2Data.N47) * part1Data.N86 * part1Data.N90 * 3.6)\n' +
        '        + ((part4Data.N49 - part2Data.N47) * part1Data.N91 * part1Data.N95 * 3.6\n' +
        '            + (part4Data.N50 - part2Data.N47) * part1Data.N92 * part1Data.N96 * 3.6\n' +
        '            + (part4Data.N51 - part2Data.N47) * part1Data.N93 * part1Data.N97 * 3.6\n' +
        '            + (part4Data.N52 - part2Data.N47) * part1Data.N94 * part1Data.N98 * 3.6)\n' +
        '        + ((part4Data.N53 - part2Data.N47) * part1Data.N99 * part1Data.N103 * 3.6\n' +
        '            + (part4Data.N54 - part2Data.N47) * part1Data.N100 * part1Data.N104 * 3.6\n' +
        '            + (part4Data.N55 - part2Data.N47) * part1Data.N101 * part1Data.N105 * 3.6\n' +
        '            + (part4Data.N56 - part2Data.N47) * part1Data.N102 * part1Data.N106 * 3.6))\n' +
        ') * 100, \n' +
        '\n' +
        '(part3Data.N1 * part4Data.N0 * part3Data.N21 * 44 / 12 / 100 + part3Data.N22 * part4Data.N0 * (part3Data.N23 * 2/3 + part3Data.N24 * 1/3)) ' +
        ', 0, now() from DaGuShan.part1Data, DaGuShan.part2Data, DaGuShan.part3Data, DaGuShan.part4Data;',
        [],
        (error) => {
            if (error) {
                throw error;
            }else{
                // console.log("更新参数完毕")
            }
        }
    );
}

setInterval(intervalFunc, 1000 * 10);//定时执行上面函数生成随机数，氧气探头1
//
// function intervalFunc2() {
//   daGuShan.randomData2()//生成随机数
// }
//
// setInterval(intervalFunc2, 30000);//定时执行上面函数生成随机数，氧气探头2
//
// function intervalFunc3() {
//   daGuShan.randomData3()//生成随机数
// }
//
// setInterval(intervalFunc3, 30000);//定时执行上面函数生成随机数，氧气探头3
