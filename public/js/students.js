window.onload = menu();
function menu() {
  var dropMenu = document.getElementById('dropMenu');
  dropMenu.innerHTML = '';
  var local = document.createElement('option');
  local.value = 'none';
  local.innerHTML = 'Escolha a sede';
  dropMenu.appendChild(local);
  for (sede in data) {
    var itemSede = document.createElement('option');
    itemSede.value = sede;
    itemSede.innerHTML = sede;
    dropMenu.appendChild(itemSede);
  }
};

function classSelection(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = '';
  var local = document.createElement('option');
  local.value = 'none';
  local.innerHTML = 'Escolha a turma';
  s2.appendChild(local);
  for (classe in data[s1.value]) {
    var newOption = document.createElement('option');
    newOption.value = classe;
    newOption.innerHTML = classe;
    s2.appendChild(newOption);
  }
}

classes.addEventListener('change', uploadProfile);
function uploadProfile() {
  var dropMenu = document.getElementById('dropMenu').value;
  var classes = document.getElementById('classes').value;
  var developerProfile = document.getElementById('developers-profile');
  developerProfile.innerHTML = '';
  for (i in data[dropMenu][classes]['students']) {
    (data[dropMenu][classes]['students'][i]['photo']);
    (data[dropMenu][classes]['students'][i]['name']);
    (data[dropMenu][classes]['students'][i]['active']);
    var img = document.createElement('img');
    img.setAttribute('class', 'img-photo');
    img.src = (data[dropMenu][classes]['students'][i]['photo']);
    developerProfile.appendChild(img);
    var name = document.createElement('h3');
    name.innerHTML = (data[dropMenu][classes]['students'][i]['name']);
    developerProfile.appendChild(name);
  }
};
