

const Footer = () => {


    return (
        <div className="w-full bg-neutral mt-20">
            <footer className="footer flex flex-col sm:flex-row justify-around text-neutral-content px-12 py-10 container mx-auto">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="px-5 pb-10">
                <p className="text-center text-white text-xs font-extralight">Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-normal">Saif Uddin.</span></p>
            </div>
        </div>
    );
};

export default Footer;