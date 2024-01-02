import { Button, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import ItemSanPham from "./Component/ItemSanPham";
import { useEffect, useState } from "react";

import ClassApi from '../../api/API'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExportToExcel from "../../Service/ExportToExcel";
function SanPham2() {
    const [productB, setProductB] = useState([])
    const [productG, setProductG] = useState([])
    const [productQA, setProductQA] = useState([])
    const [productD, setProductD] = useState([])
    const [productPK, setProductPK] = useState([])
    let types = [
        { name: 'BÓNG', child: productB },
        { name: 'GIÀY', child: productG },
        { name: 'QUẦN ÁO', child: productQA },
        { name: 'DỤNG CỤ', child: productD },
        { name: 'PHỤ KIỆN', child: productPK },
    ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                ClassApi.GetByType('Bóng').then((response) => {
                    setProductB(response.data)
                })
                ClassApi.GetByType('GIÀY').then((response) => {
                    setProductG(response.data)
                })
                ClassApi.GetByType('QUẦN ÁO').then((response) => {
                    setProductQA(response.data)
                })
                ClassApi.GetByType('DỤNG CỤ').then((response) => {
                    setProductD(response.data)
                })
                ClassApi.GetByType('PHỤ KIỆN').then((response) => {
                    setProductPK(response.data)
                })
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    function reorderProperties(obj) {
        const reorderedObj = [
            obj.productid,
            obj.productname,
            obj.price,
            obj.type,
            obj.rate,
            obj.color,
            obj.detail,

        ]
        return reorderedObj;
    }
    const handleExport = async () => {

        var listsp
        await ClassApi.GetAllProduct().then((response) => {
            listsp = response.data
        })

        const reorderedArray = await [['Mã sản phẩm', 'Tên sản phẩm', 'Đơn giá', 'Loại sản phẩm', 'Đánh giá', 'Màu sắc', 'Mô tả'], ...listsp.map(obj => reorderProperties(obj))];
        console.log(reorderedArray)
        ExportToExcel.export(reorderedArray, 'Danh sách sản phẩm')
    }
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12}>
                <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Quản lý sản phẩm</Typography>
            </Grid>
            <Grid item xs={12}>
                <NavLink to='/admin/san-pham/them-san-pham'>
                    <Button startIcon={<AddIcon />} variant="contained" style={{ marginRight: '30px' }}>Thêm sản phẩm</Button>
                </NavLink>
                <Button onClick={() => { handleExport() }} startIcon={<ExitToAppIcon />} color="success" variant="contained">Excel</Button>
            </Grid>

            <Grid container item xs={12} >
                {types.map((type, index) => (
                    <ItemSanPham key={index} products={type.child} type={type} />
                ))}
            </Grid>
        </Grid>
    );
}

export default SanPham2;