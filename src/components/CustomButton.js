import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'antd';
import { Button } from '@storybook/react/demo';

const style = {
  background: 'white',
  color: 'black',
};

const CustomBottom = ({ text, handleClick }) => (
  <Button style={style} onClick={handleClick}>{text}</Button>
);

CustomBottom.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
CustomBottom.defaultProps = {
  text: 'Default',
  handleClick: () => {},
};
export default CustomBottom;
