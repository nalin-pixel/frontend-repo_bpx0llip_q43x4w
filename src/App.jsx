import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import TasbeehWidget from './components/TasbeehWidget.jsx';
import SettingsBar from './components/SettingsBar.jsx';

const themes = {
  emerald: {
    accent: 'emerald',
  },
  indigo: {
    accent: 'indigo',
  },
  rose: {
    accent: 'rose',
  },
  amber: {
    accent: 'amber',
  },
};

export default function App() {
  const [language, setLanguage] = useState('en');
  const [themeKey, setThemeKey] = useState('emerald');
  const [textSize, setTextSize] = useState('base'); // 'sm' | 'base' | 'lg'

  const theme = useMemo(() => themes[themeKey] ?? themes.emerald, [themeKey]);

  const textSizeClass = useMemo(() => {
    switch (textSize) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  }, [textSize]);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 ${textSizeClass}`}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Header accentColor={theme.accent} language={language} />

        <SettingsBar
          language={language}
          onLanguageChange={setLanguage}
          themeKey={themeKey}
          onThemeChange={setThemeKey}
          textSize={textSize}
          onTextSizeChange={setTextSize}
        />

        <FeatureGrid accentColor={theme.accent} language={language} />

        <TasbeehWidget accentColor={theme.accent} />

        <footer className="pt-8 text-center text-slate-400">
          <p>
            Built for barakah-focused mindfulness. Switch language, theme, and text size above.
          </p>
        </footer>
      </div>
    </div>
  );
}
