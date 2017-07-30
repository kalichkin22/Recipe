define(["jQuery"], function () {
    function createList() {
        function Product(name, count) {
            this.name = name;
            this.count = count;
        }

        Product.prototype = {
            "getDisplayName": function () {
                return this.name + " - " + this.count;
            }
        };

        var potato = new Product("картофель", "5 шт.");
        var oil = new Product("масло сливочное", "1 столовая ложка");
        var cream = new Product("сливки", "3 столовые ложки");
        var parmesan = new Product("пармезан", "по вкусу");
        var bacon = new Product("бекон", "100 г.");
        var salt = new Product("соль", "по вкусу");
        var paper = new Product("молотый перец", "по вкусу");
        var onion = new Product("зеленый лук", "по вкусу");

        var arr = [potato, oil, cream, parmesan, bacon, salt, paper, onion];

        var list = document.createElement('ol');

        $('#img').append(list);

        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            $(li).html(arr[i].getDisplayName());
            $(list).append(li);
        }
        $(list).addClass('rounded');
    }

    return createList();
});