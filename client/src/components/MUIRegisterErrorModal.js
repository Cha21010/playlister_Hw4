import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIRegisterErrorModal(){
    const { auth } = useContext(AuthContext);

    function handleCloseModal(){
        auth.hideModal();
    }

    return (
        <Modal
            open={auth.errMessage!==null}
        >
            <Alert severity="error"
                action={
                    <Button color="inherit" size="small" onClick = {handleCloseModal}>
                        Close
                    </Button>
                }
            >
                {auth.errMessage}
            </Alert>
        </Modal>
    );
}