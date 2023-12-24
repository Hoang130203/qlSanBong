import { Button, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import MenuSp from "../../Component/MenuSp";
import ItemListSp from "../../Component/ItemListSp";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MenuIcon from '@mui/icons-material/Menu';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { useEffect, useState } from "react";
import ItemSp from "../../Component/ItemSp";
import ClassApi2 from '../../api/API2'
import { useParams } from "react-router-dom";
import ItemListSp2 from "../../Component/ItemListSp2";
/*let spmoi = [
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/2-382751d6-ebd4-477c-83d5-5045a3a23999.jpg?v=1466415099313', title: 'Giày tây nâu đỏ thương hiệu Converse All Star', cost: '500.000' },
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/zal1.jpg?v=1466482812400', title: 'Giày Converse Star Collar Break', cost: '450.000' },
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/2521102040-2-3-1.jpg?v=1466482446723', title: 'Giày Converse Star Camo Rubber', cost: '600.000' },


]
let allsp = [
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/1-267dd86e-37ab-405d-823c-bc2a1916106c.jpg?v=1474014275500', title: 'Giày Converse by John Varvatos', cost: '500.000' },
    { img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/091/133/products/4-3ef777ec-4b68-4c4f-82fb-82042b2e1a67.jpg', title: 'Giày Converse One Star \'74 Camo', cost: '550.000' },
    { img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/091/133/products/6-361c10da-da53-4910-bdb3-5492dbf26778.jpg', title: 'Giày Chuck Taylor All Star II Neon', cost: '650.000' },
    { img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkuihpjic857ac', title: 'Bộ Quần Áo Thể Thao Nam Chất Nỉ CottonCao Cấp Thiết Kế Phối Viền Khỏe Khoắn Năng Động Zenkonam MQD 003', cost: '99.000' },
    { img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnrwtdjkijfx14', title: 'Bộ Quần Áo Nam Nữ Phối Viền, Chất Liệu Cotton Tổ Ong, Bộ Đồ Nam Mặc Nhà, Thiết Kế Trẻ Trung', cost: '139.000' },
    { img: 'https://down-vn.img.susercontent.com/file/f825aedc54e76790a12ba99c5c72cc0b', title: 'QUẢ BÓNG ĐÁ SỐ 2 TRẺ EM', cost: '34.000' },

]*/
const menuitems = [
    { name: 'Mặc định', type: 1 },
    { name: 'A->Z', type: 2 },
    { name: 'Z->A', type: 3 },
    { name: 'Giá tăng dần', type: 4 },
    { name: 'Giá giảm dần', type: 5 },
    { name: 'Mới nhất', type: 6 },
    { name: 'Cũ nhất', type: 7 },

]
function SanPhamOfType() {
    const type = useParams().type
    const [allsp, setAllsp] = useState([])
    const [spmoi, setSpmoi] = useState([])
    const [shape, setShape] = useState(1)
    useEffect(() => {
        ClassApi2.GetAllSpofType(type).then((response) => {
            setAllsp(response.data)
        })
        ClassApi2.GetSpMoiofType(type).then((response) => {
            setSpmoi(response.data)
        })
    }, [])
    const [CachSapXep, setCachSapXep] = useState(menuitems[0].type)
    useEffect(() => {
        console.log(CachSapXep)
    }, [CachSapXep, shape])
    const handleChange = (e) => {
        setCachSapXep(e.target.value)

        if (e.target.value == 1) {
            ClassApi2.GetAllSpofType(type).then((response) => {
                setAllsp(response.data)
            })
        } else if (e.target.value == 3) {
            ClassApi2.GetAllofTypeZtoA(type).then((response) => {
                setAllsp(response.data)
            })
        } else if (e.target.value == 2) {
            ClassApi2.GetAllofTypeAtoZ(type).then((response) => {
                setAllsp(response.data)
            })
        } else if (e.target.value == 6) {
            ClassApi2.GetAllofTypeNewer(type).then((response) => {
                setAllsp(response.data)
            })
        } else if (e.target.value == 7) {
            ClassApi2.GetAllofTypeOlder(type).then((response) => {
                setAllsp(response.data)
            })
        } else if (e.target.value == 4) {
            ClassApi2.GetAllofTypeCostAsc(type).then((response) => {
                setAllsp(response.data)
            })
        } else if (e.target.value == 5) {
            ClassApi2.GetAllofTypeCostDesc(type).then((response) => {
                setAllsp(response.data)
            })
        }
    }

    const handleClickChange1 = (e) => {
        setShape(1)
    }
    const handleClickChange2 = (e) => {
        setShape(2)
    }

    return (
        <Grid container justifyContent='center' alignContent='flex-start'>
            <Grid container item xs={9.5} paddingTop='25px' display='flex' flexDirection='row' height='30px' marginBottom='30px'>
                <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                    <Typography >Trang chủ    /&nbsp;</Typography>
                </a>
                <Typography color='#35c0c5'>Sản phẩm</Typography>
            </Grid>
            <Grid container item xs={12} sm={11.5} display='flex' flsexDirection='row' justifyContent='flex-end'>

                <Grid item container lg={2.5} md={4} sm={12} xs={12} display='flex' flexDirection='row' justifyContent='flex-start'>

                    <Grid container item xs={12} minHeight='300px' display='flex' flexDirection='column' padding='0px 10px' justifyContent='center' rowSpacing={1} >
                        <MenuSp />
                    </Grid>
                    <Grid item container xs={12} sx={{ display: { xs: 'none', sm: 'flex' } }} rowSpacing={1} minHeight='200px' display='flex' flexDirection='row' paddingTop='20px'>
                        <Grid item xs={12} >
                            <Typography textAlign='center' fontWeight={600} variant="h6">SẢN PHẨM MỚI</Typography>
                        </Grid>
                        {spmoi.map((item, index) => (
                            <Grid item key={index} xs={12} style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <ItemListSp2 id={item.productid} cost={item.price.toLocaleString()} name={item.productname} img={item.linkimg} type={1} />


                            </Grid>
                        ))}

                    </Grid>
                    <Grid item container display='flex' sx={{ display: { xs: 'none', sm: 'flex' } }} flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' height='65px' style={{ margin: '20px 0px', background: 'url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-menu.png?1665385034327) #35c0c5', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <Grid item container xs={3} justifyContent='flex-end'>
                            <Grid item>
                                <WifiCalling3Icon style={{ color: 'white', fontSize: '35px' }} />
                            </Grid>
                        </Grid>
                        <Grid item container display='flex' flexDirection='column' xs={8}>
                            <Grid item><Typography color='white' fontSize='20px'>Liên hệ</Typography></Grid>
                            <Grid item><Typography color='white' fontSize='20px'>0912344736</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item display='flex' justifyContent='center' margin='20px 0px' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <img src="https://bizweb.dktcdn.net/100/091/133/themes/880367/assets/banner-qc-cl.jpg?1676015027577"></img>
                    </Grid>
                </Grid>
                <Grid item container lg={9} md={7.5} sm={11} xs={11.9} style={{ padding: { xs: '10px', sm: '0px' } }} display='flex' rowSpacing={2} flexDirection='column' justifyContent='flex-start' >
                    <Grid item padding='0px 30px'>
                        <Typography fontWeight={600} variant="h6"> TẤT CẢ SẢN PHẨM</Typography>
                    </Grid>
                    <Grid item container >
                        <Grid item container xs={12} md={6} alignItems='center' columnSpacing={2} padding='0px 30px'>
                            <Grid item><Typography>Sắp xếp</Typography></Grid>

                            <Grid item >
                                <Select style={{ width: '200px', height: '40px' }} value={CachSapXep} onChange={handleChange}>
                                    {menuitems.map((item, index) => (
                                        <MenuItem key={index} value={item.type}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid item container sm={6} alignItems='center' sx={{ justifyContent: { xs: 'flex-start', sm: 'flex-end' }, display: { xs: 'flex', sm: 'flex' } }} padding='0px 30px'>
                            <Grid item overflow='hidden'>
                                <Button style={{ color: '#ccc' }} onClick={handleClickChange1} startIcon={<ViewModuleIcon style={{ color: shape == 1 ? '#35c0c5' : 'black' }} />} ><Typography style={{ textTransform: 'none', color: 'black' }}>Lưới</Typography></Button>
                            </Grid>
                            <Grid item overflow='hidden'>
                                <Button style={{ color: '#ccc' }} onClick={handleClickChange2} startIcon={<MenuIcon style={{ color: shape == 2 ? '#35c0c5' : 'black' }} />}><Typography style={{ textTransform: 'none', color: 'black' }}>Danh sách</Typography></Button>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='space-evenly' xs={12} style={{ marginTop: '10px' }}>
                            {allsp.map((item, index) => {
                                return (
                                    shape == 1 ?
                                        <Grid key={index} container item lg={3.5} md={7} sm={6} sx={{ padding: '20px 0px' }} justifyContent='center'>
                                            <Grid item justifyContent='center'>
                                                <ItemSp id={item.productid} img={item.linkimg} title={item.productname} cost={item.price.toLocaleString()} />
                                            </Grid>
                                        </Grid> :
                                        <Grid key={index} container item md={11} sm={12} sx={{ padding: { xs: '10px', sm: '20px 0px' } }} justifyContent='flex-start'>

                                            <ItemListSp2 id={item.productid} img={item.linkimg} name={item.productname} cost={item.price.toLocaleString()}></ItemListSp2>

                                        </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid >
    );
}

export default SanPhamOfType;