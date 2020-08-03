import React, { useState } from 'react';

const TicketItem = ({ ticket, onHideTicket }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card">
      <div className="card__hide" onClick={() => onHideTicket(ticket)}>
        Hide
      </div>
      <h2>{ticket.title}</h2>

      {ticket.content.length > 2 && !readMore && (
        <p>
          {ticket.content.slice(0, 2)}{' '}
          <span className="card__read" onClick={() => setReadMore(true)}>
            ...Read More
          </span>
        </p>
      )}
      {readMore && (
        <p>
          {ticket.content}{' '}
          <span className="card__read" onClick={() => setReadMore(false)}>
            ...Read Less
          </span>
        </p>
      )}
      <div className="card__footer">
        <h5>
          By <span>{ticket.by}</span> | <span>{ticket.createdAt}</span>
        </h5>
      </div>
      <div className="card__labels">
        {ticket.labels.map(label => (
          <span className="card__label">{label}</span>
        ))}
      </div>
    </div>
  );
};

export default TicketItem;
