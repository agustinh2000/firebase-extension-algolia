/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';

import PropTypes from 'prop-types';

import Input from 'components/Input';
import Label from 'components/Label';
import FlexContainer from 'components/FlexContainer';
import ErrorMessage from 'components/ErrorMessage';

import Container from './styles/Container';
import InputIcon from './styles/InputIcon';

const InputWithLabel = ({
  type,
  label,
  placeholder,
  size,
  icon,
  register,
  fieldName,
  errors,
  disabled,
}) => (
  <Container>
    <Label>{label}</Label>
    <FlexContainer column gap={5} fitContent>
      <InputIcon size={size} disabled={disabled}>
        <Input
          noBorder
          size={size}
          type={type}
          placeholder={placeholder}
          name={fieldName}
          ref={register}
          error={errors[fieldName]}
          disabled={disabled}
        />
        {icon}
      </InputIcon>
      {errors[fieldName] && (
        <ErrorMessage>{errors[fieldName]?.message}</ErrorMessage>
      )}
    </FlexContainer>
  </Container>
);

InputWithLabel.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.element,
  register: PropTypes.func,
  fieldName: PropTypes.string,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
};

InputWithLabel.defaultProps = {
  icon: null,
  register: () => {},
  fieldName: '',
  errors: {},
  disabled: false,
};

export default InputWithLabel;
