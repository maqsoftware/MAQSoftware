function resourcesClick(id) {
    console.log("here");
    var video_desc = document.getElementById("video_desc");
    var video_div = document.getElementById("demo_video");
    var partner_video_desc = document.getElementById("partner_video_desc");
    var partner_video_div = document.getElementById("partner_demo_video");
    if (id === "video_desc") {
        video_desc.classList.add("resources-div-click");
        partner_video_desc.classList.remove("resources-div-click");
        partner_video_div.style.display = 'none';
        video_div.style.display = 'block';
    }
    else if (id === "partner_video_desc") {
        partner_video_desc.classList.add("resources-div-click");
        video_desc.classList.remove("resources-div-click");
        video_div.style.display = 'none';
        partner_video_div.style.display = 'block';
    }
    else {
        video_desc.classList.remove("resources-div-click");
        partner_video_desc.classList.remove("resources-div-click");
        video_div.style.display = 'none';
        partner_video_div.style.display = 'none';
    }
}