const conversionForm = document.getElementById('conversionForm');
const inputMonument = document.getElementById('monumentName');
const inputCity = document.getElementById('monumentCity');
const monumentsList = document.getElementById('monumentsList');

const monuments = [];


monumentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const monumentName = inputMonument.value.trim();
    const monumentCity = inputCity.value.trim();

    if(monumentName && monumentCity) {
        monuments.push({monumentName, monumentCity});

        monumentName.value = '';
        monumentCity.value = '';

        displayMonuments();
    }
});

function displayMonuments() {
    monumentsList.innerHTML = '';

    monuments.forEach(({monumentName, monumentCity}) => {
        const li = document.createElement('li');
        li.innerHTML = `🏛️ ${monumentName} - <b>${monumentCity}</b>`;
        monumentsList.appendChild(li);
    })

    inputMonument.value = '';
    inputCity.value = '';
}