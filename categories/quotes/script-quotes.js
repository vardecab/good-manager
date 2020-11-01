var text = [
    '“A boss who micromanages is like a coach who wants to get in the game. Leaders guide and support and then sit back to cheer from the sidelines.”<br><br><span class="who_said">Simon Sinek</span>',

    '“The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint to keep from meddling with them while they do it.”<br><br><span class="who_said">Theodore Roosevelt</span>',

    '“What is <span style="text-decoration: underline;">measured</span> improves.”<br><br><span class="who_said">Peter F. Drucker</span>',

    '“Management is doing things right; leadership is doing the right things.”<br><br><span class="who_said">Peter F. Drucker</span>',

    '“Good management consists in showing average people how to do the work of superior people.”<br><br><span class="who_said">John Rockefeller</span>',

    '“A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.”<br><br><span class="who_said">Lao Tzu</span>',

    '“Leadership is about vision and responsibility, <span style="text-decoration: underline;">not</span> power.”<br><br><span class="who_said">Seth Berkley</span>',

    '“The greatest gift of leadership is a boss who wants you to be successful.”<br><br><span class="who_said">Jon Taffer</span>',

    '“You do not lead by hitting people over the head - that is assault, not leadership.”<br><br><span class="who_said">Dwight D. Eisenhower</span>',

    '“The secret to success is good leadership, and good leadership is all about making the lives of your team members or workers better.”<br><br><span class="who_said">Tony Dungy</span>',

    '“One of the tests of leadership is the ability to recognize a problem before it becomes an emergency.”<br><br><span class="who_said">Arnold H. Glasow</span>',

    '“The fewer the facts, the stronger the opinion.”<br><br><span class="who_said">Arnold H. Glasow</span>',

    '“You don’t demand respect, you earn it.”<br><br><span class="who_said">Steve Sadler</span>',

    '“Attitudes are contagious. Are yours worth catching?”',

    '“All coaching is, is taking a player where he can’t take himself.”<br><br><span class="who_said">Bill McCartney</span>',

    '“Nothing great was ever achieved without enthusiasm.”<br><br><span class="who_said">Bobby Knight</span>',

    '“Make sure that team members know they are working with you, not for you.”<br><br><span class="who_said">John Wooden</span>',

    '"People in good moods are better at inductive reasoning and creative problem solving."',

    '"Every time we allow someone to move us with anger, we teach them to be angry."<br><br><span class="who_said">Barry Neil Kaufman</span>',

    '"Never react emotionally to criticism. Analyze yourself to determine whether it is justified. If it is, correct yourself. Otherwise, go on about your business."<br><br><span class="who_said">Norman Vincent Peale</span>',

    '"The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm."<br><br><span class="who_said">Alous Huxley</span>',

    '"When dealing with people, remember you are not dealing with creatures of logic, but with creatures of emotion."<br><br><span class="who_said">Dale Carnegie</span>'

];

var random_text = text[Math.floor(Math.random() * text.length)];

window.onload = function () {

	letsgo();

	function letsgo() {
		document.getElementById("script_output").innerHTML = random_text;
	};

}