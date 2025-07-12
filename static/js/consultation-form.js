// Consultation form functionality for Industrial IoT Lab Static Site

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultationForm');
    const formStatus = document.getElementById('formStatus');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formStatus = document.getElementById('formStatus');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    try {
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const organization = formData.get('organization');
        const message = formData.get('message');
        
        // Prepare data for submission
        const submissionData = {
            access_key: "17bd59e9-ceea-422a-a1e9-484f1ebfefad",
            name: name,
            email: email,
            organization: organization,
            message: message,
            subject: "New Consultation Request from Industrial IoT Lab"
        };
        
        // Submit to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(submissionData),
        });
        
        const result = await response.json();
        
        if (result.success) {
            showFormStatus(true, "Thank you! Your consultation request has been submitted successfully. We'll get back to you soon.");
            form.reset();
        } else {
            throw new Error("Form submission failed");
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        showFormStatus(false, "There was an error submitting your request. Please try again or contact us directly.");
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Request';
    }
}

function showFormStatus(isSuccess, message) {
    const formStatus = document.getElementById('formStatus');
    
    if (formStatus) {
        formStatus.className = `p-4 mb-4 rounded ${
            isSuccess 
                ? 'bg-green-100 text-green-700 border border-green-300' 
                : 'bg-red-100 text-red-700 border border-red-300'
        }`;
        formStatus.textContent = message;
        formStatus.classList.remove('hidden');
        
        // Auto-hide success message after 5 seconds
        if (isSuccess) {
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        }
        
        // Scroll to status message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Form validation helpers
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('Please enter a valid full name (at least 2 characters)');
    }
    
    if (!formData.get('email') || !validateEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('organization') || formData.get('organization').trim().length < 2) {
        errors.push('Please enter a valid organization name');
    }
    
    if (!formData.get('message') || formData.get('message').trim().length < 10) {
        errors.push('Please provide more details about your consultation needs (at least 10 characters)');
    }
    
    return errors;
}

// Enhanced form submission with validation
async function handleFormSubmitWithValidation(e) {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formStatus = document.getElementById('formStatus');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate form data
    const validationErrors = validateForm(formData);
    
    if (validationErrors.length > 0) {
        showFormStatus(false, validationErrors.join('. '));
        return;
    }
    
    // Proceed with submission if validation passes
    await handleFormSubmit(e);
}

// Add real-time validation feedback
function addRealTimeValidation() {
    const form = document.getElementById('consultationForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error state when user starts typing
            this.classList.remove('border-red-500');
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch (field.type) {
        case 'email':
            if (value && !validateEmail(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'text':
            if (field.required && value.length < 2) {
                isValid = false;
                errorMessage = 'This field must be at least 2 characters long';
            }
            break;
        default:
            if (field.required && value.length < 10) {
                isValid = false;
                errorMessage = 'Please provide more details (at least 10 characters)';
            }
    }
    
    // Update field appearance
    if (!isValid) {
        field.classList.add('border-red-500');
        showFieldError(field, errorMessage);
    } else {
        field.classList.remove('border-red-500');
        field.classList.add('border-green-500');
        removeFieldError(field);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    removeFieldError(field); // Remove existing error
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-600 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function removeFieldError(field) {
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// Initialize real-time validation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    addRealTimeValidation();
});

// Fallback for older browsers
if (typeof fetch === 'undefined') {
    console.warn('Fetch API not supported. Form submission may not work in older browsers.');
    
    // Provide alternative submission method
    window.submitFormFallback = function(formData) {
        // Create a hidden form and submit it traditionally
        const hiddenForm = document.createElement('form');
        hiddenForm.method = 'POST';
        hiddenForm.action = 'https://api.web3forms.com/submit';
        hiddenForm.style.display = 'none';
        
        // Add form fields
        Object.entries(formData).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            hiddenForm.appendChild(input);
        });
        
        document.body.appendChild(hiddenForm);
        hiddenForm.submit();
    };
}
