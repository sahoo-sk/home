/* --- 1. RESET & VARIABLES --- */
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --accent-color: #0f172a;
    --text-color: #334155;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
    --primary-gradient: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }

html, body { max-width: 100%; overflow-x: hidden; position: relative; }
body { line-height: 1.6; color: var(--text-color); background-color: var(--bg-light); }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* --- 2. HEADER & NAVIGATION --- */
header { background-color: var(--white); box-shadow: var(--shadow); position: fixed; width: 100%; top: 0; z-index: 1000; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
nav { height: 70px; display: flex; justify-content: space-between; align-items: center; }
.nav-links { display: flex; gap: 2rem; }
.nav-links a:hover { color: var(--primary-color); }
.lets-talk { font-weight: bold; color: var(--primary-color); }


/* --- 3. LOGO STYLES --- */
.logo-container { display: flex; align-items: center; }
.logo-text { font-size: 2rem; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.s-thin { font-weight: 300; }
.s-bold { font-weight: 800; }

/* --- 4. HERO SECTION --- */
.creative-hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; padding-left: 50px;}
.hero-container { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; width: 100%;}
.hero-text-content { flex: 1; }
.badge { background-color: #dbeafe; color: var(--primary-color); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;}
.gradient-text { background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
.btn-group { display: flex; gap: 1rem; margin-top: 2rem;}
.btn { padding: 1rem 2rem; border-radius: 50px; font-weight: bold; transition: var(--transition);}
.button-style-gradient-primary { background: var(--primary-gradient); color: white;}
.btn-outline { border: 2px solid #6366f1; color: #6366f1;}

/* Glass Cards */
.hero-visual { flex: 1; position: relative; height: 400px; }
.glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.5); padding: 2rem; border-radius: 20px; position: absolute;}
.floating-card { top: 0; right: 0; animation: float 6s ease-in-out infinite;}
.icon-box { font-size: 2.5rem; }

/* Background Shapes */
.shape { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; }
.shape-1 { width: 400px; height: 400px; background: #bfdbfe; top: -100px; left: -100px; }
.shape-2 { width: 300px; height: 300px; background: #e9d5ff; bottom: -50px; right: -50px; }

/* --- 5. GLOBAL SECTIONS --- */
.global-content-container { max-width: 1200px; margin: 0 auto; padding: 5rem 2rem;}
.text-with-gradient-color-effect { background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
/* --- 6. SERVICES SECTION --- */
.services-grid-layout-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;}
.service-offering-detail-card { background: var(--white); padding: 2rem; border-radius: 16px; border: 1px solid #e5e7eb;}
.feature-icon-container-box { width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1.5rem;}

/* --- 7. ABOUT SECTION --- */
.about-section-flex-layout { display: flex; gap: 4rem; align-items: center;}
.company-core-values-grid-display { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;}
.core-value-proposition-card-item { background: white; padding: 1.5rem; border-radius: 12px; box-shadow: var(--shadow);}
.value-icon-box { width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;}
/* --- 8. CONTACT SECTION --- */
.contact-specific-container { display: flex; gap: 4rem;}
.communication-method-detail-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;}
.form-input-fields-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;}
.standard-text-input-field-element, .multiline-text-area-input-element { width: 100%; padding: 0.8rem; border: 1px solid #e5e7eb; border-radius: 8px;}

/* --- 9. FOOTER --- */
.main-site-footer-navigation-section { background: #0f172a; color: white; padding: 4rem 0 2rem;}
.footer-navigation-links-grid-layout { display: grid; grid-template-columns: 2fr repeat(4, 1fr); gap: 2rem;}
.social-media-profile-links-container { display: flex; gap: 1rem; margin-top: 1rem;}
.footer-bottom-copyright-bar-wrapper { border-top: 1px solid #334155; margin-top: 20px; padding-top: 1rem; display: flex; justify-content: space-between;}

/* --- ANIMATIONS --- */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.fa-brands {color: white; background-color: var(--primary-gradient);}

.standard-text-input-field-element:focus, .multiline-text-area-input-element:focus {outline: none;background: white;border-color: #a855f7;box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1); }







/* --- 1. RESET & VARIABLES --- */
:root {
    --primary-color: #2563eb;
    --accent-color: #0f172a;
    --text-color: #334155;
    --text-gray: #4b5563;
    --text-dark: #111827;
    --bg-light: #f8fafc;
    --bg-off-white: #f9fafb;
    --white: #ffffff;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
    --primary-gradient: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
    --card-border: #e5e7eb;
    --input-bg: #f3f4f6;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }

body { line-height: 1.6; color: var(--text-color); background-color: var(--bg-light); overflow-x: hidden;}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* --- 2. LAYOUT & NAVIGATION --- */
.container, .global-content-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem;}
header { background-color: var(--white); box-shadow: var(--shadow); position: fixed; width: 100%; top: 0; z-index: 1000;}
nav { height: 70px; display: flex; justify-content: space-between; align-items: center;}
.logo-container { display: flex; align-items: center; }
.logo-text { font-size: 2rem; transition: var(--transition); }
.s-thin { font-weight: 300; }
.s-bold { font-weight: 800; }

.nav-links { display: flex; gap: 2rem; }
.nav-links a { font-weight: 300; color: var(--accent-color); transition: var(--transition); padding: 5px 10px; border-radius: 30px;}
.nav-links a:hover { color: #9333ea; }

/* --- 3. HERO SECTION --- */
.creative-hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding-top: 70px; }
.hero-container { display: flex; align-items: center; justify-content: space-between; gap: 2rem; width: 100%; }
.hero-text-content h1 { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; }
.badge { background-color: #dbeafe; color: var(--primary-color); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; display: inline-block; }
.gradient-text, .text-with-gradient-color-effect { background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.btn-group { display: flex; gap: 1rem; margin-top: 2rem; }

.btn, .general-action-button { padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: var(--transition); }
.button-style-gradient-primary { background: var(--primary-gradient); color: white; border: none; }
.btn-outline { border: 2px solid #9333ea; color: #9333ea; }

.hero-visual { flex: 1; position: relative; height: 400px; }
.glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.5); padding: 2rem; border-radius: 20px; width: 260px; position: absolute; }
.floating-card { top: 20%; right: 10%; animation: float 6s ease-in-out infinite; }
.glass-card:first-child { left: 10%; bottom: 20%; opacity: 0.8; }
.icon-box { font-size: 2.5rem; }

.shape { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; z-index: -1;}
.shape-1 { width: 400px; height: 400px; background: #bfdbfe; top: -100px; left: -100px; }
.shape-2 { width: 300px; height: 300px; background: #e9d5ff; bottom: -50px; right: -50px; }

/* --- 4. EXPERTISE (SERVICES) --- */
.services-offerings-section { padding: 6rem 0; text-align: center; }
.main-section-heading-title { font-size: 2.5rem; margin-bottom: 1rem; }
.main-section-subheading-text { color: var(--text-gray); margin-bottom: 3rem; }

.services-grid-layout-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; text-align: left;
}

.service-offering-detail-card { background: white; border: 1px solid var(--card-border); padding: 2rem; border-radius: 16px; transition: var(--transition);
}

.service-offering-detail-card:hover { transform: translateY(-5px); }
.feature-icon-container-box { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 1.5rem; }

.icon-variant-blue { background: #3b82f6; }
.icon-variant-pink { background: #ec4899; }
.icon-variant-green { background: #10b981; }
.icon-variant-orange { background: #f97316; }
.icon-variant-yellow { background: #eab308; }
.icon-variant-purple { background: #8b5cf6; }

/* --- 5. ABOUT SECTION --- */
.company-about-us-section { padding: 6rem 0; background: #eef0f5; }
.about-section-flex-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
.about-heading { font-size: 3rem; margin-bottom: 1.5rem; }
.about-paragraph { color: var(--text-gray); margin-bottom: 1rem; }

.company-core-values-grid-display { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.core-value-proposition-card-item { background: white; padding: 2rem; border-radius: 16px; box-shadow: var(--shadow); }
.value-icon-box { width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; }

/* --- 6. CONTACT SECTION --- */
.contact-us-inquiry-section-wrapper { padding: 6rem 0; }
.contact-specific-container { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; }
.communication-method-detail-row { display: flex; gap: 1rem; margin-bottom: 2rem; }
.communication-channel-icon-wrapper { width: 40px; height: 40px; background: #5b21b6; color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; }

.form-div { background-color: rgba(249, 200, 255, 0.08); border-radius: 25px; padding: 3%; }
.form-input-fields-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
.form-input-field-group-wrapper label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
.standard-text-input-field-element, .multiline-text-area-input-element {
    width: 100%; padding: 1rem; background: #fcfcfc; border: 1px solid transparent; border-radius: 12px; transition: var(--transition);
}
.multiline-text-area-input-element { height: 150px; resize: none; }

/* --- 7. FOOTER --- */
.main-site-footer-navigation-section { background: #fcfcfc; padding: 4rem 0 2rem; border-top: 1px solid var(--card-border); }
.footer-navigation-links-grid-layout { display: grid; grid-template-columns: 2fr repeat(4, 1fr); gap: 2rem; margin-bottom: 1rem; }
.site-branding-logo-link-element { font-weight: 800; font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem; }
.branding-logo-sparkle-icon { color: #8b5cf6; }
.social-media-profile-links-container { display: flex; gap: 1rem; margin-top: 1rem; }
.social-media-profile-links-container a { width: 36px; height: 36px; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: var(--transition); background: var(--primary-gradient); color: white;}


.footer-navigation-column-list-wrapper h4 { margin-bottom: 1rem; font-size: 0.95rem; }
.footer-navigation-column-list-wrapper ul li { margin-bottom: 0.2rem; }
.footer-navigation-column-list-wrapper ul li a { color: var(--text-gray); font-size: 0.9rem; transition: var(--transition); }
.footer-navigation-column-list-wrapper ul li a:hover { color: #8b5cf6; }

.footer-bottom-copyright-bar-wrapper { border-top: 1px solid #e5e7eb; padding-top: 1rem; display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-gray); }

/* --- ANIMATIONS & RESPONSIVE --- */
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }

@media (max-width: 900px) {
    .hero-text-content h1 { font-size: 2.5rem; }
    .hero-container { flex-direction: column; text-align: center; }
    .hero-visual { height: auto; display: flex; flex-direction: column; gap: 1.5rem; align-items: center; }
    .btn-group, .social-media-profile-links-container { justify-content: center; }
    .form-input-fields-grid-layout { grid-template-columns: 1fr; }
    .glass-card { position: relative;  top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; transform: none !important; width: 100%; max-width: 320px; }
    .creative-hero { padding: 10px; margin-top: 50px;}
    .low-margin {padding-top: 50px; padding-bottom: 50px;}
}

/* Hide toggle on desktop */
.menu-toggle { display: none; font-size: 1.5rem; cursor: pointer; }

@media (max-width: 768px) {
    .menu-toggle { display: block; }
    .nav-links { display: none; /* Hide by default on mobile */ flex-direction: column; position: absolute; top: 70px; left: 0; width: 100%; background: white; padding: 2rem; box-shadow: var(--shadow); }
    /* Class to be toggled via JS */
    .nav-links.active { display: flex; }
    .hero-container .btn-group {display: flex; flex-wrap: wrap;}
}

/* Use the "Repeat Auto-Fit" trick for automatic columns */
.services-grid-layout-container, 
.company-core-values-grid-display { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }

@media (max-width: 600px) {
    .about-section-flex-layout,
    .contact-specific-container {grid-template-columns: 1fr; }
    .form-input-fields-grid-layout { grid-template-columns: 1fr; }
}

h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
.about-heading, .contact-heading { font-size: clamp(2rem, 4vw, 3rem); }




/* --- RESPONSIVE FOOTER STYLES --- */

/* 1. Base Footer Layout */
.main-site-footer-navigation-section { background: #fcfcfc; padding: 4rem 0 2rem; border-top: 1px solid var(--card-border);}
.footer-navigation-links-grid-layout { display: grid; grid-template-columns: 2fr repeat(4, 1fr); gap: 2rem; margin-bottom: 1rem;}
.footer-branding-identity-column p { color: #0f172a;}

/* 2. Tablet Responsiveness (Under 1024px) */
@media (max-width: 1024px) {
    .footer-navigation-links-grid-layout { grid-template-columns: repeat(2, 1fr);}
    .footer-branding-identity-column { grid-column: span 2; margin-bottom: 1rem; text-align: center;}
    .footer-branding-identity-column p { margin: 1rem auto; }
    .social-media-profile-links-container { justify-content: center;}
    .social-media-profile-links-container a:hover {width: 36px; height: 36px;}
}

/* 3. Mobile Responsiveness (Under 600px) */
@media (max-width: 600px) {
    .footer-navigation-links-grid-layout { grid-template-columns: 1fr; text-align: center; gap: 2.5rem;}
    .footer-branding-identity-column {grid-column: span 1;}
    .footer-navigation-column-list-wrapper ul li {margin-bottom: 0.2rem;}
    .footer-bottom-copyright-bar-wrapper {flex-direction: column; gap: 1.5rem;text-align: center;align-items: center;}
    .footer-bottom-copyright-bar-wrapper div { justify-content: center; }
}

/* 4. Individual Column Styling (Global) */
.footer-navigation-column-list-wrapper h4 { margin-bottom: 0.75rem; font-size: 1rem; color: var(--text-dark); font-weight: 700;}
.footer-navigation-column-list-wrapper ul li a { color: var(--text-gray); font-size: 0.9rem; transition: var(--transition);}
.footer-navigation-column-list-wrapper ul li a:hover { color: #8b5cf6; padding-left: 5px;}

.lets-talk { padding: 8px 25px; font-weight: 600; border-radius: 50px; border: 2px solid transparent; background-image: linear-gradient(white, white), var(--primary-gradient); background-origin: border-box; background-clip: padding-box, border-box; color: #8b5cf6; transition: var(--transition); }
.lets-talk:hover { color: white; box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3); }
