const data = [
    { category: "apps",
      Heading: "Text Analytics Engine",
      Content: "Looking for a better way to derive meaningful insights from text data? Say goodbye to manual, time-consuming, and biased analysis processes.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.text_analytics_application_dev?tab=Overview" },
    { category: "apps",
      Heading: "EmbedFAST",
      Content: "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow. Save time, effort, costs, and resources by using our ready-to-use API.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=Overview0" },
    { category: "apps", 
      Heading: "BI Hub",
      Content: "The need to manually compile reports across multiple workspaces limits your ability to make quick decisions, the main purpose of BI.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.bi_hub?tab=Overview" },
    { category: "apps",
      Heading: "Validation Framework",
      Content: "Complex data ecosystems demand a comprehensive solution to validate, monitor, and verify data throughout its lifecycle.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.validationframework_paid?tab=Overview" },
    { category: "apps",
      Heading: "Power BI Load Analyzer",
      Content: "LoadFAST provides an automated solution to capture, analyze, and optimize the page load time (PLT) of your reports.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview" },
      { category: "apps",
      Heading: "Power BI Load Analyzer",
      Content: "LoadFAST provides an automated solution to capture, analyze, and optimize the page load time (PLT) of your reports.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview" },



    { category: "consulting",
      Heading: "Admin Center of Excellence: 2-Day Workshop",
      Content: "Power BI offers multiple ways to access data, implement security, and share reports.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.admincoe?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Advanced Data Analytics with Power BI: 3-Day Workshop",
      Content: "During our workshop, you will learn how to transform and model data using advanced calculations.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.advanced_data_analytics_with_powerbi_workshop?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Advanced Data Modeling with Power BI: 3-Day Workshop",
      Content: "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=Overview" },
    { category: "consulting",
      Heading: "Workflow Management Power App: 1-Week Implementation",
      Content: "Effectively collaborating across departments can be difficult. With competing priorities, varied schedules, and the ever-present need for back-and-forth communication.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.exit_tracker_3?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Power Platform: Free 2-Hour Briefing",
      Content: "Power Platform tools are low-code/no-code solutions that enable organizations to drive their digital transformation journey.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_2_hours_consultation?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Power Platform CoE: Free 1-Hour Briefing",
      Content: "Power Platform enables organizations to take ownership of their digital transformation. With intuitive, low-code tools to build apps, automate processes, implement chatbots, and visualize data.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.powerplatform_coe-free_1-hr_consultation?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Power Platform: 1-Hour Assessment",
      Content: "Power Platform tools enable large-scale organizations to improve their operations and champion the creativity of citizen developers.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_1_hour_assessment?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Power Platform CoE Starter Kit: 3-Week Workshop",
      Content: "To ensure your organization remains both efficient and secure, you need to effectively govern all Power Platform assets.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_coe_starter_kit?page=1&exp=ubp8&search=maq" },
    { category: "consulting",
      Heading: "Power Platform: App in a Day",
      Content: "Our workshop enables developers to create professional apps. We will build off your existing skills using traditional business applications like Excel and PowerPoint.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.power_platform_app_in_a_day?page=1&search=maq&product=power-platform&sortBy=Popularity" },
    { category: "consulting",
      Heading: "Dynamics 365 Security Audit: 2-Day Assessment",
      Content: "In an era of remote work and global data breaches, data security is a key priority for all businesses.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamics_security_assessment?page=1&search=maq&product=dynamics-365" },
    { category: "consulting",
      Heading: "Dynamic Routing Rules: 4-Week Implementation",
      Content: "A routing rule consists of a set of conditions and a destination user/team. Routing rules ensure that records are automatically routed to the right people at the right time.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.dynamic_routing_rules?page=1&search=maq&product=dynamics-365" },
    { category: "consulting",
      Heading: "Customer Insights: 4 week Implementation",
      Content: "MAQ Software has over a decade's experience in data management, data visualization, and insights generation. Our four-week implementation engagement will provide you an overview of Microsoft Customer Insights.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.customer_insights_4wk_implementation?page=1&search=maq&product=dynamics-365" },
    { category: "consulting",
      Heading: "Migration to Unified Interface: 2-Day Assessment",
      Content: "Unified Interface is the new presentation interface for all applications in Dynamics 365 Customer Engagement, replacing the legacy web interface.",
      link:"https://appsource.microsoft.com/en-US/marketplace/consulting-services/maqsoftware.unified_interface_assessment?page=1&search=maq&product=dynamics-365" },





    { category: "powerbi",
      Heading: "BI Hub",
      Content: "The need to manually compile reports across multiple workspaces limits your ability to make quick decisions, the main purpose of BI.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.bi_hub?tab=Overview" },
    { category: "powerbi",
      Heading: "EmbedFAST",
      Content: "With EmbedFAST, you can unlock a suite of powerful features that elevate your workflow. Save time, effort, costs, and resources by using our ready-to-use API.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=Overview0" },
    { category: "powerbi",
      Heading: "Power BI Load Analyzer",
      Content: "LoadFAST provides an automated solution to capture, analyze, and optimize the page load time (PLT) of your reports.",
      link:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview" },




    { category: "powerplatform", Heading: "Heading", Content: "Content", link:"link" },
    { category: "dynamics", Heading: "Heading", Content: "Content", link:"link" },
    { category: "azure", Heading: "Heading", Content: "Content", link:"link" },
    { category: "aiml", Heading: "Heading", Content: "Content", link:"link" },
    { category: "generativeai", Heading: "Heading", Content: "Content", link:"link" },
    { category: "microsoftfabric", Heading: "Heading", Content: "Content", link:"link" },

    // Add more data as needed
  ];




// Function to populate the grid based on the selected category
function populateGrid(category) {
    const grid = document.getElementById("grid");
    grid.innerHTML = ''; // Clear the grid
    var index=0
    data.forEach((item) => {
        index++;
        // console.log(item)
      if (category=='all' || category === item.category) {
        // const div = document.createElement("div");
        // div.textContent = item.Heading;
        // grid.appendChild(div);

        // Create the main container div
        const mainDiv = document.createElement("div");
        mainDiv.className="MarketPlaceGrid box xlarge rounded border-grey-light shadow-hover"
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

// Add listeners for other buttons as needed.

// Initially, populate the grid with "All" category
// populateGrid("apps");