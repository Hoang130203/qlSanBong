import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Fab, Grid, Typography } from "@mui/material";

import ItemSp from "../../Component/ItemSp";
import ItemListSp from "../../Component/ItemListSp";
import MenuSp from "../../Component/MenuSp";
import { useEffect, useRef, useState } from "react";
import ClassApi2 from '../../api/API2'
import QuangCao from "./QuangCao";
import { useHistory } from 'react-router-dom';
let spmoi = [
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/2-382751d6-ebd4-477c-83d5-5045a3a23999.jpg?v=1466415099313', title: 'Giày tây nâu đỏ thương hiệu Converse All Star', cost: '500.000' },
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/zal1.jpg?v=1466482812400', title: 'Giày Converse Star Collar Break', cost: '450.000' },
    { img: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/2521102040-2-3-1.jpg?v=1466482446723', title: 'Giày Converse Star Camo Rubber', cost: '600.000' },


]
let spbanchay = [
    { img: 'https://product.hstatic.net/200000278317/product/da-banh-nike-zoom-mercurial-vapor-15-academy-tf-dj5635-605-hong-xanh-1_563a6bbcab6f4dcabcb9afc1808e950b_master.jpg', title: 'NIKE ZOOM MERCURIAL VAPOR 15 ACADEMY TF - DJ5635-605 - HỒNG/XANH', cost: '1.990.000' },
    { img: 'https://product.hstatic.net/200000278317/product/nike-zoom-mercurial-vapor-15-academy-tf-dj5635-300-xanh-la-tim-1_a96357d371364b3894b72d63bfe32a64_master.jpg', title: 'NIKE ZOOM MERCURIAL VAPOR 15 ACADEMY TF - DJ5635-300 - XANH LÁ/TÍM', cost: '2.150.000' },
    { img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhslwzw22w792a', title: 'Giày bóng chuyền NAM, NỮ VHD 2023 chuyên cày sân bê tông', cost: '589.000' },
]

function TrangChu() {
    const [spmoi, setSpMoi] = useState([])
    const [spbanchay, setSpbanchay] = useState([])
    const [smallqc, setSmallQc] = useState([])


    useEffect(() => {

        ClassApi2.GetAllBanner().then((response) => {
            setSmallQc(response.data.slice(response.data.length - 2))
            console.log(response.data)
        })
    }, [])
    useEffect(() => {
        console.log(smallqc);

    }, [smallqc]);
    useEffect(() => {
        ClassApi2.GetSpMoi().then((response) => {
            setSpMoi(response.data)
        })
        ClassApi2.GetTopDoanhThu().then((response) => {
            setSpbanchay(response.data)
        })
    }, [])
    //<img src="https://bizweb.dktcdn.net/thumb/2048x2048/100/091/133/themes/880367/assets/slider_1.jpg?1676015027577" style={{ width: '100%', height: 'auto' }} />
    return (
        <Grid container width='100%' justifyContent='center' >
            <Grid item xs={12} md={11} minHeight='240px'>
                <QuangCao />
            </Grid>
            <Grid item container display='flex' flexDirection='row' justifyContent='center' alignItems='center' marginTop='30px'>
                <Grid item paddingLeft='60px' container md={3} xs={10} height='280px' display='flex' flexDirection='column' justifyContent='center'>

                    <MenuSp />
                </Grid>
                <Grid item container md={9} xs={10} height='480px' overflow='hidden'>
                    <Grid item xs={12} display='flex' flexDirection='column' justifyContent='center' ><Typography variant="h5" fontWeight='600' textAlign='center'>SẢN PHẨM MỚI</Typography></Grid>
                    <Grid item xs={12}><Divider style={{ marginBottom: '5px' }} /><Divider style={{ marginBottom: '5px' }} /></Grid>
                    <Grid item container xs={12} height="80%" overflow='hidden'>
                        {spmoi.map((item, index) => (
                            <Grid key={index} item container xs={12} height='100%' md={4} display='flex' flexDirection='row' justifyContent='center' >
                                <ItemSp title={item.productname} img={item.linkimg} cost={item.price.toLocaleString()} id={item.productid} />
                            </Grid>
                        ))}

                    </Grid>

                </Grid>


            </Grid>
            <Grid item container xs={12}>
                <Grid item container md={3} xs={10} rowSpacing={1} padding='50px 0px' minHeight='400px' display='flex' flexDirection='row' >
                    <Grid item xs={12} >
                        <Typography textAlign='center' fontWeight={600} variant="h6">SẢN PHẨM BÁN CHẠY</Typography>
                    </Grid>
                    {spbanchay.map((item, index) => (
                        <Grid item key={index} xs={12} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <ItemListSp id={item.productid} widthMedia='151px' maxWidth='400px' cost={item.price.toLocaleString()} fontSize='20px' minWidthContent='200px' title={item.productname} heightt='152px' img={item.linkimg} />

                        </Grid>
                    ))}

                </Grid>
                <Grid item md={8} xs={12} height='auto' padding='90px 10px' minHeight={240} >
                    <QuangCao quangcao={smallqc} />
                </Grid>

            </Grid>
        </Grid>
    );
}

export default TrangChu;