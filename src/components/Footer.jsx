
const Footer = () => {
    return (
        <footer className="py-4 bg-gradient-to-br from-gray-800 via-purple-950 to-black text-white">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-base md:text-lg">
                    © {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()} Sanjay. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;