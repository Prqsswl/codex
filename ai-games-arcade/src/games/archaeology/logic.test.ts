import { describe, it, expect } from 'vitest';
import { generateCivilization, generatePuzzle } from './logic';

describe('Archaeology Logic', () => {
  it('generates a civilization with valid dictionary', () => {
    const civ = generateCivilization();
    expect(civ.name).toBeDefined();
    expect(civ.location).toBeDefined();
    expect(Object.keys(civ.dictionary).length).toBeGreaterThan(0);

    // Check categories
    const values = Object.values(civ.dictionary);
    const hasPerson = values.some(v => v.category === 'person');
    const hasAction = values.some(v => v.category === 'action');
    const hasObject = values.some(v => v.category === 'object' || v.category === 'nature');

    expect(hasPerson).toBe(true);
    expect(hasAction).toBe(true);
    expect(hasObject).toBe(true);

    console.log('Generated Civ:', civ.name);
  });

  it('generates a puzzle from civilization', () => {
    const civ = generateCivilization();
    const puzzle = generatePuzzle(civ);

    expect(puzzle.symbols).toHaveLength(3);
    expect(puzzle.translation.split(' ')).toHaveLength(3);
    expect(puzzle.clues.length).toBeGreaterThan(0);

    console.log('Puzzle Translation:', puzzle.translation);
    console.log('Puzzle Symbols:', puzzle.symbols);
  });
});
