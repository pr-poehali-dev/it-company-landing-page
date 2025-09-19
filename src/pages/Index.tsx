import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contacts']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Система интеграции',
      description: 'Комплексные решения для интеграции корпоративных систем и API',
      icon: 'Workflow',
      features: ['API Integration', 'Data Sync', 'Real-time Processing']
    },
    {
      title: 'Информационная безопасность',
      description: 'Защита данных и киберугроз с применением современных технологий',
      icon: 'Shield',
      features: ['Security Audit', 'Threat Detection', 'Compliance']
    },
    {
      title: 'Разработка ПО',
      description: 'Создание современных веб и мобильных приложений',
      icon: 'Code',
      features: ['Web Apps', 'Mobile Apps', 'Custom Software']
    },
    {
      title: 'Инженерные системы',
      description: 'Проектирование и внедрение инженерной инфраструктуры',
      icon: 'Settings',
      features: ['System Design', 'Infrastructure', 'Automation']
    }
  ]

  const portfolioProjects = [
    {
      title: 'Банковская система',
      description: 'Комплексная система управления банковскими операциями',
      category: 'Fintech',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      result: 'Увеличение эффективности на 40%'
    },
    {
      title: 'Система безопасности',
      description: 'Платформа мониторинга и анализа угроз безопасности',
      category: 'Security',
      technologies: ['Python', 'AI/ML', 'Docker'],
      result: 'Снижение инцидентов на 60%'
    },
    {
      title: 'E-commerce платформа',
      description: 'Полнофункциональная платформа электронной коммерции',
      category: 'E-commerce',
      technologies: ['Next.js', 'Stripe', 'AWS'],
      result: 'Рост продаж на 150%'
    }
  ]

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-2xl text-primary">
              TechSolutions
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Сервисы' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'about', label: 'О компании' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-primary hover:bg-primary-600 text-white px-6"
            >
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-900 mb-6 animate-fade-in">
              Инновационные <span className="text-primary">IT-решения</span> для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Мы создаем надежные технологические решения, которые трансформируют ваш бизнес и обеспечивают конкурентное преимущество
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary-600 text-white px-8 py-3 text-lg"
              >
                Наши сервисы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary-900 mb-4">
              Наши IT-сервисы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные технологические решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 border border-gray-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary-900 mb-4">
              Портфолио проектов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Успешно реализованные проекты для компаний различных отраслей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-50 text-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-primary-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-primary">
                      <Icon name="TrendingUp" size={16} className="inline mr-2" />
                      {project.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold text-primary-900 mb-6">
                  О компании TechSolutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Мы — команда экспертов с более чем 10-летним опытом в сфере информационных технологий. 
                  Специализируемся на создании инновационных решений для автоматизации бизнес-процессов.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Наша миссия — помочь компаниям достичь технологического превосходства через внедрение 
                  современных IT-решений и цифровую трансформацию.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-muted-foreground">Проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25</div>
                    <div className="text-muted-foreground">Экспертов</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start space-x-4">
                    <Icon name="Target" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-2">Наша цель</h3>
                      <p className="text-muted-foreground">
                        Создание технологических решений, которые трансформируют бизнес и повышают его эффективность
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start space-x-4">
                    <Icon name="Award" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-2">Качество</h3>
                      <p className="text-muted-foreground">
                        Высочайшие стандарты разработки, тестирования и поддержки IT-решений
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start space-x-4">
                    <Icon name="Users" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-2">Команда</h3>
                      <p className="text-muted-foreground">
                        Опытные специалисты в области разработки, безопасности и системной интеграции
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-4">
                Готовы начать проект?
              </h2>
              <p className="text-xl text-primary-100">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary-100 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Адрес</h3>
                    <p className="text-primary-100">
                      г. Москва, ул. Тверская, д. 15<br />
                      БЦ "Технопарк", офис 402
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary-100 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <p className="text-primary-100">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary-100 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-primary-100">hello@techsolutions.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary-100 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Время работы</h3>
                    <p className="text-primary-100">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: По договоренности
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-6">
                  Отправить сообщение
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 resize-none"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-600 text-white py-3"
                  >
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 border-t border-primary-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-heading font-bold text-xl text-white mb-4 md:mb-0">
              TechSolutions
            </div>
            <div className="text-primary-100 text-center md:text-right">
              <p>&copy; 2024 TechSolutions. Все права защищены.</p>
              <p className="text-sm mt-1">Инновационные IT-решения для вашего бизнеса</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}