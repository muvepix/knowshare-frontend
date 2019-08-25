import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

export default function index({ placeText, onChange, name }) {
  return (
    <Input
      type="text"
      placeholder={placeText}
      className="Input"
      onChange={onChange}
      name={name}
    />
  );
}
index.defaultProps = {
  placeText: '',
  onChange: '',
  name: '',
};
index.propTypes = {
  placeText: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
