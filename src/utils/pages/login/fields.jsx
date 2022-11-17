/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import { generalMessages } from 'utils/generalMessages';
import { SIZES } from 'utils/constant';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

export const loginInputProps = [
  {
    type: 'email',
    placeholder: generalMessages.email.defaultMessage,
    label: generalMessages.email.defaultMessage,
    size: SIZES.MEDIUM,
    icon: <MdOutlineEmail />,
    fieldName: generalMessages.email.fieldName,
  },
  {
    type: 'password',
    placeholder: generalMessages.password.defaultMessage,
    label: generalMessages.password.defaultMessage,
    size: SIZES.MEDIUM,
    icon: <AiOutlineEye />,
    fieldName: generalMessages.password.fieldName,
  },
];
