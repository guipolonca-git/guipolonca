
export type Language = 'pt' | 'en';

export const content = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      contact: 'Contato',
      professional: 'Profissional',
      cinema: 'Cinema',
      chronicles: 'Crônicas'
    },
    hero: {
      professional: {
        title: 'Profissional',
        description: 'Minha trajetória e experiências no Design Educacional'
      },
      cinema: {
        title: 'Cinema',
        description: 'Críticas, colunas e vídeos sobre cinema'
      },
      chronicles: {
        title: 'Crônicas',
        description: 'Narrativas autorais'
      }
    },
    about: {
      title: 'Sobre Mim',
      text: 'oi, tudo bem? Meu nome é Guilherme Polonca, e nesse site você pode encontrar um bom resumo da minha presença online. Sou Designer Instrucional, crítico de cinema e cronista (quando a inspiração vem). Minhas redes sociais estão abaixo, e você pode explorar mais o meu trabalho nas seções Cinema e Crônicas. Se quiser, entre em contato pelo formulário abaixo ou pelo email guipolonca@gmail.com'
    },
    social: {
      instagram: 'https://www.instagram.com/guipolonca',
      tiktok: 'https://www.tiktok.com/@guipolonca',
      cinema: 'https://musicult.com.br/author/guilherme-polonca/',
      medium: 'https://medium.com/@guipolonca'
    },
    professional: {
      title: 'Experiência Profissional',
      summary: 'Formado em Design Educacional pela Universidade Federal de São Paulo. Dez anos de experiência em Design Educacional, com competência para o processo de escrita, revisão e adaptação de materiais didáticos para o ambiente online. Experiência como analista de qualidade englobando todos os aspectos do material didático, como adequação de texto, interfaces, responsividade e acessibilidade. Já atuei em diversas frentes educacionais, desde a educação livre, passando pela educação corporativa e educação básica.\n\nHá algum tempo, atuo como Designer Educacional Bilíngue, adaptando materiais internacionais para o público brasileiro, por meio de tradução, adaptação e criação de conteúdos específicos para este público.',
      experiences: [
        {
          role: 'Instructional Designer',
          company: 'MSX International',
          period: 'desde Dezembro de 2025',
          tasks: [
            'Realizar levantamento de necessidades de aprendizagem em colaboração com líderes de negócio, RH e SMEs.',
            'Projetar e desenvolver programas instrucionais, módulos de aprendizagem, materiais de apoio e conteúdos de microlearning.',
            'Desenvolver treinamentos em múltiplos formatos: eLearning, sessões virtuais, programas híbridos, workshops e iniciativas de aprendizagem social.',
            'Atuar como especialista em design instrucional durante a implantação de LMS, apoiando a configuração, testes e lançamento.'
          ]
        },
        {
          role: 'Senior Curriculum Developer (Bilíngue)',
          company: 'Oracle Netsuite',
          period: 'Março de 2025 - Outubro de 2025',
          tasks: [
            'Projetar, desenvolver e manter cursos de e-learning para todos os públicos.',
            'Criar documentação de treinamento, incluindo estrutura conceitual, storyboards, áudio e scripts de simulação para e-learning.',
            'Trabalhar com equipes multifuncionais para desenvolver especificações e levantar o conteúdo dos cursos.',
            'Colaborar com especialistas (SMEs) para reunir as melhores práticas e incorporar conhecimento especializado nos objetivos de aprendizado e nos cenários de usuário.'
          ]
        },
        {
          role: 'Instructional Designer (Bilíngue)',
          company: 'Uber Inc. (Aptara)',
          period: 'Setembro de 2024 - Fevereiro de 2025',
          tasks: [
            'Criar novos materiais de aprendizagem (treinamento virual síncrono, e-learning, guias rápidos, "job aids" e outros).',
            'Converter materiais de aprendizagem existentes presenciais para virtuais síncronos ou e-learning.',
            'Manter e atualizar os materiais de treinamento.',
            'Trabalhar com especialistas (SMEs).',
            'Compilar recursos de aprendizagem e criar currículos detalhados e focados no aluno.',
            'Desenvolver conteúdo de alta qualidade, eficaz e escalável.',
            'Manter a precisão do Catálogo de Cursos no Sistema de Gestão de Aprendizagem (LMS).'
          ]
        },
        {
          role: 'Editor Multimídia',
          company: 'iea solucoes educacionais',
          period: 'Novembro de 2023 - Agosto de 2024',
          tasks: [
            'Criação de experiências digitais para alunos e professores da Educação Básica;',
            'Elaboração de objetos educacionais digitais e trilhas de aprendizagem;',
            'Edição e adaptação de conteúdos;',
            'Ideação de novas soluções educacionais digitais.'
          ]
        },
        {
          role: 'Analista de Qualidade Pleno',
          company: 'UOL EdTech',
          period: 'Setembro de 2021 - Maio de 2023',
          tasks: [
            'Análise de conteúdo, voz e escrita;',
            'Planejamento de conteúdo acessível;',
            'Planejamento de recursos educacionais interativos;',
            'Testes de aspectos técnicos de funcionalidade de onepages educacionais.'
          ]
        }
      ],
      educationTitle: 'Formação Acadêmica',
      education: [
        {
          degree: 'Design Educacional',
          institution: 'Unifesp - Universidade Federal de São Paulo',
          period: '2020 - 2022'
        },
        {
          degree: 'Letras - Português e Inglês',
          institution: 'Universidade Cruzeiro do Sul',
          period: '2025 - 2028'
        }
      ]
    },
    cinema: {
      title: 'Cinema & Crítica',
      description: 'Minhas críticas cinematográficas e ensaios sobre cinema são publicados pelo Portal Musicult. No Tiktok e Instagram, me dedico a abordar o cinema de forma mais livre, com pautas que vão de indicação de filmes a discussões sobre aspectos diversos do cinema.',
      platforms: [
        { label: 'Crítica Cinematográfica - Musicult', link: 'https://musicult.com.br/author/guilherme-polonca/' },
        { label: 'TikTok - Vídeos sobre cinema', link: 'https://www.tiktok.com/@guipolonca' }
      ],
      items: [
        {
          title: 'As biografias musicais e o Oscar',
          text: 'Conheça as biografias musicais, como as de Freddie Mercury, Bob Dylan e Elton John que foram indicadas e venceram categorias do Oscar.',
          image: '/cinema-post-1.jpg',
          link: 'https://musicult.com.br/2026/03/26/biografias-musicais-oscar/'
        },
        {
          title: 'A Única Saída: uma comédia no capitalismo tardio',
          text: 'Confira a crítica sem spoilers de A Única Saída, novo filme de Park Chan-wook, que estreia dia 22 de janeiro nos cinemas.',
          image: '/cinema-post-2.jpg',
          link: 'https://musicult.com.br/2026/01/22/a-unica-saida-uma-comedia-no-capitalismo-tardio/'
        }
      ]
    },
    chronicles: {
      title: 'Crônicas',
      description: 'Crônicas e contos autorais',
      platformLink: 'https://medium.com/@guipolonca',
      platformLabel: 'Ler mais no Medium',
      items: [
        {
          title: 'São Paulo Sociedade Anônima',
          text: 'Eu tenho sentido certa melancolia depois de sair do cinema. Já não é a primeira vez. Parece que se apaga o projetor e... sei lá. ',
          date: '15 de Março, 2026',
          link: 'https://guipolonca.medium.com/s%C3%A3o-paulo-sociedade-an%C3%B4nima-44e0dbd91d78'
        },
        {
          title: 'Quarta-feira de cinzas',
          text: 'ou Memento Mori',
          date: '02 de Fevereiro, 2026',
          link: 'https://guipolonca.medium.com/quarta-feira-de-cinzas-90e260ae1630'
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!'
    },
    footer: {
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      professional: 'Professional',
      cinema: 'Cinema',
      chronicles: 'Chronicles'
    },
    hero: {
      professional: {
        title: 'Professional',
        description: 'My career path and experiences in Educational Design'
      },
      cinema: {
        title: 'Cinema',
        description: 'Reviews, columns, and videos about cinema'
      },
      chronicles: {
        title: 'Chronicles',
        description: 'Original narratives'
      }
    },
    about: {
      title: 'About Me',
      text: "Hi, how are you? My name is Guilherme Polonca, and on this site you can find a good summary of my online presence. I'm an Instructional Designer, film critic, and chronicler (when inspiration strikes). My social media links are below, and you can explore more of my work in the Cinema and Chronicles sections. If you'd like, get in touch via the form below or by email at guipolonca@gmail.com"
    },
    social: {
      instagram: 'https://www.instagram.com/guipolonca',
      tiktok: 'https://www.tiktok.com/@guipolonca',
      cinema: 'https://musicult.com.br/author/guilherme-polonca/',
      medium: 'https://medium.com/@guipolonca'
    },
    professional: {
      title: 'Professional Experience',
      summary: 'Graduated in Educational Design from the Federal University of São Paulo. Ten years of experience in Educational Design, with competence in the process of writing, reviewing, and adapting didactic materials for the online environment. Experience as a Quality Analyst (QA) covering all aspects of didactic materials, such as text adequacy, interfaces, responsiveness, and accessibility. I have worked in various educational areas, from free education to corporate and basic education.\n\nFor some time now, I have been working as a Bilingual Educational Designer, adapting international materials for the Brazilian audience through translation, adaptation, and creation of specific content for this audience.',
      experiences: [
        {
          role: 'Instructional Designer',
          company: 'MSX International',
          period: 'since December 2025',
          tasks: [
            'Conduct learning needs analysis in collaboration with business leaders, HR, and subject matter experts.',
            'Design and develop instructional programs, learning modules, support materials, and microlearning content.',
            'Deliver training in multiple formats: eLearning, virtual sessions, hybrid programs, workshops, and social learning initiatives.',
            'Serve as an instructional design expert during LMS implementation, supporting configuration, testing, and launch.'
          ]
        },
        {
          role: 'Senior Curriculum Developer (Bilingual)',
          company: 'Oracle Netsuite',
          period: 'March 2025 - October 2025',
          tasks: [
            'Design, develop, and maintain e-learning courses for all audiences.',
            'Create training documentation, including conceptual framework, storyboards, audio, and simulation scripts for e-learning.',
            'Work with cross-functional teams to develop specifications and gather course content.',
            'Collaborate with subject matter experts (SMEs) to gather best practices and incorporate specialized knowledge into learning objectives and user scenarios.'
          ]
        },
        {
          role: 'Instructional Designer (Bilingual)',
          company: 'Uber Inc. (Aptara)',
          period: 'September 2024 - February 2025',
          tasks: [
            'Create all types of new learning materials (VILT, e-learning, quick guides, "job aids", and others).',
            'Convert existing learning materials from ILT to VILT or eLearning.',
            'Maintain and update training materials.',
            'Work with subject matter experts (SMEs).',
            'Compile learning resources and create detailed, student-focused curricula.',
            'Develop high-quality, effective, and scalable content.',
            'Maintain the accuracy of the Course Catalog in the Learning Management System (LMS).'
          ]
        },
        {
          role: 'Multimedia Editor',
          company: 'iea Soluções Educacionais',
          period: 'November 2023 - August 2024',
          tasks: [
            'Creation of digital experiences for High School students and teachers.',
            'Development of digital educational objects and learning paths.',
            'Content editing and adaptation.',
            'Creation of new digital educational solutions.'
          ]
        },
        {
          role: 'Full Quality Analyst',
          company: 'UOL EdTech',
          period: 'September 2021 - May 2023',
          tasks: [
            'Content and writing analysis.',
            'Accessible content planning.',
            'Interactive educational resources planning.',
            'QAing technical aspects of the learning materials.'
          ]
        }
      ],
      educationTitle: 'Academic Background',
      education: [
        {
          degree: 'Educational Design',
          institution: 'Unifesp - São Paulo Federal University',
          period: '2020 - 2022'
        },
        {
          degree: 'Portuguese and English Studies',
          institution: 'Universidade Cruzeiro do Sul',
          period: '2025 - 2028'
        }
      ]
    },
    cinema: {
      title: 'Cinema',
      description: 'My film reviews and essays on cinema are published by Portal Musicult. On TikTok and Instagram, I dedicate myself to approaching cinema more freely, with topics ranging from movie recommendations to discussions on various aspects of filmmaking.',
      platforms: [
        { label: 'Film Review - Musicult', link: 'https://musicult.com.br/author/guilherme-polonca/' },
        { label: 'TikTok - Cinema Videos', link: 'https://www.tiktok.com/@guipolonca' }
      ],
      items: [
        {
          title: 'As biografias musicais e o Oscar',
          text: 'Conheça as biografias musicais, como as de Freddie Mercury, Bob Dylan e Elton John que foram indicadas e venceram categorias do Oscar.',
          image: '/cinema-post-1.jpg',
          link: 'https://musicult.com.br/2026/03/26/biografias-musicais-oscar/'
        },
        {
          title: 'A Única Saída: uma comédia no capitalismo tardio',
          text: 'Confira a crítica sem spoilers de A Única Saída, novo filme de Park Chan-wook, que estreia dia 22 de janeiro nos cinemas.',
          image: '/cinema-post-2.jpg',
          link: 'https://musicult.com.br/2026/01/22/a-unica-saida-uma-comedia-no-capitalismo-tardio/'
        }
      ]
    },
    chronicles: {
      title: 'Chronicles',
      description: 'Original chronicles and short stories',
      platformLink: 'https://medium.com/@guipolonca',
      platformLabel: 'Read more on Medium',
      items: [
        {
          title: 'São Paulo Sociedade Anônima',
          text: 'Eu tenho sentido certa melancolia depois de sair do cinema. Já não é a primeira vez. Parece que se apaga o projetor e... sei lá. ',
          date: 'March 15, 2026',
          link: 'https://guipolonca.medium.com/s%C3%A3o-paulo-sociedade-an%C3%B4nima-44e0dbd91d78'
        },
        {
          title: 'Quarta-feira de cinzas',
          text: 'ou Memento Mori',
          date: 'February 02, 2026',
          link: 'https://guipolonca.medium.com/quarta-feira-de-cinzas-90e260ae1630'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};
