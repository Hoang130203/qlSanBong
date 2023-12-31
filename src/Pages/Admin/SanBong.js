import { Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ItemSanBong from "./Component/ItemSanBong";
import ClassApi from '../../api/API'
import { useEffect, useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExportToExcel from "../../Service/ExportToExcel";
//let listField = [
//   { name: 'Sân bách khoa', rate: 3, price: '500.000', address: 'svđ bách khoa', special: 'không có', image: "https://lh3.googleusercontent.com/p/AF1QipNA87BgBmE7xAL3LclpDWHbeb9ACPTT_yyInsPh=w1080-h608-p-k-no-v0" },
//   { name: 'Sân Mỹ Đình', rate: 5, price: '900.000', address: 'Mỹ đình', special: 'svđ quốc gia', image: "https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg" },
//   { name: 'Sân Parc des Princes', rate: 5, price: '10.500.000', address: ' phía tây nam thủ đô nước Pháp, bên trong Quận 16', special: 'Với sức chứa 47.929 khán giả, đây là sân nhà của Paris Saint-Germain kể từ năm 1974', image: "https://congtrinhthep.vn/wp-content/uploads/2018/05/dan-khong-gian-svd-san-van-dong-cong-vien-cac-hoang-tu-1.jpg" },

//]
function SanBong2() {
    let originalArray = []
    const [listField, setListField] = useState([])
    const [fields, setFields] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                await ClassApi.GetAllField().then((response) => { originalArray = response.data })
                setFields(originalArray)
                setListField(await originalArray.map(item => ({
                    id: item.fieldid,
                    name: item.name,
                    rate: item.rate,
                    price: item.price.toLocaleString(), // Định dạng giá tiền thành chuỗi có dấu phân cách
                    address: item.address,
                    special: item.decription, // Đổi tên thuộc tính 'decription' thành 'special'
                    image: item.linkimg
                })));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    function reorderProperties(obj) {
        const reorderedObj = [
            obj.fieldid,
            obj.name,
            obj.rate,
            obj.type,
            obj.price,
            obj.address,
            obj.decription,

        ]
        return reorderedObj;
    }

    const handleExport = () => {
        function mapTypeValue(type) {
            switch (type) {
                case "1":
                    return '7 người';
                case "2":
                    return '11 người';
                case "3":
                    return 'fusal';
                default:
                    return 'Unknown';
            }
        }
        const newArray = fields.map(obj => ({
            ...obj,
            type: mapTypeValue(obj.type)
        }));
        const reorderedArray = [['Mã sân', 'Tên sân', 'Đánh giá', 'Loại sân', 'Giá', 'Địa chỉ', 'Mô tả'], ...newArray.map(obj => reorderProperties(obj))];

        ExportToExcel.export(reorderedArray, 'Danh sách sân bóng')
    }
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12}>
                <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Quản lý sân bóng</Typography>
            </Grid>
            <Grid item xs={12}>
                <NavLink to='/admin/san-bong/them-san-bong'>
                    <Button startIcon={<AddIcon />} style={{ marginRight: '20px' }} variant="contained">Thêm sân bóng</Button>
                </NavLink>

                <Button onClick={() => { handleExport() }} startIcon={<ExitToAppIcon />} color="success" variant="contained">Excel</Button>

            </Grid>
            <Grid item container xs={12}>
                <ItemSanBong fields={listField} setFields={setListField} />
            </Grid>
        </Grid>
    );
}

export default SanBong2;