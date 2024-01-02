import styled from "@emotion/styled";
import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React, { Fragment } from 'react';
import { NavLink, useNavigate } from "react-router-dom";




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
    const width = window.innerWidth
    let isMobile = width < 768 ? true : false
    const navigate = useNavigate()
    const goTo = () => {
        navigate('/dat-san/chi-tiet-san/' + id)
    }
    return (
        <Fragment>
            {
                isMobile ?
                    <Grid container display='flex' flexDirection='row' item xs={11.5} minHeight='100px' padding='10px' borderRadius='10px'>
                        <Grid item container xs={3.5} bgcolor='#f7f7f7' style={{ borderTopLeftRadius: '10px', borderBottomLeftRadiusRadius: '10px' }}>
                            <img onClick={goTo} src={image} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }}></img>
                        </Grid>
                        <Grid item container style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', padding: '3px' }}
                            xs={8.5} overflow='clip' paddingLeft='10px' bgcolor='#f7f7f7'>
                            <Grid onClick={goTo} item xs={12}>
                                <Typography variant="h8" gutterBottom noWrap overflow='hidden'>
                                    {title}
                                </Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Rating value={rate} readOnly size="small" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" fontSize='12px' gutterBottom>
                                    Giá tiền: <span style={{ color: 'red' }}>{cost.toLocaleString()}đ</span> / Trận
                                </Typography>
                            </Grid>
                            <Typography variant="body1" fontSize='12px' gutterBottom noWrap overflow='hidden'>
                                Địa chỉ: {address}
                            </Typography>
                            <NavLink to={'/dat-san/chi-tiet-san/' + id} style={{ height: '25px' }}>
                                <Button variant="contained" size="small" color="primary" sx={{ marginRight: '10px' }}>
                                    <Typography fontSize='11px'>Xem chi tiết</Typography>
                                </Button>
                            </NavLink>
                            <NavLink to={'/dat-san/dat-san/' + id} style={{ height: '25px' }} >
                                <Button variant="contained" size="small" color="secondary">

                                    <Typography fontSize='11px'> Đặt sân</Typography>
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                    :
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
            }

        </Fragment>
    );
}

export default SanBong;