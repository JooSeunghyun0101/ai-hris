'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import { 
  Brain, 
  TrendingUp, 
  Calendar, 
  Smartphone,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const scrollToFirstSection = () => {
    const element = document.getElementById('airiss');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'airiss',
      title: 'AIRISS',
      subtitle: 'AI기반 성과/역량 스코어링 시스템',
      description: '인공지능이 객관적이고 정확한 성과 및 역량 평가를 제공합니다. 데이터 기반의 스마트한 인사관리를 경험해보세요.',
      features: [
        'AI 기반 객관적 성과 측정',
        '실시간 역량 분석 및 피드백',
        '개인별 맞춤 성장 가이드',
        '팀 및 부서별 벤치마킹'
      ],
      buttonText: 'AIRISS 살펴보기',
      buttonUrl: 'https://web-production-4066.up.railway.app/dashboard',
      icon: <Brain size={32} />,
      gradient: 'bg-gradient-to-br from-[#F55000] to-orange-600'
    },
    {
      id: 'contribution',
      title: '기여도평가',
      subtitle: '공정하고 투명한 기여도 측정',
      description: '팀원들의 기여도를 정량적이고 정성적으로 평가하여 공정한 보상과 인정을 제공합니다.',
      features: [
        '다면평가 시스템',
        '프로젝트별 기여도 추적',
        '투명한 평가 프로세스',
        '실시간 피드백 수집'
      ],
      buttonText: '기여도평가 시작하기',
      buttonUrl: 'https://elevate-growth-system.vercel.app',
      icon: <TrendingUp size={32} />,
      gradient: 'bg-gradient-to-br from-[#55474A] to-gray-700'
    },
    {
      id: 'monthly',
      title: '월성과평가',
      subtitle: '체계적인 월별 성과 관리',
      description: '매월 체계적인 성과 리뷰를 통해 지속적인 성장과 개선을 도모합니다.',
      features: [
        '월별 목표 설정 및 추적',
        'KPI 기반 성과 측정',
        '상사-부하 1:1 미팅 지원',
        '성과 트렌드 분석'
      ],
      buttonText: '월성과평가 체험하기',
      buttonUrl: 'https://9000-firebase-studio-1751945698184.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev',
      icon: <Calendar size={32} />,
      gradient: 'bg-gradient-to-br from-[#FFA400] to-yellow-600'
    },
    {
      id: 'mobile',
      title: '모바일 근태관리',
      subtitle: '언제 어디서나 간편한 근태 관리',
      description: '모바일 기기로 간편하게 출퇴근을 관리하고, 실시간으로 근무 현황을 확인할 수 있습니다.',
      features: [
        'GPS 기반 출퇴근 체크',
        '실시간 근무 현황 조회',
        '휴가 및 외근 신청',
        '팀원 일정 공유'
      ],
      buttonText: '모바일 앱 다운로드',
      buttonUrl: 'https://studio--mobile-ehr-20.us-central1.hosted.app',
      icon: <Smartphone size={32} />,
      gradient: 'bg-gradient-to-br from-[#E3DFDA] to-gray-400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E3DFDA] to-gray-100">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#F55000]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA400]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#55474A]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/ok-logo.png"
              alt="OK Logo"
              width={360}
              height={180}
              className="h-40 w-auto"
              priority
            />
            <h1 className="text-6xl md:text-8xl font-medium text-gray-800 font-ok mt-6">
              솔루션
            </h1>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 leading-relaxed font-ok font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI 기반 스마트 인사관리로<br />
            더 나은 조직 문화를 만들어가세요
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-500 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            성과평가부터 근태관리까지, 통합 HR 솔루션
          </motion.p>

          <motion.button
            onClick={scrollToFirstSection}
            className="group bg-[#F55000] text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg font-ok font-light mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>서비스 둘러보기</span>
            <ChevronDown 
              size={20} 
              className="group-hover:translate-y-1 transition-transform" 
            />
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#F55000] rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-[#F55000] rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="min-h-screen flex items-center py-20"
          style={{
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span 
                      className="text-sm font-light tracking-wider uppercase text-[#F55000] font-ok"
                    >
                      Service {index + 1}
                    </span>
                  </motion.div>
                  
                  <motion.h2
                    className="text-4xl md:text-5xl font-medium leading-tight font-ok"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.h3
                    className="text-xl md:text-2xl text-gray-600 font-light font-ok"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {service.subtitle}
                  </motion.h3>
                  
                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed font-ok font-light"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul
                    className="space-y-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700 font-ok font-light"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-[#F55000] rounded-full"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <a
                      href={service.buttonUrl}
                      className="inline-flex items-center gap-2 bg-[#F55000] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-ok font-light"
                    >
                      {service.buttonText}
                    </a>
                  </motion.div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  buttonText={service.buttonText}
                  buttonUrl={service.buttonUrl}
                  icon={service.icon}
                  gradient={service.gradient}
                  delay={0.4}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
} 