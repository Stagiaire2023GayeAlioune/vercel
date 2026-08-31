export const siteConfig = {
  name: "Alioune Gaye",
  title: "Data Scientist & Full-Stack AI Developer",
  tagline: "Data Workers",
  description:
    "Portfolio d'Alioune Gaye — Data Scientist, développeur full-stack et expert IA. Solutions data, web, mobile et automatisation métier.",
  profileImage:
    "https://raw.githubusercontent.com/Stagiaire2023GayeAlioune/Mon_application_AutoML/master/dv_lottery.jpg",
  email: "aliounegaye911@gmail.com",
  phone: "+33763556982",
  linkedin: "https://www.linkedin.com/in/alioune-gaye-1a5161172/",
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
];

export const typewriterTexts = [
  "Data Science",
  "Développement Web",
  "Intelligence Artificielle",
  "Automatisation & Analyse de données",
];

export const services = [
  {
    icon: "chart",
    title: "Data Analytics & BI",
    description:
      "Nettoyage, modélisation et visualisation de données pour transformer les KPIs en décisions actionnables.",
  },
  {
    icon: "brain",
    title: "IA Générative & Prédictive",
    description:
      "LLM, RAG, OCR et modèles ML/DL pour automatiser les tâches métier et améliorer la performance opérationnelle.",
  },
  {
    icon: "cog",
    title: "API & Automatisation",
    description:
      "Conception d'API robustes et workflows automatisés (CRON, workers, intégrations tierces, notifications).",
  },
  {
    icon: "server",
    title: "Développement Backend",
    description:
      "Node.js, Express, TypeScript, Django, PostgreSQL/SQL Server, authentification sécurisée et services temps réel.",
  },
  {
    icon: "layout",
    title: "Frontend Web & Mobile",
    description:
      "React, Next.js, Vite, Tailwind, shadcn/ui, React Native, Expo et Flutter pour web, Android et iOS.",
  },
  {
    icon: "puzzle",
    title: "Intégrations Métier",
    description:
      "WhatsApp, OAuth, Google APIs, SendGrid/Nodemailer, paiements (Stripe, PayPal, Wave), PDF/CSV/FEC/SEPA.",
  },
  {
    icon: "dashboard",
    title: "Dashboards & Pilotage",
    description:
      "Power BI, Streamlit et dashboards web sur mesure pour suivre ventes, productivité, recrutement et finance.",
  },
  {
    icon: "database",
    title: "Architecture Data",
    description:
      "Conception de schémas, migrations, ETL, qualité des données et optimisation SQL pour des systèmes fiables.",
  },
  {
    icon: "graduation",
    title: "Formation & Mentorat",
    description:
      "Accompagnement sur mesure en développement full-stack, data/IA, bonnes pratiques projet et montée en compétence.",
  },
  {
    icon: "building",
    title: "Solutions CRM Métier",
    description:
      "CRM adaptés au terrain : prospects, ventes, commissions, recrutement, facturation et suivi opérationnel.",
  },
  {
    icon: "cloud",
    title: "Cloud, DevOps & Qualité",
    description:
      "CI/CD, conteneurisation, monitoring, sécurité, performance et fiabilisation des applications en production.",
  },
  {
    icon: "tool",
    title: "Conseil & Cadrage Produit",
    description:
      "Audit fonctionnel/technique, priorisation roadmap, définition MVP et architecture pour livrer plus vite.",
  },
];

export const highlights = [
  {
    title: "CRM Synergie Marketing Group",
    description:
      "CRM métier complet (prospects, clients, ventes, commissions) — Node.js, React, PostgreSQL, WebSocket.",
  },
  {
    title: "API OCR & LLM Immobilier",
    description:
      "Extraction, validation et structuration de documents administratifs (CNI, bulletins, contrats).",
  },
  {
    title: "Agent IA Juridique Multilingue",
    description:
      "Assistant RAG français/arabe (OpenAI + FAISS) pour interroger une base documentaire interne.",
  },
];

export type Project = {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  link?: { label: string; href: string };
  tags?: string[];
  details?: { label: string; text: string }[];
};

export const projectSections = [
  {
    id: "data-ia",
    title: "Projets Data & IA",
    projects: [
      {
        title: "Détection de la Maladie d'Alzheimer",
        description: "Deep Learning (VGG19, ResNet50) sur IRM pour détecter les stades de démence.",
        image: "/Alzeimer.PNG",
        link: {
          label: "Rapport",
          href: "https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/Stagiaire2023GayeAlioune/Mon_application_AutoML/refs/heads/master/Detection_Alzheimer_Deep_Learning.docx",
        },
        tags: ["Deep Learning", "Vision"],
      },
      {
        title: "Détection du Cancer du Sein",
        description: "Classification échographique des masses mammaires (bénin, malin, normal).",
        image: "/cancer.PNG",
        link: {
          label: "Rapport",
          href: "https://github.com/Stagiaire2023GayeAlioune/Mon_application_AutoML/blob/master/Rapport_Cancer_du_sein.pdf",
        },
        tags: ["ML", "Santé"],
      },
      {
        title: "Détection de Fraude Bancaire",
        description: "Classification des transactions frauduleuses via modèles supervisés.",
        image: "/carte.PNG",
        link: {
          label: "Rapport",
          href: "https://github.com/Stagiaire2023GayeAlioune/Mon_application_AutoML/blob/master/Rapport_detection_fraude.pdf",
        },
        tags: ["ML", "Finance"],
      },
      {
        title: "Analyse des Risques de Crédit",
        description: "Scoring de solvabilité et prévision du risque client par ML.",
        image: "/credi.jpg",
        link: { label: "Application", href: "https://risquedecreditsclients.streamlit.app/" },
        tags: ["Streamlit", "Scoring"],
      },
      {
        title: "Tableau de Bord RH",
        description: "Dashboard interactif pour analyser attrition, performance et démographie RH.",
        image: "/RH.PNG",
        link: { label: "Application", href: "https://applicationtableaudebordanalyserh.streamlit.app/" },
        tags: ["Dashboard", "RH"],
      },
      {
        title: "SO2 et risque de cancer du poumon",
        description:
          "Étude sur la relation entre l'exposition au SO2 et le risque de cancer du poumon chez les travailleurs des usines de pâtes et papiers. Analyses statistiques, revue de littérature et enjeux éthiques des données de santé.",
        link: {
          label: "Consulter le rapport",
          href: "https://github.com/Stagiaire2023GayeAlioune/Mon_application_AutoML/blob/master/Rapport_Complet_Cancer_Poumon_SO2%202.pdf",
        },
        tags: ["Statistiques", "Santé"],
      },
      {
        title: "Analyse et typologie des pays",
        description:
          "Analyse des indicateurs de développement durable : préparation des données, ACP, K-means, analyse des clusters et recommandations.",
        link: {
          label: "Description du projet",
          href: "https://github.com/Stagiaire2023GayeAlioune/Mon_application_AutoML/blob/master/Description_Projet_Developpement_Durable.docx",
        },
        tags: ["ACP", "Clustering"],
      },
    ] as Project[],
  },
  {
    id: "platforms",
    title: "Plateformes & automatisation",
    projects: [
      {
        title: "WaaW — Plateforme Social + WhatsApp",
        description:
          "Plateforme web de marketing multicanal : publication réseaux sociaux, OAuth, WhatsApp Web, diffusion en masse, statistiques et génération vidéo marketing.",
        images: ["/waaw-login.png", "/waaw-home.png"],
        link: { label: "Accéder à l'application", href: "https://www.waaw.cloud/" },
        tags: ["Node.js", "Expo", "WhatsApp", "IA"],
        details: [
          { label: "Vision", text: "Centraliser création, organisation et diffusion marketing multicanal depuis un seul espace." },
          { label: "Focus", text: "WhatsApp Web, historique complet, insights analytiques et workflow vidéo automatisé." },
        ],
      },
      {
        title: "Vetafrik — Site vitrine & serveur WhatsApp",
        description:
          "Vitrine commerciale nutrition animale avec prise de commande via WhatsApp et génération automatique de bons PDF.",
        image: "/veta.png",
        link: { label: "Accéder au site", href: "https://vetafrik.com/fr" },
        tags: ["Next.js", "SQL Server", "WhatsApp"],
      },
      {
        title: "API OCR & LLM pour documents immobiliers",
        description: "Extraction automatique de données structurées à partir de PDF et images grâce à l'OCR et aux LLM.",
        image: "/api_ocr.png",
        tags: ["OCR", "LLM", "API"],
      },
      {
        title: "Agent IA Juridique Multilingue",
        description:
          "Assistant IA bilingue (français/arabe) basé sur RAG, embeddings FAISS et OpenAI pour répondre à des questions juridiques.",
        image: "/ai_juridique.png",
        tags: ["RAG", "OpenAI", "NLP"],
      },
    ] as Project[],
  },
  {
    id: "crm",
    title: "Plateforme CRM métier",
    projects: [
      {
        title: "CRM Métier Full-Stack — Vente Terrain / Télécom",
        description:
          "CRM complet : cycle client, commissions multi-systèmes, recrutement, facturation/comptabilité, messagerie interne et analytics.",
        image: "/crm.png",
        tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
        details: [
          { label: "Utilité", text: "Centraliser l'activité commerciale de prospect à facturation avec traçabilité et audit." },
          { label: "Stack", text: "React 18, TypeScript, Vite, Node.js, Express, PostgreSQL, Drizzle ORM, WebSocket." },
        ],
      },
    ] as Project[],
  },
];

export const aboutContent = {
  intro: [
    "Je suis Alioune Gaye, Data Scientist, statisticien et développeur full-stack orienté produits IA, automatisation métier et plateformes web/mobiles.",
    "J'interviens de bout en bout : cadrage du besoin, architecture technique, développement, déploiement et amélioration continue.",
    "Mon objectif est de transformer la donnée en valeur métier à travers des solutions concrètes, robustes, performantes et évolutives.",
  ],
  education: [
    "Master en Statistique, Modélisation et Science des données – Université Claude Bernard Lyon 1 (Bac +5)",
    "Formation Développeur Full-Stack : applications web, API, bases de données et bonnes pratiques de production",
  ],
  internship: {
    logo: "/LOGO.png",
    title: "Expérience de fin d'études (UCBL)",
    items: [
      "Stage Master 2 SMSD au laboratoire Institut Lumière Matière (ILM), équipe FENNEC — Villeurbanne, France",
      "Sujet : validation d'une approche TRF + IA pour la surveillance en temps réel des polluants dans les effluents industriels et municipaux",
      "Contributions : analyse de données spectrales, pipelines Machine Learning et Deep Learning (CNN) pour identification et quantification",
      "Outils : Python, R, Streamlit, classification, automatisation de protocoles",
      "Impact : résultats prometteurs pour l'aide à la décision environnementale en temps réel",
    ],
  },
  domains: [
    "Développement de plateformes métier (CRM, marketing automation, outils de pilotage)",
    "Industrialisation de workflows data/IA pour les équipes opérationnelles",
    "Intégration d'outils multicanaux (WhatsApp, réseaux sociaux, email, API tierces)",
    "Conception d'interfaces modernes orientées expérience utilisateur",
    "Structuration des données, reporting, dashboards et KPIs décisionnels",
  ],
  softSkills: [
    "Communication claire, esprit d'équipe et collaboration transverse",
    "Rigueur, ownership, fiabilité en production",
    "Capacité de vulgarisation, pédagogie et accompagnement des utilisateurs",
    "Résolution de problèmes complexes et prise de décision orientée impact",
  ],
  techSkills: [
    { category: "IA & Data Science", items: "ML, DL, NLP, Vision, RAG, FAISS, OCR, OpenAI, Gemini" },
    { category: "Backend", items: "Node.js, Express, TypeScript, Django, APIs REST" },
    { category: "Frontend Web", items: "React 18, Next.js, Vite, Tailwind, shadcn/ui, TanStack Query" },
    { category: "Mobile", items: "React Native, Expo, Flutter (Android/iOS)" },
    { category: "Temps réel", items: "WebSocket, workers, Bull/BullMQ, notifications" },
    { category: "Bases de données", items: "PostgreSQL, SQL Server, MySQL, Drizzle ORM" },
    { category: "Intégrations", items: "WhatsApp, OAuth, Google APIs, Stripe, PayPal, Wave" },
    { category: "DevOps", items: "Git, Docker, CI/CD, monitoring, tests" },
  ],
  languages: [
    { group: "Production & IA", items: "Python, TypeScript, SQL" },
    { group: "Applications web", items: "JavaScript" },
    { group: "Analyse statistique", items: "R, Stata" },
    { group: "Programmation système", items: "C++" },
  ],
  tools: [
    { group: "BI & reporting", items: "Power BI, Tableau" },
    { group: "Dashboards", items: "Streamlit, Shiny" },
    { group: "Cloud & collab", items: "Azure, GCP, AWS, GitHub, Postman, Notion, Jira" },
  ],
};
