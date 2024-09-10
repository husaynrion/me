
function projectBtnActive(){
    document.getElementById("projectButton").setAttribute("class", "clicked");

}

function projectBtnDeactive(){
    document.getElementById("projectButton").setAttribute("class", "unclicked");

}



function aboutBtnActive(){
    document.getElementById("aboutButton").setAttribute("class", "clicked");

}

function aboutBtnDeactive(){
document.getElementById("aboutButton").setAttribute("class", "unclicked");

}


function resumeBtnActive(){
    document.getElementById("resumeButton").setAttribute("class", "clicked");

}

function resumeBtnDeactive(){
document.getElementById("resumeButton").setAttribute("class", "unclicked");

}





function projectButtonClicked(){

    var projectContent = document.getElementById("projectContent");
    var aboutContent = document.getElementById("aboutContent");
    var resumeContent = document.getElementById("resumeContent");
    
    projectContent.style.display = "block";
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";

    
    projectBtnActive();
    aboutBtnDeactive();
    resumeBtnDeactive();
}

function aboutButtonClicked(){

    var projectContent = document.getElementById("projectContent");
    var aboutContent = document.getElementById("aboutContent");
    var resumeContent = document.getElementById("resumeContent");
    
    projectContent.style.display = "none";
    aboutContent.style.display = "block";
    resumeContent.style.display = "none";


    projectBtnDeactive();
    aboutBtnActive();
    resumeBtnDeactive();

}

function resumeButtonClicked(){

    var projectContent = document.getElementById("projectContent");
    var aboutContent = document.getElementById("aboutContent");
    var resumeContent = document.getElementById("resumeContent");
    
    projectContent.style.display = "none";
    aboutContent.style.display = "none";
    resumeContent.style.display = "block";


    projectBtnDeactive();
    aboutBtnDeactive();
    resumeBtnActive();
}

