import { add } from "../api/user";
import { $, reRender } from "../utils";
import login from "./login";

const register = {
    render() {
        return /*html*/ ` 


    <section id="register" class="register">
        <div class="container">
            <div class="row">
                    
                    <div class="dsd" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p>Hello</p>
                                    <h6>Register Form</h6>
                                    <div class="register-form">
                                        <form id="signup" class="mb-0">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="username" placeholder="User Name">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="email" placeholder="Email">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" id="pwd" placeholder="Password">
                                            </div>
                                            
                                         
                                            <button type="submit" class="btn btn-primary btn-block mt-30">Register</button>
                                        </form>
                                        <div class="form-links text-center">
                                            <a href="#">Have an account? Login Here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                

            </div>

        </div>

    </section>

    <div class="clearfix mb-150"></div>`
    },
    afterRender() {
        const btns = document.querySelector("#signup");
        btns.addEventListener("submit", async(e) => {
                e.preventDefault();
                const users = {
                    user: $("#username").value,

                    email: $("#email").value,
                    password: $("#pwd").value,
                }
                await add(users)
                reRender(login)
                window.location.hash = '/login';


            })
            (function($) {
                "use strict";
                var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
                    $module = $(".module");
                $dropToggle.on("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass("open");
                    $(this).parent().toggleClass("open");
                });
                $module.click(function() { $(this).toggleClass("toggle-module"); });
                $module.find("input.form-control", ".btn", ".cancel").click(function(e) { e.stopPropagation(); });
                var $navAffix = $(".header nav");
                $navAffix.affix({ offset: { top: 50 } });
                var $bgSection = $(".bg-section");
                var $bgPattern = $(".bg-pattern");
                var $colBg = $(".col-bg");
                $bgSection.each(function() {
                    var bgSrc = $(this).children("img").attr("src");
                    var bgUrl = 'url(' + bgSrc + ')';
                    $(this).parent().css("backgroundImage", bgUrl);
                    $(this).parent().addClass("bg-section");
                    $(this).remove();
                });
                $bgPattern.each(function() {
                    var bgSrc = $(this).children("img").attr("src");
                    var bgUrl = 'url(' + bgSrc + ')';
                    $(this).parent().css("backgroundImage", bgUrl);
                    $(this).parent().addClass("bg-pattern");
                    $(this).remove();
                });
                $colBg.each(function() {
                    var bgSrc = $(this).children("img").attr("src");
                    var bgUrl = 'url(' + bgSrc + ')';
                    $(this).parent().css("backgroundImage", bgUrl);
                    $(this).parent().addClass("col-bg");
                    $(this).remove();
                });
                $('.popup-video,.popup-gmaps').magnificPopup({
                    disableOn: 700,
                    mainClass: 'mfp-fade',
                    removalDelay: 0,
                    preloader: false,
                    fixedContentPos: false,
                    type: 'iframe',
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler">' +
                            '<div class="mfp-close"></div>' +
                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                            '</div>',
                        patterns: { youtube: { index: 'youtube.com/', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' } },
                        srcAction: 'iframe_src',
                    }
                });
                var $imgPopup = $(".img-popup");
                $imgPopup.magnificPopup({ type: "image" });
                var newDate = new Date(2017, 10, 31),
                    $countDown = $("#countdown");
                $countDown.countdown({ until: newDate, format: "smSMHD" });
                $(".counter").counterUp({ delay: 10, time: 1000 });
                var twitterFeed = $('#twitter-feed'),
                    twitterID = '721372281637888000';
                if (twitterFeed.length > 0) {
                    var twitterConfig = { "id": twitterID, "domId": 'twitter-feed', "maxTweets": 2, "showUser": false, "showTime": true, "showRetweet": false, "showInteraction": false, "enableLinks": true, "customCallback": handleTweets, "dateFunction": momentDateFormatter, };

                    function handleTweets(tweets) {
                        var x = tweets.length;
                        var n = 0;
                        var element = document.getElementById('twitter-feed');
                        var html = '<ul class="list-unstyled mb-0">';
                        while (n < x) {
                            html += '<li>' + tweets[n] + '</li>';
                            n++;
                        }
                        html += '</ul>';
                        element.innerHTML = html;
                    }

                    function momentDateFormatter(date, dateString) { return moment(dateString).fromNow(); }
                    twitterFetcher.fetch(twitterConfig);
                }
                var flickrID = '52617155@N08';
                var $flikrDiv = $('#flickr-feed');
                $flikrDiv.jflickrfeed({ limit: 10, qstrings: { id: flickrID }, itemTemplate: '<a class="flickr-item" href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>' }, function(data) { $('.flickr-item').magnificPopup({ type: 'image', gallery: { enabled: true } }); });
                var $testimonialCarousel = $(".testimonial-carousel");
                $testimonialCarousel.slick({ dots: true, infinite: true, speed: 600, autoplay: false, autoplaySpeed: 2000, slidesToShow: 3, slidesToScroll: 3, arrows: false, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } }, { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
                var $sliderRange = $("#slider-range"),
                    $sliderAmount = $("#amount");
                $sliderRange.slider({ range: true, min: 0, max: 500, values: [50, 300], slide: function(event, ui) { $sliderAmount.val("$" + ui.values[0] + " - $" + ui.values[1]); } });
                $sliderAmount.val("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));
                $('.product-img-slider').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.product-img-nav', infinite: false, });
                $('.product-img-nav').slick({ slidesToShow: 4, slidesToScroll: 1, asNavFor: '.product-img-slider', dots: false, arrows: true, prevArrow: '<div class="arrows arrow-prev"><i class="fa fa-angle-left"></i></div>', nextArrow: '<div class="arrows arrow-next"><i class="fa fa-angle-right"></i></div>', centerMode: false, focusOnSelect: true, infinite: false, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }] });
                var $productCarousel = $(".product-carousel");
                $productCarousel.slick({ dots: true, infinite: true, speed: 600, autoplay: false, autoplaySpeed: 2000, slidesToShow: 4, slidesToScroll: 4, variableWidth: false, arrows: false, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4, infinite: true, dots: true } }, { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
                var $clientCarousel = $(".client-carousel");
                $clientCarousel.slick({ dots: false, infinite: true, autoplay: true, autoplaySpeed: 4000, slidesToShow: 6, slidesToScroll: 6, variableWidth: false, arrows: false, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 6, slidesToScroll: 6, infinite: true, dots: true } }, { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
                var $heroSlider = $(".hero-slider");
                $heroSlider.slick({ dots: true, infinite: true, speed: 600, autoplay: false, autoplaySpeed: 2000, slidesToShow: 1, slidesToScroll: 1, variableWidth: false, arrows: true, prevArrow: '<div class="arrows arrow-prev"><i class="fa fa-angle-left"></i></div>', nextArrow: '<div class="arrows arrow-next"><i class="fa fa-angle-right"></i></div>', });
            }(jQuery));



    }
}
export default register