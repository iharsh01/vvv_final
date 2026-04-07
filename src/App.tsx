/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PlotAnalysis from './components/PlotAnalysis';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <PlotAnalysis />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}

