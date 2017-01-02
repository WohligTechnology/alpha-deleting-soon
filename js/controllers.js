angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        'img/banner.jpg',
        'img/banner.jpg'
    ];
    $scope.client = [
     'img/client/c1.jpg',
     'img/client/c2.jpg',
     'img/client/c3.jpg',
     'img/client/c4.jpg',
     'img/client/c5.jpg',
     'img/client/c6.jpg'
 ];
 $scope.news = [
{
"img":"img/n1.jpg",
"date":"September 2013",
"title":"Meet Alpha’s Plastic Super Family in Mexico!"
},{
"img":"img/n2.jpg",
"date":"November 2013",
"title":"A major stride for Alpha at the Expo Pack Mexico"
},{
"img":"img/n3.jpg",
"date":"October 2013",
"title":"Alpha Pharma Roorkee commissions ASB Nissei 12M machine"
},{
"img":"img/n1.jpg",
"date":"September 2013",
"title":"Meet Alpha’s Plastic Super Family in Mexico!"
}
 ];
})
.controller('PlantLocationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("plant-location"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Plant Location"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('QualityPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("quality-policy"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Quality Policy"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("aboutus"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("About Us"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('NewsDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("news-detail"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("News Detail"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('EventsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("events"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Events"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("careers"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Careers"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('NewsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("news"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("News"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('JourneyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("journey"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Journey"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
.controller('Bags-LinersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("bags-liners"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Bags-Liners"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $(window).load(function() {
      // The slider being synced must be initialized first
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });
    });


        $scope.flexprofile = [{
             image: "img/PET/prof.png",
             desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
             name: "Mr.Sachin Gupta",
             company: "Kanika Enterprises",
             location: "New Delhi"
         },
         {
           image: "img/PET/prof.png",
           desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
           name: "Mr.Sachin Gupta",
           company: "Kanika Enterprises",
           location: "New Delhi"
            },
            {
              image: "img/PET/prof.png",
              desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
              name: "Mr.Sachin Gupta",
              company: "Kanika Enterprises",
              location: "New Delhi"
            }];

})

.controller('Speciality-FilmCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("speciality-film"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Speciality-Film"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.tab = 1;

    $(window).load(function() {
      // The slider being synced must be initialized first
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });
    });


        $scope.flexprofile = [{
             image: "img/PET/prof.png",
             desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
             name: "Mr.Sachin Gupta",
             company: "Kanika Enterprises",
             location: "New Delhi"
         },
         {
           image: "img/PET/prof.png",
           desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
           name: "Mr.Sachin Gupta",
           company: "Kanika Enterprises",
           location: "New Delhi"
            },
            {
              image: "img/PET/prof.png",
              desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
              name: "Mr.Sachin Gupta",
              company: "Kanika Enterprises",
              location: "New Delhi"
            }];

})

.controller('PofShrinkFilmCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("pof"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Pof Shrink Film"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.flexapplication = [{
         image: "img/pof/1.png",
         desc: "Pharmaceutical",
     },
     {
       image: "img/pof/2.png",
       desc: "Pharmaceutical",
      },
      {
        image: "img/pof/3.png",
        desc: "Pharmaceutical",
       },
       {
         image: "img/pof/4.png",
         desc: "Pharmaceutical",
        },
        {
          image: "img/pof/5.png",
          desc: "Pharmaceutical",
         },
        {
          image: "img/pof/6.png",
          desc: "Pharmaceutical",
         },
        {
          image: "img/pof/7.png",
          desc: "Pharmaceutical",
         },
        {
          image: "img/pof/pills.png",
          desc: "Pharmaceutical",
         },
        {
          image: "img/pof/pills.png",
          desc: "Pharmaceutical",
         },
        {
          image: "img/pof/pills.png",
          desc: "Pharmaceutical",
         },
         {
           image: "img/pof/pills.png",
           desc: "Pharmaceutical",
          },
          {
            image: "img/pof/pills.png",
            desc: "Pharmaceutical",
           }];

           $(window).load(function() {
             // The slider being synced must be initialized first
             $('#carousel').flexslider({
               animation: "slide",
               controlNav: false,
               animationLoop: false,
               slideshow: false,
               itemWidth: 210,
               itemMargin: 5,
               asNavFor: '#slider'
             });

             $('#slider').flexslider({
               animation: "slide",
               controlNav: false,
               animationLoop: false,
               slideshow: false,
               sync: "#carousel"
             });
           });

               $scope.flexprofile = [{
                    image: "img/PET/prof.png",
                    desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
                    name: "Mr.Sachin Gupta",
                    company: "Kanika Enterprises",
                    location: "New Delhi"
                },
                {
                  image: "img/PET/prof.png",
                  desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
                  name: "Mr.Sachin Gupta",
                  company: "Kanika Enterprises",
                  location: "New Delhi"
                   },
                   {
                     image: "img/PET/prof.png",
                     desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
                     name: "Mr.Sachin Gupta",
                     company: "Kanika Enterprises",
                     location: "New Delhi"
                   }];

})
.controller('PetBottlesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("pet"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("PET Bottles"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $(window).load(function() {
      // The slider being synced must be initialized first
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });
    });

    $scope.flexprofile = [{
         image: "img/PET/prof.png",
         desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
         name: "Mr.Sachin Gupta",
         company: "Kanika Enterprises",
         location: "New Delhi"
     },
     {
       image: "img/PET/prof.png",
       desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
       name: "Mr.Sachin Gupta",
       company: "Kanika Enterprises",
       location: "New Delhi"
        },
        {
          image: "img/PET/prof.png",
          desc: "We have been very satisfied with Alpha Plastomers in every terms, may it be quality, timely supply, new product development or innovation. They have put us at complete ease with respect to our product packaging. We can now concentrate on our product & market developments.",
          name: "Mr.Sachin Gupta",
          company: "Kanika Enterprises",
          location: "New Delhi"
        }];
})

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
