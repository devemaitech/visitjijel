import { useState, useEffect } from 'react';
import {
  MapPin,
  Sun,
  Waves,
  TreePine,
  Utensils,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronUp,
  Menu,
  X,
  Compass,
  Anchor,
  Youtube
} from 'lucide-react';

const features = [
  { icon: Waves, title: 'شواطئ خلابة', desc: 'اكتشف أجمل شواطئ المتوسط' },
  { icon: TreePine, title: 'طبيعة ساحرة', desc: 'غابات ومحميات طبيعية' },
  { icon: Utensils, title: 'مأكولات لذيذة', desc: 'أشهى الأطباق البحرية' },
  { icon: Compass, title: 'تراث عريق', desc: 'تاريخ وثقافة غنية' },
];

const stats = [
  { value: '50+', label: 'شاطئ' },
  { value: '100K+', label: 'زائر سنوياً' },
  { value: '300', label: 'سنة شمسية' },
];

const attractions = [
  {
    title: 'شاطئ القالة',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'يُعد شاطئ القالة من أجمل شواطئ البحر الأبيض المتوسط، بمياهه الصافية ورماله الذهبية الناعمة. مثالي للعائلات ومحبي السباحة والاسترخاء.'
  },
  {
    title: 'غابة تازة الوطنية',
    image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'محمية طبيعية تضم تنوعاً بيولوجياً فريداً، من أشجار الفلين والبلوط إلى أنواع نادرة من الطيور والحيوانات. مكان مثالي لمحبي الطبيعة والمشي.'
  },
  {
    title: 'ميناء جيجل القديم',
    image: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'يمتلك تاريخاً عريقاً يعود لحقب مختلفة، ويعكس التراث البحري للمنطقة. قرب الميناء تجد مطاعم تقدم أشهى المأكولات البحرية.'
  }
];

const dishes = [
  { name: 'السمك المشوي', desc: 'طازج من البحر مع التوابل المحلية' },
  { name: 'الكسكسي', desc: 'الطبق التقليدي الجزائري' },
  { name: 'الشوربة البحرية', desc: 'غنية بالنكهات المتوسطية' },
];

const tips = [
  { label: 'أفضل وقت للزيارة', value: 'من ماي إلى سبتمبر' },
  { label: 'العملة', value: 'الدينار الجزائري (DZD)' },
  { label: 'اللغة', value: 'العربية، مع استخدام الفرنسية' },
  { label: 'المواصلات', value: 'تتوفر سيارات الأجرة والحافلات' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white font-['Noto_Sans_Arabic',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full hero-gradient flex items-center justify-center">
                <Anchor className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-teal-900">جيجل ستاي</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-teal-800 hover:text-amber-500 transition-colors font-medium">الرئيسية</a>
              <a href="#features" className="text-teal-800 hover:text-amber-500 transition-colors font-medium">المميزات</a>
              <a href="#guide" className="text-teal-800 hover:text-amber-500 transition-colors font-medium">الدليل</a>
              <a href="#contact" className="text-teal-800 hover:text-amber-500 transition-colors font-medium">تواصل</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-teal-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-teal-100 py-4">
            <div className="flex flex-col gap-4 px-4">
              <a href="#home" className="text-teal-800 hover:text-amber-500 transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
              <a href="#features" className="text-teal-800 hover:text-amber-500 transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>المميزات</a>
              <a href="#guide" className="text-teal-800 hover:text-amber-500 transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>الدليل</a>
              <a href="#contact" className="text-teal-800 hover:text-amber-500 transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>تواصل</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1893495/pexels-photo-1893495.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sun className="w-5 h-5 text-amber-300" />
              <span className="text-sm md:text-base">اكتشف سحر الساحل الجزائري</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-['Playfair_Display',serif]">
              جيجل ستاي
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              حيث تعانق الجبال البحر، وتروي الطبيعة أجمل القصص
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#guide"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                ابدأ الاستكشاف
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-lg transition-all duration-300 border border-white/30 flex items-center gap-2"
              >
                اكتشف المزيد
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-lg relative -mt-20 mx-4 md:mx-auto max-w-6xl rounded-2xl z-20">
        <div className="grid grid-cols-3 gap-4 md:gap-8 px-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-teal-700 mb-1 md:mb-2">{stat.value}</div>
              <div className="text-sm md:text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              لماذا جيجل؟
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              وجهة مثالية تجمع بين الطبيعة والتراث والضيافة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="card-hover bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-2xl hero-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-teal-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Section */}
      <section id="guide" className="py-20 md:py-28 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              دليل السياح
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              دليلك الشامل لزيارة جيجل
            </h2>
          </div>

          <article className="bg-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-12">
            {/* Hero Image */}
            <img
              src="https://images.pexels.com/photos/1893495/pexels-photo-1893495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="شاطئ جيجل"
              className="rounded-2xl shadow-xl mb-10 w-full object-cover max-h-96"
            />

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6 font-['Playfair_Display',serif]">
              جيجل - جوهرة الساحل الجزائري
            </h1>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              تقع ولاية جيجل في شمال شرق الجزائر، وتعتبر من أجمل المناطق الساحلية في البلاد. تتميز بطبيعتها الخلابة وشواطئها الساحرة التي تجذب السياح من كل مكان.
            </p>

            {/* Section Title */}
            <h2 className="text-2xl font-semibold text-teal-800 mt-12 mb-8 border-b-2 border-teal-200 pb-3">
              أماكن لا تفوتها
            </h2>

            {/* Attractions */}
            {attractions.map((place, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">{place.title}</h3>
                <img
                  src={place.image}
                  alt={place.title}
                  className="rounded-2xl shadow-lg mb-4 w-full object-cover max-h-72"
                />
                <p className="text-gray-700 leading-relaxed">{place.description}</p>
              </div>
            ))}

            {/* Tips Section */}
            <h2 className="text-2xl font-semibold text-teal-800 mt-12 mb-8 border-b-2 border-teal-200 pb-3">
              نصائح للزوار
            </h2>
            <ul className="list-disc list-inside space-y-3 mb-8">
              {tips.map((tip, idx) => (
                <li key={idx} className="text-lg text-gray-700">
                  <strong className="text-teal-900">{tip.label}</strong>: {tip.value}
                </li>
              ))}
            </ul>

            {/* Dishes Section */}
            <h2 className="text-2xl font-semibold text-teal-800 mt-12 mb-8 border-b-2 border-teal-200 pb-3">
              أطباق محلية لذيذة
            </h2>
            <div className="overflow-hidden rounded-xl shadow-lg mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="p-4 text-right font-semibold">الطبق</th>
                    <th className="p-4 text-right font-semibold">الوصف</th>
                  </tr>
                </thead>
                <tbody>
                  {dishes.map((dish, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
                      <td className="p-4 border-b border-teal-100 font-medium">{dish.name}</td>
                      <td className="p-4 border-b border-teal-100 text-gray-700">{dish.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact Info */}
            <h2 className="text-2xl font-semibold text-teal-800 mt-12 mb-8 border-b-2 border-teal-200 pb-3">
              للتواصل والاستعلامات
            </h2>
            <ul className="list-disc list-inside space-y-3 mb-8">
              <li className="text-lg text-gray-700"><strong className="text-teal-900">مكتب السياحة</strong>: وسط المدينة</li>
              <li className="text-lg text-gray-700"><strong className="text-teal-900">الطوارئ</strong>: 17</li>
              <li className="text-lg text-gray-700"><strong className="text-teal-900">المستشفى الرئيسي</strong>: حيدوسة</li>
            </ul>

            {/* Divider */}
            <hr className="my-12 border-t-2 border-teal-200" />

            {/* Footer */}
            <p className="text-lg text-gray-600 italic mb-6">
              *جيجل ستاي اكتشف سحر الطبيعة الجزائرية!*
            </p>

            {/* Quote */}
            <blockquote className="border-r-4 border-amber-400 bg-amber-50 p-6 rounded-lg italic text-lg text-gray-700">
              جيجل ليست مجرد وجهة سياحية، بل تجربة لا تُنسى تبقى في الذاكرة للأبد.
            </blockquote>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              نحن هنا لمساعدتك
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              تواصل معنا للحصول على أي معلومات أو استفسارات
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-6">معلومات التواصل</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">الهاتف</p>
                    <p className="font-medium">+213 55 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">البريد الإلكتروني</p>
                    <p className="font-medium">info@visit-jijel.dz</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">العنوان</p>
                    <p className="font-medium">وسط المدينة، جيجل، الجزائر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-6">تابعنا</h3>
              <p className="mb-6 opacity-90">
                تابعونا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والعروض
              </p>

              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/14iTCyYczRi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/jijelstay?igsh=YTE1MGhhdjk5YjNo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@jijelstay?si=WoqOQdvsePyqRTmH" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">جيجل ستاي</span>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/14iTCyYczRi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/jijelstay?igsh=YTE1MGhhdjk5YjNo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@jijelstay?si=WoqOQdvsePyqRTmH" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <p className="text-teal-300 text-center md:text-right">
              جميع الحقوق محفوظة &copy; 2026
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
