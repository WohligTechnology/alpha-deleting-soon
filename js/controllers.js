angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.footer = "views/footer2.html"

        $scope.mySlides = [
            // 'img/banner.jpg',
            // 'img/banner2.jpg',
            // 'img/banner3.jpg'
            // {
            //   img:"img/banner.jpg",
            //   link:""
            // },
            {
              img:"img/banner2.jpg",
              link:"pof"
            },
            {
              img:"img/banner3.jpg",
              link:"speciality-film"
            }
        ];

        $scope.client = [
            'img/client/1.jpg',
            'img/client/2.jpg',
            'img/client/3.jpg',
            'img/client/4.jpg',
            'img/client/5.jpg',
            'img/client/6.jpg',
            'img/client/7.jpg',
            'img/client/8.jpg',
            'img/client/9.jpg',
            'img/client/10.jpg',
            'img/client/11.jpg',
            'img/client/12.jpg',
            'img/client/13.jpg',
            'img/client/14.jpg',
            'img/client/15.jpg',
            'img/client/16.jpg',
            'img/client/17.jpg',
            'img/client/18.jpg',
            'img/client/19.jpg',
            'img/client/20.jpg',
            'img/client/21.jpg',
            'img/client/22.jpg',
            'img/client/23.jpg',
            'img/client/24.jpg',
            'img/client/25.jpg',
            'img/client/26.jpg',
            'img/client/27.jpg'
        ];
        $scope.news = [{
            "id": '1',
            "img": "img/n1.jpg",
            "date": "September 2013",
            "title": "Meet Alpha’s Plastic Super Family in Mexico!"

        }, {
            "id": '2',
            "img": "img/n2.jpg",
            "date": "November 2013",
            "title": "A major stride for Alpha at the Expo Pack Mexico"
        }, {
            "id": '3',
            "img": "img/n3.jpg",
            "date": "October 2013",
            "title": "Alpha Pharma Roorkee commissions ASB Nissei 12M machine"
        }, {
            "id": '1',
            "img": "img/n1.jpg",
            "date": "September 2013",
            "title": "Meet Alpha’s Plastic Super Family in Mexico!"
        }];
    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact-us"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Contact Us"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('FlexibleCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("flexible"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Flexible"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('QualityPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("quality-policy"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Quality Policy"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


                $scope.certificate = [{
                    image: "img/certificate/LD_Film-REACH.jpg",
                    desc:"",
                    link:"img/certificate/1.pdf"
                }, {
                    image: "img/certificate/LD_Film-ROHS.jpg",
                    desc:"",
                      link:"img/certificate/2.pdf"
                }, {
                    image: "img/certificate/PE-Migration.jpg",
                    desc:"",
                    link:"img/certificate/3.pdf"
                },
                {
                    image: "img/certificate/POF-Migration.jpg",
                    desc:"",
                      link:"img/certificate/4.pdf"
                },
                {
                    image: "img/certificate/POF-MSDS.jpg",
                    desc:"",
                      link:"img/certificate/5.pdf"
                },
                {
                    image: "img/certificate/POF-REACH.jpg",
                    desc:"",
                      link:"img/certificate/6.pdf"
                },
                {
                    image: "img/certificate/POF-ROHS.jpg",
                    desc:"",
                      link:"img/certificate/7.pdf"
                }];



    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("aboutus"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("About Us"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('NewsDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        $scope.template = TemplateService.changecontent("news-detail"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("News Detail"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        switch ($stateParams.id) {
            case '1':
                $scope.newDetailss = {
                    "img": "img/news/1.jpg",
                    "title": "Meet Alpha’s Plastic Super Family in Mexico! ",
                    "date": "September 2016",
                    "desc": "The packaging industry as a whole is very boring. Because it is predominantly in the B2B sector, the scope for experimenting is less. Majority of the companies have named their products based on their scientific qualities, which makes them difficult to remember. Only people from within the industry get the hang of it over a period of time.",
                    "desc2": "But, ALPHA has always believed in ‘Adding Value’ to their customers and the society at large. Why does this industry necessarily have to be boring? Why follow the same uninteresting naming convention? We decided to break the routine and do something interesting. Products will stimulate more curiosity if we add a face to them instead of giving them names based on their scientific properties. In order to differentiate Alpha from the rest, we created the Plastic Super Family, which is more relatable and spot- on entertaining. Each of the products have few distinct super powers, by which we mean the properties of Plastic, that represents a particular superhero and together they form the Plastic Super Family. PSF has 4 members - a father, Mother, teenage son and an elder daughter.",
                    "desc3": "The father, Mr. Protecto represents Safe & Secure shrink film that secures the content inside the packaging from dust and moisture. He provides security. Similarly, the mother of PSF is the face of our Stretch Films. With her ability to stretch, she safeguards good from damage during transportation. Pet bottles & jars are represented by Petty, the feather light daughter and the collation shrink film is characterized by Tuff, whose strength is his USP and his cape portrays its ability to get printed for branding.",
                    "desc4": "We are very excited to present our Plastic Super Family at the Pack Expo 2016 in Mexico. They are fun, entertaining and definitely the forerunners in their categories."
                }
                break;
            case '2':
                $scope.newDetailss = {
                    "img": "img/news/2.jpg",
                    "title": "A major stride for Alpha at the Expo Pack Mexico ",
                    "date": "May 17 2016",
                    "desc": "Alpha Plastomers is participating in Expo Pack – A 4-day event being held in Santa Fe in Mexico City, Mexico from 17th to 20th May, 2016. International exhibitors in the packaging industry will present the latest machinery, materials, components, containers, proven solutions for the processing, packaging, storage and distribution of products. Participating companies offer possibilities of new business opportunities, which being the main objective of the event. Alpha wishes to increase its presence globally and carve its name on the global map of the packaging industry. It will be an ideal platform for Alpha to showcase its products and distinguish them from its competitors.",
                    "desc2": "Alpha Plastomers is a family-owned packaging solutions provider with over 25 years of experience. In 1996, Alpha Polymer (the name then) was offering not only PPTQ, but also Polyethylene (PE) bags and liners to for industries including, but not limited to, textile, stationary, and household goods. By 2004, Alpha Group processed about 2,000 MT of polymers every month, which made it the largest PPTQ converter in Asia. The Indian packaging sector is ever-evolving and with Alpha’s leading position in the market in every sector, in 2006, Polyolefin (POF) Shrink Film and PET preforms were added to its portfolio. Alpha Group has become one of India’s top packaging solution provider for primary and secondary packaging industry with capacity of over seven million preforms per day and over 3,500 MT of POF shrink film annually. This tremendous growth allowed Alpha Group to diversify and add PET bottles to its portfolio for rigid packaging. Alpha Group is the only Indian company that provides solution for flexible and rigid packaging.",
                    "desc3": "The Expo Pack Mexico will play abode to some of the world renowned players in the packaging industry around for a period of 4 days. The exhibition will be spread over total floor space of 204,500 sq. ft. and is expected to have over 25,000 visitors with 1,000 exhibitors. It’s going to be an exciting time for Alpha and the packaging industry as a whole!"
                }
                break;
            case '3':
                $scope.newDetailss = {
                    "img": "img/news/3.jpg",
                    "title": "Alpha Pharma Roorkee commissions ASB Nissei 12M machine",
                    "date": "February 2016",
                    "desc": "Alpha cements its presence in Rigid packaging industry by adding ASB Nissei 12M to allow greater flexibility in its product offerings. With the new addition, Alpha has taken its first step in what will be a steady increase in capacity to tailor to pharmaceutical and FMCG industries."
                }

                break;
            case '4':
                $scope.newDetailss = {
                  "img": "img/news/4.jpg",
                  "title": "First Annual Meet",
                  "date": "November 9-10, 2015",
                  "desc": "Alpha Plastomers held its first annual meet right before Diwali. During the two days, everything from cost control to business strategies were discussed."
                }

                break;
            case '5':
                $scope.newDetailss = {
                  "img": "img/news/5.jpg",
                  "title": "Alpha enters North American market",
                  "date": "October 2015",
                  "desc": "Alpha is delighted to announce its presence in USA. A very relieved Akshay Agarwal, Director of Alpha Plastomers, said “After months of back-and-forth negotiations, we were able to come to an agreement with our USA counterparts allowing us to move closer to our customers and allowing our customers to reduce inventory and transit days."
                }

                break;
            case '6':
                $scope.newDetailss = {
                  "img": "img/news/6.jpg",
                  "title": "Alpha commissions Rajoo 3-Layer Multifold line",
                  "date": "October 2015",
                  "desc": "Over past 27 years, Alpha has shown it is not afraid to add new products to its portfolio to keep itself one of leading packaging suppliers in India. With the addition of 3-layer blown film line, Alpha has moved the goal post yet again and is perfectly poised to become a true “global corporation” With Rajoo’s 3-Layer Multifold line, Alpha will be adding Collation shrink film (also known as LD shrink film), stretch film, and “milk pouch” film.",
                  "desc2": "Please contact your sales representative to learn more about Alpha’s new product offerings."
                }

                break;
            default:

        }

        $scope.newsdetail = [{
            img: "",
            title: "Meet Alpha’s Plastic Super Family in Mexico! ",
            date: "",
            desc: "The packaging industry as a whole is very boring. Because it is predominantly in the B2B sector, the scope for experimenting is less. Majority of the companies have named their products based on their scientific qualities, which makes them difficult to remember. Only people from within the industry get the hang of it over a period of time.",
            desc2: "But, ALPHA has always believed in ‘Adding Value’ to their customers and the society at large. Why does this industry necessarily have to be boring? Why follow the same uninteresting naming convention? We decided to break the routine and do something interesting. Products will stimulate more curiosity if we add a face to them instead of giving them names based on their scientific properties. In order to differentiate Alpha from the rest, we created the Plastic Super Family, which is more relatable and spot- on entertaining. Each of the products have few distinct super powers, by which we mean the properties of Plastic, that represents a particular superhero and together they form the Plastic Super Family. PSF has 4 members - a father, Mother, teenage son and an elder daughter.",
            desc3: "The father, Mr. Protecto represents Safe & Secure shrink film that secures the content inside the packaging from dust and moisture. He provides security. Similarly, the mother of PSF is the face of our Stretch Films. With her ability to stretch, she safeguards good from damage during transportation. Pet bottles & jars are represented by Petty, the feather light daughter and the collation shrink film is characterized by Tuff, whose strength is his USP and his cape portrays its ability to get printed for branding.",
            desc4: "We are very excited to present our Plastic Super Family at the Pack Expo 2016 in Mexico. They are fun, entertaining and definitely the forerunners in their categories."

        }, {
            img: "",
            title: "A major stride for Alpha at the Expo Pack Mexico ",
            date: "May 17-20 2016",
            desc: "Alpha Plastomers is participating in Expo Pack – A 4-day event being held in Santa Fe in Mexico City, Mexico from 17th to 20th May, 2016. International exhibitors in the packaging industry will present the latest machinery, materials, components, containers, proven solutions for the processing, packaging, storage and distribution of products. Participating companies offer possibilities of new business opportunities, which being the main objective of the event. Alpha wishes to increase its presence globally and carve its name on the global map of the packaging industry. It will be an ideal platform for Alpha to showcase its products and distinguish them from its competitors.",
            desc2: "Alpha Plastomers is a family-owned packaging solutions provider with over 25 years of experience. In 1996, Alpha Polymer (the name then) was offering not only PPTQ, but also Polyethylene (PE) bags and liners to for industries including, but not limited to, textile, stationary, and household goods. By 2004, Alpha Group processed about 2,000 MT of polymers every month, which made it the largest PPTQ converter in Asia. The Indian packaging sector is ever-evolving and with Alpha’s leading position in the market in every sector, in 2006, Polyolefin (POF) Shrink Film and PET preforms were added to its portfolio. Alpha Group has become one of India’s top packaging solution provider for primary and secondary packaging industry with capacity of over seven million preforms per day and over 3,500 MT of POF shrink film annually. This tremendous growth allowed Alpha Group to diversify and add PET bottles to its portfolio for rigid packaging. Alpha Group is the only Indian company that provides solution for flexible and rigid packaging.",
            desc3: "The Expo Pack Mexico will play abode to some of the world renowned players in the packaging industry around for a period of 4 days. The exhibition will be spread over total floor space of 204,500 sq. ft. and is expected to have over 25,000 visitors with 1,000 exhibitors. It’s going to be an exciting time for Alpha and the packaging industry as a whole!"


        }, {
            img: "",
            title: "Alpha Pharma Roorkee commissions ASB Nissei 12M machine",
            date: "February 2016",
            desc: "Alpha cements its presence in Rigid packaging industry by adding ASB Nissei 12M to allow greater flexibility in its product offerings. With the new addition, Alpha has taken its first step in what will be a steady increase in capacity to tailor to pharmaceutical and FMCG industries."
        }, {
            img: "",
            title: "First Annual Meet",
            date: "November 9-10, 2015",
            desc: "Alpha Plastomers held its first annual meet right before Diwali. During the two days, everything from cost control to business strategies were discussed."
        }, {
            img: "",
            title: "Alpha enters North American market",
            date: "October 2015",
            desc: "Alpha is delighted to announce its presence in USA. A very relieved Akshay Agarwal, Director of Alpha Plastomers, said “After months of back-and-forth negotiations, we were able to come to an agreement with our USA counterparts allowing us to move closer to our customers and allowing our customers to reduce inventory and transit days."
        }, {
            img: "",
            title: "Alpha commissions Rajoo 3-Layer Multifold line",
            date: "October 2015",
            desc: "Over past 27 years, Alpha has shown it is not afraid to add new products to its portfolio to keep itself one of leading packaging suppliers in India. With the addition of 3-layer blown film line, Alpha has moved the goal post yet again and is perfectly poised to become a true “global corporation” With Rajoo’s 3-Layer Multifold line, Alpha will be adding Collation shrink film (also known as LD shrink film), stretch film, and “milk pouch” film.",
            desc2: "Please contact your sales representative to learn more about Alpha’s new product offerings."
        }]

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


        $scope.imageslider = [{
            image: "img/ppe/Big/1.jpg"
        }, {
            image: "img/ppe/Big/2.jpg"
        }, {
            image: "img/ppe/Big/3.jpg"
        },
        {
            image: "img/ppe/Big/4.jpg"
        },
        {
            image: "img/ppe/Big/5.jpg"
        },
        {
            image: "img/ppe/Big/6.jpg"
        },
        {
            image: "img/ppe/Big/7.jpg"
        },
        {
            image: "img/ppe/Big/8.jpg"
        } ];

        $scope.imagethumb = [{
            image: "img/ppe/Thumbnails/1.jpg"
        }, {
            image: "img/ppe/Thumbnails/2.jpg"
        }, {
            image: "img/ppe/Thumbnails/3.jpg"
        }, {
            image: "img/ppe/Thumbnails/4.jpg"
        },{
            image: "img/ppe/Thumbnails/5.jpg"
        },{
            image: "img/ppe/Thumbnails/6.jpg"
        },{
            image: "img/ppe/Thumbnails/7.jpg"
        },{
            image: "img/ppe/Thumbnails/8.jpg"
        }];


        $scope.flexprofile = [{
            image: "img/PET/prof.jpg",
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

    $scope.imageslider = [{
        image: "img/films/slider1/1slide.jpg"
    }, {
        image: "img/films/slider1/2slide.jpg"
    }, {
        image: "img/films/slider1/3slide.jpg"
    }, {
        image: "img/films/slider1/4slide.jpg"
    }];

    $scope.imagethumb = [{
        image: "img/films/slider1/1.jpg"
    }, {
        image: "img/films/slider1/2.jpg"
    }, {
        image: "img/films/slider1/3.jpg"
    }, {
        image: "img/films/slider1/4.jpg"
    }];


    $scope.imageslider2 = [{
        image: "img/films/slider2/Big/1.jpg"
    }, {
        image: "img/films/slider2/Big/2.jpg"
    }, {
        image: "img/films/slider2/Big/3.jpg"
    }, {
        image: "img/films/slider2/Big/4.jpg"
    }, {
        image: "img/films/slider2/Big/5.jpg"
    }, {
        image: "img/films/slider2/Big/6.jpg"
    }, {
        image: "img/films/slider2/Big/7.jpg"
    }, {
        image: "img/films/slider2/Big/8.jpg"
    }, {
        image: "img/films/slider2/Big/9.jpg"
    }, {
        image: "img/films/slider2/Big/10.jpg"
    }, {
        image: "img/films/slider2/Big/11.jpg"
    }];

    $scope.imagethumb2 = [{
        image: "img/films/slider2/Thumbnails/1.jpg"
    }, {
      image: "img/films/slider2/Thumbnails/2.jpg"
    }, {
      image: "img/films/slider2/Thumbnails/3.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/4.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/5.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/6.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/7.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/8.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/9.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/10.jpg"
    }, {
        image: "img/films/slider2/Thumbnails/11.jpg"
    }];

    $scope.flexprofile = [{
        image: "img/PET/prof.jpg",
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
            image: "img/pof/6.png",
            desc: "Pharmaceuticals"
        }, {
            image: "img/pof/5.png",
            desc: "Books & Journals"
        }, {
            image: "img/pof/4.png",
            desc: "Stationary"
        }, {
            image: "img/pof/3.png",
            desc: "Cosmetics"
        }, {
            image: "img/pof/2.png",
            desc: "Textiles"
        }, {
            image: "img/pof/1.png",
            desc: "FMCG"
        }, {
            image: "img/pof/7.png",
            desc: "Frozen Food"
        }];


        $scope.imageslider = [{
            image: "img/pof/1slide.jpg"
        }, {
            image: "img/pof/2slide.jpg"
        }, {
            image: "img/pof/3slide.jpg"
        }, {
            image: "img/pof/4slide.jpg"
        }, {
            image: "img/pof/5slide.jpg"
        }];

        $scope.imagethumb = [{
            image: "img/pof/1.jpg"
        }, {
            image: "img/pof/2.jpg"
        }, {
            image: "img/pof/3.jpg"
        }, {
            image: "img/pof/4.jpg"
        }, {
            image: "img/pof/5.jpg"
        }];

        $scope.flexprofile = [{
            image: "img/PET/prof.jpg",
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


        $scope.imageslider = [{
            image: "img/PET/1slide.jpg"
        }, {
            image: "img/PET/2slide.jpg"
        }, {
            image: "img/PET/3slide.jpg"
        }, {
            image: "img/PET/4slide.jpg"
        }, {
            image: "img/PET/5slide.jpg"
        }];

        $scope.imagethumb = [{
            image: "img/PET/1.jpg"
        }, {
            image: "img/PET/2.jpg"
        }, {
            image: "img/PET/3.jpg"
        }, {
            image: "img/PET/4.jpg"
        }, {
            image: "img/PET/5.jpg"
        }];

        $scope.flexprofile = [{
            image: "img/PET/prof.jpg",
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
