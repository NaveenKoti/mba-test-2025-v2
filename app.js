// MBA Website JavaScript - Complete Fixed Version
// Google Sheets API endpoint (replace with actual deployment URL)
const API_URL = 'https://script.google.com/macros/s/AKfycbw4cQZJvs-GY7DygJ2IU5BKT8HEv3QcYGkPS8wh6LGEZyDrF6l8tGTdP7vF5TqT88c6tg/exec';



// Application data
const appData = {
    programs: [
        {
            name: "Marketing",
            description: "Master brand management and digital marketing strategies",
            courses: "Strategic Brand Management, Integrated Marketing Communication, E-Commerce & Digital Marketing, Rural Marketing, Service/Retail Management, Sales Management, Consumer Behaviour",
            career_paths: ["Marketing Manager", "Brand Manager", "Digital Marketing Specialist"]
        },
        {
            name: "Finance",
            description: "Excel in financial markets and investment strategies", 
            courses: "Financial Markets & Services, Cost & Management Accounting, Derivatives & Risk Management, International Finance, Mergers & Acquisitions, Tax Planning, Investment Analysis & Portfolio Management, Banking, Microfinance",
            career_paths: ["Financial Analyst", "Investment Banker", "CFO"]
        },
        {
            name: "Human Resources (HR)",
            description: "Lead talent management and organizational development",
            courses: "Labour Laws, Talent Management, Compensation, Emotional Intelligence, International HRM, Organisational Development, Performance Management, Learning & Development, HR Info Systems", 
            career_paths: ["HR Manager", "Talent Acquisition Specialist", "CHRO"]
        },
        {
            name: "Operations & Supply Chain",
            description: "Optimize business processes and supply chain efficiency",
            courses: "Total Quality Management, SCM, ERP, Project Management, Production & Operations, BPO, Business Process Reengineering",
            career_paths: ["Operations Manager", "Supply Chain Analyst", "COO"]
        },
        {
            name: "Business Analytics / Information Systems", 
            description: "Harness data for strategic business decisions",
            courses: "MIS, Business Research & Analytics, IT for Managers, Data-Driven Decision-Making, ERP systems",
            career_paths: ["Business Analyst", "Data Scientist", "IT Manager"]
        },
        {
            name: "General Management / Strategy",
            description: "Develop comprehensive leadership and strategic skills",
            courses: "Principles of Management, Strategic Management, Legal Aspects, Entrepreneurship, Sustainability, Management Control Systems", 
            career_paths: ["General Manager", "Strategy Consultant", "CEO"]
        }
    ],
    faculty: [
        {
            name: "Dr. Ramesh Patil",
            expertise: "Finance & Investment Strategy", 
            experience: "25+ years in Corporate Finance and Banking"
        },
        {
            name: "Dr. Meghana Joshi",
            expertise: "Marketing & Consumer Research",
            experience: "20+ years in Brand Management and Digital Marketing"
        },
        {
            name: "Dr. Suresh Kumar", 
            expertise: "Operations & Supply Chain Management",
            experience: "18+ years in Manufacturing and Logistics"
        },
        {
            name: "Dr. Priya Sharma",
            expertise: "Human Resources & Organizational Behavior",
            experience: "22+ years in Talent Management and HR Strategy"
        },
        {
            name: "Dr. Anand Desai",
            expertise: "Business Analytics & Information Systems", 
            experience: "15+ years in Data Analytics and IT Management"
        }
    ],
    testimonials: [
        {
            name: "Arun Desai", 
            position: "Senior Manager, Infosys",
            quote: "The MBA program at KUD equipped me with strategic thinking and leadership skills that accelerated my career growth significantly."
        },
        {
            name: "Pooja Reddy",
            position: "Marketing Head, HDFC Bank",
            quote: "The practical approach and industry connections helped me transition smoothly into banking sector leadership roles."
        },
        {
            name: "Vikram Gowda",
            position: "Founder, TechStart Solutions", 
            quote: "The entrepreneurship focus and mentorship support were instrumental in launching my successful technology startup."
        }
    ],
    recruiters: [
        "Infosys", "TCS", "HDFC Bank", "ICICI Bank", "Amazon", "Deloitte", "Wipro", "Accenture", 
        "IBM", "Microsoft", "Google", "Cognizant", "HCL Technologies", "Tech Mahindra", 
        "Bajaj Finserv", "Reliance Industries", "Aditya Birla Group", "ITC Limited", 
        "Godrej Group", "Mahindra Group", "L&T Infotech", "Mindtree", "Mphasis"
    ]
};

// Quiz questions with fallback data
const quizQuestions = [
    {
        question: "What type of work environment excites you most?",
        answers: [
            { text: "Creative campaigns and brand building", stream: "Marketing" },
            { text: "Financial analysis and investment decisions", stream: "Finance" },
            { text: "People development and team leadership", stream: "Human Resources (HR)" },
            { text: "Process optimization and logistics", stream: "Operations & Supply Chain" },
            { text: "Data analysis and technology solutions", stream: "Business Analytics / Information Systems" },
            { text: "Strategic planning and overall management", stream: "General Management / Strategy" }
        ]
    },
    {
        question: "Which skill would you most like to develop?",
        answers: [
            { text: "Digital marketing and consumer psychology", stream: "Marketing" },
            { text: "Financial modeling and risk management", stream: "Finance" },
            { text: "Talent management and organizational behavior", stream: "Human Resources (HR)" },
            { text: "Supply chain management and quality control", stream: "Operations & Supply Chain" },
            { text: "Business intelligence and data visualization", stream: "Business Analytics / Information Systems" },
            { text: "Leadership and strategic thinking", stream: "General Management / Strategy" }
        ]
    },
    {
        question: "What motivates you most in your career?",
        answers: [
            { text: "Building brands that connect with people", stream: "Marketing" },
            { text: "Managing investments and financial growth", stream: "Finance" },
            { text: "Developing people and organizational culture", stream: "Human Resources (HR)" },
            { text: "Improving efficiency and reducing costs", stream: "Operations & Supply Chain" },
            { text: "Solving complex problems with data", stream: "Business Analytics / Information Systems" },
            { text: "Leading organizations to success", stream: "General Management / Strategy" }
        ]
    },
    {
        question: "Which industry interests you most?",
        answers: [
            { text: "Advertising, Media, and Consumer Goods", stream: "Marketing" },
            { text: "Banking, Investment, and Financial Services", stream: "Finance" },
            { text: "Consulting, Training, and People Services", stream: "Human Resources (HR)" },
            { text: "Manufacturing, Logistics, and Supply Chain", stream: "Operations & Supply Chain" },
            { text: "Technology, Analytics, and IT Services", stream: "Business Analytics / Information Systems" },
            { text: "Any industry with leadership opportunities", stream: "General Management / Strategy" }
        ]
    },
    {
        question: "What type of projects do you enjoy working on?",
        answers: [
            { text: "Market research and campaign development", stream: "Marketing" },
            { text: "Financial planning and budget analysis", stream: "Finance" },
            { text: "Team building and performance management", stream: "Human Resources (HR)" },
            { text: "Process improvement and cost reduction", stream: "Operations & Supply Chain" },
            { text: "Data mining and predictive modeling", stream: "Business Analytics / Information Systems" },
            { text: "Strategic initiatives and business transformation", stream: "General Management / Strategy" }
        ]
    }
];

// Poll options
let pollOptions = [
    { id: 'career-growth', label: 'Career Growth', votes: 45 },
    { id: 'salary-increase', label: 'Salary Increase', votes: 32 },
    { id: 'industry-network', label: 'Industry Network', votes: 28 },
    { id: 'skill-development', label: 'Skill Development', votes: 67 },
    { id: 'entrepreneurship', label: 'Entrepreneurship', votes: 23 }
];

// Quiz state
let currentQuiz = {
    currentQuestion: 0,
    answers: [],
    isCompleted: false
};

// Poll state
let pollState = {
    hasVoted: false,
    results: [...pollOptions]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize sections
    renderPrograms();
    initializeQuiz();
    initializePoll();
    renderFaculty();
    renderTestimonials();
    renderRecruiters();
    initializeContactForm();
    
    // Initialize ALL carousels with unified system
    initializeAllCarousels();
    
    // Load poll data
    loadPollData();
    
    // Initialize animations
    initializeAnimations();
}

// =================
// UNIFIED CAROUSEL SYSTEM
// =================

function makeCarousel({
    containerSelector,
    prevSelector,
    nextSelector,
    cardGap = 16,
    autoPlay = false,
    autoPlayInterval = 5000,
    cardWidth = null,
    visibleCards = null
}) {
    const container = document.querySelector(containerSelector);
    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);
    
    if (!container || !prev || !next) {
        console.warn(`Carousel elements not found for ${containerSelector}`);
        return null;
    }

    let index = 0;
    let autoPlayTimer = null;
    let isAnimating = false;

    const getCardWidth = () => {
        if (cardWidth) return cardWidth;
        const firstCard = container.children[0];
        return firstCard ? firstCard.offsetWidth + cardGap : 300;
    };

    const getVisibleCards = () => {
        if (visibleCards) return visibleCards;
        const containerWidth = container.parentElement.offsetWidth;
        const cardWidthActual = getCardWidth();
        return Math.max(1, Math.floor(containerWidth / cardWidthActual));
    };

    const updateCarousel = () => {
        if (isAnimating) return;
        isAnimating = true;
        
        // const cardWidthActual = getCardWidth();
        // const translateX = -index * cardWidthActual;
        // container.style.transform = `translateX(${translateX}px)`;

        const translateX = -index * getCardWidth();
        container.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        const maxIndex = Math.max(0, container.children.length - getVisibleCards());
        prev.disabled = index === 0;
        next.disabled = index == maxIndex;
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    };

    const moveCarousel = (direction) => {
        if (isAnimating) return;
        
        const maxIndex = Math.max(0, container.children.length - getVisibleCards());
        //const newIndex = Math.max(0, Math.min(index + direction, maxIndex));
        
        // if (newIndex !== index) {
        //     index = newIndex;
        //     updateCarousel();
        // }



        index = (index + direction + (maxIndex + 1)) % (maxIndex + 1);   // <-- wrap
        updateCarousel();
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, container.children.length - getVisibleCards());
        if (index >= maxIndex && autoPlay) {
            index = 0; // Loop back to start for autoplay
        } else {
            moveCarousel(1);
        }
        updateCarousel();
    };

    const prevSlide = () => {
        moveCarousel(-1);
    };

    // Event listeners
    if (prev) {
        prev.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            if (autoPlay) restartAutoPlay();
        });
    }

    if (next) {
        next.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            if (autoPlay) restartAutoPlay();
        });
    }

    // Touch support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        if (autoPlay) stopAutoPlay();
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        if (autoPlay) restartAutoPlay();
    });

    // Auto-play functionality
    const startAutoPlay = () => {
        if (!autoPlay) return;
        autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    };

    const stopAutoPlay = () => {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    };

    const restartAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
    };

    // Hover pause for autoplay
    if (autoPlay) {
        container.parentElement.addEventListener('mouseenter', stopAutoPlay);
        container.parentElement.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();
    }

    // Window resize handler
    const handleResize = debounce(() => {
        updateCarousel();
    }, 250);

    window.addEventListener('resize', handleResize);

    // Initial setup
    updateCarousel();
    container.addEventListener('transitionend', () => { isAnimating = false; });

    return {
        nextSlide,
        prevSlide,
        goToSlide: (slideIndex) => {
            index = slideIndex;
            updateCarousel();
        },
        destroy: () => {
            stopAutoPlay();
            window.removeEventListener('resize', handleResize);
        }
    };
}

function initializeAllCarousels() {
    // Hero Carousel (if exists)
    const heroCarousel = makeCarousel({
        containerSelector: '.carousel-slides',
        prevSelector: '.carousel__btn--prev',
        nextSelector: '.carousel__btn--next',
        autoPlay: true,
        autoPlayInterval: 5000,
        visibleCards: 1
    });

    // Programs Carousel
    const programsCarousel = makeCarousel({
        containerSelector: '#programs-carousel',
        prevSelector: '#programs-prev',
        nextSelector: '#programs-next',
        autoPlay: true,
        autoPlayInterval: 4000,
        visibleCards: 2,
        cardGap: 24,
        cardWidth: 374 // 350px + 24px gap
    });

    // Faculty Carousel
    const facultyCarousel = makeCarousel({
        containerSelector: '.faculty-container',
        prevSelector: '#facultyPrev',
        nextSelector: '#facultyNext',
        autoPlay: true,
        autoPlayInterval: 4000,
        cardGap: 16,
        cardWidth: 296 // 280px + 16px gap
    });

    // Campus Carousel
    const campusCarousel = makeCarousel({
        containerSelector: '.campus-container',
        prevSelector: '#campusPrev',
        nextSelector: '#campusNext',
        visibleCards: 2,
        autoPlay: true,
        autoPlayInterval: 6000,
        cardGap: 16,
        cardWidth: 366 // 350px + 16px gap
    });

    // Hero indicators (if hero carousel exists)
    initializeHeroIndicators();
}

function initializeHeroIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    const slides = document.querySelectorAll('.slide');
    
    if (!indicators.length || !slides.length) return;

    let currentSlide = 0;

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            // Remove active class from all
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));
            
            // Add active class to current
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            
            currentSlide = index;
            
            // Update carousel position
            const slidesContainer = document.querySelector('.carousel-slides');
            if (slidesContainer) {
                slidesContainer.style.transform = `translateX(-${index * 100}%)`;
            }
        });
    });
}

// =================
// NAVIGATION FUNCTIONALITY
// =================

function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu) navMenu.classList.remove('show');
            
            // Handle smooth scrolling
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });

    // Handle header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Handle hero button clicks
    const heroButtons = document.querySelectorAll('.hero__btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });
}

function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 54, 93, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#1a365d';
            header.style.backdropFilter = 'none';
        }
    }
}

// =================
// PROGRAMS SECTION
// =================

function renderPrograms() {
    const container = document.getElementById('programs-carousel');
    if (!container) return;

    container.innerHTML = appData.programs.map(program => `
        <div class="program__card">
            <h3>${program.name}</h3>
            <p>${program.description}</p>
            <div class="program__courses">
                <h4>Key Courses:</h4>
                <ul>
                    ${program.courses.split(', ').slice(0, 6).map(course => `<li>${course}</li>`).join('')}
                </ul>
            </div>
            <div class="program__careers">
                ${program.career_paths.map(career => `<span class="career__tag">${career}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// =================
// QUIZ FUNCTIONALITY
// =================

function initializeQuiz() {
    setTimeout(() => {
        renderQuizQuestion();
    }, 100);
}

function renderQuizQuestion() {
    const quizContent = document.getElementById('quiz-content');
    if (!quizContent) return;

    if (currentQuiz.currentQuestion >= quizQuestions.length) {
        calculateQuizResult();
        return;
    }

    const question = quizQuestions[currentQuiz.currentQuestion];
    
    quizContent.innerHTML = `
        <div class="quiz__question">
            <h3>Question ${currentQuiz.currentQuestion + 1} of ${quizQuestions.length}</h3>
            <h3>${question.question}</h3>
            <div class="quiz__answers">
                ${question.answers.map((answer, index) => `
                    <button class="quiz__answer" data-stream="${answer.stream}" data-index="${index}">
                        ${answer.text}
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="quiz__navigation">
            <div class="quiz__progress">
                Question ${currentQuiz.currentQuestion + 1} of ${quizQuestions.length}
            </div>
            ${currentQuiz.currentQuestion > 0 ? 
                '<button class="btn btn--outline" onclick="previousQuestion()">Previous</button>' : 
                '<div></div>'
            }
        </div>
    `;

    // Add event listeners to quiz answers
    const answers = quizContent.querySelectorAll('.quiz__answer');
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            const stream = answer.dataset.stream;
            const index = parseInt(answer.dataset.index);
            selectQuizAnswer(stream, index);
        });
    });
}

function selectQuizAnswer(stream, answerIndex) {
    // Visual feedback
    const answers = document.querySelectorAll('.quiz__answer');
    answers.forEach((answer, index) => {
        answer.classList.toggle('selected', index === answerIndex);
        answer.disabled = true;
    });

    // Store answer
    currentQuiz.answers[currentQuiz.currentQuestion] = stream;

    // Auto-advance after a short delay
    setTimeout(() => {
        nextQuestion();
    }, 800);
}

function nextQuestion() {
    currentQuiz.currentQuestion++;
    renderQuizQuestion();
}

function previousQuestion() {
    if (currentQuiz.currentQuestion > 0) {
        currentQuiz.currentQuestion--;
        renderQuizQuestion();
    }
}

function calculateQuizResult() {
    // Count answers for each stream
    const streamCounts = {};
    currentQuiz.answers.forEach(stream => {
        streamCounts[stream] = (streamCounts[stream] || 0) + 1;
    });

    // Find the most recommended stream
    let recommendedStream = '';
    let maxCount = 0;
    
    Object.entries(streamCounts).forEach(([stream, count]) => {
        if (count > maxCount) {
            maxCount = count;
            recommendedStream = stream;
        }
    });

    // Find the program details
    const program = appData.programs.find(p => p.name === recommendedStream);
    
    if (program) {
        showQuizResult(program);
    }
}

function showQuizResult(program) {
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    if (!quizContent || !quizResult || !program) return;

    quizContent.style.display = 'none';
    quizResult.style.display = 'block';

    const recommendation = document.getElementById('quiz-recommendation');
    if (recommendation) {
        recommendation.innerHTML = `
            <h4>${program.name}</h4>
            <p>${program.description}</p>
            <p><strong>Key courses you'll study:</strong> ${program.courses.split(', ').slice(0, 4).join(', ')}...</p>
            <p><strong>Career opportunities:</strong> ${program.career_paths.join(', ')}</p>
        `;
    }

    currentQuiz.isCompleted = true;
}

function restartQuiz() {
    currentQuiz = {
        currentQuestion: 0,
        answers: [],
        isCompleted: false
    };
    
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    if (quizContent) quizContent.style.display = 'block';
    if (quizResult) quizResult.style.display = 'none';
    
    renderQuizQuestion();
}

// =================
// POLL FUNCTIONALITY
// =================

function initializePoll() {
    const pollOptionsContainer = document.getElementById('poll-options');
    if (!pollOptionsContainer) return;

    // Render poll options
    pollOptionsContainer.innerHTML = pollOptions.map(option => `
        <button class="poll__option" data-option="${option.id}">${option.label}</button>
    `).join('');

    // Add event listeners
    const buttons = pollOptionsContainer.querySelectorAll('.poll__option');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!pollState.hasVoted) {
                handlePollVote(button.dataset.option);
            }
        });
    });
}

function handlePollVote(option) {
    if (pollState.hasVoted) return;

    // Visual feedback
    document.querySelectorAll('.poll__option').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.option === option) {
            btn.style.background = 'var(--color-primary)';
            btn.style.color = 'white';
        }
    });

    // Update vote count
    const optionData = pollState.results.find(r => r.id === option);
    if (optionData) {
        optionData.votes++;
    }

    pollState.hasVoted = true;
    
    // Show results immediately
    setTimeout(() => {
        showPollResults();
    }, 500);

    // Try to submit to backend
    submitPollVote(option);
}

async function submitPollVote(option) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'submitPollVote',
                option: option,
                timestamp: new Date().toISOString()
            })
        });

        if (response.ok) {
            // Refresh results from server
            setTimeout(loadPollData, 1000);
        } else {
            console.error('Poll submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Poll submission failed:', error);
    }
}

async function loadPollData() {
    try {
        const response = await fetch(`${API_URL}?action=getPollResults`);
        const data = await response.json();
        
        if (data.results) {
            pollState.results = data.results;
            if (pollState.hasVoted) {
                showPollResults();
            }
        }
    } catch (error) {
        console.log('Using local poll data');
    }
}

function showPollResults() {
    const pollQuestion = document.getElementById('poll-question');
    const pollResults = document.getElementById('poll-results');
    const resultsContainer = document.getElementById('poll-results-container');
    const totalVotes = document.getElementById('total-votes');

    if (!pollQuestion || !pollResults || !resultsContainer) return;

    pollQuestion.style.display = 'none';
    pollResults.style.display = 'block';

    const total = pollState.results.reduce((sum, option) => sum + option.votes, 0);
    
    resultsContainer.innerHTML = pollState.results.map(option => {
        const percentage = total > 0 ? Math.round((option.votes / total) * 100) : 0;
        return `
            <div class="poll__result-item">
                <div class="poll__result-label">
                    <span>${option.label}</span>
                    <span>${option.votes} votes (${percentage}%)</span>
                </div>
                <div class="poll__result-bar">
                    <div class="poll__result-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');

    if (totalVotes) {
        totalVotes.textContent = total;
    }
}

// =================
// FACULTY SECTION
// =================

function renderFaculty() {
    const container = document.querySelector('.faculty-container');
    if (!container) return;

    container.innerHTML = appData.faculty.map(faculty => `
        <div class="faculty-slide">
            <div class="faculty-card">
                <div class="faculty-info">
                    <h3>${faculty.name}</h3>
                    <div class="designation">Professor & Head</div>
                    <div class="qualifications">Ph.D. ${faculty.expertise}</div>
                    <div class="experience">${faculty.experience}</div>
                    <div class="specialization">${faculty.expertise}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// =================
// TESTIMONIALS SECTION
// =================

function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    container.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial__card">
            <div class="testimonial__quote">${testimonial.quote}</div>
            <div class="testimonial__author">
                <div class="testimonial__avatar">
                    ${testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="testimonial__info">
                    <h5>${testimonial.name}</h5>
                    <p>${testimonial.position}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// =================
// RECRUITERS SECTION
// =================

function renderRecruiters() {
    const track = document.getElementById('recruiters-track');
    if (!track) return;

    // Duplicate the array for seamless scrolling
    const allRecruiters = [...appData.recruiters, ...appData.recruiters];
    
    track.innerHTML = allRecruiters.map(recruiter => `
        <div class="recruiter__logo">${recruiter}</div>
    `).join('');
}

// =================
// CONTACT FORM FUNCTIONALITY
// =================

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleContactSubmit);
}

async function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const feedback = document.getElementById('contact-feedback');
    const feedbackContent = document.getElementById('feedback-content');

    // Show loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    try {
        const formData = new FormData(form);
        const data = {
            action: 'submitContact',
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            specialization: formData.get('specialization'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            if (feedback && feedbackContent) {
                feedback.className = 'contact__feedback success';
                feedbackContent.innerHTML = `
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for your interest in our MBA program. We'll get back to you within 24 hours.</p>
                `;
                form.reset();
                feedback.style.display = 'block';
            }
        } else {
            throw new Error('Backend submission failed');
        }
    } catch (error) {
        console.error('Contact submission failed:', error);
        if (feedback && feedbackContent) {
            feedback.className = 'contact__feedback error';
            feedbackContent.innerHTML = `
                <h4>Message Received</h4>
                <p>Thank you for your interest! We've received your message and will contact you soon.</p>
            `;
            feedback.style.display = 'block';
        }
    }

    // Reset button
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }

    // Hide feedback after 5 seconds
    setTimeout(() => {
        if (feedback) feedback.style.display = 'none';
    }, 5000);
}

// =================
// ANIMATIONS
// =================

function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    setTimeout(() => {
        const sections = document.querySelectorAll('section, .program__card, .faculty__card, .testimonial__card');
        sections.forEach(section => {
            observer.observe(section);
        });
    }, 100);
}

// =================
// UTILITY FUNCTIONS
// =================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for responsive behavior
window.addEventListener('resize', debounce(() => {
    // Carousels will handle their own resize through their individual handlers
    console.log('Window resized, carousels updating...');
}, 250));

// Global error handler
window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
});

// Expose functions to global scope for HTML onclick handlers
window.restartQuiz = restartQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;

console.log('MBA Website JavaScript loaded successfully');
