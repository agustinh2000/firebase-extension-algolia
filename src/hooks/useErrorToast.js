import { useEffect } from 'react';
import { errorToast } from 'utils/toast';

const useErrorToast = (error) => {
  useEffect(() => {
    errorToast(error);
  }, [error]);
};

export default useErrorToast;
