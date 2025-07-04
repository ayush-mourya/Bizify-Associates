// Define your base path for JavaScript navigation.
// This should match the 'href' attribute of your <base> tag in HTML.
const JS_BASE_PATH = '/Bizify-Associates/';

// Helper function to scroll smoothly to an element
function smoothScrollTo(element) {
    if (element) {
        const headerOffset = document.getElementById('top-header') ? document.getElementById('top-header').offsetHeight : 0;
        // Adjust for any fixed offsets or padding if needed, e.g., -20
        const offset = headerOffset + 20; // Added 20px extra offset for better spacing
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// Function to handle scrolling when a hash is present in the URL
function handleHashScrolling() {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Use setTimeout to allow the browser to render the page and for AOS to potentially finish
            // before scrolling, improving the visual experience.
            setTimeout(() => {
                smoothScrollTo(targetSection);
            }, 300); // Small delay to ensure rendering and avoid scroll jump issues
        }
    }
}

// Function to load external HTML content asynchronously
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        return true; // Indicate success
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        return false; // Indicate failure
    }
}

// This function assumes you have a `serviceSectionsData` array defined elsewhere
// that holds the data for your service cards if they are dynamically generated.
// If your service cards are hardcoded in HTML, you might not need this function
// but the event listener below will still be relevant.
/*
function generateServiceCards() {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer) return;

    servicesContainer.innerHTML = ''; // Clear existing cards
    serviceSectionsData.forEach(section => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', section.delay);

        card.innerHTML = `
            <img src="${JS_BASE_PATH}assets/${section.image}" alt="${section.name} Icon" />
            <p>${section.name}</p>
        `;
        servicesContainer.appendChild(card);
    });
}
*/

// Ensure the DOM is fully loaded before running the main script logic
document.addEventListener("DOMContentLoaded", async () => {

    // Initialize AOS (Animate On Scroll) library
    // Ensure the AOS library script is loaded BEFORE this script.
    AOS.init({
        duration: 1000, // animation duration
        once: true,     // whether animation should only happen once - while scrolling down
    });

    // --- Top Navigation Bar Items (handling clicks for smooth scrolling/redirection) ---
    // Select all <a> elements within the top navigation bar that are intended for navigation
    const navLinks = document.querySelectorAll('#top-nav-bar-ul li a.top-nav-bar-item');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetHref = link.getAttribute('href');

            // Check if it's an internal link to index.html with a hash
            if (targetHref && targetHref.startsWith('index.html#')) {
                event.preventDefault(); // Prevent default browser navigation

                const hash = targetHref.split('#')[1]; // Extract the section ID
                const currentPath = window.location.pathname;

                // Check if currently on the homepage or a service sub-page
                const isCurrentPageHomePage =
                    currentPath === JS_BASE_PATH ||
                    currentPath === `${JS_BASE_PATH}index.html` ||
                    currentPath === '/index.html' || // For direct root access
                    currentPath === '/'; // For direct root access (often points to index.html)

                if (isCurrentPageHomePage) {
                    // If on homepage, just smooth scroll
                    const targetSection = document.getElementById(hash);
                    if (targetSection) {
                        smoothScrollTo(targetSection);
                        // Update URL hash without causing a reload
                        history.pushState(null, '', `#${hash}`);
                    }
                } else {
                    // If on a service page, redirect to homepage with hash
                    window.location.href = `${JS_BASE_PATH}index.html#${hash}`;
                }
            } else if (targetHref && !targetHref.includes('://') && !targetHref.startsWith('#')) {
                // Handle other relative links in the navbar if any, e.g., direct link to contact.html
                // This ensures that any direct relative links without hashes also get the base path.
                event.preventDefault();
                window.location.href = `${JS_BASE_PATH}${targetHref}`;
            }
            // For external links or links without href, let default behavior happen
        });
    });


    // --- Contact Us Button ---
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', (event) => {
            event.preventDefault();
            // Redirect to the contact page using the base path
            window.location.href = `${JS_BASE_PATH}contact.html`;
        });
    }

    // --- About Us Button (assuming it's on index.html and its purpose is to scroll to first-section) ---
    const aboutButton = document.getElementById('About-Button');
    if (aboutButton) {
        aboutButton.addEventListener('click', (event) => {
            event.preventDefault();
            const currentPath = window.location.pathname;
            const isCurrentPageHomePage =
                currentPath === JS_BASE_PATH ||
                currentPath === `${JS_BASE_PATH}index.html` ||
                currentPath === '/index.html' ||
                currentPath === '/';

            if (isCurrentPageHomePage) {
                // If on homepage, smooth scroll to the first section
                const firstSection = document.getElementById('first-section');
                if (firstSection) {
                    smoothScrollTo(firstSection);
                    history.pushState(null, '', `#first-section`);
                }
            } else {
                // If on a service page, redirect to homepage with the hash
                window.location.href = `${JS_BASE_PATH}index.html#first-section`;
            }
        });
    }

    // --- Dynamic Footer Loading ---
    // Load the footer content into the 'footer-placeholder' div.
    // The path is constructed using JS_BASE_PATH to ensure it's correct relative to your deployment root.
    const footerLoaded = await loadHTML('footer-placeholder', `${JS_BASE_PATH}footer.html`);
    if (footerLoaded) {
        // console.log("Footer loaded successfully!"); // Uncomment for debugging

        // Attach event listeners to footer links if the footer was successfully loaded
        const footerLinks = document.querySelectorAll('.footer-column ul li a');
        footerLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const scrollToId = link.dataset.scrollTo; // Assuming footer links use data-scroll-to for internal sections
                const targetHref = link.getAttribute('href'); // Get the href for other cases

                // Handle links that use data-scroll-to for internal section scrolling
                if (scrollToId) {
                    event.preventDefault(); // Prevent default browser navigation

                    const currentPath = window.location.pathname;
                    const isCurrentPageHomePage =
                        currentPath === JS_BASE_PATH ||
                        currentPath === `${JS_BASE_PATH}index.html` ||
                        currentPath === '/index.html' ||
                        currentPath === '/';

                    if (isCurrentPageHomePage) {
                        // If on homepage, smooth scroll
                        const targetSection = document.getElementById(scrollToId);
                        if (targetSection) {
                            smoothScrollTo(targetSection);
                            history.pushState(null, '', `#${scrollToId}`);
                        }
                    } else {
                        // If on a service page, redirect to homepage with hash
                        window.location.href = `${JS_BASE_PATH}index.html#${scrollToId}`;
                    }
                } else if (targetHref && !targetHref.includes('://')) {
                    // Handle other relative links in the footer, ensuring they use the base path
                    event.preventDefault();
                    // Ensure the href is not already absolute or a hash only
                    if (!targetHref.startsWith(JS_BASE_PATH) && !targetHref.startsWith('#')) {
                         window.location.href = `${JS_BASE_PATH}${targetHref}`;
                    } else {
                         window.location.href = targetHref; // Already correctly formed or external
                    }
                }
                // For external links (http/https), let default behavior happen
            });
        });
    } else {
        console.error("Failed to load footer.");
    }

    // --- Service Cards Click Listener (for redirection to service detail pages) ---
    // This section should only run on pages where service cards are present (e.g., index.html).
    // The `generateServiceCards()` call is commented out because it usually runs once to build HTML.
    // If your service cards are static HTML, this listener is all you need.
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) { // Only attach listeners if service cards exist on the page
        // generateServiceCards(); // Uncomment if your cards are dynamically generated on every load

        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceNameElement = card.querySelector('p');
                if (serviceNameElement) {
                    const serviceName = serviceNameElement.textContent.trim();
                    // Generate a slug from the service name (e.g., "Pollution Control" -> "pollution-control")
                    const slug = serviceName.toLowerCase()
                                            .replace(/\s+/g, '-') // Replace spaces with hyphens
                                            .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
                                            .replace(/--+/g, '-') // Replace multiple hyphens with a single one
                                            .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end

                    // Define the path to your service detail pages, relative to JS_BASE_PATH
                    const servicePageDirectory = 'services/';

                    // Construct the full destination URL using the base path
                    const destinationURL = `${JS_BASE_PATH}${servicePageDirectory}${slug}.html`;
                    window.location.href = destinationURL; // Redirect to the service detail page
                } else {
                    console.error("Service name paragraph not found in card:", card);
                }
            });
        });
    }

    // This ensures smooth scrolling happens if the user arrives on index.html with a hash in the URL
    // after a full page load (e.g., from an external link or a manual URL entry).
    // The nav item click handlers already call this if navigating within the homepage.
    window.addEventListener('load', handleHashScrolling);
});

// The `serviceSectionsData` array (if used for dynamic card generation)
// should be defined globally, outside of the DOMContentLoaded listener.
/*
const serviceSectionsData = [
    { name: "Compliance", image: "compliance-icon.png", delay: "0" },
    { name: "Company Registration", image: "registration-icon.png", delay: "100" },
    { name: "License & Permits", image: "license-icon.png", delay: "200" },
    // ... add all your service data here
];
*/