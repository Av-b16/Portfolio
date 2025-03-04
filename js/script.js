
// Function to open the modal
function openResumeModal() {
    document.getElementById("resumeModal").classList.remove("hidden");
}

// Function to close the modal
function closeResumeModal() {
    document.getElementById("resumeModal").classList.add("hidden");
}

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
    
   
    

