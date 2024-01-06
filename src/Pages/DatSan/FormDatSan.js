import { Button, Fab, Grid, MenuItem, Popover, Select, TextField, Typography } from "@mui/material";
import { addDays, format } from 'date-fns';
import EmailIcon from '@mui/icons-material/Email';
import { Fragment, useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import ClassApi from '../../api/API2'
import { toast } from "react-toastify";
import EditNoteIcon from '@mui/icons-material/EditNote';
function FormDatSan() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const id = useParams().id
    const [note, setNote] = useState('')
    const [kip, setKip] = useState(1)
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(true)
    const user = { name: localStorage.getItem('namesb'), id: localStorage.getItem('usersb') }
    const [dates, setDates] = useState([]);
    const [sanbong, setSanbong] = useState({ fieldid: '00001', name: 'Sân Mỹ Đình', address: '2QC8+57R, Đ. Lê Đức Thọ, Mỹ Đình, Từ Liêm, Hà Nội', price: 500000 })
    useEffect(() => {
        const today = new Date();
        const nextSevenDays = Array.from({ length: 7 }, (_, i) => addDays(today, i + 1));
        setDate(nextSevenDays[0])
        setDates(nextSevenDays);
        console.log(nextSevenDays)
        ClassApi.GetFieldById(id).then((response) => {
            setSanbong(response.data)
            setLoading(false)
        })
    }, [])
    const handleSend = () => {
        if (kip == 0 || date == '') {
            return toast.warn('Chọn đủ kíp và ngày', {
                position: 'bottom-right'
            })
        }
        ClassApi.PostOrderField(localStorage.getItem('usersb'),
            { fieldid: sanbong.fieldid, kip: kip, times: date, cost: !isNaN(sanbong.price) ? parseInt(sanbong.price) : sanbong.price, note: note })
            .then((response) => {
                toast.info(response.data.message, {
                    position: 'bottom-right'
                })
            }).catch(() => {
                toast.error('Đặt thất bại', {
                    position: 'bottom-right'
                })
            })
    }
    let kips = [
        { value: 1, name: 'Kíp 1: 7h-8h' },
        { value: 2, name: 'Kíp 2: 8h-9h' },
        { value: 3, name: 'Kíp 3: 9h-10h' },
        { value: 4, name: 'Kíp 4: 15h-16h' },
        { value: 5, name: 'Kíp 5: 16h-17h' },
        { value: 6, name: 'Kíp 6: 17h-18h' },
        { value: 7, name: 'Kíp 7: 18h-19h' },

    ]
    return (
        <Fragment>{!loading &&
            <Grid container display='flex' flexDirection='row' justifyContent='center' paddingTop='30px' alignSelf='flex-start'>
                <Grid item xs={12} md={7} height='50px'>
                    <Typography textAlign='center' fontSize='25px' fontWeight='600'>Đặt sân</Typography>
                </Grid>
                <Grid item container xs={12} sm={10} md={8} lg={6} border='1px solid #ccc' minHeight='500px' alignContent='flex-start'>
                    <Grid item container xs={12} bgcolor='#ccc' height='40px' display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                        <Grid item paddingRight='10px'>
                            <EmailIcon style={{ position: 'relative', top: '2px' }} />
                        </Grid>
                        <Grid item >
                            <Typography textAlign='center' variant="h6">Gửi yêu cầu đặt sân </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container padding='20px 10px' justifyItems='flex-start' rowSpacing={1}>
                        <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                            <Grid item>
                                <Typography variant="h5">Mã sân : </Typography>
                            </Grid>
                            <Grid item>
                                <TextField value={sanbong.fieldid} style={{ width: '100px', }} disabled></TextField>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                            <Grid item>
                                <Typography variant="h5">Tên sân : </Typography>
                            </Grid>
                            <Grid item maxWidth='100%'>
                                <TextField value={sanbong.name} style={{ width: '300px', maxWidth: '90%' }} disabled></TextField>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                            <Grid item>
                                <Typography variant="h5">Địa chỉ : </Typography>
                            </Grid>
                            <Grid item maxWidth='100%'>
                                <TextField value={sanbong.address} style={{ width: '350px', maxWidth: '90%' }} disabled></TextField>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' justifyContent='center' flexDirection='row' columnSpacing={3}>

                            <Grid item>
                                <Typography variant="h5">Kíp : </Typography>
                            </Grid>
                            <Grid item >
                                <Select style={{ width: '180px', maxWidth: '100%' }} value={kip} onChange={(e) => { setKip(e.target.value) }}>
                                    {kips.map((item, index) =>
                                        <MenuItem value={item.value} key={index}>{item.name}</MenuItem>
                                    )}

                                </Select>

                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' justifyContent='center' flexDirection='row' columnSpacing={3}>
                            <Grid item>
                                <Typography variant="h5">Ngày : </Typography>
                            </Grid>
                            <Grid item >
                                <Select style={{ width: '160px', maxWidth: '100%' }} value={date} onChange={(e) => setDate(e.target.value)}>
                                    {dates.map((date, index) => (
                                        <MenuItem key={index} value={date}>
                                            {format(date, 'dd/MM/yyyy')}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                            <Grid item>
                                <Typography variant="h5">Tổng tiền : </Typography>
                            </Grid>
                            <Grid item maxWidth='100%'>
                                <TextField value={sanbong.price.toLocaleString() + ' đ'} style={{ width: '150px', maxWidth: '90%' }} disabled></TextField>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                            <Grid item>
                                <Typography variant="h5">Người đặt : </Typography>
                            </Grid>
                            <Grid item maxWidth='100%'>

                                <TextField value={user.name} style={{ width: '150px', maxWidth: '90%' }} disabled></TextField>

                            </Grid>
                            <Grid item>
                                <Fab onClick={handleClick}><EditNoteIcon color="primary" fontSize="large" /></Fab>
                                <Popover

                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Grid item container sx={{ p: 2 }}>
                                        <Grid item xs={12}>
                                            <Typography>Ghi chú cho chủ sân</Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField value={note} onChange={(e) => { setNote(e.target.value) }} style={{ width: '100%' }}></TextField>
                                        </Grid>

                                    </Grid>
                                </Popover>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} justifyContent='center' >
                            <Button color="success" variant="contained" style={{ paddingTop: '10px' }}
                                onClick={handleSend}
                                endIcon={<SendIcon style={{
                                    transform: 'rotate(-30deg)', // Xoay icon 45 độ
                                    display: 'inline-flex',
                                    position: 'relative',
                                    top: '-3px'
                                }} />} >Gửi yêu cầu</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>}</Fragment>
    );
}

export default FormDatSan;