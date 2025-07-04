// Inside script.js or services_script.js

// Helper function to scroll smoothly to an element (keeping it here for context)
function smoothScrollTo(element) {
    if (element) {
        const headerOffset = document.getElementById('top-header') ? document.getElementById('top-header').offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset - 20;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// Function to handle scrolling when a hash is present in the URL (keeping it here for context)
function handleHashScrolling() {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            setTimeout(() => {
                smoothScrollTo(targetSection);
            }, 300);
        }
    }
}

// Function to load external HTML content (keeping it here for context)
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        return true;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error); // Corrected typo
        return false;
    }
}


// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", async () => { // Added 'async' for footer loading

    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 1000,
        once: true,
    });

    // --- Top Navigation Bar Items (using data-target) ---
    // Select the <li> elements with the data-target attribute
    const navItems = document.querySelectorAll('#top-nav-bar-ul .top-nav-bar-item');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Check if the clicked item is an anchor tag
            if (item.tagName === 'A' && item.getAttribute('href').includes('#')) {
                // If it's an anchor with a hash, prevent default to handle it with smooth scroll
                event.preventDefault();
                const targetId = item.getAttribute('href').split('#')[1];
                window.location.href = `/Bizify-Associates/index.html#${targetId}`;
            } else {
                // For other links, let the default behavior (navigation) occur
                // or if it's a <li> wrapping an <a>, the <a>'s default will handle it
            }
        });
    });

    // Handle hash scrolling after initial page load or navigation to index.html with a hash
    handleHashScrolling();

    // --- Contact Us Button ---
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', (event) => {
            event.preventDefault();
            // Use absolute path for contact.html relative to the base href
            window.location.href = 'contact.html';
        });
    }

    // --- About Us Button (if applicable, assuming it's on index.html) ---
    const aboutButton = document.getElementById('About-Button');
    if (aboutButton) {
        aboutButton.addEventListener('click', (event) => {
            event.preventDefault();
            const firstSection = document.getElementById('first-section'); // Assuming 'first-section' is on index.html
            // If the about button is clicked from a service page, it should also go to index.html#first-section
            if (window.location.pathname.includes('/services/')) {
                   window.location.href = '/Bizify-Associates/index.html#first-section';
            } else {
                   smoothScrollTo(firstSection);
            }
        });
    }


    // --- Dynamic Footer Loading ---
    // This part remains the same, using the loadHTML function.
    const footerLoaded = await loadHTML('footer-placeholder', 'footer.html'); // Absolute path for footer relative to base href
    if (footerLoaded) {
        console.log("Footer loaded successfully!"); // Corrected typo

        const footerLinks = document.querySelectorAll('.footer-column ul li a');
        footerLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const scrollToId = link.dataset.scrollTo; // Assuming footer links use data-scroll-to
                if (scrollToId) {
                    event.preventDefault();

                    const isHomePage =
                        window.location.pathname === '/' ||
                        window.location.pathname.endsWith('index.html') ||
                        window.location.pathname === '' ||
                        window.location.pathname.endsWith('/Bizify-Associates/') || // Added for base href
                        window.location.pathname.endsWith('/Bizify-Associates/index.html'); // Added for base href

                    if (isHomePage) {
                        const targetSection = document.getElementById(scrollToId);
                        if (targetSection) {
                            smoothScrollTo(targetSection);
                        }
                    } else {
                        // Redirect to homepage with hash using absolute path relative to base href
                        window.location.href = `index.html#${scrollToId}`;
                    }
                }
            });
        });
    }

    // IMPORTANT: The generateServiceCards() function and serviceCards click listener
    // should only be called if these elements exist on the page.
    // If this script is loaded on EVERY page, consider wrapping them in checks:
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) { // Only run if service cards are present
        // (Your existing generateServiceCards() function should be defined elsewhere in your script)
        // generateServiceCards(); // Uncomment if you want to regenerate them on every page load
                                // But typically, this is a one-time generation on index.html

        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceNameElement = card.querySelector('p');
                if (serviceNameElement) {
                    const serviceName = serviceNameElement.textContent.trim();
                    const slug = serviceName.toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .replace(/[^a-z0-9-]/g, '')
                                        .replace(/--+/g, '-')
                                        .replace(/^-+|-+$/g, '');

                    // Define the base path for your service detail pages (relative from root)
                    // This path is now relative to the base href, so it will correctly resolve.
                    const servicePageBasePath = 'services/'; 

                    const destinationURL = `${servicePageBasePath}${slug}.html`;
                    window.location.href = destinationURL;
                } else {
                    console.error("Service name paragraph not found in card:", card); // Corrected typo
                }
            });
        });
    }
});

// Keep your helper functions (generateServiceCards, loadHTML, smoothScrollTo, handleHashScrolling)
// outside the DOMContentLoaded listener or at the top of the file if they are used globally.
// Your existing serviceSectionsData constant should also be outside.