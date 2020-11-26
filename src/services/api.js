import users from '../data/users';
import restaurants from '../data/restaurants';

export async function fetchUsers() {
  return users;
}

export async function fetchRestaurants() {
  return restaurants;
}
