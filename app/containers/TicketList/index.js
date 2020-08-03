import React, { useState } from 'react';
import TicketItem from './TicketItem';

const initialTickets = [
  {
    id: 1,
    title: 'Need a Little Help with Your Site?1',
    content: 'Here at Wix we support you to community forum',
    by: 'matan3sh@gmail.com',
    createdAt: '11/13/2008, 2:13:55 PM',
    labels: ['corvid'],
  },
  {
    id: 2,
    title: 'Need a Little Help with Your Site?2',
    content: 'Here at Wix we support you to community forum',
    by: 'matan3sh@gmail.com',
    createdAt: '18/13/2008, 6:13:55 PM',
    labels: ['corvid', 'Api'],
  },
  {
    id: 3,
    title: 'Need a Little Help with Your Site?3',
    content: 'Here at Wix we support you to community forum',
    by: 'matan3sh@gmail.com',
    createdAt: '20/13/2008, 1:13:55 PM',
    labels: ['api'],
  },
];

const TicketList = () => {
  const [tickets, setTickets] = useState(initialTickets);

  const onHideTicket = ticket => {
    const updatedTicketList = tickets.filter(
      currentTicket => ticket.id !== currentTicket.id,
    );
    setTickets(updatedTicketList);
  };

  return (
    <div className="ticket-list">
      <h3><span onClick={()=>setTickets(initialTickets)}>Restore</span> Showing {tickets.length} Results</h3>
      {tickets.map((ticket, index) => (
        <TicketItem ticket={ticket} key={index} onHideTicket={onHideTicket} />
      ))}
    </div>
  );
};

export default TicketList;
