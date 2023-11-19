import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Typography } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
function ItemSp({ img, title, cost }) {
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
                <Button size="small" color="primary">
                    Thêm vào giỏ
                </Button>
                <Fab size="medium" style={{ right: '-70px', bottom: '7px' }}><RemoveRedEyeIcon /></Fab>
            </CardActions>
        </Card>
    );
}

export default ItemSp;