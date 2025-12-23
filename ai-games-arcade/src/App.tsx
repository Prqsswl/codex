import { useState } from 'react';
import { games } from './data/games';
import ArchaeologyGame from './games/archaeology/ArchaeologyGame';

function App() {
  const [activeGameId, setActiveGameId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans" dir="rtl">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          ארקייד משחקי ה-AI
        </h1>
        <p className="text-slate-400">בחר משחק מהרשימה כדי להתחיל</p>
      </header>

      {activeGameId === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {games.map((game) => (
            <button
              key={game.id}
              className={`text-right p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all cursor-pointer bg-slate-800 hover:bg-slate-800/80 shadow-lg ${!game.isImplemented ? 'opacity-50 grayscale' : ''}`}
              onClick={() => {
                  if (game.isImplemented) setActiveGameId(game.id);
                  else alert('משחק זה עדיין בפיתוח!');
              }}
              disabled={!game.isImplemented}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-mono text-purple-400">#{game.id.toString().padStart(2, '0')}</span>
                {game.isImplemented && <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">שחיק</span>}
              </div>
              <h2 className="text-xl font-bold mb-3">{game.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{game.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setActiveGameId(null)}
            className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            ← חזרה לרשימת המשחקים
          </button>
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 min-h-[600px] shadow-2xl">
             {activeGameId === 1 ? (
                 <ArchaeologyGame />
             ) : (
                 <div className="flex items-center justify-center h-full text-xl text-slate-500">המשחק בטעינה...</div>
             )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
