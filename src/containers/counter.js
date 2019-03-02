import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import CustomButton from '../components/CustomButton';
import CustomForm from '../components/CustomForm';
import { add, mult } from '../actions/counter';


@connect(store => ({
  storeNum: store.counter.storeNum,

}), dispatch => ({
  add: () => dispatch(add(1)),
  mult: () => dispatch(mult(1)),
}))
class CounterContainer extends React.PureComponent {
    static propTypes = {
      // storeNum: PropTypes.number,
      // add: PropTypes.func,
      // mult: PropTypes.func,
    }

    static defaultProps = {
      // storeNum: 0,
      // add: () => null, // mult: () => null,
    }

    render() {
      return (
        <CustomForm {...this.props} />
      );
    }
}
export default CounterContainer;
