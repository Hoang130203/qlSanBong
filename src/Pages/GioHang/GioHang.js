import { Button, Fab, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const tableHeadName = [
    { name: "Số thứ tự" },
    { name: "Ảnh sản phẩm" },
    { name: "Tên sản phẩm" },
    { name: 'Đơn giá' },
    { name: 'Số lượng' },
    { name: 'Thành tiền' },
    { name: 'Xóa' },

];
function GioHang() {
    const [GioHangs, setGioHangs] = useState([
        { image: 'https://bizweb.dktcdn.net/thumb/compact/100/091/133/products/4-b9fc7b6b-6819-4462-845d-98f35edfae96.jpg', name: 'Giày Converse by John Varvatos', color: 'Xanh', cost: 550000, quantity: 3 },
        { image: 'https://product.hstatic.net/1000288768/product/chen_watermark_ttvn_dl-03_a97defaa7e894e199b1b9508eaa0d83b_master.png', name: 'Áo phông Đoàn thể thao Việt Nam 2023', color: 'Xanh đậm', cost: 250000, quantity: 1 },

    ])
    const solvetotalcost = () => {
        let totalPrice = 0;

        for (const sanpham of GioHangs) {
            totalPrice += sanpham.cost * sanpham.quantity;
        }

        return totalPrice;
    }
    const [totalCost, setTotalCost] = useState(solvetotalcost())
    return (
        <Grid container justifyContent='center'>
            <Grid container item xs={9.5} paddingTop='25px' display='flex' flexDirection='column'>
                <Grid item display='flex' flexDirection='row'>
                    <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                        <Typography >Trang chủ    /&nbsp;</Typography></a>
                    <Typography color='#35c0c5'>Giỏ hàng</Typography>

                </Grid>
                <Grid item container paddingTop='40px'>
                    <Grid item xs={12}>
                        <Typography variant="h5" fontWeight='600'>GIỎ HÀNG</Typography>
                    </Grid>
                    {GioHangs.length == 0 ?
                        <Typography>Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.</Typography>
                        :
                        <Grid item container overflow='auto'>
                            <TableContainer component={Paper}>
                                <Table sx={{ width: '100%', minWidth: '300px' }}>
                                    <TableHead>
                                        <TableRow>
                                            {tableHeadName.map((column, index) => (
                                                <TableCell key={index} style={{ textAlign: 'center' }}>
                                                    <Typography variant="h7" style={{ fontWeight: "bold" }}>
                                                        {column.name}
                                                    </Typography>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {GioHangs.map((sanpham, index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{ fontSize: "18px", textAlign: 'center', minWidth: '50px' }}>{index + 1}</TableCell>
                                                <TableCell style={{ fontSize: "18px", maxWidth: '130px', minWidth: '120px' }}><img style={{ maxWidth: '100%' }}
                                                    src={sanpham.image} alt=""></img>
                                                </TableCell>
                                                <TableCell style={{ fontSize: "18px", textAlign: 'center', minWidth: '100px' }}>{sanpham.name}<br />{sanpham.color}</TableCell>
                                                <TableCell style={{ fontSize: "18px" }}><span style={{ color: 'blue' }}>{sanpham.cost}</span> đ</TableCell>
                                                <TableCell style={{ fontSize: "18px" }}>
                                                    <div style={{ height: '30px', display: 'flex', flexDirection: 'row' }}>
                                                        <button style={{ padding: '0px' }}
                                                            onClick={() => {
                                                                const updatedGioHangs = [...GioHangs];
                                                                if (updatedGioHangs[index].quantity > 0) {

                                                                    updatedGioHangs[index].quantity = updatedGioHangs[index].quantity - 1;

                                                                    setGioHangs(updatedGioHangs);
                                                                    setTotalCost(solvetotalcost())
                                                                }

                                                            }}>
                                                            <RemoveIcon /></button>
                                                        <input value={sanpham.quantity} onChange={(e) => { GioHangs[index].quantity = parseInt(e.target.value) }} type="text" style={{ maxWidth: '100%', maxHeight: '100%', height: '26px', padding: '0px', width: '30px', textAlign: 'center' }}></input>
                                                        <button style={{ padding: '0px' }}
                                                            onClick={() => {
                                                                const updatedGioHangs = [...GioHangs];
                                                                updatedGioHangs[index].quantity = updatedGioHangs[index].quantity + 1;
                                                                setGioHangs(updatedGioHangs);
                                                                setTotalCost(solvetotalcost())
                                                            }}>
                                                            <AddIcon />
                                                        </button>
                                                    </div>
                                                </TableCell>
                                                <TableCell style={{ fontSize: "18px" }}><span style={{ color: 'blue' }}>{sanpham.cost * sanpham.quantity}</span> đ</TableCell>
                                                <TableCell style={{ fontSize: "18px" }}>
                                                    <Fab variant='circular' size="small" style={{ color: 'red' }}
                                                        onClick={() => {
                                                            const updatedGioHangs = [...GioHangs];
                                                            updatedGioHangs[index].quantity = 0
                                                            updatedGioHangs.splice(index, 1);
                                                            setGioHangs(updatedGioHangs);
                                                            setTotalCost(solvetotalcost())
                                                        }}
                                                    >
                                                        <DeleteOutlineIcon /></Fab>
                                                </TableCell>

                                            </TableRow>
                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Grid item xs={12} padding='25px 0px'>
                                <Typography style={{ fontSize: "24px", color: '#a29d9d' }}>
                                    Tổng số tiền:&nbsp;
                                    <span style={{ color: 'red' }}>{totalCost}</span> đ
                                </Typography>
                            </Grid>
                            <Grid item xs={12} padding='25px 0px'>
                                <NavLink to='/cart/dat-hang'>
                                    <Button variant="contained">
                                        <Typography variant="h6" textTransform='none'>Tiến hành đặt hàng</Typography>
                                    </Button>
                                </NavLink>
                            </Grid>
                        </Grid>

                    }

                </Grid>

            </Grid>
        </Grid>
    );
}

export default GioHang;