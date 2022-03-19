import { toast, ToastOptions } from "react-toastify";

const configToast: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

const toastNotification = (message: string, status: string): void => {
  switch (status) {
    case "error":
      toast.error(`${message}`, configToast);
      break;
    case "warning":
      toast.warn(`${message}`, configToast);
      break;
    case "normal":
      toast(`${message}`, configToast);
      break;
    case "success":
      toast.success(`${message}`, configToast);
      break;
    default:
      toast(`${message}`, configToast);
  }
};

export default toastNotification;
