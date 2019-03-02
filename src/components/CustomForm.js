import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

const CustomForm = ({ storeNum, add, mult }) => (
  <div>
    <h1>{storeNum}</h1>
    <CustomButton text="ADD" handleClick={add} />
    <CustomButton text="Multi" handleClick={mult} />
  </div>
);

CustomForm.propTypes = {
  storeNum: PropTypes.number,
  add: PropTypes.func,
  mult: PropTypes.func,
};
CustomForm.defaultProps = {
  storeNum: 0,
  add: () => {},
  mult: () => {},
};
export default CustomForm;
