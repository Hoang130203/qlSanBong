import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import * as signalR from '@microsoft/signalr';
import ClassApi2 from '../api/API2'
import './tick.css';
//const base_api = "https://dd38-2405-4802-1caa-93c0-c443-5313-6910-82b5.ngrok-free.app/api/Donhangs/ThanhToanQr"
const base_api = 'https://hoangmm215381.somee.com/api/Donhangs/ThanhToanQr'

function QRThanhToan({ phone, id }) {
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
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    /* useEffect(() => {
         let connection
         try {
             connection = new signalR.HubConnectionBuilder()
                 .withUrl("https://localhost:7037/payment") // Địa chỉ Hub SignalR trong ASP.NET
                 .configureLogging(signalR.LogLevel.Information)
                 .build();
             connection.on("SendPaymentConfirmationToClient", (phone) => {
                 console.log('message receive: ')
             })
             connection.start()
             connection.invoke("GetConnectionIdForUser", { phone }).then((response) => {
                 localStorage.setItem('connectionId', response)
             }).catch((error) => {
                 console.error('Error getting connectionId:', error);
             });
         } catch (error) {
             console.log('error')
         }
         return () => {
             connection.stop();
         };
     }, []);*/
    const [countdown, setCountdown] = useState(60);
    const [success, setSuccess] = useState(false);
    const [time, setTime] = useState()
    useEffect(() => {
        setTime(encodeURIComponent(new Date().toISOString()))
        const interval = setInterval(() => {
            // Gọi API tại đây
            ClassApi2.CheckThanhToan(id)
                .then(response => {
                    // Xử lý kết quả trả về nếu cần
                    if (response.data.success == true) {
                        //   alert(response.data.message)
                        setSuccess(true);
                        setCountdown(0)
                        clearInterval(interval);
                        setTimeout(() => {
                            window.location.reload()
                        }, 4000);
                    }
                })
                .catch(error => {
                    // Xử lý lỗi nếu có
                });
            //  setCountdown(prevCountdown => prevCountdown - 5);
        }, 5000); // Gửi một request sau mỗi 5 giây

        // Hủy interval sau khi đã gửi đủ số lượng request
        setTimeout(() => {
            clearInterval(interval);
        }, 60000); // Dừng sau 1 phút
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            // Giảm thời gian đếm ngược mỗi giây
            if (countdown > 0) {
                setCountdown(prevCountdown => prevCountdown - 1);
            }
        }, 1000); // Cập nhật mỗi giây

        // Clear timeout khi countdown = 0 hoặc component unmount
        return () => clearTimeout(timer);
    }, [countdown]);
    return (
        <div style={{ zIndex: 4, left: '0px', top: '0px', minHeight: '250px' }}>
            <h2>Thanh toán bằng mã QR</h2>
            <div>{success ? <h3 style={{ color: 'green' }}>Thành công!</h3> : (countdown == 0) ? <h3 style={{ color: 'red' }}>Hết hạn</h3> : <h3>Thời gian đếm ngược: {countdown} giây</h3>}
            </div>
            {success ?
                <div className="tick">&#10003;</div> // Hiển thị dấu tích khi request thành công
                :
                <QRCode value={base_api + "?phone=" + phone + "&id=" + id + '&time=' + time}
                    size={256} level="H" renderAs="svg" />}

        </div>
    );
}

export default QRThanhToan;