import axios from "axios";
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

    /****
     * api admin
     */
    //
    //Them san bong 
    PostField(name, cost, address, type, detail, img) {
        return axios.post(base_api + '/api/Sanbongs', {
            "fieldid": "strin",
            "price": cost,
            "linkimg": img,
            "address": address,
            "rate": 0,
            "type": "2",
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

}
export default new ClassApi()