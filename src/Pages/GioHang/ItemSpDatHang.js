import { Badge, Grid, Typography } from "@mui/material";

function ItemSpDatHang({ image, name, color, cost, quantity }) {
    return (
        <Grid item container padding='10px 0px'>
            <Grid item container xs={2} alignContent='center'>
                <Grid item >
                    <Badge badgeContent={quantity} color="primary">
                        <img style={{ maxWidth: '100%', maxHeight: '50px' }} src={image} />
                    </Badge>
                </Grid>
            </Grid>
            <Grid item container xs={7} paddingLeft='10px'>
                <Grid item xs={12}>
                    <Typography fontWeight={600}>{name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{color}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={3} >
                <Typography textAlign='center'>{cost} đ</Typography>
            </Grid>
        </Grid>
    );
}

export default ItemSpDatHang;