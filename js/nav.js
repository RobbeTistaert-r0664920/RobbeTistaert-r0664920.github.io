function click() {


        var nav = $(".nav-wrapper");
        var navHeight = nav.height();

        if (navHeight < 150) {

            TweenMax.to(nav, 1, {"height": 150});
        } else {
            TweenMax.to(nav, 1, {"height": 50});
        }
        ;

    }