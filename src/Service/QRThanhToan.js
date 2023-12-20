import React from 'react';
import QRCode from 'qrcode.react';

function QRThanhToan() {
    const sendRequest = async () => {
        // Tạo một đối tượng requestOptions chứa các thông tin cần thiết
        const requestOptions = {
            method: 'POST', // Phương thức là POST
            headers: { 'Content-Type': 'application/json' }, // Loại nội dung là JSON
            body: JSON.stringify({ title: 'React POST Request Example' }) // Nội dung cần gửi là một đối tượng JSON
        };
        // Sử dụng fetch() với URL của server và requestOptions
        //  const response = await fetch('https://example.com/api/posts', requestOptions);
        // Chuyển đổi response sang JSON
        //    const data = await response.json();
        // Xử lý dữ liệu trả về theo ý muốn
        console.log("scanned");
    };
    const onScan = (content) => {
        // Kiểm tra nội dung của mã QR
        // if (content === 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39723fcf5f7048ffa82f684c9b0f3184') {
        // Nếu đúng, gọi hàm sendRequest
        alert('scanned')
        sendRequest();
        // }
    };
    return (
        <div style={{ zIndex: 4, left: '0px', top: '0px' }}>
            <h2>Thanh toán bằng mã QR</h2>
            <QRCode value="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39723fcf5f7048ffa82f684c9b0f3184"
                size={256} level="H" renderAs="svg" onScan={onScan} />
        </div>
    );
}

export default QRThanhToan;