define(["jQuery"], function () {
    var wordsList = ['исторя', 'блюда', 'способ', 'приготовления', 'картофель', 'масло', 'сливочное', 'сливки', 'пармезан', 'бекон'];

    var str = $('body');

    for (var i = 0; i < wordsList.length; i++) {
        str.html(str.html().replace(wordsList[i], "<span class='bold'>" + wordsList[i] + "</span>"));
    }
});
