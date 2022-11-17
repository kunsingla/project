import React from 'react'
import { Link } from 'react-router-dom'

export default function search_list() {
  return (
    <>
      <div className="offcanvas offcanvas-end show " tabIndex={-1} id="offcanvasDark" aria-labelledby="offcanvasDarkLabel" style={{ backgroundColor: '#B2B2B2'}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkLabel">Search By Your Recquiretment</h5>
          <Link to="/">
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvasDark" aria-label="Close" />
          </Link>
        </div>
        <div className="offcanvas-body">
          <div className='row'>
            <Link to="/food"><button type="button" class="btn btn-primary mt-2 mb-2 ">food</button></Link>
            <Link to="/project"><button type="button" class="btn btn-primary mt-2 mb-2">project</button></Link>
            <Link to="/travel"><button type="button" class="btn btn-primary mt-2 mb-2">travel</button></Link>
            <Link to="/academicsCourses"><button type="button" class="btn btn-primary mt-2 mb-2">academicsCourses</button></Link>
            <Link to="/subscription"><button type="button" class="btn btn-primary mt-2 mb-2">Subscriptions</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
