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

function Products(){
    const standingDesks  = [
        {
         name :"FlexiSpot E8 standing desk",
         price:200
        },

        {
            name : "Ikea skarsta/trotten standing desk",
            price : 200
        },

        {
            name :"Yo-Yo standing desk 90",
            price:200
        },

        {
            name :"Flytta 2 standing desk",
            price:200
        },

        {
            name :"Fully Jarvis bamboo standing desk",
            price:200
        },

        {
            name :"Herman Miller ratio sit-stand desk",
            price:200
        },

        {
            name :"Humanscale float standing desk",
            price:200
        },

        {
            name :"Flexispot children’s standing desk",
            price:200
        },

        {
            name :"Yo-Yo standing desk pro-3",
            price:200
        },

        {
            name :"HumbleWorks Stan 2 standing desk",
            price:200
        },

        {
            name :"Secretlab Magnus Pro",
            price:200
        },

        {
            name :"Autonomous SmartDesk Connect",
            price:200
        },
        
    ]

    return {standingDesks};
}

function Cart(){}

let modal = ModalPopup();
modal.displayModal();
modal.executeEvents()