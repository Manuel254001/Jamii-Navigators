// Display current year in footer
const spanDate = document.getElementById("spanDate");
spanDate.textContent = new Date().getFullYear();

// Handling form submissions for different sections
document.getElementById("request-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your service request has been submitted!");
    this.reset(); // Clear the form
});

document.getElementById("report-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your issue has been reported successfully!");
    this.reset(); // Clear the form
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will respond to your message shortly.");
    this.reset(); // Clear the form
});

// Implement search functionality for announcements
const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase();
    const announcements = document.querySelectorAll(".announcement");

    announcements.forEach(function(announcement) {
        const announcementText = announcement.textContent.toLowerCase();
        if (announcementText.includes(searchQuery)) {
            announcement.style.display = "block";
        } else {
            announcement.style.display = "none";
        }
    });
});

// Sticky navbar on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Dynamic loading of new forum threads (example)
const forumSection = document.querySelector("#forum");

function addForumThread(title, author, content) {
    const thread = document.createElement("div");
    thread.classList.add("forum-thread");

    thread.innerHTML = `
        <h3>${title}</h3>
        <p>Posted by <strong>${author}</strong></p>
        <p>${content}</p>
    `;

    forumSection.appendChild(thread);
}



// Announcement carousel
let currentAnnouncement = 0;
const announcementsContainer = document.querySelector('.announcements-container');
const announcements = document.querySelectorAll('.announcement');

function showNextAnnouncement() {
    announcements[currentAnnouncement].style.display = 'none';
    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
    announcements[currentAnnouncement].style.display = 'block';
}

