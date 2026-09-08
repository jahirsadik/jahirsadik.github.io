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
          description: "workshops and sessions I have lectured in or helped organise.",
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
            },},{id: "teachings-workshop-on-hands-on-deep-learning-coding-amp-code-management",
          title: 'Workshop on Hands-on Deep Learning Coding &amp;amp; Code Management',
          description: "Two-day workshop at IUB covering deep learning programming from scratch in NumPy, training and fine-tuning CNNs, experiment design and result analysis, and coding standards for deep learning. I presented alongside Dr. AKM Mahbubur Rahman and walked through the hands-on coding examples and exercises. [Slides](https://docs.google.com/presentation/d/1TA0gqa-n65c8HUFutPH_H9RikpTa_Hqs/edit?usp=sharing) · [Event page](https://ccds.ai/event/workshop-on-hands-on-deep-learning-coding-code-management/) · [More](/activities/workshop-deep-learning/)",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/dl-code-management-1/";
            },},{id: "teachings-hands-on-deep-learning-amp-open-source-llm-workshop",
          title: 'Hands-On Deep Learning &amp;amp; Open-source LLM Workshop',
          description: "Two-day workshop at CAILab, CSE, University of Dhaka. I conducted the Deep Learning session with Prothito Shovon Majumder, introducing undergraduates and industry professionals to MLPs, PyTorch, and getting started with large language models. [Slides](https://docs.google.com/presentation/d/1wR4QoBrS45KUEGONRlDq9AvhGI8RBaHAvg-u-XDu4FY/edit?usp=sharing) · [Workshop page](https://cognistorm.ai/llm-workshop) · [More](/activities/cail-dl-llm-workshop-24/)",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cail-dl-llm-workshop/";
            },},{id: "teachings-2nd-workshop-on-deep-learning-code-management",
          title: '2nd Workshop on Deep Learning Code Management',
          description: "Two-day hands-on workshop for research interns and Neural Networks students at IUB — VGG16 for image classification, NLP with LSTM/Transformer/BERT, project management in VS Code, and experiment tracking with wandb.ai and Lightning.ai. Organised with Dr. AKM Mahbubur Rahman; I prepared materials and assisted the hands-on sessions. [Event page](https://ccds.ai/event/workshop-on-hands-on-deep-learning-coding-code-management-2/) · [More](/activities/workshop-deep-learning-dec-24/)",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/dl-code-management-2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%68%69%72%73%61%64%69%6B%6D%6F%6E%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://drive.google.com/file/d/1a2jRV6-zb1kC7ImiGlIgou-PJCvrqMeK/view?usp=sharing", "_blank");
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
