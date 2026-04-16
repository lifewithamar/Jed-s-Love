document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelope-container');
    const messageContainer = document.getElementById('message-container');
    
    const pageDate = document.getElementById('page-date');
    const pageFlowers = document.getElementById('page-flowers');
    
    const btnYes = document.getElementById('btn-yes');
    const btnAbsolutely = document.getElementById('btn-absolutely');
    
    const btnContinueToDate = document.getElementById('btn-continue-to-date');
    const btnContinueToFlowers = document.getElementById('btn-continue-to-flowers');

    // Make envelope clickable to open
    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
        }
    });

    // Handle 'Yes' or 'Absolutely' clicks
    const showLetter = (e) => {
        e.stopPropagation();
        envelopeContainer.classList.add('fade-out');
        messageContainer.classList.add('visible');
    };

    btnYes.addEventListener('click', showLetter);
    btnAbsolutely.addEventListener('click', showLetter);

    // Continue to Date Page
    btnContinueToDate.addEventListener('click', () => {
        messageContainer.classList.remove('visible');
        setTimeout(() => {
            messageContainer.classList.add('hidden'); // Fully remove from view
            pageDate.classList.remove('hidden');
            // Small timeout to allow display:flex to apply before animating opacity
            setTimeout(() => {
                pageDate.classList.add('visible');
            }, 50);
        }, 800); // Wait for transition
    });

    // Continue to Flowers Page
    btnContinueToFlowers.addEventListener('click', () => {
        pageDate.classList.remove('visible');
        setTimeout(() => {
            pageDate.classList.add('hidden');
            pageFlowers.classList.remove('hidden');
            setTimeout(() => {
                pageFlowers.classList.add('visible');
            }, 50);
        }, 800);
    });
});
