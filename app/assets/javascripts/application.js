// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var tpj=jQuery;
tpj.noConflict();

tpj(document).ready(function() {

    if (tpj.fn.cssOriginal!=undefined)
    tpj.fn.css = tpj.fn.cssOriginal;

    tpj('.fullwidthbanner').revolution({
        delay:6000,
        startwidth:890,
        startheight:450,

        onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

        thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
        thumbHeight:50,
        thumbAmount:3,

        hideThumbs:200,
        navigationType:"bullet",				//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
        navigationArrows:"verticalcentered",	//nexttobullets, verticalcentered, none
        navigationStyle:"round",				//round,square,navbar

        touchenabled:"on",						// Enable Swipe Function : on/off

        navOffsetHorizontal:0,
        navOffsetVertical:20,

        stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at 											slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
        stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if 										set to -1 slide never stop automatic

        fullWidth:"on",

        shadow:0							//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
    });
});