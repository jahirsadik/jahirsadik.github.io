// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "papers, datasets and preprints in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "courses I have taught or assisted, and students I have mentored.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-activities",
              title: "activities",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/activities/";
              },
            },{id: "dropdown-workshops",
              title: "workshops",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/activities/#workshops";
              },
            },{id: "dropdown-presentations-amp-blogs",
              title: "presentations &amp; blogs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-background",
              title: "background",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/background/";
              },
            },{id: "dropdown-relevant-courses",
              title: "relevant courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/relevant-courses/";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "post-presentation-slides-for-my-talk-on-the-recent-release-of-deepseek-r1",
        
          title: "Presentation slides for my talk on the recent release of Deepseek-R1",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deepseek-r1/";
          
        },
      },{id: "post-review-presentation-on-multimodal-causal-reasoning-in-video-question-answering",
        
          title: "Review presentation on Multimodal Causal Reasoning in Video Question Answering",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mcr/";
          
        },
      },{id: "post-review-presentation-on-kan-kolmogorov-arnold-networks",
        
          title: "Review presentation on KAN: Kolmogorov-Arnold Networks",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-post-3/";
          
        },
      },{id: "post-review-presentation-on-graph-neural-networks-for-learning-equivariant-representations-of-neural-networks",
        
          title: "Review presentation on Graph Neural Networks for Learning Equivariant Representations of Neural Networks...",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-post-2/";
          
        },
      },{id: "post-review-presentation-on-fear-neuro-inspired-rl",
        
          title: "Review presentation on Fear-Neuro-Inspired RL",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-post-1/";
          
        },
      },{id: "post-presentation-slides-for-our-thesis-defense-on-multi-agent-rl-marl",
        
          title: "Presentation slides for our thesis defense on Multi-agent RL (MARL)",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/thesis-defense/";
          
        },
      },{id: "post-presentation-slides-for-our-seminar-on-reinforcement-learning-to-the-cailab-csedu",
        
          title: "Presentation slides for our seminar on Reinforcement Learning to the CAILab, CSEDU",
        
        description: "Presentation Slides and other resources",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/rl-seminar/";
          
        },
      },{id: "news-my-undergraduate-thesis-research-on-heterogeneous-marl-coordination-cohet-was-accepted-as-an-extended-abstract-at-aamas-2025",
          title: 'My undergraduate thesis research on heterogeneous MARL coordination (CoHet) was accepted as an...',
          description: "",
          section: "News",},{id: "news-awarded-the-national-science-and-technology-nst-fellowship-by-the-ministry-of-science-and-technology-bangladesh-for-my-rl-research-project-merit-rank-11th-out-of-1260-candidates-details",
          title: 'Awarded the National Science and Technology (NST) Fellowship by the Ministry of Science...',
          description: "",
          section: "News",},{id: "news-received-the-dean-s-honor-award-and-the-bachelor-s-merit-scholarship-from-the-university-of-dhaka",
          title: 'Received the Dean’s Honor Award and the Bachelor’s Merit Scholarship from the University...',
          description: "",
          section: "News",},{id: "news-started-my-ms-phd-in-computer-science-at-umass-amherst-joining-the-daros-lab-with-dr-donghyun-kim-honored-to-receive-the-paul-utgoff-memorial-graduate-scholarship-from-cics",
          title: 'Started my MS/PhD in Computer Science at UMass Amherst, joining the DARoS Lab...',
          description: "",
          section: "News",},{id: "news-bappa-our-benchmark-of-agents-plans-and-pipelines-for-text-to-sql-generation-with-ccds-collaborators-is-out-on-arxiv",
          title: 'BAPPA, our benchmark of agents, plans and pipelines for Text-to-SQL generation (with CCDS...',
          description: "",
          section: "News",},{id: "news-our-paper-guidenav-a-vision-only-robotic-navigation-assistant-for-blind-travelers-was-accepted-at-hri-2026",
          title: 'Our paper GuideNav, a vision-only robotic navigation assistant for blind travelers, was accepted...',
          description: "",
          section: "News",},{id: "news-started-mentoring-an-undergraduate-researcher-through-the-umass-early-research-scholars-program-on-accessibility-critical-object-datasets-for-assistive-navigation",
          title: 'Started mentoring an undergraduate researcher through the UMass Early Research Scholars Program on...',
          description: "",
          section: "News",},{id: "news-guidenav-received-an-honorable-mention-systems-track-top-3-6-of-accepted-papers-at-hri-2026",
          title: 'GuideNav received an Honorable Mention (Systems Track, top 3.6% of accepted papers) at...',
          description: "",
          section: "News",},{id: "projects-my-book-on-information-and-communications-technology-ict-got-published",
          title: 'My book on Information and Communications Technology (ICT) got published',
          description: "Co-authored book on ICT for entrance exams got published",
          section: "Projects",handler: () => {
              window.location.href = "/activities/ICT-book/";
            },},{id: "projects-champion-junior-in-bangladesh-mathematical-olympiad-regional",
          title: 'Champion (Junior) in Bangladesh Mathematical Olympiad Regional',
          description: "Became Champion of the junior category in Bangladesh Mathematical Olympiad Regional (Dhaka) 2012",
          section: "Projects",handler: () => {
              window.location.href = "/activities/bdmo-2012/";
            },},{id: "projects-first-runner-up-junior-in-bangladesh-mathematical-olympiad-regional",
          title: 'First Runner-up (Junior) in Bangladesh Mathematical Olympiad Regional',
          description: "Became the first runner-up of the junior category in Bangladesh Mathematical Olympiad Regional (Dhaka) 2013",
          section: "Projects",handler: () => {
              window.location.href = "/activities/bdmo-2013/";
            },},{id: "projects-hands-on-deep-learning-amp-open-source-large-language-model-workshop-at-cailab-cse-du",
          title: 'Hands-On Deep Learning &amp;amp; Open-source Large Language Model Workshop at CAILab, CSE, DU...',
          description: "Lectured in the Hands-On Deep Learning &amp; Open-source Large Language Model Workshop at CAILab, CSEDU.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/cail-dl-llm-workshop-24/";
            },},{id: "projects-finalists-at-dataverse-challenge-itverse-2023",
          title: 'Finalists at DataVerse Challenge - ITVerse 2023',
          description: "Finalists in the Dataverse-ITVerse &#39;Bengali Text to IPA (International Phonetic Alphabet) Transcription Competition 2023&#39; powered by bengali.ai &amp; Cefalo.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/dataVerse-challenge-itverse-2023/";
            },},{id: "projects-hult-prize-2021-asia-regional-finalists-amp-campus-champions",
          title: 'Hult Prize 2021 - Asia Regional Finalists &amp;amp; Campus Champions',
          description: "Won the first position in &#39;Hult Prize 2021 on campus round at the University of Dhaka&#39; &amp; went on to become the Asia Regional Finalists at Hult Prize Impact Summits 2021",
          section: "Projects",handler: () => {
              window.location.href = "/activities/hult-prize/";
            },},{id: "projects-awarded-the-national-science-and-technology-nst-fellowship-by-the-ministry-of-science-and-technology-bangladesh",
          title: 'Awarded the National Science and Technology (NST) Fellowship by the Ministry of Science...',
          description: "Have been awarded the National Science and Technology (NST) Fellowship by the Ministry of Science and Technology, Bangladesh for my research project on multimodal RL.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/nst-fellowship/";
            },},{id: "projects-1st-ccds-summer-school-on-random-matrix-theory",
          title: '1st CCDS Summer School on Random Matrix Theory',
          description: "Participated in the &#39;1st CCDS Summer School on Random Matrix Theory&#39; lectured by Arijit Chakrabarty, Associate Professor, Theoretical Statistics and Mathematics Unit, Indian Statistical Institute.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/rmt-summerschool-ccds/";
            },},{id: "projects-2nd-runner-up-at-bdapps-mobile-app-ideathon-powered-by-robi",
          title: '2nd Runner-up at bdapps Mobile App Ideathon powered by Robi',
          description: "Secured the third position in bdapps Mobile App Ideathon 2023 powered by Robi for my application idea titled &#39;MediLink&#39;.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/robi-bdapps/";
            },},{id: "projects-seminar-on-omnipresence-of-artificial-intelligence-challenges-opportunities-and-synergies",
          title: 'Seminar on Omnipresence of Artificial Intelligence: Challenges, Opportunities and Synergies',
          description: "Attended the insightful seminar arranged by Mohammed Yeasin, Ph.D. Professor, Department of Electrical and Computer Engineering, The University of Memphis, Memphis, TN, USA.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/seminar-md-yeasin-UMemphis/";
            },},{id: "projects-seminar-on-accelerating-innovation-unleashing-machine-learning-in-distributed-services",
          title: 'Seminar on Accelerating Innovation: Unleashing Machine Learning in Distributed Services',
          description: "Attended the insightful seminar arranged by Sajib Mistry, PhD. Senior Lecturer, School of Elec Eng, Comp and Math Sci, Faculty of Science and Engineering, Curtin University, Australia.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/seminar-sajib-mistry-curtin-university/";
            },},{id: "projects-undergraduate-thesis-defense",
          title: 'Undergraduate Thesis Defense',
          description: "Me and my thesis partner defended our undergraduate thesis in the Department of Computer Science and Engineering, University of Dhaka. This memorable day also marked my last day as an undergraduate student in University of Dhaka.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/undergrad-thesis-defense/";
            },},{id: "projects-2nd-workshop-on-deep-learning-code-management",
          title: '2nd Workshop on Deep Learning Code Management',
          description: "Worked alongside Dr. AKM Mahbubur Rahman sir to arrange the &#39;2nd Workshop on Deep Learning Code Management at Independent University Bangladesh&#39;.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/workshop-deep-learning-dec-24/";
            },},{id: "projects-workshop-on-hands-on-deep-learning-coding-amp-code-management",
          title: 'Workshop on Hands-on Deep Learning Coding &amp;amp; Code Management',
          description: "Worked alongside Dr. AKM Mahbubur Rahman sir to arrange the &#39;Workshop on Hands-on Deep Learning Coding &amp; Code Management at Independent University Bangladesh&#39;.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/workshop-deep-learning/";
            },},{id: "projects-workshop-on-statistical-inference-frequentist-amp-bayesian-estimation",
          title: 'Workshop on Statistical Inference Frequentist &amp;amp; Bayesian Estimation',
          description: "Attended the week-long workshop on &#39;Statistical Inference Frequentist &amp; Bayesian Estimation&#39; by Dr. Shahariar Huda.",
          section: "Projects",handler: () => {
              window.location.href = "/activities/workshop-statistical-inference-bayesian/";
            },},{id: "teachings-cis-101-coding-for-all-initiative",
          title: 'CIS-101 — Coding for All Initiative',
          description: "Lecturer. Taught CIS-101 students basic Python, application development, and introductory AI as part of IUB&#39;s Coding for All initiative.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/iub-coding-for-all/";
            },},{id: "teachings-compsci-403-introduction-to-robotics-mechanics-dynamics-and-control",
          title: 'COMPSCI 403 — Introduction to Robotics: Mechanics, Dynamics, and Control',
          description: "Graduate Teaching Assistant. Supported the course through lectures, TA hours, and grading, and designed a Reusable Learning Object on coordinate frames and transformations to build students&#39; spatial visualization skills for robotic manipulation. [RLO outcome](https://docs.google.com/presentation/d/e/2PACX-1vS4J6xc0o-a4ClP4FhgmiEPf0Tnrnx8v05uv0AzRiPB315D_HmlzVputLp11gNiLD5YaHJ0dfAFJvQQ/pub?start=false&amp;loop=false&amp;delayms=3000)",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/umass-compsci-403/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6D%6F%6E%6F%6E@%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV-jahir-sadik-monon.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zT4pccQAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jahirsadik", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jahir-sadik-monon-b4946a1a9", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JahirMonon", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/jahirsadikmonon", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
