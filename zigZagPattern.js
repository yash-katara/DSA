function zigZagPattern(n) {
    for (let i = 1; i <= n; i++) {
      let line = "";
      for (let j = 1; j <= 3 * n; j++) {
        if ((j % (2 * n) === i) || (j % (2 * n) === (2 * n - i))) {
          line += "*";
        } else {
          line += " ";
        }
      }
      console.log(line);
    }
  }
  zigZagPattern(3);