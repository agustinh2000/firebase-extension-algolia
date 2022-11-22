/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */

import { generalMessages } from 'utils/generalMessages';
import { SIZES } from 'utils/constant';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

export const inputProps = [
  {
    type: 'text',
    placeholder: generalMessages.name.defaultMessage,
    label: generalMessages.name.defaultMessage,
    size: SIZES.MEDIUM,
    icon: <BsPerson />,
    fieldName: generalMessages.name.fieldName,
  },
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
