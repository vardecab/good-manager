var text = [
    "Praise and encourage even the smallest signs of culture acceptance and adoption.",
    "Earn authority by positive contributions.",
    "Grow out, not up.",
    "Schedule curiosity chats with people from other teams.",
    "Read, listen and watch.",
    "Get to know others.",
    "Be on top of industry news.",
    "Don't be afraid to have opinions at the company level.",
    "Create a culture of experimentation.",
    "Involve your team in setting the goals & KPIs.",
    "Make sure the team know how to impact their KPIs and why they exist.",
    "As a leader you need to keep your team progressing and remove any obstacles while never becoming an obstacle yourself.",
    "You need to make your team the best it can be.",
    "Delegation is important. Otherwise there are too many things to tackle.",
    "As a leader: unblock & support.",
    "Empower people to solve the issues on their own without involving the leader.",
    "Empower team to solve issues on their own so they can feel they're the owners of the stuff.",
    "Context is not as easily obtained remotely as it is when working in the office.",
    "If task is repetitive then you need a process/framework in place.",
    "Plan team building activities.",
    "Make sure teammate has full context before delegating a task.",
    "Deliver feedback that is: constructive, empathetic and actionable.",
    "Understand teammate's emotions.",
    "Not listening to Slack notifications, not going through Asana or scrolling messages on you phone - just listening to what person has to say - that leads to connection.",
    "Remove distractions before any meetings to ensure that you're fully engaged.",
    "Before a call: get buy-in, share your intention, describe how the call will look like.",
    "Have fun & remember you're a team of humans, not robots.",
    "Always attach an agenda to the event. Estimate time for each section.",
    "Start a call on time - it means the meeting is important.",
    "Use 5-10 mins at the beginning of a meeting to have fun, ask for what people had for lunch, what they're doing after work.",
    "Follow up after a meeting with actions points. Make sure everyone is clear on next steps.",
    "Understand your teammates ambitions, motivations, goals.",
    "Goal setting is more important than money and other incentives, according to a study from 1979.",
    "Grow people, not employees.",
    "Think slowly, think twice, give time to think. Try to understand the perspective of the person on the other side.",
    "Start with goal / main objective and work back from that - what needs to happen and when.",
    "I'm trying to put myself in your shoes and I'm feeling in >>such a way<< . Is this something you experience? I really want to understand the situation from your perspective.",
    "I recognise you feel like XYZ (and you say how you feel to validate and confirm). In which case I imagine perhaps thinking about that like this might help.",
    "There should be a mission / vision to give a purpose and motivate.",
    "Time management is important - don't jump between different topics, stick to one and finish before opening a new task."
];

var random_text = text[Math.floor(Math.random() * text.length)];

window.onload = function () {

	letsgo();

	function letsgo() {
		document.getElementById("script_output").innerHTML = random_text;
	};

}