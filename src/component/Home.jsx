import React from 'react'
import { Link } from 'react-router-dom'
import Crud from './Crud'

export default function Home() {
  return (
            
            <nav className="py-3 navbar navbar-expand-lg navbar-white bg-dark">
              <div className="container-fluid">
               {/* <Link  href="/Crud">Crud</Link> */}
               <Link to="/" className="navbar-brand">Crud</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
            </nav>
  )
}
