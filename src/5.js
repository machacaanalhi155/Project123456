function() {
  const elements = document.querySelectorAll('body');
  let output = '';
  elements.forEach((element) => {
    const elementId = element.id;
    if (elementId) {
      output += `<div class="container">`;
      output += `<h2>${elementId}</h2>`;
      output += `<p>This is a container element with the id "${elementId}".</p>`;
      output += `</div>`;
    }
  });
  return output;
}
