const pages = {
    dashboard: `
        <div class="header">
            <h1>WELCOME <span>AYUSH!</span></h1>
            
        </div>

        <div class="cards">
            <div class="card">Total Students<br><b>80</b></div>
            <div class="card">Today Classes<br><b>08</b></div>
            <div class="card">Class Attendance<br><b>91%</b></div>
            <div class="card">Upcoming Exams<br><b>03</b></div>
        </div>

        <div class="chart-section">
            <div class="panel"><canvas id="donutChart"></canvas></div>
            <div class="panel"><canvas id="lineChart"></canvas></div>
        </div>
    `,

    students: `
        <h1>Students List</h1>
        <table>
            <tr><th>ID</th><th>Name</th><th>Branch</th><th>Year</th></tr>
            <tr><td>101</td><td>Ayush Shukla</td><td>CSE</td><td>2nd</td></tr>
            <tr><td>102</td><td>Avinash Shukla</td><td>CSE</td><td>2nd</td></tr>
            <tr><td>103</td><td>Neha Verma</td><td>IT</td><td>2nd</td></tr>
            <tr><td>104</td><td>Ayush Kumar</td><td>ECE</td><td>2nd</td></tr>
        </table>
    `,

    attendance: `
        <h1>Attendance Records</h1>
        <table>
            <tr><th>Date</th><th>Subject</th><th>Status</th></tr>
            <tr><td>20 Oct</td><td>DSA</td><td>Present</td></tr>
            <tr><td>21 Oct</td><td>OS</td><td>Present</td></tr>
            <tr><td>22 Oct</td><td>DBMS</td><td>Absent</td></tr>
            <tr><td>23 Oct</td><td>CN</td><td>Present</td></tr>
        </table>
    `,

    timetable: `
        <h1>Timetable</h1>
        <table>
            <tr><th>Day</th><th>Subject</th><th>Time</th></tr>
            <tr><td>Monday</td><td>DSA</td><td>10:00 AM</td></tr>
            <tr><td>Tuesday</td><td>Database</td><td>11:00 AM</td></tr>
            <tr><td>Wednesday</td><td>Computer Network</td><td>09:00 AM</td></tr>
            <tr><td>Thursday</td><td>Operating System</td><td>01:00 PM</td></tr>
            <tr><td>Friday</td><td>AI/ML</td><td>12:00 PM</td></tr>
        </table>
    `,

    exams: `
        <h1>Exams & Results</h1>
        <table>
            <tr><th>Exam</th><th>Date</th><th>Status</th></tr>
            <tr><td>Maths</td><td>27 Oct 2025</td><td>Upcoming</td></tr>
            <tr><td>Data Structure Project</td><td>28 Oct 2025</td><td>Submission</td></tr>
            <tr><td>AI Mid-Term</td><td>14 Nov 2025</td><td>Upcoming</td></tr>
        </table>
    `,

    fees: `
        <h1>Fees & Payments</h1>
        <table>
            <tr><th>Category</th><th>Status</th></tr>
            <tr><td>College</td><td>Paid</td></tr>
            <tr><td>Library</td><td>Paid</td></tr>
            <tr><td>Hostel</td><td>Paid</td></tr>
            <tr><td>Transport</td><td>Pending</td></tr>
        </table>
    `,

    library: `
        <h1>Library Records</h1>
        <table>
            <tr><th>Book</th><th>Issued On</th><th>Return Date</th></tr>
            <tr><td>Python Programming</td><td>15 Oct</td><td>25 Oct</td></tr>
            <tr><td>Data Structures</td><td>10 Oct</td><td>20 Oct</td></tr>
        </table>
    `,

    hostel: `
        <h1>Hostel Details</h1>
        <table>
            <tr><th>Room No</th><th>Bed</th><th>Status</th></tr>
            <tr><td>G-12</td><td>1</td><td>Allocated</td></tr>
        </table>
    `,

    notifications: `
        <h1>Notifications</h1>
        <ul>
            <li>New event added: Tech Fest 2025</li>
            <li>Your attendance is above 90%</li>
            <li>Library book due tomorrow</li>
        </ul>
    `,

    transport: `
        <h1>Transport</h1>
        <table>
            <tr><th>Route</th><th>Bus No</th><th>Timing</th></tr>
            <tr><td>Route A</td><td>UP32 AB 1234</td><td>7:00 AM</td></tr>
            <tr><td>Route B</td><td>UP32 XY 4567</td><td>7:30 AM</td></tr>
        </table>
    `
};


const contentArea = document.getElementById("contentArea");
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const page = item.getAttribute("data-page");
        contentArea.innerHTML = pages[page];

        if (page === "dashboard") loadCharts();
    });
});

function loadCharts() {
    new Chart(document.getElementById("donutChart"), {
        type: "doughnut",
        data: {
            labels: ["Present", "Absent", "Exempt"],
            datasets: [{
                data: [85, 10, 5],
                backgroundColor: ["#7b2fff", "#ff6b6b", "#4ecdc4"]
            }]
        }
    });

    new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: ["8th","9th","10th","11th","12th","13th","15th","16th","17th","18th","19th","20th"],
            datasets: [
                { label: "CSE 14", data: [20,30,40,35,50,60,70,65,75,55,60,70] },
                { label: "CSE 15", data: [40,50,55,45,60,80,90,85,95,70,75,85] },
                { label: "CSE 16", data: [30,35,28,40,45,55,65,60,70,50,55,60] }
            ]
        }
    });
}

contentArea.innerHTML = pages.dashboard;
loadCharts();
