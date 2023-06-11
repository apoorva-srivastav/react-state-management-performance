import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "#ffffff",
  p: 4,
};

const CustomModal = ({ handleClose, open }: any) => {
  console.log('CHILD OF DateAndTime : CustomModal.render');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
        ></Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Its Time for your next Blog!
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
