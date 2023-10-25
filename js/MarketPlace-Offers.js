const data = [
  {
    category: "apps",
    Heading: "Text Analytics Engine",
    Content: "Looking for a better way to derive meaningful insights from text data? Say goodbye to manual, time-consuming, and biased analysis processes.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.text_analytics_application_dev?tab=Overview"
  },
  {
    category: "apps",
    Heading: "EmbedFAST",
    Content: "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow. Save time, effort, costs, and resources by using our ready-to-use API.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=Overview0"
  },
  {
    category: "apps",
    Heading: "BI Hub",
    Content: "The need to manually compile reports across multiple workspaces limits your ability to make quick decisions, the main purpose of BI.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.bi_hub?tab=Overview"
  },
  {
    category: "apps",
    Heading: "Validation Framework",
    Content: "Complex data ecosystems demand a comprehensive solution to validate, monitor, and verify data throughout its lifecycle.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.validationframework_paid?tab=Overview"
  },
  {
    category: "apps",
    Heading: "Power BI LoadFAST",
    Content: "LoadFAST provides an automated solution to capture, analyze, and optimize the page load time (PLT) of your reports.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview"
  },

  {
    category: "consulting",
    Heading: "Admin Center of Excellence: 2-Day Workshop",
    Content: "Power BI offers multiple ways to access data, implement security, and share reports.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.admincoe?page=1&exp=ubp8&search=maq"
  },
  {
    category: "consulting",
    Heading: "Advanced Data Analytics with Power BI: 3-Day Workshop",
    Content: "During our workshop, you will learn how to transform and model data using advanced calculations.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.advanced_data_analytics_with_powerbi_workshop?page=1&exp=ubp8&search=maq"
  },
  {
    category: "consulting",
    Heading: "Advanced Data Modeling with Power BI: 3-Day Workshop",
    Content: "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=Overview"
  },
  {
    category: "consulting",
    Heading: "Workflow Management Power App: 1-Week Implementation",
    Content: "Effectively collaborating across departments can be difficult. With competing priorities, varied schedules, and the ever-present need for back-and-forth communication.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.exit_tracker_3?page=1&exp=ubp8&search=maq"
  },
  {
    category: "consulting",
    Heading: "Power Platform: Free 2-Hour Briefing",
    Content: "Power Platform tools are low-code/no-code solutions that enable organizations to drive their digital transformation journey.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_2_hours_consultation?page=1&exp=ubp8&search=maq"
  },
  {
    category: "consulting",
    Heading: "Power Platform: 1-Hour Assessment",
    Content: "Power Platform tools enable large-scale organizations to improve their operations and champion the creativity of citizen developers.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_1_hour_assessment?page=1&exp=ubp8&search=maq"
  },
  {
    category: "consulting",
    Heading: "Power Platform CoE Starter Kit: 3-Week Workshop",
    Content: "To ensure your organization remains both efficient and secure, you need to effectively govern all Power Platform assets.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_coe_starter_kit?page=1&exp=ubp8&search=maq"
  },
  {
    category: "consulting",
    Heading: "Power Platform: App in a Day",
    Content: "Our workshop enables developers to create professional apps. We will build off your existing skills using traditional business applications like Excel and PowerPoint.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_app_in_a_day?page=1&search=maq&product=power-platform&sortBy=Popularity"
  },
  {
    category: "consulting",
    Heading: "Dynamics 365 Security Audit: 2-Day Assessment",
    Content: "In an era of remote work and global data breaches, data security is a key priority for all businesses.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamics_security_assessment?page=1&search=maq&product=dynamics-365"
  },
  {
    category: "consulting",
    Heading: "Dynamic Routing Rules: 4-Week Implementation",
    Content: "A routing rule consists of a set of conditions and a destination user/team. Routing rules ensure that records are automatically routed to the right people at the right time.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamic_routing_rules?page=1&search=maq&product=dynamics-365"
  },
  {
    category: "consulting",
    Heading: "Customer Insights: 4 week Implementation",
    Content: "MAQ Software has over a decade's experience in data management, data visualization, and insights generation. Our four-week implementation engagement will provide you an overview of Microsoft Customer Insights.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.customer_insights_4wk_implementation?page=1&search=maq&product=dynamics-365"
  },


  {
    category: "powerbi",
    Heading: "Admin Center of Excellence: 2-Day Workshop",
    Content: "Power BI offers multiple ways to access data, implement security, and share reports.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.admincoe?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Advanced Visualization with Power BI:1-Day Workshop",
    Content: "Leverage your core base of Power BI knowledge to dive deep into the world of advanced visualizatio",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.advanced_diad?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Custom Power BI Visuals: 1-Hour Briefing",
    Content: "Discuss Custom visual requirements, configurations and business rules for visualization",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.customvisualbriefing?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Custom Power BI Visuals: 2-Week Proof of Concept",
    Content: "Collaborate with business stakeholders to understand the visual requirements",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maqsoftware_customvisual_offering?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Data Migration Strategy for Power BI: 2-Week workshop",
    Content: "Help you lay the right foundation for data driven culture across the organization.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.migrationstrategy2?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Data Viz Center of Excellence: 2-Day Workshop",
    Content: "Take this professional program designed by our Power BI experts and UX designers and learn about the latest features in Power BI.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.datavizcoe?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Export Power BI to PPT Tool: 1-Hr Briefing",
    Content: "With our tool, you can download a polished PowerPoint presentation populated with any Power BI reports and visuals you want to highlight.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maqpowerbiexporttoppt?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Free Center of Excellence: 1 Hour Briefing",
    Content: "With our tool, you can download a polished PowerPoint presentation populated with any Power BI reports and visuals you want to highlight.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.coebriefing?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Free Migrate Qlik to Power BI: 2-Hr Briefing",
    Content: "After better understanding your requirements, we will create a Power BI report with a Direct Query model.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.qlikpbibasicmigration2?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Migrate Qlik to Power BI: 3 Week Implementation",
    Content: "Landing a new tool right the first time is critical for successful adoption.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.qlikpbibasicmigration2?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Migrate Qlik to Power BI: 6-Week Implementation",
    Content: "Change is hard, so ensuring a smooth transition to a new tool is critical for successful adoption.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.qlikpbipromigration?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Migrate Tableau to Power BI: 3 Week Implementation",
    Content: "After better understanding your requirements, we will create a Power BI report with a Direct Query model,",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.tableaupbibasicmigration?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Migrate Tableau to Power BI: Free 2-Hr Briefing",
    Content: "Our team of Power BI experts will consider your existing data sources and IT policies to ensure we come up with a solution that's right for you.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.tableaumigrationdiscovery?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Power BI Adoption: 1-Day Assessment",
    Content: "We are recognized for our expertise in implementing business intelligence and analytics solutions.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maqsoftware_powerbiadoption_1day?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Power BI COE: 10-Week Implementation",
    Content: "A Center of Excellence (CoE) is a team that provides guidance, training, and expertise on specific subject matters.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_bi_coe?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Power BI Governance Reports: 4-Week implementation",
    Content: "Our Power BI Governance reports track your organization's Power BI adoption details and usage patterns for reports across all workspaces.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerbi_governance?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Power BI Performance Improvement: 1-Day Assessment",
    Content: "Through this assessment, we will help you create a roadmap to improve the performance of your reports and dashboards.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerbiperformanceimprovement?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Power BI Performance Improvement: 3-Week Workshop",
    Content: "Imagine having the tools and insights to make data-driven decisions that can transform your business.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.threedayazuresynapseworkshop?search=Maq&page=1"
  },
  {
    category: "powerbi",
    Heading: "Power BI Performance Optimization: 1 Week Workshop",
    Content: "Power BI performance can make or break a business' data-driven culture. High-performing reports enable business users to make data-based decisions that benefit your business in the long term.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.maq_power_bi_performance_improvement_1week?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Tableau to Power BI: 6 Week Implementation",
    Content: "Migrating your reports to a new platform can be time-consuming and complex. The most common challenges large organizations face are slow reports, unintuitive dashboards, and low adoption.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.tableaupbipromigration?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerbi",
    Heading: "Virtual Dashboard In A Day (DIAD): 8-Hr Workshop",
    Content: "Power BI is a powerful self-service data visualization platform that enables you to centralize and share data for faster insights.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.virtualdiad?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerplatform",
    Heading: "Workflow Management Power App: 1-Week Implementation",
    Content: "Effectively collaborating across departments can be difficult. With competing priorities, varied schedules, and the ever-present need for back-and-forth communication.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.exit_tracker_3?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerplatform",
    Heading: "Power Platform: Free 2-Hour Briefing",
    Content: "Power Platform tools are low-code/no-code solutions that enable organizations to drive their digital transformation journey.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_2_hours_consultation?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerplatform",
    Heading: "Power Platform CoE: Free 1-Hour Briefing",
    Content: "Power Platform enables organizations to take ownership of their digital transformation. With intuitive, low-code tools to build apps, automate processes, implement chatbots, and visualize data.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerplatform_coe-free_1-hr_consultation?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerplatform",
    Heading: "Power Platform: 1-Hour Assessment",
    Content: "Power Platform tools enable large-scale organizations to improve their operations and champion the creativity of citizen developers.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_1_hour_assessment?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerplatform",
    Heading: "Power Platform CoE Starter Kit: 3-Week Workshop",
    Content: "To ensure your organization remains both efficient and secure, you need to effectively govern all Power Platform assets.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_coe_starter_kit?page=1&exp=ubp8&search=maq"
  },
  {
    category: "powerplatform",
    Heading: "Power Platform: App in a Day",
    Content: "Our workshop enables developers to create professional apps. We will build off your existing skills using traditional business applications like Excel and PowerPoint.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_app_in_a_day?page=1&search=maq&product=power-platform&sortBy=Popularity"
  },
  {
    category: "dynamics",
    Heading: "Dynamics 365 Security Audit: 2-Day Assessment",
    Content: "In an era of remote work and global data breaches, data security is a key priority for all businesses.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamics_security_assessment?page=1&search=maq&product=dynamics-365"
  },
  {
    category: "dynamics",
    Heading: "Dynamic Routing Rules: 4-Week Implementation",
    Content: "A routing rule consists of a set of conditions and a destination user/team. Routing rules ensure that records are automatically routed to the right people at the right time.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamic_routing_rules?page=1&search=maq&product=dynamics-365"
  },
  {
    category: "dynamics",
    Heading: "Customer Insights: 4 week Implementation",
    Content: "MAQ Software has over a decade's experience in data management, data visualization, and insights generation. Our four-week implementation engagement will provide you an overview of Microsoft Customer Insights.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.customer_insights_4wk_implementation?page=1&search=maq&product=dynamics-365"
  },
  {
    category: "dynamics",
    Heading: "Migration to Unified Interface: 2-Day Assessment",
    Content: "Unified Interface is the new presentation interface for all applications in Dynamics 365 Customer Engagement, replacing the legacy web interface.",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.unified_interface_assessment?page=1&search=maq&product=dynamics-365"
  },
  {
    category: "azure",
    Heading: "Modern BI Architecture Migration: 2-Week Assessment",
    Content: "At MAQ Software, we understand the challenges and opportunities presented by modern BI. Our 2-week assessment is your gateway to unlocking the true power of data analytics.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.cloud_migration_2wk_assessment?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Cloud Migration: 1-Week Assessment",
    Content: "Migrating to the cloud will provide a more efficient future for your business, but the process is not always easy. The migration journey can be filled with bottlenecks and uncertainties.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.cloud_migration_assessment?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Azure Cost optimization: 3-Week Assessment",
    Content: "Do you want to maximize your cloud investment and drive efficiency? Optimizing your Azure costs without compromising performance can be achieved with our Azure cost assessment.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.azurecostoptimization?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Azure Synapse: 2-Week Proof of Concept",
    Content: "Elevate your data analytics capabilities today. Azure Synapse Analytics is a crucial business tool that empowers organizations to harness their data for competitive advantage.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.synapse_poc?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Azure Synapse Analytics: 2-Hour briefing",
    Content: "Our Azure Synapse Analytics briefing is designed to do more than just inform you about the technology; it's a journey towards transforming your data into a strategic asset.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.synapse_briefing?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Advanced Azure Synapse Analytics: 3-Day Workshop",
    Content: "Azure Synapse Analytics is a crucial business tool that empowers organizations to harness their data for competitive advantage.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.threedayazuresynapseworkshop?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Azure Synapse Analytics in a Day: 8-Hour Workshop",
    Content: "Our intensive Azure Synapse Analytics workshop is designed to do more than just inform you about the technology.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.aidworkshop?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Modern Data Warehouse Architecture: 4-Week Assessment",
    Content: "Our four-week Modern Data Warehouse assessment service analyzes cost and performance gaps in your current on-premises or hybrid cloud architecture.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.dw_architecture_assessment?search=Maq&page=1"
  },
  {
    category: "azure",
    Heading: "Azure DevOps using GitHub: 1-week Assessment",
    Content: "Join us for our exclusive 1-week assessment, where we do not just talk about tech - we provide real solutions to your development challenges.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.azuredevopsusinggithub-preview?tab=Overview&flightCodes=azuredevopsusinggithub"
  },
  {
    category: "aiml",
    Heading: "Forecasting Machine Learning Model: 4-Week Implementation",
    Content: "Our team will evaluate your current business needs, help you choose the right Azure resources, and analyze key metrics.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.forecasting_4_week_implementation?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Text Analytics Engine: 2-Week Proof of Concept",
    Content: "Imagine turning unstructured text data into actionable insights to make data-driven decisions that drive business growth.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.textanalyticsengine?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "AI & ML for Power BI: 1-Day Workshop",
    Content: "Uncover insights and make predictions that will be helpful for your businesses. This comprehensive workshop covers the concepts, techniques, and tools of AI (Artificial Intelligence) and ML (Machine Learning).",
    link: "https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.aimlforpowerbi1dayworkshop?page=1&exp=ubp8&search=maq"
  },
  {
    category: "aiml",
    Heading: "MLOps: 10-Week Implementation",
    Content: "At MAQ Software, we are here to help you transform your AI initiatives from ideas into actionable results.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlopsimplementation?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "MLOps: 2-Week Assessment",
    Content: "We understand the complexities of MLOps and the hurdles businesses encounter when operationalizing machine learning.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlops_2week_assessment?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Marketing Mix Optimization: 6-Week Proof of Concept",
    Content: "Discover the impact our Marketing Mix Optimization: 6-Week Proof of Concept (PoC) can have on your business.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.marketingmixoptimizationpoc?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Media Analytics using Video Indexer: 8-Week Implementation",
    Content: "Discover the impact our Marketing Mix Optimization: 6-Week Proof of Concept (PoC) can have on your business.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mediaanalyticsusingvideoindexer?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Machine Learning on Microsoft Azure: 1-Day Briefing",
    Content: "Developing and deploying models in production can be challenging. By implementing machine learning, organizations can take informed decisions that will help them grow the business.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlworkshopbriefing?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Product Recommendations in Retail: 4-Week Implementation",
    Content: "Retail industry being a highly competitive industry needs constant upgrades based on consumer demands. Preferences of customers are changing very frequently.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.productrecommendationsinretailindustry?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Product Recommendations in Retail: 1-Week Assessment",
    Content: "We will assess your current Azure infrastructure and will provide suggestions on various machine learning tools like Azure Machine Learning, Azure Databricks, and Azure Cognitive Services.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.productrecommendationinretailassessment?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Data Science Toolkit: 1-Day Briefing",
    Content: "After better understanding your requirements, we will create a Power BI report with a Direct Query model.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.datasciencetoolkit?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Demand Forecasting: 5-Week Proof of Concept",
    Content: "We will also discuss with you how Azure Analytics services and other tools can be utilized to preprocess and analyze the data.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.demandforecastingpoc?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "Machine Learning Accelerator: 6-Week Implementation",
    Content: "These accelerators can perform matrix operations and other common computations used in machine learning much more quickly than general-purpose CPUs.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.machinelearningacceleratorimplementation?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "ML Forecasting for FMCG: 4-Week Proof of Concept",
    Content: "To manufacture products based on consumer demands and other factors that are affecting the demand, businesses must be able to accurately forecast to stay ahead of the competition in this global marketplace.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlforecastingforfmcgpoc?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "ML Forecasting for Retail: 4-Week Proof of Concept",
    Content: "Imagine a world where you know precisely what products to stock, when to stock them, and how to optimize your inventory.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlforecastingforretailpoc?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "ML Model Migration to Azure: 10-Week Implementation",
    Content: "Migrating your ML models to Azure is the way to go but doing it seamlessly and ensuring they run efficiently is no easy task. Let us help you do it smoothly and successfully with ease.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.mlmodelmigrationtoazure?search=Maq&page=1"
  },
  {
    category: "aiml",
    Heading: "SKU Optimization: 12-Week Proof of Concept - Microsoft Azure Marketplace",
    Content: "Inventory management is the most critical factor in a business. It will help businesses in handling stocks based on consumer demands, product characteristics and production capacity.",
    link: "link"
  },


  {
    category: "generativeai",
    Heading: "Knowledge bot for finance: 6-Week Proof of concept - Microsoft Azure Marketplace",
    Content: "Current knowledge management systems often lack user-friendly interfaces and struggle to provide personalized and contextualized information.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.knowledgebotforfinance-preview?tab=Overview&flightCodes=knowledgebotforfinance"
  },
  {
    category: "generativeai",
    Heading: "Automate KYC for customers: 6-Week Proof of Concept",
    Content: "Are you struggling to streamline customer onboarding while ensuring compliance with regulatory requirements? Imagine a world where KYC becomes effortless, efficient, and fully automated.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.automatekycforcustomers-preview?tab=Overview&flightCodes=automatekycforcustomers"
  },
  {
    category: "generativeai",
    Heading: "Personalized Recommendation Engine for Finance: 6-Week PoC",
    Content: "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow. Save time, effort, costs, and resources by using our ready-to-use API.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.personalizedrecommendationfinance-preview?tab=Overview&flightCodes=0c58e4f9bc0f4aa7a94ca392f49fc5d9"
  },
  {
    category: "generativeai",
    Heading: "Conversational Bot: 6-Week Proof of Concept",
    Content: "Welcome to our 6-week Proof of Concept (PoC) that leverages the power of Azure's advanced technology stack to transform your finance sector.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.conversationalbotpoc-preview?tab=Overview&flightCodes=69393774de6946debfc30c9a41570260"
  },
  {
    category: "generativeai",
    Heading: "Support Response Automation: 6-Week Proof of Concept",
    Content: "Make this a reality with our 6-week proof of concept (PoC) in Support Response Automation, powered by OpenAI.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.supportresponseautomation-preview?tab=Overview&flightCodes=59eea1327df94a349426da31c8e59aaf"
  },
  {
    category: "generativeai",
    Heading: "Customer Sentiment Analysis: 6-Week Proof of Concept",
    Content: "Our solution empowers businesses to understand and analyze customer feedback, enabling data-driven decision-making for enhanced customer satisfaction and improved brand reputation.",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.customer_sentiment_analysis-preview?tab=Overview&flightCodes=bb6b9ae1502b4a10a3f76dd7e1e3e321"
  },


  {
    category: "microsoftfabric",
    Heading: "Microsoft Fabric: Accelerated 8-Week Pilot Implementation",
    Content: "Microsoft Fabric and its all-in-one capabilities enter as a solution to this challenge. Introducing our 8-week pilot solution implementation with Microsoft Fabric program",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.microsoftfabricacceleratedpilot?search=Fabric&page=1"
  },
  {
    category: "microsoftfabric",
    Heading: "Microsoft Fabric: 4-Week Assessment",
    Content: "Our 4-week consulting engagement is designed to evaluate the suitability of Microsoft Fabric for your organization's specific needs",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.fabricassesment?search=Fabric&page=1"
  },

];

data.sort((a,b)=>{
  return a.Heading.toLocaleLowerCase().localeCompare(b.Heading.toLowerCase())
})

// Function to populate the grid based on the selected category
function populateGrid(category) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ''; // Clear the grid
  let index = 0
  data.forEach((item) => {
    index++;
    // console.log(item)
    if (category == 'all' || category === item.category) {
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
    return a.Heading.toLocaleLowerCase().localeCompare(b.Heading.toLowerCase())
  })
}


// Add event listeners to the buttons
document.getElementById("all").addEventListener("click", () => populateGrid("all"));
document.getElementById("apps").addEventListener("click", () => populateGrid("apps"));
document.getElementById("consulting").addEventListener("click", () => populateGrid("consulting"));
document.getElementById("powerbi").addEventListener("click", () => populateGrid("powerbi"));
document.getElementById("powerplatform").addEventListener("click", () => populateGrid("powerplatform"));
document.getElementById("dynamics").addEventListener("click", () => populateGrid("dynamics"));
document.getElementById("azure").addEventListener("click", () => populateGrid("azure"));
document.getElementById("aiml").addEventListener("click", () => populateGrid("aiml"));
document.getElementById("generativeai").addEventListener("click", () => populateGrid("generativeai"));
document.getElementById("microsoftfabric").addEventListener("click", () => populateGrid("microsoftfabric"));

// Initially, populate the grid with "All" category
populateGrid("all");



function ButtonPressed(elementId) {
  var element = document.getElementById('all');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('apps');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
  var element = document.getElementById('consulting');
  element.classList.remove("bkg-theme");
  element.classList.remove("color-white");
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