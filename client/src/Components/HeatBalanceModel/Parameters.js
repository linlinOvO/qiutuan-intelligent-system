const getPart1 = (part1Data) => {
    return[
        [0, "助燃风密度", part1Data.N0, "kg/m3"],
        [1, "O2标况密度", part1Data.N1, "kg/m3"],
        [2, "N2标况密度", part1Data.N2, "kg/m3"],
        [3, "CO2标况密度", part1Data.N3, "kg/m3"],
        [4, "煤粉低发热值", part1Data.N4, "kJ(t*K)"],
        [5, "FeO氧化放热焓", part1Data.N5, "kJ/mol"],
        [6, "H2O比热容", part1Data.N6, "kJ(t*K)"],
        [7, "Fe2O3比热容", part1Data.N7, "kJ(t*K)"],
        [8, "FeO比热容", part1Data.N8, "kJ(t*K)"],
        [9, "SiO2比热容", part1Data.N9, "kJ(t*K)"],
        [10, "CaO比热容", part1Data.N10, "kJ(t*K)"],
        [11, "MgO比热容", part1Data.N11, "kJ(t*K)"],
        [12, "Al2O3比热容", part1Data.N12, "kJ(t*K)"],
        [13, "S比热容", part1Data.N13, "kJ(t*K)"],
        [14, "P比热容", part1Data.N14, "kJ(t*K)"],
        [15, "N2比热容", part1Data.N15, "kJ(t*K)"],
        [16, "O2比热容", part1Data.N16, "kJ(t*K)"],
        [17, "CO2比热容", part1Data.N17, "kJ(t*K)"],
        [18, "NO2比热容", part1Data.N18, "kJ(t*K)"],
        [19, "SO2比热容", part1Data.N19, "kJ(t*K)"],
        [20, "鼓干段炉顶面积", part1Data.N20, "m2"],
        [21, "鼓干段炉底面积", part1Data.N21, "m2"],
        [22, "鼓干段东墙面积", part1Data.N22, "m2"],
        [23, "鼓干段西墙面积", part1Data.N23, "m2"],
        [24, "鼓干段炉顶换热系数", part1Data.N24, ""],
        [25, "鼓干段炉底换热系数", part1Data.N25, ""],
        [26, "鼓干段东墙换热系数", part1Data.N26, ""],
        [27, "鼓干段西墙换热系数", part1Data.N27, ""],
        [28, "抽干段炉顶面积", part1Data.N28, "m2"],
        [29, "抽干段炉底面积", part1Data.N29, "m2"],
        [30, "抽干段东墙面积", part1Data.N30, "m2"],
        [31, "抽干段西墙面积", part1Data.N31, "m2"],
        [32, "抽干段炉顶换热系数", part1Data.N32, ""],
        [33, "抽干段炉底换热系数", part1Data.N33, ""],
        [34, "抽干段东墙换热系数", part1Data.N34, ""],
        [35, "抽干段西墙换热系数", part1Data.N35, ""],
        [36, "预热一炉顶面积", part1Data.N36, "m2"],
        [37, "预热一炉底面积", part1Data.N37, "m2"],
        [38, "预热一东墙面积", part1Data.N38, "m2"],
        [39, "预热一西墙面积", part1Data.N39, "m2"],
        [40, "预热一炉顶换热系数", part1Data.N40, ""],
        [41, "预热一炉底换热系数", part1Data.N41, ""],
        [42, "预热一东墙换热系数", part1Data.N42, ""],
        [43, "预热一西墙换热系数", part1Data.N43, ""],
        [44, "预热二炉顶面积", part1Data.N44, "m2"],
        [45, "预热二炉底面积", part1Data.N45, "m2"],
        [46, "预热二东墙面积", part1Data.N46, "m2"],
        [47, "预热二西墙面积", part1Data.N47, "m2"],
        [48, "预热二炉顶换热系数", part1Data.N48, ""],
        [49, "预热二炉底换热系数", part1Data.N49, ""],
        [50, "预热二东墙换热系数", part1Data.N50, ""],
        [51, "预热二西墙换热系数", part1Data.N51, ""],
        [52, "链篦机后墙面积", part1Data.N52, "m2"],
        [53, "链篦机后墙换热系数", part1Data.N53, ""],
        [54, "鼓风干燥段水分蒸发量", part1Data.N54, "%"],
        [55, "抽风干燥段水分蒸发量", part1Data.N55, "%"],
        [56, "预热一段水分蒸发量", part1Data.N56, "%"],
        [57, "H2O比热容（30-100）", part1Data.N57, "kJ(t*K)"],
        [58, "H2O比热容（51-95）", part1Data.N58, "kJ(t*K)"],
        [59, "H2O比热容（51-100）", part1Data.N59, "kJ(t*K)"],
        [60, "H2O比热容（100-120）", part1Data.N60, "kJ(t*K)"],
        [61, "H2O比热容（100-144）", part1Data.N61, "kJ(t*K)"],
        [62, "γH2O", part1Data.N62, "kJ/kg"],
        [63, "链篦机头篦板比热容", part1Data.N63, "kJ(t*K)"],
        [64, "链篦机尾篦板比热容", part1Data.N64, "kJ(t*K)"],
        [65, "篦板质量", part1Data.N65, "kg"],
        [66, "回转窑窑身面积", part1Data.N66, "m2"],
        [67, "回转窑窑尾面积", part1Data.N67, "m2"],
        [68, "回转窑窑身换热系数", part1Data.N68, ""],
        [69, "回转窑窑尾换热系数", part1Data.N69, ""],
        [70, "空气比热容", part1Data.N70, "kJ(t*K)"],
        [71, "空气密度", part1Data.N71, "kg/m3"],
        [72, "回转窑头炉门面积", part1Data.N72, "m2"],
        [73, "回转窑尾炉门面积", part1Data.N73, "m2"],
        [74, "辐射换热系数", part1Data.N74, ""],
        [75, "一冷炉顶面积", part1Data.N75, "m2"],
        [76, "一冷炉底面积", part1Data.N76, "m2"],
        [77, "一冷炉墙面积", part1Data.N77, "m2"],
        [78, "一冷端墙面积", part1Data.N78, "m2"],
        [79, "一冷炉顶换热系数", part1Data.N79, ""],
        [80, "一冷炉底换热系数", part1Data.N80, ""],
        [81, "一冷炉墙换热系数", part1Data.N81, ""],
        [82, "一冷端墙换热系数", part1Data.N82, ""],
        [83, "二冷炉顶面积", part1Data.N83, "m2"],
        [84, "二冷炉底面积", part1Data.N84, "m2"],
        [85, "二冷炉墙面积", part1Data.N85, "m2"],
        [86, "二冷端墙面积", part1Data.N86, "m2"],
        [87, "二冷炉顶换热系数", part1Data.N87, ""],
        [88, "二冷炉底换热系数", part1Data.N88, ""],
        [89, "二冷炉墙换热系数", part1Data.N89, ""],
        [90, "二冷端墙换热系数", part1Data.N90, ""],
        [91, "三冷炉顶面积", part1Data.N91, "m2"],
        [92, "三冷炉底面积", part1Data.N92, "m2"],
        [93, "三冷炉墙面积", part1Data.N93, "m2"],
        [94, "三冷端墙面积", part1Data.N94, "m2"],
        [95, "三冷炉顶换热系数", part1Data.N95, ""],
        [96, "三冷炉底换热系数", part1Data.N96, ""],
        [97, "三冷炉墙换热系数", part1Data.N97, ""],
        [98, "三冷端墙换热系数", part1Data.N98, ""],
        [99, "四冷炉顶面积", part1Data.N99, "m2"],
        [100, "四冷炉底面积", part1Data.N100, "m2"],
        [101, "四冷炉墙面积", part1Data.N101, "m2"],
        [102, "四冷端墙面积", part1Data.N102, "m2"],
        [103, "四冷炉顶换热系数", part1Data.N103, ""],
        [104, "四冷炉底换热系数", part1Data.N104, ""],
        [105, "四冷炉墙换热系数", part1Data.N105, ""],
        [106, "四冷端墙换热系数", part1Data.N106, ""]
    ]
}

const getPart2 = (part2Data) => {
    //console.log(part2Data)
    return [
        [0, "生球进料量", part2Data.N0, "t/h"],
        [1, "鼓风干燥段烟气排出量", part2Data.N1, "m3/h"],
        [2, "鼓风干燥段烟气密度", (1.293 * 273 / (part2Data.N3 + 273)).toFixed(3), "kg/m3"],
        [3, "鼓风干燥段出口温度", part2Data.N3, "℃"],
        [4, "抽风干燥段烟气排出量", part2Data.N4, "m3/h"],
        [5, "抽风干燥段烟气密度", (1.293 * 273 / (part2Data.N6 + 273)).toFixed(3), "kg/m3"],
        [6, "抽风干燥段出口温度", part2Data.N6, "℃"],
        [7, "预热一段烟气排出量", part2Data.N7, "m3/h"],
        [8, "预热一段烟气密度", (1.293 * 273 / (part2Data.N9 + 273)).toFixed(3), "kg/m3"],
        [9, "预热Ⅰ段出口温度", part2Data.N9, "℃"],
        [10, "预热二段烟气排出量", part2Data.N10, "m3/h"],
        [11, "预热二段烟气密度", (1.293 * 273 / (part2Data.N12 + 273)).toFixed(3), "kg/m3"],
        [12, "预热Ⅱ段出口温度", part2Data.N12, "℃"],
        [13, "链篦机干返料", part2Data.N13, "t/h"],
        [14, "链篦机除尘管飞灰含量", part2Data.N14, "kg/m3"],
        [15, "链篦机除尘管风量", part2Data.N15, "m3/h"],
        [16, "鼓风干燥段进口温度", part2Data.N16, "℃"],
        [17, "预热Ⅰ段进口温度", part2Data.N17, "℃"],
        [18, "预热Ⅱ段进口温度", part2Data.N18, "℃"],
        [19, "鼓风干燥段最下层温度", part2Data.N19, "℃"],
        [20, "抽风干燥段最下层温度", part2Data.N20, "℃"],
        [21, "预热一段最下层温度", part2Data.N21, "℃"],
        [22, "预热二段最下层温度", part2Data.N22, "℃"],
        [23, "冷却水流量", part2Data.N23, "m3/h"],
        [24, "冷却水进水温度", part2Data.N24, "℃"],
        [25, "冷却水进水比热容", part2Data.N25, "kJ/(kg*K)"],
        [26, "冷却水出水温度", part2Data.N26, "℃"],
        [27, "冷却水出水比热容", part2Data.N27, "kJ/(kg*K)"],
        [28, "机头篦板表面温度", part2Data.N28, "℃"],
        [29, "机尾篦板表面温度", part2Data.N29, "℃"],
        [30, "鼓风干燥段炉顶温度", part2Data.N30, "℃"],
        [31, "鼓风干燥段炉底温度", part2Data.N31, "℃"],
        [32, "鼓风干燥段东墙温度", part2Data.N32, "℃"],
        [33, "鼓风干燥段西墙温度", part2Data.N33, "℃"],
        [34, "抽风干燥段炉顶温度", part2Data.N34, "℃"],
        [35, "抽风干燥段炉底温度", part2Data.N35, "℃"],
        [36, "抽风干燥段东墙温度", part2Data.N36, "℃"],
        [37, "抽风干燥段西墙温度", part2Data.N37, "℃"],
        [38, "预热一段炉顶温度", part2Data.N38, "℃"],
        [39, "预热一段炉底温度", part2Data.N39, "℃"],
        [40, "预热一段东墙温度", part2Data.N40, "℃"],
        [41, "预热一段西墙温度", part2Data.N41, "℃"],
        [42, "预热二段炉顶温度", part2Data.N42, "℃"],
        [43, "预热二段炉底温度", part2Data.N43, "℃"],
        [44, "预热二段东墙温度", part2Data.N44, "℃"],
        [45, "预热二段西墙温度", part2Data.N45, "℃"],
        [46, "链篦机后端墙温度", part2Data.N46, "℃"],
        [47, "环境温度", part2Data.N47, "℃"],
        [48, "生球进料温度", part2Data.N48, "℃"],
        [49, "水分", part2Data.N49, "%"],
        [50, "Fe2O3", part2Data.N50, "%"],
        [51, "FeO", part2Data.N51, "%"],
        [52, "SiO2", part2Data.N52, "%"],
        [53, "CaO", part2Data.N53, "%"],
        [54, "MgO", part2Data.N54, "%"],
        [55, "Al2O3", part2Data.N55, "%"],
        [56, "S", part2Data.N56, "%"],
        [57, "P", part2Data.N57, "%"],
        [58, "Fe2O3", part2Data.N58, "%"],
        [59, "FeO", part2Data.N59, "%"],
        [60, "SiO2", part2Data.N60, "%"],
        [61, "CaO", part2Data.N61, "%"],
        [62, "MgO", part2Data.N62, "%"],
        [63, "Al2O3", part2Data.N63, "%"],
        [64, "S", part2Data.N64, "%"],
        [65, "P", part2Data.N65, "%"],
        [66, "O2", part2Data.N66, "%"],
        [67, "N2", part2Data.N67, "%"],
        [68, "O2", part2Data.N68, "%"],
        [69, "CO2", part2Data.N69, "%"],
        [70, "NO2", part2Data.N70, "%"],
        [71, "SO2", part2Data.N71, "%"],
        [72, "N2", part2Data.N72, "%"],
        [73, "O2", part2Data.N73, "%"],
        [74, "CO2", part2Data.N74, "%"],
        [75, "NO2", part2Data.N75, "%"],
        [76, "SO2", part2Data.N76, "%"],
        [77, "N2", part2Data.N77, "%"],
        [78, "O2", part2Data.N78, "%"],
        [79, "CO2", part2Data.N79, "%"],
        [80, "NO2", part2Data.N80, "%"],
        [81, "SO2", part2Data.N81, "%"],
        [82, "N2", part2Data.N82, "%"],
        [83, "O2", part2Data.N83, "%"],
        [84, "CO2", part2Data.N84, "%"],
        [85, "NO2", part2Data.N85, "%"],
        [86, "SO2", part2Data.N86, "%"],
        [87, "N2", part2Data.N87, "%"],
    ]
}

const getPart3 = (part3Data) => {
    // console.log(a)
    return [
        [0, "助燃风流量", part3Data.N0, "m3/h"],
        [1, "煤粉单耗", part3Data.N1, "t/h"],
        [2, "煤粉烟气量", part3Data.N2, "m3/kg"],
        [3, "煤粉单位时间烟气量", (part3Data.N1 * part3Data.N2 * 310.08 * 1000).toFixed(3), "m3/h"],
        [4, "回转窑助燃风温度", part3Data.N4, "℃"],
        [5, "回转窑烟气温度", part3Data.N5, "℃"],
        [6, "窑头东冷却风量", part3Data.N6, "m3"],
        [7, "窑头东冷却风出风温度", part3Data.N7, "℃"],
        [8, "窑头西冷却风量", part3Data.N8, "m3"],
        [9, "窑头西冷却风出风温度", part3Data.N9, "℃"],
        [10, "窑身表面温度", part3Data.N10, "℃"],
        [11, "窑尾表面温度", part3Data.N11, "℃"],
        [12, "窑头炉门温度", part3Data.N12, "℃"],
        [13, "窑尾炉门温度", part3Data.N13, "℃"],
        [14, "O2", part3Data.N14, "%"],
        [15, "CO2", part3Data.N15, "%"],
        [16, "NO2", part3Data.N16, "%"],
        [17, "SO2", part3Data.N17, "%"],
        [18, "N2", part3Data.N18, "%"],
        [19, "O2", part3Data.N19, "%"],
        [20, "N2", part3Data.N20, "%"],
        [21, "煤粉含碳量", part3Data.N21, "%"],
        [22, "链-回-环耗电", part3Data.N22, "MW/t"],
        [23, "外购电碳排放因子", part3Data.N23, "t(CO2)/MWh"],
        [24, "自发电碳排放因子", part3Data.N24, "t(CO2)/MWh"]
    ]
}

const getPart4 = (part4Data) => {
    return [
        [0, "环冷机产量", part4Data.N0, "t/h"],
        [1, "环冷\u2160段进风量", part4Data.N1, "m3/h"],
        [2, "环冷\u2161段进风量", part4Data.N2, "m3/h"],
        [3, "环冷\u2162段进风量", part4Data.N3, "m3/h"],
        [4, "环冷\u2163段进风量", part4Data.N4, "m3/h"],
        [5, "环冷一段出风量", part4Data.N5, "m3/h"],
        [6, "环冷二段出风量", part4Data.N6, "m3/h"],
        [7, "环冷三段出风量", part4Data.N7, "m3/h"],
        [8, "环冷四段出风量", part4Data.N8, "m3/h"],
        [9, "环冷一段气体密度", part4Data.N9, "kg/m3"],
        [10, "环冷二段气体密度", part4Data.N10, "kg/m3"],
        [11, "环冷三段气体密度", part4Data.N11, "kg/m3"],
        [12, "环冷四段气体密度", part4Data.N12, "kg/m3"],
        [13, "环冷一段温度", part4Data.N13, "℃"],
        [14, "环冷二段温度", part4Data.N14, "℃"],
        [15, "环冷三段温度", part4Data.N15, "℃"],
        [16, "环冷四段温度", part4Data.N16, "℃"],
        [17, "鼓风温度", part4Data.N17, "℃"],
        [18, "球团出料温度", part4Data.N18, "℃"],
        [19, "冷却水进水温度", part4Data.N19, "℃"],
        [20, "冷却水进水比热容", part4Data.N20, "kJ(kg*K)"],
        [21, "高端冷却水流量", part4Data.N21, "m3/h"],
        [22, "高端冷却水出水温度", part4Data.N22, "℃"],
        [23, "高端冷却水出水比热容", part4Data.N23, "kJ(kg*K)"],
        [24, "低端冷却水流量", part4Data.N24, "m3/h"],
        [25, "低端冷却水出水温度", part4Data.N25, "℃"],
        [26, "低端冷却水出水比热容", part4Data.N26, "kJ(kg*K)"],
        [27, "平料托冷却水流量", part4Data.N27, "m3/h"],
        [28, "平料托冷却水出水温度", part4Data.N28, "℃"],
        [29, "平料托冷却水出水比热容", part4Data.N29, "kJ(kg*K)"],
        [30, "固定筛条冷却水流量", part4Data.N30, "m3/h"],
        [31, "固定筛条冷却水出水温度", part4Data.N31, "℃"],
        [32, "固定筛条冷却水出水比热容", part4Data.N32, "kJ(kg*K)"],
        [33, "冷却风进风温度", part4Data.N33, "℃"],
        [34, "冷却风进风比热容", part4Data.N34, "kJ(kg*K)"],
        [35, "隔墙风流量", part4Data.N35, "m3/h"],
        [36, "隔墙风出风温度", part4Data.N36, "℃"],
        [37, "隔墙风出风比热容", part4Data.N37, "kJ(kg*K)"],
        [38, "料斗隔墙风流量", part4Data.N38, "m3/h"],
        [39, "料斗隔墙风出风温度", part4Data.N39, "℃"],
        [40, "料斗隔墙风出风比热容", part4Data.N40, "kJ(kg*K)"],
        [41, "环冷一段炉顶温度", part4Data.N41, "℃"],
        [42, "环冷一段炉底温度", part4Data.N42, "℃"],
        [43, "环冷一段炉墙温度", part4Data.N43, "℃"],
        [44, "环冷一段端墙温度", part4Data.N44, "℃"],
        [45, "环冷二段炉顶温度", part4Data.N45, "℃"],
        [46, "环冷二段炉底温度", part4Data.N46, "℃"],
        [47, "环冷二段炉墙温度", part4Data.N47, "℃"],
        [48, "环冷二段端墙温度", part4Data.N48, "℃"],
        [49, "环冷三段炉顶温度", part4Data.N49, "℃"],
        [50, "环冷三段炉底温度", part4Data.N50, "℃"],
        [51, "环冷三段炉墙温度", part4Data.N51, "℃"],
        [52, "环冷三段端墙温度", part4Data.N52, "℃"],
        [53, "环冷四段炉顶温度", part4Data.N53, "℃"],
        [54, "环冷四段炉底温度", part4Data.N54, "℃"],
        [55, "环冷四段炉墙温度", part4Data.N55, "℃"],
        [56, "环冷四段端墙温度", part4Data.N56, "℃"],
        [57, "环境温度", part4Data.N57, "℃"],
        [58, "Fe2O3", part4Data.N58, "%"],
        [59, "FeO", part4Data.N59, "%"],
        [60, "SiO2", part4Data.N60, "%"],
        [61, "CaO", part4Data.N61, "%"],
        [62, "MgO", part4Data.N62, "%"],
        [63, "Al2O3", part4Data.N63, "%"],
        [64, "S", part4Data.N64, "%"],
        [65, "P", part4Data.N65, "%"],
        [66, "O2", part4Data.N66, "%"],
        [67, "CO2", part4Data.N67, "%"],
        [68, "NO2", part4Data.N68, "%"],
        [69, "SO2", part4Data.N69, "%"],
        [70, "N2", part4Data.N70, "%"],
        [71, "O2", part4Data.N71, "%"],
        [72, "CO2", part4Data.N72, "%"],
        [73, "NO2", part4Data.N73, "%"],
        [74, "SO2", part4Data.N74, "%"],
        [75, "N2", part4Data.N75, "%"],
        [76, "O2", part4Data.N76, "%"],
        [77, "N2", part4Data.N77, "%"],
        [78, "O2", part4Data.N78, "%"],
        [79, "CO2", part4Data.N79, "%"],
        [80, "NO2", part4Data.N80, "%"],
        [81, "SO2", part4Data.N81, "%"],
        [82, "N2", part4Data.N82, "%"],
        [83, "O2", part4Data.N83, "%"],
        [84, "CO2", part4Data.N84, "%"],
        [85, "NO2", part4Data.N85, "%"],
        [86, "SO2", part4Data.N86, "%"],
        [87, "N2", part4Data.N87, "%"],
    ]
}

const getPart5 = (part1Data, part2Data, part3Data, part4Data) => {

    if(part2Data.length * part1Data.length * part3Data.length * part4Data.length === 0){
        return []
    }
    const N0 = part2Data[0][2]

    const N2 = part2Data[10][2] * part2Data[11][2] / 1000

    const N4 = part3Data[3][2] * 1.328466 / 1000
    const N18 = N2
    const N5 = N18 - N4
    const N6 = part4Data[0][2] * part3Data[1][2]
    const N7 = part3Data[0][2] * 1.1845 / 1000
    const N9 = part4Data[0][2] * (part2Data[51][2] - part4Data[59][2]) / 100 / 72 / 4 * 32
    const N10 = part4Data[1][2] * 1.1845/1000
    const N8 = N10*0.89
    const N11 = part4Data[2][2] * 1.1845/1000
    const N3 = N11*0.92
    const N12 = part4Data[3][2] * 1.1845/1000
    const N1 = N12*0.92
    const N13 = part4Data[4][2] * 1.1845/1000
    const N14 = N0 + N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10 + N11 + N12 + N13
    const N15 = part2Data[1][2] * part2Data[2][2] / 1000
    const N16 = part2Data[4][2] * part2Data[5][2] / 1000
    const N17 = part2Data[7][2] * part2Data[8][2] / 1000
    // N18在上面定义过了已经
    const N19 = part2Data[13][2]
    const N20 = part2Data[14][2] * part2Data[15][2] / 1000
    const N21 = N4
    const N22 = part4Data[0][2]
    const N23 = N8
    const N24 = N3
    const N25 = N1
    const N26 = N13*0.94
    const N27 = part2Data[0][2] * part2Data[49][2] / 100
    const N29 = N15 + N16 + N17 + N18 + N19 + N20 + N21 + N22 + N23 + N24 + N25 + N26 + N27
    const N28 = N14 - N29

    const N30 = part2Data[0][2] * (part2Data[49][2] / 100 * part1Data[6][2] + (100 - part2Data[49][2]) / 100 *
        (part2Data[50][2] * part1Data[7][2] + part2Data[51][2] * part1Data[8][2] + part2Data[52][2] * part1Data[9][2]
            + part2Data[53][2] * part1Data[10][2] + part2Data[54][2] * part1Data[11][2] + part2Data[55][2] * part1Data[12][2]
            + part2Data[56][2] * part1Data[13][2] + part2Data[57][2] * part1Data[14][2]) / 100) * part2Data[48][2]

    const N31 = part4Data[0][2] * (part2Data[51][2] - part4Data[59][2]) / 100 / 72 * part1Data[5][2] * 1000000

    const N32 = N25 * part4Data[15][2] * (part4Data[78][2] * part1Data[16][2] + part4Data[80][2] * part1Data[18][2]
        + part4Data[81][2] * part1Data[19][2] + part4Data[82][2] * part1Data[15][2]) / 100 * 1000

    const N33 = N18 * 1000 * (part2Data[83][2] * part1Data[16][2] + part2Data[84][2] * part1Data[17][2] + part2Data[85][2] * part1Data[18][2]
        + part2Data[86][2] * part1Data[19][2] + part2Data[87][2] * part1Data[15][2]) / 100 * 1000

    const N34 = N25 * part4Data[14][2] * (part4Data[71][2] * part1Data[16][2] + part4Data[74][2] * part1Data[19][2]
        + part4Data[75][2] * part1Data[15][2]) / 100 * 1000

    const N35 = N21 * part3Data[5][2] * (part3Data[14][2] * part1Data[16][2] + part3Data[15][2] * part1Data[17][2]
        + part3Data[18][2] * part1Data[15][2]) / 100 * 1000

    const N36 = N5 * 25 * (part2Data[66][2] * part1Data[16][2] + part2Data[67][2] * part1Data[15][2]) / 100 * 1000
    const N37 = part3Data[1][2] * part4Data[0][2] * 28181.1 * 1000
    const N38 = N23 * part4Data[13][2] * (part4Data[66][2] * part1Data[16][2] + part4Data[70][2] * part1Data[15][2]) / 100 * 1000
    const N39 = N7 * part3Data[4][2] * (part3Data[19][2] * part1Data[16][2] + part3Data[20][2] * part1Data[15][2]) / 100 * 1000
    const N40 = N10 * part4Data[17][2] * (part4Data[76][2] * part1Data[16][2] + part4Data[77][2] * part1Data[15][2]) / 100 * 1000
    const N41 = N11 * part4Data[17][2] * (part4Data[76][2] * part1Data[16][2] + part4Data[77][2] * part1Data[15][2]) / 100 * 1000
    const N42 = N12 * part4Data[17][2] * (part4Data[76][2] * part1Data[16][2] + part4Data[77][2] * part1Data[15][2]) / 100 * 1000
    const N43 = N13 * part4Data[17][2] * (part4Data[76][2] * part1Data[16][2] + part4Data[77][2] * part1Data[15][2]) / 100 * 1000
    const N44 = N30 + N31 + N32 + N33 + N34 + N35 + N36 + N37 + N38 + N39 + N40 + N41 + N42 + N43
    const N45 = part4Data[0][2] * part4Data[18][2] * (part4Data[58][2] * part1Data[7][2] + part4Data[59][2] * part1Data[8][2]
        + part4Data[60][2] * part1Data[9][2] + part4Data[61][2] * part1Data[10][2] + part4Data[62][2] * part1Data[11][2]
        + part4Data[63][2] * part1Data[12][2]  + part4Data[64][2] * part1Data[13][2] + part4Data[65][2] * part1Data[14][2]) / 100

    const N46 = N15 * part2Data[3][2] * (part2Data[68][2] * part1Data[16][2] + part2Data[69][2] * part1Data[17][2] + part2Data[70][2] * part1Data[18][2]
        + part2Data[71][2] * part1Data[19][2] + part2Data[72][2] * part1Data[15][2]) / 100 * 1000
    const N47 = N16 * part2Data[6][2] * (part2Data[73][2] * part1Data[16][2] + part2Data[74][2] * part1Data[17][2] + part2Data[75][2] * part1Data[18][2]
        + part2Data[76][2] * part1Data[19][2] + part2Data[77][2] * part1Data[15][2]) / 100 * 1000
    const N48 = N17 * part2Data[9][2] * (part2Data[78][2] * part1Data[16][2] + part2Data[79][2] * part1Data[17][2] + part2Data[80][2] * part1Data[18][2]
        + part2Data[81][2] * part1Data[19][2] + part2Data[82][2] * part1Data[15][2]) / 100 * 1000
    const N49 = N33

    const N50 = part2Data[13][2] * (0.2 * part2Data[19][2] + 0.2 * part2Data[20][2] + 0.3 * part2Data[21][2] + 0.3 * part2Data[22][2])
        * (part2Data[58][2] * part1Data[7][2] + part2Data[59][2] * part1Data[8][2] + part2Data[60][2] * part1Data[10][2]
            + part2Data[61][2] * part1Data[11][2] + part2Data[62][2] * part1Data[12][2] + part2Data[63][2] * part1Data[13][2]
            + part2Data[64][2] * part1Data[13][2] + part2Data[65][2] * part1Data[14][2]) / 100

    const N51 = 31500 * 0.15 * (part1Data[57][2] * (100 - 30) + part1Data[62][2] + part1Data[60][2] * (120 - 100))
        + 31500 * (1 - 0.15) * part1Data[57][2] * (51 - 30)
        + 31500 * 0.55 * (part1Data[59][2] * (100 - 51) + part1Data[62][2] + part1Data[61][2] * (144.55 - 100))
        + 31500 * 0.3 * part1Data[58][2] * (95 - 51)
        + 31500 * 0.3 * (part1Data[59][2] * (100 - 95) + part1Data[62][2] + part1Data[61][2] * (144.55 - 100))

    const N52 = part1Data[65][2] * (part1Data[63][2] * part2Data[28][2] - part1Data[64][2] * part2Data[29][2])

    const N53 = part2Data[23][2] * (part2Data[26][2] * part2Data[27][2] - part2Data[24][2] * part2Data[25][2])*1000

    const N54 =
        (
            (part2Data[30][2] - part2Data[47][2]) * part1Data[24][2] * part1Data[20][2] * 3.6
            + (part2Data[31][2] - part2Data[47][2]) * part1Data[25][2] * part1Data[21][2] * 3.6
            + (part2Data[32][2] - part2Data[47][2]) * part1Data[26][2] * part1Data[32][2] * 3.6
            + (part2Data[33][2] - part2Data[47][2]) * part1Data[27][2] * part1Data[23][2] * 3.6)
        + (
            (part2Data[34][2] - part2Data[47][2]) * part1Data[28][2] * part1Data[32][2] * 3.6
            + (part2Data[35][2] - part2Data[47][2]) * part1Data[29][2] * part1Data[33][2] * 3.6
            + (part2Data[36][2] - part2Data[47][2]) * part1Data[30][2] * part1Data[34][2] * 3.6
            + (part2Data[37][2] - part2Data[47][2]) * part1Data[31][2] * part1Data[35][2] * 3.6)
        + ((part2Data[38][2] - part2Data[47][2]) * part1Data[36][2] * part1Data[40][2] * 3.6
            + (part2Data[39][2] - part2Data[47][2]) * part1Data[37][2] * part1Data[41][2] * 3.6
            + (part2Data[40][2] - part2Data[47][2]) * part1Data[38][2] * part1Data[42][2] * 3.6
            + (part2Data[41][2] - part2Data[47][2]) * part1Data[39][2] * part1Data[43][2] * 3.6)
        + ((part2Data[42][2] - part2Data[47][2]) * part1Data[44][2] * part1Data[48][2] * 3.6
            + (part2Data[43][2] - part2Data[47][2]) * part1Data[45][2] * part1Data[49][2] * 3.6
            + (part2Data[44][2] - part2Data[47][2]) * part1Data[46][2] * part1Data[50][2] * 3.6
            + (part2Data[45][2] - part2Data[47][2]) * part1Data[47][2] * part1Data[51][2] * 3.6)
        + (part2Data[46][2] - part2Data[47][2]) * part1Data[51][2] * part1Data[52][2] * 3.6

    const N55 = N35

    const N56 = 0.65 * part1Data[74][2] * 20.43 * (Math.pow((273 + part3Data[12][2]) / 100, 4) - Math.pow((273 + part2Data[47][2]) / 100, 4))
        + 0.65 * part1Data[74][2] * 20.43 * (Math.pow((273 + part3Data[13][2]) / 100, 4) - Math.pow((273 + part2Data[47][2]) / 100, 4))

    const N57 = (part3Data[10][2] - 25) * part1Data[66][2] * part1Data[68][2] * 3.6 + (part3Data[11][2] - 25) * part1Data[67][2] * part1Data[69][2] * 3.6
    const N58 = N38
    const N59 = N34
    const N60 = N32

    const N61 = N26 * part4Data[16][2] * (part4Data[83][2] * part1Data[16][2] + part4Data[85][2] * part1Data[18][2]
        + part4Data[86][2] * part1Data[19][2] + part4Data[87][2] * part1Data[15][2]) / 100 * 1000

    const N62 =5557763

    const N63 =519190

    const N64 =
        ((part4Data[41][2] - part2Data[47][2]) * part1Data[75][2] * part1Data[79][2] * 3.6
            + (part4Data[42][2] - part2Data[47][2]) * part1Data[76][2] * part1Data[80][2] * 3.6
            + (part4Data[43][2] - part2Data[47][2]) * part1Data[77][2] * part1Data[81][2] * 3.6
            + (part4Data[44][2] - part2Data[47][2]) * part1Data[78][2] * part1Data[82][2] * 3.6)
        + ((part4Data[45][2] - part2Data[47][2]) * part1Data[83][2] * part1Data[87][2] * 3.6
            + (part4Data[46][2] - part2Data[47][2]) * part1Data[84][2] * part1Data[88][2] * 3.6
            + (part4Data[47][2] - part2Data[47][2]) * part1Data[85][2] * part1Data[89][2] * 3.6
            + (part4Data[48][2] - part2Data[47][2]) * part1Data[86][2] * part1Data[90][2] * 3.6)
        + ((part4Data[49][2] - part2Data[47][2]) * part1Data[91][2] * part1Data[95][2] * 3.6
            + (part4Data[50][2] - part2Data[47][2]) * part1Data[92][2] * part1Data[96][2] * 3.6
            + (part4Data[51][2] - part2Data[47][2]) * part1Data[93][2] * part1Data[97][2] * 3.6
            + (part4Data[52][2] - part2Data[47][2]) * part1Data[94][2] * part1Data[98][2] * 3.6)
        + ((part4Data[53][2] - part2Data[47][2]) * part1Data[99][2] * part1Data[103][2] * 3.6
            + (part4Data[54][2] - part2Data[47][2]) * part1Data[100][2] * part1Data[104][2] * 3.6
            + (part4Data[55][2] - part2Data[47][2]) * part1Data[101][2] * part1Data[105][2] * 3.6
            + (part4Data[56][2] - part2Data[47][2]) * part1Data[102][2] * part1Data[106][2] * 3.6)

    const N66 = N45 + N46 + N47 + N48 + N49 + N50 + N51 + N52 + N53 + N54 + N55 + N56 + N57 + N58 + N59 + N60 + N61 + N62 + N63 + N64
    const N65 = N66 - N44
    const N67 = part3Data[1][2] * part4Data[0][2]
    const N68 = part3Data[22][2] * part4Data[0][2]
    const N69 = part3Data[1][2] * part4Data[0][2] * part3Data[21][2] * 44 / 12 / 100
    const N70 = part3Data[22][2] * part4Data[0][2] * (part3Data[23][2] * 2/3 + part3Data[24][2] * 1/3)
    const N71 = N69 + N70
    const N72 = (N49 + N55 + N58 + N59 + N60) / N66
    return [
        [0, '生球进料量', N0, 't'],
        [1, '鼓风干燥段进风量', N1, 't'],
        [2, '抽风干燥段进风量', N2, 't'],
        [3, '预热一段进风量', N3, 't'],
        [4, '预热二段进风量', N4, 't'],
        [5, '预热二段吸风量', N5, 't'],
        [6, '喷煤消耗量', N6, 't'],
        [7, '回转窑助燃风质量', N7, 't'],
        [8, '回转窑二次风质量', N8, 't'],
        [9, '球团氧化增重', N9, 't'],
        [10, '环冷一段进风量', N10, 't'],
        [11, '环冷二段进风量', N11, 't'],
        [12, '环冷三段进风量', N12, 't'],
        [13, '环冷四段进风量', N13, 't'],
        [14, '合计', N14, 't'],

        [15, '鼓风干燥段烟气量', N15, 't'],
        [16, '抽风干燥段烟气量', N16, 't'],
        [17, '预热一段烟气量', N17, 't'],
        [18, '预热二段烟气量', N18, 't'],
        [19, '链篦机干返料', N19, 't'],
        [20, '链篦机除尘飞灰量', N20, 't'],
        [21, '回转窑烟气量', N21, 't'],
        [22, '球团出料量', N22, 't'],
        [23, '冷风一段烟气量', N23, 't'],
        [24, '冷风二段烟气量', N24, 't'],
        [25, '冷风三段烟气量', N25, 't'],
        [26, '冷风四段烟气量', N26, 't'],
        [27, '水分蒸发量', N27, 't'],
        [28, '误差', N28, 't'],
        [29, '合计', N29, 't'],

        [30, '物料带入热量', N30, 'kJ/h'],
        [31, '球团FeO放热量', N31, 'kJ/h'],
        [32, '鼓风干燥段进入热量', N32, 'kJ/h'],
        [33, '抽风干燥段进入热量', N33, 'kJ/h'],
        [34, '预热一段进入热量', N34, 'kJ/h'],
        [35, '预热二段进入热量', N35, 'kJ/h'],
        [36, '预热二段吸风热量', N36, 'kJ/h'],
        [37, '回转窑燃料燃烧热量', N37, 'kJ/h'],
        [38, '回转窑二次风热量', N38, 'kJ/h'],
        [39, '回转窑助燃风热量', N39, 'kJ/h'],
        [40, '环冷一段带入热量', N40, 'kJ/h'],
        [41, '环冷二段带入热量', N41, 'kJ/h'],
        [42, '环冷三段带入热量', N42, 'kJ/h'],
        [43, '环冷四段带入热量', N43, 'kJ/h'],
        [44, '合计', N44, 'kJ/h'],

        [45, '球团带出热量', N45, 'kJ/h'],
        [46, '鼓风干燥段带出热量', N46, 'kJ/h'],
        [47, '抽风干燥段带出热量', N47, 'kJ/h'],
        [48, '预热一段带出热量', N48, 'kJ/h'],
        [49, '预热二段带出热量', N49, 'kJ/h'],

        [50, '干返料带出热量', N50, 'kJ/h'],
        [51, '生料水分蒸发吸热', N51, 'kJ/h'],
        [52, '篦板带走热量', N52, 'kJ/h'],
        [53, '链篦机冷却水带走热量', N53, 'kJ/h'],
        [54, '链篦机炉体散热', N54, 'kJ/h'],
        [55, '回转窑烟气带走热量', N55, 'kJ/h'],
        [56, '回转窑炉门热辐射', N56, 'kJ/h'],
        [57, '窑体表面散热', N57, 'kJ/h'],
        [58, '环冷一段带出热量', N58, 'kJ/h'],
        [59, '环冷二段带出热量', N59, 'kJ/h'],
        [60, '环冷三段带出热量', N60, 'kJ/h'],
        [61, '环冷四段带出热量', N61, 'kJ/h'],
        [62, '环冷机冷却水带走热量', N62, 'kJ/h'],
        [63, '环冷机隔墙风带走热量', N63, 'kJ/h'],
        [64, '环冷机炉体散热', N64, 'kJ/h'],
        [65, '误差', N65, 't'],
        [66, '合计', N66, 'kJ/h'],

        [67, '喷煤量', N67, 't/h'],
        [68, '电耗', N68, 'MWh'],
        [69, '喷煤量碳排放', N69, 't/h'],
        [70, '电耗碳排放', N70, 't/h'],
        [71, '总碳排放', N71, 't/h'],
        [72, '余热利用率', N72, '%']
    ]
}

const getPart5JSON = (part1Data, part2Data, part3Data, part4Data) => {
    if(part1Data.N0 === undefined ||
        part2Data.N0 === undefined ||
        part3Data.N0 === undefined ||
        part4Data.N0 === undefined){
        return {}
    }

    const N0 = part2Data.N0
    const N2 = part2Data.N10 * part2Data.N11 / 1000
    const N4 = part3Data.N3 * 1.328466 / 1000
    const N18 = N2
    const N5 = N18 - N4
    const N6 = part4Data.N0 * part3Data.N1
    const N7 = part3Data.N0 * 1.1845 / 1000
    const N9 = part4Data.N0 * (part2Data.N51 - part4Data.N59) / 100 / 72 / 4 * 32
    const N10 = part4Data.N1 * 1.1845/1000
    const N8 = N10*0.89
    const N11 = part4Data.N2 * 1.1845/1000
    const N3 = N11*0.92
    const N12 = part4Data.N3 * 1.1845/1000
    const N1 = N12*0.92
    const N13 = part4Data.N4 * 1.1845/1000
    const N14 = N0 + N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10 + N11 + N12 + N13
    const N15 = part2Data.N1 * part2Data.N2 / 1000
    const N16 = part2Data.N4 * part2Data.N5 / 1000
    const N17 = part2Data.N7 * part2Data.N8 / 1000
    // N18在上面定义过了已经
    const N19 = part2Data.N13
    const N20 = part2Data.N14 * part2Data.N15 / 1000
    const N21 = N4
    const N22 = part4Data.N0
    const N23 = N8
    const N24 = N3
    const N25 = N1
    const N26 = N13*0.94
    const N27 = part2Data.N0 * part2Data.N49 / 100
    const N29 = N15 + N16 + N17 + N18 + N19 + N20 + N21 + N22 + N23 + N24 + N25 + N26 + N27
    const N28 = N14 - N29

    const N30 = part2Data.N0 * (part2Data.N49 / 100 * part1Data.N6 + (100 - part2Data.N49) / 100 *
        (part2Data.N50 * part1Data.N7 + part2Data.N51 * part1Data.N8 + part2Data.N52 * part1Data.N9
            + part2Data.N53 * part1Data.N10 + part2Data.N54 * part1Data.N11 + part2Data.N55 * part1Data.N12
            + part2Data.N56 * part1Data.N13 + part2Data.N57 * part1Data.N14) / 100) * part2Data.N48

    const N31 = part4Data.N0 * (part2Data.N51 - part4Data.N59) / 100 / 72 * part1Data.N5 * 1000000

    const N32 = N25 * part4Data.N15 * (part4Data.N78 * part1Data.N16 + part4Data.N80 * part1Data.N18
        + part4Data.N81 * part1Data.N19 + part4Data.N82 * part1Data.N15) / 100 * 1000

    const N33 = N18 * 1000 * (part2Data.N83 * part1Data.N16 + part2Data.N84 * part1Data.N17 + part2Data.N85 * part1Data.N18
        + part2Data.N86 * part1Data.N19 + part2Data.N87 * part1Data.N15) / 100 * 1000

    const N34 = N25 * part4Data.N14 * (part4Data.N71 * part1Data.N16 + part4Data.N74 * part1Data.N19
        + part4Data.N75 * part1Data.N15) / 100 * 1000

    const N35 = N21 * part3Data.N5 * (part3Data.N14 * part1Data.N16 + part3Data.N15 * part1Data.N17
        + part3Data.N18 * part1Data.N15) / 100 * 1000

    const N36 = N5 * 25 * (part2Data.N66 * part1Data.N16 + part2Data.N67 * part1Data.N15) / 100 * 1000

    const N37 = part3Data.N1 * part4Data.N0 * 28181.1 * 1000

    const N38 = N23 * part4Data.N13 * (part4Data.N66 * part1Data.N16 + part4Data.N70 * part1Data.N15) / 100 * 1000

    const N39 = N7 * part3Data.N4 * (part3Data.N19 * part1Data.N16 + part3Data.N20 * part1Data.N15) / 100 * 1000

    const N40 = N10 * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000
    const N41 = N11 * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000
    const N42 = N12 * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000
    const N43 = N13 * part4Data.N17 * (part4Data.N76 * part1Data.N16 + part4Data.N77 * part1Data.N15) / 100 * 1000

    const N44 = N30 + N31 + N32 + N33 + N34 + N35 + N36 + N37 + N38 + N39 + N40 + N41 + N42 + N43

    const N45 = part4Data.N0 * part4Data.N18 * (part4Data.N58 * part1Data.N7 + part4Data.N59 * part1Data.N8
        + part4Data.N60 * part1Data.N9 + part4Data.N61 * part1Data.N10 + part4Data.N62 * part1Data.N11
        + part4Data.N63 * part1Data.N12  + part4Data.N64 * part1Data.N13 + part4Data.N65 * part1Data.N14) / 100

    const N46 = N15 * part2Data.N3 * (part2Data.N68 * part1Data.N16 + part2Data.N69 * part1Data.N17 + part2Data.N70 * part1Data.N18
        + part2Data.N71 * part1Data.N19 + part2Data.N72 * part1Data.N15) / 100 * 1000
    const N47 = N16 * part2Data.N6 * (part2Data.N73 * part1Data.N16 + part2Data.N74 * part1Data.N17 + part2Data.N75 * part1Data.N18
        + part2Data.N76 * part1Data.N19 + part2Data.N77 * part1Data.N15) / 100 * 1000
    const N48 = N17 * part2Data.N9 * (part2Data.N78 * part1Data.N16 + part2Data.N79 * part1Data.N17 + part2Data.N80 * part1Data.N18
        + part2Data.N81 * part1Data.N19 + part2Data.N82 * part1Data.N15) / 100 * 1000
    const N49 = N33

    const N50 = part2Data.N13 * (0.2 * part2Data.N19 + 0.2 * part2Data.N20 + 0.3 * part2Data.N21 + 0.3 * part2Data.N22)
        * (part2Data.N58 * part1Data.N7 + part2Data.N59 * part1Data.N8 + part2Data.N60 * part1Data.N10
            + part2Data.N61 * part1Data.N11 + part2Data.N62 * part1Data.N12 + part2Data.N63 * part1Data.N13
            + part2Data.N64 * part1Data.N13 + part2Data.N65 * part1Data.N14) / 100

    const N51 = 31500 * 0.15 * (part1Data.N57 * (100 - 30) + part1Data.N62 + part1Data.N60 * (120 - 100))
        + 31500 * (1 - 0.15) * part1Data.N57 * (51 - 30)
        + 31500 * 0.55 * (part1Data.N59 * (100 - 51) + part1Data.N62 + part1Data.N61 * (144.55 - 100))
        + 31500 * 0.3 * part1Data.N58 * (95 - 51)
        + 31500 * 0.3 * (part1Data.N59 * (100 - 95) + part1Data.N62 + part1Data.N61 * (144.55 - 100))

    const N52 = part1Data.N65 * (part1Data.N63 * part2Data.N28 - part1Data.N64 * part2Data.N29)

    const N53 = part2Data.N23 * (part2Data.N26 * part2Data.N27 - part2Data.N24 * part2Data.N25)*1000

    const N54 =
        (
            (part2Data.N30 - part2Data.N47) * part1Data.N24 * part1Data.N20 * 3.6
            + (part2Data.N31 - part2Data.N47) * part1Data.N25 * part1Data.N21 * 3.6
            + (part2Data.N32 - part2Data.N47) * part1Data.N26 * part1Data.N32 * 3.6
            + (part2Data.N33 - part2Data.N47) * part1Data.N27 * part1Data.N23 * 3.6)
        + (
            (part2Data.N34 - part2Data.N47) * part1Data.N28 * part1Data.N32 * 3.6
            + (part2Data.N35 - part2Data.N47) * part1Data.N29 * part1Data.N33 * 3.6
            + (part2Data.N36 - part2Data.N47) * part1Data.N30 * part1Data.N34 * 3.6
            + (part2Data.N37 - part2Data.N47) * part1Data.N31 * part1Data.N35 * 3.6)
        + ((part2Data.N38 - part2Data.N47) * part1Data.N36 * part1Data.N40 * 3.6
            + (part2Data.N39 - part2Data.N47) * part1Data.N37 * part1Data.N41 * 3.6
            + (part2Data.N40 - part2Data.N47) * part1Data.N38 * part1Data.N42 * 3.6
            + (part2Data.N41 - part2Data.N47) * part1Data.N39 * part1Data.N43 * 3.6)
        + ((part2Data.N42 - part2Data.N47) * part1Data.N44 * part1Data.N48 * 3.6
            + (part2Data.N43 - part2Data.N47) * part1Data.N45 * part1Data.N49 * 3.6
            + (part2Data.N44 - part2Data.N47) * part1Data.N46 * part1Data.N50 * 3.6
            + (part2Data.N45 - part2Data.N47) * part1Data.N47 * part1Data.N51 * 3.6)
        + (part2Data.N46 - part2Data.N47) * part1Data.N51 * part1Data.N52 * 3.6

    const N55 = N35

    const N56 = 0.65 * part1Data.N74 * 20.43 * (Math.pow((273 + part3Data.N12) / 100, 4) - Math.pow((273 + part2Data.N47) / 100, 4))
        + 0.65 * part1Data.N74 * 20.43 * (Math.pow((273 + part3Data.N13) / 100, 4) - Math.pow((273 + part2Data.N47) / 100, 4))

    const N57 = (part3Data.N10 - 25) * part1Data.N66 * part1Data.N68 * 3.6 + (part3Data.N11 - 25) * part1Data.N67 * part1Data.N69 * 3.6
    const N58 = N38
    const N59 = N34
    const N60 = N32

    const N61 = N26 * part4Data.N16 * (part4Data.N83 * part1Data.N16 + part4Data.N85 * part1Data.N18
        + part4Data.N86 * part1Data.N19 + part4Data.N87 * part1Data.N15) / 100 * 1000

    const N62 =5557763

    const N63 =519190

    const N64 =
        ((part4Data.N41 - part2Data.N47) * part1Data.N75 * part1Data.N79 * 3.6
            + (part4Data.N42 - part2Data.N47) * part1Data.N76 * part1Data.N80 * 3.6
            + (part4Data.N43 - part2Data.N47) * part1Data.N77 * part1Data.N81 * 3.6
            + (part4Data.N44 - part2Data.N47) * part1Data.N78 * part1Data.N82 * 3.6)
        + ((part4Data.N45 - part2Data.N47) * part1Data.N83 * part1Data.N87 * 3.6
            + (part4Data.N46 - part2Data.N47) * part1Data.N84 * part1Data.N88 * 3.6
            + (part4Data.N47 - part2Data.N47) * part1Data.N85 * part1Data.N89 * 3.6
            + (part4Data.N48 - part2Data.N47) * part1Data.N86 * part1Data.N90 * 3.6)
        + ((part4Data.N49 - part2Data.N47) * part1Data.N91 * part1Data.N95 * 3.6
            + (part4Data.N50 - part2Data.N47) * part1Data.N92 * part1Data.N96 * 3.6
            + (part4Data.N51 - part2Data.N47) * part1Data.N93 * part1Data.N97 * 3.6
            + (part4Data.N52 - part2Data.N47) * part1Data.N94 * part1Data.N98 * 3.6)
        + ((part4Data.N53 - part2Data.N47) * part1Data.N99 * part1Data.N103 * 3.6
            + (part4Data.N54 - part2Data.N47) * part1Data.N100 * part1Data.N104 * 3.6
            + (part4Data.N55 - part2Data.N47) * part1Data.N101 * part1Data.N105 * 3.6
            + (part4Data.N56 - part2Data.N47) * part1Data.N102 * part1Data.N106 * 3.6)

    const N66 = N45 + N46 + N47 + N48 + N49 + N50 + N51 + N52 + N53 + N54 + N55 + N56 + N57 + N58 + N59 + N60 + N61 + N62 + N63 + N64
    const N65 = N66 - N44
    const N67 = part3Data.N1 * part4Data.N0
    const N68 = part3Data.N22 * part4Data.N0
    const N69 = part3Data.N1 * part4Data.N0 * part3Data.N21 * 44 / 12 / 100
    const N70 = part3Data.N22 * part4Data.N0 * (part3Data.N23 * 2/3 + part3Data.N24 * 1/3)
    const N71 = N69 + N70
    const N72 = (N49 + N55 + N58 + N59 + N60) / N66

    return {
        N0: N0,
        N1: N1,
        N2: N2,
        N3: N3,
        N4: N4,
        N5: N5,
        N6: N6,
        N7: N7,
        N8: N8,
        N9: N9,
        N10: N10,
        N11: N11,
        N12: N12,
        N13: N13,
        N14: N14,
        N15: N15,
        N16: N16,
        N17: N17,
        N18: N18,
        N19: N19,
        N20: N20,
        N21: N21,
        N22: N22,
        N23: N23,
        N24: N24,
        N25: N25,
        N26: N26,
        N27: N27,
        N28: N28,
        N29: N29,
        N30: N30,
        N31: N31,
        N32: N32,
        N33: N33,
        N34: N34,
        N35: N35,
        N36: N36,
        N37: N37,
        N38: N38,
        N39: N39,
        N40: N40,
        N41: N41,
        N42: N42,
        N43: N43,
        N44: N44,
        N45: N45,
        N46: N46,
        N47: N47,
        N48: N48,
        N49: N49,
        N50: N50,
        N51: N51,
        N52: N52,
        N53: N53,
        N54: N54,
        N55: N55,
        N56: N56,
        N57: N57,
        N58: N58,
        N59: N59,
        N60: N60,
        N61: N61,
        N62: N62,
        N63: N63,
        N64: N64,
        N65: N65,
        N66: N66,
        N67: N67,
        N68: N68,
        N69: N69,
        N70: N70,
        N71: N71,
        N72: N72
    }

}

const Parameters = () => {

    const part2Parameters = [
        [0, "生球进料量 ", 333.91, "t/h"],
        [1, "鼓风干燥段烟气排出量", 31743.52, "m3/h"],
        [2, "鼓风干燥段烟气密度", 0.92648, "kg/m3"],
        [3, "抽风干燥段烟气排出量", 387207, "m3/h"],
        [4, "抽风干燥段烟气密度", 0.716002028, "kg/m3"],
        [5, "预热一段烟气排出量", 406761, "m3/h"],
        [6, "预热一段烟气密度", 0.314326803, "kg/m3"],
        [7, "预热二段烟气排出量", 1202641, "m3/h"],
        [8, "预热二段烟气密度\n", 0.277289081, "kg/m3"],
        [9, "链篦机干返料\n", 5, "t/h"],
        [10, "链篦机除尘管飞灰含量", 1.2, "kg/m3"],
        [11, "链篦机除尘管风量\n", 1860, "m3/h"],
        [12, "鼓风干燥段气体温度", 350, "℃"],
        [13, "抽风干燥段气体温度", 220, "℃"],
        [14, "预热一段气体温度\n", 700, "℃"],
        [15, "预热二段气体温度\n", 1210, "℃"],
        [16, "鼓风干燥段最下层温度\n", 33, "℃"],
        [17, "抽风干燥段最下层温度\n", 65, "℃"],
        [18, "预热一段最下层温度\n", 285, "℃"],
        [19, "预热二段最下层温度\n", 724.9, "℃"],
        [20, "冷却水流量\n", 149.12, "m3/h"],
        [21, "冷却水进水温度\n", 68.5, "℃"],
        [22, "冷却水进水比热容\n", 4.183, "kJ/(kg*K)"],
        [23, "冷却水出水温度\n", 75, "℃"],
        [24, "冷却水出水比热容\n", 4.187, "kJ/(kg*K)"],
        [26, "机头篦板表面温度\n", 636.106667, "℃"],
        [27, "机尾篦板表面温度\n", 298.73333, "℃"],
        [28, "鼓风干燥段炉顶温度\n", 55.2, "℃"],
        [29, "鼓风干燥段炉底温度\n", 135.4, "℃"],
        [30, "鼓风干燥段东墙温度\n", 60.5, "℃"],
        [31, "鼓风干燥段西墙温度\n", 60.6, "℃"],
        [32, "抽风干燥段炉顶温度\n", 82.5, "℃"],
        [33, "抽风干燥段炉底温度\n", 135.7, "℃"],
        [34, "抽风干燥段东墙温度\n", 88.9, "℃"],
        [35, "抽风干燥段西墙温度\n", 90.7, "℃"],
        [36, "预热一段炉顶温度\n", 122, "℃"],
        [37, "预热一段炉底温度\n", 177.9, "℃"],
        [38, "预热一段东墙温度\n", 109, "℃"],
        [39, "预热一段西墙温度\n", 128, "℃"],
        [40, "预热二段炉顶温度\n", 112.5, "℃"],
        [41, "预热二段炉底温度\n", 260.4, "℃"],
        [42, "预热二段东墙温度\n", 108.6, "℃"],
        [43, "预热二段西墙温度\n", 105.3, "℃"],
        [44, "链篦机后端墙温度\n", 60.5, "℃"],
        [45, "环境温度\n", 25, "℃"],
        [46, "生球进料温度\n", 30, "℃"],
        [47, "水分", 9.06, "%"],
        [48, "Fe2O3", 65.385, "%"],
        [49, "FeO", 28.35, "%"],
        [50, "SiO2", 5.07, "%"],
        [51, "CaO", 0.32, "%"],
        [52, "MgO", 0.31, "%"],
        [53, "Al2O3", 0.51, "%"],
        [54, "S", 0.025, "%"],
        [55, "P", 0.03, "%"],
        [56, "Fe2O3", 93.395, "%"],
        [57, "FeO", 0.34, "%"],
        [58, "SiO2", 5.07, "%"],
        [59, "CaO", 0.32, "%"],
        [60, "MgO", 0.31, "%"],
        [61, "Al2O3", 0.51, "%"],
        [62, "S", 0.025, "%"],
        [63, "P", 0.03, "%"],
        [64, "O2", 21, "%"],
        [65, "N2", 79, "%"],
        [66, "O2", 19.83, "%"],
        [67, "CO2", 0.55, "%"],
        [68, "NO2", 0.00014, "%"],
        [69, "SO2", 0.0007, "%"],
        [70, "N2", 79.61979, "%"],
        [71, "O2", 19.1, "%"],
        [72, "CO2", 0.89, "%"],
        [73, "NO2", 0.00072, "%"],
        [74, "SO2", 0.00014, "%"],
        [75, "N2", 80.00914, "%"],
        [76, "O2", 18.8, "%"],
        [77, "CO2", 1.6, "%"],
        [78, "NO2", 0.00125, "%"],
        [79, "SO2", 0.00117, "%"],
        [80, "N2", 79.59758, "%"],
        [81, "O2", 13.8, "%"],
        [82, "CO2", 5.9, "%"],
        [83, "NO2", 0.00125, "%"],
        [84, "SO2", 0.00124, "%"],
        [85, "N2", 80.29751, "%"]
    ]

    const part3Parameters = [
        [0, "助燃风流量", 5886.72, "m3/h"],
        [1, "煤粉单耗", 0.02, "t/h"],
        [2, "煤粉烟气量", 19.73276, "m3/kg"],
        [3, "煤粉单位时间烟气量", 122374.6844, "m3/h"],
        [4, "回转窑助燃风温度", 25, "℃"],
        [5, "回转窑烟气温度", 1167, "℃"],
        [6, "窑头东冷却风量", 63918, "m3"],
        [7, "窑头东冷却风出风温度", 35.26, "℃"],
        [8, "窑头西冷却风量", 34714.6, "m3"],
        [9, "窑头西冷却风出风温度", 35.26, "℃"],
        [10, "窑身表面温度", 256.59, "℃"],
        [11, "窑尾表面温度", 130.56, "℃"],
        [12, "窑头炉门温度", 1032, "℃"],
        [13, "窑尾炉门温度", 980, "℃"],
        [14, "O2", 14.8, "%"],
        [15, "CO2", 5.7, "%"],
        [16, "NO2", 0, "%"],
        [17, "SO2", 0, "%"],
        [18, "N2", 79.5, "%"],
        [19, "O2", 21, "%"],
        [20, "N2", 79, "%"],
        [21, "煤粉含碳量", 89.40, "%"],
        [22, "链-回-环耗电", 0.031, "MW/t"],
        [23, "外购电碳排放因子", 0.9944, "t(CO2)/MWh"],
        [24, "自发电碳排放因子", 0.389, "t(CO2)/MWh"]
    ]

    const part4Parameters = [
        [0, '环冷机出料量', 310.08, 't/h'],
        [1, '1#风机风量', 158400, 'm3/h'],
        [2, '2#风机风量', 144000, 'm3/h'],
        [3, '3#风机风量', 144000, 'm3/h'],
        [4, '4#风机风量', 144000, 'm3/h'],
        [5, '环冷一段出风量', 356252.37, 'm3/h'],
        [6, '环冷二段出风量', 384811, 'm3/h'],
        [7, '环冷三段出风量', 300013.43, 'm3/h'],
        [8, '环冷四段出风量', 99340.01, 'm3/h'],
        [9, '环冷一段气体密度', 0.257093227, 'kg/m3'],
        [10, '环冷二段气体密度', 0.362784173, 'kg/m3'],
        [11, '环冷三段气体密度', 0.566595506, 'kg/m3'],
        [12, '环冷四段气体密度', 0.941351206, 'kg/m3'],
        [13, '环冷一段温度', 1100, '℃'],
        [14, '环冷二段温度', 800, '℃'],
        [15, '环冷三段温度', 350, '℃'],
        [16, '环冷四段温度', 105.6, '℃'],
        [17, '鼓风温度', 25, '℃'],
        [18, '球团出料温度', 32, '℃'],
        [19, '冷却水进水温度', 68.5, '℃'],
        [20, '冷却水进水比热容', 4.183, 'kJ(kg*K)'],
        [21, '高端冷却水流量', 33.15, 'm3/h'],
        [22, '高端冷却水出水温度', 56.22, '℃'],
        [23, '高端冷却水出水比热容', 4.174, 'kJ(kg*K)'],
        [24, '低端冷却水流量', 11, 'm3/h'],
        [25, '低端冷却水出水温度', 58.94, '℃'],
        [26, '低端冷却水出水比热容', 4.174, 'kJ(kg*K)'],
        [27, '平料托冷却水流量', 33, 'm3/h'],
        [28, '平料托冷却水出水温度', 63.43, '℃'],
        [29, '平料托冷却水出水比热容', 4.174, 'kJ(kg*K)'],
        [30, '固定筛条冷却水流量', 164.94, 'm3/h'],
        [31, '固定筛条冷却水出水温度', 49.1, '℃'],
        [32, '固定筛条冷却水出水比热容', 4.174, 'kJ(kg*K)'],
        [33, '冷却风进风温度', 0, '℃'],
        [34, '冷却风进风比热容', 1.2982, 'kJ(kg*K)'],
        [35, '隔墙风流量', 1865.6, 'm3/h'],
        [36, '隔墙风出风温度', 75, '℃'],
        [37, '隔墙风出风比热容', 1.319, 'kJ(kg*K)'],
        [38, '料斗隔墙风流量', 3469, 'm3/h'],
        [39, '料斗隔墙风出风温度', 94.3, '℃'],
        [40, '料斗隔墙风出风比热容', 1.305, 'kJ(kg*K)'],
        [41, '环冷一段炉顶温度', 114.87, '℃'],
        [42, '环冷一段炉底温度', 29.62, '℃'],
        [43, '环冷一段炉墙温度', 110.06, '℃'],
        [44, '环冷一段端墙温度', 139.61, '℃'],
        [45, '环冷二段炉顶温度', 90.13, '℃'],
        [46, '环冷二段炉底温度', 27.77, '℃'],
        [47, '环冷二段炉墙温度', 130.83, '℃'],
        [48, '环冷二段端墙温度', 127.54, '℃'],
        [49, '环冷三段炉顶温度', 105.83, '℃'],
        [50, '环冷三段炉底温度', 28.58, '℃'],
        [51, '环冷三段炉墙温度', 122.92, '℃'],
        [52, '环冷三段端墙温度', 48.48, '℃'],
        [53, '环冷四段炉顶温度', 98.05, '℃'],
        [54, '环冷四段炉底温度', 27.93, '℃'],
        [55, '环冷四段炉墙温度', 59.98, '℃'],
        [56, '环冷四段端墙温度', 33.53, '℃'],
        [57, '环境温度', 25, '℃'],
        [58, 'Fe2O3', 90.435, '%'],
        [59, 'FeO', 0.34, '%'],
        [60, 'SiO2', 5.07, '%'],
        [61, 'CaO', 0.32, '%'],
        [62, 'MgO', 0.31, '%'],
        [63, 'Al2O3', 0.51, '%'],
        [64, 'S', 0.025, '%'],
        [65, 'P', 0.03, '%'],
        [66, 'O2', 20.3, '%'],
        [67, 'CO2', 0, '%'],
        [68, 'NO2', 0, '%'],
        [69, 'SO2', 0, '%'],
        [70, 'N2', 79.7, '%'],
        [71, 'O2', 20.27, '%'],
        [72, 'CO2', 0, '%'],
        [73, 'NO2', 0, '%'],
        [74, 'SO2', 6.7e-05, '%'],
        [75, 'N2', 79.729933, '%'],
        [76, 'O2', 21, '%'],
        [77, 'N2', 79, '%'],
        [78, 'O2', 20.12, '%'],
        [79, 'CO2', 0, '%'],
        [80, 'NO2', 8e-05, '%'],
        [81, 'SO2', 0.00012, '%'],
        [82, 'N2', 79.8798, '%'],
        [83, 'O2', 20.02, '%'],
        [84, 'CO2', 0, '%'],
        [85, 'NO2', 0.00077, '%'],
        [86, 'SO2', 0.00023, '%'],
        [87, 'N2', 79.979, '%']
    ]

    const part5Parameters = [
        [0, "生球进料量", 350, "t"],
        [1, "鼓风干燥段进风量", 0, "t"],
        [2, "抽风干燥段进风量", 0, "t"],
        [3, "预热一段进风量", 0, "t"],
        [4, "预热二段进风量", 0, "t"],
        [5, "预热二段吸风量", 0, "t"],
        [6, "喷煤消耗量\n", 0, "t"],
        [7, "回转窑助燃风质量", 0, "t"],
        [8, "回转窑二次风质量", 0, "t"],
        [9, "球团氧化增重\n", 0, "t"],
        [10, "环冷一段进风量", 0, "t"],
        [11, "环冷二段进风量", 0, "t"],
        [12, "环冷三段进风量", 0, "t"],
        [13, "环冷四段进风量", 0, "t"],
        [14, "合计\n", 0, "t"],
        [15, "鼓风干燥段烟气量\n", 0, "t"],
        [16, "抽风干燥段烟气量", 0, "t"],
        [17, "预热一段烟气量", 0, "t"],
        [18, "预热二段烟气量", 0, "t"],
        [19, "链篦机干返料\n", 0, "t"],
        [20, "链篦机除尘飞灰量", 0, "t"],
        [21, "回转窑烟气量\n", 0, "t"],
        [22, "球团出料量\n", 0, "t"],
        [23, "冷风一段烟气量\n", 0, "t"],
        [24, "冷风二段烟气量\n", 0, "t"],
        [25, "冷风三段烟气量\n", 0, "t"],
        [26, "冷风四段烟气量\n", 0, "t"],
        [27, "水分蒸发量\n", 0, "t"],
        [28, "误差\n", 0, "t"],
        [29, "合计", 0, "t"],
        [30, "生球带入热量\n", 0, "kJ/h"],
        [31, "球团FeO放热量", 0, "kJ/h"],
        [32, "鼓风干燥段进入热量", 0, "kJ/h"],
        [33, "抽风干燥段进入热量", 0, "kJ/h"],
        [34, "预热一段进入热量", 0, "kJ/h"],
        [35, "预热二段进入热量", 0, "kJ/h"],
        [36, "预热二段吸风热量", 0, "kJ/h"],
        [37, "回转窑燃料燃烧热量", 0, "kJ/h"],
        [38, "回转窑二次风热量", 0, "kJ/h"],
        [39, "回转窑助燃风热量", 0, "kJ/h"],
        [40, "环冷一段带入热量", 0, "kJ/h"],
        [41, "环冷二段带入热量", 0, "kJ/h"],
        [42, "环冷三段带入热量", 0, "kJ/h"],
        [43, "环冷四段带入热量", 0, "kJ/h"],
        [44, "合计\n", 0, "kJ/h"],
        [45, "球团带出热量\n", 0, "kJ/h"],
        [46, "鼓风干燥段带出热量", 0, "kJ/h"],
        [47, "抽干段与一段东侧带出热量", 0, "kJ/h"],
        [48, "抽干段与一段西侧带出热量", 0, "kJ/h"],
        [49, "预热二段带出热量", 0, "kJ/h"],
        [50, "干返料带出热量", 0, "kJ/h"],
        [51, "生料水分蒸发吸热", 0, "kJ/h"],
        [52, "篦板带走热量\n", 0, "kJ/h"],
        [53, "链篦机冷却水带走热量", 0, "kJ/h"],
        [54, "链篦机炉体散热", 0, "kJ/h"],
        [55, "回转窑烟气带走热量", 0, "kJ/h"],
        [56, "回转窑炉门热辐射", 0, "kJ/h"],
        [57, "窑体表面散热\n", 0, "kJ/h"],
        [58, "环冷一段带出热量", 0, "kJ/h"],
        [59, "环冷二段带出热量", 0, "kJ/h"],
        [60, "环冷三段带出热量", 0, "kJ/h"],
        [61, "环冷四段带出热量", 0, "kJ/h"],
        [62, "环冷机冷却水带走热量", 0, "kJ/h"],
        [63, "环冷机冷却风带走热量", 0, "kJ/h"],
        [64, "环冷机炉体散热", 0, "kJ/h"],
        [65, "误差\n", 0, "t"],
        [66, "合计", 0, "kJ/h"],
        [67, "喷煤量\n", 0, "t/h"],
        [68, "电耗\n", 0, "MWh"],
        [69, "喷煤量碳排放\n", 0, "t/h"],
        [70, "电耗碳排放\n", 0, "t/h"],
        [71, "总碳排放\n", 0, "t/h"],
        [72, "余热利用率", 0, "%"],
    ]
    return [part2Parameters, part3Parameters, part4Parameters, part5Parameters]
}

const randomData = () => {
    const times = ["2021-10-1", "2021-11-1", "2021-12-1", "2022-1-1", "2022-2-1", "2022-3-1", "2022-4-1", "2022-5-1", "2022-6-1", "2022-7-1"]
    const data = []
    for(let i in times){
        const value = [times[i], parseFloat(((Math.random()*80) + 30).toFixed(3))]
        data.push(value)
    }
    return data
}

export default Parameters
export {getPart1, getPart2, getPart3, getPart4, getPart5, randomData, getPart5JSON}