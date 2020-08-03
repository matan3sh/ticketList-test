import React from 'react';
import { Link } from 'react-router-dom';

const NewOrders = () => {
  return (
    <div>
      <Link to="/order-list">Add</Link>
      <Link to="/order-list">Cancel</Link>
    </div>
  );
};

export default NewOrders;
