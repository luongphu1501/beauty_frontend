import Excel from 'exceljs';
import { saveAs } from 'file-saver';

const saveExcel = async (userdata) => {
    const workSheetName = 'Worksheet-1';
    const workbook = new Excel.Workbook();

    const columns = [
        { header: 'STT', key: "stt" },
        { header: 'Sản phẩm ', key: 'name' },
        { header: 'Doanh thu sản phẩm', key: 'product_renevue' },

    ];

    try {

        const fileName = "baocao";
        const workSheetName = "worksheetName";


        const worksheet = workbook.addWorksheet(workSheetName);

        worksheet.columns = columns;

        worksheet.mergeCells("A1:C1")
        worksheet.mergeCells("A2:C2")
        worksheet.mergeCells("A3:C3")
        worksheet.mergeCells("A4:C4")

        worksheet.getRow(1).height = 40
        worksheet.getRow(2).height = 40
        worksheet.getRow(3).height = 50
        worksheet.getRow(4).height = 40

        let companyName = worksheet.getCell("A1")

        companyName.value = "Cửa hàng mỹ phẩm Nhóm 06"
        companyName.alignment = {
            vertical: 'middle',
            indent: 1
        }
        companyName.border = "none";
        companyName.font = {
            size: 12,
        };

        let companyAdd = worksheet.getCell("A2")
        companyAdd.value = "Địa chỉ: Km 10 Trần Phú - Mỗ Lao - Hà Đông - Hà Nội";
        companyAdd.alignment = {
            vertical: "middle",
            indent: 1
        }
        companyAdd.font = {
            size: 12,
        };


        let title = worksheet.getCell("A3")
        title.value = "Báo cáo doanh số sản phẩm"
        title.alignment = {
            horizontal: "center",
            vertical: "middle"
        }
        title.font = {
            bold: true,
            size: 18,
        };

        let year = worksheet.getCell("A4");
        year.value = `Năm 2023`
        year.alignment = {
            horizontal: "center",
            vertical: "middle"
        }
        year.font = {
            size: 14,
        };
        const stt = worksheet.getColumn(1)
        const product = worksheet.getColumn(2)
        const doanhthu = worksheet.getColumn(3)
        stt.width = 10
        product.width = 40
        doanhthu.width = 40

        let header = worksheet.addRow(["STT", "Sản phẩm", "Doanh thu"])
        header.alignment = {
            vertical: "middle",
            horizontal: "center"
        }
        header.height = 30

        header.eachCell({ includeEmpty: false }, cell => {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'DEFAD5' },
                bgColor: { argb: '' },
            };
        })

        header.height = 30
        userdata.forEach((singleData, index) => {
            let row = worksheet.addRow({ "stt": index + 1, ...singleData });
            row.alignment = {
                vertical: "middle",
                indent: 3
            }
            row.height = 25
            row.eachCell({ includeEmpty: false }, cell => {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            })
        });

        const listdoanhthu = userdata.map(item => item.product_renevue)
        const tong = listdoanhthu.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


        let total = worksheet.addRow(["", "Tổng cộng", tong])
        total.alignment = {
            vertical: "middle",
            indent: 3
        }
        total.height = 25
        total.eachCell({ includeEmpty: false }, cell => {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        })
        total.font = {
            bold: true,
        }

        worksheet.addRow([]);

        let footer = worksheet.addRow([])
        let d = new Date();
        let date = `Ngày ${d.getDate()}, tháng ${d.getMonth()}, năm ${d.getFullYear()}`;
        footer.getCell(3).value = `Hà Nội, ${date}`;
        footer.alignment = {
            vertical: "middle",
            indent: 1
        }
        footer.height = 25
        footer.font = {
            size: 12
        }

        let adminReport = worksheet.addRow(["", "", "Người báo cáo"]);
        adminReport.alignment = {
            vertical: "middle",
            horizontal: "center"
        }
        adminReport.height = 25
        adminReport.font = {
            size: 12
        }

        const buf = await workbook.xlsx.writeBuffer();


        saveAs(new Blob([buf]), `${fileName}.xlsx`);
    } catch (error) {
        console.error('<<<ERRROR>>>', error);
        console.error('Something Went Wrong', error.message);
    } finally {

        workbook.removeWorksheet(workSheetName);
    }
};


export {
    saveExcel
}