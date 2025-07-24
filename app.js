// MBA Website JavaScript - GA4 Tracking Version
// Google Analytics 4 Configuration
const GA4_CONFIG = {
    measurementId: 'G-9FVVBS9GQV', // Replace with your GA4 Measurement ID
    debug: false // Set to true for development
};

// Application data (keeping your original data structure)
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
        "Infosys", "TCS", "HDFC Bank", "ICICI Bank", "Amazon", "Deloitte",
        "Wipro", "Accenture", "IBM", "Microsoft", "Google", "Cognizant",
        "HCL Technologies", "Tech Mahindra", "Bajaj Finserv", "Reliance Industries",
        "Aditya Birla Group", "ITC Limited", "Godrej Group", "Mahindra Group",
        "L&T Infotech", "Mindtree", "Mphasis"
    ]
};

// Quiz questions
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

// Poll options - reset on each page load
const pollOptions = [
    { id: 'career-growth', label: 'Career Growth', votes: 45 },
    { id: 'salary-increase', label: 'Salary Increase', votes: 32 },
    { id: 'industry-network', label: 'Industry Network', votes: 28 },
    { id: 'skill-development', label: 'Skill Development', votes: 67 },
    { id: 'entrepreneurship', label: 'Entrepreneurship', votes: 23 }
];

// Application state
let currentQuiz = {
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    startTime: null,
    userId: null
};

let pollState = {
    hasVoted: false,
    results: [...pollOptions]
};

// Google Analytics 4 Tracking Class
class GA4Tracker {
    constructor(measurementId, debug = false) {
        this.measurementId = measurementId;
        this.debug = debug;
        this.sessionId = this.generateSessionId();
        this.userId = this.getUserId();
        this.initializeGA4();
    }

    initializeGA4() {
        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { dataLayer.push(arguments); };
        
        gtag('js', new Date());
        gtag('config', this.measurementId, {
            debug_mode: this.debug,
            session_id: this.sessionId,
            user_id: this.userId
        });

        if (this.debug) {
            console.log('GA4 initialized with ID:', this.measurementId);
        }
    }

    generateSessionId() {
        return Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getUserId() {
        let userId = localStorage.getItem('kud_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('kud_user_id', userId);
        }
        return userId;
    }

    // Quiz tracking methods
    trackQuizStart() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_start', {
                event_category: 'engagement',
                event_label: 'mba_specialization_quiz',
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });
        }

        if (this.debug) console.log('Quiz started tracked');
    }

    trackQuizQuestion(questionIndex, question, selectedAnswer, stream) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_question_answered', {
                event_category: 'engagement',
                event_label: 'mba_quiz',
                question_number: questionIndex + 1,
                question_text: question,
                selected_answer: selectedAnswer,
                recommended_stream: stream,
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });
        }

        if (this.debug) {
            console.log('Quiz question tracked:', { questionIndex, selectedAnswer, stream });
        }
    }

    trackQuizCompletion(finalStream, allAnswers, timeTaken) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_completed', {
                event_category: 'conversion',
                event_label: 'mba_quiz_completion',
                recommended_stream: finalStream,
                questions_answered: allAnswers.length,
                time_taken_seconds: timeTaken,
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });

            // Track each answer as custom parameters
            allAnswers.forEach((answer, index) => {
                gtag('event', 'quiz_answer_summary', {
                    event_category: 'engagement',
                    question_number: index + 1,
                    selected_stream: answer.stream,
                    answer_text: answer.text,
                    user_id: this.userId
                });
            });
        }

        if (this.debug) {
            console.log('Quiz completion tracked:', { finalStream, timeTaken });
        }
    }

    // Poll tracking methods
    trackPollVote(option) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'poll_vote', {
                event_category: 'engagement',
                event_label: 'mba_motivation_poll',
                selected_option: option,
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });
        }

        if (this.debug) {
            console.log('Poll vote tracked:', option);
        }
    }

    // Contact form tracking methods
    trackContactFormStart() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_start', {
                event_category: 'engagement',
                event_label: 'contact_form',
                form_name: 'mba_contact_form',
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });
        }

        if (this.debug) console.log('Contact form start tracked');
    }

    trackContactFormSubmission(formData) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                event_category: 'conversion',
                event_label: 'contact_form_submission',
                form_name: 'mba_contact_form',
                user_name: formData.name,
                user_email: formData.email,
                message_length: formData.message.length,
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });

            // Mark as conversion
            gtag('event', 'generate_lead', {
                event_category: 'conversion',
                value: 1,
                currency: 'USD'
            });
        }

        if (this.debug) {
            console.log('Contact form submission tracked:', formData.name);
        }
    }

    // Page interaction tracking
    trackProgramInterest(programName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'program_interest', {
                event_category: 'engagement',
                event_label: 'program_click',
                program_name: programName,
                session_id: this.sessionId,
                user_id: this.userId,
                timestamp: new Date().toISOString()
            });
        }

        if (this.debug) {
            console.log('Program interest tracked:', programName);
        }
    }
}

// Initialize GA4 tracker
let ga4Tracker;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize GA4 tracking
    ga4Tracker = new GA4Tracker(GA4_CONFIG.measurementId, GA4_CONFIG.debug);
    
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
    
    // Initialize carousels
    initializeAllCarousels();
    
    // Initialize animations
    initializeAnimations();
}

// =================
// QUIZ FUNCTIONALITY - FIXED
// =================
function initializeQuiz() {
    console.log('Initializing quiz...');
    
    // Reset quiz state
    currentQuiz = {
        currentQuestion: 0,
        answers: [],
        isCompleted: false,
        startTime: Date.now(),
        userId: ga4Tracker ? ga4Tracker.userId : 'anonymous'
    };

    // Check if quiz container exists
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) {
        console.warn('Quiz container not found');
        return;
    }

    // Clear any loading message
    const loadingMessage = quizContainer.querySelector('.loading');
    if (loadingMessage) {
        loadingMessage.style.display = 'none';
    }

    // Render first question immediately
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    if (!quizContent) {
        console.error('Quiz content element not found');
        return;
    }

    console.log('Rendering question:', currentQuiz.currentQuestion);

    // Track quiz start on first question
    if (currentQuiz.currentQuestion === 0 && currentQuiz.answers.length === 0) {
        if (ga4Tracker) ga4Tracker.trackQuizStart();
    }

    // Check if quiz is completed
    if (currentQuiz.currentQuestion >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    const question = quizQuestions[currentQuiz.currentQuestion];
    
    quizContent.innerHTML = `
        <div class="quiz__progress">
            <div class="quiz__progress-bar">
                <div class="quiz__progress-fill" style="width: ${(currentQuiz.currentQuestion / quizQuestions.length) * 100}%"></div>
            </div>
            <span class="quiz__progress-text">Question ${currentQuiz.currentQuestion + 1} of ${quizQuestions.length}</span>
        </div>
        
        <div class="quiz__question">
            <h3>${question.question}</h3>
            <div class="quiz__answers">
                ${question.answers.map((answer, index) => `
                    <button class="quiz__answer" onclick="selectAnswer(${index})" data-answer="${index}">
                        ${answer.text}
                    </button>
                `).join('')}
            </div>
        </div>
        
        <div class="quiz__navigation">
            ${currentQuiz.currentQuestion > 0 ? '<button class="quiz__btn quiz__btn--secondary" onclick="previousQuestion()">Previous</button>' : ''}
        </div>
    `;

    quizContent.style.display = 'block';
    if (quizResult) quizResult.style.display = 'none';
}

function selectAnswer(answerIndex) {
    console.log('Answer selected:', answerIndex);
    
    const question = quizQuestions[currentQuiz.currentQuestion];
    const selectedAnswer = question.answers[answerIndex];
    
    // Track the answer
    if (ga4Tracker) {
        ga4Tracker.trackQuizQuestion(
            currentQuiz.currentQuestion,
            question.question,
            selectedAnswer.text,
            selectedAnswer.stream
        );
    }
    
    // Store the answer
    currentQuiz.answers[currentQuiz.currentQuestion] = selectedAnswer;
    
    // Visual feedback
    const buttons = document.querySelectorAll('.quiz__answer');
    buttons.forEach((btn, index) => {
        if (index === answerIndex) {
            btn.classList.add('selected');
            btn.style.backgroundColor = '#1a365d';
            btn.style.color = 'white';
        } else {
            btn.classList.remove('selected');
            btn.disabled = true;
            btn.style.opacity = '0.5';
        }
    });
    
    // Auto-advance after a short delay
    setTimeout(() => {
        nextQuestion();
    }, 800);
}

function nextQuestion() {
    if (currentQuiz.currentQuestion < quizQuestions.length - 1) {
        currentQuiz.currentQuestion++;
        renderQuizQuestion();
    } else {
        showQuizResult();
    }
}

function previousQuestion() {
    if (currentQuiz.currentQuestion > 0) {
        currentQuiz.currentQuestion--;
        renderQuizQuestion();
    }
}

function showQuizResult() {
    const timeTaken = Math.round((Date.now() - currentQuiz.startTime) / 1000);
    
    // Calculate most recommended stream
    const streamCounts = {};
    currentQuiz.answers.forEach(answer => {
        streamCounts[answer.stream] = (streamCounts[answer.stream] || 0) + 1;
    });
    
    const recommendedStream = Object.keys(streamCounts).reduce((a, b) => 
        streamCounts[a] > streamCounts[b] ? a : b
    );
    
    // Track quiz completion
    if (ga4Tracker) {
        ga4Tracker.trackQuizCompletion(recommendedStream, currentQuiz.answers, timeTaken);
    }
    
    const program = appData.programs.find(p => p.name === recommendedStream);
    
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    if (quizContent) quizContent.style.display = 'none';
    if (quizResult) {
        quizResult.innerHTML = `
            <div class="quiz__result">
                <div class="quiz__result-header">
                    <div class="quiz__result-icon">🎯</div>
                    <h3>Your Recommended MBA Specialization</h3>
                </div>
                
                <div class="quiz__result-content">
                    <h2 class="quiz__result-stream">${recommendedStream}</h2>
                    <p class="quiz__result-description">${program ? program.description : ''}</p>
                    
                    <div class="quiz__result-details">
                        <h4>Why this specialization?</h4>
                        <p>Based on your responses, you show strong alignment with ${recommendedStream} roles and responsibilities.</p>
                        
                        ${program ? `
                            <h4>Career Opportunities:</h4>
                            <ul>
                                ${program.career_paths.map(path => `<li>${path}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                    
                    <div class="quiz__result-actions">
                        <button class="quiz__btn quiz__btn--primary" onclick="scrollToSection('contact')">
                            Get More Information
                        </button>
                        <button class="quiz__btn quiz__btn--secondary" onclick="restartQuiz()">
                            Retake Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;
        quizResult.style.display = 'block';
    }
    
    currentQuiz.isCompleted = true;
}

function restartQuiz() {
    console.log('Restarting quiz...');
    
    currentQuiz = {
        currentQuestion: 0,
        answers: [],
        isCompleted: false,
        startTime: Date.now(),
        userId: ga4Tracker ? ga4Tracker.userId : 'anonymous'
    };
    
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    if (quizContent) quizContent.style.display = 'block';
    if (quizResult) quizResult.style.display = 'none';
    
    renderQuizQuestion();
}

// =================
// POLL FUNCTIONALITY - FIXED RESET ISSUE
// =================
function initializePoll() {
    console.log('Initializing poll...');
    
    const pollOptionsContainer = document.getElementById('poll-options');
    if (!pollOptionsContainer) {
        console.warn('Poll options container not found');
        return;
    }

    // Reset poll state on each page load (no persistence)
    pollState = {
        hasVoted: false,
        results: [...pollOptions] // Fresh copy of original data
    };

    // Clear any existing vote state
    localStorage.removeItem('kud_poll_voted');
    
    renderPollOptions();
}

function renderPollOptions() {
    const pollOptionsContainer = document.getElementById('poll-options');
    const pollQuestion = document.getElementById('poll-question');
    const pollResults = document.getElementById('poll-results');
    
    if (!pollOptionsContainer) return;

    // Show question, hide results
    if (pollQuestion) pollQuestion.style.display = 'block';
    if (pollResults) pollResults.style.display = 'none';

    // Render poll options
    pollOptionsContainer.innerHTML = pollOptions.map(option => `
        <button class="poll__option" data-option="${option.id}">
            <span class="poll__option-text">${option.label}</span>
        </button>
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

    console.log('Poll vote:', option);

    // Track the vote
    if (ga4Tracker) {
        ga4Tracker.trackPollVote(option);
    }
    
    // Visual feedback
    document.querySelectorAll('.poll__option').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.option === option) {
            btn.style.background = '#1a365d';
            btn.style.color = 'white';
        }
    });

    // Update vote count locally
    const optionData = pollState.results.find(r => r.id === option);
    if (optionData) {
        optionData.votes++;
    }

    pollState.hasVoted = true;
    
    // Show results after delay
    setTimeout(() => {
        showPollResults();
    }, 1000);
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

    resultsContainer.innerHTML = pollState.results
        .sort((a, b) => b.votes - a.votes)
        .map(option => {
            const percentage = total > 0 ? Math.round((option.votes / total) * 100) : 0;
            return `
                <div class="poll__result-item">
                    <div class="poll__result-header">
                        <span class="poll__result-label">${option.label}</span>
                        <span class="poll__result-percentage">${percentage}%</span>
                    </div>
                    <div class="poll__result-bar">
                        <div class="poll__result-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="poll__result-votes">${option.votes} votes</span>
                </div>
            `;
        }).join('');

    if (totalVotes) {
        totalVotes.textContent = `${total} total votes`;
    }
}

// =================
// CONTACT FORM WITH GA4 TRACKING
// =================
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Track when user starts interacting with form
    let formStartTracked = false;
    const formInputs = form.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (!formStartTracked) {
                if (ga4Tracker) ga4Tracker.trackContactFormStart();
                formStartTracked = true;
            }
        });
    });

    form.addEventListener('submit', handleContactSubmission);
}

async function handleContactSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const feedback = document.getElementById('contact-feedback');
    const feedbackContent = document.getElementById('feedback-content');
    
    // Collect form data
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone ? form.phone.value.trim() : '',
        message: form.message.value.trim(),
        timestamp: new Date().toISOString()
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        showContactError('Please fill in all required fields.');
        return;
    }
    
    if (!isValidEmail(formData.email)) {
        showContactError('Please enter a valid email address.');
        return;
    }
    
    // Update UI
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
    }
    
    try {
        // Track successful submission
        if (ga4Tracker) {
            ga4Tracker.trackContactFormSubmission(formData);
        }
        
        // Show success message
        if (feedback && feedbackContent) {
            feedback.className = 'contact__feedback success';
            feedbackContent.innerHTML = `
                <strong>Thank you, ${formData.name}!</strong><br>
                We've received your inquiry and will contact you within 24 hours at ${formData.email}.
            `;
            feedback.style.display = 'block';
        }
        
        // Reset form
        form.reset();
        
        // Store lead data locally for future reference
        storeLeadData(formData);
        
    } catch (error) {
        console.error('Contact submission error:', error);
        showContactError('Thank you for your interest! We have received your message.');
    }
    
    // Reset button
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
    
    // Hide feedback after 8 seconds
    setTimeout(() => {
        if (feedback) feedback.style.display = 'none';
    }, 8000);
}

function showContactError(message) {
    const feedback = document.getElementById('contact-feedback');
    const feedbackContent = document.getElementById('feedback-content');
    
    if (feedback && feedbackContent) {
        feedback.className = 'contact__feedback error';
        feedbackContent.innerHTML = message;
        feedback.style.display = 'block';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function storeLeadData(formData) {
    const leads = JSON.parse(localStorage.getItem('kud_leads') || '[]');
    leads.push({
        ...formData,
        id: Date.now(),
        source: 'website_contact_form'
    });
    localStorage.setItem('kud_leads', JSON.stringify(leads));
}

// =================
// PROGRAMS SECTION WITH TRACKING
// =================
function renderPrograms() {
    const container = document.getElementById('programs-carousel');
    if (!container) return;

    container.innerHTML = appData.programs.map(program => `
        <div class="program__card" data-program="${program.name}">
            <div class="program__header">
                <h3 class="program__title">${program.name}</h3>
                <p class="program__description">${program.description}</p>
            </div>
            
            <div class="program__content">
                <div class="program__courses">
                    <strong>Key Courses:</strong>
                    <p>${program.courses.split(', ').slice(0, 4).join(', ')}...</p>
                </div>
                
                <div class="program__careers">
                    <strong>Career Opportunities:</strong>
                    <p>${program.career_paths.join(', ')}</p>
                </div>
            </div>
            
            <div class="program__footer">
                <button class="program__btn" onclick="trackProgramInterest('${program.name}')">
                    Learn More
                </button>
            </div>
        </div>
    `).join('');
}

function trackProgramInterest(programName) {
    if (ga4Tracker) {
        ga4Tracker.trackProgramInterest(programName);
    }
    
    // Scroll to contact section
    setTimeout(() => {
        scrollToSection('contact');
    }, 300);
}

// =================
// CAROUSEL SYSTEM (keeping your original system)
// =================
function makeCarousel({ containerSelector, prevSelector, nextSelector, cardGap = 16, autoPlay = false, autoPlayInterval = 5000, cardWidth = null, visibleCards = null }) {
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
        
        const translateX = -index * getCardWidth();
        container.style.transform = `translateX(${translateX}px)`;
        
        const maxIndex = Math.max(0, container.children.length - getVisibleCards());
        prev.disabled = index === 0;
        next.disabled = index >= maxIndex;
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    };
    
    const moveCarousel = (direction) => {
        if (isAnimating) return;
        const maxIndex = Math.max(0, container.children.length - getVisibleCards());
        index = Math.max(0, Math.min(index + direction, maxIndex));
        updateCarousel();
    };
    
    const nextSlide = () => {
        const maxIndex = Math.max(0, container.children.length - getVisibleCards());
        if (index >= maxIndex && autoPlay) {
            index = 0;
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
    
    return {
        nextSlide,
        prevSlide,
        destroy: () => {
            stopAutoPlay();
            window.removeEventListener('resize', handleResize);
        }
    };
}

function initializeAllCarousels() {
    // Programs Carousel
    const programsCarousel = makeCarousel({
        containerSelector: '#programs-carousel',
        prevSelector: '#programs-prev',
        nextSelector: '#programs-next',
        autoPlay: true,
        autoPlayInterval: 4000,
        visibleCards: 2,
        cardGap: 24,
        cardWidth: 374
    });
    
    // Faculty Carousel
    const facultyCarousel = makeCarousel({
        containerSelector: '.faculty-container',
        prevSelector: '#facultyPrev',
        nextSelector: '#facultyNext',
        autoPlay: true,
        autoPlayInterval: 4000,
        cardGap: 16,
        cardWidth: 296
    });
    
    // Campus Carousel (if exists)
    const campusCarousel = makeCarousel({
        containerSelector: '.campus-container',
        prevSelector: '#campusPrev',
        nextSelector: '#campusNext',
        visibleCards: 2,
        autoPlay: true,
        autoPlayInterval: 6000,
        cardGap: 16,
        cardWidth: 366
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
// RENDER FUNCTIONS
// =================
function renderFaculty() {
    const container = document.querySelector('.faculty-container');
    if (!container) return;
    
    container.innerHTML = appData.faculty.map(member => `
        <div class="faculty__card">
            <div class="faculty__info">
                <h3 class="faculty__name">${member.name}</h3>
                <p class="faculty__expertise">${member.expertise}</p>
                <p class="faculty__experience">${member.experience}</p>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.querySelector('.testimonials-container');
    if (!container) return;
    
    container.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial__card">
            <blockquote class="testimonial__quote">
                "${testimonial.quote}"
            </blockquote>
            <div class="testimonial__author">
                <strong>${testimonial.name}</strong>
                <span>${testimonial.position}</span>
            </div>
        </div>
    `).join('');
}

function renderRecruiters() {
    const container = document.querySelector('.recruiters-grid');
    if (!container) return;
    
    container.innerHTML = appData.recruiters.map(recruiter => `
        <div class="recruiter__item">
            <span class="recruiter__name">${recruiter}</span>
        </div>
    `).join('');
}

// =================
// ANIMATIONS
// =================
function initializeAnimations() {
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

// Handle window resize
window.addEventListener('resize', debounce(() => {
    console.log('Window resized, carousels updating...');
}, 250));

// Global error handler
window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
    if (ga4Tracker && typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
            event_category: 'error',
            error_message: event.error.message,
            error_filename: event.filename,
            error_lineno: event.lineno
        });
    }
});

// Expose functions to global scope for HTML onclick handlers
window.restartQuiz = restartQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.trackProgramInterest = trackProgramInterest;
window.selectAnswer = selectAnswer;

console.log('MBA Website JavaScript with GA4 tracking loaded successfully');
