// Display current year in the footer
const footerDate = document.getElementById("footer-date");
footerDate.textContent = new Date().getFullYear();

// Simulated data for reports and requests (replace with actual data fetching)
const reports = [
    { id: 1, type: "Security", details: "Suspicious activity in Block A" },
    { id: 2, type: "Health", details: "Injured person near the main entrance" },
    { id: 3, type: "Infrastructure", details: "Broken light near parking area" }
];

const requests = [
    { id: 1, service: "Maintenance", details: "Air conditioning not working in Room 102" },
    { id: 2, service: "Security", details: "Request for additional guards at Gate 2" },
    { id: 3, service: "Catering", details: "Need catering services for Friday's event" }
];

// Function to populate the reports section
function populateReports() {
    const reportsContainer = document.getElementById("reports-container");
    reportsContainer.innerHTML = ""; // Clear previous content

    reports.forEach(report => {
        const reportDiv = document.createElement("div");
        reportDiv.classList.add("report-item");

        reportDiv.innerHTML = `
            <h3>Report ID: ${report.id}</h3>
            <p>Type: ${report.type}</p>
            <p>Details: ${report.details}</p>
        `;

        reportsContainer.appendChild(reportDiv);
    });

    // Update the total reports stat
    document.getElementById("total-reports").textContent = reports.length;
}

// Function to populate the requests section
function populateRequests() {
    const requestsContainer = document.getElementById("requests-container");
    requestsContainer.innerHTML = ""; // Clear previous content

    requests.forEach(request => {
        const requestDiv = document.createElement("div");
        requestDiv.classList.add("request-item");

        requestDiv.innerHTML = `
            <h3>Request ID: ${request.id}</h3>
            <p>Service: ${request.service}</p>
            <p>Details: ${request.details}</p>
        `;

        requestsContainer.appendChild(requestDiv);
    });

    // Update the total requests stat
    document.getElementById("total-requests").textContent = requests.length;
}

// Initialize dashboard by populating reports and requests
function initDashboard() {
    populateReports();
    populateRequests();
}

// Call initDashboard to set up the dashboard on page load
window.onload = initDashboard;

// Handling logout link (Optional feature)
document.querySelector('a[href="#logout"]').addEventListener('click', function(event) {
    event.preventDefault();
    alert('You have successfully logged out.');
    // Add further logout functionality here (e.g., redirect to login page)
});
