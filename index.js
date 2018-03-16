document.addEventListener('DOMContentLoaded', () => {
  // has never been fired
  console.log('index.js - event', Date.now());
});

console.log('index.js - script', Date.now());

if (document.readyState !== 'loading') {
  console.log('index.js - readyState', Date.now());
}
