document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();
    let message = '';
    if(monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) {
        message = `You will be ${age} years old in ${-monthDiff} months and ${-dayDiff} days`;
    } else {
        message = `You are ${age} years old, ${monthDiff} months, and ${-dayDiff} days`;
    }
    document.getElementById('result').innerHTML = message;
});