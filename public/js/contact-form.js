/**
 * KOBEYA Contact Form Handler
 * External JavaScript file to prevent HTML entity conversion issues
 * Version: 2.0.0
 */
(function () {
  'use strict';
  
  console.log('Contact form script loaded - KOBEYA v2.0');
  
  /**
   * Initialize contact form with validation and submission handling
   */
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const statusMessage = document.getElementById('status-message');
    
    // Only run on contact page
    if (!contactForm) {
      console.log('Contact form not found on this page');
      return;
    }
    
    // Prevent double binding (important for avoiding conflicts)
    if (contactForm.dataset.bound === 'true') {
      console.log('Contact form already initialized');
      return;
    }
    contactForm.dataset.bound = 'true';
    
    console.log('Initializing KOBEYA contact form');
    console.log('Form elements:', { 
      form: contactForm, 
      submitBtn: submitBtn, 
      statusMessage: statusMessage 
    });
    
    // Validate required elements exist
    if (!submitBtn || !statusMessage) {
      console.error('Required form elements not found');
      return;
    }
    
    /**
     * Form submission handler
     */
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent conflicts with other handlers
      
      console.log('Contact form submitted');
      
      // Collect form data
      const formData = {
        name: document.getElementById('contact-name')?.value?.trim() || '',
        email: document.getElementById('contact-email')?.value?.trim() || '',
        phone: document.getElementById('contact-phone')?.value?.trim() || '',
        message: document.getElementById('contact-message')?.value?.trim() || ''
      };
      
      console.log('Form data:', formData);
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        statusMessage.className = 'status-message status-error';
        statusMessage.textContent = '必須項目を入力してください。';
        statusMessage.style.display = 'block';
        return;
      }
      
      // Update UI to loading state
      submitBtn.disabled = true;
      submitBtn.textContent = '送信中...';
      statusMessage.className = 'status-message status-loading';
      statusMessage.textContent = 'メールを送信しています...';
      statusMessage.style.display = 'block';
      
      try {
        console.log('Sending request to /api/contact');
        
        // Send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        console.log('Response status:', response.status);
        
        const result = await response.json();
        console.log('Response data:', result);
        
        if (result.success) {
          // Success state
          statusMessage.className = 'status-message status-success';
          statusMessage.textContent = result.message || 'お問い合わせありがとうございます。3営業日以内にご連絡いたします。';
          contactForm.reset();
          console.log('Contact form submission successful');
        } else {
          // Error from API
          statusMessage.className = 'status-message status-error';
          statusMessage.textContent = result.message || 'エラーが発生しました。';
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        statusMessage.className = 'status-message status-error';
        statusMessage.textContent = 'エラーが発生しました。しばらくしてから再度お試しください。';
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = '送信する';
      }
    });
    
    console.log('Contact form initialization complete');
  }
  
  // Execute initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    // DOM already loaded
    initContactForm();
  }
})();
