function judgeVegetable(vegetables, metric) {
  let best = "";
  let best_score = 0;
  for (let i of vegetables) {
    if (i[metric] > best_score) {
      best = i["submitter"]
      best_score = i[metric]
    }
  }
  return best;
}

