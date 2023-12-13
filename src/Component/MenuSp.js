import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";

let listsp = [
    { name: 'Bóng', to: '/san-pham/loai-sp/bóng' },
    { name: 'Giày', to: '/san-pham/loai-sp/giày' },
    { name: 'Quần áo', to: '/san-pham/loai-sp/quần áo' },
    { name: 'Dụng cụ', to: '/san-pham/loai-sp/dụng cụ' },
    { name: 'Phụ kiện', to: '/san-pham/loai-sp/phụ kiện' },
]
function MenuSp() {
    return (
        <Fragment>
            <Typography variant="h6">DANH MỤC SẢN PHẨM</Typography>
            <Grid item container style={{ paddingLeft: '20px' }} display='block'>
                {listsp.map((item, index) => (
                    <a href={item.to} key={index} style={{ textDecoration: 'none', color: '#333' }}>
                        <Typography>{item.name}</Typography>
                    </a>
                ))}</Grid></Fragment>
    );
}

export default MenuSp;