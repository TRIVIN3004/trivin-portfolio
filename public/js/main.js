// ==========================
// FETCH PORTFOLIO DATA
// ==========================
async function fetchPortfolio() {
    try {
        const res = await fetch('/api/portfolio');
        const data = await res.json();

        // ========== HERO SECTION ==========
        document.getElementById("heroName").textContent = data.name;
        document.getElementById("heroTitle").textContent = data.title;
        document.getElementById("githubLink").href = data.social.github;
        document.getElementById("linkedinLink").href = data.social.linkedin;

        // ========== SKILLS ==========
        document.getElementById("skillsList").innerHTML =
            data.skills.map(s => `<li>${s}</li>`).join("");

        // INITIAL PROJECT RENDER (only 2)
        renderProjects(data.projects.slice(0, 2));
        initShowAllButton(data.projects);

        // ========== EXPERIENCE ==========
        document.getElementById("experienceList").innerHTML =
            data.experience
                .map(
                    e => `
                <div class="exp">
                    <strong>${e.role}</strong> — ${e.company}
                    <div class="muted">${e.duration}</div>
                    <p>${e.details}</p>
                </div>`
                )
                .join("");

        // ========== EDUCATION ==========
        document.getElementById("educationBlock").innerHTML = `
            <strong>${data.education.degree}</strong>
            <div>${data.education.college}</div>
            <div>Expected Graduation: ${data.education.graduation}</div>
            <div>CGPA: ${data.education.cgpa}</div>
        `;

        // ========== ACHIEVEMENTS ==========
        document.getElementById("achievementsList").innerHTML =
            data.achievements.map(a => `<li>${a}</li>`).join("");

    } catch (err) {
        console.error("Error loading portfolio data:", err);
    }
}

fetchPortfolio();


// ==========================
// RENDER PROJECT CARDS
// ==========================
function renderProjects(projectArray) {
    const container = document.getElementById("projectsList");

    container.innerHTML = projectArray
        .map(
            (p, i) => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p class="p-tech"><strong>Tech:</strong> ${p.tech}</p>
            <p>${p.description}</p>
            <button class="project-btn" data-index="${i}">View Details</button>
        </div>
        `
        )
        .join("");

    enableProjectModal(projectArray);
}


// ==========================
// SHOW ALL / SHOW LESS LOGIC
// ==========================
let showAll = false;

function initShowAllButton(allProjects) {
    const btn = document.getElementById("showProjectsBtn");

    if (allProjects.length <= 2) {
        btn.style.display = "none";
        return;
    }

    btn.addEventListener("click", () => {
        showAll = !showAll;

        if (showAll) {
            btn.textContent = "Show Less";
            renderProjects(allProjects);
        } else {
            btn.textContent = "Show All Projects";
            renderProjects(allProjects.slice(0, 2));
        }
    });
}


// ==========================
// PROJECT VIEW DETAILS MODAL
// ==========================
function enableProjectModal(projects) {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("closeProjectModal");

    const titleBox = document.getElementById("projectModalTitle");
    const techBox = document.getElementById("projectModalTech");
    const descBox = document.getElementById("projectModalDesc");

    document.querySelectorAll(".project-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = btn.dataset.index;
            const p = projects[idx];

            titleBox.textContent = p.title;
            techBox.innerHTML = `<strong>Tech:</strong> ${p.tech}`;
            descBox.textContent = p.description;

            modal.style.display = "flex";
        });
    });

    closeBtn.onclick = () => (modal.style.display = "none");

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
}


// ==========================
// CONTACT FORM MODAL LOGIC
// ==========================
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtn.onclick = () => (contactModal.style.display = "flex");
closeModal.onclick = () => (contactModal.style.display = "none");

window.onclick = (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = "none";
    }
};


// ==========================
// CONTACT FORM SUBMIT
// ==========================
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("cname").value,
        email: document.getElementById("cemail").value,
        phone: document.getElementById("cphone").value,
        message: document.getElementById("cmessage").value,
    };

    try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const output = await res.json();

        if (output.success) {
            alert("Message Sent Successfully!");
            e.target.reset();
            contactModal.style.display = "none";
        } else {
            alert("Something went wrong. Try again.");
        }
    } catch (err) {
        console.error("Error submitting contact:", err);
        alert("Server error. Try again later.");
    }
});
