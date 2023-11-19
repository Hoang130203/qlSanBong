import { Button, Grid, TextField, Typography } from "@mui/material";
import img from '../../Icons/ImageDangKy.png'

import { NavLink } from "react-router-dom";

function DangKy() {
    return (
        <Grid container paddingTop='10px' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative' }}>
            <Grid container item xs={12} md={9} height='610px' display='flex' flexDirection='row' justifyContent='space-around'>
                <Grid item maxHeight="630px" md={5} sm={0.00001} display='flex' flexDirection='row' borderRadius='10px' sx={{ borderTopRightRadius: '0', borderBottomRightRadius: '0', background: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Grid>
                <Grid item container md={7} sm={11.9} padding="40px 100px" display='block'>
                    <Grid item xs={12}><Typography variant="h4">Sign up</Typography></Grid>

                    <Grid item container padding="10px 0px" spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Email</Typography></Grid>
                        <Grid item xs={12}><TextField placeholder="John@example.com" sx={{ width: '250px', maxWidth: '100%' }}></TextField></Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Mật khẩu</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField type="password" placeholder="********" sx={{ width: '250px', maxWidth: '100%' }} ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container padding='10px 0px' spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Nhập lại mật khẩu</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField type="password" placeholder="********" sx={{ width: '250px', maxWidth: '100%' }} ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12}><Typography variant="h7">Họ tên</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField placeholder="John smith" sx={{ width: '250px', maxWidth: '100%' }} ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={1} paddingTop='10px'>
                        <Grid item xs={12}><Typography variant="h7">Địa chỉ</Typography></Grid>
                        <Grid item xs={12}  >
                            <TextField placeholder="Ngõ 1,..." sx={{ width: '250px', maxWidth: '100%' }} ></TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} marginTop='30px'>
                        <Button variant="contained" sx={{ backgroundColor: '#1D9BF0', width: '250px', height: '40px', maxWidth: '100%' }}>SIGN UP</Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid >);
}

export default DangKy;