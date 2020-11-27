import users from '../data/users';
import restaurants from '../data/restaurants';
import visitorCounts from '../data/visitorCounts';

export async function fetchUsers() {
  return users;
}

export async function fetchRestaurants() {
  return restaurants;
}

export async function fetchVisitorCounts() {
  return visitorCounts;
}
