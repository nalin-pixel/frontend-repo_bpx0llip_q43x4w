import { useEffect, useMemo, useState } from 'react';
import { RotateCcw, Plus, Target } from 'lucide-react';

export default function TasbeehWidget({ accentColor = 'emerald' }) {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [vibrate, setVibrate] = useState(true);

  useEffect(() => {
    if (vibrate && typeof window !== 'undefined' && 'vibrate' in navigator) {
      if (count > 0 && count % target === 0) {
        navigator.vibrate?.(100);
      } else {
        navigator.vibrate?.(10);
      }
    }
  }, [count, vibrate, target]);

  const progress = useMemo(() => {
    const p = Math.min(100, Math.round((count % target) / target * 100));
    return isNaN(p) ? 0 : p;
  }, [count, target]);

  return (
    <section className={`rounded-2xl border border-${accentColor}-500/20 bg-slate-900/60 backdrop-blur p-6 mt-4`}>      
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">Tasbeeh</h3>
          <p className="text-sm text-slate-400">Tap to count. Target and vibration optional.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCount(0)}
            className={`inline-flex items-center gap-1.5 rounded-md border border-${accentColor}-400/30 bg-${accentColor}-500/10 px-3 py-1.5 text-sm hover:bg-${accentColor}-500/20`}
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          <button
            onClick={() => setVibrate(v => !v)}
            className={`inline-flex items-center gap-1.5 rounded-md border border-${accentColor}-400/30 bg-${accentColor}-500/10 px-3 py-1.5 text-sm hover:bg-${accentColor}-500/20`}
          >
            {vibrate ? 'Vibrate: On' : 'Vibrate: Off'}
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <button
          onClick={() => setCount(c => c + 1)}
          className={`col-span-2 h-40 rounded-2xl border border-${accentColor}-400/30 bg-gradient-to-br from-${accentColor}-500/20 via-${accentColor}-500/10 to-transparent hover:from-${accentColor}-500/30 hover:via-${accentColor}-500/20 transition text-5xl font-bold flex items-center justify-center select-none active:scale-[0.99]`}
        >
          <Plus className="h-10 w-10 mr-2" /> {count}
        </button>

        <div className={`rounded-2xl border border-${accentColor}-400/30 p-4 bg-slate-950/40`}>          
          <label className="text-sm text-slate-400 flex items-center gap-2" htmlFor="target">
            <Target className={`h-4 w-4 text-${accentColor}-300`} /> Target
          </label>
          <input
            id="target"
            type="number"
            min={1}
            value={target}
            onChange={(e) => setTarget(Math.max(1, parseInt(e.target.value || '1', 10)))}
            className={`mt-2 w-full rounded-md bg-slate-900 border border-${accentColor}-400/30 px-3 py-2 outline-none focus:ring-2 focus:ring-${accentColor}-500/40`}
          />

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className={`h-full bg-${accentColor}-500`} style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
