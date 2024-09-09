function projectButtonClicked(){

    var projectContent = document.getElementById("projectContent");
    var aboutContent = document.getElementById("aboutContent");
    var resumeContent = document.getElementById("resumeContent");
    
    projectContent.style.display = "block";
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";
}

function aboutButtonClicked(){

    var projectContent = document.getElementById("projectContent");
    var aboutContent = document.getElementById("aboutContent");
    var resumeContent = document.getElementById("resumeContent");
    
    projectContent.style.display = "none";
    aboutContent.style.display = "block";
    resumeContent.style.display = "none";

}

function resumeButtonClicked(){

    var projectContent = document.getElementById("projectContent");
    var aboutContent = document.getElementById("aboutContent");
    var resumeContent = document.getElementById("resumeContent");
    
    projectContent.style.display = "none";
    aboutContent.style.display = "none";
    resumeContent.style.display = "block";
}

