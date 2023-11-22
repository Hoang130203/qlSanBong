import { ThemeProvider } from "@emotion/react";
import { Button, Grid, TextField, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
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
function ThemQuangCao() {

    const [demoUrl, setDemoUrl] = useState('https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-marketingmegaphoneannouncementpromopromotion-flat-icon-png-image_537921.jpg')
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
        <Grid item container spacing={1} style={{ padding: " 30px 50px" }} xs={12} width='100%'>
            <ThemeProvider theme={theme}>
                <Grid item xs={12} padding='0px 0px 20px 0px'>
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2' fontSize='35px'>
                        Thêm quảng cáo mới
                    </Typography>
                </Grid>
                <Grid item container xs={12} rowSpacing={1} >
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Tiêu đề
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px' }}></TextField>
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
                            <img style={{ maxWidth: '100%', maxHeight: '300px' }} src={demoUrl} alt="preview"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" startIcon={<AddIcon />}><Typography textTransform='none'>Thêm quảng cáo</Typography></Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Grid>
    );
}

export default ThemQuangCao;