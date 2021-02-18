import {menuToggle} from "./modules/menu-toggle.js";
import {pageNavigation} from "./modules/page-navigation.js";

//When the document is ready, the following will be carried out
$(function () {

    //Hide page sections that are not being viewed
    $("section").not(".is-active-section").hide();

    //Add eventlisteners to mobile menu icon and navigation links
    $(".hamburger").click(menuToggle);
    $(".nav-link, .header__contact-link").click(pageNavigation);

    //jQuery End    
});