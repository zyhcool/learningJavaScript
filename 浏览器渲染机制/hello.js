
        let list = document.querySelector("ul");
        let items = [1,2,3,45,2];
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < items.length; i++) {
            var item = document.createElement("li");
            item.appendChild(document.createTextNode("Option " + i));
            fragment.appendChild(item);
        }
        list.appendChild(fragment);