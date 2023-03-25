import { Box, Backdrop, Modal, Fade } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';

const ModalLayout = ({show, title, reducer, children}) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(reducer());
  const mdScreen = useMediaQuery('(min-width: 768px)', { noSsr: true });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: mdScreen ? '50%' : '80%',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
        <Modal
        open={show}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
            </div>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalLayout;