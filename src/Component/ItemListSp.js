import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function ItemListSp({ id, maxWidth, widthMedia, title, cost, img, heightt, paddingtop, minWidthContent, fontSize, wrap }) {
    return (
        <Card sx={{ display: 'flex', width: '100%', overflow: 'hidden', maxWidth: maxWidth, height: heightt, paddingRight: '15px' }}>
            <CardMedia
                component="img"
                sx={{ width: widthMedia, height: widthMedia }}
                image={img}
                alt="Ảnh sản phẩm"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: paddingtop ? paddingtop : '20px', backgroundColor: '#f7f7f7' }}>
                <CardContent style={{ padding: '10px 10px', paddingTop: paddingtop, paddingBottom: paddingtop, minWidth: minWidthContent }}>
                    <Typography gutterBottom variant="h7" component="div" overflow='hidden' noWrap={wrap ? false : true} fontSize={fontSize}>
                        {title}
                    </Typography>
                    <Typography color='#ccc' gutterBottom variant="h6" component="div" overflow='hidden' noWrap>
                        {cost}đ
                    </Typography>
                </CardContent>

                <CardActions style={{ paddingTop: '0px' }}>
                    <NavLink to={'/san-pham/chitietsanpham/' + id}>
                        <Button size="small" color="primary" variant={wrap ? 'contained' : 'outlined'}>
                            Xem
                        </Button>
                    </NavLink>
                    <NavLink>
                        <Button size="small" color="success" variant={wrap ? 'contained' : 'outlined'} style={{ display: wrap ? '' : 'none' }}>
                            Thêm vào giỏ hàng
                        </Button>
                    </NavLink>
                </CardActions>

            </Box>

        </Card>
    );
}

export default ItemListSp;