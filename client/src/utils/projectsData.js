export const projectsData = [
  {
    id: 1,
    title: "Sketch based retrieval system",
    shortDescription: "Small Business Innovation Research proposal tracking platform",
    fullDescription: "A pioneering research project that led the development of a novel deep learning architecture for sketch-based hairstyle image retrieval, representing the first academic implementation of this specific application for hairstyle datasets. As project leader, I designed and implemented the complete system architecture, taking full responsibility for all machine learning components including data preprocessing, model architecture design, and performance optimization.\n\nThe project utilized Python and PyTorch for deep learning implementation, with FastAPI providing efficient web service architecture for real-time sketch processing and image retrieval. Technical innovation included developing a specialized neural network architecture optimized for sketch-to-image matching in the hairstyle domain, requiring extensive research into computer vision techniques and feature extraction methods.\n\nAdvanced data preprocessing pipelines handled sketch normalization, image augmentation, and dataset preparation for a hairstyle dataset that had never been used for sketch-based retrieval applications in existing literature. The project achieved exceptional performance metrics with a 0.99 Hit@1 score, demonstrating near-perfect accuracy in retrieving relevant hairstyle images from sketch inputs.\n\nImplementation included comprehensive data augmentation techniques to enhance model robustness, sophisticated feature embedding networks for optimal sketch-image matching, and efficient indexing systems for real-time retrieval performance. The research culminated in a functional web demonstration platform showcasing the practical applications of the technology.\n\nThis project exemplifies research leadership, innovative problem-solving in computer vision, and the ability to achieve breakthrough performance in novel application domains while managing all technical aspects independently.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "PDF.js", "File Upload"],
    images: [
      "/images/projects/sbir/main.png"
    ],
    features: [
      "SBIR proposal management and tracking",
      "Document collaboration and versioning",
      "Funding application workflows",
      "Progress monitoring and reporting",
      "Compliance tracking and notifications",
      "Multi-user collaboration tools"
    ],
    github: "https://github.com/qiyuansunsam/SBIR.git",
    live: "#",
    demo: "/demos/sbir/video5410928684.mp4"
  },
  {
    id: 2,
    title: "Stock Index predictions with Quantaxis",
    shortDescription: "Algorithmic trading platform with machine learning models",
    fullDescription: "A comprehensive quantitative trading system developed using Python, Quantaxis framework, and advanced LSTM neural networks for sophisticated market analysis and prediction. This project explores diverse methodologies to predict stock prices and market indices, implementing a fully automated quantitative trading bot that generates statistical reports for market consolidation analysis, price convergence prediction, and index fluctuation forecasting specifically designed for risk management applications.\n\nThe system utilizes TensorFlow and Keras for deep learning implementation, with extensive data preprocessing and cleaning pipelines that handle real-time market data feeds. Technical architecture includes LSTM networks trained on historical market data to identify patterns and predict future price movements, integrated with Quantaxis for comprehensive market data management and backtesting capabilities.\n\nThe trading bot automatically executes trades based on model predictions while maintaining strict risk management protocols through statistical analysis of market volatility and trend indicators. Advanced features include real-time portfolio optimization, dynamic position sizing based on volatility metrics, and comprehensive performance reporting with detailed statistical breakdowns of prediction accuracy and trading performance.\n\nThe project demonstrates expertise in quantitative finance, machine learning model deployment, and automated trading system architecture, providing practical tools for professional risk management and investment decision-making in volatile market conditions.",
    technologies: ["Python", "NumPy", "Pandas", "TensorFlow", "Alpaca API", "PostgreSQL", "Docker"],
    images: [
      "/images/projects/quant/main.png",
      "/images/projects/quant/01_real_data_loading.png",
      "/images/projects/quant/02_real_model_training.png"
    ],
    features: [
      "Real-time market data processing",
      "Machine learning signal generation",
      "Automated trading execution",
      "Backtesting and strategy validation",
      "Risk management and portfolio optimization",
      "Performance monitoring and reporting"
    ],
    github: "https://github.com/qiyuansunsam/Quant.git",
    live: "#"
  },
  {
    id: 3,
    title: "Multiple choice questions generator",
    shortDescription: "Intelligent multiple-choice question assessment system",
    fullDescription: "An advanced exam study aid and assessment platform developed using Python, Flask, and modern web technologies, specifically designed to automate Multiple-Choice Question generation through intelligent processing of educational content. This comprehensive system processes PDF documents and contextual materials, utilizing cutting-edge Large Language Model APIs including ChatGPT and Gemini to generate high-quality, relevant questions tailored to specific topics and learning objectives.\n\nThe platform features sophisticated PDF parsing capabilities that extract and analyze text content, identifying key concepts, definitions, and relationships to formulate comprehensive questions with multiple plausible answer choices. Technical implementation includes intelligent question generation algorithms that prevent duplicate questions through advanced hashing and comparison systems, ensuring a diverse and comprehensive question bank.\n\nThe system organizes generated questions into topic-specific categories with metadata tracking for difficulty levels, subject areas, and learning outcomes. Advanced features include context-aware question generation that maintains educational coherence, automatic answer key generation with detailed explanations, and intelligent question bank management that tracks question performance and usage statistics.\n\nThe platform integrates seamlessly with educational workflows, providing export capabilities for various formats and integration options with existing learning management systems. This project demonstrates expertise in natural language processing, educational technology, and intelligent content generation systems.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "JWT Authentication"],
    images: [
      "/images/projects/mcq/main.png"
    ],
    features: [
      "Dynamic question generation",
      "Automatic grading system",
      "Performance analytics and reporting",
      "Adaptive difficulty adjustment",
      "User progress tracking",
      "Export results to various formats"
    ],
    github: "https://github.com/qiyuansunsam/learn.git",
    live: "#",
    demo: "/demos/mcq/video3410928684.mp4"
  },
  {
    id: 4,
    title: "Household energy prediction research paper",
    shortDescription: "Smart energy monitoring and optimization platform",
    fullDescription: "A groundbreaking research project that developed novel methods for utilizing survey data to predict building energy consumption using advanced transformer architectures and Multi-Layer Perceptron (MLP) networks with sophisticated dataset merging, transformation, and DistilBERT integration. As the project leader of a 4-person advanced capstone team (reduced from the standard 7-member configuration), I took full responsibility for all machine learning and deep learning components due to team members' limited experience in these areas.\n\nThis leadership role encompassed complete ownership of project objectives, methodology design, and technical implementation, culminating in my personal completion of 49 out of 50 pages of the core research paper. The technical approach involved innovative encoder designs combining transformer attention mechanisms with traditional MLP architectures to process complex survey data and building characteristics.\n\nAdvanced data preprocessing pipelines handled dataset merging from multiple sources, feature transformation for optimal model performance, and integration with DistilBERT for natural language processing of survey responses. The research methodology included extensive experimentation with different neural network architectures, hyperparameter optimization, and comprehensive evaluation metrics to validate prediction accuracy.\n\nAs the primary client communicator and lead presenter, I managed all stakeholder interactions while ensuring technical deliverables met research standards. This project demonstrates exceptional leadership capabilities, advanced machine learning expertise, and the ability to independently drive complex research initiatives from conception to completion while mentoring team members and maintaining high academic standards throughout the development process.",
    technologies: ["Python", "Machine Learning", "Time Series Analysis", "React", "PostgreSQL", "IoT Integration"],
    images: [
      "/images/projects/energy/main.png"
    ],
    features: [
      "Real-time energy consumption monitoring",
      "Predictive analytics for energy usage",
      "Cost optimization recommendations",
      "Historical data analysis and reporting",
      "IoT device integration",
      "Alert system for unusual consumption patterns"
    ],
    github: "https://bitbucket.org/comp3988_fr10/comp3988_fr10_04_p34/src/main/",
    live: "#",
    downloadLink: "/pdfs/energy.pdf"
  },
  {
    id: 5,
    title: "Exchange rate prediction",
    shortDescription: "Advanced forex trading and analytics platform",
    fullDescription: "A comprehensive long-term project developed for personal AUD-CNY exchange rate prediction, featuring an evolved architecture that progressed from basic linear regression to sophisticated LSTM neural networks with automatically updating databases and real-time API integration. This ongoing project, spanning multiple years from July 2021 to present, demonstrates continuous improvement and adaptation of machine learning methodologies in response to changing market conditions and technological advances.\n\nThe system architecture includes advanced data processing pipelines using Python and TensorFlow Keras for LSTM implementation, with specialized focus on processing, cleaning, and merging diverse financial data sources from multiple APIs. Technical evolution included migrating from traditional statistical models to deep learning approaches, implementing LSTM networks specifically optimized for time series prediction of currency exchange rates.\n\nThe platform features real-time data integration through financial APIs, ensuring continuous model updates with the latest market information, and automatic database maintenance for historical data preservation. Advanced preprocessing techniques handle data normalization, feature engineering for temporal patterns, and sophisticated cleaning algorithms to maintain data quality across extended time periods.\n\nPerformance improvements achieved through LSTM implementation significantly enhanced predictive accuracy compared to earlier linear regression approaches, with comprehensive backtesting validating model effectiveness across various market conditions. This project exemplifies long-term technical commitment, continuous learning, and practical application of evolving machine learning techniques for real-world financial analysis and personal investment decision-making.",
    technologies: ["Python", "Pandas", "scikit-learn", "React", "D3.js", "REST APIs", "WebSocket"],
    images: [
      "/images/projects/exchange/main.png",
      "/images/projects/exchange/aud_timeseries.png",
      "/images/projects/exchange/model_performance_history.png"
    ],
    features: [
      "Real-time currency exchange rates",
      "Technical analysis indicators",
      "Machine learning price predictions",
      "Historical data visualization",
      "Risk assessment tools",
      "Portfolio tracking and analytics"
    ],
    github: "https://github.com/qiyuansunsam/exchange.git",
    live: "#"
  },
  {
    id: 6,
    title: "ChatGPT API intergration",
    shortDescription: "AI-powered real-time chat application",
    fullDescription: "A critical web service developed to provide ChatGPT access in China during the period when OpenAI's services were geographically restricted from Chinese IP addresses (February 2023 - June 2023). This project addressed a significant accessibility challenge by creating a comprehensive mirror service that replicated ChatGPT's user interface and core functionality, including session management, conversation history, and advanced code highlighting capabilities.\n\nBuilt using Python Flask for the backend architecture, with modern HTML, JavaScript, and CSS for frontend implementation, the platform featured seamless integration with OpenAI's API while maintaining geographic accessibility for Chinese users. The technical architecture included sophisticated session management systems, user authentication, real-time message processing, and advanced code highlighting for technical discussions.\n\nRapid development cycle demonstrated exceptional technical agility, with the primary build completed in just two days, showcasing expertise in full-stack web development, API integration, and responsive design principles. The project required five months of continuous maintenance, involving server optimization, API updates, feature enhancements, and user support to ensure reliable service delivery.\n\nCloud computing implementation ensured scalable performance and reliable uptime during peak usage periods. This project exemplifies problem-solving skills, rapid development capabilities, and sustained commitment to providing technological solutions for accessibility challenges, while demonstrating expertise in web service architecture and international deployment considerations.",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB", "JWT"],
    images: [
      "/images/projects/chat/main.png"
    ],
    features: [
      "Real-time messaging with WebSocket",
      "AI-powered conversation assistance",
      "Natural language processing",
      "User authentication and sessions",
      "Message history and persistence",
      "Responsive design for all devices"
    ],
    github: "https://github.com/qiyuansunsam/ChatWeb.git",
    live: "#"
  },
  {
    id: 7,
    title: "Sketch My Hair Android Application",
    shortDescription: "Android hairstyle visualization and AI generation app",
    fullDescription: "Sketch My Hair is an innovative Android hairstyle application developed using Kotlin and Gradle, leveraging advanced machine learning techniques for hair visualization and generation. This project represents a sophisticated continuation of my university sketch-based image retrieval research, now enhanced with practical mobile development implementation.\n\nThe application allows users to create and visualize different hairstyles through an intuitive drawing interface, featuring a comprehensive canvas with various drawing tools, color palettes, and precision controls optimized for mobile touch interactions. The core innovation lies in its AI-powered hairstyle generation system, which processes user sketches and reference images to create new, personalized hairstyle suggestions.\n\nThe app's architecture features a unified navigation interface with floating design elements that adapt contextually across three main functional tabs: drawing workspace, reference gallery, and AI style generation. The floating UI components provide seamless transitions between different modes while maintaining user focus and creative flow.\n\nTechnical implementation includes custom view components for drawing functionality, efficient bitmap processing, and integration with machine learning models trained specifically for hairstyle recognition and generation. The project demonstrates advanced mobile development skills including custom UI/UX design, performance optimization for graphics processing, and seamless integration of AI capabilities within a mobile application framework.",
    technologies: ["Kotlin", "Gradle", "Machine Learning", "Mobile Development", "Android SDK", "AI/ML"],
    images: [
      "/images/projects/smh/main.jpg",
      "/images/projects/smh/7a9cbc167cab008bd155839dcd7c608.jpg",
      "/images/projects/smh/ebdf97e94b31549510e59cb95e2bd43.jpg"
    ],
    features: [
      "Interactive canvas drawing with various tools and colors",
      "Reference image selection for hairstyle inspiration",
      "AI-powered hairstyle generation",
      "Unified navigation with floating design elements",
      "Context-aware tools across three main tabs",
      "Mobile-optimized user experience",
      "Integration with sketch-based image retrieval technology"
    ],
    github: "https://github.com/qiyuansunsam/smh.git",
    live: "#"
  },
  {
    id: 8,
    title: "Personal Portfolio Website",
    shortDescription: "Full-stack responsive portfolio with modern UI/UX design",
    fullDescription: "A comprehensive full-stack responsive portfolio website developed from July 2025 to present, showcasing advanced web development skills through modern React, Node.js, and Express implementation with sophisticated Framer Motion animations and professional deployment on Render platform. This project demonstrates expertise in contemporary web technologies including JavaScript, HTML/CSS, and Git version control, with emphasis on creating an engaging professional presentation platform.\n\nTechnical architecture features a React-based frontend with dynamic component rendering, interactive project galleries incorporating video thumbnails and multi-image display systems, and a robust Node.js/Express backend handling contact form submissions with integrated email functionality. Advanced UI/UX design implementation includes smooth Framer Motion animations that enhance user experience, responsive design principles ensuring optimal viewing across all device types, and professional styling optimized for career presentation and client engagement.\n\nKey features include sophisticated project card systems with dynamic content loading, comprehensive PDF download functionality for project documentation and research papers, mobile-first responsive design ensuring accessibility across platforms, and integrated contact management with email automation.\n\nThe deployment process utilizes modern DevOps practices with Git-based version control and Render platform hosting for reliable performance and scalability. This project exemplifies full-stack development capabilities, modern web design principles, and professional presentation skills, serving as both a technical showcase and practical platform for career advancement and client acquisition.",
    technologies: ["React", "Node.js", "Express", "Framer Motion", "JavaScript", "HTML/CSS", "Git", "Render"],
    images: [
      "/images/projects/web/main.png"
    ],
    features: [
      "Modern UI/UX design with smooth animations",
      "Interactive project galleries with video thumbnails",
      "Downloadable documents and PDF integration",
      "Contact form with email integration",
      "Dynamic project cards with multi-image displays",
      "Mobile-responsive design",
      "Professional presentation optimization",
      "Full-stack architecture with React and Node.js"
    ],
    github: "https://github.com/qiyuansunsam/web",
    live: "#"
  }
]