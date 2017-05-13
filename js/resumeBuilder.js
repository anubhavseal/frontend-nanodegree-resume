/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name:"Anubhav Seal",
    role:"Developer",
    contacts:{
        mobile:"9163882494",
        email:"anubhav.seal@gmail.com",
        github:"github.com/anubhavseal",
        twitter:"@anubhav2381",
        location:"Pune"
    },
    welcomeMessage:"Welocme",
    skills:['HTML','CSS','JavaScript'],
    biopic:"",
    display:function (argument) {
        var formattedName = HTMLheaderName.replace('%data%','Anubhav Seal');
        $('#header').prepend(formattedName);
        var formattedRole = HTMLheaderRole.replace('%data%','Web Developer');
        $(formattedRole).insertBefore('#topContacts');
        $('#topContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
        $('#topContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
        $('#topContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));
    }
}

var education = {
    schools:[
    {
        name:"St. Thomas' College",
        location:"Kolkata",
        degree:"Bachelors in Technology",
        majors:["Information Technology"],
        dates:"2012-2016",
        url:"stcet.org"
    },
    {
        name:"Udacity",
        location:"San Fransisco",
        degree:"Nanodegree",
        majors:["Front End Web Development"],
        dates:"2016-2017",
        url:"udacity.com"
    }],
    onlineCourses:[
    {
        title:"",
        school:"",
        dates:"",
        url:""
    }
    ],
    display:function (argument) {
        $('#education').append(HTMLschoolStart);
        education.schools.forEach(function(index){
            $('.education-entry').append(HTMLschoolName.replace('%data%',index.name) + HTMLschoolDegree.replace('%data%',index.degree));
            $('.education-entry').append(HTMLschoolDates.replace('%data%',index.dates));
            $('.education-entry').append(HTMLschoolLocation.replace('%data%',index.location));
            index.majors.forEach(function(value){
                $('.education-entry').append(HTMLschoolMajor.replace('%data%',value));
            })
        })
    }
}

var work = {
    jobs:[
    {
        employer:"Cognizant",
        title:"Programmer Analyst Trainee",
        location:"Pune",
        dates:"Oct 21,2016 - Apr 21,2017",
        description:"Billprint Support In Nv Energy"
    },
    {
        employer:"MotifWorks",
        title:"Developer",
        location:"Pune",
        dates:"Present",
        description:"Web Developer"
    }
    ],
    display:function(){
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function(index){
            $('.work-entry').append(HTMLworkEmployer.replace('%data%',index.employer) + HTMLworkTitle.replace('%data%',index.title));
            $('.work-entry').append(HTMLworkLocation.replace('%data%',index.location));
            $('.work-entry').append(HTMLworkDates.replace('%data%',index.dates));
            $('.work-entry').append(HTMLworkDescription.replace('%data%',index.description));
        })
    }
}

var projects = {
    projects:[
    {
        title:"Online Portfolio",
        dates:"",
        description:"A Portfolio built for mobile first",
        image:""
    },
    {
        title:"Online resume",
        dates:"",
        description:"Every Bit JavaScript",
        image:""
    }
    ],
    display:function(argument) {

    }
}

bio.display();
work.display();
education.display();