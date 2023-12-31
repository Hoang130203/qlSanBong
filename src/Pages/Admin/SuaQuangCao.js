import { ThemeProvider } from "@emotion/react";
import { Button, CircularProgress, Grid, TextField, Typography, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ClassApi from '../../api/API'
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
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
    const id = useParams().id
    const [isUploading, setIsUploading] = useState(false)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [demoUrl, setDemoUrl] = useState('https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-marketingmegaphoneannouncementpromopromotion-flat-icon-png-image_537921.jpg')
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
    useEffect(() => {
        try {
            ClassApi.GetBanner(id).then((response) => {
                let data = response.data
                setTitle(data.title)
                setDemoUrl(data.linkimg)
            })
        } catch (error) {
            toast.error('lỗi nào đó')
        }
    }, [])
    const handleUpdate = async () => {
        try {
            if (title.length == 0) {
                toast.warn('Điền tiêu đề quảng cáo !')
                return
            }
            if (image != '') {
                setIsUploading(true);
                const sendimage = await ClassApi.PostImage(image)

                await ClassApi.PutBanner(id, { bannerid: id, title: title, linkimg: sendimage.data.url })
                setIsUploading(false);

            } else {
                await ClassApi.PutBanner(id, { bannerid: id, title: title, linkimg: demoUrl })
            }
            toast.success('Sửa thành công!')
        } catch (error) {
            toast.error("Sửa thất bại!")
        }
    }
    return (
        <Grid item container spacing={1} sx={{ maxWidth: { xs: '400px', sm: '100%' }, padding: { sm: " 30px 50px", xs: '30px 20px' } }} xs={12} width='100%'>
            {isUploading && <CircularProgress style={{ position: 'fixed', right: '20px', top: '20px' }} />}
            <ThemeProvider theme={theme}>
                <Grid item xs={12} padding='0px 0px 20px 0px'>
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2' fontSize='35px'>
                        Sửa quảng cáo
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
                            <TextField style={{ width: '430px', maxWidth: '100%' }} value={title} onChange={(e) => { setTitle(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} >
                        <Grid item xs={12} md={4} paddingTop='20px'>
                            <Typography>
                                Hình ảnh
                            </Typography>
                            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={onChangeImg}></input>
                        </Grid>
                        <Grid item xs={12} md={11}>
                            <img style={{ maxWidth: '100%', maxHeight: '300px' }} src={demoUrl} alt="preview"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" startIcon={<UpgradeIcon />} disabled={isUploading} onClick={handleUpdate}><Typography textTransform='none'>Sửa quảng cáo</Typography></Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Grid>
    );
}

export default ThemQuangCao;