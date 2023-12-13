import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from "react-router-dom";
import AlertDialog from "../../Component/Dialog";
import { useEffect, useState } from "react";
import ClassApi2 from '../../api/API2'
import { toast } from "react-toastify";
import ItemDonDatSan from "./ItemDonDatSan";

function DonDatSan() {
    const user = { name: 'user', id: '#11911', avt: 'https://honkai-builds.com/wp-content/uploads/jingliu.webp', password: '1234', address: 'Hà Nội', account: 'abcxyz', email: 'abc@gmail.com', phoneNumber: '091122438', gender: 'Nam' }
    const [show, setShow] = useState(false)
    const [info, setInfo] = useState({ name: '', phonenumber: '', password: '', address: '' })
    const [Orders, setOrders] = useState([
        {
            "donhang": {
                "orderid": 4,
                "phonenumber": "0167273189",
                "totalcost": 2000000,
                "status": "Đặt thành công, chưa thanh toán",
                "time": "2023-12-03T21:39:51.1126472"
            },
            "sanbongdh": {
                "orderid": 4,
                "fieldid": "RejT5",
                "kip": 1,
                "times": "2023-12-04T14:37:49.497",
                "cost": 2000000,
                "note": ""
            },
            "sanbong": {
                "fieldid": "RejT5",
                "price": 2000000,
                "linkimg": "http://res.cloudinary.com/dqwouu351/image/upload/v1701614236/Home/j8yq02znhuv4pmixnrbx.jpg",
                "address": "Tỉnh Seine-Saint-Denis, ở phía bắc Paris",
                "rate": 0,
                "type": "1",
                "decription": "Stade de France là sân vận động quốc gia của Pháp. Sân nằm ở xã Saint-Denis, tỉnh Seine-Saint-Denis, ở phía bắc Paris. Sân vận động có sức chứa 80.698 chỗ ngồi, khiến sân trở thành sân vận động lớn thứ bảy ở châu Âu. Wikipedia\nĐịa chỉ: 93200 Saint-Denis, Pháp\nĐiện thoại: +33 1 55 93 00 00\nSức chứa: 80.000",
                "name": "Stade de France"
            }
        }])
    useEffect(() => {
        ClassApi2.GetInfo().then((response) => {
            setInfo(response.data)

        })

    }, [])
    useEffect(() => {
        ClassApi2.GetOrderedField().then((response) => {
            setOrders(response.data)
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
    return (
        <Grid container justifyContent='center' sx={{ minHeight: { xs: '830px', md: '' } }}>
            <Grid item container xs={12} md={10} minHeight='400px'>
                <AlertDialog isopen={show} setIsOpen={setShow} title='Bạn có chắc chắn muốn đăng xuất ?' confirm={handleLogout} />
                <Grid item container md={3} xs={5}>
                    <Card sx={{ maxWidth: '100%', margin: '10px 0px', minWidth: '200px' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                                    <img style={{ maxHeight: '42px' }} src={info.avt ? info.avt : 'https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-19.jpg'} />
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
                                    <LibraryBooksIcon style={{ marginRight: '5px' }} />
                                    <Typography variant="body1" fontWeight={600} noWrap >
                                        Đơn mua
                                    </Typography>
                                </Grid>
                            </NavLink>
                            <NavLink to='/account/don-dat-san' style={{ textDecoration: 'none' }} >
                                <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer', margin: '20px 0px' }}>
                                    <SportsSoccerIcon style={{ marginRight: '5px' }} color="success" />
                                    <Typography variant="body1" fontWeight={600} color='green' noWrap >
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
                <Grid item container xs={12} md={9}>
                    {Orders.map((item, index) => (
                        <ItemDonDatSan key={index} donhang={item.donhang} sanbongdh={item.sanbongdh} sanbong={item.sanbong} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DonDatSan;