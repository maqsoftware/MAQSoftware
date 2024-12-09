var pbiReportTemplate='<iframe referrerpolicy="no-referrer-when-downgrade" style="height:80vh"src="@pbiURL"frameborder="0" allowFullScreen="true"></iframe>';
var contentTemplate='<div class="col-md-8"><h3 class="title-medium">@title by MAQ Software</h3></div><div class="col-md-12"><h3 class="title-small">@detail</h3><p class="title-xsmall">@Desc</p></div>'
var listItemTemplate='<li class="title-xsmall">@placeholder</li> '
var contactTemplate='<h4 class="title-xsmall">Contact Us</h4><p class="title-xsmall">Thank you for using @name by MAQ Software.</p><p class="title-xsmall">Do you have questions about this or any of our other Power BI custom visuals? Check out our community pages on <a href="https://maqsoftware.zendesk.com/hc/en-us/community/topics" target="_blank">Zendesk</a></p><p class="title-xsmall">For any issues related to any custom visual, contact us at <a href="mailto:support@maqsoftware.com" target="_blank">Support@MAQSoftware.com</a>. </p><p class="title-xsmall">For any priority requests or custom builds, contact us at <a href="mailto:CustomerSuccess@MAQSoftware.com" target="_blank">CustomerSuccess@MAQSoftware.com</a>. </p>'
var newVersionTemplate = '<h4 class="title-xsmall">@newVersion</h4>'
var buttonsTemplate = '<div><a href="@appsourceLink" target="blank" class="button medium pill bkg-theme bkg-hover-white color-white color-hover-theme mb-mobile-40">Get @name</a><a href="@appsourceLink" target="blank"  class="button medium pill border-theme bkg-white bkg-hover-theme color-theme color-hover-white">Download sample report</a></div>'

function getData(id) {
    $.getJSON("/resources/powerbi visuals/Visuals.json", function (data) {
        loadData(data,id)
      });
    
}

function loadData(data,id){
    var query = window.location.href;
    // var id = (query.indexOf('=')>-1)?query.slice(query.lastIndexOf('=')+1):"RadarChart";

    var visualContainer = $("#detailContainer")
    var pbiContainer = $("#pbiReportContainer")
    var contactContainer=$("#contactContainer")
    var buttonContainer=$("#buttonContainer")
    var content =""
    var pbiReport = ""
    var contact=""
    var buttons =""

    $.each(data, function (index) {
        $.each(Object.keys(this), function () {
            if(data[index][this].id===id){
                document.title = data[index][this].name + " | MAQ Software";

                // dynamically load it when available in json
                var reportURL = data[index][this].pbiReportURL;
                pbiReport+=pbiReportTemplate
                    .replace(/@pbiURL/g, (typeof reportURL==='undefined')?"https://app.powerbi.com/view?r=eyJrIjoiMzQ3ODEzOTEtOTIxZS00ZDY2LTg2ODktNTIxMzVmZGZlZTc1IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9":reportURL);
                
                content +=contentTemplate
                    .replace(/@title/g , data[index][this].title)
                    .replace(/@detail/g, data[index][this].detail)
                    .replace(/@Desc/g, data[index][this].detailDesc)
                    
                var businessList=data[index][this].businessUses
                addContainer(businessList,'businessUsesList','businessuseContainer')
                
                var ftList=data[index][this].keyFeatures
                addContainer(ftList,'keyFeatureList','keyFeatureContainer')
                
                //getting whats new list item from json
                var newList = data[index][this].whatsNew
                
                //rendering title with version number
                var versionNumber = data[index][this].version
                var addVersion = (typeof versionNumber==='undefined')?"":(" in "+versionNumber)
                var title = document.createTextNode("What's new"  + addVersion)
                var titleElement = document.createElement("h4")
                titleElement.setAttribute("class","title-xsmall")
                titleElement.appendChild(title)
                var parent = document.getElementById('whatsNewContainer')
                parent.replaceChild(titleElement,parent.childNodes[0])
                
                //adding the items in UL
                addContainer(newList,'whatsNewList','whatsNewContainer')

                //changes in the button
                buttons+=buttonsTemplate
                    .replace(/@name/g,data[index][this].name)
                    .replace(/@appsourceLink/g, data[index][this].url)
                
                contact +=contactTemplate
                    .replace(/@name/g, data[index][this].name)    
            }
        });
    });

    pbiContainer.append(pbiReport)
    visualContainer.append(content)
    contactContainer.append(contact)
    buttonContainer.append(buttons)
}

function addContainer(JSONList,UlID,containerID){
    if(JSONList.length){
        var liItem=""
        var container = $('#'+UlID)
        for(var i in JSONList){
            liItem+=listItemTemplate
                .replace(/@placeholder/g, JSONList[i])
        }
        container.append(liItem)
    }else{
        removeContainer(containerID)
    }
}

function removeContainer(containerID){
    var div = document.getElementById(containerID)
    div.parentNode.removeChild(div)
}