function chooseStations(stations) {
  let news = [];
  for (let station of stations) {
    if ((station[1] >= 20) &&
      ((station[2] == "school") || (station[2] == "community centre"))) {
      news.push(station[0]);
    }
  }
  return news;
}