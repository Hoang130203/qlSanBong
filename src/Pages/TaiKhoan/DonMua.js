import { Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDonMua from "./ItemDonMua";
import AlertDialog from "../../Component/Dialog";
import ClassApi2 from '../../api/API2'
function DonMua() {
    const user = { name: 'user', id: '#11911', avt: 'https://honkai-builds.com/wp-content/uploads/jingliu.webp', password: '1234', address: 'Hà Nội', account: 'abcxyz', email: 'abc@gmail.com', phoneNumber: '091122438', gender: 'Nam' }
    const [show, setShow] = useState(false)
    const [info, setInfo] = useState({ name: '', phonenumber: '', password: '', address: '' })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        ClassApi2.GetInfo().then((response) => {
            setInfo(response.data)

        })
    }, [])
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('usersb')
        localStorage.removeItem('namesb')
        navigate('/')
    }
    const handleConfirm = () => {
        setShow(true)
    }
    const [DonMuas, setDonMuas] = useState([
        {
            donhang: {
                orderid: '11111',
                "totalcost": 590000,
                "status": "đang chờ xác nhận",
                "time": "2023-12-03T21:31:55.1153764"
            },
            "sanpham": [
                {
                    "orderid": '11111',
                    "productid": 1,
                    "color": "",
                    "quantity": 1,
                    "cost": 90000
                },
                {
                    "orderid": '11111',
                    "productid": 1,
                    "color": "",
                    "quantity": 3,
                    "cost": 90000
                },
            ],

            chitiet: [
                { linkimg: 'https://product.hstatic.net/1000288768/product/chen_watermark_ttvn_dl-03_a97defaa7e894e199b1b9508eaa0d83b_master.png', productname: 'Áo phông Đoàn thể thao Việt Nam 2023', color: 'Xanh đậm', price: 250000 },
                { linkimg: 'https://bizweb.dktcdn.net/thumb/compact/100/091/133/products/4-b9fc7b6b-6819-4462-845d-98f35edfae96.jpg', productname: 'Giày Converse by John Varvatos', color: 'Xanh', price: 550000 },
            ]
        },
        {
            donhang: {
                orderid: '11231',
                "totalcost": 590000,
                "status": "đang chờ xác nhận",
                "time": "2023-12-03T21:31:55.1153764"
            },
            "sanpham": [
                {
                    "orderid": '11231',
                    "productid": 1,
                    "color": "",
                    "quantity": 2,
                    "cost": 90000
                },
                {
                    "orderid": '11231',
                    "productid": 1,
                    "color": "",
                    "quantity": 4,
                    "cost": 90000
                }
            ],

            chitiet: [
                { linkimg: 'https://down-vn.img.susercontent.com/file/bc874659c0fe5d6c22708bb90720690b', productname: 'Bóng Động Lực size 5 UCV 3.05, bóng đá size 5, size 4 phù hợp sân cỏ nhân tạo, sân cỏ tự nhiên', color: 'Xanh', price: 150000 },
                { linkimg: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lii7zuzdyt5847', productname: 'Giày đá bóng chính hãng nam Mitre 201210, giày đá bóng sân cỏ nhân tạo', color: 'Vàng', price: 350000 },
            ]
        }
    ])
    useEffect(() => {
        ClassApi2.GetOrderedProduct().then((response) => {
            setDonMuas(response.data)
            setLoading(false)
        })
    }, [])
    return (
        <Grid container justifyContent='center'>

            <Grid item container xs={12} md={10} minHeight='400px'>
                <AlertDialog isopen={show} setIsOpen={setShow} title='Bạn có chắc chắn muốn đăng xuất ?' confirm={handleLogout} />
                <Grid item container md={3} xs={5}>
                    <Card sx={{ maxWidth: '100%', margin: '10px 0px', minWidth: '200px' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                                    <img style={{ maxHeight: '42px' }} src={info.avt} />
                                </Avatar>
                            }

                            title={info.name}
                            subheader={'#' + info.phonenumber.substring(6)}
                        />
                        <Grid item xs={12} >
                            <Divider />
                        </Grid>
                        <CardContent>
                            <NavLink to='/account/thong-tin' style={{ textDecoration: 'none', color: '#333' }} >
                                <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer' }}>
                                    <AccountCircleIcon style={{ marginRight: '5px' }} />
                                    <Typography variant="body1" fontWeight={600} noWrap>
                                        Hồ sơ
                                    </Typography>
                                </Grid>
                            </NavLink>
                            <NavLink to='/account/don-mua' style={{ textDecoration: 'none', color: '#333' }} >
                                <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer', margin: '20px 0px' }}>
                                    <LibraryBooksIcon style={{ marginRight: '5px' }} color="success" />
                                    <Typography variant="body1" fontWeight={600} color="green" noWrap >
                                        Đơn mua
                                    </Typography>
                                </Grid>
                            </NavLink>
                            <NavLink to='/account/don-dat-san' style={{ textDecoration: 'none', color: '#333' }} >
                                <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer', margin: '20px 0px' }}>
                                    <SportsSoccerIcon style={{ marginRight: '5px' }} />
                                    <Typography variant="body1" fontWeight={600} noWrap >
                                        Đơn đặt sân
                                    </Typography>
                                </Grid>
                            </NavLink>
                            <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer', margin: '40px 0px' }}>
                                <button onClick={handleConfirm} style={{ width: '100%', display: 'inline', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', paddingLeft: '0px' }}>
                                    <Grid item xs={12} display='flex' flexDirection='row'>
                                        <LogoutIcon style={{ marginRight: '5px' }} />
                                        <Typography variant="body1" fontWeight={600} noWrap >
                                            Đăng xuất
                                        </Typography>
                                    </Grid>
                                </button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {!loading &&
                    <Grid item container xs={12} md={9}>
                        {DonMuas.map((item, index) => (
                            <ItemDonMua key={index} total={item.donhang.totalcost} donhang={item.donhang} listsp={item.chitiet} id={item.donhang.orderid} sanpham={item.sanpham} />
                        ))}
                    </Grid>}
            </Grid>

        </Grid>
    );
}

export default DonMua;