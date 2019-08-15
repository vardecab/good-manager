var pages = ['./categories/behaviors/page-behaviors.html', './categories/what_to_say/page-what_to_say.html', './categories/feedback/page-feedback.html', './categories/quotes/page-quotes.html', './categories/things_zero_talent/page-things_zero_talent.html']

var index = pages[Math.floor(Math.random() * pages.length)];

console.log(index);

window.location.href = index;