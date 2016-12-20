var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
    var navigation = [{
        name: "Overview",
        classis: "active",
        anchor: "overview",
          subnav: []
        // subnav: [{
        //     name: "Subnav1",
        //     classis: "active",
        //     anchor: "home"
        // }]
    }, {
        name: "Product",
        classis: "active",
        anchor: "product",
        subnav: []
    },{
        name: "Clients",
        classis: "active",
        anchor: "clients",
        subnav: []
    },{
        name: "News&Events",
        classis: "active",
        anchor: "news-event",
        subnav: []
    },{
        name: "Careers",
        classis: "active",
        anchor: "careers",
        subnav: []
    },{
        name: "Contact-us",
        classis: "active",
        anchor: "contact",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    };
});
