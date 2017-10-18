document.getElementById('js-addElem').addEventListener('click', function (e) {
  'use strict';
  var list = document.getElementById('js-list');
  var element = document.createElement('li');
  element.innerHTML = 'item ' + list.getElementsByTagName('li').length;
  list.appendChild(element);
});
/*
document.getElementById('js-addElem').addEventListener('click', function (e) {
  'use strict';
  var list = document.getElementById('js-list');
  var element = document.createElement('li');
  var node = document.createTextNode('item ' + list.getElementsByTagName('li').length);
  element.appendChild(node);
  list.appendChild(element);
});
*/
