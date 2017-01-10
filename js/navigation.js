var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
    var navigation = [{
        name: "About Us",
        classis: "active",
        anchor: "aboutus",
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
        subnav: [{
            name: "Flexible",
            classis: "active",
            anchor: "flexible",
            // isId: "yes",
            subnavs: [{
                name: "PP/PE Bags & Liners",
                classis: "active",
                anchor: "bags-liners",
                // isId: "yes",
            }, {
                name: "POF Shrink Film",
                classis: "active",
                anchor: "pof",
                // isId: "no",
            },{
                name: "Speciality Films",
                classis: "active",
                anchor: "speciality-film",
                // isId: "no",
            }]
        }, {
            name: "Rigid",
            classis: "active",
            anchor: "rigid",
            subnavs: [{
                name: "PP/PE Bags & Liners",
                classis: "active",
                anchor: "bags-liners",
                // isId: "yes",
            }]
            // isId: "no",
        }]
    },
    // {
    //     name: "Clients",
    //     classis: "active",
    //     anchor: "clients",
    //     subnav: []
    // },
    {
        name: "News",
        classis: "active",
        anchor: "news",
        subnav: []
    },
    {
        name: "Events",
        classis: "active",
        anchor: "events",
        subnav: []
    },{
        name: "Careers",
        classis: "active",
        anchor: "careers",
        subnav: []
    },{
        name: "Contact Us",
        classis: "active",
        anchor: "contact-us",
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
