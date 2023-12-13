import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from "react-router-dom";
import AlertDialog from "../../Component/Dialog";
import { useEffect, useState } from "react";
import ClassApi from '../../api/API'
import ClassApi2 from '../../api/API2'
import { toast } from "react-toastify";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function ThongTin() {
    const user = { name: 'user', id: '#11911', avt: 'https://honkai-builds.com/wp-content/uploads/jingliu.webp', password: '1234', address: 'Hà Nội', account: 'abcxyz', email: 'abc@gmail.com', phoneNumber: '091122438', gender: 'Nam' }
    const [info, setInfo] = useState({ name: '', phonenumber: '', password: '', address: '' })
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [avt, setAvt] = useState('')
    const [file, setFile] = useState()
    const [isposting, setIsposting] = useState(true)
    const handleConfirm = () => {
        setShow(true)
    }
    useEffect(() => {
        ClassApi2.GetInfo().then((response) => {
            setInfo(response.data)
            setPassword(response.data.password)
            setName(response.data.name)
            setAddress(response.data.address)
            setGender(response.data.gender)
            setAvt(response.data.avt)
        })
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('usersb')
        localStorage.removeItem('namesb')
        navigate('/')
    }
    const handleUpdate = async () => {

        try {
            await ClassApi2.UpdateInfo({
                "phonenumber": info.phonenumber,
                "name": name,
                "birthdate": null,
                "gender": gender,
                "address": address,
                "avt": info.avt
            })
            await ClassApi2.ChangePassword(password)
            toast.success('Sửa thành công', {
                position: 'bottom-right'
            })
        } catch (error) {
            toast.error('Sửa thất bại', {
                position: 'bottom-right'
            })
        }


    }
    const handleFileChange = (event) => {
        setIsposting(false)
        const selectedFile = event.target.files[0]
        setFile(event.target.files[0])
        const reader = new FileReader();
        reader.onload = () => {
            setAvt(reader.result); // Lưu URL vào state để hiển thị ảnh
        };
        reader.readAsDataURL(selectedFile);
    }
    const handleChangeAvt = async () => {
        if (file != null) {
            await setIsposting(true)
            await ClassApi.PostImage(file).then((response) => {
                ClassApi2.ChangeAvt(response.data.url).then(() => {
                    toast.success('Đổi ảnh đại diện thành công', {
                        position: 'bottom-right'
                    })

                })
            })
            //   await setIsposting(false)
        }
    }
    return (
        <Grid container justifyContent='center' sx={{ minHeight: { xs: '890px', md: '' } }}>
            <Grid item container xs={12} md={10} minHeight='400px'>
                <AlertDialog isopen={show} setIsOpen={setShow} title='Bạn có chắc chắn muốn đăng xuất ?' confirm={handleLogout} />
                <Grid item container md={3} sm={7} xs={12}>
                    <Card sx={{ maxWidth: '100%', margin: '10px 0px', minWidth: '200px' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                                    <img style={{ maxHeight: '42px' }} src={avt} />
                                </Avatar>
                            }

                            title={info.name}
                            subheader={'#' + info.phonenumber.substring(6)}
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
                <Grid item container xs={12} sm={6} md={5} padding='20px 0px' >
                    <Grid item container>
                        <Grid item xs={12} >
                            <Typography variant="h6">Hồ sơ của tôi</Typography>
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField value={info.phonenumber}
                                label="Tài khoản" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                onChange={(e) => { setIsChanged(true) }}
                            />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField value={password} label="Mật khẩu" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                onChange={(e) => { setIsChanged(true); setPassword(e.target.value) }} />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField value={name} label="Họ tên" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                onChange={(e) => { setIsChanged(true); setName(e.target.value) }} />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField label="Địa chỉ" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                value={address}
                                onChange={(e) => { setIsChanged(true); setAddress(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <TextField label="Số điện thoại" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                                value={info.phonenumber} onChange={() => {
                                    toast.warn('hiện chưa thể thay đổi thông tin sđt, xin lỗi vì sự bất tiện này!', { position: 'bottom-right' })
                                }}
                            //    onChange={(e) => { setPhoneNumber(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} padding="10px 0px">
                            <Select
                                value={gender ? 'Nam' : 'Nữ'}
                                onChange={(e) => { setIsChanged(true); setGender(e.target.value == 'Nam' ? true : false) }}
                            >
                                <MenuItem value='Nam'>Nam</MenuItem>
                                <MenuItem value='Nữ'>Nữ</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" disabled={!isChanged} onClick={handleUpdate}><Typography>Cập nhật</Typography></Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={6} md={4} padding='20px 0px' alignContent='flex-start' rowSpacing={4}>
                    <Grid item container xs={12} direction='row' justifyContent='center'>
                        <Typography variant="h5" >Ảnh đại diện</Typography>
                        <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                            <InputLabel htmlFor="file-input" style={{ cursor: 'pointer' }}>
                                <DriveFileRenameOutlineIcon style={{ fontSize: '30px' }} />
                            </InputLabel>
                            <Input id="file-input" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                        </button>
                    </Grid>
                    <Grid item container xs={12} justifyContent='space-around'>
                        <Grid item>
                            <Avatar style={{ width: '300px', height: '300px' }} alt="Ảnh đại diện"
                                src={avt == null ? info.gender == false ?
                                    'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg' : 'https://phunuvietnam.mediacdn.vn/media/news/33abffcedac43a654ac7f501856bf700/anh-profile-tiet-lo-g-ve-ban-1.jpg'
                                    : avt} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} justifyContent='space-around'>
                        <Button variant="contained" onClick={handleChangeAvt} disabled={isposting}>Cập nhật</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ThongTin;