import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
const API_ADDRESS = 'https://provinces.open-api.vn/';
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
function ThemSanPham() {
    const [type, setType] = useState('')
    const onChange = (e) => {
        setType(e.target.value)
    }
    const [demoUrl, setDemoUrl] = useState('https://png.pngtree.com/png-vector/20210313/ourmid/pngtree-sheets-of-graph-paper-torn-writing-png-image_3055185.jpg')
    const onChangeImg = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setDemoUrl(event.target.result);
            };

            reader.readAsDataURL(selectedImage);
        }
    }
    return (
        <Grid item container spacing={1} style={{ padding: " 30px 50px" }} width='100%'>
            <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2' fontSize='35px'>
                        Thêm sản phẩm mới
                    </Typography>
                </Grid>
                <Grid item container xs={12} rowSpacing={1}>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Tên sản phẩm
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px' }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Đơn giá
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Số lượng
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '100px' }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Màu sắc
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Mô tả
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextareaAutosize style={{ width: '430px', height: '50px', fontSize: '20px', fontFamily: 'inherit', padding: '5px' }} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Loại hàng
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Select style={{ width: '150px', height: '45px' }} value={type} onChange={onChange}>
                                <MenuItem value='ball'>Bóng</MenuItem>
                                <MenuItem value='shoes'>Giày</MenuItem>
                                <MenuItem value='clothes'>Quần áo</MenuItem>
                                <MenuItem value='tool'>Dụng cụ</MenuItem>
                                <MenuItem value='item'>Phụ kiện</MenuItem>
                            </Select>

                        </Grid>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item xs={12} md={4} paddingTop='20px'>
                            <Typography>
                                Hình ảnh
                            </Typography>
                            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={onChangeImg}></input>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <img style={{ maxWidth: '100%', maxHeight: '300px', boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)' }} src={demoUrl} alt="preview"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" startIcon={<AddIcon />}><Typography textTransform='none'>Thêm sản phẩm</Typography></Button>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </Grid>
    );
}

export default ThemSanPham;
