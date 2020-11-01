var pages = [
    // 1
    './categories/behaviors/page-behaviors.html',
    // 2
    './categories/what_to_say/page-what_to_say.html',
    // 3
    './categories/feedback/page-feedback.html',
    // 4
    './categories/quotes/page-quotes.html',
    // 5
    './categories/things_zero_talent/page-things_zero_talent.html',
    // 6
    './categories/working_remotely/page-working_remotely.html'
]

var index = pages[Math.floor(Math.random() * pages.length)];

console.log(index);

window.location.href = index; // !FIX: causing URL to show up in address bar + lack of focus