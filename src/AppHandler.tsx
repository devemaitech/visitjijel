import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function AppHandler() {
  const { id: _id } = useParams();
  const [_searchParams] = useSearchParams();

  useEffect(() => {
    function openApp() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const currentUrl = window.location.href;
      
      // For Android - try to open via intent
      const intentUrl =
        "intent://" +
        window.location.hostname +
        window.location.pathname +
        window.location.search +
        "#Intent;scheme=https;package=com.visitjijel.app;end";
      
      // Try to open the app
      window.location.href = intentUrl;
      
      // If app doesn't open after 1.5 seconds, redirect to Play Store
      setTimeout(function () {
        window.location.href = "https://play.google.com/store/apps/details?id=com.visitjijel.app";
      }, 1500);
    }
    // Run when page loads
    openApp();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center justify-center text-center p-8 font-['Noto_Sans_Arabic',sans-serif]">
      <h1 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4">جارٍ توجيهك...</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        إذا لم يتم فتح التطبيق تلقائيًا،{' '}
        <a
          href="https://play.google.com/store/apps/details?id=com.visitjijel.app"
          className="text-amber-500 hover:text-amber-600 font-semibold underline"
        >
          اضغط هنا لتثبيته
        </a>
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-semibold transition-all"
      >
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  );
}