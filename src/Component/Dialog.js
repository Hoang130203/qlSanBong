
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

export default function AlertDialog({ isopen, setIsOpen, title, confirm }) {
    //   const [open, setOpen] = useState();

    const handleClose = () => {
        setIsOpen(false)
    };
    return (
        <Dialog
            open={isopen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {title}
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{ paddingRight: '20px' }}>
                <Button onClick={handleClose}>Quay lại</Button>
                <Button onClick={confirm} autoFocus>
                    Đồng ý
                </Button>
            </DialogActions>
        </Dialog>

    );
}
