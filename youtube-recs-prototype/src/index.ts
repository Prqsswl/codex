import fs from 'fs';
import path from 'path';
import Table from 'cli-table3';

const DATA_DIR = path.join(__dirname, '../data');

function loadJSON(filename: string) {
  const filePath = path.join(DATA_DIR, filename);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  return null;
}

function displayTop100() {
  const data = loadJSON('top100.json');
  if (!data) return;

  const table = new Table({
    head: ['Rank', 'Channel Name'],
    colWidths: [10, 50]
  });

  data.forEach((item: any) => {
    table.push([item.rank, item.name]);
  });

  console.log('🏆 Top 100 YouTube Channels');
  console.log(table.toString());
}

function displayTrends() {
  const data = loadJSON('trends.json');
  if (!data) return;

  if (data.rising) {
    const risingTable = new Table({
      head: ['Rank', 'Topic', 'Growth', 'Reason'],
      colWidths: [8, 30, 15, 40]
    });

    data.rising.forEach((item: any) => {
      risingTable.push([item.rank, item.topic, item.growth, item.reason]);
    });

    console.log('\n🚀 Rising Trends 2025');
    console.log(risingTable.toString());
  }

  if (data.declining) {
    const decliningTable = new Table({
      head: ['Rank', 'Topic', 'Decline', 'Reason'],
      colWidths: [8, 30, 15, 40]
    });

    data.declining.forEach((item: any) => {
      decliningTable.push([item.rank, item.topic, item.decline, item.reason]);
    });

    console.log('\n📉 Declining Trends');
    console.log(decliningTable.toString());
  }
}

function displayVideos() {
  const data = loadJSON('videos.json');
  if (!data) return;

  const table = new Table({
    head: ['Rank', 'Title', 'Channel', 'Views', 'Year'],
    colWidths: [8, 30, 20, 15, 10]
  });

  data.forEach((item: any) => {
    table.push([item.rank, item.title, item.channel, item.views, item.year]);
  });

  console.log('\n🎬 Top 30 Most Viewed Videos');
  console.log(table.toString());
}

function displayComparisons() {
  const data = loadJSON('comparisons.json');
  if (!data || !data.gaming) return;

  const table = new Table({
    head: ['Criteria', 'PewDiePie', 'MrBeast Gaming', 'Markiplier', 'Jacksepticeye', 'DanTDM'],
  });

  data.gaming.forEach((item: any) => {
    table.push([
      item.criteria,
      item.PewDiePie,
      item.MrBeastGaming,
      item.Markiplier,
      item.Jacksepticeye,
      item.DanTDM
    ]);
  });

  console.log('\n🎮 Gaming Channels Comparison');
  console.log(table.toString());
}

function displayTopics() {
  const data = loadJSON('topics.json');
  if (!data) return;

  const table = new Table({
    head: ['Category', 'Topics'],
    colWidths: [25, 80],
    wordWrap: true
  });

  for (const [category, topics] of Object.entries(data)) {
    table.push([category.replace('_', ' ').toUpperCase(), (topics as string[]).join(', ')]);
  }

  console.log('\n📚 Top 100 Topics/Genres');
  console.log(table.toString());
}

function displayIdeas() {
  const data = loadJSON('ideas.json');
  if (!data) return;

  const table = new Table({
    head: ['Category', 'Ideas'],
    colWidths: [25, 80],
    wordWrap: true
  });

  for (const [category, ideas] of Object.entries(data)) {
    table.push([category.replace('_', ' ').toUpperCase(), (ideas as string[]).join(', ')]);
  }

  console.log('\n💡 100+ Content Ideas');
  console.log(table.toString());
}

function main() {
  console.log('YouTube Custom Knowledge Base\n');
  displayTop100();
  displayVideos();
  displayTrends();
  displayComparisons();
  displayTopics();
  displayIdeas();
}

main();
