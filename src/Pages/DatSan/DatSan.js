import { Button, Grid, Typography } from "@mui/material";
import ButtonMenu from "../../Component/ButtonMenu";
import SanBong from "./SanBong";
let fields = [
    { title: 'Sân bách khoa', rate: 3, cost: '500.000', address: 'svđ bách khoa', special: 'không có', image: "https://lh3.googleusercontent.com/p/AF1QipNA87BgBmE7xAL3LclpDWHbeb9ACPTT_yyInsPh=w1080-h608-p-k-no-v0" },
    { title: 'Sân Mỹ Đình', rate: 5, cost: '900.000', address: 'Mỹ đình', special: 'svđ quốc gia', image: "https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg" }

]
function DatSan() {
    return (
        <Grid container justifyContent='center'>
            <Grid container item xs={9.5} paddingTop='25px' display='flex' flexDirection='row' height='30px' marginBottom='30px'>
                <Grid item xs={12} flexDirection='row' display='flex'>
                    <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                        <Typography>Trang chủ &gt; </Typography>
                    </a>
                    <Typography color='#35c0c5'>&nbsp;Sân bóng </Typography>
                </Grid>

                <Grid item container display='flex' paddingTop='25px' flexDirection='row' >
                    <Grid item container xs={3} display='flex' flexDirection='column' style={{ minHeight: '500px' }}>
                        <ButtonMenu title='Đánh giá' iconRight=''>
                            <Grid container item fontSize='22px' display='flex' rowSpacing={1} flexDirection='column' padding='10px 0px 0px 30px'>
                                <Grid item ><input type="checkbox" value='5 sao' id="5s" style={{ width: '30px' }} /><label htmlFor="5s">5 sao</label></Grid>
                                <Grid item ><input type="checkbox" value='4 sao' id="4s" style={{ width: '30px' }} /><label htmlFor="4s">4 sao</label></Grid>
                                <Grid item ><input type="checkbox" value='3 sao' id="3s" style={{ width: '30px' }} /><label htmlFor="3s">3 sao</label></Grid>
                                <Grid item ><input type="checkbox" value='2 sao' id="2s" style={{ width: '30px' }} /><label htmlFor="2s">2 sao</label></Grid>
                                <Grid item ><input type="checkbox" value='1 sao' id="1s" style={{ width: '30px' }} /><label htmlFor="1s">1 sao</label></Grid>

                            </Grid>
                        </ButtonMenu>
                        <ButtonMenu title='Loại sân' iconRight=''>
                            <Grid container item fontSize='22px' display='flex' rowSpacing={1} flexDirection='column' padding='10px 0px 0px 30px'>
                                <Grid item ><input type="checkbox" value='5 sao' id="7n" style={{ width: '30px' }} /><label htmlFor="7n">7 người</label></Grid>
                                <Grid item ><input type="checkbox" value='4 sao' id="5n" style={{ width: '30px' }} /><label htmlFor="5n">5 người</label></Grid>
                                <Grid item ><input type="checkbox" value='3 sao' id="fs" style={{ width: '30px' }} /><label htmlFor="fs">Sân fusal</label></Grid>

                            </Grid>
                        </ButtonMenu>

                        <Grid item paddingLeft='30px'>
                            <Button style={{ width: '100px' }} variant="contained" sx={{ margin: '10px 0px' }} >Tìm</Button>
                        </Grid>


                    </Grid>
                    <Grid item container xs={9} display='flex' flexDirection='column' >
                        <Grid item>
                            <Typography variant="h6" fontWeight={500}>SÂN BÓNG ĐÁ</Typography>
                        </Grid>
                        <Grid item container>
                            {fields.map((item, index) => (
                                <SanBong key={index} image={item.image} title={item.title} rate={item.rate} address={item.address} special={item.special} cost={item.cost} />
                            ))}

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default DatSan;