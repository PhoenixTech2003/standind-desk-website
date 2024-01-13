function ModalPopup(){
    function cacheDOM(){
        const dialog = document.querySelector("dialog");
        const closeBtn = document.querySelector("dialog button");
        return {dialog,closeBtn};
    }

    function executeEvents(){
        bindEvents();
    }

    function bindEvents(){
        const closeBtn = cacheDOM();
        closeBtn.closeBtn.addEventListener("click",closeModal);
    }

    function displayModal(){
        const modal = cacheDOM();
        modal.dialog.showModal();
    }

    function closeModal(){
        const modal = cacheDOM();
        modal.dialog.close();
    }

    return{executeEvents,displayModal};

}

let modal = ModalPopup();
modal.displayModal();
modal.executeEvents()