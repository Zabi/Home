document.getElementById('applyNowButton').addEventListener('click', function() {
    const careers = ['HR Officer', 'HR Adviser', 'HR Manager'];
    const careerList = document.getElementById('careerList');

   
    careerList.innerHTML = '';

    careers.forEach(function(career) {
        const listItem = document.createElement('li');
        listItem.textContent = career;
        careerList.appendChild(listItem);
    });
});
