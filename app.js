const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
const name = document.getElementById("name");

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const Github = document.getElementById("Github");
const Linkedin = document.getElementById("Linkedin");

const Degree = document.getElementById("Degree");
const College = document.getElementById("College");
const Starting   = document.getElementById("Starting Year");
const Passing = document.getElementById("Passing Year");
const CGPA = document.getElementById("CGPA");

const Skills = document.getElementById("Skills");

const Project = document.getElementById("Project");
const Description1 = document.getElementById("Description1");
const link = document.getElementById("link");

const Company = document.getElementById("Company");
const Designation = document.getElementById("Designation");
const Duration = document.getElementById("Duration");
const Description2 = document.getElementById("Description2");



// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields
  const name_resume = document.getElementById("name_resume");
  name_resume.innerHTML = name.value;
  

  const email_resume = document.getElementById("email_resume");
  email_resume.innerHTML = email.value;

  const phone_resume = document.getElementById("phone_resume");
  phone_resume.innerHTML = phone.value;

  const Github_resume = document.getElementById("Github_resume");
  Github_resume.innerHTML = Github.value;

  const Linkedin_resume = document.getElementById("Linkedin_resume");
  Linkedin_resume.innerHTML = Linkedin.value;


  const Degree_resume = document.getElementById("Degree_resume");
  Degree_resume.innerHTML = Degree.value;

  const College_resume = document.getElementById("College_resume");
  College_resume.innerHTML = College.value;

  const Starting_resume = document.getElementById("Starting_resume");
  Starting_resume.innerHTML = Starting.value;

  const Passing_resume = document.getElementById("Passing_resume");
  Passing_resume.innerHTML = Passing.value;

  const CGPA_resume = document.getElementById("CGPA_resume");
  CGPA_resume.innerHTML = CGPA.value;

  const Skills_resume = document.getElementById("Skills_resume");
  Skills_resume.innerHTML = Skills.value;

  const Project_resume = document.getElementById("Project_resume");
  Project_resume.innerHTML = Project.value;

  const Description_resume1 = document.getElementById("Description_resume1");
  Description_resume1.innerHTML = Description1.value;

  const link_resume = document.getElementById("link_resume");
  link_resume.innerHTML = link.value;
  
  const Company_resume = document.getElementById("Company_resume");
  Company_resume.innerHTML = Company.value;
  
  const Designation_resume = document.getElementById("Designation_resume");
  Designation_resume.innerHTML = Designation.value;

  const Duration_resume = document.getElementById("Duration_resume");
  Duration_resume.innerHTML = Duration.value;

  const Description_resume2 = document.getElementById("Description_resume2");
  Description_resume2.innerHTML = Description2.value;
  

}
let y=["name","email","phone","Github","Linkedin","Degree","College","Starting Year","Passing Year","CGPA","Project","link","Company","Designation","Duration"];
for(let i=0;i<y.length;i++)
{
  x=y[i];
const input = document.getElementById(x);

input.addEventListener('input', event => {
  if (input.value === '') {
    input.style.backgroundColor = '';
  } else {
    input.style.backgroundColor = 'Lavender';
  }
});
}



function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
