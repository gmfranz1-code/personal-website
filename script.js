const experiences = [
    {
        company: "SC Audit & Accounting Solutions",
        role: "Tax Intern",
        tags: "Tax Preparation • Accounting",
        date: "Current"
    },

    {
        company: "Labcorp",
        role: "Incoming PMO Intern",
        tags: "Program Management • Strategy & Transformation",
        date: "Summer 2027"
    },

    {
        company: "Mayo Clinic–ASU Health Care Accelerator",
        role: "Undergraduate Intern",
        tags: "Healthcare Innovation • Operations • Coordination",
        date: "2026"
    },

    {
        company: "AZ Neurosurgery & Spine",
        role: "Office & Billing Support",
        tags: "Insurance Claims • Billing • Healthcare Operations",
        date: "2023-2024"
    }
];

const experienceList = document.querySelector(".experience-list");

experiences.forEach((experience, index) => {

    const experienceItem = document.createElement("article");

    experienceItem.classList.add("experience-item");

    experienceItem.innerHTML = `
        <p class="experience-number">
            ${String(index + 1).padStart(2, "0")}
        </p>

        <div class="experience-main">
            <h3>${experience.company}</h3>
            <p class="experience-role">${experience.role}</p>
            <p class="experience-tags">${experience.tags}</p>
        </div>

        <p class="experience-date">${experience.date}</p>
    `;

    experienceList.appendChild(experienceItem);

});
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const zeusButton = document.querySelector(".zeus-button");
const zeusPopup = document.querySelector(".zeus-popup");
const zeusClose = document.querySelector(".zeus-close");

zeusButton.addEventListener("click", () => {
    zeusPopup.classList.toggle("active");
});

zeusClose.addEventListener("click", () => {
    zeusPopup.classList.remove("active");
});
const travelButton = document.querySelector(".travel-button");
const travelPopup = document.querySelector(".travel-popup");
const travelClose = document.querySelector(".travel-close");

travelButton.addEventListener("click", () => {
    travelPopup.classList.toggle("active");
});

travelClose.addEventListener("click", () => {
    travelPopup.classList.remove("active");
});
const coffeeButton = document.querySelector(".coffee-button");
const coffeePopup = document.querySelector(".coffee-popup");
const coffeeClose = document.querySelector(".coffee-close");

coffeeButton.addEventListener("click", () => {
    coffeePopup.classList.toggle("active");
});

coffeeClose.addEventListener("click", () => {
    coffeePopup.classList.remove("active");
});