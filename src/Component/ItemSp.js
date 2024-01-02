import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Grid, Typography } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink } from "react-router-dom";
import ClassApi2 from '../api/API2'
import { toast } from "react-toastify";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function ItemSp({ id, img, title, cost }) {

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

        <Card sx={{ maxWidth: '100%', width: '280px', maxHeight: '500px' }}>
            <NavLink to={'/san-pham/chitietsanpham/' + id} style={{ textDecoration: 'none', color: '#333' }}>
                <CardActionArea sx={{
                    transition: 'all 1.6s ease-in-out',
                    '&:hover': {
                        '& .image': { transform: 'scale(1.05)', }
                    }
                }}>

                    <CardMedia
                        component="img"
                        height="250"
                        image={img}
                        alt="green iguana"
                        //           sx={{ '&:hover': { transform: 'scale(1.05)' } }}
                        className="image"
                    />
                    <CardContent style={{ padding: '10px 10px' }}>
                        <Typography gutterBottom variant="h7" component="div" overflow='hidden' noWrap>
                            {title}
                        </Typography>
                        <Typography color='#ccc' gutterBottom variant="h6" component="div" overflow='hidden' noWrap>
                            {cost}đ
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </NavLink>
            <CardActions sx={{

                display: 'flex', justifyContent: 'space-evenly'
            }}>
                <NavLink to={'/san-pham/chitietsanpham/' + id} style={{ textDecoration: 'none', color: '#333', height: '31px' }}>

                    <Button size="small" color="success" variant="outlined" className="button"
                        sx={{
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.08)'
                            },
                        }}>
                        Chi tiết
                    </Button>
                </NavLink>
                <Button onClick={handleAdd} size="small" color="success" variant="contained"
                    sx={{
                        height: '31px',
                        width: '114px',
                        transition: 'all 0.3s ease-in-out',
                        '& .icon': { display: 'none', transform: 'translateY(100%)', }, // thêm thuộc tính visibility cho icon
                        '&:hover': {
                            transform: 'scale(1.08)',
                            '& .text': { display: 'none', transform: 'translateY(-100%)' },
                            '& .icon': { display: 'flex', transform: 'translateY(0)' } // thay đổi thuộc tính visibility cho icon
                        },
                    }}
                >
                    <Typography style={{ fontSize: '12px' }} className="text">
                        Thêm vào giỏ
                    </Typography>
                    <AddShoppingCartIcon className="icon" />
                </Button>
            </CardActions>
        </Card>

    );
}

export default ItemSp;