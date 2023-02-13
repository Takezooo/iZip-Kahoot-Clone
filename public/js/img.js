const member1 = document.querySelector('#member1');
const member2 = document.querySelector('#member2');
const member3 = document.querySelector('#member3');
const member4 = document.querySelector('#member4');
const member5 = document.querySelector('#member5');
const defaultQuote = document.querySelector('.default-quote');
const daveQuote = document.querySelector('.dave-quote');
const shewQuote = document.querySelector('.shew-quote');
const jinanQuote = document.querySelector('.jinan-quote');
const nenicQuote = document.querySelector('.nenic-quote');
const patQuote = document.querySelector('.pat-quote');

defaultQuote.style.display = 'block';
daveQuote.style.display = 'none';
shewQuote.style.display = 'none';
jinanQuote.style.display = 'none';
nenicQuote.style.display = 'none';
patQuote.style.display = 'none'; 

member1.addEventListener('mouseenter', function() {
  defaultQuote.style.display = 'none';
  daveQuote.style.display = 'block';
  shewQuote.style.display = 'none';
  jinanQuote.style.display = 'none';
  nenicQuote.style.display = 'none';
  patQuote.style.display = 'none';   
});

member2.addEventListener('mouseenter', function() {
  defaultQuote.style.display = 'none';
  daveQuote.style.display = 'none';
  shewQuote.style.display = 'block';
  jinanQuote.style.display = 'none';
  nenicQuote.style.display = 'none';
  patQuote.style.display = 'none';
});

member3.addEventListener('mouseenter', function() {
  defaultQuote.style.display = 'none';
  daveQuote.style.display = 'none';
  shewQuote.style.display = 'none';
  jinanQuote.style.display = 'block';
  nenicQuote.style.display = 'none';
  patQuote.style.display = 'none';
});

member4.addEventListener('mouseenter', function() {
  defaultQuote.style.display = 'none';
  daveQuote.style.display = 'none';
  shewQuote.style.display = 'none';
  jinanQuote.style.display = 'none';
  nenicQuote.style.display = 'block';
  patQuote.style.display = 'none';
});

member5.addEventListener('mouseenter', function() {
  defaultQuote.style.display = 'none';
  daveQuote.style.display = 'none';
  shewQuote.style.display = 'none';
  jinanQuote.style.display = 'none';
  nenicQuote.style.display = 'none';
  patQuote.style.display = 'block';
});