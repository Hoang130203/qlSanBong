import { Divider, Fab, Grid, Typography } from "@mui/material";
import img from '../../Icons/mau-logo-cau-lac-bo-bong-da-dep-02.png'
import { AppleIcon, FacebookIcon, GoogleIcon, TwitterIcon } from "../../Icons/IconDangNhap";
function Footer() {
    return (
        <Grid container style={{ minHeight: '390px', background: 'url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-menu.png?1665385034327) #1b1b1b' }}>
            <Grid item container display='flex' flexDirection='row' minHeight='150px' sx={{ padding: { sm: "60px 0px 0px 0px", xs: "10px 0px" } }} alignContent='start' alignItems='flex-start' rowSpacing={4}>
                <Grid item container xs={6} md={3} flexDirection='column' justifyContent='flex-start' alignItems='center' rowSpacing={2}>
                    <Grid item>
                        <img src={img} style={{ maxHeight: '60px' }}></img>
                    </Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='red'>Project 1 Shop</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='blue'>0973006825</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='green'>k58a01.mmh@gmail.com</Typography></Grid>

                </Grid>
                <Grid item container rowSpacing={2} xs={6} md={3} style={{ height: 'auto' }} flexDirection='column' justifyContent='flex-start' alignItems='center'>
                    <Grid item textAlign='center'><Typography fontSize='17px' color='orange'>SẢN PHẨM </Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Đặt sân bóng</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Giày</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Bóng</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Quần áo thể thao</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Dụng cụ</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Phụ kiện thể thao</Typography></Grid>

                </Grid>
                <Grid item container rowSpacing={2} xs={6} md={3} style={{ height: 'auto' }} flexDirection='column' justifyContent='flex-start' alignItems='center'>
                    <Grid item textAlign='center'><Typography fontSize='17px' color='orange'>VỀ DỰ ÁN</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Bài tập lớn project 1</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Mô hình: REST full api</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Thời gian thực hiện: 7 tuần</Typography></Grid>
                </Grid>
                <Grid item container rowSpacing={2} xs={6} md={3} style={{ height: 'auto' }} flexDirection='column' justifyContent='flex-start' alignItems='center'>
                    <Grid item textAlign='center'><Typography fontSize='17px' color='orange'>CÔNG NGHỆ </Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Back end: Asp.net core </Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Front end: Reactjs</Typography></Grid>
                    <Grid item textAlign='center'><Typography fontSize='13px' color='#fff'>Csdl: Sql server</Typography></Grid>

                </Grid>

            </Grid>

            <Grid item justifyContent='center' container minHeight='67px' display='flex' flexDirection='row' sx={{ padding: { sm: "0px 100px 0px 100px", xs: "10px 10px" } }} alignItems='center'>
                <Grid item xs={8} md={8} alignContent='start' marginBottom='20px' >
                    <Typography color='#fff' fontSize='12px'>© Được tạo bởi <a style={{ textDecoration: 'none', color: '#1D9BF0' }} href="https://www.facebook.com/hoang.maiminh.146">Mai Minh Hoang</a></Typography>
                </Grid>
                <Grid item xs={10} md={4} display='flex' alignItems='center' >
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