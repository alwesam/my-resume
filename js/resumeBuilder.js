/**
* Wesam Al-Haddad
* March 2015
**/

//first object: Bio
var bio = {
	"name": "Wesam Al-Haddad",
	"role": "Web Developer",
	"contacts": {
		"mobile": "604-379-9434",
		"email": "alwesam@vandevsam.com",
		"github": "alwesam",
		"blog": "http://vandevsam.com/blog",
		"location": "Vancouver, BC"
	},
	"pic": "images/fry.jpg",
	"welcome": "There is no substitute for hard work - Thomas Edison",
	"skills": ["HTML/CSS  ","Java  ","Javascript  ","Android"],
	display : function () {
				//formating
				var formattedName = HTMLheaderName.replace("%data%",bio.name);
				var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
				var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
				var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
				var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
				var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
				var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);

				var formattedPic = HTMLbioPic.replace("%data%",bio.pic);
				var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
				//placement
				$("#header").prepend(formattedRole);
				$("#header").prepend(formattedName);
				$("#header").append(formattedPic);
				$("#topContacts").append(formattedEmail);
				$("#topContacts").append(formattedMobile);
				$("#topContacts").append(formattedGit);
				$("#topContacts").append(formattedBlog);
				$("#topContacts").append(formattedLocation);

				$("#footerContacts").append(formattedEmail);
				$("#footerContacts").append(formattedMobile);
				$("#footerContacts").append(formattedGit);
				$("#footerContacts").append(formattedBlog);
				$("#footerContacts").append(formattedLocation);

				$("#header").append(formattedWelcome);
				//iterate for skills
				if(bio.skills.length>0) {
					$("#header").append(HTMLskillsStart);
					var formattedSkills = [];
					for (var i = 0; i < bio.skills.length; i++) {
						formattedSkills[i] = HTMLskills.replace("%data%",bio.skills[i]);
						$("#skills").append(formattedSkills[i]);
					};
				};
	}
};


//display bio info
bio.display();

//second object: education
var education = {
	"schools" : [
		{
			"name": "University of Alberta",
			"years": "2010",
			"degree": "M.Sc.",
			"major": "Electrical and Computer Engineering",
			"location": "Edmonton, AB",
			"url" : "http://www.ualberta.ca"
		},
		{
			"name": "Queen's University",
			"years": "2004",
			"degree": "B.Sc.",
			"major": "Electrical and Computer Engineering",
			"location": "Kingston, ON",
			"url" : "http://www.queensu.ca"
		}
	],
	"online" : [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com",
			"urlcourse": "https://www.udacity.com/course/nd001"
		}
	],

	display : function () {
		for (var e in education.schools) {	
			$("#education").append(HTMLschoolStart);
			var schoolname = HTMLschoolName.replace("%data%",education.schools[e].name);
			//insert url
			schoolname = schoolname.replace("#",education.schools[e].url);
			var schooldate = HTMLschoolDates.replace("%data%",education.schools[e].years);
			var schoollocation = HTMLschoolLocation.replace("%data%",education.schools[e].location);
			var schooldegree = HTMLschoolDegree.replace("%data%",education.schools[e].degree);
			var schoolmajor = HTMLschoolMajor.replace("%data%",education.schools[e].major);
			$(".education-entry:last").append(schoolname+schooldegree+schooldate+schoollocation+schoolmajor);
			
		};
	},

	displayonline : function () {
		$("#education").append(HTMLonlineClasses);

		for (var on in education.online) {	
			$("#education").append(HTMLschoolStart);	
			var onlinetitle = HTMLonlineTitle.replace("%data%",education.online[on].title);
			//insert url
			onlinetitle = onlinetitle.replace("#",education.online[on].url);
			var onlineschool = HTMLonlineSchool.replace("%data%",education.online[on].school);
			var onlinedate = HTMLonlineDates.replace("%data%",education.online[on].dates);
			var onlineurl = HTMLonlineURL.replace("%data%",education.online[on].urlcourse);
			onlineurl = onlineurl.replace("#",education.online[on].urlcourse);
			$(".education-entry:last").append(onlinetitle+onlineschool+onlinedate+onlineurl);
		};
	}

};

//placement
education.display();
education.displayonline();

//third object: work
var work = {
	"jobs" : [
		{
			"employer": "PMC-Sierra",
			"url" : "http://www.pmcs.com",
			"date": "2010-2013",
			"title": "Product Design Engineer",	
			"location": "Burnaby, BC",
			"bullets" : [
				"Successfully configured a 3rd part intellectual property (IP) block to process system interrupts from chip resources and relay them to main processor. Designed a flow to integrate multiple configurations of the IP seamlessly and automatically. ",
				"Conducted power leakage analysis and filed power savings recommendations that reduced chip subsystem power consumption by about 20%.",
				"Systematically investigated and fixed multiple clock-crossing (CDC) violations that risked chip's functional integrity.",
				"Integrated and reverse-engineered third-party IP code into subsystem design for thorough behavioural analysis that enabled potential problem identification and workaround creation.",
				"Innovated a custom register map to interface various register blocks with firmware without adding design complexity."
				],
			"Description": "Collaborated on developing two product chips for networks infrastructure enabling efficient and dynamic delivery and storage of big data."	
		},
		{
			"employer": "University of Alberta, ECE Department",
			"url" : "http://www.ece.ualberta.ca",
			"date": "2007-2010",
			"title": "Graduate Research Assistant",
			"location": "Edmonton, AB",
			"bullets" : [
				"Led two tape-out projects that developed mixed-signal integrated circuit (IC) chips for controlling and monitoring microﬂuidic processes for capillary electrophoresis (CE). Designed electronics that enabled scale down of targeted CE platform from 100cm at 30kV to 6mm at 40V enabling portability and lower costs.",
				"Developed novel high voltage devices and demonstrated functionality in level shifter circuits up to 40V. Level shifter circuits with the novel devices occupy 80% less die area.",
				"Helped establish an IC CAD flow on supplier’s semiconductor’s CMOS process, then chosen to present results to supplier’s engineers."
				],
			"Description": "Worked with a team developing an inexpensive, portable, and miniaturized Lab-on-chip (LoC) systems."	
		}
	],

	display : function () {
		//format and placement
		for (var j in work.jobs) {	
			$("#workExperience").append(HTMLworkStart);
			var workemployer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
			//insert url
			workemployer = workemployer.replace("#",work.jobs[j].url);
			var worktitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
			var workdesc = HTMLworkDescription.replace("%data%",work.jobs[j].Description);
			var workdate = HTMLworkDates.replace("%data%",work.jobs[j].date);

			$(".work-entry:last").append(workemployer+worktitle+workdate+workdesc);

			if (work.jobs[j].bullets.length>0) {
				
				$(".work-entry:last").append(HTMLworkBulletStart);
				for (var i = 0; i < work.jobs[j].bullets.length; i++) {					
					var point = HTMLworkBulletPoint.replace("%data%",work.jobs[j].bullets[i]);
					$(".work-entry:last").append(point);
				};
				$(".work-entry:last").append(HTMLworkBulletEnd);
			}

		};
	}
}

//display work
work.display();


//fourth object: projects
var projects = {
	"projects" : [
		{
			"title": "Android App ShareLoc",
			"date": "2014-2015",
			"description": "An Android application to store and share locations in public or private groups.",
			"images" : [],
			"url": "http://vandevsam.com"
		},
		{
			"title": "Frogger",
			"date": "2015",
			"description": "Coming soon",
			"images" : [],
			"url": "http://vandevsam.com"
		},
		{
			"title": "Neighborhood Map",
			"date": "2015",
			"description": "Coming soon",
			"images" : [],
			"url": "http://vandevsam.com"
		}
	],

	display : function () {
		for (var p in projects.projects) {	
			$("#projects").append(HTMLprojectStart);
			var projecttitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
			var projectdesc = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
			var projectdate = HTMLprojectDates.replace("%data%",projects.projects[p].date);
			$(".project-entry:last").append(projecttitle+projectdate+projectdesc);
		};		
	} 
}

//display
projects.display();

//$("#header").append(internationalizeButton);
$("#mapDiv").append(googleMap);