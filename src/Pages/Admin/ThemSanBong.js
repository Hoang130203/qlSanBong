import { ThemeProvider } from "@emotion/react";
import { Button, CircularProgress, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ClassApi from "../../api/API";
import { toast } from "react-toastify";
const theme = createTheme({
    components: {
        MuiTypography: {

            styleOverrides: {

                root: {
                    fontSize: '20px',
                    fontWeight: "500",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    //padding: "0px 30px",

                    "& .MuiInputBase-input": {
                        fontSize: "20px",
                        padding: "5px",
                    },
                },
            },
        },

    },
});
function ThemSanBong() {
    const [isUploading, setIsUploading] = useState(false);
    const [name, setName] = useState('')
    const [cost, setCost] = useState(0)
    const [address, setAddress] = useState('')
    const [decription, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [demoUrl, setDemoUrl] = useState('https://thuviendohoa.vn/upload/images/items/hinh-anh-trai-bong-da-lua-png-447.webp')
    const onChange = (e) => {
        setType(e.target.value)
    }
    const handleAdd = async () => {

        try {

            setCost(parseInt(cost))
            if (name.length == 0 || address.length == 0 || type.length == 0) {
                toast.warning('điền đủ thông tin')
                return
            }
            if (image != '') {
                setIsUploading(true);
                const sendimage = await ClassApi.PostImage(image)

                await ClassApi.PostField(name, cost, address, type, decription, sendimage.data.url)
                setIsUploading(false);
            } else {
                await ClassApi.PostField(name, cost, address, type, decription, 'sendimage.data.url')
            }
            await toast.success('thêm thành công')
        }
        catch {
            toast.error('lỗi')
        }

    }

    const onChangeImg = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage)
        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setDemoUrl(event.target.result);
            };

            reader.readAsDataURL(selectedImage);
        }
    }
    return (
        <Grid item container spacing={1} style={{ padding: " 30px 50px" }} sx={{ maxWidth: { xs: '400px', sm: '100%' }, padding: { sm: " 30px 50px", xs: '30px 20px' } }}>
            {isUploading && <CircularProgress style={{ position: 'fixed', right: '20px', top: '20px' }} />}
            <ThemeProvider theme={theme}>
                <Grid item xs={12} padding='0px 0px 20px 0px'>
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2' fontSize='35px'>
                        Thêm sân bóng mới
                    </Typography>
                </Grid>
                <Grid item container xs={12} rowSpacing={1} >
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Tên sân bóng
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px', maxWidth: '100%' }} value={name} onChange={(e) => { setName(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Giá tiền/ kíp
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField value={cost} onChange={(e) => { setCost(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography >
                                Địa chỉ
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px', maxWidth: '100%' }} value={address} onChange={(e) => { setAddress(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography >
                                Loại sân
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Select style={{ width: '120px', height: '45px' }} value={type} onChange={onChange}>
                                <MenuItem value='1'>7 người</MenuItem>
                                <MenuItem value='2'>11 người</MenuItem>
                                <MenuItem value='3'>Fusal</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Mô tả
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextareaAutosize value={decription} onChange={(e) => { setDescription(e.target.value) }} style={{ width: '430px', maxWidth: '100%', height: '70px', fontSize: '20px', fontFamily: 'inherit', padding: '5px' }} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item xs={12} md={4} paddingTop='20px'>
                            <Typography>
                                Hình ảnh
                            </Typography>
                            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={onChangeImg}></input>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{ maxWidth: { xs: '400px', sm: '100%' } }}>
                            <img style={{ maxWidth: '100%', maxHeight: '300px' }} src={demoUrl} alt="preview"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Button onClick={handleAdd} disabled={isUploading} variant="contained" startIcon={<AddIcon />}><Typography textTransform='none'>Thêm sân bóng</Typography></Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Grid>
    );
}

export default ThemSanBong;