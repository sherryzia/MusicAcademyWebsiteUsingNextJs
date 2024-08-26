import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
            <Link href="/" className="text-white" scroll={false}>Home</Link>

            
            </li>
            <li>
              <a
                href="courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/SherryZia22/" target='_blank'
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shaheerzia22/"  target='_blank'
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sherryzia22" target='_blank'
                className="hover:text-white transition-colors duration-300"
              >
                X (Formerly Twitter)
              </a>
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Rawalpindi, Pakistan</p>
          <p>Rawalpindi 45000</p>
          <p>Email: shaheerzia22@gmail.com</p>
          <p>Phone: +92 349-5642816</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
    </footer>
    )
}

export default Footer