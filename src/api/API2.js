import axios from "axios";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
const base_api = "https://localhost:7037"

const headers = {
    "access-control-allow-origin": "*",
    "content-type": "application/json; charset=utf-8 ",
};
const phone = localStorage.getItem('usersb')
class ClassApi2 {
    /***
       * Api cho người dùng
       */
    //Đăng nhập
    Login(account, password) {
        return axios.post(base_api + '/api/AccountUsers/login?account=' + account + '&password=' + password, { headers })
    }
    //Đăng ký
    Resister(info) {
        return axios.post(base_api + '/api/AccountUsers/register', info, { headers })
    }
    //Lay thong tin nguoi dung
    GetInfo() {
        return axios.get(base_api + '/api/Users/' + localStorage.getItem('usersb'), { headers })
    }
    //cap nhat thong tin
    UpdateInfo(info) {
        return axios.put(base_api + '/api/Users/' + localStorage.getItem('usersb'), info, { headers })
    }
    //cap nhat anh dai dien
    ChangeAvt(url) {
        return axios.put(base_api + '/api/Users/avatar?url=' + url + '&phone=' + phone, { headers })
    }
    //doi mat khau
    ChangePassword(password) {
        return axios.put(base_api + '/api/Accounts/' + localStorage.getItem('usersb'), { "phonenumber": localStorage.getItem('usersb'), "password": password }, { headers })
    }
    //Hiển thị sản phẩm
    GetAllSp() {
        return axios.get(base_api + '/api/Products', { headers })
    }
    GetTopDoanhThu() {
        return axios.get(base_api + '/api/Products/TopDoanhThu', { headers })
    }
    GetSpMoi() {
        return axios.get(base_api + '/api/Products/top3', { headers })
    }
    GetAllAtoZ() {
        return axios.get(base_api + '/api/Products/AtoZ', { headers })
    }
    GetAllZtoA() {
        return axios.get(base_api + '/api/Products/ZtoA', { headers })
    }
    GetAllNewer() {
        return axios.get(base_api + '/api/Products/Newer', { headers })
    }
    GetAllOlder() {
        return axios.get(base_api + '/api/Products/Older', { headers })
    }
    GetAllCostAsc() {
        return axios.get(base_api + '/api/Products/Cheaper', { headers })
    }
    GetAllCostDesc() {
        return axios.get(base_api + '/api/Products/Expensive', { headers })
    }
    GetProductById(id) {
        return axios.get(base_api + '/api/Products/' + id)
    }

    //Loại sp cụ thể
    GetAllSpofType(type) {
        return axios.get(base_api + '/api/Products/type/' + type, { headers })
    }
    GetSpMoiofType(type) {
        return axios.get(base_api + '/api/Products/' + type + '/top3', { headers })
    }
    GetAllofTypeAtoZ(type) {
        return axios.get(base_api + '/api/Products/' + type + '/AtoZ', { headers })
    }
    GetAllofTypeZtoA(type) {
        return axios.get(base_api + '/api/Products/' + type + '/ZtoA', { headers })
    }
    GetAllofTypeNewer(type) {
        return axios.get(base_api + '/api/Products/' + type + '/Newer', { headers })
    }
    GetAllofTypeOlder(type) {
        return axios.get(base_api + '/api/Products/' + type + '/Older', { headers })
    }
    GetAllofTypeCostAsc(type) {
        return axios.get(base_api + '/api/Products/' + type + '/Cheaper', { headers })
    }
    GetAllofTypeCostDesc(type) {
        return axios.get(base_api + '/api/Products/' + type + '/Expensive', { headers })
    }
    //api thêm vào giỏ hàng
    PostToCart(info) {
        return axios.post(base_api + '/api/SanphamGiohangs', info, { headers })
    }
    //sửa thông tin sản phẩm trong giỏ
    PutToCart(info) {
        return axios.put(base_api + '/api/SanphamGiohangs/updateCart', info, { headers })
    }
    DeleteProductFromCart(productId, color) {
        return axios.delete(base_api + '/api/SanphamGiohangs?phone=' + localStorage.getItem('usersb') + '&productid=' + productId + '&color=' + color, { headers })
    }
    //api lấy sản phẩm trong giỏ hàng
    GetCart() {
        return axios.get(base_api + '/api/SanphamGiohangs/ByPhone?phone=' + localStorage.getItem('usersb'), { headers })
    }
    //api lấy ra đơn đặt sản phẩm đã đặt
    GetOrderedProduct() {
        return axios.get(base_api + '/api/Donhangs/allOPofUser?id=' + phone, { headers })
    }
    //api hủy đơn đặt hàng
    CancelOrderProduct(orderid) {
        return axios.post(base_api + '/api/Donhangs/HuyDon?orderid=' + orderid, { headers })
    }
    //api lấy ra sân đã đặt
    GetOrderedField() {
        return axios.get(base_api + '/api/Donhangs/allOFofUser?id=' + phone, { headers })
    }
    //api dat hang
    PostOrder(list, ship) {
        return axios.post(base_api + '/api/Donhangs/OrderProducts?phone=' + localStorage.getItem('usersb') + '&ship=' + ship, list, { headers })
    }
    DeleteGioHang() {
        return axios.delete(base_api + '/api/SanPhamGioHangs/all?phone=' + localStorage.getItem('usersb'), { headers })
    }
    /**
     * api sân bóng
     */
    //hien thi tat ca san bong
    GetAllField() {
        return axios.get(base_api + '/api/Sanbongs/all', { headers })
    }
    GetFieldsBy(rate, type) {
        return axios.get(base_api + '/api/Sanbongs/SearchBy?rate=' + rate + '&type=' + type, { headers })
    }
    GetFieldById(id) {
        return axios.get(base_api + '/api/Sanbongs/' + id)
    }

    //api đặt sân bóng
    PostOrderField(phone, sanbongorder) {
        return axios.post(base_api + '/api/Donhangs/OrderField?phone=' + phone, sanbongorder, { headers })
    }

}
export default new ClassApi2()