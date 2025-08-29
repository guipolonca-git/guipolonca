document.addEventListener('DOMContentLoaded', function() {
    // Objeto com todas as traduções
    const translations = {
        'pt-br': {
            // Textos da página principal (index.html)
            intro: 'oi, meu nome é',
            subtitle: 'e esse é o meu site :)',
            home: 'Página Inicial',
            professional: 'Profissional',
            aboutIntro1: 'Por enquanto não tem muita coisa pra colocar aqui. Você pode checar minhas redes sociais ou me enviar um email através dos links abaixo. Tem crítica cinematográfica, videoensaios, crônicas e também o meu LinkedIn, caso você tenha vindo aqui atrás disso. Chama lá!',
            aboutIntro2: 'Se quiser me achar em algum outro lugar, pode procurar por <strong>@guipolonca</strong>. Se não encontrar, é porque eu não estou lá (ou não quero que você me encontre 👀)',
            connect: 'Conecte-se comigo',

            // Textos da página profissional (profissional.html)
            profSubtitle: 'Designer Educacional Bilíngue',
            profIntro1: 'Formado em Design Educacional pela Universidade Federal de São Paulo. Nove anos de experiência em Design Educacional, com competência para o processo de escrita, revisão e adaptação de materiais didáticos para o ambiente online. Experiência como analista de qualidade englobando todos os aspectos do material didático, como adequação de texto, interfaces, responsividade e acessibilidade. Já atuei em diversas frentes educacionais, desde a educação livre, passando pela educação corporativa e educação básica.',
            profIntro2: 'Há pouco mais de um ano, atuo como Designer Educacional Bilíngue, adaptando materiais internacionais para o público brasileiro, por meio de tradução, adaptação e criação de conteúdos específicos para este público.',
            experienceTitle: 'Experiência Profissional',
            job1Title: 'Senior Curriculum Developer (Bilíngue)',
            job1Company: 'Oracle Netsuite',
            job1Period: 'desde Março de 2025',
            job1Desc1: 'Projetar, desenvolver e manter cursos de e-learning para todos os públicos.',
            job1Desc2: 'Criar documentação de treinamento, incluindo estrutura conceitual, storyboards, áudio e scripts de simulação para e-learning.',
            job1Desc3: 'Trabalhar com equipes multifuncionais para desenvolver especificações e levantar o conteúdo dos cursos.',
            job1Desc4: 'Colaborar com especialistas (SMEs) para reunir as melhores práticas e incorporar conhecimento especializado nos objetivos de aprendizado e nos cenários de usuário.',
            job2Title: 'Instructional Designer (Bilíngue)',
            job2Company: 'Uber Inc. (Aptara)',
            job2Period: 'Setembro de 2024 - Fevereiro de 2025',
            job2Desc1: 'Criar novos materiais de aprendizagem (treinamento virual síncrono, e-learning, guias rápidos, "job aids" e outros).',
            job2Desc2: 'Converter materiais de aprendizagem existentes presenciais para virtuais síncronos ou e-learning.',
            job2Desc3: 'Manter e atualizar os materiais de treinamento.',
            job2Desc4: 'Trabalhar com especialistas (SMEs).',
            job2Desc5: 'Compilar recursos de aprendizagem e criar currículos detalhados e focados no aluno.',
            job2Desc6: 'Desenvolver conteúdo de alta qualidade, eficaz e escalável.',
            job2Desc7: 'Manter a precisão do Catálogo de Cursos no Sistema de Gestão de Aprendizagem (LMS).',
            job3Title: 'Editor Multimídia',
            job3Company: 'iea solucoes educacionais',
            job3Period: 'Novembro de 2023 - Agosto de 2024',
            job3Desc1: 'Criação de experiências digitais para alunos e professores da Educação Básica;',
            job3Desc2: 'Elaboração de objetos educacionais digitais e trilhas de aprendizagem;',
            job3Desc3: 'Edição e adaptação de conteúdos;',
            job3Desc4: 'Ideação de novas soluções educacionais digitais.',
            job4Title: 'Analista de Qualidade Pleno',
            job4Company: 'UOL EdTech',
            job4Period: 'Setembro de 2021 - Maio de 2023',
            job4Desc1: 'Análise de conteúdo, voz e escrita;',
            job4Desc2: 'Planejamento de conteúdo acessível;',
            job4Desc3: 'Planejamento de recursos educacionais interativos;',
            job4Desc4: 'Testes de aspectos técnicos de funcionalidade de onepages educacionais.',
            educationTitle: 'Formação Acadêmica',
            education1Title: 'Design Educacional',
            education1Inst: 'Unifesp - Universidade Federal de São Paulo',
            education1Period: '2020 - 2022',
            education2Title: 'Letras - Português e Inglês',
            education2Inst: 'Universidade Cruzeiro do Sul',
            education2Period: '2025 - 2028',
            certificationsTitle: 'Certificações e Habilidades',
            cert1Title: 'Professional Scrum Master I',
            cert1Emissao: 'Scrum.org - Emitida em ago de 2025',
            cert1Comp: '**Competências:** Scrum, Metodologias Ágeis',
            cert2Title: 'Create Responsive HTML5 eLearning with Articulate 360 Rise',
            cert2Emissao: 'Udemy - Emitida em ago de 2024',
            cert2Comp: '**Competências:** Articulate Rise',
            cert3Title: 'Escrita Total - Método de Escrita Criativa para Todo Texto',
            cert3Emissao: 'Udemy - Emitida em jul de 2023',
            cert3Comp: '**Competências:** Escrita criativa',
            connect: 'Meus links'
        },
        en: {
            // English translations
            intro: 'hi, my name is',
            subtitle: 'and this is my website :)',
            home: 'Home',
            professional: 'Professional',
            aboutIntro1: 'Not much to put here for now. You can check my social media or send me an email through the links below. There are film reviews, video essays, chronicles and also my LinkedIn, in case you came here for that. Hit me up!',
            aboutIntro2: 'If you want to find me somewhere else, you can look for <strong>@guipolonca</strong>. If you don\'t find me, it\'s because I\'m not there (or I don\'t want you to find me 👀)',
            connect: 'My links',

            profSubtitle: 'Bilingual Educational Designer',
            profIntro1: 'Graduated in Educational Design from the Federal University of São Paulo with nine years of experience in Educational Design, with competence for the process of writing, proof writing, and adapting didactic materials for the online environment. Experience as a Quality Analyst (QA), covering all aspects of didactic material, such as text adequacy, interfaces, responsiveness, and accessibility. I have worked in various educational areas, from free education to corporate and basic education.',
            profIntro2: 'For a little over a year, I have been working as a Bilingual Educational Designer, adapting international materials for the Brazilian public through translation, adaptation, and creation of specific content for this audience.',
            experienceTitle: 'Professional Experience',
            job1Title: 'Senior Curriculum Developer (Bilingual)',
            job1Company: 'Oracle Netsuite',
            job1Period: 'since March 2025',
            job1Desc1: 'Design, develop, and maintain e-learning courses for all audiences.',
            job1Desc2: 'Create training documentation, including conceptual framework, storyboards, audio, and simulation scripts for e-learning.',
            job1Desc3: 'Work with cross-functional teams to develop specifications and gather course content.',
            job1Desc4: 'Collaborate with subject matter experts (SMEs) to gather best practices and incorporate specialized knowledge into learning objectives and user scenarios.',
            job2Title: 'Instructional Designer (Bilingual)',
            job2Company: 'Uber Inc. (Aptara)',
            job2Period: 'September 2024 - February 2025',
            job2Desc1: 'Create all types of new learning materials (VILT, e-learning, quick guides, "job aids", and others).',
            job2Desc2: 'Convert existing learning materials from ILT to VILT or eLearning.',
            job2Desc3: 'Maintain and update training materials.',
            job2Desc4: 'Work with subject matter experts (SMEs).',
            job2Desc5: 'Compile learning resources and create detailed, student-focused curricula.',
            job2Desc6: 'Develop high-quality, effective, and scalable content.',
            job2Desc7: 'Maintain the accuracy of the Course Catalog in the Learning Management System (LMS).',
            job3Title: 'Multimedia Editor',
            job3Company: 'iea Soluções Educacionais',
            job3Period: 'November 2023 - August 2024',
            job3Desc1: 'Creation of digital experiences for High School students and teachers.',
            job3Desc2: 'Development of digital educational objects and learning paths.',
            job3Desc3: 'Content editing and adaptation.',
            job3Desc4: 'Creation of new digital educational solutions.',
            job4Title: 'Full Quality Analyst',
            job4Company: 'UOL EdTech',
            job4Period: 'September 2021 - May 2023',
            job4Desc1: 'Content and writing analysis.',
            job4Desc2: 'Accessible content planning.',
            job4Desc3: 'Interactive educational resources planning.',
            job4Desc4: 'QAing technical aspects of the learning materials.',
            educationTitle: 'Academic Background',
            education1Title: 'Educational Design',
            education1Inst: 'Unifesp - São Paulo Federal University',
            education1Period: '2020 - 2022',
            education2Title: 'Portuguese and English Studies',
            education2Inst: 'Universidade Cruzeiro do Sul',
            education2Period: '2025 - 2028',
            certificationsTitle: 'Certifications and Skills',
            cert1Title: 'Professional Scrum Master I',
            cert1Emissao: 'Scrum.org - Issued August 2025',
            cert1Comp: '**Skills:** Scrum, Agile Methodologies',
            cert2Title: 'Create Responsive HTML5 eLearning with Articulate 360 Rise',
            cert2Emissao: 'Udemy - Issued August 2024',
            cert2Comp: '**Skills:** Articulate Rise',
            cert3Title: 'Total Writing - Creative Writing Method for All Text',
            cert3Emissao: 'Udemy - Issued July 2023',
            cert3Comp: '**Skills:** Creative writing',
            connect: 'My links'
        }
    };

    // Pega o idioma salvo no localStorage, ou define como 'pt-br' se não houver
    let currentLanguage = localStorage.getItem('siteLanguage') || 'pt-br';

    const languageToggleBtn = document.getElementById('language-toggle');
    const flagImg = document.getElementById('flag-img');
    
    // Funções de navegação e transição de página
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.getAttribute('href');
            document.getElementById('main-content').classList.add('fade-out');
            setTimeout(() => {
                window.location.href = destination;
            }, 500);
        });
    });

    // Funções de tradução
    function updateText() {
        const lang = translations[currentLanguage];
        
        // Atualiza a barra de navegação
        document.querySelector('.navbar a:nth-child(1)').textContent = lang.home;
        document.querySelector('.navbar a:nth-child(2)').textContent = lang.professional;
        
        // --- Atualização de textos da página principal (index.html) ---
        if (document.getElementById('about-intro-1')) {
            document.getElementById('hero-intro-p').textContent = lang.intro;
            document.getElementById('hero-subtitle-p').textContent = lang.subtitle;
            document.getElementById('about-intro-1').textContent = lang.aboutIntro1;
            document.getElementById('about-intro-2').innerHTML = lang.aboutIntro2;
            document.getElementById('socials-title').textContent = lang.connect;
        }

        // --- Atualização de textos da página profissional (profissional.html) ---
        if (document.getElementById('profissional')) {
            document.getElementById('hero-intro-p').textContent = lang.intro;
            document.getElementById('hero-subtitle-p').textContent = lang.profSubtitle;
            document.getElementById('prof-intro-1').textContent = lang.profIntro1;
            document.getElementById('prof-intro-2').textContent = lang.profIntro2;
            document.getElementById('experience-title').textContent = lang.experienceTitle;

            // Tradução dos empregos
            if (document.getElementById('job-1-title')) {
                document.getElementById('job-1-title').textContent = lang.job1Title;
                document.getElementById('job-1-company').textContent = lang.job1Company;
                document.getElementById('job-1-period').textContent = lang.job1Period;
                document.getElementById('job-1-li-1').textContent = lang.job1Desc1;
                document.getElementById('job-1-li-2').textContent = lang.job1Desc2;
                document.getElementById('job-1-li-3').textContent = lang.job1Desc3;
                document.getElementById('job-1-li-4').textContent = lang.job1Desc4;
            }
            if (document.getElementById('job-2-title')) {
                document.getElementById('job-2-title').textContent = lang.job2Title;
                document.getElementById('job-2-company').textContent = lang.job2Company;
                document.getElementById('job-2-period').textContent = lang.job2Period;
                document.getElementById('job-2-li-1').textContent = lang.job2Desc1;
                document.getElementById('job-2-li-2').textContent = lang.job2Desc2;
                document.getElementById('job-2-li-3').textContent = lang.job2Desc3;
                document.getElementById('job-2-li-4').textContent = lang.job2Desc4;
                document.getElementById('job-2-li-5').textContent = lang.job2Desc5;
                document.getElementById('job-2-li-6').textContent = lang.job2Desc6;
                document.getElementById('job-2-li-7').textContent = lang.job2Desc7;
            }
            if (document.getElementById('job-3-title')) {
                document.getElementById('job-3-title').textContent = lang.job3Title;
                document.getElementById('job-3-company').textContent = lang.job3Company;
                document.getElementById('job-3-period').textContent = lang.job3Period;
                document.getElementById('job-3-li-1').textContent = lang.job3Desc1;
                document.getElementById('job-3-li-2').textContent = lang.job3Desc2;
                document.getElementById('job-3-li-3').textContent = lang.job3Desc3;
                document.getElementById('job-3-li-4').textContent = lang.job3Desc4;
            }
            if (document.getElementById('job-4-title')) {
                document.getElementById('job-4-title').textContent = lang.job4Title;
                document.getElementById('job-4-company').textContent = lang.job4Company;
                document.getElementById('job-4-period').textContent = lang.job4Period;
                document.getElementById('job-4-li-1').textContent = lang.job4Desc1;
                document.getElementById('job-4-li-2').textContent = lang.job4Desc2;
                document.getElementById('job-4-li-3').textContent = lang.job4Desc3;
                document.getElementById('job-4-li-4').textContent = lang.job4Desc4;
            }

            // Tradução da educação
            if (document.getElementById('education-title')) {
                document.getElementById('education-title').textContent = lang.educationTitle;
                document.getElementById('education-1-title').textContent = lang.education1Title;
                document.getElementById('education-1-inst').textContent = lang.education1Inst;
                document.getElementById('education-1-period').textContent = lang.education1Period;
                document.getElementById('education-2-title').textContent = lang.education2Title;
                document.getElementById('education-2-inst').textContent = lang.education2Inst;
                document.getElementById('education-2-period').textContent = lang.education2Period;
            }

            // Tradução das certificações (a seção não existe no HTML, mas o código não vai quebrar)
            if (document.getElementById('certifications-title')) {
                document.getElementById('certifications-title').textContent = lang.certificationsTitle;
            }

            // Tradução do título da seção social
            document.querySelector('.socials h2').textContent = lang.connect;
        }

        // Atualiza a imagem da bandeira
        if (currentLanguage === 'pt-br') {
            flagImg.src = 'bandeira-uk.png';
            flagImg.alt = 'English';
        } else {
            flagImg.src = 'bandeira-br.png';
            flagImg.alt = 'Português';
        }
    }

    // Adiciona o evento de clique ao botão
    languageToggleBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
        localStorage.setItem('siteLanguage', currentLanguage);
        updateText();
    });

    // Chama a função ao carregar a página para garantir que o idioma inicial esteja correto
    updateText();
	// Localiza o botão de modo noturno
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Função para aplicar o modo noturno
function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Verifica o localStorage na carga da página
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
applyDarkMode(isDarkMode);

// Adiciona o evento de clique ao botão
darkModeToggle.addEventListener('click', function() {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('isDarkMode', !isCurrentlyDark);
    applyDarkMode(!isCurrentlyDark);
});
});