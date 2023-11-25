import { Button, Grid, TextField, Typography } from "@mui/material";
import img from '../../Icons/ImageDangNhap.png'

import { NavLink, useNavigate } from "react-router-dom";

import { AppleIcon, FacebookIcon, GoogleIcon, TwitterIcon } from "../../Icons/IconDangNhap";
import { useState } from "react";
function DangNhap() {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const handleChangUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        if (user == 'admin' && password == "123") {
            localStorage.setItem('admin', 'admin')
            navigate('/admin/thong-ke')
        } else if (user.length > 0 && password.length > 0) {
            localStorage.setItem('usersb', 'user')
            navigate('/')
        }
    }
    return (
        <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', top: '20px', position: 'relative' }}>
            <Grid container item xs={12} sm={9} height='610px' display='flex' flexDirection='row' justifyContent='space-around'>
                <Grid item md={5} sm={0.00001} display='flex' flexDirection='row' borderRadius='10px' sx={{ borderTopRightRadius: '0', borderBottomRightRadius: '0', background: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Grid>
                <Grid item container md={7} sm={11.9} padding="40px 100px" display='block'>
                    <Grid item xs={12}><Typography variant="h4">Login</Typography></Grid>
                    <Grid item xs={12}><Typography variant="h7">New user?</Typography>
                        <NavLink to='/account/dang-ky' style={{ textDecoration: 'none', color: "#1D9BF0" }}><Typography variant="h7">Create an account</Typography></NavLink>
                    </Grid>
                    <Grid item container padding="20px 0px" spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Email</Typography></Grid>
                        <Grid item xs={12}>
                            <TextField placeholder="John@example.com" sx={{ width: '250px', maxWidth: '100%' }} onChange={handleChangUser}>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Password</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField type="password" placeholder="********" sx={{ width: '250px', maxWidth: '100%' }} onChange={handleChangePassword}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} marginTop='30px'>
                        <Button onClick={handleLogin} variant="contained" sx={{ backgroundColor: '#1D9BF0', width: '250px', height: '40px', maxWidth: '100%' }}>LOG IN</Button>
                    </Grid>
                    <Grid item container xs={12} padding='35px 0px' alignItems='center'>

                        <div style={{ height: '1px', width: '115px', maxWidth: '35%', backgroundColor: '#ccc' }}></div>
                        <Typography padding='0px 5px' variant="h8">Or</Typography>
                        <div style={{ height: '1px', width: '110px', maxWidth: '35%', backgroundColor: '#ccc' }}></div>
                    </Grid>
                    <Grid item container md={10} sm={7} xs={12} wrap="nowrap">
                        <Grid item md={2.2} xs={3}>
                            <NavLink to='/account/dang-ky'><GoogleIcon /></NavLink>
                        </Grid>
                        <Grid item md={2.2} xs={3}><FacebookIcon /></Grid>
                        <Grid item md={2.2} xs={3}><TwitterIcon /></Grid>
                        <Grid item md={2.2} xs={3}><AppleIcon /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default DangNhap;