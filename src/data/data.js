import aboAkademiLogo from "@/assets/images/logos/abo-akademi-logo.gif";
import nacionalLogo from "@/assets/images/logos/nacional-logo.png";
import airbusLogo from "@/assets/images/logos/airbus-logo.png";
import alstomLogo from "@/assets/images/logos/alstom-logo.png";
import malardalensLogo from "@/assets/images/logos/malardalens-logo.svg";
import puntoredLogo from "@/assets/images/logos/puntored-logo.png";
import riseLogo from "@/assets/images/logos/rise-logo.svg";
import tuhhLogo from "@/assets/images/logos/tuhh-logo.png";
import veciLogo from "@/assets/images/logos/veci-logo.webp";
import empresasCruzLogo from "@/assets/images/logos/empresas-cruz-logo.jpeg";
import edissLogo from "@/assets/images/logos/ediss-logo.png";


export default {
    
    experiences: [ 
    {
      company: "Åbo Akademi University",
      position: "Research Assistant",
      location: "Turku, Finland",
      locationCountry: "fi",
      startDate: "October 2024",
      endDate: "Present",
      tasks: [
        "Researching automatization of co-simulation Simulink projects through Functional Mock-up Units (FMUs).",
        "Exploring ubiquitous integration of automation logic, enabling model exchange HVAC systems and other complex scenarios.",
      ],
      logo: aboAkademiLogo,
      year: "2024",
      skills: ["Data Science", "Research"],
      type: "Data Science",
    },
    {
      company: "Alstom",
      position: "Master's Thesis Student",
      location: "Remote",
      locationCountry: "se",
      startDate: "February 2024",
      endDate: "October 2024",
      tasks: [
        "Performed advanced research in Requirements Engineering to achieve automated generation of technical diagrams (i.e. Function Block Diagrams [FBD]) using NLP and AI.",
        "Enhanced the verification process in railway safety-critical systems, reducing human intervention for industrial processes.",
      ],
      logo: alstomLogo,
      year: "2024",
      skills: ["Requirements Engineering", "AI", "Research"],
      type: "Research",
    },
    {
      company: "RISE - Research Institute of Sweden",
      position: "Machine Learning Intern",
      location: "Remote",
      locationCountry: "se",
      startDate: "July 2023",
      endDate: "August 2023",
      tasks: [
        "Worked on Large Language Models (LLMs) like BERT classifiers fine-tuned and evaluated for Enterprise Software Engineering.",
        "Designed a pipeline for multilabel classification of GitHub issues, achieving ~75% accuracy using fine-tuned LLMs.",
      ],
      logo: riseLogo,
      year: "2023",
      skills: ["Machine Learning", "Data Processing", "Research"],
      type: "Data Science",
    },
    {
      company: "Empresas Cruz",
      position: "Technical Leader",
      location: "Remote",
      locationCountry: "co",
      startDate: "August 2022",
      endDate: "December 2022",
      tasks: [
        "Directed the development of Inmobana: a project to match real estate agents and properties with buyers.",
        "Designed architecture based on microservices and AWS, using Serverless Application Model (SAM) templates.",
        "Led a team of two for frontend web development in React and AWS Amplify following Scrum methodology.",
      ],
      logo: empresasCruzLogo,
      year: "2022",
      skills: ["Architecture", "AWS", "Scrum"],
      type: "Software Engineering",
    },
    {
      company: "PuntoRed - Veci",
      position: "Backend Leader",
      location: "Bogotá, Colombia",
      locationCountry: "co",
      startDate: "January 2022",
      endDate: "July 2022",
      tasks: [
        "Codirected new core business functionalities like small loans and improved payment gateway operations.",
        "Interoperated with other banking APIs to enable Veci as an independent fintech startup, reaching 7000+ small businesses.",
      ],
      logo: veciLogo,
      year: "2022",
      skills: ["FinTech", "Backend Development"],
      type: "Software Engineering",
    },
    {
      company: "PuntoRed - PuntoPay",
      position: "Backend Engineer",
      location: "Bogotá, Colombia",
      locationCountry: "co",
      startDate: "September 2020",
      endDate: "December 2021",
      tasks: [
        "Developed RESTful backend in Ruby on Rails and front-end development with Nuxt.js for PuntoPay’s back office.",
        "Reduced incident resolution times by 87% and compensation times from four days to one day.",
        "Implemented unit tests in Jenkins pipelines for Dockerized microservices architecture with SonarQube assessments.",
      ],
      logo: puntoredLogo,
      year: "2021",
      skills: ["Ruby on Rails", "Nuxt.js", "CI/CD"],
      type: "Software Engineering",
    },
    {
      company: "Universidad Nacional de Colombia",
      position: "Research Assistant",
      location: "Bogotá, Colombia",
      locationCountry: "co",
      startDate: "August 2020",
      endDate: "February 2021",
      tasks: [
        "Performed data analysis on UNCode data to understand student progress in programming courses.",
        "Enhanced automatic reporting in Metabase using MongoDB aggregation queries.",
      ],
      logo: nacionalLogo,
      year: "2020",
      skills: ["Data Analysis", "MongoDB"],
      type: "Data Science",
    },
    {
      company: "Universidad Nacional de Colombia",
      position: "Teaching Assistant",
      location: "Bogotá, Colombia",
      locationCountry: "co",
      startDate: "February 2020",
      endDate: "June 2020",
      tasks: [
        "Led practical sessions for a programming course, teaching problem-solving using Codeforces-like exercises.",
        "Conducted lectures and solved student queries using Piazza.",
      ],
      logo: nacionalLogo,
      year: "2020",
      skills: ["Teaching", "Programming"],
      type: "Education",
    },
    {
      company: "Airbus Commercial Aircraft SAS",
      position: "Information Access Management and DevOps Intern",
      location: "Hamburg, Germany",
      locationCountry: "de",
      startDate: "March 2019",
      endDate: "September 2019",
      tasks: [
        "Improved IAM requests and knowledge management for a system involving 50,000+ employees.",
        "Implemented Jenkins for CI/CD deployment in Kubernetes (OpenShift).",
      ],
      logo: airbusLogo,
      year: "2019",
      skills: ["DevOps", "Kubernetes", "Jenkins"],
      type: "DevOps",
    },
    {
      company: "Universidad Nacional de Colombia",
      position: "Data Analyst",
      location: "Bogotá, Colombia",
      locationCountry: "co",
      startDate: "October 2019",
      endDate: "November 2019",
      tasks: [
        "Assessed performance by designing automatic reports in Metabase using MongoDB aggregation queries.",
        "Analyzed data with Python and MongoDB to enhance programming courses.",
      ],
      logo: nacionalLogo,
      year: "2019",
      skills: ["Data Analysis", "MongoDB"],
      type: "Data Science",
    },
    {
      company: "Universidad Nacional de Colombia",
      position: "Software Developer",
      location: "Bogotá, Colombia",
      locationCountry: "co",
      startDate: "November 2017",
      endDate: "March 2018",
      tasks: [
        "Developed a web app to manage graduate student information using Vue.js and Ruby on Rails.",
        "Designed integration and functionality tests with Test-Driven Development (TDD).",
      ],
      logo: nacionalLogo,
      year: "2018",
      skills: ["Ruby on Rails", "Vue.js", "TDD"],
      type: "Software Engineering",
    },
  ],
    projects: [
      {
        company: "Åbo Akademi University",
        project: "Test Effort Estimation (TEE) Tool",
        location: "Finland",
        locationCountry: "fi", // Finland flag
        startDate: "August 2022",
        endDate: "May 2023",
        year: "2022",
        logo: aboAkademiLogo,
        tasks: [
          "A research project to generate, design, and implement a Test Effort Estimation (TEE) system that could automatically approximate how much effort is needed to complete testing in a project enhanced with Machine Learning (ML-TEE).",
          "Built the dataset’s pipeline extraction from open-source projects using code smells, architectural smells, and software metrics, to gather features at a commit level, pull-request level, and release level. The dataset was used to predict TEE.",
          "Created a tool that extracts features from Java repositories with a meaningful number of test cases and a high number of closed pull requests (i.e., an active development cycle) as a means to gather quality data for TEE prediction.",
        ],
        skills: ["Machine Learning", "Software Metrics", "Pipeline Development"],
        type: "Research",
      },
      {
        company: "Universidad Nacional de Colombia",
        project: "Pollution Forecasting Model for Bogotá",
        location: "Bogotá, Colombia",
        locationCountry: "co", // Colombia flag
        logo: nacionalLogo,
        startDate: "February 2020",
        endDate: "September 2020",
        year: "2020",
        tasks: [
          "Research within the ITS branch of PLaS to obtain a deep learning model to forecast up to 48 hours of air quality based on traffic, meteorological, and pollution factors in Bogotá, yielding a scientific article.",
          "Implemented the preprocessing, data analysis, and a data-intensive model using a randomized grid search approach with ARIMA, MLP, and LSTM models as comparison points to develop a CNN-LSTM and other model architectures.",
          "The data warehouse was stored in MongoDB and processed using QGIS and Python libraries (i.e., GeoPandas).",
        ],
        skills: ["Deep Learning", "Forecasting", "Data Processing"],
        type: "Bachelor Thesis",
      },
      {
        company: "Universidad Nacional de Colombia",
        project: "IBIS + Einfach, CMS + DSL to Prototype and Visualize Web Applications",
        location: "Bogotá, Colombia",
        locationCountry: "co", // Colombia flag
        logo: nacionalLogo,
        startDate: "December 2019",
        endDate: "February 2020",
        year: "2019",
        tasks: [
          "Developed a tool to manage HTML5/JQuery/JavaScript-generated content through a custom Domain Specific Language (DSL).",
          "Designed grammar for the DSL, which was developed using ANTLR4.",
          "Contributed to the development using IONIC.",
        ],
        skills: ["DSL Design", "ANTLR4", "Ionic"],
        type: "Web Development",
      },
      {
        company: "Universidad Nacional de Colombia",
        project: "Ataraxia",
        location: "Bogotá, Colombia",
        locationCountry: "co", // Colombia flag
        logo: nacionalLogo,
        startDate: "August 2017",
        endDate: "January 2018",
        year: "2017",
        tasks: [
          "Web application for planning, organizing, and visualizing all the curriculums offered by the university.",
          "Developed using Ruby on Rails (RoR) as a full-stack framework, and PostgreSQL as the production database.",
          "Deployed in Heroku, with testing managed via RSpec. The app was used by 2000+ university members.",
          "Improved the application by iterating through feedback from the users.",
        ],
        skills: ["Ruby on Rails", "PostgreSQL", "RSpec"],
        type: "Web Application",
      },
      {
        company: "Universidad Nacional de Colombia",
        project: "Dentistware",
        location: "Bogotá, Colombia",
        locationCountry: "co", // Colombia flag
        logo: nacionalLogo,
        startDate: "July 2016",
        endDate: "December 2016",
        year: "2016",
        tasks: [
          "Developed a web application for scheduling, registering, and managing patients’ appointments and clinical histories of dentistry.",
          "Developed using PHP language and CodeIgniter framework.",
          "Worked mostly in the back end in functionalities such as appointment scheduling and CRUDs over patients' entries.",
        ],
        skills: ["PHP", "CodeIgniter", "Back-end Development"],
        type: "Web Application",
      },
    ],
    data: {
        "main": {
          "name": {
            "first": "Nicolás",
            "last": "Restrepo Torres"
          },
          "logo": true,
          "titles": [
            "Software Engineer",
            "Data Scientist.",
            "Computer Scientist.",
            "AI/NLP"
          ],
          "headings": {
            "about": "About Me",
            "education": "Education",
            "skills": "Skills",
            "portfolio": "Portfolio",
            "contact": "Contact"
          }
        },
        "about": {
          "bio": `
And I am currently open to new opportunities in Data Science, AI/ML, Full-Stack Development, and DevOps. <br> <br>

I have a diverse background in AI/ML, software development, DevOps, and data engineering, working across industries such as FinTech, transportation, academia, and enterprise software. My expertise includes NLP, full-stack software development, leading DevOps initiatives, and delivering data-driven solutions. <br><br>

I hold a Master’s in Engineering of Data-Intensive Intelligent Software Systems (EDISS), specializing in AI with major projects in AI and internships within NLP; and a Bachelor’s in Computer and Systems Engineering from the National University of Colombia, where I focused on algorithms, software engineering, and theoretical computer science. These experiences and my professional career have sharpened my ability to solve complex problems with data-centric solutions and robust software design principles. <br><br>

Professionally, I’ve applied large language models (LLMs) like BERT to solve real-world challenges in enterprise software and safety-critical systems. I’ve also led development teams, optimizing pipelines and deployment processes to improve system reliability. I thrive in innovative, agile environments that encourage continuous learning and cross-functional collaboration. Passionate about music and learning languages.
  `,
          "tagline": "M.Sc. in Engineering of Data-intensive Intelligent Software Systems (EDISS)",
          "facts": [
            { "name": "LinkedIn", "value": "https://www.linkedin.com/in/nrestrepot/" },
            { "name": "Contact Number", "value": "+46 76 96 36 253" },
            { "name": "Highest GPA", "value": "5.0 / 5.0" }
          ]
        },
      "skills": {
          "defaultCategory": "All Skills",
          "categories": [
            {
              "category": "Programming Languages",
              "subtitle": "Experienced in various languages",
              "faClass": "fas fa-code",
              "skillList": [
                { "name": "Python", "years": 4.5 },
                { "name": "Ruby on Rails", "years": 3.8 },
                { "name": "Java", "years": 4 },
                { "name": "JavaScript", "years": 4.2 }
              ]
            },
            {
              "category": "Frameworks",
              "subtitle": "Skilled in frameworks and libraries",
              "faClass": "fas fa-layer-group",
              "skillList": [
                { "name": "React.js", "years": 3 },
                { "name": "Vue.js", "years": 2.5 },
                { "name": "Django", "years": 3.5 },
                { "name": "Spring Boot", "years": 2 },
                { "name": "Springx Boot", "years": 2 }
              ]
            },
            
            {
              "category": "Technologies",
              "subtitle": "Proficient in tools and platforms",
              "faClass": "fas fa-tools",
              "skillList": [
                { "name": "Docker", "years": 3.5 },
                { "name": "AWS (Amplify, Cognito)", "years": 3 },
                { "name": "MongoDB", "years": 4 },
                { "name": "Kubernetes", "years": 2.5 }
              ]
            },
            {
              "category": "Front-End",
              "subtitle": "UI and UX development",
              "faClass": "fas fa-paint-brush",
              "maxYearsToShow": 55,
              "skillList": [
                { "name": "HTML/CSS", "years": 5 },
                { "name": "Sass", "years": 4 },
                { "name": "Tailwind CSS", "years": 2.5 },
                { "name": "Bootstrap", "years": 4.5 }
              ]
            },
            {
              "category": "Back-End",
              "subtitle": "Server-side and API development",
              "faClass": "fas fa-server",
              "skillList": [
                { "name": "Node.js", "years": 3.5 },
                { "name": "Express.js", "years": 3 },
                { "name": "GraphQL", "years": 2.5 },
                { "name": "SQL (MySQL, PostgreSQL)", "years": 4 }
              ]
            },
            {
              "category": "Methodologies",
              "subtitle": "How I work",
              "faClass": "fas fa-project-diagram",
              "skillList": [
                { "name": "Agile/Scrum", "years": 4 },
                { "name": "Test-Driven Development", "years": 3.5 },
                { "name": "CI/CD", "years": 4 },
                { "name": "DevOps Practices", "years": 3, "logo": "logo" }
              ]
            }
          ]
        },
          "profile": {
            "defaultTab": "languages",
            "sections": [
              {
                "title": "Languages",
                "key": "languages",
                "items": [
                  { "title": "Spanish", "description": "Native", "second_description": "Proficient", "flag": "co" },
                  { "title": "English", "description": "C1 – TOEFL: 104/120", "second_description": "Fluent", "flag": "gb"  },
                  { "title": "German", "description": "B2 – TestDaF 4/5", "second_description": "Conversational", "flag": "at"  },
                  { "title": "Italian", "description": "Intermediate", "second_description": "" , "flag": "it" },
                  { "title": "Finnish", "description": "Beginner", "second_description": "", "flag": "fi"  }
                ]
              },
              {
                "title": "Awards",
                "key": "awards",
                "items": [
                  {
                    "title": "KOSPIE DAAD Scholarship",
                    "description": "Full scholarship for one year in Germany funded by DAAD (worth 11,000 USD)",
                    "image": "daad.png",
                    "source": "google.com",
                    "link": "https://www.albumoftheyear.org/"
                  },
                  {
                    "title": "Scholarship Best GPAs",
                    "description": "Scholarship for taking courses in German and Italian (worth 450 USD)",
                    "image": "gpa.png"
                  },
                  {
                    "title": "EMJMD Scholarship",
                    "description": "Accepted as one of 23 students for a joint master's degree funded by the EU (worth 49,000 USD)",
                    "image": "emjmd.png"
                  }
                ]
              },
              {
                "title": "Other Activities",
                "key": "other",
                "items": [
                  {
                    "title": "Music Reviews",
                    "description": "Read my reviews on AOTY",
                    "image": aboAkademiLogo,
                    "link": "https://www.albumoftheyear.org/user/saccord/"
                  },
                  {
                    "title": "Badminton",
                    "description": "I enjoy playing Badminton in my free time.",
                    "image": "badminton.png"
                  },
                  {
                    "title": "Dancing",
                    "description": "I practice Salsa and Bachata.",
                    "image": "dancing.png"
                  },
                  {
                    "title": "PLaS Research Group",
                    "description": "Participated in the Programming Languages and Systems (PLaS) research group.",
                    "image": "plas.png"
                  },
                  {
                    "title": "Competitive Programming",
                    "description": "Codeforces, HackerEarth (Handle: Saccord).",
                    "image": "coding.png"
                  }
                ]
              }
            ]
          },
        "contact": {
          "linkedin": "https://www.linkedin.com/in/nrestrepot/",
          "text": "Feel free to reach out for collaborations or opportunities!",
          "formTitle": "Get in Touch",
          "formEndPoint": "",
          "city": "Turku, Finland",
          "email": "nrestrepotorres@gmail.com",
          "phone": "+46 76 96 36 253",
          "resumeLink": "https://www.linkedin.com/in/nrestrepot/",
          "form": true,
          "social": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/nrestrepot/",
              "faClass": "fab fa-linkedin"
            },
            {
              "name": "github",
              "url": "https://github.com/NicolasRestrepoTorres",
              "faClass": "fab fa-github"
            }
          ]
        },
        "footer": {
          "copyrightText": "© 2025 Nicolas Restrepo Torres. All rights reserved."
        }
      },

    educationContent: {
      isEducationVisible: false,
        filterMode: "all", // 'all', 'master', 'bachelor', 'exchange'
        gpaSystem: "European (1-5)", // Current GPA system displayed
        scaleVisible: false, // Toggle for displaying scale table
        filterOptions: [
          { label: "Show all", value: "all", flag: ["se", "fi", "de", "co"] },
          { label: "Masters", value: "master", flag: ["se", "fi"]},
          { label: "Bachelor", value: "bachelor", flag: "co" },
          { label: "Exchange Semester", value: "exchange", flag: "de" },
        ],
        currentScale: {
          "European (1-5)": "1.0 - 5.0",
          Percentage: "90% - 100%",
          "Letter Grade": "A+",
          "4.0 Scale": "4.0",
          "German Scale": "1.0",
        },
        typeColors: {
          all: "#007bff",
          master: "#e8f5e9",
          bachelor: "#fff3e0",
          exchange: "#e3f2fd",
        },
        education: [
          {
            institution: "EDISS",
            degree: "M.Sc. Erasmus Mundus Joint Master Degree Programme on the Engineering of Data-intensive Intelligent Software Systems",
            startDate: "August 2023",
            endDate: "January 2025",
            description:
              "Erasmus Mundus Joint Masters Degree Engineering of Data-Intensive Intelligent Software Systems.",
            skills: ["Analytical Skills", "Industrial Research", "Deep Learning"],
            courses: ["Big Data Analysis", "AI in Industry", "Distributed Systems"],
            logo: edissLogo,
            type: "master",
            countryFlag: "fi",
            gpa: { current: 4.8, max: 5.0, min: 0.0, scale: "European (1-5)" }
          },
          {
            institution: "Mälardalen University",
            degree: "M.Sc. Master's degree, Industrial Software Engineering",
            startDate: "August 2023",
            endDate: "October 2024",
            description:
              "Second year of Erasmus Mundus Joint Masters Degree Engineering of Data-Intensive Intelligent Software Systems.",
            skills: ["Analytical Skills", "Industrial Research", "Deep Learning"],
            courses: ["Big Data Analysis", "AI in Industry", "Distributed Systems"],
            logo: malardalensLogo,
            type: "master",
            countryFlag: "se",
            gpa: { current: 4.7, max: 5.0, min: 0.0, scale: "European (1-5)" }
          },
          {
            institution: "Åbo Akademi University",
            degree: "M.Sc. Master of Science, Data Science",
            startDate: "August 2022",
            endDate: "July 2024",
            description:
              "First year of Erasmus Mundus Joint Masters Degree Engineering of Data-Intensive Intelligent Software Systems.",
            skills: ["Cloud Computing", "Machine Learning", "Data Science"],
            courses: ["Cloud Infrastructure", "Machine Learning Techniques", "Statistics"],
            logo: aboAkademiLogo,
            type: "master",
            countryFlag: "fi",
            gpa: { current: 5.0, max: 5.0, min: 0.0, scale: "European (1-5)" }
          },
          {
            institution: "Universidad Nacional de Colombia",
            degree: "B.Sc. Ingeniería de Sistemas y Computación, Computer and Systems Engineer",
            startDate: "2014",
            endDate: "2020",
            description:
              "Activities and societies: Software Architecture, Algorithms, and Intelligent Systems.",
            skills: ["Programming", "Algorithms", "Software Engineering"],
            courses: ["Algorithm Design", "Operating Systems", "Databases"],
            logo: nacionalLogo,
            type: "bachelor",
            countryFlag: "co",
            gpa: { current: 4.4, max: 5.0, min: 0.0, scale: "European (1-5)" }
          },
          {
            institution: "Hamburg University of Technology",
            degree: "Informatiker, Computational Science and Engineering",
            startDate: "2018",
            endDate: "2019",
            description:
              "Exchange student under DAAD scholarship. Activities and societies: Functional Programming, Robotics.",
            skills: ["Functional Programming", "Cognitive Robotics"],
            courses: ["Robotics", "Functional Programming", "AI Fundamentals"],
            logo: tuhhLogo,
            type: "exchange",
            countryFlag: "de",
            gpa: { current: 1.7, max: 1.0, min: 6.0, scale: "German" }
          },
        ],
      }
    

    };