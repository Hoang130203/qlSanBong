import { Card, CardContent, Typography, ThemeProvider, createTheme, Grid, CardActionArea, Button, CardActions, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import ClassApi from '../../../api/API'
import { toast } from 'react-toastify';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExportHoaDon from '../../../Service/ExportHoaDon';
function ItemDanhSachDonHang({ total, orderCode, time, type, listsp, stat, phone, order }) {
    // listsp = [{ productName: 'abc', quantity: 3 }, { productName: 'xyz', quantity: 5 }]
    const [status, setStatus] = useState(stat)
    const [color, setColor] = useState()

    const ChangeStatus = (e) => {
        if (status == "Đã hủy") {
            toast.warn('Đơn hàng đã hủy không thể sửa', {
                position: 'bottom-right'
            })

        } else if (status == 'Hoàn thành') {
            toast.warning('Đơn hàng đã hoàn thành không thể sửa', {
                position: 'bottom-right'
            })
        } else {
            setStatus(e.target.value)
            ClassApi.UpdateStatusOrder(orderCode, e.target.value)
        }
    }
    useEffect(() => {
        if (status == 'Đang giao hàng') {
            setColor('blue')
        } else if (status == 'Đã xác nhận') {
            setColor('orange')
        } else if (status == 'Hoàn thành') {
            setColor('green')
        } else if (status == 'Đã hủy') {
            setColor('red')
        } else {
            setColor('')
        }

    }, [status])
    const theme = createTheme({
        typography: {
            fontSize: 14,
        },
        cardStyles: {
            width: '900px',
            maxWidth: '80vw',
            margin: '10px',
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'space-between'
        },
        select: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: color,
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: color,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: color,
            },
            '&:after': {
                borderColor: color,
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12}>
                <Card sx={theme.cardStyles} style={{ boxShadow: `3px 3px 3px 0px #ccc, -3px -3px 3px 0px rgba(0, 0, 0, 0.3)` }}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom >
                            Mã đơn hàng : #<span style={{ color: 'red', fontWeight: '700' }}>{orderCode}</span>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Tổng tiền: <span style={{ color: 'green', fontWeight: '700' }}>{total} đ</span>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Sđt đặt hàng: <span style={{ color: 'gray', fontWeight: '700' }}>{phone}</span>
                        </Typography>
                    </CardContent>
                    <CardContent style={{ flex: '1' }}>
                        <Typography variant="h7" component="h4" >
                            Đã đặt lúc: <span style={{ color: '#d6af5a', fontWeight: '600' }}>{time}</span>
                        </Typography>
                        <Typography variant="body1" >
                            Danh sách sản phẩm:
                            {listsp.map((sp, index) => (
                                <Typography key={index} ><span style={{ color: 'red', fontSize: '13px' }}>{sp.quantity} x </span>{sp.productName}</Typography>
                            ))}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ maxWidth: '200px', float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant='h6' paddingBottom='10px' >Trạng thái :</Typography>
                        <Select style={{ width: '200px', color: color, fontWeight: 700, borderColor: 'red', fill: color, marginBottom: '10px ' }} sx={theme.select} value={status} onChange={(e) => { ChangeStatus(e); setColor(e.target.color) }}>
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
                        </Select>
                        <Button variant='contained' startIcon={<ExitToAppIcon />} onClick={() => { ExportHoaDon.GenerateInvoice(order) }}>Xuất hóa đơn</Button>
                    </CardActions>
                </Card>

            </Grid>

        </ThemeProvider>
    );
}

export default ItemDanhSachDonHang;