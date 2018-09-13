import React from 'react'
import { connect } from 'react-redux';
 
const Counter = (props) => {
  const handleOnClick = () => {
    props.increase();
  }

  return (
    <div>
      <button onClick={handleOnClick}>
        Click Me
      </button>
      <div>{props.count}</div>
    </div>
  )
};

const mapStateToProps = state => {
  return {count: state.count}
}

const mapDispatchToProps = dispatch => {
  return {
    increase: () => {
      dispatch({ type: 'INCREASE_COUNT' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

