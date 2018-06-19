import $ from 'jquery';

export default class Modal {
    constructor(){
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton =$('.modal__close');
        this.events();
    }
    events(){
        // clicking open modal buttons
        this.openModalButton.click(this.openModal.bind(this));

        // close button
        this.closeModalButton.click(this.closeModal.bind(this));

        //esc action
        $(document).keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e) {
        if(e.keyCode == 27){
            this.closeModal();
        }
    }



    openModal(){
        this.modal.addClass('modal--is-visible');
        return false;
    }
    closeModal(){
        this.modal.removeClass('modal--is-visible');
        return false;

    }
}