import users from '../data/users';
import categories from '../data/categories';
import restaurants from '../data/restaurants';
import visitorCounts from '../data/visitorCounts';

export async function fetchUsers() {
  return users;
}

export async function fetchCategories() {
  return categories;
}

export async function fetchRestaurants() {
  return restaurants;
}

export async function fetchVisitorCounts() {
  return visitorCounts;
}

export async function postRestaurant() {
  // todo : postRestaurant
}
