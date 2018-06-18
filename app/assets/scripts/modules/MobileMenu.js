import $ from 'jquery';

export default class MobileMenu{
    constructor() {
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.events();
        this.menuContent = $('.site-header__menu-content');
    }

    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu(){        
         this.menuContent.toggleClass("site-header__menu-content--is-visible");
         this.siteHeader.toggleClass("site-header--expanded");
         this.menuIcon.toggleClass("site-header__menu-icon-x")
    }
}