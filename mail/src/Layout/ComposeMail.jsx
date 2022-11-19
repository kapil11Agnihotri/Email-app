import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import React,{useState} from 'react'
import './Compose.css'
 import { Modal} from '@mui/material';
 import ComposeForm from './ComposeForm'

 

const ComposeMail = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <div  onClick={handleOpen} className='main'>
      <Fab variant="extended">
        <AddIcon sx={{ mr: 1 }} />
        <h4>Compose</h4>
      </Fab>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='model'>
          <button onClick={handleClose} className='button'>X</button>
          <ComposeForm/>
         
        </div>
      </Modal>
      </>
      
  );
};

export default ComposeMail;
