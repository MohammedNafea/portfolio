function generateAndDownloadCV() {
    // 1. Always use English for CV
    const t = translations['en'];
    const dir = 'ltr';
    const align = 'left';

    // 2. Create the CV Container (hidden but rendered)
    const cvContainer = document.createElement('div');
    cvContainer.id = 'cv-container';
    // Use fixed positioning off-screen to ensure it renders but isn't visible
    cvContainer.style.position = 'fixed';
    cvContainer.style.top = '0';
    cvContainer.style.left = '-9999px'; // Move off-screen
    cvContainer.style.zIndex = '-1000';
    cvContainer.style.width = '210mm'; // A4 width
    cvContainer.style.minHeight = '297mm'; // A4 height
    cvContainer.style.background = '#fff';
    cvContainer.style.color = '#000';
    cvContainer.style.fontFamily = 'Arial, Helvetica, sans-serif'; // Clean sans-serif for ATS
    cvContainer.style.padding = '15mm'; // Standard margins
    cvContainer.style.boxSizing = 'border-box';
    document.body.appendChild(cvContainer);

    // 3. Helper to strip HTML from strings
    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        // Replace <br> with newline for text content if needed, but here we keep HTML in specific areas
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    // 4. Construct the HTML Structure
    const name = stripHtml(t.name);
    
    // Hardcoded skills/tech from site content
    const techSkills = "Flutter, Dart, Java, Android Studio, VS Code, Firebase, Git, GitHub";
    const softSkills = `${t.skill_problem_solving}, ${t.skill_analytical}, ${t.skill_teamwork}, ${t.skill_time_mgmt}, ${t.skill_communication}`;

    const content = `
        <style>
            .cv-header { text-align: center; margin-bottom: 25px; border-bottom: 2px solid #333; padding-bottom: 15px; }
            .cv-name { font-size: 26pt; font-weight: bold; margin-bottom: 5px; text-transform: uppercase; color: #222; }
            .cv-role { font-size: 12pt; margin-bottom: 8px; font-weight: bold; color: #444; }
            .cv-contact { font-size: 10pt; color: #555; }
            .cv-contact span { margin: 0 5px; }
            
            .cv-section { margin-bottom: 20px; }
            .cv-section-title { 
                font-size: 14pt; 
                font-weight: bold; 
                border-bottom: 1px solid #ccc; 
                margin-bottom: 12px; 
                text-transform: uppercase; 
                color: #222;
                letter-spacing: 1px;
            }
            
            .cv-item { margin-bottom: 15px; }
            .cv-item-header { display: flex; justify-content: space-between; align-items: baseline; }
            .cv-item-title { font-weight: bold; font-size: 12pt; color: #000; }
            .cv-item-date { font-weight: bold; font-size: 10pt; color: #000; }
            .cv-item-sub { font-style: italic; font-size: 11pt; margin-bottom: 5px; color: #444; }
            
            .cv-list { margin: 5px 0 0 0; padding-left: 20px; font-size: 11pt; line-height: 1.5; color: #333; }
            .cv-list li { margin-bottom: 3px; }
            
            .cv-skills-text { font-size: 11pt; line-height: 1.6; color: #333; }
            .cv-summary-text { font-size: 11pt; line-height: 1.6; color: #333; text-align: justify; }

            a { color: #000; text-decoration: none; }
        </style>
        
        <div class="cv-header">
            <div class="cv-name">${name}</div>
            <div class="cv-role">${t.role}</div>
            <div class="cv-contact">
                king.darkmn@gmail.com <span>&bull;</span> +966555555555 <span>&bull;</span> Riyadh, Saudi Arabia<br>
                <a href="https://github.com/MohammedNafea">github.com/MohammedNafea</a> <span>&bull;</span> <a href="https://mohammednafea.github.io/portfolio">mohammednafea.github.io/portfolio</a>
            </div>
        </div>

        <div class="cv-section">
            <div class="cv-section-title">${t.summary_title}</div>
            <div class="cv-summary-text">
                ${t.summary_text}
            </div>
        </div>

        <div class="cv-section">
            <div class="cv-section-title">${t.exp_title}</div>
             <div class="cv-item">
                <div class="cv-item-header">
                    <span class="cv-item-title">Android Developer (Freelance)</span>
                    <span class="cv-item-date">2023 - Present</span>
                </div>
                <div class="cv-item-sub">Remote</div>
                <ul class="cv-list">
                    <li>${t.exp_1}</li>
                    <li>${t.exp_2}</li>
                    <li>${t.exp_3}</li>
                    <li>${t.exp_4}</li>
                </ul>
            </div>
        </div>

        <div class="cv-section">
            <div class="cv-section-title">${t.projects_title}</div>
            
            <div class="cv-item">
                <div class="cv-item-header">
                    <span class="cv-item-title">${t.guide_me_title}</span>
                    <span class="cv-item-date">2024</span>
                </div>
                <ul class="cv-list">
                    <li>${t.guide_me_desc}</li>
                    <li>Developed using Flutter & Firebase with Google Maps integration.</li>
                    <li>Achieved 'Excellent' grade in graduation project.</li>
                </ul>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <span class="cv-item-title">${t.data_bootcamp_title}</span>
                    <span class="cv-item-date">2026</span>
                </div>
                <ul class="cv-list">
                    <li>${t.data_bootcamp_desc}</li>
                    <li>Utilized Power BI for advanced data visualization and reporting.</li>
                </ul>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <span class="cv-item-title">${t.chem_title}</span>
                    <span class="cv-item-date">2026</span>
                </div>
                <ul class="cv-list">
                    <li>${t.chem_desc}</li>
                    <li>Interactive educational platform built for Hash Plus Initiative.</li>
                </ul>
            </div>
        </div>

        <div class="cv-section">
            <div class="cv-section-title">${t.edu_title}</div>
            <div class="cv-item">
                <div class="cv-item-header">
                    <span class="cv-item-title">${t.edu_degree}</span>
                    <span class="cv-item-date">${t.edu_date}</span>
                </div>
                <div class="cv-item-sub">University of Tabuk</div>
                <ul class="cv-list">
                    <li>${t.edu_project}</li>
                </ul>
            </div>
        </div>

        <div class="cv-section">
            <div class="cv-section-title">${t.tech_skills_title}</div>
            <div class="cv-skills-text">
                <strong>Technical:</strong> ${techSkills}<br>
                <strong>Soft Skills:</strong> ${softSkills}
            </div>
        </div>

        <div class="cv-section">
            <div class="cv-section-title">${t.certs_title}</div>
             <ul class="cv-list">
                <li>${t.flutter_cert_title} (${t.sept_2020})</li>
                <li>Misk Foundation / Samsung Innovation Campus - Data Bootcamp (2026)</li>
            </ul>
        </div>
    `;

    cvContainer.innerHTML = content;

    // 5. Generate PDF with delay to ensure rendering
    // Use a small timeout to allow DOM layout
    setTimeout(() => {
        const opt = {
            margin: 0, // No margin, we handled padding in CSS
            filename: 'Mohammed_Nafea_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(cvContainer).save().then(() => {
            document.body.removeChild(cvContainer);
        });
    }, 500);
}
