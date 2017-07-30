requirejs.config({
        paths: {
            jQuery: "/Recipe/node_modules/jquery/dist/jquery.min",
            jQuery_ui: "/Recipe/node_modules/jqueryui/jquery-ui.min",
            createList: "../js/app/createList",
            setBoldWords: "../js/app/setBoldWords"
        }
    }
);


require(["jQuery_ui", "createList", "setBoldWords"], function (createList, setBoldWords) {
    $(function () {
        $( "#accordion" ).accordion({
            heightStyle: "content",
            collapsible: true
        });

        var banner = document.getElementById('banner_right');
        banner.addEventListener('click', function () {
            if (banner.getAttribute('id') === 'banner_right') {
                banner.removeAttribute('id');
                banner.setAttribute('id', 'banner_left');
            } else {
                banner.remove();
            }
        });
    })
});