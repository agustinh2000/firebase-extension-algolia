/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';

import PropTypes from 'prop-types';

import Input from 'components/Input';
import FlexContainer from 'components/FlexContainer';
import ErrorMessage from 'components/ErrorMessage';

import Container from './styles/Container';
import InputIcon from './styles/InputIcon';

const PostInput = ({
  type,
  placeholder,
  size,
  icon,
  register,
  fieldName,
  errors,
  disabled,
  onChange,
  value,
}) => (
  <Container>
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
          onChange={onChange}
          value={value}
        />
        {icon}
      </InputIcon>
      {errors[fieldName] && (
        <ErrorMessage>{errors[fieldName]?.message}</ErrorMessage>
      )}
    </FlexContainer>
  </Container>
);

PostInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.element,
  register: PropTypes.func,
  fieldName: PropTypes.string,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

PostInput.defaultProps = {
  icon: null,
  register: () => {},
  fieldName: '',
  errors: {},
  disabled: false,
  onChange: () => {},
  value: '',
};

export default PostInput;
