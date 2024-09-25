import logo from '../assets/homify-logo.png';
const Footer = () => {
    return (
      <footer className="bg-white py-10 font-poppins mt-20">
        <div className="container mx-auto px-5">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          <div className="order-1 md:order-1">
              <img src={logo} alt="FAHost" className="h-16" />
              <p className="text-sm text-gray-600">
              Homify is a smart home company that provides innovative automation solutions for home security, energy efficiency, and convenience, making everyday living easier and more connected.
              </p>
          </div>
  
      
          <div className="grid grid-cols-2 gap-8 order-2 md:order-2">
              
              <div>
              <h4 className="font-semibold mb-2">Smart Devices</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li>Smart Lighting</li>
                  <li>Smart Thermostats</li>
                  <li>Security Cameras</li>
                  <li>Smart Plugs</li>
                  <li>Voice Assistants</li>
              </ul>
              </div>
  
              
              <div>
              <h4 className="font-semibold mb-2">Automation</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li>Energy Saving Automation</li>
                  <li>Custom Home Setup</li>
                  <li>Smart Routines</li>
                  <li>Home Security Integration</li>
                  <li>Device Synchronization</li>
              </ul>
              </div>
          </div>
  
          
          <div className="grid grid-cols-2 gap-8 order-3 md:order-3">
              
              <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li>24/7 Technical Support</li>
                  <li>Installation Assistance</li>
                  <li>Troubleshooting</li>
                  <li>Customer Reviews</li>
              </ul>
              </div>
  
              
              <div>
              <h4 className="font-semibold mb-2">Help Center</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                  <li>Blog</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>
              </ul>
              </div>
          </div>
          </div>
  
          
          <div className="items-center justify-center text-center pt-10 text-slate-500">
              <h1>@2024 Homify_fathurahman x raul. All rights reserved.</h1>
          </div>
      </div>
      </footer>
      );
  };
  
  export default Footer;  