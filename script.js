// Nav bar

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});



// Slide bar
document.addEventListener('DOMContentLoaded', () => {
    const typingTextElement = document.querySelector('.typing-text');
    const slideBackground = document.querySelector('.slide-background');
    const slideTextElement = document.querySelector('.slide-text');
    const welcomeDynamicTextElement = document.querySelector('.welcome-dynamic-text'); // New: Select the dynamic welcome text element

    const slogans = [
        "The Sound Of Secure Growth.",
        "The Sound Of Secure Growth.",
        "The Sound Of Secure Growth."
    ];
    const slideImages = [
        'slides1.jpg',
        'slides2.jpg',
        'slides3.png'
    ];
    const slideTexts = [
        "Insurance\nFor The Better\nFamily Life.",
        "Your Partner In\nFinancial Secure\nAnd Growth.",
        "Celebrating  \nSuccess With \nThe CEO."
    ];
    // New: Array for dynamic welcome texts
    const welcomeTexts = [
        "Welcome to Om Investments Services<br>-Your Partner For Global Insurance Needs.", // Changed \n to <br>
        
        "Welcome to Om Investments Services<br>-Your Trusted Partner In Securing Your Financial Future.", // Changed \n to <br>
        "Welcome to Om Investments Services<br>-Your Partner For Global Insurance Needs." // Changed \n to <br>
    ];


    let sloganIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;

    let slideIndex = 0;

    function typeSlogan() {
        const currentSlogan = slogans[sloganIndex];
        if (!isDeleting) {
            typingTextElement.textContent = currentSlogan.substring(0, charIndex);
            if (charIndex < currentSlogan.length) {
                charIndex++;
                setTimeout(typeSlogan, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeSlogan, pauseBeforeDelete);
            }
        } else {
            typingTextElement.textContent = currentSlogan.substring(0, charIndex);
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeSlogan, deletingSpeed);
            } else {
                isDeleting = false;
                sloganIndex = (sloganIndex + 1) % slogans.length;
                changeSlide();
                setTimeout(typeSlogan, typingSpeed);
            }
        }
    }

    function changeSlide() {
        // Remove active class for smooth transition
        slideTextElement.classList.remove('active');
        welcomeDynamicTextElement.classList.remove('active'); // New: Remove active class for welcome text

        // Change background image
        slideBackground.style.backgroundImage = `url('${slideImages[slideIndex]}')`;

        // Update slide text (handle newlines for three lines)
        slideTextElement.innerHTML = slideTexts[slideIndex].replace(/\n/g, '<br>');

        // New: Update welcome text using innerHTML to render <br>
        welcomeDynamicTextElement.innerHTML = welcomeTexts[slideIndex]; // Changed to innerHTML

        // Add active class after a short delay to allow transition to reset
        setTimeout(() => {
            slideTextElement.classList.add('active');
            welcomeDynamicTextElement.classList.add('active'); // New: Add active class for welcome text
        }, 100);

        slideIndex = (slideIndex + 1) % slideImages.length;
    }

    // Initial call to start the typing effect and first slide
    changeSlide();
    typeSlogan();
});




// about us section

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more general-purpose JavaScript here if needed for other parts of your site.
});

// Insurance Services Section

// Filename: services.js
document.addEventListener('DOMContentLoaded', () => {
    const exploreButtons = document.querySelectorAll('.explore-btn');

    exploreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const serviceType = event.target.dataset.service; // Get the data-service attribute
            console.log(`Explore button clicked for: ${serviceType}`);

            if (serviceType === 'life-insurance') {
                // Navigate to the new life insurance plans page
                window.location.href = 'life_insurance_plans.html';
            } else {
                // For other services, you can implement similar navigation
                // or keep the alert as a placeholder.
                alert(`Explore functionality for ${serviceType} is not yet implemented. A dedicated page would open here.`);
                // Example for other services:
                // window.location.href = `${serviceType}-plans.html`;
            }
        });
    });

    // Add any other dynamic functionality specific to the services page here
});


// Expert fields


function goToServiceSection(sectionId) {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
        // Scroll smoothly to the target section
        targetElement.scrollIntoView({
            behavior: 'smooth', // Makes the scroll animation smooth
            block: 'start'     // Aligns the top of the element with the top of the viewport
        });

        // Optional: Update the URL hash without reloading the page
        // history.pushState(null, '', `#${sectionId}`);
    } else {
        console.warn(`Section with ID "${sectionId}" not found.`);
        alert(`Could not find section: ${sectionId}`);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the very top
    });
    // Optional: Remove the hash from the URL
    // history.pushState(null, '', window.location.pathname);
}

// foarm fields


document.addEventListener('DOMContentLoaded', () => {
    const serviceButtons = document.querySelectorAll('.service-btn');
    const dynamicFields = document.querySelectorAll('.dynamic-field');
    const inquiryForm = document.getElementById('inquiryForm'); // Keep this to reference the form

    // Function to show/hide dynamic fields based on selected service
    const showServiceFields = (serviceType) => {
        dynamicFields.forEach(field => {
            field.classList.add('hidden'); // Hide all dynamic fields first
            // Also, clear values of hidden fields to avoid sending old data
            const inputElement = field.querySelector('input, select');
            if (inputElement) {
                inputElement.value = '';
            }
        });

        switch (serviceType) {
            case 'insurance':
                document.getElementById('insuranceTypeField').classList.remove('hidden');
                break;
            case 'mutual-fund':
                document.getElementById('mutualFundTypeField').classList.remove('hidden');
                break;
            case 'fixed-deposit':
                document.getElementById('fixedDepositTypeField').classList.remove('hidden');
                break;
            case 'other-services':
                document.getElementById('otherServicesTypeField').classList.remove('hidden');
                break;
            default:
                // Do nothing or handle default case
                break;
        }
    };

    // Event listeners for service buttons
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            serviceButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const serviceType = button.dataset.service;
            showServiceFields(serviceType);
        });
    });

    // We no longer prevent default submission if Web3Forms is handling it.
    // However, we still need to set the 'service' field dynamically before submission.
    // Web3Forms automatically adds a hidden field named '_subject' if you want to customize the email subject.
    // You can also add hidden fields for other data to be captured.

    inquiryForm.addEventListener('submit', (event) => {
        // You generally DO NOT need event.preventDefault() here if Web3Forms is handling the submission.
        // If you keep it, you must perform your own fetch/XMLHttpRequest.
        // If you remove it, Web3Forms' script takes over the form submission.

        // Let's modify the form data just before it's sent
        // Create a hidden input for the 'service' field to send the selected service type
        let serviceInput = document.getElementById('selectedServiceInput');
        if (!serviceInput) {
            serviceInput = document.createElement('input');
            serviceInput.type = 'hidden';
            serviceInput.name = 'Service Type'; // Name for the email subject/body
            serviceInput.id = 'selectedServiceInput';
            inquiryForm.appendChild(serviceInput);
        }
        const activeServiceButton = document.querySelector('.service-btn.active');
        if (activeServiceButton) {
            serviceInput.value = activeServiceButton.textContent.trim(); // E.g., "Insurance", "Mutual Fund"
        }

        // Optionally, add a subject for the email dynamically
        let subjectInput = document.getElementById('emailSubjectInput');
        if (!subjectInput) {
            subjectInput = document.createElement('input');
            subjectInput.type = 'hidden';
            subjectInput.name = '_subject'; // Web3Forms special field for email subject
            subjectInput.id = 'emailSubjectInput';
            inquiryForm.appendChild(subjectInput);
        }
        subjectInput.value = `New Inquiry for ${serviceInput.value}`;

        // IMPORTANT: If you want Web3Forms to handle the entire submission (including success message/redirect),
        // you MUST NOT use event.preventDefault() here.
        // The previous commented-out fetch() was for a custom backend; with Web3Forms, it's not needed.

        // If you previously had event.preventDefault() for a custom alert, you should remove it
        // and rely on Web3Forms' built-in responses (e.g., their success page or thank-you message).
        // If you remove event.preventDefault(), your JS alert will no longer show.
        // Web3Forms will show its own default success message or redirect to a thank-you page
        // (which you can configure in their dashboard).

        // No more client-side alert here, let Web3Forms handle the response.
        // alert('Thank you for your inquiry! We will get back to you shortly.'); // REMOVE THIS LINE
    });

    // Initialize by showing the Insurance fields (as it's the default active)
    showServiceFields('insurance');
});


// team insurance in one line


document.addEventListener('DOMContentLoaded', () => {
    const milestoneCounts = document.querySelectorAll('.milestone-count');

    // Function to animate counting
    const animateCount = (element, start, end, duration, isPercentage = false) => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            let currentValue;
            if (isPercentage) {
                currentValue = Math.floor(progress * (end - start) + start);
                element.textContent = `${currentValue}%`;
            } else {
                const finalPlus = element.dataset.target.includes('+') ? '+' : ''; // Check original data-target
                currentValue = Math.floor(progress * (end - start) + start);
                element.textContent = `${currentValue}${finalPlus}`;
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                // Ensure final value is exactly 'end' with '+' or '%' if applicable
                if (isPercentage) {
                    element.textContent = `${end}%`;
                } else {
                    element.textContent = `${end}${element.dataset.target.includes('+') ? '+' : ''}`;
                }
            }
        };
        requestAnimationFrame(step);
    };

    // Observer to trigger animation when section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                milestoneCounts.forEach(item => {
                    const targetValue = parseInt(item.dataset.target);
                    const isPercentage = item.dataset.isPercentage === 'true'; // Check the data attribute
                    if (isNaN(targetValue)) return;

                    const startValue = 0; // Always start from 0 for the animation
                    const duration = 2000; // 2 seconds animation

                    // Set initial text content to 0 before animating
                    item.textContent = isPercentage ? '0%' : '0';

                    animateCount(item, startValue, targetValue, duration, isPercentage);
                });
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    // Observe the milestones section
    const milestonesSection = document.querySelector('.milestones-section');
    if (milestonesSection) {
        observer.observe(milestonesSection);
    }
});



// testimonials

// no need for any code for the testimonial 



// footer


// no need for it



// bottom legal 


document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Copyright Year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // ... (keep your existing JavaScript code for smooth scrolling or other functionalities)
});