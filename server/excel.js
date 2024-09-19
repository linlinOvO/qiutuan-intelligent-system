const XLSX = require('sheetjs-style')
const path = require("path")

const exportExcel = (data, workSheetName, filePath) => {
    let workSheetColumnNames = [
        "时间",
        "预热I段氧含量",
        "预热II段氧含量"
    ];

    // 改变每列宽度
    function fitToColumn(arrayOfArray) {
        // get maximum character of each column
        // return arrayOfArray[0].map((a, i) => ({ wch: Math.max(...arrayOfArray.map(a2 => a2[i] ? a2[i].toString().length * 3 : 0)) }));

        return [ { wch: 30 }, { wch: 21 }, { wch: 20 }, { wch: 18 } ]
    }

    // 改变每行高度
    function fitToRows(arrayOfArray) {
        return arrayOfArray.map(() => ({ hpt: 32 }));
    }

    const dataList = data.map(u => {
        return [u.testTime, u.oxygenContent, u.oxygenContentTwo]
    })
    const workBook = XLSX.utils.book_new()
    const workSheetData = [
        workSheetColumnNames,
        ...dataList
    ]
    const workSheet = XLSX.utils.aoa_to_sheet(workSheetData)
    // const workSheetRows =  [
    //     {hpt: 22}, // row 1 sets to the height of 12 in points
    //     {hpx: 30}, // row 2 sets to the height of 16 in pixels
    // ];
    // const workSheetColumns = [
    //     {wch:6},
    //     {wch:7},
    //     {wch:10},
    //     {wch:20}
    // ];

    workSheet['!cols'] = fitToColumn(dataList);
    workSheet['!rows'] = fitToRows(dataList)
    // workSheet['A1'].s = {
    //     font: {
    //         name: 'arial',
    //         sz: 24,
    //         bold: true,
    //         color: "#F2F2F2"
    //     },
    // }
    for (let i in workSheet) {
        if (typeof (workSheet[i]) != "object") continue;
        let cell = XLSX.utils.decode_cell(i);

        workSheet[i].s = { // styling for all cells
            font: {
                name: 'arial',
                sz: 18,
                bold: true,
                color: "#F2F2F2"
            },
            alignment: {
                vertical: "center",
                horizontal: "center",
                wrapText: '1', // any truthy value here
            },
            border: {
                right: {
                    style: "thin",
                    color: "000000"
                },
                left: {
                    style: "thin",
                    color: "000000"
                },
            }
        };

        if (cell.c === 0) { // first column
            workSheet[i].s.numFmt = "DD/MM/YYYY HH:MM"; // for dates
            workSheet[i].z = "DD/MM/YYYY HH:MM";
        } else {
            // workSheet[i].s.numFmt = "00.00"; // other numbers
        }

        if (cell.r === 0) { // first row
            workSheet[i].s.border.bottom = { // bottom border
                style: "thin",
                color: "000000"
            };
        }

        if (cell.r % 2) { // every other row
            workSheet[i].s.fill = { // background color
                patternType: "solid",
                fgColor: {rgb: "b2b2b2"},
                bgColor: {rgb: "b2b2b2"}
            };
        }
    }
    XLSX.utils.book_append_sheet(workBook, workSheet, workSheetName)
    XLSX.writeFile(workBook, path.resolve(filePath))
}

module.exports = exportExcel