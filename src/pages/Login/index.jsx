import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useErrorToast from 'hooks/useErrorToast';

import { cleanAllState, signIn } from 'state/actions/auth';
import { selectStatusSignIn } from 'state/selectors/auth';

import Form from 'components/Form';
import InputWithLabel from 'components/InputWithLabel';
import FlexContainer from 'components/FlexContainer';
import Title, { ColorsTitle, SizeTitle } from 'components/Title';
import Link from 'components/Link';
import withNonAuthenticatedLayout from 'components/hocs/withNonAuthenticatedLayout';
import Loading from 'components/Loading';
import Image, { SizeImage } from 'components/Image';

import { lowerCaseRegex, upperCaseRegex } from 'utils/regex';
import { SIZES } from 'utils/constant';
import { loginInputProps } from 'utils/pages/login/fields';
import { generalMessages } from 'utils/generalMessages';
import LoginImage from 'images/Login.png';

import Button from 'components/Button';
import Text, { Size } from 'components/Text';

import Container from './styles/Container';

import { messages } from './messages';

const loginSchema = yup.object({
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

const resolver = yupResolver(loginSchema);

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectStatusSignIn, shallowEqual);
  useErrorToast(error);

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver,
  });

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
        <Form size={SIZES.SMALL} onSubmit={handleSubmit(onSubmit)}>
          <FlexContainer column gap={15} middle="xs">
            <Image src={LoginImage} size={SizeImage.M} />
            <FlexContainer column gap={5} middle="xs">
              <Title color={ColorsTitle.Dark} size={SizeTitle.S}>
                {messages.welcome.defaultMessage}
              </Title>
              <Text size={Size.M}>{messages.mark.defaultMessage}</Text>
            </FlexContainer>
          </FlexContainer>
          {loginInputProps.map((values) => (
            <InputWithLabel
              {...values}
              key={values.fieldName}
              register={register}
              errors={errors}
            />
          ))}
          <Button fullWidth disabled={!isValid}>
            {messages.signIn.defaultMessage}
          </Button>
          <FlexContainer column textAlign="center">
            <Text dark size={Size.M}>
              {messages.dontHaveAccount.defaultMessage}{' '}
              <Link size={Size.M} to="/register">
                {messages.signUp.defaultMessage}
              </Link>
            </Text>
          </FlexContainer>
        </Form>
      </Container>
    </>
  );
};

export default withNonAuthenticatedLayout(Login);
