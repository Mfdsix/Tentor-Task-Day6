function getPerson(){
	var random = generateRandom();
	var person = people[random];
	var load_html = "<i class='fas fa-circle-notch fa-spin'></i> Mendapatkan Data";


	setValue("name", load_html);
	setValue("age", load_html);
	setValue("work", load_html);
	setValue("city", load_html);
	setValue("ten-years", load_html);
	setValue("quarter", load_html);
	setValue("four-times", load_html);

	var delay = setTimeout(function() {
		setValue("name", person.name);
		setValue("age", (person.age)+" years old");
		setValue("work", person.work);
		setValue("city", person.city);
		setValue("ten-years", (person.age+10)+" years old");
		setValue("quarter", (person.age/4)+" years old");
		setValue("four-times", (person.age*4)+" years old");
		clearTimeout(delay);
	}, 1500);


}

function generateRandom(){
	return Math.floor(Math.random() * people.length);
}

function setValue(id, value){
	document.getElementById("td-"+id).innerHTML = value;
}