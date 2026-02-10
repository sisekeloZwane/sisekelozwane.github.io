// modals.js - Modal functionality for projects, certificates, and galleries

document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projects = {
        hackblock: {
            title: "HackBlock: Gamified Cybersecurity Learning",
            year: "2025",
            status: "Deployed",
            type: "Honors Research Project • Mobile App Development",
            description: "A Flutter-based mobile application designed to translate cybersecurity knowledge into secure behaviors through gamified learning. Developed as an Honors research project to enhance existing security awareness campaigns in Southern Africa.",
            features: [
                "Gamification framework based on Octalysis principles",
                "Real-world social engineering attack simulations",
                "Community features for knowledge sharing",
                "Progress tracking and personalized learning paths",
                "Deployable tool for security awareness campaigns"
            ],
            technologies: ["Flutter (Dart)", "Firebase", "Git Version Control", "CI/CD Pipelines", "Octalysis Framework", "Cybersecurity Education"],
            screenshots: [
                "assets/home.jpg",
                "assets/begin.jpg", 
                "assets/decision.jpg",
                "assets/levelfail.jpg",
                "assets/levelsuccess.jpg",
                "assets/leaderboard.jpg",
                "assets/profile.jpg"
            ]
        },
        chatbot: {
            title: "SaaS Chatbot with Google Gemini API",
            year: "2025",
            status: "Deployed",
            type: "Full-Stack Development • AI Integration",
            description: "A scalable SaaS chatbot platform leveraging Google's Gemini AI API with multi-user subscription plans, conversation history management, and secure API key handling. Built with FastAPI backend and responsive HTML/CSS/JavaScript frontend.",
            features: [
                "Multi-tier subscription system (Free, Pro, Enterprise)",
                "Secure API key management and rate limiting",
                "Persistent conversation history per user",
                "Responsive HTML/CSS/JavaScript web interface with real-time chat",
                "Scalable cloud architecture with load balancing",
                "Following SaaS design principles with deployable cloud-based application"
            ],
            technologies: ["FastAPI", "Google Gemini API", "Python", "SQL", "HTML", "CSS", "JavaScript", "Docker", "CI/CD Pipelines", "SaaS Architecture"],
            screenshots: [
                "https://via.placeholder.com/800x400/0f172a/0ea5e9?text=Chatbot+Dashboard",
                "https://via.placeholder.com/800x400/1e293b/ffffff?text=Subscription+Plans",
                "https://via.placeholder.com/800x400/7c3aed/ffffff?text=Chat+Interface"
            ]
        },
        threatanalysis: {
            title: "Cybersecurity Threat Analysis & Ethical Hacking",
            year: "2024",
            status: "Completed",
            type: "Cybersecurity Simulation • Python Development",
            description: "Completed a comprehensive cybersecurity threat analysis simulation for the Cyber Defense Unit. Researched and analyzed vulnerabilities from CISA publications, drafted clear remediation guidance, and developed Python scripts for ethical hacking including decryption key brute-forcing.",
            features: [
                "Cybersecurity threat analysis simulation for Cyber Defense Unit",
                "Research and analysis of CISA vulnerability publications",
                "Drafted clear vulnerability remediation guidance for teams",
                "Developed Python scripts for ethical hacking purposes",
                "Implemented brute-force decryption key recovery to avoid ransom payments",
                "Demonstrated analytical skills in cybersecurity vulnerability assessment"
            ],
            technologies: ["Python", "Cybersecurity Analysis", "CISA Publications", "Vulnerability Assessment", "Ethical Hacking", "Technical Writing"],
            screenshots: [
                "assets/forage.png"
            ]
        },
        ecommerce: {
            title: "Secure E-Commerce Platform",
            year: "2025",
            status: "Deployed",
            type: "Web Security • Infrastructure Design",
            description: "A secure online marketplace with emphasis on data protection and infrastructure security, featuring a robust 3-server architecture with comprehensive security protocols.",
            features: [
                "3-server infrastructure (Linux/Windows hybrid)",
                "Redundancy and failover mechanisms",
                "End-to-end encryption for payments",
                "Firewall configuration and network security",
                "Active Directory integration for user management"
            ],
            technologies: ["Linux", "Windows Server", "Active Directory", "Firewalls", "VPN", "NAT", "Virtualization", "Docker"],
            screenshots: [
                "https://via.placeholder.com/800x400/7c3aed/ffffff?text=E-Commerce+Dashboard",
                "https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Security+Architecture",
                "https://via.placeholder.com/800x400/059669/ffffff?text=Admin+Panel"
            ]
        }
    };

    // Certificate data (without download links)
    const certificates = {
        'cisco-cyberops': {
            title: 'Cisco CyberOps Associate',
            image: 'assets/certificates/cisco-cyberops-associate.jpg',
        },
        'cisco-intro-cybersecurity': {
            title: 'Cisco Introduction to Cybersecurity',
            image: 'assets/certificates/cisco-intro-cybersecurity.jpg',
        },
        'aws-generative-ai': {
            title: 'AWS: Introducing Generative AI',
            image: 'assets/certificates/aws-generative-ai.jpg',
        }
    };

    // Modal elements
    const projectModal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    
    const certificateModal = document.getElementById('certificateModal');
    const certificateTitle = document.getElementById('certificateTitle');
    const certificateImage = document.getElementById('certificateImage');
    const certificateClose = document.getElementById('certificateClose');
    
    const galleryModal = document.getElementById('galleryModal');
    const galleryImage = document.getElementById('galleryImage');
    const galleryThumbnails = document.getElementById('galleryThumbnails');
    const galleryClose = document.getElementById('galleryClose');

    // Make certificate badges clickable
    document.querySelectorAll('.cert-badge').forEach(badge => {
        badge.addEventListener('click', function() {
            const certId = this.getAttribute('data-cert');
            const cert = certificates[certId];
            
            if (cert) {
                certificateTitle.textContent = cert.title;
                certificateImage.src = cert.image;
                certificateImage.alt = cert.title + ' Certificate';
                
                certificateModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Handle project details button clicks
    document.querySelectorAll('.btn-project-details').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];
            
            if (project) {
                modalContent.innerHTML = `
                    <div class="modal-project-header">
                        <h2>${project.title}</h2>
                        <div class="modal-project-meta">
                            <span class="modal-type">${project.type}</span>
                        </div>
                    </div>
                    <div class="modal-project-body">
                        <p class="modal-description">${project.description}</p>
                        
                        <div class="modal-features">
                            <h3><i class="fas fa-star"></i> Key Features</h3>
                            <ul>
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="modal-technologies">
                            <h3><i class="fas fa-cogs"></i> Technologies Used</h3>
                            <div class="modal-tech-tags">
                                ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <button class="btn-view-gallery" data-project="${projectId}">
                                <i class="fas fa-images"></i> View Screenshots (${project.screenshots.length})
                            </button>
                        </div>
                    </div>
                `;
                
                projectModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                
                // Add event listener for gallery button inside modal
                modalContent.querySelector('.btn-view-gallery').addEventListener('click', function() {
                    openGallery(projectId);
                    projectModal.style.display = 'none';
                });
            }
        });
    });

    // Handle screenshot button clicks
    document.querySelectorAll('.btn-view-screenshots').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openGallery(projectId);
        });
    });

    // Open gallery function
    function openGallery(projectId) {
        const project = projects[projectId];
        if (!project) return;
        
        galleryImage.src = project.screenshots[0];
        galleryThumbnails.innerHTML = '';
        
        project.screenshots.forEach((src, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'gallery-thumb';
            thumb.innerHTML = `<img src="${src}" alt="Screenshot ${index + 1}">`;
            thumb.addEventListener('click', () => {
                galleryImage.src = src;
                galleryThumbnails.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            galleryThumbnails.appendChild(thumb);
        });
        
        if (galleryThumbnails.firstChild) {
            galleryThumbnails.firstChild.classList.add('active');
        }
        galleryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close all modals function
    function closeModals() {
        projectModal.style.display = 'none';
        certificateModal.style.display = 'none';
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close buttons
    modalClose?.addEventListener('click', closeModals);
    certificateClose?.addEventListener('click', closeModals);
    galleryClose?.addEventListener('click', closeModals);
    
    // Close on outside click
    projectModal?.addEventListener('click', function(e) {
        if (e.target === this) closeModals();
    });
    
    certificateModal?.addEventListener('click', function(e) {
        if (e.target === this) closeModals();
    });
    
    galleryModal?.addEventListener('click', function(e) {
        if (e.target === this) closeModals();
    });
    
    // Keyboard close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModals();
    });
});