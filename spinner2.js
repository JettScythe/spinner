const spinnerIcons = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
const spin = (spinnerIcons, time) => {
  for (const i of spinnerIcons) {
    setTimeout(() => {
      process.stdout.write(i);
    }, time += 200);
  }
};
spin(spinnerIcons, 0);