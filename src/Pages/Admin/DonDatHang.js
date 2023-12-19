import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import ItemDanhSachDonHang from "./Component/ItemDanhSachDonHang";
import { useEffect, useState } from "react";
import ClassApi from '../../api/API'
function DonDatHang() {
    const list = [{}, {}]
    const [status, setStatus] = useState('Tất cả')
    const [time, setTime] = useState('Tất cả')
    const [Ordereds, setOrdereds] = useState([])
    useEffect(() => {
        setOrdereds([])
        ClassApi.GetOrderedByStatusAndTime(status, time).then((response) => {
            setOrdereds(response.data)
        })
    }, [status, time])
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12}>
                <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Danh sách đơn hàng</Typography>
            </Grid>
            <Grid item container xs={12} paddingLeft='10px' >
                <Grid item container xs={12} md={3} alignItems="center">
                    <Typography fontWeight={600}>Lọc theo :&nbsp; </Typography>
                    <Select style={{ width: '200px', fontWeight: 700 }} value={status} onChange={(e) => { setStatus(e.target.value); }}>
                        <MenuItem style={{ backgroundColor: 'transparent' }}
                            value="Đang chờ xác nhận" color=''>Đang chờ xác nhận</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent', color: 'orange' }}
                            value='Đã xác nhận' color='orange'>Đã xác nhận</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent', color: 'blue' }}
                            value='Đang giao hàng' color='blue'>Đang giao hàng</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent', color: 'green' }}
                            value='Hoàn thành' color='green'>Hoàn thành</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent', color: 'red' }}
                            value='Đã hủy' >Đã hủy</MenuItem>
                        <MenuItem style={{
                            backgroundColor: 'transparent', background: 'linear-gradient(to right, #6dd5ed, #f6e58d)', color: '#333'

                        }}
                            value='Tất cả' >Tất cả</MenuItem>
                    </Select>
                </Grid>
                <Grid item container xs={12} md={3} alignItems="center">
                    <Typography fontWeight={600}>Thời gian :&nbsp; </Typography>
                    <Select style={{ width: '200px', fontWeight: 700 }} value={time} onChange={(e) => { setTime(e.target.value); }}>
                        <MenuItem style={{ backgroundColor: 'transparent' }}
                            value="1 tuần">1 tuần qua</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent' }}
                            value='15 ngày' >15 ngày qua</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent' }}
                            value='1 tháng'>1 tháng qua</MenuItem>
                        <MenuItem style={{ backgroundColor: 'transparent', background: 'linear-gradient(45deg, #f6e58d, #6dd5ed)', color: '#333' }}
                            value='Tất cả'>Tất cả</MenuItem>

                    </Select>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                {Ordereds.map((item, index) => (
                    <ItemDanhSachDonHang key={index} orderCode={item.order.orderid} total={item.order.totalcost.toLocaleString()}
                        order={item}
                        time={item.order.time} listsp={item.listsp} phone={item.order.phonenumber}
                        stat={item.order.status.charAt(0).toUpperCase() + item.order.status.slice(1)} />
                ))}
            </Grid>
        </Grid>
    );
}

export default DonDatHang;