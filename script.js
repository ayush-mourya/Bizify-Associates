// Data for your service cards, organized by section ID
// Paths are now RELATIVE to the base URL set by the <base> tag in your HTML.
const serviceSectionsData = {
    "compliance-section": [
        { imageSrc: "assets/Compliance/ESIC.png", altText: "ESIC", title: "ESIC", path: "Services/Compliance/esic.html" },
        { imageSrc: "assets/Compliance/PF.png", altText: "PF", title: "PF", path: "Services/Compliance/pf.html" },
        { imageSrc: "assets/Compliance/Payroll.png", altText: "Payroll", title: "Payroll", path: "Services/Compliance/payroll.html" },
        { imageSrc: "assets/Compliance/Labour law.png", altText: "Labour Laws", title: "Labour Laws", path: "Services/Compliance/labour-laws.html" },
        { imageSrc: "assets/Compliance/factory act.png", altText: "Factory Act", title: "Factory Act", path: "Services/Compliance/factory-act.html" },
        { imageSrc: "assets/Compliance/shop act.png", altText: "Shop Act", title: "Shop Act", path: "Services/Compliance/shop-act.html" },
    ],
    "register-company-section": [
        { imageSrc: "assets/Register/Private Limited Company.png", altText: "Pvt Ltd Company", title: "Pvt Ltd Company", path: "Services/Register/private-limited-company.html" },
        { imageSrc: "assets/Register/Limited liability.png", altText: "Limited liability", title: "Limited liability", path: "Services/Register/limited-liability.html" },
        { imageSrc: "assets/Register/One Person Company.png", altText: "One Person Company", title: "One Person Company", path: "Services/Register/one-person-company.html" },
        { imageSrc: "assets/Register/Sale Prop.png", altText: "Sale Prop.", title: "Sale Prop.", path: "Services/Register/sale-prop.html" },
        { imageSrc: "assets/Register/Shop,Industry.png", altText: "Shop, Industry", title: "Shop, Industry", path: "Services/Register/shop-industry.html" },
        { imageSrc: "assets/Register/Trust NGO.png", altText: "Trust NGO", title: "Trust NGO", path: "Services/Register/trust-ngo.html" },
        { imageSrc: "assets/Register/Partnership Form.png", altText: "Partnership Form", title: "Partnership Form", path: "Services/Register/partnership.html" },
        { imageSrc: "assets/Register/MSME.png", altText: "MSME", title: "MSME", path: "Services/Register/msme.html" },
        { imageSrc: "assets/Register/ESIC,PF.png", altText: "ESIC, PF", title: "ESIC, PF", path: "Services/Register/esic-pf-registration.html" },
    ],
    "license-section": [
        { imageSrc: "assets/License/ISO Reg.png", altText: "ISO reg.", title: "ISO reg.", path: "Services/License/iso-reg.html" },
        { imageSrc: "assets/License/FSSAI.png", altText: "FSSAI", title: "FSSAI", path: "Services/License/fssai.html" },
        { imageSrc: "assets/License/EIC.png", altText: "EIC", title: "EIC", path: "Services/License/iec.html" },
        { imageSrc: "assets/License/LIQUOR.png", altText: "Liquor", title: "Liquor", path: "Services/License/liquor-license.html" },
        { imageSrc: "assets/License/PSARA.png", altText: "PSARA", title: "PSARA", path: "Services/License/psara.html" },
        { imageSrc: "assets/License/FIRE NOC.png", altText: "Fire NOC", title: "Fire NOC", path: "Services/License/fire-noc.html" },
        { imageSrc: "assets/License/BUILDING PLAN.png", altText: "Building Plan", title: "Building Plan", path: "Services/License/building-plan.html" },
        { imageSrc: "assets/License/SSI.png", altText: "SSI", title: "SSI", path: "Services/License/ssi-registration.html" },
        { imageSrc: "assets/License/POLLUTION CONSENT.png", altText: "Pollution Consent", title: "Pollution Consent", path: "Services/License/pollution-consent.html" },
    ],
    "trademark-section": [
        { imageSrc: "assets/Trademark/Trademark.png", altText: "Trademark", title: "Trademark", path: "Services/Trademark/trademark-registration.html" },
        { imageSrc: "assets/Trademark/Copyright.png", altText: "Copyright", title: "Copyright", path: "Services/Trademark/copyright-registration.html" },
        { imageSrc: "assets/Trademark/Intellectual Property.png", altText: "Intellectual Property", title: "Intellectual Property", path: "Services/Trademark/intellectual-property.html" },
        { imageSrc: "assets/Trademark/Patent Registration.png", altText: "Patent Registration", title: "Patent Registration", path: "Services/Trademark/patent-registration.html" },
        { imageSrc: "assets/Trademark/Trademark Objection.png", altText: "Trademark Objection", title: "Trademark Objection", path: "Services/Trademark/trademark-objection.html" },
        { imageSrc: "assets/Trademark/Trademark Infringement.png", altText: "Trademark Infringement", title: "Trademark Infringement", path: "Services/Trademark/trademark-infringement.html" },
    ],
    "accounts-section": [
        { imageSrc: "assets/Accounts/TDS Return Filing.png", altText: "TDS Return Filing", title: "TDS Return Filing", path: "Services/Accounts/tds-return-filing.html" },
        { imageSrc: "assets/Accounts/Income Tax Notice.png", altText: "Income Tax Notice", title: "Income Tax Notice", path: "Services/Accounts/income-tax-notice.html" },
        { imageSrc: "assets/Accounts/Annual Compliance.png", altText: "Annual Compliance", title: "Annual Compliance", path: "Services/Accounts/annual-compliance.html" },
        { imageSrc: "assets/Accounts/Accounting and Book Keeping.png", altText: "Accounting and Book Keeping", title: "Accounting and Book Keeping", path: "Services/Accounts/accounting-and-bookkeeping.html" },
        { imageSrc: "assets/Accounts/Audit.png", altText: "Audit", title: "Audit", path: "Services/Accounts/audit.html" },
    ],
    "file-gst-section": [
        { imageSrc: "assets/File GST/Indirect Tax.png", altText: "Indirect Tax", title: "Indirect Tax", path: "Services/File GST/indirect-tax.html" },
        { imageSrc: "assets/File GST/GST Filing.png", altText: "GST Filing", title: "GST Filing", path: "Services/File GST/gst-filing.html" },
        { imageSrc: "assets/File GST/GST Registration.png", altText: "GST Registration", title: "GST Registration", path: "Services/File GST/gst-registration.html" },
        { imageSrc: "assets/File GST/Reply to GST Notice.png", altText: "Reply to GST Notice", title: "Reply to GST Notice", path: "Services/File GST/reply-to-gst-notice.html" },
        { imageSrc: "assets/File GST/GST Cancellation and Revocation.png", altText: "GST Cancellation and Revocation", title: "GST Cancellation and Revocation", path: "Services/File GST/gst-cancellation-and-revocation.html" },
    ]
};

// Function to generate and append service cards to their respective grids
function generateServiceCards() {
    for (const sectionId in serviceSectionsData) {
        const gridContainer = document.querySelector(`#${sectionId} .service-grid`);
        if (gridContainer) {
            gridContainer.innerHTML = ''; // Clear existing content to prevent duplication on re-run

            serviceSectionsData[sectionId].forEach(cardData => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('service-card');
                // Store the path on the card itself using a data attribute
                cardDiv.dataset.path = cardData.path; // This will now store "Services/..."

                const img = document.createElement('img');
                // Use the imageSrc as-is from cardData (now relative to base)
                img.src = cardData.imageSrc;
                img.alt = cardData.altText;

                const p = document.createElement('p');
                p.textContent = cardData.title;

                cardDiv.appendChild(img);
                cardDiv.appendChild(p);
                gridContainer.appendChild(cardDiv);
            });
        }
    }
}

// Function to load external HTML content into a specified element
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

/**
 * Helper function to scroll smoothly to an element.
 * @param {HTMLElement} element - The DOM element to scroll to.
 */
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

// Function to handle scrolling when a hash is present in the URL
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


// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', async () => {

    // Only generate service cards if a grid container exists (i.e., we are on index.html)
    // This prevents errors on service detail pages if this script is loaded there too.
    if (document.querySelector('.service-grid')) { // Using a check to ensure elements exist
        generateServiceCards(); // Now populates data-path as well
    }

    // AOS initialization (keeping it here, but ensure duration is set to 0 to prevent animations)
    AOS.init({
        duration: 0, // Set duration to 0 to effectively disable animations
        once: true,
    });

    /**
     * Handles navigation for header menu items.
     * Clicks on these items will smoothly scroll to the corresponding section.
     * If on a sub-page (contact.html or service/*.html), it will navigate to index.html
     * and then scroll.
     */
    const navItems = document.querySelectorAll('#top-nav-bar-ul .top-nav-bar-item');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const href = item.getAttribute('href'); // e.g., "#compliance-section"
            const targetId = href.split('#')[1];

            // Determine if the current page is index.html
            // Using window.location.pathname.endsWith to check if the current page path ends with "index.html"
            // or is the base path (e.g., "/")
            const currentPath = window.location.pathname;
            const isHomePage = currentPath.endsWith('/') || currentPath.endsWith('/index.html') ||
                               currentPath.endsWith('/Bizify-Associates/') || // CORRECTED: Changed Bizify%20Associates to Bizify-Associates
                               currentPath.endsWith('/Bizify-Associates/index.html'); // CORRECTED: Changed Bizify%20Associates to Bizify-Associates


            if (isHomePage) {
                const targetSection = document.getElementById(targetId);
                if (targetSection) smoothScrollTo(targetSection);
            } else {
                // Navigate to index.html from a sub-page, relative to the base URL
                window.location.href = `index.html#${targetId}`;
            }
        });
    });

    handleHashScrolling();


    /**
     * Handles the "Contact Us" button click.
     * Navigates to the contact.html page.
     */
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', (event) => {
            event.preventDefault();
            // Path to contact.html, relative to the base URL
            window.location.href = 'contact.html';
        });
    }

    /**
     * Handles the "About Us" button click.
     * Scrolls smoothly to the first section of the page.
     * If on a sub-page, it navigates back to the homepage's first section.
     */
    const aboutButton = document.getElementById('About-Button');
    if (aboutButton) {
        aboutButton.addEventListener('click', (event) => {
            event.preventDefault();
            // Check if current path indicates being on a service sub-page
            if (window.location.pathname.includes('Services/')) {
                 // Navigate to index.html from a service page, relative to the base URL
                 window.location.href = 'index.html#first-section';
            } else {
                 const firstSection = document.getElementById('first-section');
                 smoothScrollTo(firstSection);
            }
        });
    }

    /**
     * Handles clicks on individual service cards.
     * Each card click will navigate to its specific service detail page using the stored 'data-path'.
     */
    const serviceCards = document.querySelectorAll('.service-card');
    // Only add event listeners if serviceCards exist to prevent errors on pages without them
    if (serviceCards.length > 0) {
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                // Retrieve the path directly from the data attribute on the card
                // This 'path' is already defined in serviceSectionsData as relative (e.g., "Services/...")
                const destinationURL = card.dataset.path;

                if (destinationURL) {
                    console.log(`Navigating to: ${destinationURL}`);
                    window.location.href = destinationURL;
                } else {
                    console.error("Service path not found for card:", card);
                }
            });
        });
    }

    // --- Dynamic Footer Loading ---
    // Path to footer.html, relative to the base URL
    const footerLoaded = await loadHTML('footer-placeholder', 'footer.html');
    if (footerLoaded) {
        console.log("Footer loaded successfully!");

        const footerLinks = document.querySelectorAll('.footer-column ul li a');
        footerLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const scrollToId = link.dataset.scrollTo;
                if (scrollToId) {
                    event.preventDefault();

                    const currentPath = window.location.pathname;
                    const isHomePage = currentPath.endsWith('/') || currentPath.endsWith('/index.html') ||
                                       currentPath.endsWith('/Bizify-Associates/') || // CORRECTED: Changed Bizify%20Associates to Bizify-Associates
                                       currentPath.endsWith('/Bizify-Associates/index.html'); // CORRECTED: Changed Bizify%20Associates to Bizify-Associates

                    if (isHomePage) {
                        const targetSection = document.getElementById(scrollToId);
                        if (targetSection) {
                            smoothScrollTo(targetSection);
                        }
                    } else {
                        // Redirect to homepage with hash, relative to the base URL
                        window.location.href = `index.html#${scrollToId}`;
                    }
                }
            });
        });
    }
});