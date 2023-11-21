import { styled } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width: 'auto',
    },
}));

const StyledCardMedia = styled(CardMedia)({
    minWidth: '100px',
    minHeight: '100px',
    maxWidth: '150px',
    maxHeight: '150px'
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    width: '70%',
    [theme.breakpoints.down('md')]: {
        width: 'auto',
    },
}));


function ItemSanBong({ fields }) {
    return (
        <Grid item container>
            {fields.map((field, index) => (
                <Grid item xs={12} maxWidth='100%' padding='20px 0px' key={index}>
                    <StyledCard>
                        <StyledCardActionArea>
                            <StyledCardMedia image={field.image} />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component='h2'>{field.name}</Typography>
                                <Typography variant="h6" component='p'>Giá: <span style={{ color: 'red' }}>{field.price}</span>đ</Typography>
                            </StyledCardContent>
                        </StyledCardActionArea>
                        <CardActionArea style={{ paddingLeft: '30px' }}>

                            <Typography>Địa chỉ</Typography>

                            <Typography variant="h5" component='p'><span style={{ color: 'green' }}>{field.address}</span></Typography>

                        </CardActionArea>

                        <CardActions >
                            <Grid container style={{ display: 'flex', flexDirection: 'row', paddingLeft: '20px' }}>
                                <Grid item display='flex ' flexDirection='row' alignItems="center" >
                                    <IconButton onClick={() => { }}> <SettingsIcon /></IconButton>
                                </Grid>
                                <Grid item >
                                    <IconButton onClick={() => { }} ><DeleteIcon style={{ color: 'red' }} /></IconButton>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </StyledCard>
                </Grid>

            ))}
        </Grid>
    );
}

export default ItemSanBong;