import {get, getAll } from "../api/productsapi";
import { addToCart } from "../cart";
import { clickLogout } from "../utils";
import productManagerPage from "./admin/list";

const productdetails = {
    async render({ id }) {


        const response = await fetch(`http://localhost:3000/products/${id}`);
        const product = response ? await response.json() : [];
        const nf = Intl.NumberFormat();

        const coin = product.price;
        return /*html*/ `
        <section id="page-title" class="page-title">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h1>${
                           product.name 
                    }</h1>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6">
                    <ol class="breadcrumb text-right">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">shop</li>
                    </ol>
                </div>

            </div>

        </div>

    </section>


    <section id="shopgrid" class="shop shop-single">
        <div class="container shop-content">
            

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-5">
                    <div class="prodcut-images">
                        <div class="product-img-slider">
                            <img src="${product.image}" alt="product image">
                            
                        </div>
                       <!-- <div class="product-img-nav">
                            <img src="${product.image}" alt="product image">
                            
                        </div> -->
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-7">
                    <div class="product-title text-center-xs">
                        <h3>${product.name}</h3>
                    </div>

                    <div class="product-meta mb-30">
                        <div class="product-price pull-left pull-none-xs">
                            <p><span class="discount"></span>${nf.format(coin)} VND </p>
                        </div>

                        <div class="product-review text-right text-center-xs">
                            <span class="product-rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-half-o"></i>
<i class="fa fa-star-o"></i>
</span>
                            <span>5 Review(s)</span> / <span>
<a href="#">Add Review</a>
</span>
                        </div>

                    </div>

                    <div class="product-desc text-center-xs">
                        <p class="mb-0">Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices
                            ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                    </div>

                    <hr class="mt-30 mb-30">
                    <div class="product-details text-center-xs">
                        <h5>Other Details :</h5>
                        <ul class="list-unstyled">
                            <li>Product : <span>Air System</span></li>
                            <li>Code : <span>#0214</span></li>
                            <li>Availabiltity : <span>Available</span></li>
                            <li>Brand : <span>Opel</span></li>
                        </ul>
                    </div>

                    <hr class="mt-30 mb-30">
                    <div class="product-action">
                        <div class="product-quantity pull-left pull-none-xs">
                            <span class="qua">Quantity:</span>
                            <span>
<a href="#"><i class="fa fa-minus"></i></a>
<input type="text" value="1" id="pro-qunt" readonly>
<a href="#"><i class="fa fa-plus"></i></a>
</span>
                        </div>
                        <div class="product-cta text-right text-center-xs">
                            <button class="btn btn-primary" data-id = "${product.id}" id="addtocart">add to cart</button>




                            <a class="btn btn-primary bordered" href="#">wishlist</a>
                            <a class="btn btn-primary bordered" href="#">compare</a>
                        </div>
                    </div>

                    <hr class="mt-30 mb-30">
                    <div class="product-share  text-center-xs">
                        <h5 class="share-title">share product: </h5>
                        <a class="share-facebook" href="#"><i class="fa fa-facebook"></i></a>
                        <a class="share-twitter" href="#"><i class="fa fa-twitter"></i></a>
                        <a class="share-google-plus" href="#"><i class="fa fa-google-plus"></i></a>
                        <a class="share-pinterest" href="#"><i class="fa fa-pinterest"></i></a>
                        <a class="share-dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="product-tabs">

                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#description" aria-controls="description" role="tab" data-toggle="tab">description</a>
                            </li>
                            <li role="presentation">
                                <a href="#details" aria-controls="details" role="tab" data-toggle="tab">details</a>
                            </li>
                            <li role="presentation">
                                <a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">reviews(2)</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="description">
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl,
                                    ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl,
                                    ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                            </div>

                            <div role="tabpanel" class="tab-pane" id="details">
                                <h5>Technical Details</h5>
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Part Number</td>
                                            <td>60-MCTE</td>
                                        </tr>
                                        <tr>
                                            <td>Item Weight</td>
                                            <td>54 pounds</td>
                                        </tr>
                                        <tr>
                                            <td>Product Dimensions</td>
                                            <td>92.8 x 92.8 x 92.8 inches</td>
                                        </tr>
                                        <tr>
                                            <td>Item model number</td>
                                            <td>60-MCTE</td>
                                        </tr>
                                        <tr>
                                            <td>Item Package Quantity</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>Number of Handles</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>Batteries Required?</td>
                                            <td>No</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div role="tabpanel" class="tab-pane reviews" id="reviews">
                                <ul class="product-review list-unstyled">
                                    <li class="review-comment">
                                        <h6>Mostafa Amin</h6>
                                        <p class="review-date">22/02/2016</p>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                        </div>
                                        <div class="product-comment">
                                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam
                                                libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                                        </div>
                                    </li>

                                    <li class="review-comment">
                                        <h6>Mohamed Habaza</h6>
                                        <p class="review-date">21/02/2016</p>
                                        <div class="product-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <div class="product-comment">
                                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam
                                                libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                                        </div>
                                    </li>

                                </ul>
                                <div class="form-review">
                                    <form>
                                        <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                        <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                        <select class="form-control">
<option selected="" value="Default">Your Rating</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
                                        <textarea class="form-control" id="review" rows="2" placeholder="Review"></textarea>
                                        <button type="submit" class="btn btn-primary btn-black btn-block">Post Your review</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 pager">
                    <div class="page-prev">
                        <a href="#"><i class="fa fa-angle-left"></i></a>
                    </div>
                    <div class="page-next">
                        <a href="#"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="widget-related-product">
                        <div class="widget-title">
                            <h4>Related Products</h4>
                        </div>
                        <div class="widget-content">
                            <div class="row">

                                <div class="col-xs-12 col-sm-6 col-md-3 product">
                                    <div class="product-img">
                                        <img src="src/assets/images/shop/grid/1.jpg" alt="Product" />
                                        <div class="product-hover">
                                            <div class="product-action">
                                                <a class="btn btn-primary" href="#">Add To Cart</a>
                                                <a class="btn btn-primary" href="#">Item Details</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="product-bio">
                                        <div class="prodcut-cat">
                                            <a href="#">Opel</a>
                                        </div>

                                        <div class="prodcut-title">
                                            <h3>
                                                <a href="#">Brake Discs</a>
                                            </h3>
                                        </div>

                                        <div class="product-price">
                                            <span class="symbole">$</span><span>68.00</span>
                                        </div>

                                    </div>

                                </div>


                                <div class="col-xs-12 col-sm-6 col-md-3 product">
                                    <div class="product-img">
                                        <img src="src/assets/images/shop/grid/2.jpg" alt="Product" />
                                        <div class="product-hover">
                                            <div class="product-action">
                                                <a class="btn btn-primary" href="#">Add To Cart</a>
                                                <a class="btn btn-primary" href="#">Item Details</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="product-bio">
                                        <div class="prodcut-cat">
                                            <a href="#">Subaru</a>
                                        </div>

                                        <div class="prodcut-title">
                                            <h3>
                                                <a href="#">OIL FILTER</a>
                                            </h3>
                                        </div>

                                        <div class="product-price">
                                            <span class="symbole">$</span><span>40.00</span>
                                        </div>

                                    </div>

                                </div>


                                <div class="col-xs-12 col-sm-6 col-md-3 product">
                                    <div class="product-img">
                                        <img src="src/assets/images/shop/grid/3.jpg" alt="Product" />
                                        <div class="product-hover">
                                            <div class="product-action">
                                                <a class="btn btn-primary" href="#">Add To Cart</a>
                                                <a class="btn btn-primary" href="#">Item Details</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="product-bio">
                                        <div class="prodcut-cat">
                                            <a href="#">Opel</a>
                                        </div>

                                        <div class="prodcut-title">
                                            <h3>
                                                <a href="#">Belt Car Engine</a>
                                            </h3>
                                        </div>

                                        <div class="product-price">
                                            <span class="symbole">$</span><span>180.00</span>
                                        </div>

                                    </div>

                                </div>


                                <div class="col-xs-12 col-sm-6 col-md-3 product">
                                    <div class="product-img">
                                        <img src="src/assets/images/shop/grid/4.jpg" alt="Product" />
                                        <div class="product-hover">
                                            <div class="product-action">
                                                <a class="btn btn-primary" href="#">Add To Cart</a>
                                                <a class="btn btn-primary" href="#">Item Details</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="product-bio">
                                        <div class="prodcut-cat">
                                            <a href="#">Mercedes</a>
                                        </div>

                                        <div class="prodcut-title">
                                            <h3>
                                                <a href="#">Tire Chains</a>
                                            </h3>
                                        </div>

                                        <div class="product-price">
                                            <span class="symbole">$</span><span>230.00</span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
        `
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
        const btn = document.querySelector("#addtocart");
        const btn_id = btn.dataset.id

        btn.addEventListener('click', async() => {
            var { data } = await get(btn_id)

            // console.log();
            const newProduct = {
                ...data,
                quantity: 1
            }
            addToCart(newProduct)
        })
    }
}
export default productdetails