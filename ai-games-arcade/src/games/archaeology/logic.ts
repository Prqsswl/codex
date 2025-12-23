export interface SymbolData {
  char: string;
  meaning: string;
  category: 'nature' | 'action' | 'person' | 'object';
}

export interface Civilization {
  name: string;
  location: string;
  era: string;
  description: string;
  dictionary: Record<string, SymbolData>;
}

export interface Puzzle {
  symbols: string[];
  translation: string;
  clues: string[];
  fragments: { symbols: string[]; translation: string }[];
}

const SYLLABLES = ['קסא', 'לו', 'ני', 'קו', 'רה', 'צו', 'בה', 'אום', 'קוי', 'זור', 'וק', 'דה', 'פי', 'גאל', 'מור'];
const LOCATIONS = ['במדבר הנסתר', 'מתחת לאוקיינוס', 'בהרי הערפל', 'בג׳ונגל הנשכח', 'במערות הקריסטל', 'באי המרחף'];
const ERAS = ['עידן האבן הזוהרת', 'תקופת הצללים', 'שושלת השמש', 'האימפריה האבודה', 'תור הזהב'];

// Ancient-looking characters
const CHAR_POOL = [
  '𐤀', '𐤁', '𐤂', '𐤃', '𐤄', '𐤅', '𐤆', '𐤇', '𐤈', // Phoenician
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', // Runic
  '𐀀', '𐀁', '𐀂', '𐀃', '𐀄', '𐀅', '𐀆', '𐀇', '𐀈'  // Linear B
];

const CONCEPTS = [
  { meaning: 'שמש', category: 'nature' },
  { meaning: 'מים', category: 'nature' },
  { meaning: 'אש', category: 'nature' },
  { meaning: 'אדמה', category: 'nature' },
  { meaning: 'רוח', category: 'nature' },
  { meaning: 'מלך', category: 'person' },
  { meaning: 'לוחם', category: 'person' },
  { meaning: 'אדם', category: 'person' },
  { meaning: 'אל', category: 'person' },
  { meaning: 'אישה', category: 'person' },
  { meaning: 'בית', category: 'object' },
  { meaning: 'חרב', category: 'object' },
  { meaning: 'אוצר', category: 'object' },
  { meaning: 'ספינה', category: 'object' },
  { meaning: 'כתר', category: 'object' },
  { meaning: 'הלך', category: 'action' },
  { meaning: 'נתן', category: 'action' },
  { meaning: 'לקח', category: 'action' },
  { meaning: 'ראה', category: 'action' },
  { meaning: 'חיפש', category: 'action' },
  { meaning: 'מצא', category: 'action' },
  { meaning: 'בנה', category: 'action' },
  { meaning: 'הרס', category: 'action' },
];

export function generateCivilization(): Civilization {
  const name = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => SYLLABLES[Math.floor(Math.random() * SYLLABLES.length)]).join('');
  const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
  const era = ERAS[Math.floor(Math.random() * ERAS.length)];

  // Create dictionary ensuring at least one of each category
  const dictionary: Record<string, SymbolData> = {};
  const shuffledChars = [...CHAR_POOL].sort(() => Math.random() - 0.5);

  // Group concepts
  const byCat: Record<string, typeof CONCEPTS> = {
      person: CONCEPTS.filter(c => c.category === 'person'),
      action: CONCEPTS.filter(c => c.category === 'action'),
      object: CONCEPTS.filter(c => c.category === 'object'),
      nature: CONCEPTS.filter(c => c.category === 'nature'),
  };

  let charIdx = 0;
  // Pick one from each first
  Object.keys(byCat).forEach(cat => {
      const concept = byCat[cat][Math.floor(Math.random() * byCat[cat].length)];
      dictionary[shuffledChars[charIdx]] = { ...concept, char: shuffledChars[charIdx] } as SymbolData;
      charIdx++;
  });

  // Fill rest randomly up to 12
  const remainingConcepts = CONCEPTS.filter(c => !Object.values(dictionary).some(d => d.meaning === c.meaning));
  const shuffledRemaining = remainingConcepts.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 8; i++) {
     if (charIdx >= shuffledChars.length) break;
     dictionary[shuffledChars[charIdx]] = { ...shuffledRemaining[i], char: shuffledChars[charIdx] } as SymbolData;
     charIdx++;
  }

  return {
    name,
    location,
    era,
    description: `תרבות ה${name} שגשגה ${location} במהלך ${era}. הכתב שלהם היה מורכב מסמלים שייצגו מושגים שלמים.`,
    dictionary
  };
}

export function generatePuzzle(civ: Civilization): Puzzle {
  const words = Object.values(civ.dictionary);
  const persons = words.filter(w => w.category === 'person');
  const actions = words.filter(w => w.category === 'action');
  const objects = words.filter(w => w.category === 'object' || w.category === 'nature');

  // Basic sentence: Subject -> Verb -> Object
  const subj = persons[Math.floor(Math.random() * persons.length)];
  const verb = actions[Math.floor(Math.random() * actions.length)];
  const obj = objects[Math.floor(Math.random() * objects.length)];

  const translation = `${subj.meaning} ${verb.meaning} ${obj.meaning}`;
  const symbols = [subj.char, verb.char, obj.char];

  // Generate clues
  const clues = [
     `הסמל הראשון קשור ל${getCategoryDesc(subj.category)}`,
     `הסמל האחרון הוא סוג של ${getCategoryDesc(obj.category)}`
  ];

  // Generate fragments (partial translations) to help deduce symbols
  const fragments = [];

  // Fragment 1: Subject + Random Verb (different from puzzle verb if possible)
  const otherVerb = actions.find(a => a.meaning !== verb.meaning) || verb;
  fragments.push({
      symbols: [subj.char, otherVerb.char],
      translation: `${subj.meaning} ${otherVerb.meaning}`
  });

  // Fragment 2: Random Person + Object
  const otherPerson = persons.find(p => p.meaning !== subj.meaning) || subj;
  fragments.push({
      symbols: [otherPerson.char, obj.char],
      translation: `${otherPerson.meaning} ${obj.meaning}`
  });

  // Fragment 3: Just the Verb? Or Verb + Random Object
  // To ensure the verb can be identified
  const otherObj = objects.find(o => o.meaning !== obj.meaning) || obj;
  fragments.push({
      symbols: [verb.char, otherObj.char],
      translation: `${verb.meaning} ${otherObj.meaning}`
  });

  return {
    symbols,
    translation,
    clues,
    fragments: fragments.sort(() => Math.random() - 0.5).slice(0, 2) // Give 2 random fragments
  };
}

function getCategoryDesc(cat: string): string {
    switch(cat) {
        case 'person': return 'דמות';
        case 'nature': return 'תופעת טבע';
        case 'object': return 'חפץ';
        case 'action': return 'פעולה';
        default: return 'משהו';
    }
}
