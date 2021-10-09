const Cart = {
    render() {
        return /*html*/ `<section id="page-title" class="page-title">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h1>shop cart</h1>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6">
                    <ol class="breadcrumb text-right">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">shop cart</li>
                    </ol>
                </div>

            </div>

        </div>

    </section>


    <section id="shopcart" class="shop shop-cart">
        <div class="container">
            <div class="row">
                <div class="col-xs-12  col-sm-12  col-md-12">
                    <div class="cart-table table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="cart-product">
                                    <th class="cart-product-item">Product</th>
                                    <th class="cart-product-price">Price</th>
                                    <th class="cart-product-quantity">Quantity</th>
                                    <th class="cart-product-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="cart-product">
                                    <td class="cart-product-item">
                                        <div class="cart-product-remove">
                                            <i class="fa fa-close"></i>
                                        </div>
                                        <div class="cart-product-img">
                                            <img src="src/assets/images/shop/thumb/1.jpg" alt="product" />
                                        </div>
                                        <div class="cart-product-name">
                                            <h6>Belt Car Engine</h6>
                                        </div>
                                    </td>
                                    <td class="cart-product-price">$ 10.00</td>
                                    <td class="cart-product-quantity">
                                        <div class="product-quantity">
                                            <a href="#"><i class="fa fa-minus"></i></a>
                                            <input type="text" value="2" id="pro1-qunt" readonly>
                                            <a href="#"><i class="fa fa-plus"></i></a>
                                        </div>
                                    </td>
                                    <td class="cart-product-total">$ 20.00</td>
                                </tr>
                                <tr class="cart-product">
                                    <td class="cart-product-item">
                                        <div class="cart-product-remove">
                                            <i class="fa fa-close"></i>
                                        </div>
                                        <div class="cart-product-img">
                                            <img src="src/assets/images/shop/thumb/2.jpg" alt="product" />
                                        </div>
                                        <div class="cart-product-name">
                                            <h6>OIL FILTER</h6>
                                        </div>
                                    </td>
                                    <td class="cart-product-price">$ 40.00</td>
                                    <td class="cart-product-quantity">
                                        <div class="product-quantity">
                                            <a href="#"><i class="fa fa-minus"></i></a>
                                            <input type="text" value="3" id="pro2-qunt" readonly>
                                            <a href="#"><i class="fa fa-plus"></i></a>
                                        </div>
                                    </td>
                                    <td class="cart-product-total">$ 120.00</td>
                                </tr>
                                <tr class="cart-product-action">
                                    <td colspan="4">
                                        <div class="row clearfix">
                                            <div class="col-xs-12 col-sm-6 col-md-6">
                                                <form class="form-inline">
                                                    <input type="text" class="form-control" id="coupon" placeholder="Coupon Code" />
                                                    <button type="submit" class="btn btn-primary">Apply Coupon</button>
                                                </form>
                                            </div>

                                            <div class="col-xs-12 col-sm-6 col-md-6 text-right">
                                                <a class="btn btn-secondary" href="#">update cart</a>
                                                <a class="btn btn-primary" href="#">Proceed To Checkout</a>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div class="col-xs-12  col-sm-12  col-md-6 mb-30-xs mb-30-sm">
                    <div class="cart-shiping">
                        <h6>Calculate Shipping :</h6>
                        <div class="row">
                            <form>
                                <div class="col-xs-12 col-md-12">
                                    <i class="fa fa-angle-down"></i>
                                    <select class="form-control">
<option value="USA">USA</option>
<option value="AFG">Afghanistan</option>
<option value="ALA">Åland Islands</option>
<option value="ALB">Albania</option>
<option value="DZA">Algeria</option>
<option value="ASM">American Samoa</option>
<option value="AND">Andorra</option>
<option value="AGO">Angola</option>
<option value="AIA">Anguilla</option>
<option value="ATA">Antarctica</option>
<option value="ATG">Antigua and Barbuda</option>
<option value="ARG">Argentina</option>
<option value="ARM">Armenia</option>
<option value="ABW">Aruba</option>
<option value="AUS">Australia</option>
<option value="AUT">Austria</option>
<option value="AZE">Azerbaijan</option>
<option value="BHS">Bahamas</option>
<option value="BHR">Bahrain</option>
<option value="BGD">Bangladesh</option>
<option value="BRB">Barbados</option>
<option value="BLR">Belarus</option>
<option value="BEL">Belgium</option>
<option value="BLZ">Belize</option>
<option value="BEN">Benin</option>
<option value="BMU">Bermuda</option>
<option value="BTN">Bhutan</option>
<option value="BOL">Bolivia, Plurinational State of</option>
<option value="BES">Bonaire, Sint Eustatius and Saba</option>
<option value="BIH">Bosnia and Herzegovina</option>
<option value="BWA">Botswana</option>
<option value="BVT">Bouvet Island</option>
<option value="BRA">Brazil</option>
<option value="IOT">British Indian Ocean Territory</option>
<option value="BRN">Brunei Darussalam</option>
<option value="BGR">Bulgaria</option>
<option value="BFA">Burkina Faso</option>
<option value="BDI">Burundi</option>
<option value="KHM">Cambodia</option>
<option value="CMR">Cameroon</option>
<option value="CAN">Canada</option>
<option value="CPV">Cape Verde</option>
<option value="CYM">Cayman Islands</option>
<option value="CAF">Central African Republic</option>
<option value="TCD">Chad</option>
<option value="CHL">Chile</option>
<option value="CHN">China</option>
<option value="CXR">Christmas Island</option>
<option value="CCK">Cocos (Keeling) Islands</option>
<option value="COL">Colombia</option>
<option value="COM">Comoros</option>
<option value="COG">Congo</option>
<option value="COD">Congo, the Democratic Republic of the</option>
<option value="COK">Cook Islands</option>
<option value="CRI">Costa Rica</option>
<option value="CIV">Côte d'Ivoire</option>
<option value="HRV">Croatia</option>
<option value="CUB">Cuba</option>
<option value="CUW">Curaçao</option>
<option value="CYP">Cyprus</option>
<option value="CZE">Czech Republic</option>
<option value="DNK">Denmark</option>
<option value="DJI">Djibouti</option>
<option value="DMA">Dominica</option>
<option value="DOM">Dominican Republic</option>
<option value="ECU">Ecuador</option>
<option value="EGY">Egypt</option>
<option value="SLV">El Salvador</option>
<option value="GNQ">Equatorial Guinea</option>
<option value="ERI">Eritrea</option>
<option value="EST">Estonia</option>
<option value="ETH">Ethiopia</option>
<option value="FLK">Falkland Islands (Malvinas)</option>
<option value="FRO">Faroe Islands</option>
<option value="FJI">Fiji</option>
<option value="FIN">Finland</option>
<option value="FRA">France</option>
<option value="GUF">French Guiana</option>
<option value="PYF">French Polynesia</option>
<option value="ATF">French Southern Territories</option>
<option value="GAB">Gabon</option>
<option value="GMB">Gambia</option>
<option value="GEO">Georgia</option>
<option value="DEU">Germany</option>
<option value="GHA">Ghana</option>
<option value="GIB">Gibraltar</option>
<option value="GRC">Greece</option>
<option value="GRL">Greenland</option>
<option value="GRD">Grenada</option>
<option value="GLP">Guadeloupe</option>
<option value="GUM">Guam</option>
<option value="GTM">Guatemala</option>
<option value="GGY">Guernsey</option>
<option value="GIN">Guinea</option>
<option value="GNB">Guinea-Bissau</option>
<option value="GUY">Guyana</option>
<option value="HTI">Haiti</option>
<option value="HMD">Heard Island and McDonald Islands</option>
<option value="VAT">Holy See (Vatican City State)</option>
<option value="HND">Honduras</option>
<option value="HKG">Hong Kong</option>
<option value="HUN">Hungary</option>
<option value="ISL">Iceland</option>
<option value="IND">India</option>
<option value="IDN">Indonesia</option>
<option value="IRN">Iran, Islamic Republic of</option>
<option value="IRQ">Iraq</option>
<option value="IRL">Ireland</option>
<option value="IMN">Isle of Man</option>
<option value="ISR">Israel</option>
<option value="ITA">Italy</option>
<option value="JAM">Jamaica</option>
<option value="JPN">Japan</option>
<option value="JEY">Jersey</option>
<option value="JOR">Jordan</option>
<option value="KAZ">Kazakhstan</option>
<option value="KEN">Kenya</option>
<option value="KIR">Kiribati</option>
<option value="PRK">Korea, Democratic People's Republic of</option>
<option value="KOR">Korea, Republic of</option>
<option value="KWT">Kuwait</option>
<option value="KGZ">Kyrgyzstan</option>
<option value="LAO">Lao People's Democratic Republic</option>
<option value="LVA">Latvia</option>
<option value="LBN">Lebanon</option>
<option value="LSO">Lesotho</option>
<option value="LBR">Liberia</option>
<option value="LBY">Libya</option>
<option value="LIE">Liechtenstein</option>
<option value="LTU">Lithuania</option>
<option value="LUX">Luxembourg</option>
<option value="MAC">Macao</option>
<option value="MKD">Macedonia, the former Yugoslav Republic of</option>
<option value="MDG">Madagascar</option>
<option value="MWI">Malawi</option>
<option value="MYS">Malaysia</option>
<option value="MDV">Maldives</option>
<option value="MLI">Mali</option>
<option value="MLT">Malta</option>
<option value="MHL">Marshall Islands</option>
<option value="MTQ">Martinique</option>
<option value="MRT">Mauritania</option>
<option value="MUS">Mauritius</option>
<option value="MYT">Mayotte</option>
<option value="MEX">Mexico</option>
<option value="FSM">Micronesia, Federated States of</option>
<option value="MDA">Moldova, Republic of</option>
<option value="MCO">Monaco</option>
<option value="MNG">Mongolia</option>
<option value="MNE">Montenegro</option>
<option value="MSR">Montserrat</option>
<option value="MAR">Morocco</option>
<option value="MOZ">Mozambique</option>
<option value="MMR">Myanmar</option>
<option value="NAM">Namibia</option>
<option value="NRU">Nauru</option>
<option value="NPL">Nepal</option>
<option value="NLD">Netherlands</option>
<option value="NCL">New Caledonia</option>
<option value="NZL">New Zealand</option>
<option value="NIC">Nicaragua</option>
<option value="NER">Niger</option>
<option value="NGA">Nigeria</option>
<option value="NIU">Niue</option>
<option value="NFK">Norfolk Island</option>
<option value="MNP">Northern Mariana Islands</option>
<option value="NOR">Norway</option>
<option value="OMN">Oman</option>
<option value="PAK">Pakistan</option>
<option value="PLW">Palau</option>
<option value="PSE">Palestinian Territory, Occupied</option>
<option value="PAN">Panama</option>
<option value="PNG">Papua New Guinea</option>
<option value="PRY">Paraguay</option>
<option value="PER">Peru</option>
<option value="PHL">Philippines</option>
<option value="PCN">Pitcairn</option>
<option value="POL">Poland</option>
<option value="PRT">Portugal</option>
<option value="PRI">Puerto Rico</option>
<option value="QAT">Qatar</option>
<option value="REU">Réunion</option>
<option value="ROU">Romania</option>
<option value="RUS">Russian Federation</option>
<option value="RWA">Rwanda</option>
<option value="BLM">Saint Barthélemy</option>
<option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
<option value="KNA">Saint Kitts and Nevis</option>
<option value="LCA">Saint Lucia</option>
<option value="MAF">Saint Martin (French part)</option>
<option value="SPM">Saint Pierre and Miquelon</option>
<option value="VCT">Saint Vincent and the Grenadines</option>
<option value="WSM">Samoa</option>
<option value="SMR">San Marino</option>
<option value="STP">Sao Tome and Principe</option>
<option value="SAU">Saudi Arabia</option>
<option value="SEN">Senegal</option>
<option value="SRB">Serbia</option>
<option value="SYC">Seychelles</option>
<option value="SLE">Sierra Leone</option>
<option value="SGP">Singapore</option>
<option value="SXM">Sint Maarten (Dutch part)</option>
<option value="SVK">Slovakia</option>
<option value="SVN">Slovenia</option>
<option value="SLB">Solomon Islands</option>
<option value="SOM">Somalia</option>
<option value="ZAF">South Africa</option>
<option value="SGS">South Georgia and the South Sandwich Islands</option>
<option value="SSD">South Sudan</option>
<option value="ESP">Spain</option>
<option value="LKA">Sri Lanka</option>
<option value="SDN">Sudan</option>
<option value="SUR">Suriname</option>
<option value="SJM">Svalbard and Jan Mayen</option>
<option value="SWZ">Swaziland</option>
<option value="SWE">Sweden</option>
<option value="CHE">Switzerland</option>
<option value="SYR">Syrian Arab Republic</option>
<option value="TWN">Taiwan, Province of China</option>
<option value="TJK">Tajikistan</option>
<option value="TZA">Tanzania, United Republic of</option>
<option value="THA">Thailand</option>
<option value="TLS">Timor-Leste</option>
<option value="TGO">Togo</option>
<option value="TKL">Tokelau</option>
<option value="TON">Tonga</option>
<option value="TTO">Trinidad and Tobago</option>
<option value="TUN">Tunisia</option>
<option value="TUR">Turkey</option>
<option value="TKM">Turkmenistan</option>
<option value="TCA">Turks and Caicos Islands</option>
<option value="TUV">Tuvalu</option>
<option value="UGA">Uganda</option>
<option value="UKR">Ukraine</option>
<option value="ARE">United Arab Emirates</option>
<option value="GBR">United Kingdom</option>
<option value="USA">United States</option>
<option value="UMI">United States Minor Outlying Islands</option>
<option value="URY">Uruguay</option>
<option value="UZB">Uzbekistan</option>
<option value="VUT">Vanuatu</option>
<option value="VEN">Venezuela, Bolivarian Republic of</option>
<option value="VNM">Viet Nam</option>
<option value="VGB">Virgin Islands, British</option>
<option value="VIR">Virgin Islands, U.S.</option>
<option value="WLF">Wallis and Futuna</option>
<option value="ESH">Western Sahara</option>
<option value="YEM">Yemen</option>
<option value="ZMB">Zambia</option>
<option value="ZWE">Zimbabwe</option>
</select>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <i class="fa fa-angle-down"></i>
                                    <select class="form-control">
<option value="default">State/ Country</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District Of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
</select>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="postal-code" placeholder="Postal Code / ZIP">
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary pull-right pull-none-xs">update total</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div class="col-xs-12  col-sm-12  col-md-6">
                    <div class="cart-total-amount">
                        <h6>Cart Totals :</h6>
                        <ul class="list-unstyled">
                            <li>Cart Subtotal :<span class="pull-right text-right">$ 140.00</span></li>
                            <li>Shipping :<span class="pull-right text-right">Free Shipping</span></li>
                            <li>Order Total :<span class="pull-right text-right">$ 140.00</span></li>
                        </ul>
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
    }
}
export default Cart