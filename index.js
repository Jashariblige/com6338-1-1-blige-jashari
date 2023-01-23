
function greet() {

    var name  = prompt('What is your name?');
    alert('Hello, ' + name); 
 
    var age = parseInt(prompt('How old are you?'));
    var confirmBday = confirm('Did you have a birthday this year? If Yes, hit okay. If not, hit cancel.');
    var currentYear = new Date().getFullYear();
    
    if (confirmBday) {
        birthYear = currentYear - age;
    }
    else {
        birthYear = currentYear - age - 1;
    }

    alert('You were born in: ' + birthYear);

}