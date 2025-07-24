// MBA Website JavaScript - GA4 Tracking Version with Enhanced Form Handler
// Google Analytics 4 Configuration
const GA4_CONFIG = {
    measurementId: 'G-9FVVBS9GQV', // Your GA4 Measurement ID
    debug: true // Set to true for development
};

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
    constructor(measurementId, debug = true) {
        this.measurementId = measurementId;
        this.debug = debug;
        this.sessionId = this.generateSessionId();
        this.userId = this.getUserId();
        this.initializeGA4();
    }

    initializeGA4() {
        // Check if gtag is already loaded
        if (typeof gtag !== 'undefined') {
            console.log('gtag already exists, configuring...');
            this.configureGA4();
            return;
        }

        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        script.onload = () => {
            console.log('GA4 script loaded successfully');
            this.configureGA4();
        };
        script.onerror = () => {
            console.error('Failed to load GA4 script');
        };
        document.head.appendChild(script);
    }

    configureGA4() {
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { 
            dataLayer.push(arguments);
            if (this.debug) {
                console.log('gtag called with:', arguments);
            }
        }.bind(this);
        
        gtag('js', new Date());
        gtag('config', this.measurementId, {
            debug_mode: this.debug,
            send_page_view: true
        });

        if (this.debug) {
            console.log('GA4 configured with ID:', this.measurementId);
        }

        // Test connection
        this.testConnection();
    }

    testConnection() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'ga4_test_connection', {
                event_category: 'debug',
                event_label: 'connection_test',
                test_timestamp: new Date().toISOString()
            });
            console.log('GA4 test event sent');
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
        if (typeof gtag === 'undefined') {
            console.error('gtag not available for quiz_start event');
            return;
        }

        gtag('event', 'quiz_start', {
            event_category: 'engagement',
            event_label: 'mba_specialization_quiz',
            session_id: this.sessionId,
            user_id: this.userId
        });

        if (this.debug) console.log('Quiz start event tracked');
    }

    trackQuizQuestion(questionIndex, question, selectedAnswer, stream) {
        if (typeof gtag === 'undefined') {
            console.error('gtag not available for quiz_question_answered event');
            return;
        }

        gtag('event', 'quiz_question_answered', {
            event_category: 'engagement',
            question_number: questionIndex + 1,
            selected_answer: selectedAnswer,
            recommended_stream: stream,
            session_id: this.sessionId,
            user_id: this.userId
        });

        if (this.debug) {
            console.log('Quiz question tracked:', { questionIndex, selectedAnswer, stream });
        }
    }

    trackQuizCompletion(finalStream, allAnswers, timeTaken) {
        if (typeof gtag === 'undefined') {
            console.error('gtag not available for quiz_completed event');
            return;
        }

        gtag('event', 'quiz_completed', {
            event_category: 'conversion',
            event_label: 'mba_quiz_completion',
            recommended_stream: finalStream,
            questions_answered: allAnswers.length,
            time_taken_seconds: timeTaken,
            session_id: this.sessionId,
            user_id: this.userId
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

        if (this.debug) {
            console.log('Quiz completion tracked:', { finalStream, timeTaken });
        }
    }

    // Poll tracking methods
    trackPollVote(option) {
        if (typeof gtag === 'undefined') {
            console.error('gtag not available for poll_vote event');
            return;
        }

        gtag('event', 'poll_vote', {
            event_category: 'engagement',
            selected_option: option,
            session_id: this.sessionId,
            user_id: this.userId
        });

        if (this.debug) {
            console.log('Poll vote tracked:', option);
        }
    }

    // Program interest tracking
    trackProgramInterest(programName) {
        if (typeof gtag === 'undefined') {
            console.error('gtag not available for program_interest event');
            return;
        }

        gtag('event', 'program_interest', {
            event_category: 'engagement',
            event_label: 'program_click',
            program_name: programName,
            session_id: this.sessionId,
            user_id: this.userId
        });

        if (this.debug) {
            console.log('Program interest tracked:', programName);
        }
    }
}

// Enhanced Contact Form Handler with Complete Data Capture
class ContactFormHandler {
    constructor(ga4Tracker) {
        this.ga4Tracker = ga4Tracker;
        this.form = null;
        this.isSubmitting = false;
        this.formStartTracked = false;
        this.init();
    }

    init() {
        this.form = document.getElementById('contact-form');
        if (!this.form) {
            console.warn('Contact form not found');
            return;
        }

        this.setupEventListeners();
        console.log('Contact form handler initialized');
    }

    setupEventListeners() {
        // Track form start on first interaction
        const formInputs = this.form.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => this.handleFormStart(), { once: true });
        });

        // Handle form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        formInputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });

        // Track dropdown changes specifically
        const programSelect = this.form.querySelector('[name="program"]');
        if (programSelect) {
            programSelect.addEventListener('change', (e) => {
                console.log('Program selected:', e.target.value);
                this.trackDropdownSelection(e.target.value);
            });
        }
    }

    handleFormStart() {
        if (!this.formStartTracked) {
            this.trackFormStart();
            this.formStartTracked = true;
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        if (this.isSubmitting) return;

        console.log('Form submission started');
        
        // Collect all form data with enhanced details
        const formData = this.collectComprehensiveFormData();
        console.log('Complete form data collected:', formData);

        // Display captured data in console for verification
        this.displayCapturedData(formData);

        // Validate form
        const validation = this.validateForm(formData);
        if (!validation.isValid) {
            this.showValidationErrors(validation.errors);
            this.trackFormError('Validation failed: ' + validation.errors.join(', '));
            return;
        }

        // Start submission process
        this.startSubmission();

        try {
            // Process the submission
            await this.processSubmission(formData);
            
            // Track successful submission with all details
            this.trackFormSubmission(formData);
            
            // Show success and reset
            this.showSuccess(formData);
            this.resetForm();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.trackFormError(error.message);
            this.showError('There was an error submitting your form. Please try again.');
        } finally {
            this.endSubmission();
        }
    }

    collectComprehensiveFormData() {
        const formData = {};
        const formElements = this.form.elements;

        // Collect all form field values
        for (let element of formElements) {
            if (element.name && element.type !== 'submit') {
                if (element.type === 'checkbox') {
                    formData[element.name] = element.checked;
                } else if (element.type === 'radio') {
                    if (element.checked) {
                        formData[element.name] = element.value;
                    }
                } else {
                    formData[element.name] = element.value.trim();
                }
            }
        }

        // Enhanced contact details collection
        const contactDetails = {
            fullName: formData.name || '',
            emailAddress: formData.email || '',
            phoneNumber: formData.phone || '',
            programInterest: formData.program || 'Not specified',
            message: formData.message || '',
            honeypot: formData.website || '' // spam check
        };

        // Additional metadata
        const metadata = {
            submissionId: 'KUD_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
            timestamp: new Date().toISOString(),
            submissionDate: new Date().toLocaleDateString('en-IN'),
            submissionTime: new Date().toLocaleTimeString('en-IN'),
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'Direct',
            currentUrl: window.location.href,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            windowSize: `${window.innerWidth}x${window.innerHeight}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            platform: navigator.platform
        };

        // Form interaction tracking
        const interactionData = {
            timeSpentOnForm: this.getFormInteractionTime(),
            fieldInteractionCount: this.getFieldInteractionCount(),
            formStartTime: this.formStartTime || new Date().toISOString(),
            formEndTime: new Date().toISOString()
        };

        // Combine all data
        return {
            ...formData,
            contactDetails,
            metadata,
            interactionData,
            // Individual fields for easy access
            name: contactDetails.fullName,
            email: contactDetails.emailAddress,
            phone: contactDetails.phoneNumber,
            program: contactDetails.programInterest,
            message: contactDetails.message
        };
    }

    displayCapturedData(formData) {
        console.group('📋 CAPTURED FORM DATA');
        console.log('👤 Contact Details:');
        console.table(formData.contactDetails);
        
        console.log('📊 Form Metadata:');
        console.table(formData.metadata);
        
        console.log('⏱️ Interaction Data:');
        console.table(formData.interactionData);
        
        console.log('💬 Message Content:');
        console.log(formData.contactDetails.message);
        
        console.log('🎯 Selected Program:');
        console.log(formData.contactDetails.programInterest);
        console.groupEnd();
    }

    getFormInteractionTime() {
        if (this.formStartTime) {
            return Math.round((Date.now() - this.formStartTime) / 1000);
        }
        return 0;
    }

    getFieldInteractionCount() {
        // This could be enhanced to track actual field interactions
        const filledFields = [
            this.form.name?.value,
            this.form.email?.value,
            this.form.phone?.value,
            this.form.program?.value,
            this.form.message?.value
        ].filter(field => field && field.trim().length > 0);
        
        return filledFields.length;
    }

    validateForm(formData) {
        const errors = [];
        
        // Required field validation
        if (!formData.contactDetails.fullName || formData.contactDetails.fullName.length < 2) {
            errors.push('Name must be at least 2 characters long');
            this.markFieldError('name');
        }

        if (!formData.contactDetails.emailAddress || !this.isValidEmail(formData.contactDetails.emailAddress)) {
            errors.push('Please enter a valid email address');
            this.markFieldError('email');
        }

        if (!formData.contactDetails.message || formData.contactDetails.message.length < 10) {
            errors.push('Message must be at least 10 characters long');
            this.markFieldError('message');
        }

        // Honeypot check
        if (formData.contactDetails.honeypot) {
            errors.push('Spam detected');
        }

        // Phone validation (if provided)
        if (formData.contactDetails.phoneNumber && formData.contactDetails.phoneNumber.length > 0) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(formData.contactDetails.phoneNumber.replace(/[\s\-\(\)]/g, ''))) {
                errors.push('Please enter a valid phone number');
                this.markFieldError('phone');
            }
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    markFieldError(fieldName) {
        const field = this.form.querySelector(`[name="${fieldName}"]`);
        if (field) {
            field.classList.add('error');
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters long';
                }
                break;
            case 'email':
                if (!this.isValidEmail(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters long';
                }
                break;
        }

        if (isValid) {
            this.clearFieldError(field);
        } else {
            this.markFieldError(fieldName);
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    async processSubmission(formData) {
        // Simulate processing time for better UX
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Store the comprehensive submission data
        this.storeComprehensiveSubmissionData(formData);
        
        return { success: true, data: formData };
    }

    storeComprehensiveSubmissionData(formData) {
        try {
            // Store complete form submissions
            const submissions = JSON.parse(localStorage.getItem('kud_form_submissions') || '[]');
            submissions.push({
                ...formData,
                storageTimestamp: new Date().toISOString()
            });
            localStorage.setItem('kud_form_submissions', JSON.stringify(submissions));
            
            // Store lead data for analytics
            const leads = JSON.parse(localStorage.getItem('kud_leads') || '[]');
            leads.push({
                submissionId: formData.metadata.submissionId,
                name: formData.contactDetails.fullName,
                email: formData.contactDetails.emailAddress,
                phone: formData.contactDetails.phoneNumber,
                program: formData.contactDetails.programInterest,
                message: formData.contactDetails.message,
                source: 'website_contact_form',
                submittedAt: formData.metadata.timestamp,
                referrer: formData.metadata.referrer,
                userAgent: formData.metadata.userAgent
            });
            localStorage.setItem('kud_leads', JSON.stringify(leads));
            
            // Store detailed contact details separately
            const contactDetails = JSON.parse(localStorage.getItem('kud_contact_details') || '[]');
            contactDetails.push({
                id: formData.metadata.submissionId,
                fullName: formData.contactDetails.fullName,
                email: formData.contactDetails.emailAddress,
                phone: formData.contactDetails.phoneNumber,
                programSelected: formData.contactDetails.programInterest,
                messageContent: formData.contactDetails.message,
                submissionDate: formData.metadata.submissionDate,
                submissionTime: formData.metadata.submissionTime,
                interactionTime: formData.interactionData.timeSpentOnForm,
                fieldsCompleted: formData.interactionData.fieldInteractionCount
            });
            localStorage.setItem('kud_contact_details', JSON.stringify(contactDetails));
            
            console.log('✅ Complete form data stored successfully');
            console.log('📊 Submission ID:', formData.metadata.submissionId);
            
        } catch (error) {
            console.error('❌ Error storing form data:', error);
        }
    }

    startSubmission() {
        this.isSubmitting = true;
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        submitBtn.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline';
        
        // Fallback if no specific elements found
        if (!btnText && !btnLoading) {
            submitBtn.textContent = 'Submitting...';
        }
    }

    endSubmission() {
        this.isSubmitting = false;
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnLoading) btnLoading.style.display = 'none';
        
        // Fallback if no specific elements found
        if (!btnText && !btnLoading) {
            submitBtn.textContent = 'Send Message';
        }
    }

    showValidationErrors(errors) {
        const errorMessage = errors.join('<br>');
        this.showError(errorMessage);
    }

    showSuccess(formData) {
        const feedback = document.getElementById('contact-feedback');
        const feedbackContent = document.getElementById('feedback-content');
        
        if (feedback && feedbackContent) {
            feedback.className = 'contact__feedback success';
            feedbackContent.innerHTML = `
                <strong>Thank you, ${formData.contactDetails.fullName}!</strong><br>
                <p>We've received your inquiry about our MBA program and will contact you within 24 hours.</p>
                <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 5px; font-size: 14px;">
                    <strong>📋 Your Submission Details:</strong><br>
                    <strong>Name:</strong> ${formData.contactDetails.fullName}<br>
                    <strong>Email:</strong> ${formData.contactDetails.emailAddress}<br>
                    ${formData.contactDetails.phoneNumber ? `<strong>Phone:</strong> ${formData.contactDetails.phoneNumber}<br>` : ''}
                    <strong>Program Interest:</strong> ${formData.contactDetails.programInterest}<br>
                    <strong>Message:</strong> ${formData.contactDetails.message.substring(0, 100)}${formData.contactDetails.message.length > 100 ? '...' : ''}<br>
                    <strong>Submission ID:</strong> ${formData.metadata.submissionId}
                </div>
            `;
            feedback.style.display = 'block';
            
            // Auto-hide after 15 seconds for detailed view
            setTimeout(() => {
                if (feedback) feedback.style.display = 'none';
            }, 15000);
        }
    }

    showError(message) {
        const feedback = document.getElementById('contact-feedback');
        const feedbackContent = document.getElementById('feedback-content');
        
        if (feedback && feedbackContent) {
            feedback.className = 'contact__feedback error';
            feedbackContent.innerHTML = message;
            feedback.style.display = 'block';
            
            // Auto-hide after 8 seconds
            setTimeout(() => {
                if (feedback) feedback.style.display = 'none';
            }, 8000);
        }
    }

    resetForm() {
        this.form.reset();
        this.formStartTracked = false;
        this.formStartTime = null;
        
        // Clear all error states
        const errorFields = this.form.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
        
        const errorMessages = this.form.querySelectorAll('.field-error');
        errorMessages.forEach(msg => msg.remove());
    }

    // GA4 Tracking Methods with Enhanced Data
    trackFormStart() {
        this.formStartTime = Date.now();
        
        if (this.ga4Tracker && typeof gtag !== 'undefined') {
            gtag('event', 'form_start', {
                event_category: 'engagement',
                event_label: 'contact_form_start',
                form_name: 'mba_contact_form',
                start_timestamp: new Date().toISOString()
            });
            console.log('📊 Form start tracked');
        }
    }

    trackDropdownSelection(selectedProgram) {
        if (this.ga4Tracker && typeof gtag !== 'undefined') {
            gtag('event', 'program_dropdown_selection', {
                event_category: 'engagement',
                event_label: 'program_selection',
                selected_program: selectedProgram,
                form_name: 'mba_contact_form'
            });
            console.log('📊 Program dropdown selection tracked:', selectedProgram);
        }
    }

    trackFormSubmission(formData) {
        if (this.ga4Tracker && typeof gtag !== 'undefined') {
            // Main form submission event with all details
            gtag('event', 'form_submit', {
                event_category: 'conversion',
                event_label: 'contact_form_submission',
                form_name: 'mba_contact_form',
                submission_id: formData.metadata.submissionId,
                // Contact details
                user_name: formData.contactDetails.fullName,
                user_email: formData.contactDetails.emailAddress,
                user_phone: formData.contactDetails.phoneNumber || 'not_provided',
                program_interest: formData.contactDetails.programInterest,
                message_length: formData.contactDetails.message.length,
                message_preview: formData.contactDetails.message.substring(0, 50),
                // Interaction data
                time_spent_on_form: formData.interactionData.timeSpentOnForm,
                fields_completed: formData.interactionData.fieldInteractionCount,
                // Metadata
                referrer_source: formData.metadata.referrer,
                submission_date: formData.metadata.submissionDate,
                submission_time: formData.metadata.submissionTime
            });

            // Lead generation conversion event
            gtag('event', 'generate_lead', {
                event_category: 'conversion',
                event_label: 'mba_inquiry',
                value: 1,
                currency: 'USD',
                lead_source: 'website_contact_form',
                program_interest: formData.contactDetails.programInterest,
                contact_quality: this.assessContactQuality(formData)
            });

            console.log('📊 Complete form submission tracked:', {
                submissionId: formData.metadata.submissionId,
                name: formData.contactDetails.fullName,
                email: formData.contactDetails.emailAddress,
                program: formData.contactDetails.programInterest,
                messageLength: formData.contactDetails.message.length
            });
        }
    }

    assessContactQuality(formData) {
        let score = 0;
        if (formData.contactDetails.fullName.length > 5) score += 1;
        if (formData.contactDetails.phoneNumber) score += 1;
        if (formData.contactDetails.programInterest !== 'Not specified') score += 1;
        if (formData.contactDetails.message.length > 50) score += 1;
        if (formData.interactionData.timeSpentOnForm > 30) score += 1;
        
        if (score >= 4) return 'high';
        if (score >= 2) return 'medium';
        return 'low';
    }

    trackFormError(errorMessage) {
        if (this.ga4Tracker && typeof gtag !== 'undefined') {
            gtag('event', 'form_error', {
                event_category: 'error',
                event_label: 'contact_form_error',
                error_message: errorMessage,
                form_name: 'mba_contact_form',
                error_timestamp: new Date().toISOString()
            });
            console.log('📊 Form error tracked:', errorMessage);
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
// QUIZ FUNCTIONALITY
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
    const quizContainer = document.getElementById('quiz');
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
// POLL FUNCTIONALITY
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
// CONTACT FORM INITIALIZATION
// =================
function initializeContactForm() {
    // Initialize the enhanced contact form handler
    if (typeof ga4Tracker !== 'undefined') {
        window.contactFormHandler = new ContactFormHandler(ga4Tracker);
    } else {
        console.warn('GA4 tracker not available, form will work without tracking');
        window.contactFormHandler = new ContactFormHandler(null);
    }
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
// CAROUSEL SYSTEM
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

// Enhanced debug functions to view captured contact data
function viewStoredFormData() {
    const submissions = JSON.parse(localStorage.getItem('kud_form_submissions') || '[]');
    const leads = JSON.parse(localStorage.getItem('kud_leads') || '[]');
    const contactDetails = JSON.parse(localStorage.getItem('kud_contact_details') || '[]');
    
    console.group('📊 STORED FORM DATA');
    console.log('📝 Complete Submissions:', submissions);
    console.log('🎯 Lead Data:', leads);
    console.log('📞 Contact Details:', contactDetails);
    console.groupEnd();
    
    return { submissions, leads, contactDetails };
}

function viewContactDetails() {
    const contactDetails = JSON.parse(localStorage.getItem('kud_contact_details') || '[]');
    
    console.group('📞 CONTACT DETAILS');
    contactDetails.forEach((contact, index) => {
        console.log(`📋 Contact ${index + 1}:`);
        console.table({
            'ID': contact.id,
            'Name': contact.fullName,
            'Email': contact.email,
            'Phone': contact.phone,
            'Program': contact.programSelected,
            'Message': contact.messageContent.substring(0, 100) + '...',
            'Date': contact.submissionDate,
            'Time': contact.submissionTime
        });
    });
    console.groupEnd();
    
    return contactDetails;
}

function exportContactData() {
    const contactDetails = JSON.parse(localStorage.getItem('kud_contact_details') || '[]');
    
    if (contactDetails.length === 0) {
        console.log('No contact data to export');
        return;
    }
    
    // Create CSV format
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Program', 'Message', 'Date', 'Time'];
    const csvContent = [
        headers.join(','),
        ...contactDetails.map(contact => [
            contact.id,
            `"${contact.fullName}"`,
            contact.email,
            contact.phone || '',
            `"${contact.programSelected}"`,
            `"${contact.messageContent.replace(/"/g, '""')}"`,
            contact.submissionDate,
            contact.submissionTime
        ].join(','))
    ].join('\n');
    
    // Download as file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kud_contact_data_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    console.log('✅ Contact data exported successfully');
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
window.viewStoredFormData = viewStoredFormData;
window.viewContactDetails = viewContactDetails;
window.exportContactData = exportContactData;

console.log('✅ MBA Website JavaScript with enhanced contact form handler loaded successfully');
