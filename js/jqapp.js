$(document).ready(function(){

// Start Navbar

// for navbutton
    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('changes');
    });

// for navbar
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();


        if(getscrolly >= 200){
            $('.navbar').addClass('navmenus');
        }else{
            $('.navbar').removeClass('navmenus');
        }

    });
// End Navbar


// Start Mission Section

    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();

        if(getscrolly >= 650){
            $('.cameraimgs').addClass('fromlefts');
            $('.missiontexts').addClass('fromrights');
        }else{
            $('.cameraimgs').removeClass('fromlefts');
            $('.missiontexts').removeClass('fromrights');
        }
    });
// End Mission Section


// Start Galley Section

    $('.gallerylists').click(function(){
        let datafilter = $(this).attr('data-filter');

        if(datafilter === "all"){
            $('.filters').show(300);
        }else{
            $('.filters').not('.'+datafilter).hide(300);

            $('.filters').filter('.'+datafilter).show(300);
        }
    });

// ul active
    $('.gallerylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');
    });
// End Galley Section


// Start Pricing Section

    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();

        if(getscrolly >= 4000){
            $('.cardones').addClass('movefromlefts');
            $('.cardtwos').addClass('movefrombottoms');
            $('.cardthrees').addClass('movefromrights');
        }else{
            $('.cardones').removeClass('movefromlefts');
            $('.cardtwos').removeClass('movefrombottoms');
            $('.cardthrees').removeClass('movefromrights');
        }
    });
// End Pricing Section


// Start Footer Section

    const showyear = document.getElementById('showyear');
    const getfullyear = new Date().getUTCFullYear();
    showyear.textContent = getfullyear;
// End Footer Section
})