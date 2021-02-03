//setting up the base url
const base_url = "https://api.rawg.io/api/";

//getting the current month

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting date

const getCurrentDate = () => {
  const month = new Date().getDate();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting the wholeDate

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();
const Year = `${currentYear}-${currentMonth}-${currentDate}`;
const preYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;

// getting the popular games

const popularGames = `games?dates=${preYear},${Year}&ordering=-rating&page_size=10`;
const popularGamesUrl = () => `${base_url}${popularGames}`;
