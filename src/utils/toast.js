/* eslint-disable import/prefer-default-export */

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorToast = (message) =>
  message &&
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
