import client from './client';

export const getTravelPlans = () => {
  client.get('http://localhost:4000/travelPlans');
}