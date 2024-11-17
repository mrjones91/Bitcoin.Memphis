import React from 'react';
import Header from './components/Header';
import { ArrowRight, Globe, Users, Lightbulb, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center items-center">
        <img className="justify-center" src="https://res.cloudinary.com/dijital-technologies/image/upload/v1731818858/BOOM/boomi.png" style={{maxWidth:400, display: 'inline-flex'}} />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
            BOOM <span className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">(Bitcoin Office of Memphis)</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Advancing innovation and education in Memphis through grants, development, and community initiatives backed by Bitcoin.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
              View Projects <ArrowRight className="ml-2" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full">
                <Globe className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">Supporting Bitcoin initiatives that drive innovation and adoption worldwide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full">
                <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Community First</h3>
              <p className="text-gray-600 dark:text-gray-400">Building a stronger Bitcoin community through education and collaboration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full">
                <Lightbulb className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Innovation Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">Fostering technological advancement in the Bitcoin ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="https://res.cloudinary.com/dijital-technologies/image/upload/v1731833362/ikvpmic8krdga0loyfpv.png" alt="Bitcoin Development" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Community Development Grants</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Supporting those bringing value and making things better.</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Check out our Flagship Project: Blight Bounties</p>
                <a href="https://github.com/kfemelue/2024-city-hackathon-blight-bounties/tree/ragapi" className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300">
                  Learn More <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&q=80&w=800" alt="Education Initiatives" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Education Initiatives</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Utilizes many resources and workshops for Bitcoin education in Memphis.</p>
                <a href="https://bitcoin.org/bitcoin.pdf" className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300">
                  Learn More <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the BOOM Community</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Help us build a stronger Bitcoin ecosystem in Memphis and beyond.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-orange-600 transition-colors">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="https://res.cloudinary.com/dijital-technologies/image/upload/v1731818858/BOOM/boomi.png" alt="BOOM Logo" className="h-12 mb-4" />
              <p className="text-gray-400">Advancing Memphis with Bitcoin</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://iris.to/npub1frz53aya3nfs60skzcd3s55ag7tva9p5lyy80zc0xj2ckq76m3gq3du4ep" className="text-gray-400 hover:text-white">NOSTR</a></li>
                <li><a href="https://github.com/mrjones91/" className="text-gray-400 hover:text-white">GitHub</a></li>
                {/* <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BOOM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;