import { Grid, MenuItem, Typography } from "@mui/material";
import { Fragment } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
let listsp = [
    { name: 'Bóng', to: '/san-pham/loai-sp/bóng', icon: <SportsSoccerIcon /> },
    { name: 'Giày', to: '/san-pham/loai-sp/giày', icon: <IceSkatingIcon /> },
    { name: 'Quần áo', to: '/san-pham/loai-sp/quần áo', icon: <CheckroomIcon /> },
    { name: 'Dụng cụ', to: '/san-pham/loai-sp/dụng cụ', icon: <FitnessCenterIcon /> },
    { name: 'Phụ kiện', to: '/san-pham/loai-sp/phụ kiện', icon: <AllInclusiveIcon /> },
]

const HoverMenuItem = styled(MenuItem)(({ theme }) => ({
    height: '44px',
    padding: '12px 25px 12px 18px',
    border: '1px solid rgba(129, 129, 129, 0.15)',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.6s ease-in-out', // Hiệu ứng chuyển đổi
    '&:hover': {
        '& .icon': {
            color: ' #83b735',
            transform: 'scale(1.2)', // Phóng to icon khi hover
        },
        '& .name': {
            color: ' #83b735',
            fontSize: '18px', // Phóng to chữ khi hover
        },
    },
}));
function MenuSp() {
    return (
        <div style={{ width: '270px' }}>
            <Grid item container alignItems='center' justifyContent='space-between'
                sx={{ height: '54px', backgroundColor: '#83b735', color: '#fff', padding: '0px 10px' }}>
                <MenuIcon />
                <Typography variant="h7" fontWeight={600}>DANH MỤC SẢN PHẨM</Typography>
                <KeyboardArrowDownIcon />
            </Grid>

            <Grid item container style={{}} display='block'>
                {listsp.map((item, index) => (
                    <a href={item.to} key={index} style={{ textDecoration: 'none', color: '#333' }}>
                        <HoverMenuItem>
                            <div className="icon" style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</div>
                            <Typography fontWeight={600} marginLeft='10px' className="name">{item.name}</Typography>
                        </HoverMenuItem>
                    </a>
                ))}</Grid>
        </div>
    );
}

export default MenuSp;