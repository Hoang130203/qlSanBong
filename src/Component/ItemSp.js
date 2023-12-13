import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Typography } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink } from "react-router-dom";
import ClassApi2 from '../api/API2'
import { toast } from "react-toastify";
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
        <Card sx={{ maxWidth: '100%', width: '280px' }}>

            <CardActionArea>

                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="green iguana"
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
            <CardActions>
                <Button onClick={handleAdd} size="small" color="primary" variant="outlined">
                    Thêm vào giỏ
                </Button>
                <NavLink to={'/san-pham/chitietsanpham/' + id}>
                    <Fab size="medium" style={{ right: '-70px', bottom: '7px' }}><RemoveRedEyeIcon /></Fab>
                </NavLink>
            </CardActions>
        </Card>
    );
}

export default ItemSp;