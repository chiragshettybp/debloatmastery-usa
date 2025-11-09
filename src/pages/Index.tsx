
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
// Removed: import ProductVariants from '../components/ProductVariants';
import CTAButton from '../components/CTAButton';
import OrderTimer from '../components/OrderTimer';
import BenefitBadges from '../components/BenefitBadges';
import PaymentMethods from '../components/PaymentMethods';
import FAQSection from '../components/FAQSection';
import TestimonialSection from '../components/TestimonialSection';
import ProductStatsSection from '../components/ProductStatsSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductMediaSection from '../components/ProductMediaSection';
import GifSection from '../components/GifSection';
import DogGridSection from '../components/DogGridSection';
import PromoBanner from '../components/PromoBanner';
import PromoBadge from '../components/PromoBadge';
import BottomOfferBar from '../components/BottomOfferBar';
import ProductShowcaseSection from '../components/ProductShowcaseSection';
import BurgerComparisonSection from '../components/BurgerComparisonSection';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const location = useLocation();
  const isUSA = location.pathname === '/usa';
  
  const handlePurchase = () => {
    toast({
      title: "Your Hand Grip Kit order is being processed",
      description: "Thank you for choosing the Hand Grips Strengthener Kit - 5 Pack®!"
    });
  };

  return (
    <div className="max-w-md mx-auto bg-black">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8">
        <ProductMediaSection />
        <ProductInfo />
        <BurgerComparisonSection />
        {/* --- Single Promo Bar Animation + Badge (just before bundle options) --- */}
        <PromoBanner currency="$" price="9" />
        <PromoBadge />
        
        {/* Product Showcase Section */}
        <ProductShowcaseSection />
        
        {/* Removed: <ProductVariants /> */}
        <div className="w-full px-4 my-4">
          <CTAButton onClick={handlePurchase} />
        </div>
        <PaymentMethods />
        <OrderTimer />
        <BenefitBadges />
        <FAQSection />
        <GifSection />
        <DogGridSection />
        <TestimonialSection />
        <ProductStatsSection />
      </div>
      <Footer />
      <BottomOfferBar />
    </div>
  );
};

export default Index;
