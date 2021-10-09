import { update } from "../api/user";
import { getCartItem } from "../cart";
import { $, removeAuthen } from "../utils"
import cartMini from "./listCart";
const header = {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));

        const check = () => {

            if (user) {
                return /*html*/ `
                <li>
                <button  id="logout">  Đăng Xuất </button>
                
            </li>
            
                `


            } else {
                return /*html*/ ` <li>
                <a href="/login">Login</a> /
                <a href="/register">Register</a>
            </li>`
            }
        }
        const info = () => {
            if (user) {
                return /*html*/ ` 
                
                <ul class="list-inline top-contact">
                        <li><span>Phone :</span> +84358282316</li>
                        <li><span>Email :</span> ${user.data.user.email}</li>
                        
                </ul>`


            } else {
                return ``
            }


        }



        return /*html*/ `
            
        <div class="top-bar">
        <div class="container">
            <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-5">

                                    ${info()}

                   </div>
                <div class="col-xs-12 col-sm-6 col-md-7">
                    <ul class="list-inline pull-right top-links">
                       
                        ${check()}
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

                    ${ cartMini.render()}
                

            </div>

        </div>

    </nav>`
    }
}

export default header