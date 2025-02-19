import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import errorIcon from "../assets/svg/error-icon.svg"
import { useState } from "react";

interface ErrorInputSnackbarProps {
    error: boolean;
  }
  
const ErrorInputSnackbar: React.FC<ErrorInputSnackbarProps> = ({ error }) => { 
    console.log(error)
    const [ isError, setIsError ] = useState(error)   

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;
        setIsError(false);
    };

  return (
    <>
      <Snackbar open={isError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          icon={
            <img src={errorIcon} />
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
                    Setoran Gagal Tercatat
                </p>
                <p className="text-xs font-medium">
                    Maaf, setoran mengaji Anda hari ini belum berhasil. 
                </p>
            </div>
        </Alert>
      </Snackbar>
    </>
  );
};

export default ErrorInputSnackbar;
