import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";

class Error extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Page Not Found</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Page Not Found</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
					
					
					<section className="section-area section-sp2 error-404">
						<div className="container">
							<div className="inner-content">
								<h2 className="error-title">4<span></span>4</h2>
								<h3 className="error-text">The Page you were looking for, couldn't be found.</h3>
								<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
								<div className="clearfix">
									<Link to="/" className="btn btn-primary m-r5">Back</Link>
									<Link to="/" className="btn btn-primary">Back To Home</Link>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
			</>
		);
	}
}

export default Error;