import { Grid, MenuItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

let listsp = [
    { name: 'BÓNG', to: '/san-pham/loai-sp/bóng' },
    { name: 'GIÀY', to: '/san-pham/loai-sp/giày' },
    { name: 'QUẦN ÁO', to: '/san-pham/loai-sp/quần áo' },
    { name: 'DỤNG CỤ', to: '/san-pham/loai-sp/dụng cụ' },
    { name: 'PHỤ KIỆN', to: '/san-pham/loai-sp/phụ kiện' },
]
function MenuSp() {
    return (
        <Grid container paddingTop="5px" display='flex' flexDirection='column' justifyContent='start' overflow='hidden' >
            {listsp.map((sp, index) => (
                <a href={sp.to} style={{ textDecoration: 'none' }} key={index}>
                    <MenuItem overflow='hidden' style={{ paddingTop: '10px', paddingBottom: '10px' }} ><Typography fontSize='14px' color='#fff' paddingLeft='5px' >{sp.name}</Typography></MenuItem>
                </a>
            ))}

        </Grid>
    );
}

export default MenuSp;