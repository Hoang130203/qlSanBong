import { Button, Grid, Typography } from "@mui/material";
import ButtonMenu from "../../Component/ButtonMenu";
import SanBong from "./SanBong";
import { useEffect, useState } from "react";
import ClassApi from '../../api/API2'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function DatSan() {
    const [fields, setFields] = useState([
        { name: 'Sân bách khoa', rate: 3, price: '500.000', address: 'svđ bách khoa', special: 'không có', linkimg: "https://lh3.googleusercontent.com/p/AF1QipNA87BgBmE7xAL3LclpDWHbeb9ACPTT_yyInsPh=w1080-h608-p-k-no-v0" },
        { name: 'Sân Mỹ Đình', rate: 5, price: '900.000', address: 'Mỹ đình', special: 'svđ quốc gia', linkimg: "https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg" }])
    useEffect(() => {
        ClassApi.GetAllField().then((response) => {
            setFields(response.data)
        })
    }, [])
    const [selectedRate, setSelectedRate] = useState([]);
    const handleRateChange = (event) => {
        const { value, checked } = event.target;
        let updatedValues = [...selectedRate];

        if (checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((val) => val !== value);
        }

        setSelectedRate(updatedValues);
        console.log(selectedRate)
    };
    const [selectedType, setSelectedType] = useState([]);
    const handleTypeChange = (event) => {
        const { value, checked } = event.target;
        let updatedValues = [...selectedType];

        if (checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((val) => val !== value);
        }

        setSelectedType(updatedValues);
        console.log(selectedType)
    };
    const navigate = useNavigate()
    const handleSearch = () => {
        if (selectedRate.length == 0 && selectedType == 0) {
            window.location.reload()
            return
        }
        if (selectedRate.length == 0 || selectedType == 0) {
            return toast.warn('Hãy chọn đủ thông tin', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        const rate = selectedRate.join(',')
        const type = selectedType.join(',')
        ClassApi.GetFieldsBy(rate, type).then((response) => {
            setFields(response.data)
        })
    }
    return (
        <Grid container justifyContent='center' alignContent='flex-start'>
            <Grid container item xs={12} sm={9.5} paddingTop='25px' display='flex' flexDirection='row' marginBottom='30px'>
                <Grid item xs={12} flexDirection='row' display='flex'>
                    <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                        <Typography>Trang chủ &gt; </Typography>
                    </a>
                    <Typography color='#35c0c5'>&nbsp;Sân bóng </Typography>
                </Grid>

                <Grid item container display='flex' paddingTop='25px' flexDirection='row' >
                    <Grid item container xs={12} md={3} display='flex' flexDirection='colume' alignContent='flex-start'>
                        <ButtonMenu title='Đánh giá' iconRight=''>
                            <Grid container item fontSize='22px' display='flex' rowSpacing={1} flexDirection='column' padding='10px 0px 0px 30px'>
                                <Grid item ><input onChange={handleRateChange} type="checkbox" value='5' id="5s" style={{ width: '30px' }} /><label htmlFor="5s">5 sao</label></Grid>
                                <Grid item ><input onChange={handleRateChange} type="checkbox" value='4' id="4s" style={{ width: '30px' }} /><label htmlFor="4s">4 sao</label></Grid>
                                <Grid item ><input onChange={handleRateChange} type="checkbox" value='3' id="3s" style={{ width: '30px' }} /><label htmlFor="3s">3 sao</label></Grid>
                                <Grid item ><input onChange={handleRateChange} type="checkbox" value='2' id="2s" style={{ width: '30px' }} /><label htmlFor="2s">2 sao</label></Grid>
                                <Grid item ><input onChange={handleRateChange} type="checkbox" value='1' id="1s" style={{ width: '30px' }} /><label htmlFor="1s">1 sao</label></Grid>
                                <Grid item ><input onChange={handleRateChange} type="checkbox" value='0' id="0s" style={{ width: '30px' }} /><label htmlFor="0s">0 sao</label></Grid>
                            </Grid>
                        </ButtonMenu>
                        <ButtonMenu title='Loại sân' iconRight=''>
                            <Grid container item fontSize='22px' display='flex' rowSpacing={1} flexDirection='column' padding='10px 0px 0px 30px'>
                                <Grid item ><input type="checkbox" onChange={handleTypeChange} value='1' id="7n" style={{ width: '30px' }} /><label htmlFor="7n">7 người</label></Grid>
                                <Grid item ><input type="checkbox" onChange={handleTypeChange} value='2' id="11n" style={{ width: '30px' }} /><label htmlFor="11n">11 người</label></Grid>
                                <Grid item ><input type="checkbox" onChange={handleTypeChange} value='3' id="fs" style={{ width: '30px' }} /><label htmlFor="fs">Sân fusal</label></Grid>

                            </Grid>
                        </ButtonMenu>

                        <Grid item paddingLeft='30px'>
                            <Button style={{ width: '100px' }} variant="contained" sx={{ margin: '10px 0px' }}
                                onClick={handleSearch}
                            >Tìm</Button>
                        </Grid>


                    </Grid>
                    <Grid item container xs={12} md={9} display='flex' flexDirection='row' >
                        <Grid item>
                            <Typography variant="h6" fontWeight={500}>SÂN BÓNG ĐÁ</Typography>
                        </Grid>
                        <Grid item container >
                            {fields.map((item, index) => (
                                <SanBong key={index} image={item.linkimg} id={item.fieldid} title={item.name} rate={item.rate} address={item.address} special={item.special ? item.special : 'không có'} cost={item.price} />
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default DatSan;