// Filename: life-insurance-plans.js
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Handle "View Details" button clicks
    const detailsButtons = document.querySelectorAll('.plan-details-btn');

    detailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const planCard = event.target.closest('.plan-card');
            const planName = planCard.querySelector('.plan-name').innerText.trim();

            // In a real application, you might:
            // 1. Open a modal with more detailed information.
            // 2. Navigate to another page specific to this plan.
            // 3. Expand the card to show more details.
            alert(`"View Details" clicked for: ${planName}.\nThis is where you would show more plan-specific information.`);

            // Example: Redirect to a more detailed plan page (e.g., nishchit-ace-plan-details.html)
            // const planFileName = planName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            // window.location.href = `${planFileName}-details.html`;
        });
    });

    // Add any other dynamic functionality specific to the life insurance plans page here
});