import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

const YourComponent = ({ yourReduxData }) => {
  // Your component logic
  return (
    // Your component JSX
    <Droppable droppableId="yourDroppableId">
      {/* Droppable content */}
    </Droppable>
  );
};

const mapStateToProps = (state) => ({
  yourReduxData: state.yourReducer.yourData, // Map your required state from Redux to props here
});

export default connect(mapStateToProps)(YourComponent);
