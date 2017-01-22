  var box = document.querySelector('#musicbox');
  var music1 = document.querySelector('#musicbox[sound]');

  box.addEventListener('mouseenter', function () {
          box.setAttribute('scale', {x: 2, y: 2, z: 2});
          music1.components.sound.playSound();
          box.emit('music1play');
          });

  var sphere = document.querySelector('#musicsphere');
  var music2 = document.querySelector('#musicsphere[sound]');

  sphere.addEventListener('mouseenter', function () {
          sphere.setAttribute('scale', {x: 2, y: 2, z: 2});
          music2.components.sound.playSound();
          sphere.emit('music2play');
          });

  var cylinder = document.querySelector('#musiccylinder');
  var music3 = document.querySelector('#musiccylinder[sound]');

  cylinder.addEventListener('mouseenter', function () {
          cylinder.setAttribute('scale', {x: 2, y: 2, z: 2});
          music3.components.sound.playSound();
          cylinder.emit('music3play');
          });
