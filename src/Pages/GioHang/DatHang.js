import { Button, Chip, Divider, Grid, InputLabel, Radio, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ItemSpDatHang from "./ItemSpDatHang";
import ClassApi2 from '../../api/API2'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../../Component/Dialog";

function DatHang() {
    const [GioHangs, setGioHangs] = useState([
        { linkimg: 'https://bizweb.dktcdn.net/thumb/compact/100/091/133/products/4-b9fc7b6b-6819-4462-845d-98f35edfae96.jpg', productName: 'Giày Converse by John Varvatos', color: 'Xanh', price: 550000, quantity: 3 },
        { linkimg: 'https://product.hstatic.net/1000288768/product/chen_watermark_ttvn_dl-03_a97defaa7e894e199b1b9508eaa0d83b_master.png', productName: 'Áo phông Đoàn thể thao Việt Nam 2023', color: 'Xanh đậm', price: 250000, quantity: 1 },

    ])

    let vanchuyen = 50000
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [name, setName] = useState()
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        try {
            ClassApi2.GetCart().then((response) => {
                setGioHangs(response.data)
            })
        } catch (error) {

        }

    }, [])
    let totalPrice = 0
    const navigate = useNavigate()
    let user = { id: localStorage.getItem('usersb') }
    ClassApi2.GetInfo().then((response) => {
        setAddress(response.data.address)
        setPhoneNumber(response.data.phonenumber)
        setName(response.data.name)
    })
    const postOrder = () => {
        setDisabled(true)
        ClassApi2.PostOrder(GioHangs, vanchuyen).then((response) => {
            toast.info(response.data.message, {
                position: 'bottom-right'
            })
            if (response.data.success == true) {
                ClassApi2.DeleteGioHang()
            }

        }).finally(() => {
            setShow(false)

            navigate('/')

        }
        )
    }
    const [show, setShow] = useState(false)
    return (
        <Grid container justifyContent='center' paddingTop='30px' alignContent='flex-start'>
            <AlertDialog title='Bạn có chắc chắn muốn đặt hàng ?' isopen={show} setIsOpen={setShow} confirm={postOrder} />
            <Grid item xs={12} md={9.5}>
                <Typography variant="h5" color='#2a9dcc' fontFamily='inherit'>ĐẶT HÀNG</Typography>
            </Grid>
            <Grid container item xs={12} md={9.5} display='flex' flexDirection='row' >
                <Grid item container sm={12} md={4} alignContent='flex-start'>

                    <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={500}>Thông tin nhận hàng</Typography>
                    </Grid>
                    <Grid item xs={12} padding="10px 0px">
                        <InputLabel htmlFor="name-textfield">Họ tên</InputLabel>
                        <TextField value={name} id="name-textfield" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                            onChange={(e) => {
                                toast.warn('hãy vào cài đặt để sửa tên', {
                                    position: 'bottom-right'
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} padding="10px 0px">
                        <InputLabel htmlFor="address-textfield">Địa chỉ</InputLabel>
                        <TextField id="address-textfield" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                            value={address}
                            onChange={(e) => {
                                toast.warn('hãy vào cài đặt để sửa địa chỉ', {
                                    position: 'bottom-right'
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} padding="10px 0px">
                        <InputLabel htmlFor="sdt-textfield">Số điện thoại</InputLabel>
                        <TextField id="sdt-textfield" variant="outlined" style={{ width: '400px', maxWidth: '90%' }}
                            value={phoneNumber}
                            onChange={(e) => {
                                toast.warn('hãy vào cài đặt để sửa số điện thoại', {
                                    position: 'bottom-right'
                                })
                            }}
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
                        {GioHangs.map((sanpham, index) => {
                            let totalPricee = 0
                            for (const sanpham of GioHangs) {
                                totalPricee += sanpham.price * sanpham.quantity
                            }
                            totalPrice = totalPricee
                            return <ItemSpDatHang key={index} cost={sanpham.price * sanpham.quantity} quantity={sanpham.quantity} image={sanpham.linkimg} name={sanpham.productName} color={sanpham.color} />
                        })}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Tạm tính: <span style={{ color: 'red' }}>{totalPrice.toLocaleString()}</span> đ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Phí vận chuyển: <span style={{ color: 'blue' }}>{vanchuyen.toLocaleString()}</span> đ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography> Tổng tiền: <span style={{ color: 'orange' }}>{(totalPrice + vanchuyen).toLocaleString()}</span> đ</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained"
                            onClick={() => { setShow(true) }}
                            disabled={disabled}
                        >Đặt hàng</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default DatHang;