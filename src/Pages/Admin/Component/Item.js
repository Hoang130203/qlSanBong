import { styled } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    width: '300px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));
function Item({ products }) {
    return (
        <Grid item container>
            {products.map((product, index) => (
                <Grid item xs={12} maxWidth='100%' padding='20px 0px' key={index}>
                    <StyledCard>
                        <StyledCardActionArea>
                            <StyledCardMedia image={product.image} />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component='h2'>{product.name}</Typography>
                                <Typography variant="h6" component='p'>{product.price}đ</Typography>
                            </StyledCardContent>
                        </StyledCardActionArea>
                        <StyledAccordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Chi tiết</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" component='p'>{product.decription}</Typography>
                            </AccordionDetails>
                        </StyledAccordion>

                        <CardActions >
                            <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                                <Grid item display='flex ' flexDirection='row' alignItems="center" >
                                    <Typography variant="h6">Số lượng:&nbsp;</Typography>
                                    <Typography style={{ color: 'red' }} variant="h6">{product.quantity}</Typography>
                                </Grid>
                                <Grid item >
                                    <IconButton onClick={() => { }} ><DeleteIcon /></IconButton>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </StyledCard>
                </Grid>

            ))}
        </Grid>
    );
}

export default Item;