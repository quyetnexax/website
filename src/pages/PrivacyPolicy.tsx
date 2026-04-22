import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, UserCheck, AlertCircle, Eye, Database } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - NexaX</title>
        <meta
          name="description"
          content="Learn how NexaX protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices."
        />
        <meta property="og:title" content="Privacy Policy - NexaX" />
        <meta property="og:description" content="Learn how NexaX protects your privacy and handles your personal information." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary-foreground/5" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-foreground/5" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-primary-foreground" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
                At NexaX, we believe in absolute transparency and respect your right to privacy. 
                This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="section-container max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                NexaX, being a professional technology company, strongly believes in your right to privacy 
                and ensures implementing all measures that guarantee the protection of your information. 
                This document will shed light on matters related to our privacy policy, along with common 
                practices that are pursued for the protection of your data and personally identifiable information.
              </p>
            </div>

            <div className="space-y-12">
              {/* Information We Collect */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Which Information Do We Collect?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Whenever a user or client interacts directly or indirectly with any of our 
                    Software, App, Website, or avails any of our services, we may collect some 
                    fundamental information like user name, email address, IP address, etc. 
                    There is also some non-personal data that we collect which cannot be linked back to you.
                  </p>
                  <p>
                    Apart from these fundamentals, some other data like the location through IP 
                    address, your log data, usage information, your device information, and 
                    furthermore the data collected through cookies is also collected.
                  </p>
                </div>
              </section>

              {/* App Permissions */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">App Permissions</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our applications may request certain permissions to provide you with the best 
                    possible experience and functionality. We are committed to transparency about 
                    why we need these permissions and how they are used.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-2">Camera Permission</h4>
                      <p className="text-sm">
                        Our app requests camera access to enable you to scan documents, QR codes, 
                        or capture images for processing within the app. We do not store, transmit, 
                        or share any photos or videos taken through the camera without your explicit 
                        consent. Camera data is processed locally on your device and is only used 
                        for the specific features you choose to use.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        <strong>Important:</strong> You can revoke camera permissions at any time 
                        through your device settings. Denying camera access will not affect other 
                        features of the app, though camera-dependent features will be disabled.
                      </p>
                    </div>

                    <p className="text-sm">
                      We believe in minimal permission requests and only ask for access to features 
                      that are essential for the app's core functionality. Your privacy and security 
                      are our top priorities.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">How Do We Use Your Information?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At NexaX, we only collect all this basic information purely for legitimate 
                    purposes and in absolute good faith. We collect, process, record, and store 
                    this data to appropriately execute the contract between our users and us.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Communication</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Software or app updates</li>
                        <li>• Account verification</li>
                        <li>• Customer support</li>
                        <li>• Feedback collection</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Service Improvement</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• User experience enhancement</li>
                        <li>• Security measures</li>
                        <li>• Transaction processing</li>
                        <li>• Algorithm optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Do We Exchange Your Data?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="font-semibold text-green-800 dark:text-green-200">
                      NOT AT ALL.
                    </p>
                    <p className="text-green-700 dark:text-green-300 mt-2">
                      As mentioned earlier, NexaX is a professional technology company that believes 
                      in absolute transparency. We respect the privacy of our clients and never 
                      breach it. We take all measures to ensure definite security and protection 
                      of your data.
                    </p>
                  </div>
                  <p>
                    We never exchange or sell your personal information to any third parties, 
                    whatever the case may be.
                  </p>
                </div>
              </section>

              {/* Third-Party Apps */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Plug-ins and Third-Party Apps</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    While using any of our software, apps, website, or services, some third-party 
                    plug-ins and apps may try to interact and request your information, but this 
                    request would be made directly to you and not to us.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-yellow-800 dark:text-yellow-200">
                      <strong>Important:</strong> When you encounter any such information requests, 
                      analyze them carefully and only allow access after complete satisfaction. 
                      NexaX would never grant this permission on your behalf.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">When Might Your Info Be Shared?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At the very first instance, we never share, publicize, or reveal any of 
                    your information with any third party for any personal, financial, or social gains.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Limited Exceptions:</h4>
                    <ul className="space-y-2 ml-4">
                      <li>• When contacted by law enforcement agencies with legal requirements</li>
                      <li>• When a user initiates legal proceedings against us</li>
                      <li>• For the security of the land and broader safety concerns</li>
                    </ul>
                  </div>
                  <p>
                    Other than these exceptional circumstances, we never publicize or reveal 
                    your personal information.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Children's Privacy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NexaX strictly abides by privacy laws and never knowingly collects personal 
                    information from children under the age of 13. If we later realize through 
                    any means that a user is below this age and their information has unknowingly 
                    been obtained, we instantly remove the information without request.
                  </p>
                </div>
              </section>

              {/* Data Protection */}
              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">How We Protect Your Data</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At NexaX, we are as concerned about your privacy as you are. We always 
                    prioritize it and never compromise on the sanctity of information since 
                    our professional ethics restrict us from doing so.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technical Measures</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Advanced security firewalls</li>
                        <li>• Encrypted data storage</li>
                        <li>• Cyber security protocols</li>
                        <li>• Limited team access</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Data Usage</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Algorithm improvement</li>
                        <li>• Statistical analysis</li>
                        <li>• Performance optimization</li>
                        <li>• Service enhancement</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    We employ the most advanced security measures and never compromise on your 
                    information protection. Even our team members have limited access to encrypted 
                    and secured information.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Privacy Policy, please don't hesitate 
                  to contact us. We're committed to transparency and will be happy to address 
                  any concerns you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="mailto:info@nexax.com" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </section>

              {/* Last Updated */}
              <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
                <p>This Privacy Policy was last updated on February 4, 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;