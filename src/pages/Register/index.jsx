import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useErrorToast from 'hooks/useErrorToast';

import Form from 'components/Form';
import Link from 'components/Link';
import Image, { SizeImage } from 'components/Image';

import { signUp, cleanAllState } from 'state/actions/auth';
import { selectStatusSignUp } from 'state/selectors/auth';

import { lowerCaseRegex, upperCaseRegex } from 'utils/regex';
import { SIZES } from 'utils/constant';
import RegisterImage from 'images/Register.png';
import { inputProps } from 'utils/pages/register/fields';

import InputWithLabel from 'components/InputWithLabel';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import Title, { ColorsTitle, SizeTitle } from 'components/Title';
import Text, { Size } from 'components/Text';
import withNonAuthenticatedLayout from 'components/hocs/withNonAuthenticatedLayout';
import Loading from 'components/Loading';
import FileInput from 'components/FileInput';

import { generalMessages } from 'utils/generalMessages';
import { messages } from './messages';

import Container from './styles/Container';

const registerSchema = yup.object({
  name: yup.string().required(generalMessages.required.defaultMessage),
  email: yup
    .string()
    .email(generalMessages.invalidFormat.defaultMessage)
    .required(generalMessages.required.defaultMessage),
  password: yup
    .string()
    .required(generalMessages.required.defaultMessage)
    .min(8, generalMessages.minLength.defaultMessage)
    .matches(lowerCaseRegex, generalMessages.oneLowerCase.defaultMessage)
    .matches(upperCaseRegex, generalMessages.oneUpperCase.defaultMessage),
});

const resolver = yupResolver(registerSchema);

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectStatusSignUp, shallowEqual);
  const [file, setFile] = useState(null);
  useErrorToast(error);

  const navigate = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver,
  });

  const onSubmit = async (data) => {
    dispatch(signUp(data, file));
    navigate.push('/login');
  };

  useEffect(
    () => () => {
      dispatch(cleanAllState());
    },
    []
  );

  return (
    <>
      {loading && <Loading />}
      <Container>
        <Form size={SIZES.MEDIUM} onSubmit={handleSubmit(onSubmit)}>
          <FlexContainer column gap={15} middle="xs">
            <Image src={RegisterImage} size={SizeImage.M} />
            <FlexContainer column gap={5} middle="xs">
              <Title color={ColorsTitle.Dark} size={SizeTitle.S}>
                {messages.createAccount.defaultMessage}
              </Title>
              <Text size={Size.M}>{messages.welcome.defaultMessage}</Text>
            </FlexContainer>
          </FlexContainer>
          {inputProps.map((values) => (
            <InputWithLabel
              {...values}
              register={register}
              errors={errors}
              key={values.fieldName}
            />
          ))}
          <FileInput setFile={setFile} />
          <Button fullWidth disabled={!isValid || !file}>
            {messages.signUp.defaultMessage}
          </Button>
          <FlexContainer column textAlign="center">
            <Text dark size={Size.M}>
              {messages.haveAccount.defaultMessage}{' '}
              <Link size={Size.M} to="/login">
                {messages.signIn.defaultMessage}
              </Link>
            </Text>
          </FlexContainer>
        </Form>
      </Container>
    </>
  );
};

export default withNonAuthenticatedLayout(Register);
