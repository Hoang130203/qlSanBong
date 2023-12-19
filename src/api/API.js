import axios from "axios";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
const base_api = "https://localhost:7037"

const headers = {
    "access-control-allow-origin": "*",
    "content-type": "application/json; charset=utf-8 ",
};
class ClassApi {
    /***
     * custom api
     */
    //post image api
    PostImage(img) {

        const data = new FormData();
        data.append('file', img);
        data.append('upload_preset', 'ey8cuam4');
        data.append('cloud_name', 'dqwouu351');
        data.append('folder', 'Home');
        return axios.post('https://api.cloudinary.com/v1_1/dqwouu351/image/upload', data);
    }
    PostImage2(img) {
        return (
            //In order to use the SDK, you need to provide it with a few configuration parameters. 
            //The configuration parameters can be applied directly to the IKImage component or using 
            //an IKContext component.

            <IKContext
                publicKey="public_uC6iAG854UV8C8muHlL0a2X3+GM="
                urlEndpoint="https://ik.imagekit.io/skqcemhcwk"
                transformationPosition="path"
                authenticationEndpoint="http://www.yourserver.com/auth">


                <IKImage path="/default-image.jpg" transformation={[{
                    "height": "300",
                    "width": "400"
                }]} />

                <IKUpload fileName="my-upload" />
            </IKContext>
        )
    }
    /****
     * api admin
     */
    //
    //Api thống kê
    //1 tuần qua
    GetDash1W() {
        return axios.get(base_api + '/api/Thongkes/Doanhso1W', { headers })
    }
    GetDash1M() {
        return axios.get(base_api + '/api/Thongkes/Doanhso1Month', { headers })
    }
    GetDash1Y(year) {
        return axios.get(base_api + '/api/Thongkes/DoanhSo1Y?Year=' + year, { headers })
    }
    //api sân bóng cho admin
    //Them san bong 
    PostField(name, cost, address, type, detail, img) {
        return axios.post(base_api + '/api/Sanbongs', {
            "fieldid": "strin",
            "price": cost,
            "linkimg": img,
            "address": address,
            "rate": 0,
            "type": type,
            "decription": detail,
            "name": name
        }, { headers })
    }
    //api sân bóng theo  id
    GetField(id) {
        return axios.get(base_api + '/api/Sanbongs/' + id)
    }
    //Sua san bong
    PutField(sanbong) {
        console.log(sanbong)
        return axios.put(base_api + '/api/Sanbongs/update?id=' + sanbong.fieldid, sanbong, { headers })
    }
    //api all san bong
    GetAllField() {
        return axios.get(base_api + '/api/Sanbongs/all')
    }
    //api delete san bong
    DeleteField(id) {
        return axios.delete(base_api + '/api/Sanbongs/' + id, { headers })
    }

    //api sản phẩm cho admin
    //thêm sản phẩm
    PostProduct(name, cost, quantity, type, color, detail, img) {
        return axios.post(base_api + '/api/InfoProducts', {
            "productName": name,
            "price": cost,
            "description": detail,
            "type": type,
            "quantity": quantity,
            "color": color,
            "linkimg": img,
        }, { headers })
    }
    //lấy theo loại
    GetByType(type) {
        return axios.get(base_api + '/api/InfoProducts/Type?Type=' + type, { headers })
    }
    //lấy theo id
    GetProduct(id) {
        return axios.get(base_api + '/api/InfoProducts/' + id, { headers })
    }
    //sửa theo id
    PutProduct(id, product) {
        return axios.put(base_api + '/api/InfoProducts/' + id, product, { headers })
    }
    //xóa theo id
    DeleteProdut(id) {
        return axios.delete(base_api + '/api/InfoProducts/' + id, { headers })
    }

    //api quảng cáo cho admin
    //lấy tất cả
    GetAllBanner() {
        return axios.get(base_api + '/api/Banners', { headers })
    }
    //lấy theo id
    GetBanner(id) {
        return axios.get(base_api + '/api/Banners/' + id, { headers })
    }
    //sửa theo id
    PutBanner(id, banner) {
        return axios.put(base_api + '/api/Banners/' + id, banner, { headers })
    }

    //thêm quảng cáo
    PostBanner(banner) {
        return axios.post(base_api + '/api/Banners', banner, { headers })
    }
    //xóa theo id
    DeleteBanner(id) {
        return axios.delete(base_api + '/api/Banners/' + id, { headers })
    }
    /*
    *api don dat hang
    */
    //Lay don dat hang theo trang thai va thoi gian
    GetOrderedByStatusAndTime(Status, Time) {
        return axios.get(base_api + '/api/Donhangs?by=' + Status + '&time=' + Time, { headers })
    }
    //Sửa trạng thái đơn hàng
    UpdateStatusOrder(id, status) {
        return axios.put(base_api + '/api/Donhangs/UpdateOrder?orderid=' + id + '&status=' + status, { headers })
    }
    /***
     * api thong bao
     */
    GetAllNotifi() {
        return axios.get(base_api + '/api/Thongbaos', { headers })
    }
}
export default new ClassApi()