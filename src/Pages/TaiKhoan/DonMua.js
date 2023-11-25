import { Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemDonMua from "./ItemDonMua";
function DonMua() {
    const user = { name: 'user', id: '#11911', avt: 'https://honkai-builds.com/wp-content/uploads/jingliu.webp' }
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('usersb')
        navigate('/')
    }
    const [DonMuas, setDonMuas] = useState([
        {
            id: '#11111',
            total: 1900000,
            listsp: [
                { image: 'https://bizweb.dktcdn.net/thumb/compact/100/091/133/products/4-b9fc7b6b-6819-4462-845d-98f35edfae96.jpg', name: 'Giày Converse by John Varvatos', color: 'Xanh', cost: 550000, quantity: 3 },
                { image: 'https://product.hstatic.net/1000288768/product/chen_watermark_ttvn_dl-03_a97defaa7e894e199b1b9508eaa0d83b_master.png', name: 'Áo phông Đoàn thể thao Việt Nam 2023', color: 'Xanh đậm', cost: 250000, quantity: 1 },
            ]
        },
        {
            id: '#11231',
            total: '1230000',
            listsp: [
                { image: 'https://down-vn.img.susercontent.com/file/bc874659c0fe5d6c22708bb90720690b', name: 'Bóng Động Lực size 5 UCV 3.05, bóng đá size 5, size 4 phù hợp sân cỏ nhân tạo, sân cỏ tự nhiên', color: 'Xanh', cost: 150000, quantity: 2 },
                { image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lii7zuzdyt5847', name: 'Giày đá bóng chính hãng nam Mitre 201210, giày đá bóng sân cỏ nhân tạo', color: 'Vàng', cost: 350000, quantity: 4 },
            ]
        }
    ])
    return (
        <Grid container justifyContent='center'>
            <Grid item container xs={12} md={10} minHeight='400px'>
                <Grid item container md={3} xs={5}>
                    <Card sx={{ maxWidth: '100%', margin: '10px 0px', minWidth: '200px' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                                    <img style={{ maxHeight: '42px' }} src={user.avt} />
                                </Avatar>
                            }

                            title={user.name}
                            subheader={user.id}
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
                            <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer', margin: '40px 0px' }}>
                                <button onClick={handleLogout} style={{ width: '100%', display: 'inline', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', paddingLeft: '0px' }}>
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
                    {DonMuas.map((item, index) => (
                        <ItemDonMua key={index} total={item.total} listsp={item.listsp} id={item.id} />
                    ))}
                </Grid>
            </Grid>

        </Grid>
    );
}

export default DonMua;