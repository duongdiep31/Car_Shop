import { $ } from "../utils"
const header = {
    render() {
        return /*html*/ `<div class="top-bar">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-5">
                    <ul class="list-inline top-contact">
                        <li><span>Phone :</span> +84358282316</li>
                        <li><span>Email :</span> diepdvph11572@fpt.edu.vn</li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-7">
                    <ul class="list-inline pull-right top-links">
                        <li>
                            <a href="#">Login</a> /
                            <a href="#">Register</a>
                        </li>
                        <li>
                            <a href="#">Wishlist</a>
                        </li>
                        <li>
                            <a href="#">Checkout</a>
                        </li>
                        <li>
                            <a href="#">Stores</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">English <i class="fa fa-angle-down"></i></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#">Arabic</a>
                                </li>
                                <li>
                                    <a href="#">German</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>

    <nav id="primary-menu" class="navbar navbar-fixed-top">
        <div class="container">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
                            <a class="logo" href="/">
                    <img src="src/assets/images/logo/logo-light.png" alt="Autoshop">
                </a>
            </div>

            <div class="collapse navbar-collapse pull-right" id="header-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-left">
                    <li class="has-dropdown ">
                        <a href="" data-toggle="dropdown" class="dropdown-toggle">Home</a>
                       
                    </li>

                    <li class="has-dropdown  ">
                        <a href="/products" data-toggle="dropdown" class="dropdown-toggle">shop</a>
                        
                    </li>

                    <li>
                        <a href="about.html">about</a>
                    </li>
                   
                   

                    <li class="has-dropdown">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">blog</a>
                        
                    </li>
                    <li class="has-dropdown pull-left">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">contact</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="contact-1.html">contact 1</a>
                            </li>
                            <li>
                                <a href="contact-2.html">contact 2</a>
                            </li>
                        </ul>
                    </li>

                </ul>

                <div class="module module-search pull-left">
                    <div class="search-icon">
                        <i class="fa fa-search"></i>
                        <span class="title">search</span>
                    </div>
                    <div class="search-box">
                        <form class="search-form">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Type Your Search Words">
                                <span class="input-group-btn">
<button class="btn" type="button"><i class="fa fa-search"></i></button>
</span>
                            </div>

                        </form>
                    </div>
                </div>


                <div class="module module-cart pull-left">
                    <div class="cart-icon">
                        <i class="fa fa-shopping-cart"></i>
                        <span class="title">shop cart</span>
                        <span class="cart-label">2</span>
                    </div>
                    <div class="cart-box">
                        <div class="cart-overview">
                            <ul class="list-unstyled">
                                <li>
                                    <img class="img-responsive" src="src/assets/images/shop/thumb/1.jpg" alt="product" />
                                    <div class="product-meta">
                                        <h5 class="product-title">Belt Car Engine</h5>
                                        <p class="product-price">Price: $68.00 </p>
                                        <p class="product-quantity">Quantity: 2</p>
                                    </div>
                                    <a class="cancel" href="#">cancel</a>
                                </li>
                                <li>
                                    <img class="img-responsive" src="src/assets/images/shop/thumb/2.jpg" alt="product" />
                                    <div class="product-meta">
                                        <h5 class="product-title">OIL FILTER</h5>
                                        <p class="product-price">Price: $180.00 </p>
                                        <p class="product-quantity">Quantity: 1</p>
                                    </div>
                                    <a class="cancel" href="#">cancel</a>
                                </li>
                            </ul>
                        </div>
                        <div class="cart-total">
                            <div class="total-desc">
                                <h5>CART SUBTOTAL :</h5>
                            </div>
                            <div class="total-price">
                                <h5>$316.00</h5>
                            </div>
                        </div>
                        <div class="clearfix">
                        </div>
                        <div class="cart-control">
                            <a class="btn btn-primary btn-block" href="#">view cart</a>
                            <a class="btn btn-secondary btn-block" href="#">check out</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </nav>`
    },
    afterRender() {
        console.log(1);
    }
}

export default header