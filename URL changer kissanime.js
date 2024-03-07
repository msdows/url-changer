// ==UserScript==
// @name     URL Appender
// @description Automatically changes server on KissAnime to my favorite server
// @version  1
// @grant    none
// @author   Baichi
// @match  https://kissanime.com.ru/Anime/*
// @icon     https://www.google.com/s2/favicons?sz=64&domain=kissanime.com.ru
// ==/UserScript==

function appendToCurrentUrl(text) {
    // Obter a URL atual
    var url = window.location.href;

    // Verificar se a URL termina com um número
    if (/\d$/.test(url)) {
        // Verificar se o texto já está na URL
        if (url.indexOf(text) === -1) {
            // Adicionar o texto ao final da URL
            var newUrl = url + text;

            // Redirecionar para a nova URL
            window.location.href = newUrl;
        }
    }
}

// Adiciona o texto ao fim do link
var textToAppend = "&s=oserver";
appendToCurrentUrl(textToAppend);
