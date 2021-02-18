import {menuToggle} from "./menu-toggle.js";

/*PAGE SECTION NAVIGATION*/

//Navigates the user to correct section when navigation link is clicked
//Highlights active navigation link
function pageNavigation(e) {

    e.preventDefault();

    const navLink = $(this);
    const href = navLink.attr("href");

    //Remove active state from previous navigation link and page section
    $(".is-active-link").removeClass("is-active-link");
    $(".is-active-section").removeClass("is-active-section").fadeOut();

    //If the mail social icon was clicked, add active state to navigation contact link
    if (navLink.hasClass("header__contact-link")) {

        //Add active state to contact navigation link 
        $(".navbar__contact-icon").addClass("is-active-link");

    } else {

        //Add active state to current navigation link 
        navLink.children("i").addClass("is-active-link");

    }

    //Add active state to current page section 
    //Display selected page section
    $(href).animate({ scrollTop: 0 }).addClass("is-active-section").fadeIn();

    menuToggle();
}

export {pageNavigation};