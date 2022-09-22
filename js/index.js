
//определяем переменные
var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
var addressId = 'address';
var addressEl = document.getElementById(addressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = 'avatar-wrapper';
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);

function alertValue() {
	console.log(firstNameEl.value);
	console.log(lastNameEl.value);
	console.log(addressEl.value);
}
firstNameEl.value = 'Usik';
alertValue();

lastNameEl.className = 'last-name-input default-input error-input';

alertValue();

avatarEl.src = 'https://www.codecademy.com/webpack/c41d5739bf341f298860a4e1c0bd432e.svg';

alertValue();

avatarEl.title = 'Im avatar';

alertValue();

lastNameEl.title = 'Wrong lastName';

alertValue();

citiesEl.value = 'Minsk';
alertValue();
hobbiesEl.value = 'I dont hobbies';
alertValue();
avatarWrapperEl.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';
alertValue();
var listId = 'list';
alertValue();
var numberList = document.getElementById(listId);
alertValue();

