// JavaScript Document

$(function() {

	//Definimos las versiones mínimas compatibles con el proyecto
	///////////////////////////
	///////////////////////////
    var min_explorer = 10;
    var min_safari = 6;
    var min_chrome = 24;
    var min_firefox = 20;
    var browser_id = 'old-browser';
    var browser_id = 'http://www.browser-update.org/es/update.html';
    /////////////////////////// 
    ///////////////////////////
    //Aqui se verifica el navegador y version soportadas
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
    /**
     * Funcion que se ejecuta en caso de que el navegador no cumpla con los requisitos minimos
     * Si esta definido un browser_id, ese elemento se muestra (display block). Si no, busca que este dada de alta una URL de envio 'browser_htmlpage'.
     * Finalmente si ninguna de las anteriores esta definida, se muestra un alert.
     * @returns void
     */
    function showUncapableBrowser() {
        if (typeof browser_id != "undefined" && browser_id != "") {
            $("#" + browser_id).css('display', 'block');
        } else if (typeof browser_htmlpage != "undefined" && browser_htmlpage != "") {
            window.location.href = browser_htmlpage;
        } else {
            alert('Explorador no compatible');
        }
    }

});
