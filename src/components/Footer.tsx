import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 justify-center">

                    <div className="flex flex-col items-center space-y-4">
                        <h2 className="text-2xl font-semibold">PetSys ♥</h2>
                        <p className="text-sm text-gray-400 text-center">
                            Transformando vidas, uma adoção por vez.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <h3 className="text-lg font-semibold">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <h3 className="text-lg font-semibold">Contato</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center justify-center">
                                <HiOutlineMail className="mr-2" size={20} />
                                <span>contato@petsys.com</span>
                            </li>
                            <li className="flex items-center justify-center">
                                <HiOutlinePhone className="mr-2" size={20} />
                                <span>(85) 9999-9999</span>
                            </li>
                            <li className="text-center">13 de maio, 123 - Forataleza, CE</li>
                        </ul>
                    </div>

                </div>

                <div className="w-full h-0.5 bg-gray-600 my-8"></div>

                <div className="text-center text-sm text-gray-400">
                    <p>© 2024 PetSys. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
