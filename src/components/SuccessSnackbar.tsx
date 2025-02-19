import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import successIcon from "../assets/svg/success-icon.svg"

interface SuccessSnackbarProps {
    isOpen: boolean;
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  }
  

const SuccessSnackbar: React.FC<SuccessSnackbarProps> = ({ isOpen, handleClose }) => {    

  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          icon={
            <img src={successIcon} />
          }
          action={
            <IconButton size="small" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
          sx={{
            backgroundColor: "#FFFFFF", // Custom background color (green)
            borderRadius: "24px", // Rounded corners
            color: "black", // Text color
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
            width: "full"
          }}
        >
            <div className="flex flex-col font-source">
                <p className="text-lg font-semibold">
                    Setoran Berhasil!
                </p>
                <p className="text-xs font-medium">
                    Alhamdulillah, setoran mengaji Anda hari ini telah berhasil tercatat.
                </p>
            </div>
        </Alert>
      </Snackbar>
    </>
  );
};

export default SuccessSnackbar;
