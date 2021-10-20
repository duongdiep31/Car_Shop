import instance from "../api/instance";
import { signin } from "../api/user";
import { $, authenticate,isAuthenticated, reRender  } from "../utils";
import admin from "./admin/Admin";
import productManagerPage from "./admin/Products/list";
import homepage from "./home";

const login = {
    async render() {
        return /*html*/ `

    <section id="signIn" class="sign">
        <div class="container">
            <div class="row">
                <div class="col-xs-12  col-sm-12  col-md-12">
                   
                    <div class="dsd" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p>Welcome Back</p>
                                    <h6>Login</h6>
                                    <div class="sign-form">
                                        <form id="signin" class="mb-0">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="email" placeholder="User Name">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" id="pwd" placeholder="Password">
                                            </div>
                                            <div class="checkbox pull-left">
                                                <label>
                                            <input type="checkbox">
                                            Remember me</label>
                                                                                        </div>
                                            <div class="pull-right lost-pass">
                                                <a href="#">Forget Password?</a>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                        </form>
                                        <div class="form-links text-center">
                                            <a href="#">Create New Account</a>
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

    <div class="clearfix mb-150"></div>
                                            `
    },

    afterRender() {
 const login = document.querySelector("#signin");
        login.addEventListener('submit',  (e) => {

            e.preventDefault();
            
            signin({
                    email: $("#email").value,
                    password: $("#pwd").value
                })
                .then(response => {
                    authenticate(response.data)
                })
                .then(() => {
                    if (isAuthenticated) {
                        if (isAuthenticated().user.mission === "guest") {
                        reRender(homepage)
                        window.location.hash = "/"
                    } else {
                        reRender(admin)
                        window.location.hash = "/admin"
                    }
                    }
                    

                })

        })





     



    }
}
export default login