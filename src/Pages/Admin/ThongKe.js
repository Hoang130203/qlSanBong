import { Grid, Typography } from "@mui/material";

function Thongke() {
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12}>
                <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Thống kê doanh số</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography fontFamily='inherit' variant="h5" color='#ccc'>Đang phát triển chức năng này...</Typography>
            </Grid>
        </Grid>
    );
}

export default Thongke;