import { BookOpen, Clock, Compass, MessageSquare, CircleDot, Settings, Quote, ListChecks } from 'lucide-react';

const features = (t) => [
  {
    key: 'quran',
    title: t('Quran (114 Surahs)', 'القرآن (١١٤ سورة)'),
    desc: t('Browse all surahs with Arabic and translation.', 'تصفح جميع السور بالعربية مع الترجمة.'),
    icon: BookOpen,
  },
  {
    key: 'duas',
    title: t('Duas & Adhkar', 'الأدعية والأذكار'),
    desc: t('Daily duas, morning/evening adhkar and categories.', 'أدعية يومية وأذكار الصباح والمساء وأقسام.'),
    icon: Quote,
  },
  {
    key: 'hadith',
    title: t('Hadith', 'الأحاديث'),
    desc: t('Curated collections of authentic ahadith.', 'مجموعة مختارة من الأحاديث الصحيحة.'),
    icon: ListChecks,
  },
  {
    key: 'salah',
    title: t('Salah Times', 'أوقات الصلاة'),
    desc: t('Accurate prayer times based on your location.', 'أوقات صلاة دقيقة حسب موقعك.'),
    icon: Clock,
  },
  {
    key: 'qibla',
    title: t('Qibla Direction', 'اتجاه القبلة'),
    desc: t('Find the Qibla using compass/orientation.', 'اعثر على القبلة باستخدام البوصلة/الاتجاه.'),
    icon: Compass,
  },
  {
    key: 'tasbeeh',
    title: t('Tasbeeh Counter', 'عداد التسبيح'),
    desc: t('Simple counter with targets and reset.', 'عداد بسيط مع أهداف وإعادة تعيين.'),
    icon: CircleDot,
  },
  {
    key: 'chat',
    title: t('Deen Chatbot', 'مساعد ديني'),
    desc: t('Ask questions and learn with guidance.', 'اطرح الأسئلة وتعلم مع التوجيه.'),
    icon: MessageSquare,
  },
  {
    key: 'settings',
    title: t('Settings', 'الإعدادات'),
    desc: t('Change language, theme color, and text size.', 'غيّر اللغة واللون وحجم النص.'),
    icon: Settings,
  },
];

export default function FeatureGrid({ accentColor = 'emerald', language = 'en' }) {
  const t = (en, ar) => (language === 'ar' ? ar : en);
  const items = features(t);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ key, title, desc, icon: Icon }) => (
          <div
            key={key}
            className={`group relative overflow-hidden rounded-2xl border border-${accentColor}-500/20 bg-slate-900/60 backdrop-blur p-5 hover:border-${accentColor}-400/40 transition`}
          >
            <div className="flex items-start gap-3">
              <div className={`rounded-lg bg-${accentColor}-500/15 border border-${accentColor}-400/30 p-2.5`}>
                <Icon className={`h-5 w-5 text-${accentColor}-300`} />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </div>
            </div>
            <div className={`absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-${accentColor}-500/10 via-transparent to-transparent rounded-bl-full`} />
          </div>
        ))}
      </div>
    </section>
  );
}
