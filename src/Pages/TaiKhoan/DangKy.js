import { Button, Grid, TextField, Typography } from "@mui/material";
import img from '../../Icons/ImageDangKy.png'

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import ClassApi2 from '../../api/API2'
function DangKy() {
    const navigate = useNavigate()
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [repass, setRePass] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const handleRegister = () => {

        if (phone.length == 0 || pass.length == 0 || name.length == 0 || repass.length == 0 || address.length == 0) {
            toast.warn('Hãy nhập đủ thông tin', {
                position: toast.POSITION.BOTTOM_RIGHT
            })

        } else if (pass != repass) {
            toast.warn('Mật khẩu nhập lại không đúng', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } else if (phone.length < 10 || phone.length > 10) {
            toast.warn('Số điện thoại phải có 10 số', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        else {
            try {
                ClassApi2.Resister({
                    "phoneNumber": phone,
                    "passWord": pass,
                    "name": name,
                    "address": address
                }).then((response) => {
                    if (response.data.name) {
                        toast.success('Chào mừng ' + name + ' tới với ứng dụng!', {
                            position: toast.POSITION.BOTTOM_RIGHT
                        })
                        toast.warn('Mời bạn đăng nhập', {
                            position: toast.POSITION.BOTTOM_RIGHT
                        })
                        navigate('/account/dang-nhap')
                    }
                }).catch(() => {
                    toast.error('Tạo tài khoản thất bại!', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    toast.info('Thử số điện thoại khác xem', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                }
                )
            } catch (error) {
                toast.error('Tạo tài khoản thất bại!', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                toast.info('Thử số điện thoại khác xem', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        }
    }
    return (
        <Grid container paddingTop='10px' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative' }}>
            <Grid container item xs={12} md={9} height='610px' display='flex' flexDirection='row' justifyContent='space-around'>
                <Grid item maxHeight="630px" md={5} sm={0.00001} display='flex' flexDirection='row' borderRadius='10px' sx={{ borderTopRightRadius: '0', borderBottomRightRadius: '0', background: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Grid>
                <Grid item container md={7} sm={11.9} sx={{ padding: { sm: "40px 100px", xs: '30px 60px' } }} display='block'>
                    <Grid item xs={12}><Typography variant="h4">Sign up</Typography></Grid>

                    <Grid item container padding="10px 0px" spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Phone number</Typography></Grid>
                        <Grid item xs={12}>
                            <TextField placeholder="0123xxxx45" sx={{ width: '250px', maxWidth: '100%' }}
                                value={phone} onChange={(e) => { setPhone(e.target.value) }}>
                            </TextField></Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Mật khẩu</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField type="password" placeholder="********" sx={{ width: '250px', maxWidth: '100%' }}
                                value={pass} onChange={(e) => { setPass(e.target.value) }}
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container padding='10px 0px' spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Nhập lại mật khẩu</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField type="password" placeholder="********" sx={{ width: '250px', maxWidth: '100%' }}
                                value={repass} onChange={(e) => { setRePass(e.target.value) }}
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Họ tên</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField placeholder="John smith" sx={{ width: '250px', maxWidth: '100%' }}
                                value={name} onChange={(e) => { setName(e.target.value) }}
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1} paddingTop='10px'>
                        <Grid item xs={12}><Typography variant="h7">Địa chỉ</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField placeholder="Ngõ 1,..." sx={{ width: '250px', maxWidth: '100%' }}
                                value={address} onChange={(e) => { setAddress(e.target.value) }}
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} marginTop='30px'>
                        <Button variant="contained" sx={{ backgroundColor: '#1D9BF0', width: '250px', height: '40px', maxWidth: '100%' }}
                            onClick={handleRegister}
                        >SIGN UP</Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid >);
}

export default DangKy;