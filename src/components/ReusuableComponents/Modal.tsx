import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#ffffff",
  borderRadius: "5px",
  boxShadow: 54,
  p: 4,
};

type Props = {
  modalHeader: string;
  modalTitle: string;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
};

const SimpleModal = ({
  modalHeader,
  modalTitle,
  modal,
  setModal,
  children,
}: Props) => {
  return (
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ pb: 2, borderBottom: "1px solid black" }}
          id="keep-mounted-modal-title"
          variant="h5"
          component="h2"
        >
          {modalHeader}
          {/* Səbəti Boşaltmaq! */}
        </Typography>
        <Typography
          id="keep-mounted-modal-description"
          variant="h6"
          sx={{ mt: 2 }}
        >
          {modalTitle}
          {/* Səbəti boşaltmaq istədiyinizə əminsiniz? */}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default SimpleModal;
