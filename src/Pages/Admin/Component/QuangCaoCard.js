import { Card, CardContent, CardMedia, Fab, Grid, Typography, createTheme } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const theme = createTheme({
    typography: {
        fontSize: 14,
    },
    cardStyles: {
        width: '100%',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',

    },
});
function QuangCaoCard({ img, title }) {
    return (
        <Grid item container xs={12}>
            <Card sx={theme.cardStyles} >
                <CardContent >
                    <Typography color="textSecondary" gutterBottom >
                        Tiêu đề: <span style={{ color: 'green', fontWeight: '700' }}>{title}</span>
                    </Typography>
                </CardContent>
                <CardMedia image={img} style={{ width: '100%', minHeight: '200px' }}>
                </CardMedia>
            </Card>
            <Grid item container display='flex' flexDirection='row' padding='0px 20px' columnSpacing={3}>
                <Grid item>
                    <Fab size="small"> <SettingsIcon /></Fab>
                </Grid>
                <Grid item>
                    <Fab size="small" style={{ color: 'red' }}> <DeleteForeverIcon /></Fab>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default QuangCaoCard;