import { Button, Grid, TextField, Typography } from "@mui/material";
import img from '../../Icons/ImageDangNhap.png'

import { NavLink } from "react-router-dom";

import { AppleIcon, FacebookIcon, GoogleIcon, TwitterIcon } from "../../Icons/IconDangNhap";
function DangNhap() {
    return (
        <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', top: '20px', position: 'relative' }}>
            <Grid container item xs={9} height='610px' display='flex' flexDirection='row' justifyContent='space-around'>
                <Grid item xs={5} md={6} display='flex' flexDirection='row' borderRadius='10px' sx={{ borderTopRightRadius: '0', borderBottomRightRadius: '0', background: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Grid>
                <Grid item container xs={7} md={6} padding="40px 100px" display='block'>
                    <Grid item xs={12}><Typography variant="h4">Login</Typography></Grid>
                    <Grid item xs={12}><Typography variant="h7">New user?</Typography>
                        <NavLink to='/account/dang-ky' style={{ textDecoration: 'none', color: "#1D9BF0" }}><Typography variant="h7">Create an account</Typography></NavLink>
                    </Grid>
                    <Grid item container padding="20px 0px" spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Email</Typography></Grid>
                        <Grid item xs={12}><TextField placeholder="John@example.com" sx={{ width: '250px', maxWidth: '100%' }}></TextField></Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Password</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField type="password" placeholder="********" sx={{ width: '250px', maxWidth: '100%' }} ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} marginTop='30px'>
                        <Button variant="contained" sx={{ backgroundColor: '#1D9BF0', width: '250px', height: '40px', maxWidth: '100%' }}>LOG IN</Button>
                    </Grid>
                    <Grid item container xs={12} padding='35px 0px' alignItems='center'>

                        <div style={{ height: '1px', width: '115px', maxWidth: '35%', backgroundColor: '#ccc' }}></div>
                        <Typography padding='0px 5px' variant="h8">Or</Typography>
                        <div style={{ height: '1px', width: '110px', maxWidth: '35%', backgroundColor: '#ccc' }}></div>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item xs={6} lg={2.2}>
                            <NavLink to='/account/dang-ky'><GoogleIcon /></NavLink>
                        </Grid>
                        <Grid item xs={6} lg={2.2}><FacebookIcon /></Grid>
                        <Grid item xs={6} lg={2.2}><TwitterIcon /></Grid>
                        <Grid item xs={6} lg={2.2}><AppleIcon /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default DangNhap;