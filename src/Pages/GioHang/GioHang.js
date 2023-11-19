import { Grid, Typography } from "@mui/material";

function GioHang() {
    return (
        <Grid container justifyContent='center'>
            <Grid container item xs={9.5} paddingTop='25px' display='flex' flexDirection='column'>
                <Grid item  >
                    <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                        <Typography variant="h7">Trang chủ    /&nbsp;</Typography></a>
                    <Typography variant="h7" color='#35c0c5'>Giỏ hàng</Typography>

                </Grid>

                <Grid item paddingTop='40px'>
                    <Typography variant="h5" fontWeight='600'>GIỎ HÀNG</Typography>
                    <Typography>Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default GioHang;