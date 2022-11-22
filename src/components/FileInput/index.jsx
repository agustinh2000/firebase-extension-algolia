import React from 'react';

import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import Button from './styles/Button';
import InputFile from './styles/InputFile';
import Container from './styles/Container';

const FileInput = ({ setFile }) => (
  <Container>
    <InputFile
      type="file"
      accept="image/*"
      onChange={(e) => setFile(e.target.files[0])}
    />
    <Button>
      Imagen usuario
      <FaPlus />
    </Button>
  </Container>
);

FileInput.propTypes = {
  setFile: PropTypes.func.isRequired,
};
export default FileInput;
