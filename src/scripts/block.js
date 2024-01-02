function blockSite() {
  document.body.innerHTML = '';

  const h1 = document.createElement('h1');
  h1.textContent = 'just stop it.';
  h1.classList.add('block-heading');
  document.body.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'You wouldn\'t have used this extension if you really wanted to access the website';
  p.classList.add('block-text');
  document.body.appendChild(p);
  document.body.style.backgroundColor = 'black';
}


// if(!document || !document.body) {
//   console.log('Cannot block site');
// } else {
//   blockSite();
// }
console.log("hello from blocking")
blockSite();
