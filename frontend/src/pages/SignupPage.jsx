import React, { useState } from 'react';
import { Wallet, ArrowLeft, ArrowRight, Check } from 'lucide-react';

function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    walletAddress: '',
    displayName: '',
    bio: '',
    interests: [],
  });

  const interestsOptions = ['Digital Art', '3D', 'Music', 'Photography', 'Gaming', 'Collectibles', 'Anime', 'Metaverse'];

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('User Registered:', formData);
    alert('🎉 Welcome to PLAY NFT! Your account has been created successfully.');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3BA3FF]/10 via-transparent to-[#8ea2ff]/10" />
      <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-[#5f7dff]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-[#8ea2ff]/20 rounded-full blur-[120px]" />

      <div className="max-w-2xl mx-auto relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-6">
          <a href="/" className="flex items-center gap-3">
          
            <span className="text-3xl font-bold tracking-widest" style={{fontFamily: 'redhawk'}}>PLAY<span className="text-[#5f7dff]">NFT</span></span>
          </a>
          <a href="/" className="text-[#8ea2ff] hover:text-white flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-lg">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold mb-3">Join the Future</h1>
              <p className="text-[#8ea2ff] text-lg">Create your PLAY NFT account in 3 simple steps</p>
            </div>

            {/* Progress */}
            <div className="mb-12">
              <div className="flex justify-between text-sm mb-3 px-1">
                {['Account Info', 'Connect Wallet', 'Complete Profile'].map((label, index) => (
                  <div
                    key={index}
                    className={`font-medium ${currentStep === index + 1 ? 'text-white' : 'text-[#8ea2ff]/70'}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="h-2 bg-[#1a254f] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] transition-all duration-500"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Forms */}
            <div className="bg-[#0b1330] border border-[#2d4fff]/40 rounded-3xl p-10">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Username</label>
                    <input
                      type="text"
                      placeholder="@creativeartist"
                      value={formData.username}
                      onChange={(e) => updateForm('username', e.target.value)}
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#5f7dff] text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#5f7dff] text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => updateForm('password', e.target.value)}
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#5f7dff] text-lg"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="text-center py-12">
                  <div className="mx-auto w-24 h-24 bg-[#1a254f] rounded-3xl flex items-center justify-center mb-8">
                    <Wallet size={60} className="text-[#5f7dff]" />
                  </div>
                  <h3 className="text-3xl font-semibold mb-3">Connect Your Wallet</h3>
                  <p className="text-[#8ea2ff] mb-10 max-w-xs mx-auto">
                    Connect your wallet to buy, sell, and securely store your NFTs
                  </p>

                  <button
                    onClick={() => updateForm('walletAddress', '0x742d35Cc6634C0532925a3b8D7F5a8f3e8d2')}
                    className="w-full py-5 bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Connect Wallet
                  </button>

                  {formData.walletAddress && (
                    <p className="mt-6 text-green-400 font-medium">
                      ✅ Wallet Connected: {formData.walletAddress.slice(0, 6)}...{formData.walletAddress.slice(-4)}
                    </p>
                  )}
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Display Name</label>
                    <input
                      type="text"
                      placeholder="Alex Rivera"
                      value={formData.displayName}
                      onChange={(e) => updateForm('displayName', e.target.value)}
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#5f7dff]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Bio</label>
                    <textarea
                      placeholder="Digital artist & NFT collector | Passionate about 3D worlds"
                      value={formData.bio}
                      onChange={(e) => updateForm('bio', e.target.value)}
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-4 h-28 resize-y focus:outline-none focus:border-[#5f7dff]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-3">What are you interested in?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {interestsOptions.map((interest) => (
                        <button
                          key={interest}
                          onClick={() => {
                            const newInterests = formData.interests.includes(interest)
                              ? formData.interests.filter(i => i !== interest)
                              : [...formData.interests, interest];
                            updateForm('interests', newInterests);
                          }}
                          className={`px-5 py-3 rounded-2xl text-sm transition-all ${
                            formData.interests.includes(interest)
                              ? 'bg-[#5f7dff] text-white'
                              : 'bg-[#1a254f] hover:bg-[#2a3b7f] text-[#8ea2ff]'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 px-2">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-6 py-3 text-[#8ea2ff] disabled:opacity-40 hover:text-white transition"
              >
                <ArrowLeft size={20} /> Previous
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] px-10 py-3 rounded-2xl font-semibold hover:scale-105 transition-all"
                >
                  Continue <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] px-10 py-3 rounded-2xl font-semibold hover:scale-105 transition-all"
                >
                  Create My Account <Check size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;