let loadLock = false;
let showing = "contentHolder";
// all of the elements that have an expansion to them
let avoidRemoveClickEvents = [
    'bmenu--P_RegMnu___UID0',
    'bmenu--P_AdminMnu___UID1'
]

function loadPageWithCookies(url){
    // get contentHolder content of loaded page and set it to the contentHolder of the current page

    let contentHolder = document.getElementById('contentSubHolder');
    // let loading = document.getElementById('loading');

    contentHolder.innerHTML = '';

    // show loading

    // loading.style.display = 'block';

    // get the content of the page

    loadLock = true;
    contentHolder.style.display = 'none';

    fetch(url, {
        credentials: 'include'
    }).then(response => {
        return response.text();
    }).then(data => {
        
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');

        contentHolder.innerHTML = data;

        let onlyTakeContentHolder = () => {
            let innerContentHolder = contentHolder.querySelector('.pagebodydiv');
            if(innerContentHolder){
                contentHolder.innerHTML = innerContentHolder.innerHTML;
            }

            switchContent("sub");
            loadLock = false;
        }

        setTimeout(onlyTakeContentHolder, 1000);

        // hide loading

        // loading.style.display = 'none';
    });
}

function switchContent(view){
    // view can be "base" or "sub"


    if(view == "base"){
        document.getElementById('contentSubHolder').style.display = 'none';
        document.getElementById('contentHolder').style.display = 'block';
    }
    else{
        document.getElementById('contentHolder').style.display = 'none';
        document.getElementById('contentSubHolder').style.display = 'block';
    }
}

function stripEventsFromButtons(){
    Array.from(document.getElementsByClassName("htmlButtonLevel2-3")).forEach((orig_table_elem) => {
        
        if(avoidRemoveClickEvents.includes(orig_table_elem.id)){

            // create iframe with svg src
            let iframe = document.createElement("iframe");
            iframe.src = `${browser.runtime.getURL("resources/images/arrow_drop_down.svg")}`;

            orig_table_elem.querySelector("p").remove();
            orig_table_elem.append(iframe);

            return;
        }
        
        // replace the element removing all event listeners
        
        var new_table_elem = orig_table_elem.cloneNode(true);
        orig_table_elem.parentNode.replaceChild(new_table_elem, orig_table_elem);

        // create click event that corresponds to the element's source

        new_table_elem.addEventListener('click', function (e){
            e.preventDefault();
            e.stopPropagation();
        
            loadPageWithCookies("https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView");
        });

    });
}

function setup(){


    // create a div contentSubHolder right below the contentHolder and hide it

    let contentSubHolder = document.createElement('div');
    contentSubHolder.id = 'contentSubHolder';
    contentSubHolder.style.display = 'none';

    let contentHolder = document.getElementById('contentHolder');
    contentHolder.parentNode.insertBefore(contentSubHolder, contentHolder.nextSibling);



    

    

    // document.getElementById("bwgkogad--P_SelectAtypView___UID1").addEventListener('click', function (e){
    //     e.preventDefault();
    //     e.stopPropagation();
    
    //     loadPageWithCookies("https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView");
    // });

    document.getElementById("welcomemessage").addEventListener('click', function (e){
        e.preventDefault();
        e.stopPropagation();
    
        loadPageWithCookies("https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView");
    });
    
    stripEventsFromButtons();
    
}

Array.from(document.getElementsByClassName("menubaseButton")).forEach((baseButton) => {
    baseButton.addEventListener('click', function (e){
        setTimeout(stripEventsFromButtons, 1000);
        switchContent("base");
    });
});


setTimeout(setup, 3000);