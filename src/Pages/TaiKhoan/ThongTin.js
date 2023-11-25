import { Avatar, Card, CardContent, CardHeader, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from "react-router-dom";
function ThongTin() {
    const user = { name: 'user', id: '#11911', avt: 'https://honkai-builds.com/wp-content/uploads/jingliu.webp', password: '1234', address: 'Hà Nội', account: 'abcxyz', email: 'abc@gmail.com', phoneNumber: '091122438', gender: 'Nam' }
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('usersb')
        navigate('/')
    }
    return (
        <Grid container justifyContent='center' sx={{ minHeight: { xs: '830px', md: '' } }}>
            <Grid item container xs={12} md={10} height='400px'>
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
                            <NavLink to='/account/thong-tin' style={{ textDecoration: 'none' }} >
                                <Grid item xs={12} display='flex' flexDirection='row' style={{ cursor: 'pointer' }}>
                                    <AccountCircleIcon style={{ marginRight: '5px' }} color="success" />
                                    <Typography variant="body1" fontWeight={600} color="green" noWrap>
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
                <Grid item container xs={12} md={9} padding='20px 0px' >
                    <Grid item container>
                        <Grid item xs={12} >
                            <Typography variant="h6">Hồ sơ của tôi</Typography>
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField value={user.account} label="Tài khoản" variant="outlined" style={{ width: '400px', maxWidth: '90%' }} />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField value={user.password} label="Mật khẩu" variant="outlined" style={{ width: '400px', maxWidth: '90%' }} />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField value={user.name} label="Họ tên" variant="outlined" style={{ width: '400px', maxWidth: '90%' }} />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField label="Địa chỉ" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                value={user.address}
                            //  onChange={(e) => { setAddress(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField label="Số điện thoại" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                value={user.phoneNumber}
                            //    onChange={(e) => { setPhoneNumber(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <Select
                                value={user.gender}
                            >
                                <MenuItem value='Nam'>Nam</MenuItem>
                                <MenuItem value='Nữ'>Nữ</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ThongTin;