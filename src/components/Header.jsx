import { BookOpen, Compass, Sparkles } from 'lucide-react';

export default function Header({ accentColor = 'emerald', language = 'en' }) {
  const t = (en, ar) => (language === 'ar' ? ar : en);
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className={`inline-flex items-center gap-2 rounded-full border border-${accentColor}-500/30 bg-${accentColor}-500/10 px-4 py-2`}>
        <Sparkles className={`h-4 w-4 text-${accentColor}-400`} />
        <span className={`text-${accentColor}-300 font-medium`}>
          {t('Quran & Deen Companion', 'رفيق القرآن والدين')}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {t('All-in-One Islamic App', 'تطبيق إسلامي شامل')}
      </h1>
      <p className="max-w-2xl text-slate-400">
        {t(
          'Read Quran, explore duas and hadith, track salah times, find Qibla, tasbeeh, adhkar, AI chatbot and more.',
          'اقرأ القرآن، وتصفح الأذكار والأحاديث، وتعرف على أوقات الصلاة، والقبلة، والتسبيح، والأذكار، وروبوت الذكاء الاصطناعي وأكثر.'
        )}
      </p>
      <div className="flex items-center gap-3 mt-2">
        <div className={`inline-flex items-center gap-2 rounded-md bg-${accentColor}-600/20 px-3 py-1.5 border border-${accentColor}-500/30`}>
          <BookOpen className={`h-4 w-4 text-${accentColor}-300`} />
          <span className="text-slate-200">{t('114 Surahs', '١١٤ سورة')}</span>
        </div>
        <div className={`inline-flex items-center gap-2 rounded-md bg-${accentColor}-600/20 px-3 py-1.5 border border-${accentColor}-500/30`}>
          <Compass className={`h-4 w-4 text-${accentColor}-300`} />
          <span className="text-slate-200">{t('Qibla & Salah', 'القبلة والصلاة')}</span>
        </div>
      </div>
    </header>
  );
}
