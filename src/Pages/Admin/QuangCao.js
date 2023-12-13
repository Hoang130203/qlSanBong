import { Button, Grid, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import QuangCaoCard from "./Component/QuangCaoCard";
import { useEffect, useState } from "react";
import ClassApi from '../../api/API'
function QuangCao() {
    let listQC = [
        { img: 'https://bizweb.dktcdn.net/thumb/2048x2048/100/091/133/themes/880367/assets/slider_1.jpg?1676015027577', title: 'Siêu giảm giá giày ' },
        { img: 'https://marketingai.mediacdn.vn/wp-content/uploads/2016/12/Ban-Muon-Mua-Ti-Vi.png', title: 'Điện máy xanh ' }

    ]
    const [banner, setBanner] = useState([])
    useEffect(() => {
        setBanner(listQC)
        ClassApi.GetAllBanner().then((response) => {
            setBanner(response.data)
        })
    }, [])
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={2}>
            <Grid item xs={12} padding='20px 20px'>
                <Typography fontFamily='inherit' variant="h4" color='#1976d2' bgcolor='#e6f3ff'>Quảng cáo</Typography>
            </Grid>
            <Grid item xs={12} padding='0px 20px'>
                <NavLink to='/admin/quang-cao/them-quang-cao'>
                    <Button startIcon={<AddIcon />} variant="contained">Thêm quảng cáo</Button>
                </NavLink>
            </Grid>
            <Grid item xs={12} padding='0px 20px'>
                <Typography fontFamily='inherit' variant="h5" color='#ccc'>Quảng cáo hiện tại</Typography>
            </Grid>
            <Grid item container xs={12}>
                {banner.map((item, index) => (
                    <QuangCaoCard key={index} id={item.bannerid} img={item.linkimg} title={item.title} setBanner={setBanner} banners={banner} index={index} />
                ))}
            </Grid>
        </Grid>
    );
}

export default QuangCao;