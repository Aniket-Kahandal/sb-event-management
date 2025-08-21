import React from 'react';
import { Carousel } from 'react-bootstrap';
import client from '../../../Asset/Images/client.jpg'
import client1 from '../../../Asset/Images/client2.jpg'
const clients = [
  {
    name: 'Anjali Mehta',
    image: client,
    feedback: 'The team made our wedding magical! Highly recommended.',
  },
  {
    name: 'Rohit Sharma',
    image: client1,
    feedback: 'Professional, creative and flawless execution.',
  },
  {
    name: 'Simran Kaur',
    image: client1,
    feedback: 'Our corporate event was a big hit thanks to them!',
  },
];

const Clients = () => {
  return (
  <section className="bg-light py-5">
      <div className="container w-50 ">
        <h2 className="text-center mb-4">Our Happy Clients</h2>

        {/* React Bootstrap Carousel */}
        <Carousel fade indicators={true} interval={2000}>
          {clients.map((client, idx) => (
            <Carousel.Item key={idx}>
              <div className="card text-center shadow-sm p-3">
                <img
                  src={client.image}
                  alt={client.name}
                  className="rounded-circle mx-auto"
                  width="100"
                  height="100"
                />
                <p className="mt-3 fst-italic">"{client.feedback}"</p>
                <h6 className="mt-2">{client.name}</h6>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>

  );
};

export default Clients;
