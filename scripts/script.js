// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Project Listings from JSON
const projects = [
    {
        title: "Project 1",
        description: "Modern medical healthcare app. Technologies used: HTML, CSS, JavaScript.",
        github: "https://github.com/sameena-parveen/modern-medical-care"
    },
    {
        title: "Project 2",
        description: "Simple todo Manager API. Technologies used: Node.js, MongoDB, Express.",
        github: "https://github.com/sameena-parveen/simpleTodoapp"
    }
    // Add more projects as needed
];

const projectContainer = document.querySelector('#projectContainer');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">GitHub</a>
    `;
    projectContainer.appendChild(projectDiv);
});

// Form Validation for Contact Form
const form = document.querySelector('#contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Thank you for your message!");
        form.reset();
    }
});
