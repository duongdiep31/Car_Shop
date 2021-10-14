import CBrands from "../component/brands";
import categorycomponent from "../component/categories/category";
import CProduct from "../component/productscomponent";
import productscomponent from "../component/productscomponent";
import { clickLogout, search } from "../utils";
const product = {
    async render() {


        return /*html*/ `
            
        <section id="page-title" class="page-title">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h1>shop grid left sidebar</h1>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6">
                    <ol class="breadcrumb text-right">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">grid</li>
                    </ol>
                </div>

            </div>

        </div>

    </section>


    <section id="shopgrid" class="shop shop-grid">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3 sidebar">

                            <div class="widget widget-categories">
                            <div class="widget-title">
                                <h5>categories</h5>
                            </div>
                            <div class="widget-content">
                                <ul class="list-unstyled">
                                <li>
                                <a href="#/products"><i class="fa fa-angle-double-right"></i>All</a>
                                  </li>   
                                    ${ await categorycomponent.render()}
                                </ul>
                            </div>        
                        </div>

                     






                   




                    <div class="widget widget-recent-products">
                        <div class="widget-title">
                            <h5>Best Sellers</h5>
                        </div>
                        <div class="widget-content">

                            <div class="product">
                                <img src="src/assets/images/shop/thumb/7.jpg" alt="product" />
                                <div class="product-desc">
                                    <div class="product-title">
                                        <a href="#">Front LIGHTING</a>
                                    </div>
                                    <div class="product-meta">
                                        <span class="color-theme">$13.99</span>
                                    </div>
                                </div>
                            </div>


                            <div class="product">
                                <img src="src/assets/images/shop/thumb/8.jpg" alt="product" />
                                <div class="product-desc">
                                    <div class="product-title">
                                        <a href="#">Thermal Fan</a>
                                    </div>
                                    <div class="product-meta">
                                        <span class="color-theme">$15.99</span>
                                    </div>
                                </div>
                            </div>


                            <div class="product">
                                <img src="src/assets/images/shop/thumb/8.jpg" alt="product" />
                                <div class="product-desc">
                                    <div class="product-title">
                                        <a href="#">Cold Air System</a>
                                    </div>
                                    <div class="product-meta">
                                        <span class="color-theme">$11.99</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div class="widget widget-tags">
                        <div class="widget-title">
                            <h5>tag clouds</h5>
                        </div>
                        <div class="widget-content">
                            <a href="#">responsive</a>
                            <a href="#">modern</a>
                            <a href="#">corporate</a>
                            <a href="#">business</a>
                            <a href="#">fresh</a>
                            <a href="#">awesome</a>
                            <a href="#">business</a>
                            <a href="#">fresh</a>
                            <a href="#">corporate</a>
                            <a href="#">autoshop</a>
                        </div>
                    </div>

                </div>

                <div class="col-xs-12 col-sm-12 col-md-9">
                    <div class="row">
                        <div class="col-xs-12  col-sm-12  col-md-12">
                            <div class="shop-options">
                                <div class="product-options2 pull-left pull-none-xs">
                                    <ul class="list-inline">
                                        <li>
                                            <div class="product-sort mb-15-xs">
                                                <span>sort by:</span>
                                                <i class="fa fa-angle-down"></i>
                                                <select>
<option selected="" value="Default">Product Name</option>
<option value="Larger">Newest Items</option>
<option value="Larger">oldest Items</option>
<option value="Larger">Hot Items</option>
<option value="Small">Highest Price</option>
<option value="Medium">Lowest Price</option>
</select>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="product-sort">
                                                <span>Show:</span>
                                                <i class="fa fa-angle-down"></i>
                                                <select>
<option selected="" value="10">10 items / page</option>
<option value="25">25 items / page</option>
<option value="50">50 items / page</option>
<option value="100">100 items / page</option>
</select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="product-view-mode text-right pull-none-xs">
                                    <span>view as:</span>
                                    <a class="active" href="#"><i class="fa fa-th-large"></i></a>
                                    <a href="#"><i class="fa fa-th-list"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="row">
                        ${await CProduct.render()}
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <ul class="pagination">
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </section>`
    },
    afterRender() {
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
        clickLogout()
        search();
        CProduct.afterRender();

    }

}
export default product