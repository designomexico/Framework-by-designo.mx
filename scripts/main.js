// JavaScript Document

$(function() {

//	Detect Browser Name
//	
//	firefox
//	chrome
//	firefox
//	msie
//	android
//	ios
//	safari
//	blackberry
//	
//	Detect Os
//	
//	android
//	windowsphone
//	ios(iphone/ipad/ipod)
//	blackberry

    /**     
     *  Definir las versiones minimas necesarias para permitir la visualizacion de la pagina
     min_explorer = 10;
     min_safari = 6;
     min_chrome = 24;
     min_firefox = 20;
     browser_id = 'oldbrowsers';//id del elemento que se vuelve display:block en caso de que sea una version de navegador no soportada
     browser_htmlpage = 'old-browsers.html';//direccion relativa o absoluta de la pagina que se muestra en caso de version de navegador no soportada
     */

    var min_explorer = 10;
    var min_safari = 6;
    var min_chrome = 24;
    var min_firefox = 20;
    
    switch (bowser.name.toLowerCase()) {
        case "chrome":
            if (typeof min_chrome != "undefined") {
                if (bowser.version * 1 < min_chrome) {
                    showUncapableBrowser();
                }
            }
            break;
        case "safari":
            if (typeof min_safari != "undefined") {
                if (bowser.version * 1 < min_safari) {
                    showUncapableBrowser();
                }
            }
            break;
        case "firefox":
            if (typeof min_firefox != "undefined") {
                if (bowser.version * 1 < min_firefox) {
                    showUncapableBrowser();
                }
            }
            break;
        case "explorer":
        case "internet explorer":
            if (typeof min_explorer != "undefined") {
                if (bowser.version * 1 < min_explorer) {
                    showUncapableBrowser();
                }
            }
            break;
    }
    function showUncapableBrowser() {
        if (typeof browser_id != "undefined" && browser_id != "") {
            $("#" + browser_id).css('display', 'block');
        } else if (typeof browser_htmlpage != "undefined" && browser_htmlpage != "") {
            window.location.href = browser_htmlpage;
        } else {
            alert('Explorador no compatible');
        }
    }

    //DEMO FRESCO A FANCYBOX ALTERNATIVE 

    $('#demo_api_basic').bind('click', function(event) {
        // stop default click behavior
        event.preventDefault();

        Fresco.show('images/mini-big.png');
    });

});
