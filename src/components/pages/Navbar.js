import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand " href="#">JOB BOARD</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/jobs">BrowseJobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>

                        </ul>
                        <div className='buttons'>
                            <a href="/login" className="btn btn-dark">
                                <i className="fa fa-sign-in me-1"></i> User Login</a>
                            <a href="/register" className="btn btn-dark mx-2">
                                <i className="fa fa-user-plus me-2"></i> Employer</a>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
