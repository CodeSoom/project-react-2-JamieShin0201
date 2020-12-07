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

export async function fetchFilteredVisitorCounts() {
  function getVisitorCount(dates, day) {
    const count = dates.reduce((prev, curr) => {
      if (curr.date.getFullYear() === day.getFullYear()
        && curr.date.getMonth() === day.getMonth()
        && curr.date.getDate() === day.getDate()) {
        return prev + curr.count;
      }
      return prev;
    }, 0);

    return count;
  }

  function getVisitorPeriodCount(dates, day) {
    const count = dates.reduce((prev, curr) => {
      if (curr.date.getTime() > day.getTime()) {
        return prev + curr.count;
      }
      return prev;
    }, 0);

    return count;
  }

  const dates = visitorCounts.map(({
    date: {
      year, month, day,
    }, count,
  }) => ({ date: new Date(year, month, day), count }));

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  const yesterday = new Date(year, month, date - 1);
  const lastWeek = new Date(year, month, date - 7);
  const lastMonth = new Date(year, month - 1, date);

  const todayCount = getVisitorCount(dates, today);
  const yesterdayCount = getVisitorCount(dates, yesterday);
  const weekCount = getVisitorPeriodCount(dates, lastWeek);
  const monthCount = getVisitorPeriodCount(dates, lastMonth);

  const filteredVisitorCounts = {
    todayCount, yesterdayCount, weekCount, monthCount,
  };

  return filteredVisitorCounts;
}

export async function postRestaurant() {
  // todo : postRestaurant
}
