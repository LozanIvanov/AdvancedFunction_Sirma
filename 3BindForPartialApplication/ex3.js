function multiply(a, b) {
    return a * b;
  }
  const Result=multiply.bind(null,5);
  console.log(Result(3));   