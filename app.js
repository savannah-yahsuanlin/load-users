const loadButton = document.querySelector('#loadButton')
const loadRandomButton = document.querySelector('#loadRandomButton')
const removeUsersBtn = document.querySelector('#removeUsers')
const loadCompaniesBtn = document.querySelector('#loadCompanies')
const list = document.querySelector('#usersList')
const h1 = document.querySelector('#randomH1')
const CompanyList = document.querySelector('#companiesList')
const RemoveCompaniesBtn = document.querySelector('#removeCompanies')
const companiesList = document.querySelector('#companiesList')


loadButton.addEventListener('click', function() {loadUser()})
loadRandomButton.addEventListener('click', function() {loadRandomUser()})
removeUsersBtn.addEventListener('click', function() {removeUsers()}, false)
loadCompaniesBtn.addEventListener('click', function(){loadCompanies()})
RemoveCompaniesBtn.addEventListener('click', function(){RemoveCompanies()}, false)

async function loadRandomUser() {
	const response = await fetch('https://www.acme-api.com/api/users/random');
	const data = await response.json()
	h1.innerText = data.fullName;
}

async function loadUser() {
		const response = await fetch('https://www.acme-api.com/api/users');
		let data = await response.json()
		let users = data.users
		for(let i = 0; i < users.length; i++){
			let user = users[i];
			let li = document.createElement('li');
			li.innerText = user.fullName;
			list.appendChild(li);
		}
}

async function removeUsers() {
	if(list) list.innerText = ''
}

async function loadCompanies() {
	const response = await fetch('https://www.acme-api.com/api/companies')
	let data = await response.json()
	for(let i = 0; i < data.length; i++) {
		let company = data[i]
		let li = document.createElement('li')
		li.innerText = company.name
		CompanyList.appendChild(li)
	}
}

async function RemoveCompanies() {
	if(companiesList) companiesList.innerText = ''
}