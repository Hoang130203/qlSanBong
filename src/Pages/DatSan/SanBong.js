import styled from "@emotion/styled";
import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React from 'react';
import { NavLink } from "react-router-dom";




const useStyles = styled((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 600,
        margin: 'auto',
        marginBottom: theme.spacing(2),
    },
    media: {
        width: 200,
        height: 200,
        objectFit: 'cover',
    },
    content: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
}));
function SanBong({ address, cost, special, image, title, rate, id }) {
    const classes = useStyles();
    return (
        <Grid container item height='247px' width='95%' padding='10px' borderLeft="1px solid #ccc">
            <Card className={classes.root} style={{ display: 'flex', maxHeight: '100%' }}>
                <CardMedia
                    sx={{ width: '30%', maxHeight: '100%' }}
                    component='img'
                    className={classes.media}
                    image={image}
                    title="title"
                />
                <CardContent className={classes.content}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            {title}
                        </Typography>
                        <Rating value={rate} readOnly />
                        <Typography variant="body1" gutterBottom>
                            Giá tiền: <span style={{ color: 'red' }}>{cost.toLocaleString()}đ</span> / Trận
                        </Typography>
                        <Typography variant="body1" gutterBottom noWrap overflow='hidden'>
                            Địa chỉ: {address}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Điểm nhấn: {special}
                        </Typography>
                    </div>
                    <div className={classes.buttons}>
                        <NavLink to={'/dat-san/chi-tiet-san/' + id}>
                            <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                                Xem chi tiết
                            </Button>
                        </NavLink>
                        <NavLink to={'/dat-san/dat-san/' + id}>
                            <Button variant="contained" color="secondary">
                                Đặt sân
                            </Button>
                        </NavLink>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default SanBong;