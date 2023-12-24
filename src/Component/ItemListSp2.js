import { Button, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import ClassApi2 from '../api/API2'
import { toast } from "react-toastify";
function ItemListSp2({ id, img, name, cost, type, bgcolor }) {
    const handleAdd = async () => {
        try {
            await ClassApi2.PostToCart({ userphonenumber: localStorage.getItem('usersb'), productid: id, price: parseInt(cost.replace(/\./g, '')), quantity: 1, color: '' })
            await toast.success('đã thêm vào giỏ hàng', {
                position: 'bottom-right'
            })

        } catch (error) {
            toast.error('thêm thất bại', {
                position: 'bottom-right'
            })
        }
    }
    return (
        <Fragment>
            {type && type == 1 ?
                <Grid item container xs={12} width='100%'
                    sx={{
                        border: '1px solid #ccc', padding: '10px 10px', borderRadius: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            //        border: '1px solid #333',
                            '& .img': { transform: 'scale(1.05)' },
                            transform: 'scale(1.03)'
                        },
                        bgcolor: bgcolor ? bgcolor : '#edeae1'
                    }}
                >
                    <Grid item sx={{ maxHeight: { xs: '100px' }, maxWidth: { xs: '120px' } }} className="img" >
                        <NavLink to={'/san-pham/chitietsanpham/' + id}>
                            <img src={img} style={{ objectFit: 'contain', height: '100%', borderRadius: '10px' }} ></img>
                        </NavLink>
                    </Grid>
                    <Grid item container flex={1}>
                        <NavLink to={'/san-pham/chitietsanpham/' + id} style={{ textDecoration: 'none', color: 'blue' }}>
                            <Grid item container alignItems='center' xs={12} sx={{ height: { xs: '42px' }, '&:hover': { transform: 'scale(1.05)' } }}>
                                <Typography sx={{
                                    fontSize: { xs: '14px' }, overflow: 'hidden',
                                    fontWeight: '550',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',

                                }}>{name}</Typography>
                            </Grid>
                        </NavLink>
                        <Grid item xs={12} alignItems='center'>
                            <Typography sx={{
                                '&:hover': { transform: 'scale(1.05)' }, fontSize: { xs: '14px' }, overflow: 'hidden',
                                fontWeight: '450',
                                textOverflow: 'ellipsis',

                            }}>{cost} đ</Typography>
                        </Grid>
                        <Grid item>
                            <NavLink to={'/san-pham/chitietsanpham/' + id} style={{ textDecoration: 'none', color: 'blue' }}>

                                <Button variant="outlined" color="success" style={{ marginRight: '10px' }}
                                    sx={{ fontSize: { xs: '12px' }, padding: { xs: '2px' }, '&:hover': { transform: 'scale(1.05)' } }}
                                >Chi tiết</Button>
                            </NavLink>
                            <Button variant="contained" color="success"
                                onClick={handleAdd}
                                sx={{ fontSize: { xs: '12px' }, display: { xs: 'none' }, '&:hover': { transform: 'scale(1.05)' } }}
                            >Thêm vào giỏ hàng</Button>
                            <Button onClick={handleAdd} sx={{
                                display: { xs: 'inline' }, padding: '0px',
                                '&:hover': { transform: 'scale(1.05)' }
                            }} variant="contained" >
                                <AddShoppingCartIcon sx={{
                                    padding: { xs: '2px' }, alignItems: 'center', position: 'relative', top: '3px'
                                }} fontSize="inherit" />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid item container xs={12} width='100%'
                    sx={{
                        border: '1px solid #ccc', padding: '10px 10px', borderRadius: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            //        border: '1px solid #333',
                            '& .img': { transform: 'scale(1.05)' },
                            transform: 'scale(1.03)'
                        },
                        bgcolor: '#edeae1'
                    }}
                >
                    <Grid item sx={{ maxHeight: { xs: '100px', sm: '170px' }, maxWidth: { xs: '120px', sm: '200px' } }} className="img" >
                        <NavLink to={'/san-pham/chitietsanpham/' + id}>
                            <img src={img} style={{ objectFit: 'contain', height: '100%', borderRadius: '10px' }} ></img>
                        </NavLink>
                    </Grid>
                    <Grid item container flex={1}>
                        <NavLink to={'/san-pham/chitietsanpham/' + id} style={{ textDecoration: 'none', color: 'blue' }}>
                            <Grid item container alignItems='center' xs={12} sx={{ height: { xs: '42px', sm: '70px' }, '&:hover': { transform: 'scale(1.05)' } }}>
                                <Typography sx={{
                                    fontSize: { xs: '14px', sm: '20px' }, overflow: 'hidden',
                                    fontWeight: '550',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',

                                }}>{name}</Typography>
                            </Grid>
                        </NavLink>
                        <Grid item xs={12} alignItems='center'>
                            <Typography sx={{
                                '&:hover': { transform: 'scale(1.05)' }, fontSize: { xs: '14px', sm: '20px' }, overflow: 'hidden',
                                fontWeight: '450',
                                textOverflow: 'ellipsis',

                            }}>{cost} đ</Typography>
                        </Grid>
                        <Grid item>
                            <NavLink to={'/san-pham/chitietsanpham/' + id} style={{ textDecoration: 'none', color: 'blue' }}>

                                <Button variant="outlined" color="success" style={{ marginRight: '10px' }}
                                    sx={{ fontSize: { xs: '12px', sm: '15px' }, padding: { xs: '2px', sm: '5px' }, '&:hover': { transform: 'scale(1.05)' } }}
                                >Chi tiết</Button>
                            </NavLink>
                            <Button variant="contained" color="success" onClick={handleAdd}
                                sx={{ fontSize: { xs: '12px', sm: '15px' }, display: { xs: 'none', sm: 'inline' }, '&:hover': { transform: 'scale(1.05)' } }}
                            >Thêm vào giỏ hàng</Button>
                            <Button onClick={handleAdd} sx={{ display: { xs: 'inline', sm: 'none' }, padding: '0px' }} variant="contained" >
                                <AddShoppingCartIcon sx={{ padding: { xs: '0px' }, alignItems: 'center', position: 'relative', top: '3px' }} fontSize="inherit" />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>}</Fragment>

    );
}

export default ItemListSp2;