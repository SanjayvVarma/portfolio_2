import React from 'react'

const Footer = () => {
    return (
        <div className="py-4 bg-gradient-to-br from-gray-800 via-purple-950 to-black text-white">
            <p className="text-center text-lg">
                © {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()} Sanjay. All rights reserved.
            </p>
        </div>
    )
}

export default Footer