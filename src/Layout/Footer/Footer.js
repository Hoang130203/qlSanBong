import { Divider, Fab, Grid, Typography } from "@mui/material";
import img from '../../Icons/mau-logo-cau-lac-bo-bong-da-dep-02.png'
import { AppleIcon, FacebookIcon, GoogleIcon, TwitterIcon } from "../../Icons/IconDangNhap";
function Footer() {
    return (
        <Grid container style={{ minHeight: '390px', background: 'url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-menu.png?1665385034327) #1b1b1b' }}>
            <Grid item container display='flex' flexDirection='row' minHeight='323px' padding="60px 0px 0px 100px" alignContent='start' alignItems='center'>
                <Grid item container xs={6} md={3} height='225px'>
                    <img src={img} style={{ maxHeight: '60px' }}></img>
                </Grid>
                <Grid item container xs={6} md={3} height='225px'>
                    <Grid item ><Typography fontSize='16px' color='#fff'>VỀ CHÚNG TÔI</Typography></Grid>
                </Grid>
                <Grid item container xs={6} md={3} height='225px'>
                    <Grid item ><Typography fontSize='16px' color='#fff'>DỊCH VỤ</Typography></Grid>
                </Grid>
                <Grid item container xs={6} md={3} height='225px'>
                    <Grid item ><Typography fontSize='16px' color='#fff'>LIÊN HỆ</Typography></Grid>
                </Grid>
            </Grid>

            <Grid item container minHeight='67px' display='flex' flexDirection='row' padding="0px 100px 0px 100px" alignItems='center'>
                <Grid item xs={12} md={8} alignContent='start' >
                    <Typography color='#fff' fontSize='12px'>© Bản quyền thuộc về Avent Team | Cung cấp bởi <a style={{ textDecoration: 'none', color: '#1D9BF0' }} href="https://www.facebook.com/hoang.maiminh.146">Mai Minh Hoang</a></Typography>
                </Grid>
                <Grid item xs={12} md={4} display='flex' alignItems='center' >
                    <Typography color='#fff' fontSize='12px'>Follow us</Typography>
                    <Fab style={{ marginLeft: '10px' }} size="small"><GoogleIcon /></Fab>
                    <Fab style={{ marginLeft: '10px' }} size="small"><FacebookIcon /></Fab>
                    <Fab style={{ marginLeft: '10px' }} size="small"><TwitterIcon /></Fab>
                    <Fab style={{ marginLeft: '10px' }} size="small"><AppleIcon /></Fab>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;