import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";

let listsp = [
    { name: 'Bóng', child: ['Bóng đá', 'Bóng chuyền', 'Bóng rổ', 'Bóng bàn'] },
    { name: 'Giày', child: ['Giày đá bóng', 'Giày chạy bộ', 'Giày bóng chuyền', 'Giày thời trang'] },
    { name: 'Quần áo', child: ['Áo bóng rổ', 'Áo thể thao', 'Áo giữ nhiệt thể thao'] },
    { name: 'Dụng cụ', child: ['Thanh lò xo', 'Kính bơi', 'Xà đơn', 'Bao cát'] },
    { name: 'Phụ kiện', child: ['Bó gối chống chấn thương', 'Tất thể thao'] },
]
function MenuSp() {
    return (
        <Fragment>
            <Typography variant="h6">DANH MỤC SẢN PHẨM</Typography>
            <Grid item container style={{ paddingLeft: '20px' }} display='block'>
                {listsp.map((item, index) => (
                    <a href="#" key={index} style={{ textDecoration: 'none', color: '#333' }}>
                        <Typography>{item.name}</Typography>
                    </a>
                ))}</Grid></Fragment>
    );
}

export default MenuSp;