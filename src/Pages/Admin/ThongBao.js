import { Grid, Typography } from "@mui/material";
import NotificationCard from "./Component/NotificationCard";
let notifications = [
    { id: '1', orderCode: '11111', time: '2023-11-22', content: 'Tài khoản abcxyz vừa đặt sân Mỹ đình kíp 3 ngày 23/11/2023', type: '1' },
    { id: '2', orderCode: '11131', time: '2023-12-22', content: 'Tài khoản gsđc vừa hủy đơn hàng #11131', type: '2' },
    { id: '3', orderCode: '56111', time: '2023-11-23', content: 'Tài khoản xyz vừa thanh toán hóa đơn #56111', type: '3' },
    { id: '4', orderCode: '113311', time: '2023-11-2', content: 'Tài khoản abc vừa đánh giá sản phẩm #3133', type: '4' },

]

function ThongBao() {
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12} >
                <Typography bgcolor='#e6f3ff' textAlign='center' fontFamily='inherit' variant="h4" color='#1976d2'>Thông báo</Typography>
            </Grid>
            <Grid item container xs={12} display='flex' flexDirection='column'>
                {notifications.map((item, index) => (
                    <NotificationCard key={index} content={item.content} time={item.time} id={item.id} orderCode={item.orderCode} type={item.type} />
                ))}
            </Grid>
        </Grid>
    );
}

export default ThongBao;