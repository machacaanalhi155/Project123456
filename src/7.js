const foo = async () => {
  const bar = await fetch('https://api.example.com');
  if (bar) {
    console.log(bar);
  }
}