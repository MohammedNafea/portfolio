function generateAndDownloadCV() {
    // 1. Always use English for CV
    const t = translations['en'];
    const dir = 'ltr';
    const align = 'left';

    // 2. Create the CV Container (hidden)
    const cvContainer = document.createElement('div');
    cvContainer.id = 'cv-container';
    cvContainer.style.position = 'absolute';
    cvContainer.style.left = '-9999px';
    cvContainer.style.width = '210mm'; // A4 width
    cvContainer.style.background = '#fff';
    cvContainer.style.color = '#000';
    cvContainer.style.fontFamily = '"Times New Roman", Times, serif';
    cvContainer.style.padding = '20mm';
    cvContainer.style.boxSizing = 'border-box';
    document.body.appendChild(cvContainer);

    // 3. Helper to strip HTML from strings (like span in name)
    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    // 4. Construct the HTML Structure
    const name = stripHtml(t.name);
    
    // Hardcoded skills/tech (as they are universal or from HTML)
    const techSkills = "Flutter, Dart, Java, Android Studio, VS Code, Firebase, Git, GitHub";
    const softSkills = `${t.skill_problem_solving}, ${t.skill_analytical}, ${t.skill_teamwork}, ${t.skill_time_mgmt}, ${t.skill_communication}`;

    const content = `
        <style>
            .cv-header { text-align: center; margin-bottom: 20px; }
            .cv-name { font-size: 24pt; font-weight: bold; margin-bottom: 5px; text-transform: uppercase; }
            .cv-role { font-size: 11pt; margin-bottom: 5px; }
            .cv-contact { font-size: 10pt; margin-bottom: 20px; }
            .cv-section { margin-bottom: 15px; }
            .cv-section-title { font-size: 12pt; font-weight: bold; border-bottom: 1px solid #000; margin-bottom: 10px; text-transform: uppercase; }
            .cv-item { margin-bottom: 10px; }
            .cv-item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 11pt; }
            .cv-item-sub { font-style: italic; font-size: 10pt; margin-bottom: 2px; }
            .cv-list { margin: 0; padding-${align}: 20px; font-size: 10.5pt; }
            .cv-list li { margin-bottom: 2px; }
            a { color: #000; text-decoration: none; }
        </style>
        
        <div class="cv-header" dir="${dir}">
            <div class="cv-name">${name}</div>
            <div class="cv-role">${t.role}</div>
            <div class="cv-contact">
                king.darkmn@gmail.com &bull; github.com/MohammedNafea &bull; mohammednafea.github.io/portfolio
            </div>
        </div>

        <div class="cv-section" dir="${dir}">
            <div class="cv-section-title">${t.summary_title || 'Professional Profile'}</div>
            <div style="font-size: 10.5pt; line-height: 1.4;">
                ${t.summary_text}
            </div>
        </div>

        <div class="cv-section" dir="${dir}">
            <div class="cv-section-title">${t.edu_title || 'Education'}</div>
            <div class="cv-item">
                <div class="cv-item-header">
                    <span>${t.edu_degree}</span>
                    <span>${t.edu_date}</span>
                </div>
                <div class="cv-item-sub">University Name (Implicit)</div>
                <ul class="cv-list">
                    <li>${t.edu_project}</li>
                </ul>
            </div>
            <div class="cv-item">
                <div class="cv-item-header">
                    <span>${t.data_bootcamp_title}</span>
                    <span>2026</span>
                </div>
                <div class="cv-item-sub">Samsung Innovation Campus</div>
            </div>
        </div>

        <div class="cv-section" dir="${dir}">
            <div class="cv-section-title">${t.projects_title || 'Projects'}</div>
            
            <div class="cv-item">
                <div class="cv-item-header">
                    <span>${t.guide_me_title}</span>
                    <span>2024</span>
                </div>
                <ul class="cv-list">
                    <li>${t.guide_me_desc}</li>
                    <li>Built using Flutter & Firebase.</li>
                </ul>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <span>${t.data_bootcamp_title}</span>
                    <span>2026</span>
                </div>
                <ul class="cv-list">
                    <li>${t.data_bootcamp_desc}</li>
                    <li>Power BI, Data Visualization.</li>
                </ul>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <span>${t.chem_title}</span>
                    <span>2026</span>
                </div>
                <ul class="cv-list">
                    <li>${t.chem_desc}</li>
                    <li>Interactive Educational Platform.</li>
                </ul>
            </div>
        </div>

        <div class="cv-section" dir="${dir}">
            <div class="cv-section-title">${t.tech_skills_title || 'Skills'}</div>
            <div style="font-size: 10.5pt; line-height: 1.4;">
                <strong>Technical:</strong> ${techSkills}<br>
                <strong>Soft Skills:</strong> ${softSkills}
            </div>
        </div>

        <div class="cv-section" dir="${dir}">
            <div class="cv-section-title">${t.certs_title || 'Certifications'}</div>
             <ul class="cv-list">
                <li>${t.flutter_cert_title} (${t.sept_2020})</li>
                <li>Misk Foundation / Samsung Innovation Campus - Data Bootcamp (2026)</li>
            </ul>
        </div>
    `;

    cvContainer.innerHTML = content;

    // 5. Generate PDF
    const opt = {
        margin: 0,
        filename: 'Mohammed_Nafea_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(cvContainer).save().then(() => {
        document.body.removeChild(cvContainer);
    });
}
