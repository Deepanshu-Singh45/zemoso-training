function greetings() {
    return 'Hello';
}

// passing greetings() function as a parameter
function name(user, func)
{

    const message = func();
    console.log(message + " " + user + "!");
}

name('Deepanshu', greetings);
name('Shridhar', greetings);
