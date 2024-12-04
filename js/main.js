const LOCKED_URLS = [
    "/pls/owa/stu_ctg_utils.p_online_all_courses_ug",
    "/pls/owa/stu_ctg_utils.p_online_all_courses_gr",
];

if (!LOCKED_URLS.includes(window.location.pathname)) {
    getData("general_dark-mode").then(result => {
    
        if(result){
            document.body.classList.add("dark");
        }
        
    });
    
    document.getElementById("welcomemessage").innerHTML = `
        <img src="${(browser ?? window.chrome).runtime.getURL("resources/images/MTU_LOGO.png")}" alt="Michigan Tech Logo">
    `;
    
    document.getElementById("menuTrackInst").style.width = "";
    
    // .items a
}
