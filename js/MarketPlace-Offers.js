const data = [
  {
      "category": "apps",
      "subCategory": "powerbi",
      "Heading": "BI Hub",
      "Content": "The need to manually compile reports across multiple workspaces limits your ability to make quick decisions, the main purpose of BI.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.bi_hub?tab=Overview"
  },
  {
      "category": "apps",
      "subCategory": "powerbi",
      "Heading": "EmbedFAST",
      "Content": "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow. Save time, effort, costs, and resources by using our ready-to-use API.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=Overview0"
  },
  {
      "category": "apps",
      "subCategory": "powerbi",
      "Heading": "LoadFAST",
      "Content": "LoadFAST provides an automated solution to capture, analyze, and optimize the page load time (PLT) of your reports.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview"
  },
  {
      "category": "apps",
      "subCategory": "aiml",
      "Heading": "Text Analytics Engine",
      "Content": "Looking for a better way to derive meaningful insights from text data? Say goodbye to manual, time-consuming, and biased analysis processes.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.text_analytics_application_dev?tab=Overview"
  },
  {
      "category": "apps",
      "subCategory": "aiml",
      "Heading": "Validation Framework",
      "Content": "Complex data ecosystems demand a comprehensive solution to validate, monitor, and verify data throughout its lifecycle.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.validationframework_paid?tab=Overview"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Admin Center of Excellence: 2-Day Workshop",
      "Content": "Establish an Administration Center of Excellence with a comprehensive 2-day workshop and optimize your administrative workflows.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.admincoe?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Advanced Azure Synapse Analytics: 3-Day Workshop",
      "Content": "Elevate your Azure Synapse Analytics skills in a 3-day workshop, improving data processing and insights.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.threedayazuresynapseworkshop?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Advanced Data Analytics with Power BI: 3-Day Workshop",
      "Content": "Elevate your data analytics capabilities with a 3-day Power BI workshop.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.advanced_data_analytics_with_powerbi_workshop?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Advanced Data Modeling with Power BI: 3-Day Workshop",
      "Content": "Deepen your data modeling expertise in a 3-day Power BI workshop.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.advanced_diad?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Advanced Visualization with Power BI: 1-Day Workshop",
      "Content": "Improve your Power BI visualization skills in a comprehensive 1-day workshop.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.advanced_visualization_power_bi_1-day_workshop?page=1&exp=ubp8&search=Advanced%20data%20visualization"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "AI & ML for Power BI: 1-Day Workshop",
      "Content": "Unlock the power of AI and ML in Power BI in a 1-day workshop, improving data-driven insights.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.aimlforpowerbi1dayworkshop?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "generativeai",
      "Heading": "Automate KYC for Customers: 6-Week Proof of Concept",
      "Content": "Streamline KYC processes with a 6-week proof of concept, ensuring compliance and efficiency.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.automatekycforcustomers-preview?tab=Overview&flightCodes=automatekycforcustomers"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Azure Cost optimization: 3-Week Assessment",
      "Content": "Optimize your Azure costs with a 3-week assessment, ensuring cost-efficient cloud operations.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.azurecostoptimization?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Azure DevOps using GitHub: 1-week Assessment",
      "Content": "Explore Azure DevOps with GitHub in a concise 1-week assessment, improving your software development processes.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.azuredevopsusinggithub-preview?tab=Overview&flightCodes=azuredevopsusinggithub"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Azure Synapse Analytics in a Day: 8-Hour Workshop",
      "Content": "Discover the capabilities of Azure Synapse Analytics in an 8-hour workshop, improving data analytics.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.aidworkshop?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Azure Synapse Analytics: 2-Hour briefing",
      "Content": "Gain a comprehensive overview of Azure Synapse Analytics in a concise 2-hour briefing.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.synapse_briefing?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Azure Synapse Analytics: 2-Week Proof of Concept ",
      "Content": "Dive into Azure Synapse Analytics with a 2-week proof of concept, exploring its capabilities for your data needs.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.synapse_poc?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Center of Excellence: Free 1-Hour Briefing",
      "Content": "Gain insights into establishing a Center of Excellence for Power BI in a free 1-hour briefing.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.coebriefing?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Cloud Migration: 1-Week Assessment",
      "Content": "Plan your cloud migration with a 1-week assessment, ensuring a smooth transition to the cloud.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.cloud_migration_assessment?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "generativeai",
      "Heading": "Conversational Bot: 6-Week Proof of Concept",
      "Content": "Improve customer interactions with a 6-week conversational bot proof of concept, improving engagement.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.conversationalbotpoc-preview?tab=Overview&flightCodes=69393774de6946debfc30c9a41570260"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Custom Power BI Visuals: 1-Hour Briefing",
      "Content": "Learn about the power of custom Power BI visuals in a concise 1-hour briefing and discover how you can unlock more insights.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.customvisualbriefing?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Custom Power BI Visuals: 2-Week Proof of Concept",
      "Content": "Explore the creation of custom Power BI visuals in a 2-week proof of concept, improving data storytelling.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maqsoftware_customvisual_offering?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "dynamics",
      "Heading": "Customer Insights: 4-Week Implementation",
      "Content": "Implement customer insights solutions in just 4 weeks, improving customer engagement and satisfaction.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.customer_insights_4wk_implementation?page=1&search=maq&product=dynamics-365"
  },
  {
      "category": "consulting",
      "subCategory": "generativeai",
      "Heading": "Customer Sentiment Analysis: 6-Week Proof of Concept",
      "Content": "Implement customer sentiment analysis in a 6-week proof of concept, improving customer understanding.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.customer_sentiment_analysis-preview?tab=Overview&flightCodes=bb6b9ae1502b4a10a3f76dd7e1e3e321"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Data Migration Strategy for Power BI: 2-Week Workshop ",
      "Content": "Develop a robust data migration strategy for Power BI in a 2-week workshop, ensuring data integrity for your organization.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.migrationstrategy2?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Data Science Toolkit: 1-Day Briefing",
      "Content": "Gain insights into the data science toolkit in a 1-day briefing, unlocking the power of data analytics.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.datasciencetoolkit?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Data Visualization Center of Excellence: 2-Day Workshop",
      "Content": "Establish a Data Visualization Center of Excellence in a comprehensive 2-day workshop.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.datavizcoe?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Demand Forecasting: 5-Week Proof of Concept",
      "Content": "Improve your demand forecasting in a 5-week proof of concept, improving inventory management and customer satisfaction.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.demandforecastingpoc?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "dynamics",
      "Heading": "Dynamic Routing Rules: 4-Week Implementation",
      "Content": "A routing rule consists of a set of conditions and a destination user/team. Routing rules ensure that records are automatically routed to the right people at the right time.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamic_routing_rules?page=1&search=maq&product=dynamics-365"
  },
  {
      "category": "consulting",
      "subCategory": "dynamics",
      "Heading": "Dynamics 365 Security Audit: 2-Day Assessment",
      "Content": "In an era of remote work and global data breaches, data security is a key priority for all businesses.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamics_security_assessment?page=1&search=maq&product=dynamics-365"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Export Power BI to PPT Tool: 1-Hour Briefing",
      "Content": "Master the art of exporting Power BI to PowerPoint in this focused 1-hour session.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maqpowerbiexporttoppt?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Forecasting Machine Learning Model: 4-Week Implementation",
      "Content": "Implement a forecasting machine learning model in just 4 weeks, improving decision-making and predictions.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.forecasting_4_week_implementation?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "generativeai",
      "Heading": "Knowledge Bot for Finance: 6-Week Proof of Concept",
      "Content": "Explore how a knowledge bot for finance can improve your access to information in a 6-week proof of concept.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.knowledgebotforfinance-preview?tab=Overview&flightCodes=knowledgebotforfinance"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Machine Learning Accelerator: 6-Week Implementation",
      "Content": "Accelerate your machine learning capabilities with a 6-week implementation, driving data-driven decision-making.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.machinelearningacceleratorimplementation?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Machine Learning on Microsoft Azure: 1-Day Briefing",
      "Content": "Discover machine learning on Microsoft Azure in a comprehensive 1-day briefing, unlocking its potential for your business.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlworkshopbriefing?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Marketing Mix Optimization: 6-Week Proof of Concept",
      "Content": "Improve marketing strategies with a 6-week proof of concept, improving ROI and campaign effectiveness.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.marketingmixoptimizationpoc?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Media Analytics using Video Indexer: 8-Week Implementation",
      "Content": "Optimize media analytics with an 8-week implementation, harnessing insights from video content.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mediaanalyticsusingvideoindexer?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "microsoftfabric",
      "Heading": "Microsoft Fabric: 4-Week Assessment",
      "Content": "Explore the possibilities of Microsoft Fabric with a 4-week assessment, optimizing your business processes.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.fabricassesment?search=Fabric&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "microsoftfabric",
      "Heading": "Microsoft Fabric: Accelerated 8-Week Pilot Implementation",
      "Content": "Accelerate your Microsoft Fabric implementation with an 8-week pilot, improving efficiency.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.microsoftfabricacceleratedpilot?search=Fabric&page=1"
  },
  {
    "category": "consulting",
    "subCategory": "microsoftfabric",
    "Heading": "Microsoft Fabric: 2-Hour Briefing",
    "Content": "Obtain a clear and insightful understanding through a comprehensive overview of Microsoft Fabric's capabilities",
    "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.microsoftfabricbriefing?search=maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Qlik to Power BI Migration: 3 Week Implementation ",
      "Content": "Migrate from Qlik to Power BI efficiently in 3 weeks, ensuring seamless data representation.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.qlikpbibasicmigration2?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Qlik to Power BI Migration: 6-Week Implementation ",
      "Content": "Make a smooth migration from Qlik to Power BI with a customized 6-week implementation.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.qlikpbipromigration?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Qlik to Power BI Migration: Free 2-Hour Briefing",
      "Content": "Learn about the process of migrating from Qlik to Power BI in a complimentary 2-hour briefing.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.qlikmigrationdiscovery?page=1&exp=ubp8&search=migration%20qlik%20to%20power%20BI"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Tableau to Power BI Migration: 3 Week Implementation",
      "Content": "Seamlessly transition from Tableau to Power BI with a streamlined 3-week implementation.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.tableaupbibasicmigration?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Tableau to Power BI Migration: Free 2-Hour Briefing ",
      "Content": "Discover the benefits of migrating from Tableau to Power BI in a concise 2-hour briefing.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.tableaumigrationdiscovery?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "dynamics",
      "Heading": "Migration to Unified Interface: 2-Day Assessment",
      "Content": "Streamline your migration to the unified interface with a 2-day assessment, ensuring a seamless transition.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.unified_interface_assessment?page=1&search=maq&product=dynamics-365"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Machine Learning Forecasting for FMCG: 4-Week Proof of Concept",
      "Content": "Transform FMCG forecasting with a 4-week proof of concept, using machine learning for more accurate predictions.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlforecastingforfmcgpoc?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Machine Learning Forecasting for Retail: 4-Week Proof of Concept",
      "Content": "Elevate retail forecasting with a 4-week proof of concept, harnessing machine learning for better insights.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlforecastingforretailpoc?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "ML Model Migration to Azure: 10-Week Implementation",
      "Content": "Migrate your ML models to Azure in a seamless 10-week process for improved scalability and accessibility.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlmodelmigrationtoazure?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "MLOps: 10-Week Implementation",
      "Content": "Implement MLOps in a 10-week process, ensuring efficient machine learning operations.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlopsimplementation?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "MLOps: 2-Week Assessment",
      "Content": "Explore MLOps in a 2-week assessment, improving your machine learning operations for streamlined processes.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlops_2week_assessment?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Modern BI Architecture Migration: 2-Week Assessment",
      "Content": "Explore modern BI architecture migration with a 2-week assessment, ensuring efficient data management.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.cloud_migration_2wk_assessment?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "azure",
      "Heading": "Modern Data Warehouse Architecture: 4-Week Assessment",
      "Content": "Optimize your data warehouse architecture with a 4-week assessment, ensuring efficiency and scalability.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.dw_architecture_assessment?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "generativeai",
      "Heading": "Personalized Recommendation Engine for Finance: 6-Week Proof of Concept",
      "Content": "Implement a personalized recommendation engine for finance in a 6-week proof of concept, driving better financial decisions.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.personalizedrecommendationfinance-preview?tab=Overview&flightCodes=0c58e4f9bc0f4aa7a94ca392f49fc5d9"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Power BI Adoption: 1-Day Assessment",
      "Content": "Evaluate your Power BI adoption in a 1-day assessment, ensuring you harness the platform's full potential.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maqsoftware_powerbiadoption_1day?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Power BI Center of Excellence: 10-Week Implementation",
      "Content": "Establish a Power BI Center of Excellence in a 10-week implementation, ensuring data excellence.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_bi_coe?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Power BI Governance Reports: 4-Week Implementation",
      "Content": "Implement Power BI governance reports in a 4-week process, ensuring data compliance.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerbi_governance?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Power BI Performance Improvement: 1-Day Assessment",
      "Content": "Assess and optimize your Power BI performance in a 1-day session, improving data processing.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerbiperformanceimprovement?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Power BI Performance Improvement: 3-Week Workshop",
      "Content": "Improve Power BI performance in a comprehensive 3-week workshop, ensuring efficiency for your organization.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maq_power_bi_performance_improvement_3week?page=1&search=Power%20BI%20MAQ"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Power BI Performance Optimization: 1-Week Workshop",
      "Content": "Improve Power BI performance in a 1-week workshop, elevating your data analysis.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maq_power_bi_performance_improvement_1week?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerplatform",
      "Heading": "Power Platform Center of Excellence Starter Kit: 3-Week Workshop",
      "Content": "Launch your Power Platform Center of Excellence with a comprehensive 3-week program.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_coe_starter_kit?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerplatform",
      "Heading": "Power Platform Center of Excellence: Free 1-Hour Briefing",
      "Content": "Learn about the benefits of establishing a Power Platform Center of Excellence in a complimentary 1-hour briefing.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerplatform_coe-free_1-hr_consultation?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerplatform",
      "Heading": "Power Platform: 1-Hour Assessment",
      "Content": "Evaluate the potential of the Power Platform in a concise 1-hour assessment.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_1_hour_assessment?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerplatform",
      "Heading": "Power Platform: App in a Day",
      "Content": "Discover the potential of the Power Platform in a one-day immersive program.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_app_in_a_day?page=1&search=maq&product=power-platform&sortBy=Popularity"
  },
  {
      "category": "consulting",
      "subCategory": "powerplatform",
      "Heading": "Power Platform: Free 2-Hour Briefing",
      "Content": "Explore the capabilities of the Power Platform in a complimentary 2-hour briefing.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_2_hours_consultation?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Product Recommendations in Retail: 1-Week Assessment",
      "Content": "Explore product recommendations in retail with a 1-week assessment, driving sales and customer engagement.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.productrecommendationinretailassessment?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Product Recommendations in Retail: 4-Week Implementation",
      "Content": "Implement product recommendation solutions in retail in just 4 weeks, improving the customer shopping experience.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.productrecommendationsinretailindustry?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "SKU Optimization: 12-Week Proof of Concept",
      "Content": "Streamline your product SKU management in a 12-week proof of concept, improving efficiency and performance.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.skuoptimizationpoc"
  },
  {
      "category": "consulting",
      "subCategory": "generativeai",
      "Heading": "Support Response Automation: 6-Week Proof of Concept",
      "Content": "Streamline support responses with a 6-week proof of concept, improving customer service.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.supportresponseautomation-preview?tab=Overview&flightCodes=59eea1327df94a349426da31c8e59aaf"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Tableau to Power BI Migration: 6 Week Implementation",
      "Content": "Migrate from Tableau to Power BI in a streamlined 6-week process, ensuring a seamless transition.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.tableaupbipromigration?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "aiml",
      "Heading": "Text Analytics Engine: 2-Week Proof of Concept",
      "Content": "Harness the potential of text analytics with a 2-week proof of concept, deriving valuable insights from unstructured data.",
      "link": "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.textanalyticsengine?search=Maq&page=1"
  },
  {
      "category": "consulting",
      "subCategory": "powerbi",
      "Heading": "Virtual Dashboard In A Day (DIAD): 8-Hour Workshop",
      "Content": "Build virtual dashboards in an 8-hour workshop, improving data visualization and insights.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.virtualdiad?page=1&exp=ubp8&search=maq"
  },
  {
      "category": "consulting",
      "subCategory": "powerplatform",
      "Heading": "Workflow Management Power App: 1-Week Implementation",
      "Content": "Streamline workflow management with a 1-week Power App implementation, ensuring efficient processes.",
      "link": "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.exit_tracker_3?page=1&exp=ubp8&search=maq"
  }
];

var categorySelected = "all";
var subCategorySelected = "all";

data.sort((a,b)=>{
  if(a.category===b.category)
    return a.Heading.toLocaleLowerCase().localeCompare(b.Heading.toLowerCase())
  return a.category.toLocaleLowerCase().localeCompare(b.category.toLowerCase())
})

// Function to populate the grid based on the selected category
function populateGridCategory(category) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ''; // Clear the grid
  let index = 0
  data.forEach((item) => {
    index++;
    // console.log(item)
    if (category == 'all' || (subCategorySelected === "all" && category === item.category) || (category === item.category && subCategorySelected === item.subCategory)) {
      const mainDiv = document.createElement("div");
      mainDiv.className = "MarketPlaceGrid box xlarge rounded border-grey-light shadow-hover"
      // Create the first nested div with a class and ID
      const nestedDiv1 = document.createElement("div");
      nestedDiv1.className = "MarketPlaceGridHeader";
      nestedDiv1.id = `div-${index}-1`;
      nestedDiv1.textContent = item.Heading;

      // Create the second nested div with a class and ID
      const nestedDiv2 = document.createElement("div");
      nestedDiv2.className = "MarketPlaceGridSubject";
      nestedDiv2.id = `div-${index}-2`;
      nestedDiv2.textContent = item.Content;
      nestedDiv2.style.marginTop = "50px";
      nestedDiv2.style.marginBottom = "50px";

      // Create the third nested div with a class and ID
      const nestedDiv3 = document.createElement("a");
      nestedDiv3.className = "MarketPlaceGridLearnMore";
      nestedDiv3.id = `div-${index}-3`;
      nestedDiv3.href = item.link; // Set the link dynamically from your data
      nestedDiv3.textContent = "Learn more"; // Set link text

      // Append the nested divs to the main container div
      mainDiv.appendChild(nestedDiv1);
      mainDiv.appendChild(nestedDiv2);
      mainDiv.appendChild(nestedDiv3);
      grid.appendChild(mainDiv);

    }
  });
  data.sort((a,b)=>{
    if(a.category===b.category)
      return a.Heading.toLocaleLowerCase().localeCompare(b.Heading.toLowerCase())
    return a.category.toLocaleLowerCase().localeCompare(b.category.toLowerCase())
  })
}

// Function to populate the grid based on the selected subCategory
function populateGridSubCategory(subCategory) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ''; // Clear the grid
  let index = 0
  data.forEach((item) => {
    index++;
    // console.log(item)
    if ((categorySelected === "all" && subCategory === item.subCategory) || (subCategory === item.subCategory && categorySelected === item.category)) {
      const mainDiv = document.createElement("div");
      mainDiv.className = "MarketPlaceGrid box xlarge rounded border-grey-light shadow-hover"
      // Create the first nested div with a class and ID
      const nestedDiv1 = document.createElement("div");
      nestedDiv1.className = "MarketPlaceGridHeader";
      nestedDiv1.id = `div-${index}-1`;
      nestedDiv1.textContent = item.Heading;

      // Create the second nested div with a class and ID
      const nestedDiv2 = document.createElement("div");
      nestedDiv2.className = "MarketPlaceGridSubject";
      nestedDiv2.id = `div-${index}-2`;
      nestedDiv2.textContent = item.Content;
      nestedDiv2.style.marginTop = "50px";
      nestedDiv2.style.marginBottom = "50px";

      // Create the third nested div with a class and ID
      const nestedDiv3 = document.createElement("a");
      nestedDiv3.className = "MarketPlaceGridLearnMore";
      nestedDiv3.id = `div-${index}-3`;
      nestedDiv3.href = item.link; // Set the link dynamically from your data
      nestedDiv3.textContent = "Learn more"; // Set link text

      // Append the nested divs to the main container div
      mainDiv.appendChild(nestedDiv1);
      mainDiv.appendChild(nestedDiv2);
      mainDiv.appendChild(nestedDiv3);
      grid.appendChild(mainDiv);

    }
  });
  data.sort((a,b)=>{
      if(a.category===b.category)
      return a.Heading.toLocaleLowerCase().localeCompare(b.Heading.toLowerCase())
    return a.category.toLocaleLowerCase().localeCompare(b.category.toLowerCase())
  })
}


// Add event listeners to the buttons
document.getElementById("all").addEventListener("click", () => populateGridCategory("all"));
document.getElementById("apps").addEventListener("click", () => populateGridCategory("apps"));
document.getElementById("consulting").addEventListener("click", () => populateGridCategory("consulting"));
document.getElementById("powerbi").addEventListener("click", () => populateGridSubCategory("powerbi"));
document.getElementById("powerplatform").addEventListener("click", () => populateGridSubCategory("powerplatform"));
document.getElementById("dynamics").addEventListener("click", () => populateGridSubCategory("dynamics"));
document.getElementById("azure").addEventListener("click", () => populateGridSubCategory("azure"));
document.getElementById("aiml").addEventListener("click", () => populateGridSubCategory("aiml"));
document.getElementById("generativeai").addEventListener("click", () => populateGridSubCategory("generativeai"));
document.getElementById("microsoftfabric").addEventListener("click", () => populateGridSubCategory("microsoftfabric"));

// Initially, populate the grid with "All" category
populateGridCategory(categorySelected);

function ButtonPressedAll(){
  categorySelected = "all";
  subCategorySelected = "all";
  var element = document.getElementById('all');
  element.classList.add("bkg-theme");
  element.classList.add("color-white");

  //removing formatting from Categories
  var element = document.getElementById('apps');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('consulting');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");

  //removing formatting from subCategories
  var element = document.getElementById('powerbi');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('powerplatform');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('dynamics');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('azure');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('aiml');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('generativeai');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('microsoftfabric');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
}

function ButtonPressedCategory(elementId) {
  categorySelected = elementId;
  var element = document.getElementById('all');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('apps');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('consulting');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById(elementId);
  element.classList.add("bkg-theme");
  element.classList.add("color-white");
}

function ButtonPressedSubCategory(elementId){
  subCategorySelected = elementId;
  var element = document.getElementById('powerbi');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('powerplatform');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('dynamics');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('azure');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('aiml');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('generativeai');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('microsoftfabric');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById(elementId);
  element.classList.add("bkg-theme");
  element.classList.add("color-white");
}
