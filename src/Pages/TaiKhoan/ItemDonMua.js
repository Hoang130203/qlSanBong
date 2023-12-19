import { Badge, Button, Divider, Grid, Popover, Rating, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ClassApi2 from '../../api/API2'
import { toast } from "react-toastify";
import AlertDialog from "../../Component/Dialog";
import ItemDanhGia from "./ItemDanhGia";
import { NavLink } from "react-router-dom";
function ItemDonMua({ listsp, total, id, sanpham, donhang }) {

    const [show, setShow] = useState(false)
    const huyDon = () => {
        setShow(false)
        ClassApi2.CancelOrderProduct(id).then((response) => {
            toast.info(response.data.message, {
                position: 'bottom-right'
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        })
    }
    return (
        <Grid item container padding='10px 0px' alignContent='flex-start' rowSpacing={2} margin='15px 0px'>
            <AlertDialog title='Bạn có chắc chắn muốn hủy đơn hàng?' isopen={show} setIsOpen={setShow} confirm={huyDon} />
            <Grid item container xs={12} justifyContent='space-between' padding='0px 10px 10px 10px' bgcolor="#ccc">
                <Grid item>
                    <Typography>Mã đơn hàng:<span style={{ color: 'red' }}>#{id}</span></Typography>
                </Grid>
                <Grid item>
                    <Typography>Trạng thái : <span style={{
                        color: donhang.status === "Hoàn thành" ? 'green' :
                            donhang.status === "Đã hủy" ? 'red' :
                                donhang.status === "Đang giao hàng" ? 'blue' :
                                    donhang.status === "Đã xác nhận" ? 'orange' : 'black'
                    }}>{donhang.status}</span></Typography>
                </Grid>
            </Grid>

            {listsp.map((item, index) => (
                <Grid item container xs={12} key={index} alignContent='center' >
                    <Grid item container xs={2.5} alignContent='center' paddingBottom='10px'>
                        <Grid item >
                            <NavLink to={'/san-pham/chitietsanpham/' + item.productid} style={{ textDecoration: 'none', color: 'purple' }}>
                                <Badge badgeContent={sanpham[index].quantity} color="primary">
                                    <img style={{ maxWidth: '100%', maxHeight: '80px' }} src={item.linkimg} />
                                </Badge>
                            </NavLink>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6.5} paddingLeft='10px'>
                        <Grid item xs={12}>
                            <NavLink to={'/san-pham/chitietsanpham/' + item.productid} style={{ textDecoration: 'none', color: 'purple' }}>
                                <Typography fontWeight={600}>{item.productname}</Typography>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{sanpham[index].color}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={3} justifyContent='flex-end'>
                        <Grid item>
                            <Typography textAlign='center' color='orange'>{sanpham[index].cost.toLocaleString()} đ</Typography>
                        </Grid>

                    </Grid>
                    <ItemDanhGia productid={sanpham[index].productid} time={donhang.time} status={donhang.status} />
                    <Grid item xs={12}><Divider style={{ borderColor: '#d5c1c1' }} /></Grid>
                </Grid>
            ))}
            <Grid item xs={12}><Divider /></Grid>
            <Grid item container xs={12} justifyContent='flex-end'>
                <Grid item >
                    <Typography>Thành tiền: <span style={{ color: 'orange' }}>{total.toLocaleString()}</span> đ</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} item container justifyContent='flex-end'>
                <Grid item >
                    {donhang.status == "Hoàn thành" || donhang.status == "Đã hủy" ? '' :
                        <Button color='error' variant="contained" onClick={() => { setShow(true) }} >Hủy đơn</Button>}

                </Grid>
            </Grid>
        </Grid>
    );
}

export default ItemDonMua;