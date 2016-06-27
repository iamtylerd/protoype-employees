function Employee () {
	this.firstName = "";
	this.lastName = "";
	
}

function Departments () {
	this.departmentName = "";
}

function Clinician () {
	this.expertise = "";
	this.job = "Clinician";
}

function Operations () {
	this.responsibility = "";
	this.job = "Operations";
}

function FieldOffice () {
	this.city = "";
}

function Headquarters () {
	this.city = "";
}

Clinician.prototype = new Employee ();
Operations.prototype = new Employee ();
FieldOffice.prototype = new Departments ();
Headquarters.prototype = new Departments ();

var chad = new Clinician ();
chad.firstName = "Chad";
chad.lastName = "Chaddy";
chad.expertise = "Physical Therapist";
chad.location = new FieldOffice;
chad.city = "Phoneix";

var eric = new Clinician ();
eric.firstName = "Eric";
eric.lastName = "Ericcy";
eric.expertise = "Trainer";
eric.location = new FieldOffice;
eric.city = "Las Vegas";

var mike = new Operations ();
mike.firstName = "Mike";
mike.lastName = "Mikey";
mike.location = new Headquarters;
mike.city = "Nashville";
mike.responsibility = "IT";

var samantha = new Operations ();
samantha.firstName = "Samantha";
samantha.lastName = "Samanthay";
samantha.location = new Headquarters;
samantha.city = "Atlanta";
samantha.responsibility = "Revenue";


var fo = new FieldOffice ();
fo.departmentName = "Field Office";

var hq = new Headquarters ();
hq.departmentName = "Headquarters";



$( "body").text(mike.firstName + " " + mike.lastName + " works as a " + mike.job + ", in the " + mike.city + " field office, " + " and is a " + mike.responsibility);
$( "body").append("<p>" + chad.firstName + " " + chad.lastName + " works as a " + chad.job + ", in the " + chad.city + " field office, " + " and is a " + chad.expertise + "</p>");
$( "body").append("<p>" + eric.firstName + " " + eric.lastName + " works as a " + eric.job + ", in the " + eric.city + " headquarters, " + " and is a " + eric.expertise + "</p>");
$( "body").append("<p>" + samantha.firstName + " " + samantha.lastName + " works as a " + samantha.job + ", in the " + samantha.city + " headquarters, " + " and is a " + mike.responsibility + "</p>");















