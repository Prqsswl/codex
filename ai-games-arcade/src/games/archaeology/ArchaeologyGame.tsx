import { useState, useEffect } from 'react';
import { generateCivilization, generatePuzzle } from './logic';
import type { Civilization, Puzzle } from './logic';

export default function ArchaeologyGame() {
  const [civ, setCiv] = useState<Civilization | null>(null);
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [guesses, setGuesses] = useState<string[]>(['', '', '']);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [feedback, setFeedback] = useState<string>('');

  const startNewGame = () => {
    const newCiv = generateCivilization();
    const newPuzzle = generatePuzzle(newCiv);
    setCiv(newCiv);
    setPuzzle(newPuzzle);
    setGuesses(['', '', '']);
    setStatus('playing');
    setFeedback('');
  };

  useEffect(() => {
    setTimeout(startNewGame, 0);
  }, []);

  const handleGuess = (index: number, word: string) => {
    const newGuesses = [...guesses];
    newGuesses[index] = word;
    setGuesses(newGuesses);
  };

  const checkSolution = () => {
    if (!puzzle) return;
    const correctWords = puzzle.translation.split(' ');
    const isCorrect = guesses.every((g, i) => g === correctWords[i]);

    if (isCorrect) {
      setStatus('won');
      setFeedback('כל הכבוד! פענחת את המסר העתיק!');
    } else {
      const correctCount = guesses.filter((g, i) => g === correctWords[i]).length;
      setFeedback(`נכון חלקית... ${correctCount} מילים נכונות.`);
    }
  };

  if (!civ || !puzzle) return <div className="p-10 text-center">מכין את המשלחת הארכיאולוגית...</div>;

  const wordBank = Object.values(civ.dictionary).map(d => d.meaning).sort();

  return (
    <div className="p-6 text-slate-100 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-amber-500 mb-1">תרבות ה{civ.name}</h2>
        <div className="flex justify-center gap-3 text-xs text-slate-500 font-mono">
          <span>{civ.location}</span>
          <span>•</span>
          <span>{civ.era}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Column: Puzzle & Work Area */}
        <div className="space-y-6">

          {/* Main Puzzle */}
          <div className="bg-stone-800 p-6 rounded-lg border-4 border-stone-600 shadow-2xl relative text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-900 px-3 py-1 rounded text-stone-400 text-[10px] tracking-widest border border-stone-700">
              לוח עתיק
            </div>
            <div className="flex justify-center gap-4 text-5xl my-2 font-serif text-stone-300">
               {puzzle.symbols.map((s, i) => (
                 <div key={i} className="w-16 h-20 flex items-center justify-center bg-stone-700/50 rounded border border-stone-600 font-ancient">
                   {s}
                 </div>
               ))}
            </div>
          </div>

          {/* Fragments (New) */}
           <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-sm">
              <span>🧩</span> שברים נוספים שנמצאו
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {puzzle.fragments.map((frag, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-900/50 p-2 rounded border border-slate-800">
                   <div className="flex gap-2 text-xl text-stone-400 font-ancient">
                     {frag.symbols.map((s, idx) => <span key={idx}>{s}</span>)}
                   </div>
                   <div className="text-slate-300 text-sm">"{frag.translation}"</div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
             <div className="flex gap-2 mb-4">
               {guesses.map((g, i) => (
                 <div key={i} className="flex-1">
                    <label className="block text-[10px] text-slate-500 mb-1 text-center">מילה {i+1}</label>
                    <select
                      value={g}
                      onChange={(e) => handleGuess(i, e.target.value)}
                      className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm focus:border-purple-500 outline-none"
                      disabled={status === 'won'}
                    >
                      <option value="">?</option>
                      {wordBank.map(w => (
                        <option key={w} value={w}>{w}</option>
                      ))}
                    </select>
                 </div>
               ))}
             </div>

             <button
               onClick={checkSolution}
               disabled={status === 'won'}
               className={`w-full py-2 rounded-lg font-bold transition-all ${status === 'won' ? 'bg-green-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
             >
               {status === 'won' ? 'פענוח הושלם!' : 'בדוק פענוח'}
             </button>

             {feedback && (
               <div className={`mt-2 p-2 rounded text-center text-xs font-bold ${status === 'won' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                 {feedback}
               </div>
             )}

             {status === 'won' && (
                <button onClick={startNewGame} className="mt-2 w-full py-2 border border-slate-600 rounded text-slate-400 hover:text-white hover:border-slate-400 text-sm">
                  אתגר חדש
                </button>
             )}
          </div>
        </div>

        {/* Right Column: Reference */}
        <div className="space-y-4">

            {/* Clues */}
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <h3 className="text-purple-400 font-bold mb-2 flex items-center gap-2 text-sm">
                <span>🔍</span> רמזים
                </h3>
                <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                {puzzle.clues.map((clue, i) => (
                    <li key={i}>{clue}</li>
                ))}
                <li>מבנה: נושא - פעולה - מושא.</li>
                </ul>
            </div>

            {/* Word Bank Display */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex-1">
                <h3 className="text-slate-400 font-bold mb-3 text-xs uppercase tracking-wider">מילים ידועות (בנק מילים)</h3>
                <div className="grid grid-cols-2 gap-2">
                {Object.values(civ.dictionary).map((entry, idx) => (
                    <div key={idx} className="flex flex-col p-2 rounded bg-slate-800/50 border border-slate-700/50">
                        <span className="font-bold text-slate-200 text-sm">{entry.meaning}</span>
                        <span className="text-[10px] text-slate-500">{entry.category === 'person' ? 'דמות' : entry.category === 'action' ? 'פעולה' : entry.category === 'nature' ? 'טבע' : 'חפץ'}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
