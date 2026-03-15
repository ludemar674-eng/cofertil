/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Wheat,
  Container,
  Truck,
  Factory
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { id: 'soybean_meal', icon: <Wheat className="w-8 h-8" />, image: 'https://lh3.googleusercontent.com/d/1ABuix9BpfuJC9lUmFLJ49Gx66lS57SC0' },
    { id: 'corn', icon: <Wheat className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800' },
    { id: 'sugar_vhp', icon: <Container className="w-8 h-8" />, image: 'https://lh3.googleusercontent.com/d/1q1XJ_4ZdQAt4M0uykH4cG2cpb3NrjDwX' },
    { id: 'sugar_crystal', icon: <Container className="w-8 h-8" />, image: 'https://lh3.googleusercontent.com/d/1bgFaTBPf1bTsOip2_FV20Vn-YKPYsHmc' },
    { id: 'sugar_ic45', icon: <Container className="w-8 h-8" />, image: 'https://lh3.googleusercontent.com/d/1YH7oTPk0QLUT9iu-AnNqRGIRGBdF5sr7' },
    { id: 'sesame', icon: <Wheat className="w-8 h-8" />, image: 'https://lh3.googleusercontent.com/d/1RPVGai0inPCUb14NrU2SKdXp6vXRruYn' },
    { id: 'sorghum', icon: <Wheat className="w-8 h-8" />, image: 'https://lh3.googleusercontent.com/d/1UISOvPeq5-MhgE7GF1iJ5kr-EcI5Xy1L' },
    { id: 'soybean', icon: <Wheat className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-emerald-700' : 'text-white'}`}>
                COFERTIL
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.home}</a>
              <a href="#about" className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.about}</a>
              <a href="#products" className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.products}</a>
              <a href="#contact" className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.contact}</a>
              
              <div className="flex items-center space-x-2 border-l border-slate-300 pl-6 ml-6">
                <button onClick={() => setLang('pt')} className={`text-xs font-bold px-2 py-1 rounded ${lang === 'pt' ? 'bg-emerald-600 text-white' : scrolled ? 'text-slate-500' : 'text-white/70'}`}>PT</button>
                <button onClick={() => setLang('en')} className={`text-xs font-bold px-2 py-1 rounded ${lang === 'en' ? 'bg-emerald-600 text-white' : scrolled ? 'text-slate-500' : 'text-white/70'}`}>EN</button>
                <button onClick={() => setLang('es')} className={`text-xs font-bold px-2 py-1 rounded ${lang === 'es' ? 'bg-emerald-600 text-white' : scrolled ? 'text-slate-500' : 'text-white/70'}`}>ES</button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.home}</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.about}</a>
                <a href="#products" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.products}</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.contact}</a>
                <div className="flex space-x-4 px-3 py-4 border-t border-slate-100 mt-2">
                  <button onClick={() => setLang('pt')} className={`text-sm font-bold ${lang === 'pt' ? 'text-emerald-600' : 'text-slate-400'}`}>PT</button>
                  <button onClick={() => setLang('en')} className={`text-sm font-bold ${lang === 'en' ? 'text-emerald-600' : 'text-slate-400'}`}>EN</button>
                  <button onClick={() => setLang('es')} className={`text-sm font-bold ${lang === 'es' ? 'text-emerald-600' : 'text-slate-400'}`}>ES</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Agro background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats / Features Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 hidden lg:block">
          <div className="max-w-7xl mx-auto grid grid-cols-4 divide-x divide-white/10">
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Global Trade</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Export & Import</p>
              </div>
            </div>
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Logistics</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Efficient Delivery</p>
              </div>
            </div>
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Industry</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Quality Processing</p>
              </div>
            </div>
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Container className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Storage</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Safe Warehousing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                {t.nav.about}
              </div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t.about.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t.about.content}
              </p>
              <div className="grid grid-cols-2 gap-8 w-full">
                <div>
                  <h4 className="font-bold text-emerald-700 text-2xl mb-1">10+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">{t.about.years}</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 text-2xl mb-1">500+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">{t.about.partners}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Agriculture" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="italic text-slate-600">
                  "{t.about.quote}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.products.title}</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={t.products[product.id as keyof typeof t.products]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 text-center flex flex-col items-center">
                  <div className="mb-4 text-emerald-600">
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {t.products[product.id as keyof typeof t.products]}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    {t.products.description}
                  </p>
                  <a href="#contact" className="text-emerald-600 font-bold text-sm inline-flex items-center group-hover:underline">
                    {t.products.learnMore} <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-4xl font-bold mb-8">{t.contact.title}</h2>
              <div className="space-y-8 w-full">
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl mb-4 lg:mb-0">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t.contact.address}</h4>
                    <p className="text-white/60">
                      ROD. 1 – KM 1 – GRAVATÁ<br />
                      GOVERNADOR MANGABEIRA – BA
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl mb-4 lg:mb-0">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t.contact.email}</h4>
                    <p className="text-white/60">vendas@confertilagro.com.br</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl mb-4 lg:mb-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t.contact.phone}</h4>
                    <p className="text-white/60">+55 11 94208-2210</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-emerald-600/10 border border-emerald-500/20 rounded-3xl w-full">
                <h4 className="font-bold mb-4">{t.contact.legalInfo}</h4>
                <p className="text-sm text-white/60 mb-2">{t.contact.companyName}: COFERTIL INDÚSTRIA E COMÉRCIO LTDA</p>
                <p className="text-sm text-white/60">CNPJ: 14.002.893/0001-4</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-slate-900"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.email}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-slate-900"
                    placeholder="email@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-slate-900"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white tracking-tighter">COFERTIL</span>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} COFERTIL. {t.footer.rights}
            </div>
            <div className="text-sm font-mono">
              {t.footer.tax_id}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511942082210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}
