// document.addEventListener('DOMContentLoaded', function() {
//     // Navigation menu functionality
//     const navItems = document.querySelectorAll('.main-nav a');
//     navItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             e.preventDefault();
//             navItems.forEach(i => i.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });

    // Post creation functionality
    const postInput = document.querySelector('.post-input-container input');
    postInput.addEventListener('focus', function() {
        this.placeholder = '';
    });
    postInput.addEventListener('blur', function() {
        this.placeholder = 'Start a post';
    });

    // Like button functionality
    const likeButtons = document.querySelectorAll('.post-footer button:first-child');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
            } else {
                this.innerHTML = '<i class="far fa-thumbs-up"></i> Like';
            }
        });
    });

    // Puzzle card functionality
    const startPuzzleBtn = document.querySelector('.start-puzzle-btn');
    startPuzzleBtn.addEventListener('click', function() {
        alert('Puzzle started!');
    });

    // Follow button functionality
    const followButtons = document.querySelectorAll('.follow-btn');
    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.innerHTML = 'Following';
                this.style.backgroundColor = '#0a66c2';
                this.style.color = 'white';
            } else {
                this.innerHTML = '+ Follow';
                this.style.backgroundColor = '#eef1f5';
                this.style.color = '#0a66c2';
            }
        });
    });

    // Comment input functionality
    const commentInputs = document.querySelectorAll('.comments-section input');
    commentInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                alert('Comment submitted!');
                this.value = '';
            }
        });
    });

    // Responsive menu toggle for mobile
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.style.background = 'none';
        mobileMenuBtn.style.border = 'none';
        mobileMenuBtn.style.fontSize = '24px';
        mobileMenuBtn.style.cursor = 'pointer';
        mobileMenuBtn.style.color = '#0a66c2';

        mobileMenuBtn.addEventListener('click', function() {
            const nav = document.querySelector('.main-nav');
            nav.classList.toggle('active');
            if (nav.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        header.insertBefore(mobileMenuBtn, header.firstChild);
        
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block;
                    position: absolute;
                    top: 12px;
                    right: 16px;
                }
                .main-nav {
                    display: none;
                    width: 100%;
                    flex-direction: column;
                    padding: 16px;
                    background-color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .main-nav.active {
                    display: flex;
                }
                .main-nav li {
                    margin: 8px 0;
                }
            }
        `;
        document.head.appendChild(style);
    };

    createMobileMenu();
});
// Form submission functionality for JAAP page
document.addEventListener('DOMContentLoaded', function() {
    const jaapForm = document.querySelector('.jaap-form');
    
    if (jaapForm) {
        jaapForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const preferredIndustry = document.getElementById('preferred-industry').value;
            const preferredCompany = document.getElementById('preferred-company').value;
            const preferredSalary = document.getElementById('preferred-salary').value;
            
            // Basic validation
            if (!fullName || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Form submission logic would go here
            alert('JAAP request submitted successfully!');
            jaapForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mark all as read functionality
    const markAllAsReadBtn = document.querySelector('.mark-as-read-btn');
    if (markAllAsReadBtn) {
        markAllAsReadBtn.addEventListener('click', function() {
            const unreadNotifications = document.querySelectorAll('.unread');
            unreadNotifications.forEach(notification => {
                notification.classList.remove('unread');
            });
            alert('All notifications marked as read');
        });
    }

    // Toggle notification settings
    const settingToggles = document.querySelectorAll('.switch input');
    settingToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const settingName = this.nextElementSibling.textContent.trim();
            if (this.checked) {
                console.log(`${settingName} enabled`);
            } else {
                console.log(`${settingName} disabled`);
            }
        });
    });

    // Accept/decline connection requests
    const acceptButtons = document.querySelectorAll('.accept-btn');
    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const notificationItem = this.closest('.notification-item');
            notificationItem.classList.remove('unread');
            alert('Connection request accepted');
        });
    });

    const declineButtons = document.querySelectorAll('.decline-btn');
    declineButtons.forEach(button => {
        button.addEventListener('click', function() {
            const notificationItem = this.closest('.notification-item');
            notificationItem.style.display = 'none';
            alert('Connection request declined');
        });
    });

    // View buttons functionality
    const viewButtons = document.querySelectorAll('.view-btn, .view-job-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.replace(' ', '').toLowerCase();
            alert(`Viewing ${action}... This functionality would be implemented in a full application.`);
        });
    });
});