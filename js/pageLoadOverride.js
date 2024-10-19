let loadLock = false;

function loadPageWithCookies(url){
    // get contentHolder content of loaded page and set it to the contentHolder of the current page

    let contentHolder = document.getElementById('contentHolder');
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

            contentHolder.style.display = 'block';
            loadLock = false;
        }

        setTimeout(onlyTakeContentHolder, 1000);

        // hide loading

        // loading.style.display = 'none';
    });
}

function setup(){
    document.getElementById("bwgkogad--P_SelectAtypView___UID1").addEventListener('click', function (e){
        e.preventDefault();
        e.stopPropagation();
    
        loadPageWithCookies("https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView");
    });

    document.getElementById("welcomemessage").addEventListener('click', function (e){
        e.preventDefault();
        e.stopPropagation();
    
        loadPageWithCookies("https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView");
    });
    
    
}


setTimeout(setup, 3000);