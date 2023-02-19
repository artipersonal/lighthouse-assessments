function loopyLighthouse(range, multiples, words) {
  let word = "";
  for (let i = range[0]; i <= range[1]; i++) {
    for (let j = 0; j < multiples.length; j++) {
      if (i % multiples[j] == 0) {
        word += words[j];
      }
    }
    //console.log(word);
    if (word != "") {
      console.log(word)
      word = "";
    }
    else { console.log(i) }
    //console.log((word !== "") ? word : i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);