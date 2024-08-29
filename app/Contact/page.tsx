'use client';

import { useState } from 'react';
import { FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);

        // Assurez-vous que la clé d'accès est incluse
        object.access_key = 'c0ee066f-cd07-4b38-b528-471ec97a5f60';
        object.to_email = 'odiledewas@gmail.com';
        object.from_name = `${object.first_name} ${object.last_name}`;
        object.reply_to = object.email;

        const json = JSON.stringify(object);

        setFormStatus('Veuillez patienter...');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();
            if (response.status === 200) {
                setFormStatus(result.message);
                if (form) {
                    form.reset();
                }
            } else {
                setFormStatus(`Erreur : ${result.message}`);
                console.error('Réponse complète :', result);
            }
        } catch (error) {
            setFormStatus('Une erreur s\'est produite !');
            console.error('Erreur complète :', error);
        }

        setTimeout(() => setFormStatus(''), 5000);
    };

    return (

        <>
            <div className='text-center items-center flex flex-col pt-24 px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-4'>
                    <div className="bg-[rgb(44,255,191)] w-1 sm:w-2 h-2 sm:h-2 rounded-full"></div>
                    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-9 text-center">Contact</h1>
                </div>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center">
                    Contacter moi, et discutons de votre projet.
                </p>

                <div className="flex flex-col items-center w-full max-w-xl bg-[#36363611] border border-[#1d1d1d] rounded-3xl text-white py-5 px-4 sm:px-6 mx-auto">
                    <div className="w-full p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
                        <form id="contactForm" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <input type="hidden" name="access_key" value="c0ee066f-cd07-4b38-b528-471ec97a5f60" />
                            <input type="hidden" name="subject" value="Nouvelle soumission de Web3Forms" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm">Prénom</label>
                                    <input type="text" id="first_name" name="first_name" required className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm">Nom</label>
                                    <input type="text" id="last_name" name="last_name" required className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Adresse e-mail</label>
                                <input type="email" id="email" name="email" required className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm">Objet</label>
                                <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm">Votre message</label>
                                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
                            </div>
                            <button type="submit" className="w-full px-4 py-2 text-sm sm:text-base inline-block text-white rounded-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                                Envoyer le message
                            </button>
                        </form>
                        {formStatus && <p className="mt-4 text-center text-sm sm:text-base">{formStatus}</p>}
                    </div>
                </div>
            </div></>
    );
}