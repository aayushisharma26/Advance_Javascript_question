function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks');
      console.log("rfrg")
    }, 3000);
  });
}
what()