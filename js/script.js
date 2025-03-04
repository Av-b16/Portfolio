const resumeUrl = "assets/AvantikaRathi_resume.pdf"; // Change this if needed

    function openResumeModal() {
        document.getElementById("resumeModal").classList.remove("hidden");
        document.getElementById("resumeFrame").src = resumeUrl;
        document.getElementById("viewInNewTab").href = resumeUrl;
        document.getElementById("downloadResume").href = resumeUrl;
    }

    function closeResumeModal() {
        document.getElementById("resumeModal").classList.add("hidden");
        document.getElementById("resumeFrame").src = ""; // Clear the iframe to stop loading
    }