function* generate(start = 1) {
    let i = start; 

    while (true) {
        yield i;
        i++;
  }
}