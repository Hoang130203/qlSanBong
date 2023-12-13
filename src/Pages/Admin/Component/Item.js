import { styled } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ClassApi from '../../../api/API'
import { NavLink } from "react-router-dom";
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
    const [productes, setProductes] = useState([])
    useEffect(() => {
        setProductes(products)
    }, [])
    const handleDelete = async (index, id) => {
        const newArray = productes.filter((_, i) => i != index)
        await ClassApi.DeleteProdut(id).then(() => {
            setProductes(newArray)
            toast.info('Xóa thành công!')
        }).catch(() =>
            toast.error('Xóa thất bại')
        )

    }
    return (
        <Grid item container>
            {productes.map((product, index) => (
                <Grid item xs={12} maxWidth='100%' padding='20px 0px' key={product.productId}>
                    <StyledCard>
                        <StyledCardActionArea>
                            <StyledCardMedia image={product.linkimg} />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component='h2'>{product.productName}</Typography>
                                <Typography variant="h6" component='p'>{product.price.toLocaleString()}đ</Typography>
                            </StyledCardContent>
                        </StyledCardActionArea>
                        <StyledAccordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Chi tiết</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" component='p'>{product.description}</Typography>
                            </AccordionDetails>
                        </StyledAccordion>

                        <CardActions >
                            <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                                <Grid item display='flex ' flexDirection='row' alignItems="center" >
                                    <Typography variant="h6">Số lượng:&nbsp;</Typography>
                                    <Typography style={{ color: 'red' }} variant="h6">{product.quantity}</Typography>
                                </Grid>
                                <Grid item >
                                    <IconButton onClick={() => { handleDelete(index, product.productId) }} ><DeleteIcon /></IconButton>
                                    <NavLink to={'/admin/sua-san-pham/' + product.productId}>
                                        <Button>Sửa</Button>
                                    </NavLink>
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