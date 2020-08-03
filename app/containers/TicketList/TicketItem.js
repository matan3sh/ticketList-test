import React from 'react';

const TicketItem = ({ ticket }) => {
  return (
    <div className="container">
      <div className="card">
        <h2>{ticket.title}</h2>
        <p>{ticket.content}</p>

        <div className="card-footer">
          <h5>
            By <span>{ticket.by}</span> | <span>{ticket.createdAt}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
