export default function SettingsBar({
  language,
  onLanguageChange,
  themeKey,
  onThemeChange,
  textSize,
  onTextSizeChange,
}) {
  return (
    <section className="rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur p-4 flex flex-col md:flex-row items-center gap-3 md:gap-4">
      <div className="flex items-center gap-2 w-full md:w-auto">
        <label className="text-sm text-slate-300">Language</label>
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-sm w-full md:w-auto"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <label className="text-sm text-slate-300">Theme</label>
        <select
          value={themeKey}
          onChange={(e) => onThemeChange(e.target.value)}
          className="bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-sm w-full md:w-auto"
        >
          <option value="emerald">Emerald</option>
          <option value="indigo">Indigo</option>
          <option value="rose">Rose</option>
          <option value="amber">Amber</option>
        </select>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <label className="text-sm text-slate-300">Text size</label>
        <select
          value={textSize}
          onChange={(e) => onTextSizeChange(e.target.value)}
          className="bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-sm w-full md:w-auto"
        >
          <option value="sm">Small</option>
          <option value="base">Default</option>
          <option value="lg">Large</option>
        </select>
      </div>
    </section>
  );
}
