import { Avatar, Card, CardContent, CardHeader, IconButton, Rating, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Comment({ name, avt, time, rate, comment }) {
    return (
        <Card sx={{ maxWidth: '100%', margin: '10px 0px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                        <img style={{ maxHeight: '42px' }} src={avt} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader={time}
            />

            <CardContent>
                <Rating value={rate} readOnly></Rating>
                <Typography variant="body2" color="text.secondary">
                    {comment}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default Comment;