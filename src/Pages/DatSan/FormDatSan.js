import { Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
function FormDatSan() {
    const [kip, setKip] = useState('')
    const user = { name: 'hoàng', id: '01013' }
    const sanbong = { id: '00001', name: 'Sân Mỹ Đình', address: '2QC8+57R, Đ. Lê Đức Thọ, Mỹ Đình, Từ Liêm, Hà Nội', cost: '500.000' }
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
        <Grid container display='flex' flexDirection='row' justifyContent='center' paddingTop='30px' alignSelf='flex-start'>
            <Grid item xs={12} md={7} height='50px'>
                <Typography textAlign='center' fontSize='25px' fontWeight='600'>Đặt sân</Typography>
            </Grid>
            <Grid item container xs={12} sm={10} md={8} lg={6} border='1px solid #ccc' minHeight='500px' maxHeight='600px' alignContent='flex-start'>
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
                            <TextField value={sanbong.id} style={{ width: '100px', }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                        <Grid item>
                            <Typography variant="h5">Tên sân : </Typography>
                        </Grid>
                        <Grid item maxWidth='100%'>
                            <TextField value={sanbong.name} style={{ width: '300px', maxWidth: '90%' }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                        <Grid item>
                            <Typography variant="h5">Địa chỉ : </Typography>
                        </Grid>
                        <Grid item maxWidth='100%'>
                            <TextField value={sanbong.address} style={{ width: '350px', maxWidth: '90%' }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                        <Grid item>
                            <Typography variant="h5">Kíp : </Typography>
                        </Grid>
                        <Grid item maxWidth='100%'>
                            <Select style={{ width: '200px', maxWidth: '100%' }} value={kip} onChange={(e) => { setKip(e.target.value) }}>
                                {kips.map((item, index) =>

                                    <MenuItem value={item.value} key={index}>{item.name}</MenuItem>

                                )}

                            </Select>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                        <Grid item>
                            <Typography variant="h5">Tổng tiền : </Typography>
                        </Grid>
                        <Grid item maxWidth='100%'>

                            <TextField value={sanbong.cost} style={{ width: '150px', maxWidth: '90%' }}></TextField>

                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' justifyContent='center' columnSpacing={3}>
                        <Grid item>
                            <Typography variant="h5">Người đặt : </Typography>
                        </Grid>
                        <Grid item maxWidth='100%'>

                            <TextField value={user.name} style={{ width: '150px', maxWidth: '90%' }}></TextField>

                        </Grid>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center' >
                        <Button color="success" variant="contained" style={{ paddingTop: '10px' }} endIcon={<SendIcon style={{
                            transform: 'rotate(-30deg)', // Xoay icon 45 độ
                            display: 'inline-flex',
                            position: 'relative',
                            top: '-3px'
                        }} />} >Gửi yêu cầu</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FormDatSan;