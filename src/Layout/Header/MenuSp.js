import { Grid, Typography } from "@mui/material";

let listsp = [
    { name: 'BÓNG', child: ['Bóng đá', 'Bóng chuyền', 'Bóng rổ', 'Bóng bàn'] },
    { name: 'GIÀY', child: ['Giày đá bóng', 'Giày chạy bộ', 'Giày bóng chuyền', 'Giày thời trang'] },
    { name: 'QUẦN ÁO', child: ['Áo bóng rổ', 'Áo thể thao', 'Áo giữ nhiệt thể thao'] },
    { name: 'DỤNG CỤ', child: ['Thanh lò xo', 'Kính bơi', 'Xà đơn', 'Bao cát'] },
    { name: 'PHỤ KIỆN', child: ['Bó gối chống chấn thương', 'Tất thể thao'] },
]
function MenuSp() {
    return (
        <Grid container padding="40px 0px 40px 50px" display='flex' flexDirection='row' justifyContent='start' overflow='hidden' >
            {listsp.map((sp, index) => (
                <Grid item container xs={2} key={index} display='flex' flexDirection='column' borderLeft={index == 0 ? '1px solid #ccc' : ''} borderRight='1px solid #ccc' alignContent='center' alignItems='center' overflow='hidden'>
                    <Grid item overflow='hidden' ><Typography fontSize='14px' color='#35c0c5' paddingBottom='10px'>{sp.name}</Typography></Grid>
                    {sp.child.map((chil, i) => (

                        <Grid overflow='hidden' item key={i}><a href="#" style={{ textDecoration: 'none' }} ><Typography textAlign='center' fontSize='14px' color='#fff'>{chil}</Typography></a></Grid>
                    ))}
                </Grid>
            ))}

        </Grid>
    );
}

export default MenuSp;