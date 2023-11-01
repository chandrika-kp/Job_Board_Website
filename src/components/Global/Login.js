import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login
            </button>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                            </form>
                            <p className="mt-3 text-center">Not registered? <NavLink to="/signUp">SignUp</NavLink></p>
                        </div>

                    </div>
                </div>
            </div>
            <p>
            This is login page
            </p>
            <NavLink to="/signUp">signup</NavLink>
        </>
    )
}

export default Login