import { Button, Chip, Divider, Grid, Radio, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ItemSpDatHang from "./ItemSpDatHang";

function DatHang() {
    const [GioHangs, setGioHangs] = useState([
        { image: 'https://bizweb.dktcdn.net/thumb/compact/100/091/133/products/4-b9fc7b6b-6819-4462-845d-98f35edfae96.jpg', name: 'Giày Converse by John Varvatos', color: 'Xanh', cost: 550000 * 3, quantity: 3 },
        { image: 'https://product.hstatic.net/1000288768/product/chen_watermark_ttvn_dl-03_a97defaa7e894e199b1b9508eaa0d83b_master.png', name: 'Áo phông Đoàn thể thao Việt Nam 2023', color: 'Xanh đậm', cost: 250000 * 1, quantity: 1 },

    ])

    let totalPrice = 0
    let vanchuyen = 50000

    for (const sanpham of GioHangs) {
        totalPrice += sanpham.cost
    }




    const user = { name: 'Người đặt hàng', id: '11001' }
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    return (
        <Grid container justifyContent='center' paddingTop='30px' alignContent='flex-start'>
            <Grid item xs={12} md={9.5}>
                <Typography variant="h5" color='#2a9dcc' fontFamily='inherit'>ĐẶT HÀNG</Typography>
            </Grid>
            <Grid container item xs={12} md={9.5} display='flex' flexDirection='row' >
                <Grid item container sm={12} md={4} alignContent='flex-start'>

                    <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={500}>Thông tin nhận hàng</Typography>
                    </Grid>
                    <Grid item xs={12} padding="10px 0px">
                        <TextField value={user.name} label="Họ tên" variant="outlined" style={{ width: '400px', maxWidth: '90%' }} />
                    </Grid>
                    <Grid item xs={12} padding="10px 0px">
                        <TextField label="Địa chỉ" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={12} padding="10px 0px">
                        <TextField label="Số điện thoại" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                            value={phoneNumber}
                            onChange={(e) => { setPhoneNumber(e.target.value) }}
                        />
                    </Grid>
                </Grid>
                <Grid item container sm={12} md={4} alignContent='flex-start' paddingRight='20px'>
                    <Grid item xs={12} paddingBottom='10px'>
                        <Typography variant="h6" fontWeight={500}>Vận chuyển</Typography>
                    </Grid>
                    {phoneNumber == null || address == null || phoneNumber.length == 0 || address.length == 0 ?
                        <Grid item xs={12} padding='10px 0px'>
                            <Chip label="Vui lòng nhập thông tin giao hàng"
                                variant="outlined"
                                style={{ backgroundColor: '#ccc', width: '100%', borderRadius: '10px' }}

                            ></Chip>
                        </Grid>
                        :
                        <Grid item container xs={12} padding='0px 5px' alignItems='center' justifyContent='space-between' style={{ backgroundColor: '#d3e9ff', width: '90%', borderRadius: '10px' }}>
                            <Grid item >
                                <Radio checked></Radio>
                            </Grid>
                            <Grid item>
                                <Typography variant="h7" color='#333' >Giao hàng tận nơi</Typography>
                            </Grid>
                            <Grid item paddingLeft='10px' >
                                <Typography variant="h7" color='#333' paddingRight='10px'>50.000đ</Typography>
                            </Grid>
                        </Grid>
                    }
                    <Grid item xs={12} padding='10px 0px'>
                        <Typography variant="h6">Thanh toán</Typography>
                    </Grid>
                    <Grid item container xs={12} padding='0px 5px' alignItems='center' style={{ backgroundColor: '#d3e9ff', width: '90%', borderRadius: '10px' }}>
                        <Grid item >
                            <Radio checked></Radio>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" color='#333' paddingLeft='30px'>Thanh toán khi giao hàng</Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item container sm={12} md={4} alignContent='flex-start' paddingBottom='20px' rowSpacing={1}>
                    <Grid item xs={12} paddingBottom='10px'>
                        <Typography variant="h6" fontWeight={500}>Đơn hàng</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item container>
                        {GioHangs.map((sanpham, index) => (
                            <ItemSpDatHang key={index} cost={sanpham.cost} quantity={sanpham.quantity} image={sanpham.image} name={sanpham.name} color={sanpham.color} />
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Tạm tính: <span style={{ color: 'red' }}>{totalPrice}</span> đ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Phí vận chuyển: <span style={{ color: 'blue' }}>{vanchuyen}</span> đ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography> Tổng tiền: <span style={{ color: 'orange' }}>{totalPrice + vanchuyen}</span> đ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" >Đặt hàng</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default DatHang;