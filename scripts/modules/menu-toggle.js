/*-----MOBILE MENU TOGGLE-----*/

//Open and close the menu on mobile
function menuToggle() {
    //Hamburger icon
    const bars = $(".hamburger__bar");
    const barLabels = ["top", "center", "bottom"];

    const header = $(".header");
    header.toggleClass("is-open");

    if (header.hasClass("is-open")) {

        openMenu(bars, barLabels);

    } else {

        closeMenu(bars, barLabels);
    }
}

//Open the menu; convert hamburger menu to a cross
function openMenu(bars, barLabels) {

    //Add appropriate classlist to each hamburger bar to perform animation
    for (let i = 0; i < bars.length; i++) {

        $(bars[i]).addClass("hamburger__bar--" + barLabels[i]);
    }
}

//Close the menu; convert cross to hamburger menu
function closeMenu(bars, barLabels) {

    //Remove appropriate classlist to each hamburger bar to perform animation
    for (let i = 0; i < bars.length; i++) {

        $(bars[i]).removeClass("hamburger__bar--" + barLabels[i]);
    }

}

export {menuToggle};