import { toast } from "react-toastify";

export const alertSuccess = (title: string) => {
  toast.success(title, {
    position: "bottom-right",
    autoClose: 2000,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const alertError = (title: string) => {
  toast.error(title, {
    position: "top-center",
    autoClose: 2000,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
