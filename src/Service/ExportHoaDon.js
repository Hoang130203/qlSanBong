import jsPDF from "jspdf";
import 'jspdf-autotable';
import { font } from "./font";
class ExportHoaDon {
    Export(content) {
        var doc = new jsPDF('l', 'px', 'a4');
        doc.addPage(1000, 1500);
        doc.internal.getNumberOfPages(); // lay page hiện tại 2
        //Giờ mình muốn quay trở lại làm việc vs page 1 thì dùng
        doc.setPage(1);
        doc.text(2, 2, content);
    }

    GenerateInvoice = async (invoiceInf) => {
        // Tạo một instance của jsPDF
        const doc = new jsPDF();
        // Thiết lập thông tin hóa đơn
        const invoiceInfo = invoiceInf ? invoiceInf : {
            "order": {
                "orderid": 56,
                "phonenumber": "0973006825",
                "totalcost": 2435000,
                "status": "Hoàn thành",
                "time": "2023-12-19T10:54:13.1622492"
            },
            "listsp": [
                {
                    "productName": "QUẢ BÓNG CHUYỀN THĂNG LONG THI ĐẤU VB7700",
                    "quantity": 3,
                    "cost": 795000,
                    "img": "http://res.cloudinary.com/dqwouu351/image/upload/v1702452542/Home/bwkrcd1sxu37farexmzq.jpg"
                },
                {
                    "productName": "Bóng đá trẻ em",
                    "quantity": 3,
                    "cost": 80000,
                    "img": "http://res.cloudinary.com/dqwouu351/image/upload/v1701613627/Home/ssqornykkq51gna5nzo3.jpg"
                },
                {
                    "productName": "Bó gối thể thao",
                    "quantity": 2,
                    "cost": 90000,
                    "img": "http://res.cloudinary.com/dqwouu351/image/upload/v1701868719/Home/p3zq3isuugllnoeiv4db.jpg"
                }
            ],
            "user": {
                "phonenumber": "0973006825",
                "name": "mai minh hoàng",
                "birthdate": null,
                "gender": true,
                "address": "nghệ an",
                "avt": "http://res.cloudinary.com/dqwouu351/image/upload/v1702478388/Home/ihqztxdsjsmrmev1faur.jpg"
            }
        };
        // Bắt đầu vẽ hóa đơn
        //doc.setFont("Courier-BoldOblique");
        doc.addFileToVFS("WorkSans-normal.ttf", font);
        doc.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
        doc.setFont("WorkSans");
        doc.setFontSize(15);
        doc.setTextColor(255, 0, 0);
        doc.text('Project 1 shop', 35, 10, 'center');
        doc.setFontSize(30);
        doc.setTextColor(0, 0, 0);
        doc.text('Hóa đơn', 105, 20, 'center');
        doc.setFontSize(12);
        let verticalPosition = 40;
        doc.text(`Tên hóa đơn: Hóa đơn sản phẩm`, 20, verticalPosition);
        verticalPosition += 10;
        doc.text(`Mã Hóa đơn: ${invoiceInfo.order.orderid}`, 20, verticalPosition);
        verticalPosition += 10;

        // Vẽ hình ảnh vào tài liệu PDF

        //   const startYTable = verticalPosition ; // Điều chỉnh vị trí startY của bảng thông tin

        // Vẽ bảng danh sách đơn hàng
        const tableColumn = ['Số thứ tự', 'Tên sản phẩm', 'Đơn giá', 'Số lượng', 'Tổng'];
        const tableRows = invoiceInfo.listsp.map((item, index) => [
            //  { image: canvass[index], fit: [imgWidth, imgHeight] },
            index + 1,
            item.productName,
            `${item.cost.toLocaleString()} đ`,
            item.quantity,
            `${(item.cost * item.quantity).toLocaleString()} đ`,
        ]);

        doc.autoTable({
            startY: verticalPosition, // Bắt đầu vẽ từ vị trí thích hợp (phía dưới hình ảnh)
            head: [tableColumn],
            body: tableRows,
            styles: { font: "WorkSans" }
        });
        verticalPosition += 7
        /*       doc.autoTable({
                   startY: verticalPosition,
                   head: [tableColumn],
                   body: tableRows,
                   styles: { font: "WorkSans" }
               });
       */
        // Tính tổng tiền
        const total = invoiceInfo.order.totalcost;
        verticalPosition += 14 * invoiceInfo.listsp.length;
        doc.text(`Tổng tiền: ${total.toLocaleString()} đ`, 180, verticalPosition, null, null, 'right');
        verticalPosition += 10;

        // Thêm thông tin người mua hàng và thời gian
        doc.text(`Khách hàng: ${invoiceInfo.user.name}`, 20, verticalPosition);
        verticalPosition += 10;
        doc.text(`Địa chỉ: ${invoiceInfo.user.address}`, 20, verticalPosition);
        verticalPosition += 10;
        doc.text(`Thời gian đặt: ${invoiceInfo.order.time}`, 20, verticalPosition);
        verticalPosition += 10;
        doc.text(`Trạng thái: ${invoiceInfo.order.status}`, 20, verticalPosition);

        // Xuất file PDF với tên 'invoice.pdf'
        doc.save('invoice.pdf');



    };


}

export default new ExportHoaDon();