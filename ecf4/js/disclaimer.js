jQuery(document).ready(function($) {
    if (lireUnCookie("disclaimer") != "ejD86j7ZXF3x") {
        $("#monModal").modal({
            escapeClose: false,
            clickClose: false,
            showClose: false,
        });
    }
});


function creerUnCookie(nomCookie, valeurCookie, dureeJours) {
    if (dureeJours) {
        var date = new Date();
        date.setTime(date.getTime() + dureeJours * 24 * 60 * 60 * 1000);

        var expire = "; expire=" + date.toGMTString();
    }
    else var expire = "";
    document.cookie = nomCookie + "=" + valeurCookie + expire + ";path=/";
}

function lireUnCookie(nomCookie) {
    var nomFormate = nomCookie + "=";
    var tableauCookies = document.cookie.split(";");

    for (var i = 0; i < tableauCookies.length; i++) {
        var cookieTrouve = tableauCookies[i];
        while (cookieTrouve.charAt(0) == " ") {
            cookieTrouve = cookieTrouve.substring(1, cookieTrouve.length);
        }
        if (cookieTrouve.indexOf(nomFormate) == 0) {
            return cookieTrouve.substring(nomFormate.length, cookieTrouve.length);
        }
    }
    return null;
}
document
    .getElementById("actionDisclaimer")
    .addEventListener("click", accepterLeDisclaimer);
function accepterLeDisclaimer() {
    creerUnCookie("disclaimer", "ejD86j7ZXF3x", "lax", "Secure");
    var cookie = lireUnCookie("disclaimer");
    return cookie;
}