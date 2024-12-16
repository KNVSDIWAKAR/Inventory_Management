import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa6';

const Footers = () => {
    return (
        <Footer bgDark >
            <div className="w-full  lg:px-24 bg-blue-200">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 text-black" >
                    <div>
                        <Footer.Title title="Company" className='text-black  'style={{"fontWeight":"bold"}} />
                        <Footer.LinkGroup col>
                            <Footer.Link href="/about">About</Footer.Link>
                            <Footer.Link href="/store">shop</Footer.Link>
                            <Footer.Link href="#">Brand Center</Footer.Link>
                            <Footer.Link href="/blog">Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" className='text-black  'style={{"fontWeight":"bold"}} />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="#">Twitter</Footer.Link>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" className='text-black  'style={{"fontWeight":"bold"}}  />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" className='text-black  'style={{"fontWeight":"bold"}}  />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">iOS</Footer.Link>
                            <Footer.Link href="#">Android</Footer.Link>
                            <Footer.Link href="#">Windows</Footer.Link>
                            <Footer.Link href="#">MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by=" InventIQ™" year={(new Date().getFullYear())} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={FaDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footers