import React from 'react';
import TicketItem from './TicketItem';

const tickets = [
  {
    id: 1,
    title: 'Need a Little Help with Your Site?',
    content: 'Here at Wix we support you to community forum',
    by: 'matan3sh@gmail.com',
    createdAt: Date.now(),
  },
  {
    id: 2,
    title: 'Need a Little Help with Your Site?',
    content: 'Here at Wix we support you to community forum',
    by: 'matan3sh@gmail.com',
    createdAt: Date.now(),
  },
  {
    id: 3,
    title: 'Need a Little Help with Your Site?',
    content: 'Here at Wix we support you to community forum',
    by: 'matan3sh@gmail.com',
    createdAt: Date.now(),
  },
];

const TicketList = () => {
  return (
    <div>
      {tickets.map(ticket => (
        <TicketItem ticket={ticket} id={ticket.id} />
      ))}
    </div>
  );
};

export default TicketList;
