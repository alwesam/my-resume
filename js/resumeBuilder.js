/**
* Wesam Al-Haddad
* March 2015
**/

//first object: Bio
var bio = {
	"name": "Wesam Al-Haddad",
	"role": "Software Developer",
	"contacts": {
		"mobile": "604-379-9434",
		"email": "alwesam@vandevsam.com",
		"github": "alwesam",
		"blog": "http://vandevsam.com/blog",
		"location": "Vancouver, BC"
	},
	"pic": "images/wesam-portrait.png",
	"welcome": "There is no substitute for hard work - Thomas Edison",
	"skills": ["Ruby", "Rails", "Javascript", "JQuery", "React", "KnockOut", "HTML/CSS", "Java", "Android SDK", "SQL", "C", "Git"],
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

//second object: education
var education = {
	"schools" : [
		{
			"name": "CodeCore",
			"years": "2015",
			"degree": "Web Development Certificate",
			"major": "Accelerated web development training in Ruby on Rails",
			"location": "Vancovuer, BC",
			"url" : "http://www.codecore.ca"
		},
		{
			"name": "University of Alberta",
			"years": "2010",
			"degree": "M.Sc.",
			"major": "Electrical and Computer Engineering",
			"location": "Edmonton, AB",
			"url" : "http://www.ualberta.ca"
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

		//add to menu array
		if (education.schools.length>0 || education.online.length>0)
			menuArray.push({menuID:'#education', menu:'Education'});

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

		//online education
		if(education.online.length>0)
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

//third object: work
var work = {
	"jobs" : [
    {
     "employer": "Defiant Ventures",
     "date": "November 2015-Present",
     "title": "Independent Contractor",
     "location": "Vancouver, BC",
     "bullets" : [],
     "Description" : "Building an online platform for connecting people in the film industry" 
    },
    {
     "employer": "StartGrowingFood",
     "date": "November 2015-February 2016",
     "title": "Independent Contractor",
     "location": "Vancouver, BC",
     "bullets" : [],
     "Description" : "Revamped a gardening web application and built an algorithm for planting seeds in  different zones among multiple planters." 
    },
		{
			"employer": "PMC-Sierra",
			"url" : "http://www.pmcs.com",
			"date": "May 2010- November 2013",
			"title": "Product Design Engineer",	
			"location": "Burnaby, BC",
			"bullets" : [
				"Successfully configured a 3rd part intellectual property (IP) block to process system interrupts from chip resources and relay them to main processor. Designed a flow to integrate multiple configurations of the IP seamlessly and automatically. ",
				"Conducted power leakage analysis and filed power savings recommendations that reduced chip subsystem power consumption by about 20%.",
				"Systematically investigated and fixed multiple clock-crossing (CDC) violations that risked chip's functional integrity."
				],
			"Description": "Collaborated on developing two product chips for networks infrastructure enabling efficient and dynamic delivery and storage of big data."	
		}
	],

	display : function () {
		if (work.jobs.length>0)
			menuArray.push({menuID:'#workExperience', menu:'Work Experience'});
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

//fourth object: projects
var projects = {
	"projects" : [
		{
			"title": "Adventure Trivia",
			"date": "2015",
			"description": "A single page game application where players use their knowledge \
                     to create or play trivias. Separated front-end development with \
                     React JS from Rails. App to be released on mobile platform using \
                     PhoneGap. Developed using JavaScript, React JS, Google Maps API, \
                     Ruby on Rails, HTML/CSS, BootStrap, Postgres.",
			"images" : ["images/adventure-trivia.png"],
      "modal" : "adventure",
			"url": "http://alwesam.github.io/adventure_trivia_client"
		},
		{
			"title": "Student Portal",
			"date": "2015",
			"description": "Led a weekend group effort to build a student portal for CodeCore. Ongoing alumni project.",
      "images": ["images/student-portal.png"],
      "modal" : "portal",
			"url": "http://vandevsam.com"
		},
		{
			"title": "Android App ShareSpot",
			"date": "2014-2015",
			"description": "An Android application to store and share locations in public or private groups. Currenlty in beta release.",
			"images" : ["images/shareloc-icon.png"],
      "modal" : "shareloc",
			"url": "http://vandevsam.com/blog/2015/03/sharespot-1-0-beta-testing-with-crashlytics"
		}
	],

	display : function () {
		if (projects.projects.length>0){
			menuArray.push({menuID:'#projects', menu:'Projects'});
		}
    var row_i=0; //row
    var col_j=0; //column

		for (var p in projects.projects) {	
      //insert logic to arrage in rows and columns
      if(col_j%2 == 0) {
        $("#projects").append(HTMLProjectRow.replace("%row-id%", row_i)); //start here
        //TODO this is strange ask
        //if (col_j>=2) row_i++; //increment from now on
      }
      $("#"+row_i+"-projectrow").append(HTMLProjectColumn.replace("%col-id%", col_j));
			$("#"+col_j+"-projectcolumn").append(HTMLprojectStart.replace("%project-id%", col_j));

			//$("#projects").append(HTMLprojectStart);
			var projecttitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
			projecttitle = projecttitle.replace("#",projects.projects[p].url);
			var projectdesc = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
			var projectdate = HTMLprojectDates.replace("%data%",projects.projects[p].date);
			//$(".project-entry:last").append(projecttitle+projectdate+projectdesc);
			//$(".project-entry:last").append(projecttitle);
			$("#"+col_j+"-project").append(projecttitle);

			if(projects.projects[p].images.length>0) {
				for (var i = 0; i < projects.projects[p].images.length; i++) {
					var image = HTMLprojectImage.replace("%data%",projects.projects[p].images[i]);
          image = image.replace("%modal%",projects.projects[p].modal);
					//$(".project-entry:last").append(image);
					$("#"+col_j+"-project").append(image);
				}				
        //building a modal for the image
        var modalTarget = projects.projects[p].modal;
        var modal = HTMLmodal.replace("%modal-id%", modalTarget);
        $("#modals").append(modal);
        //append dialog to modal
        $("#"+modalTarget).append(HTMLmodalDialog.replace("%modal-id%", modalTarget));
        //append content now to dialog
        $("#"+modalTarget+"-dialog").append(HTMLmodalContent.replace("%modal-id%", modalTarget));
        //append body, header, and footer to dialog
        $("#"+modalTarget+"-content").append(HTMLmodalHeader.replace("%modal-title%", projects.projects[p].title));
        $("#"+modalTarget+"-content").append(HTMLmodalBody.replace("%description%", projects.projects[p].description));
        $("#"+modalTarget+"-content").append(HTMLmodalFooter);
			}
      
      col_j=col_j+1; //increment column everytime

		}		
	} 
}

var mapDisplay = function () {
					menuArray.push({menuID:'#mapDiv', menu:'Where I\'ve Lived and Worked'});
					$("#mapDiv").append(googleMap);
				}

var navigation = function(){
					if (menuArray.length>0) {						
						$("#navigation").append(HTMLnavStart);
						$(".nav-entry:last").append(HTMLnavBulletStart);
						for (var i = 0; i < menuArray.length; i++) {	
					    	var formatNav = HTMLnavSection.replace("%data%", menuArray[i].menu);	
					    	formatNav = formatNav.replace("#", menuArray[i].menuID);			
							var point = HTMLnavBulletPoint.replace("%data%",formatNav);
							//$(".nav-entry:last").append(point);
							$(".nav-list:last").append(point);
						};
						//$(".nav-entry:last").append(HTMLnavBulletEnd);
					}
				}
	

//placement in that order
//declare global variable that will hold menu object items
var menuArray = [];
bio.display();
projects.display();
work.display();
education.display();
mapDisplay();
//create navigation menu
navigation();
//$("#header").append(internationalizeButton);

//querSelector only works after document is loaded
document.querySelector('h1').onclick = function() {
    var iName = inName(bio.name);// || function(){};
    $('#name').html(iName); 
}
