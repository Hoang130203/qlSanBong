import React from 'react';
import * as XLSX from 'xlsx';

class ExportToExcel {
    export = (data, name) => {
        // Dữ liệu bạn muốn xuất ra file Excel
        if (data == null) {
            data = [
                ['Tên', 'Age', 'Email'],
                ['Mai Minh Hoàng', 30, 'john@example.com'],
                ['Há Há', 28, 'jane@example.com'],
                // Thêm dữ liệu khác nếu cần
            ];
        }
        name ? (name = name) : (name = 'Danh sách sân bóng')
        // Tạo một WorkSheet
        const ws = XLSX.utils.aoa_to_sheet(data);

        // Tạo một WorkBook
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Chuyển đổi WorkBook thành ArrayBuffer (dữ liệu nhị phân)
        const wbout = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });

        // Tạo một Blob và tải xuống file Excel
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        const fileName = name + '.xlsx';

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // Cho trình duyệt Internet Explorer
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            // Cho các trình duyệt khác
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    };

};

export default new ExportToExcel()
