import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Fab, Grid, Typography } from "@mui/material";

import ItemSp from "../../Component/ItemSp";
import ItemListSp from "../../Component/ItemListSp";
import MenuSp from "../../Component/MenuSp";
import { Fragment, useEffect, useRef, useState } from "react";
import ClassApi2 from '../../api/API2'
import QuangCao from "./QuangCao";
import { useHistory } from 'react-router-dom';
import ItemListSp2 from "../../Component/ItemListSp2";
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
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        ClassApi2.GetAllBanner().then((response) => {
            setSmallQc(response.data.slice(response.data.length - 2))
            console.log(response.data)

        })
    }, [])

    useEffect(() => {
        ClassApi2.GetSpMoi().then((response) => {
            setSpMoi(response.data)
        })
        ClassApi2.GetTopDoanhThu().then((response) => {
            setSpbanchay(response.data)
            setLoading(false)
        })
    }, [])
    //<img src="https://bizweb.dktcdn.net/thumb/2048x2048/100/091/133/themes/880367/assets/slider_1.jpg?1676015027577" style={{ width: '100%', height: 'auto' }} />
    return (
        <Fragment>
            {!loading &&
                <Grid container width='100%' justifyContent='center' >
                    <Grid item xs={12} md={11} sx={{ minHeight: { xs: '0px', sm: '240px' } }}>
                        <QuangCao />
                    </Grid>
                    <Grid item container display='flex' flexDirection='row' justifyContent='center' alignItems='center' marginTop='10px'>
                        <Grid item container md={3} xs={10} height='280px' display='flex' justifyContent='center'>
                            <MenuSp />
                        </Grid>
                        <Grid item container md={9} xs={10} minHeight='480px' paddingTop='20px'>
                            <Grid item container xs={12} alignItems='center' display='flex' justifyContent='center' >
                                <div style={{ flexGrow: '1', height: '2px', backgroundColor: 'black', margin: '0px 10px' }}></div>
                                <Typography variant="h5" fontWeight='600' textAlign='center'>SẢN PHẨM MỚI</Typography>
                                <div style={{ flexGrow: '1', height: '2px', backgroundColor: 'black', margin: '0px 10px' }}></div>
                            </Grid>


                            {spmoi.map((item, index) => (
                                <Grid key={index} item container xs={12} height='100%' md={4} sm={6} display='flex' flexDirection='row' justifyContent='center' >
                                    <ItemSp title={item.productname} img={item.linkimg} cost={item.price.toLocaleString()} id={item.productid} />
                                </Grid>
                            ))}



                        </Grid>


                    </Grid>
                    <Grid item container xs={12} justifyContent='space-around'>
                        <Grid item container md={3} xs={10} rowSpacing={1} padding='50px 0px' minHeight='400px' display='flex' flexDirection='row' >
                            <Grid item container xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ flexGrow: '1', height: '1px', backgroundColor: 'black', margin: '0px 10px' }}></div>
                                <Typography textAlign='center' fontWeight={600} variant="h6">SẢN PHẨM BÁN CHẠY</Typography>
                                <div style={{ flexGrow: '1', height: '1px', backgroundColor: 'black', margin: '0px 10px' }}></div>
                            </Grid>
                            {spbanchay.map((item, index) => (
                                <Grid item key={index} xs={12} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}>
                                    <ItemListSp2 id={item.productid} cost={item.price.toLocaleString()} name={item.productname} img={item.linkimg} type={1} />

                                </Grid>
                            ))}

                        </Grid>
                        <Grid item md={8} xs={12} height='auto' padding='90px 10px' minHeight={240} >
                            <QuangCao />
                        </Grid>

                    </Grid>
                </Grid>
            }
        </Fragment>
    );
}

export default TrangChu;