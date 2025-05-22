document.addEventListener('DOMContentLoaded', function() {
    // Network tab switching functionality
    const networkTabs = document.querySelectorAll('.network-tabs li');
    networkTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            networkTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // In a full implementation, this would also change the displayed content
        });
    });

    // Connect button functionality
    const connectButtons = document.querySelectorAll('.connect-btn');
    connectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const connectionName = this.closest('.connection-info')?.querySelector('h3')?.textContent || 
                                  this.closest('.suggestion-info')?.querySelector('h4')?.textContent;
            if (connectionName) {
                alert(`Connection request sent to ${connectionName}`);
                this.textContent = 'Pending';
                this.disabled = true;
                this.style.backgroundColor = '#e0e0e0';
            }
        });
    });

    // Message button functionality
    const messageButtons = document.querySelectorAll('.message-btn');
    messageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const connectionName = this.closest('.connection-info')?.querySelector('h3')?.textContent;
            if (connectionName) {
                alert(`Opening conversation with ${connectionName}`);
                // In a full implementation, this would open a messaging interface
            }
        });
    });

    // Add connection button functionality
    const addConnectionBtn = document.querySelector('.post-btn');
    if (addConnectionBtn) {
        addConnectionBtn.addEventListener('click', function() {
            alert('Opening connection search interface');
            // In a full implementation, this would open a search interface
        });
    }
});