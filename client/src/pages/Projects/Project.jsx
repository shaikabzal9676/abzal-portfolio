import React from 'react'
import './project.css'
import Bounce from 'react-reveal/Bounce'
const Project = ({theme}) => {
  return (
    <>
    
    <div id='projects' className="container project">

    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Projects</h2>
        <hr />
        <p style={theme=='dark'?({color:"black"}):({color:"white"})} className="pd-3 text-center">
          👉 here are my top 3 recent projects with live links & source code.
        </p>

        <div className="row" id='ads'>
            <Bounce>

            <div className="col-md-4">
                <div className="card rounded">

                    <div className="card-image">
                        <span className="card-notify-badge">Full Stack</span>
                        <img src="https://reactjsexample.com/content/images/2021/06/Movie-Search-App.jpg" alt="Project1" />
                    </div>

                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Node</span>
                        <span className="card-detail-badge">Express</span>
                        <span className="card-detail-badge">React</span>
                        
                        <span className="card-detail-badge">Mongodb</span>
                    </div>
                    
                    <div className="card-body">
                        <div className="ad-title m-auto text-center mb-4">
                            <h5 className='text-uppercase'>Movie Search App</h5>
                        </div>
                        <a href="#" className='ad-btn'>View</a>
                    </div>


                </div>
            </div>

            
            <div className="col-md-4">
                <div className="card rounded">

                    <div className="card-image">
                        <span className="card-notify-badge">Full Stack</span>
                        <img src="https://reactjsexample.com/content/images/2021/06/Movie-Search-App.jpg" alt="Project1" />
                    </div>

                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Node</span>
                        <span className="card-detail-badge">Express</span>
                        <span className="card-detail-badge">React</span>
                        
                        <span className="card-detail-badge">Mongodb</span>
                    </div>
                    
                    <div className="card-body">
                        <div className="ad-title m-auto text-center mb-4">
                            <h5 className='text-uppercase'>Movie Search App</h5>
                        </div>
                        <a href="#" className='ad-btn'>View</a>
                    </div>


                </div>
            </div>


            <div className="col-md-4">
                <div className="card rounded">

                    <div className="card-image">
                        <span className="card-notify-badge">Full Stack</span>
                        <img src="https://reactjsexample.com/content/images/2021/06/Movie-Search-App.jpg" alt="Project1" />
                    </div>

                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Node</span>
                        <span className="card-detail-badge">Express</span>
                        <span className="card-detail-badge">React</span>
                        
                        <span className="card-detail-badge">Mongodb</span>
                    </div>
                    
                    <div className="card-body">
                        <div className="ad-title m-auto text-center mb-4">
                            <h5 className='text-uppercase'>Movie Search App</h5>
                        </div>
                        <a href="#" className='ad-btn'>View</a>
                    </div>


                </div>
            </div>

            </Bounce>
        </div>
    </div>

    
    </>
  )
}

export default Project