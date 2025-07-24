'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import CustomCursor from '../components/CustomCursor';
import { 
  Brain, 
  TrendingUp, 
  Calendar, 
  Smartphone,
  ChevronDown,
  DollarSign,
  Users
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
      cardDescription: 'AI 기술을 활용한 객관적이고 공정한 평가 시스템으로, 인간의 편견을 배제하고 데이터에 기반한 정확한 성과 측정을 제공합니다.',
      features: [
        'AI 기반 객관적 성과 측정',
        '실시간 역량 분석 및 피드백',
        '개인별 맞춤 성장 가이드',
        '팀 및 부서별 벤치마킹'
      ],
      cardFeatures: [
        '편견 없는 객관적 평가',
        '실시간 AI 분석 리포트',
        '개인 맞춤 성장 로드맵',
        '조직 전체 성과 인사이트'
      ],
      buttonText: 'AIRISS 살펴보기',
      buttonUrl: 'https://web-production-4066.up.railway.app/dashboard',
      icon: <Brain size={32} />,
      gradient: 'bg-gradient-to-br from-[#F55000] to-orange-600'
    },
    {
      id: 'contribution',
      title: '기여도평가',
      subtitle: '신인사제도 성공을 위한 미래 지향적 아키텍처',
      description: '신인사제도 도입과 함께 조직이 지속적으로 발전할 수 있도록 설계된 시스템입니다. 모듈화된 설계와 최신 기술 스택으로 유연한 확장성과 안정성을 제공하여 조직의 미래를 준비합니다.',
      cardDescription: '신인사제도를 위한 AI 기반 실시간 성과관리 시스템',
      features: [
        'AI를 활용한 평가시스템',
        '바이브코딩 기반 유지보수',
        '자유로운 평가 유형 확장',
        '효과적인 실시간 성과관리',        
      ],
      cardFeatures: [
        'AI 피드백 어시스턴트',
        '실시간 성과관리 시스템',
        '직관적인 사용자 인터페이스',
        'AI 기반 평가 모니터링'
      ],
      buttonText: '기여도평가 시작하기',
      buttonUrl: 'https://elevate-growth-system.vercel.app',
      icon: <TrendingUp size={32} />,
      gradient: 'bg-gradient-to-br from-[#55474A] to-gray-700'
    },
    {
      id: 'monthly',
      title: 'PL월성과평가',
      subtitle: '평가의 공정성과 효율성을 동시에 실현하는 All-in-One 평가솔루션',
      description: '근태 관리, 근무율 계산, 성과평가, 급여산출을 하나의 시스템으로 통합한 차세대 솔루션입니다. 실시간 대시보드와 AI 분석을 통해 평가자의 편향을 탐색하고, 근태부터 성과급까지의 전 과정을 자동화합니다.',
      cardDescription: '근태 데이터부터 성과급 산출까지, 전 과정을 자동화하는 실시간 성과관리 시스템',
      features: [
        '근태-평가-성과급 통합관리',
        '역할별 맞춤 대시보드',
        '평가 인사이트 도출',
        '근무율 및 성과급 자동계산'
      ],
      cardFeatures: [
        '스마트 근태관리',
        '근무율 및 평가 종합분석',
        '개인별 성과 리뷰',
        'AI 편향 분석 및 피드백'
      ],
      buttonText: '월성과평가 시작하기',
      buttonUrl: 'https://eval-month.vercel.app/',
      icon: <Calendar size={32} />,
      gradient: 'bg-gradient-to-br from-[#FFA400] to-yellow-600'
    },
    {
      id: 'mobile',
      title: 'Mobile eHR',
      subtitle: 'OK금융그룹 임직원을 위한 가장 스마트한 모바일 e-HR 솔루션입니다.',
      description: '언제 어디서든 터치 몇 번으로 간편하게 HR 관련 신청 업무를 처리하고, AI 기반의 혁신적인 기능으로 새로운 차원의 업무 환경을 경험하세요. 복잡했던 서류 작업은 이제 그만, 간편신청 앱 하나로 모든 것이 해결됩니다.',
      cardDescription: '번거로운 HR 요청들을 모바일 앱 하나로 통합하여, 언제 어디서든 손쉽게 신청하고 관리할 수 있습니다.',
      features: [
        '모바일 최적화',
        '신속한 업무처리',
        '통합 관리',
        'AI 기반 데이터 분석'
      ],
      cardFeatures: [
        '각종 신청서 제출 (휴가, 출장 등)',
        'AI 면담',
        '복리후생 신청 (콘도 예약 등)',
        '증명서 발급 요청'
      ],
      buttonText: '모바일로 시작하기',
      buttonUrl: 'https://studio--mobile-ehr-20.us-central1.hosted.app',
      icon: <Smartphone size={32} />,
      gradient: 'bg-gradient-to-br from-[#E3DFDA] to-gray-400'
    },
    {
      id: 'paypulse',
      title: 'PayPulse',
      subtitle: 'AI 기반 인건비 분석 및 예측 솔루션, 복잡한 인건비 관리를 스마트하게 혁신합니다.',
      description: 'PayPulse는 분산된 급여 및 상여 데이터를 통합하여 인건비 현황을 한눈에 파악하게 해주는 지능형 대시보드입니다. AI 어시스턴트와의 대화를 통해 데이터 기반의 신속하고 정확한 의사결정을 경험하세요.',
      cardDescription: '다양한 형식의 급여 데이터를 손쉽게 업로드하고, AI와 대화하며, 복잡한 인건비를 자동으로 분석하고 예측합니다.',
      features: [
        '직관적 데이터 시각화',
        'AI 기반 자동 리포트',
        '간편한 데이터 연동',
        '신속한 의사결정 지원'
      ],
      cardFeatures: [
        '인건비 통합 대시보드',
        'AI 어시스턴트 & 리포트',
        '4대 보험/퇴직충당금 자동계산',
        '원클릭 엑셀 다운로드'
      ],
      buttonText: 'PayPulse 시작하기',
      buttonUrl: 'https://studio--paypulse-qeph9.us-central1.hosted.app/',
      icon: <DollarSign size={32} />,
      gradient: 'bg-gradient-to-br from-[#FFA400] to-yellow-600'
    },
    {
      id: 'compinsight',
      title: 'CompInsight',
      subtitle: 'AI 기반 직원 연봉체계화 및 관리 프로그램',
      description: 'CompInsight는 회사가 직원들의 보상 수준을 전략적으로 관리하고 분석할 수 있도록 돕는 데이터 분석 및 정보 시스템입니다. 복잡하고 분산된 인사(HR) 보상 데이터를 중앙에서 관리하고, 강력한 AI 기술을 접목하여 데이터 기반의 빠르고 정확한 의사결정을 지원하는 지능형 보상 분석 및 예측 플랫폼입니다.',
      cardDescription: '이 프로그램은 복잡하고 분산된 인사(HR) 보상 데이터를 중앙에서 관리하고, 강력한 AI 기술을 접목하여 데이터 기반의 빠르고 정확한 의사결정을 지원하는 지능형 보상 분석 및 예측 플랫폼입니다.',
      features: [
        '데이터 통합 및 중앙화',
        'AI 기반의 뛰어난 데이터 활용성',
        '신속정확한 발령사항 반영 연봉 예측',
        '직관적인 시각화와 비교 분석'
      ],
      cardFeatures: [
        'AI 검색',
        'AI 급여 예측',
        '직원 연봉 관리',
        '시각적 분석 대시보드'
      ],
      buttonText: 'CompInsight 시작하기',
      buttonUrl: 'https://studio--compinsight-p776i.us-central1.hosted.app/',
      icon: <Users size={32} />,
      gradient: 'bg-gradient-to-br from-[#55474A] to-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
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
              width={468}
              height={234}
              className="h-52 w-auto"
              priority
            />
            <h1 className="text-8xl md:text-9xl font-medium text-gray-800 font-ok mt-8">
              솔루션
            </h1>
          </motion.div>
          
          <motion.p
            className="text-3xl md:text-4xl text-gray-600 leading-relaxed font-ok font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI 기반 스마트 인사관리로<br />
            더 나은 조직 문화를 만들어가세요
          </motion.p>
          
          <motion.p
            className="text-2xl text-gray-500 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            성과평가부터 근태관리까지, 통합 HR 솔루션
          </motion.p>

          <motion.button
            onClick={scrollToFirstSection}
            className="group bg-[#F55000] text-white px-12 py-6 rounded-xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-4 mx-auto shadow-lg font-ok font-light mt-12 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>서비스 둘러보기</span>
            <ChevronDown 
              size={28} 
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
            className="w-8 h-14 border-2 border-[#F55000] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-4 bg-[#F55000] rounded-full mt-3"
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span 
                      className="text-lg font-light tracking-wider uppercase text-[#F55000] font-ok"
                    >
                      Service {index + 1}
                    </span>
                  </motion.div>
                  
                  <motion.h2
                    className="text-6xl md:text-7xl font-medium leading-tight font-ok"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.h3
                    className="text-3xl md:text-4xl text-gray-600 font-light font-ok"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {service.subtitle}
                  </motion.h3>
                  
                  <motion.p
                    className="text-2xl text-gray-600 leading-relaxed font-ok font-light"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul
                    className="space-y-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-4 text-gray-700 font-ok font-light text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                      >
                        <div className="w-3 h-3 bg-[#F55000] rounded-full"></div>
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
                      className="inline-flex items-center gap-3 bg-[#F55000] text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-ok font-light text-xl"
                    >
                      {service.buttonText}
                    </a>
                  </motion.div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <ServiceCard 
                  title={service.title}
                  description={service.cardDescription}
                  features={service.cardFeatures}
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