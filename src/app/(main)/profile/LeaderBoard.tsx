"use client";
import React from 'react';
import styles from './leaderboard.module.css';

const LeaderBoard = ({ myStats }: { myStats: { game: string; score: number }[] }) => {
  // Все возможные игры
  const allGames = [
    { id: "guess-artist", name: "Угадай артиста" },
    { id: "guess-lyric", name: "Угадай строчку" },
    { id: "repeat-notes", name: "Повтори мелодию" }
  ];

  // Находим максимальные скоры для каждой игры
  const gameStats = allGames.map(game => {
    const gameRecords = myStats.filter(stat => stat.game === game.id);
    const maxScore = gameRecords.length > 0 
      ? Math.max(...gameRecords.map(stat => stat.score || 0))
      : 0;
    
    return {
      game: game.name,
      score: maxScore
    };
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>МОЯ СТАТИСТИКА</h2>
      
      <div className={styles.table}>
        {/* Заголовки таблицы */}
        <div className={styles.row}>
          <div className={`${styles.cell} ${styles.headerCell} ${styles.gameCell}`}>Игра</div>
          <div className={`${styles.cell} ${styles.headerCell} ${styles.scoreCell}`}>Рекорд</div>
        </div>
        
        {/* Строки с данными */}
        {gameStats.map((stat, index) => (
          <div className={styles.row} key={index}>
            <div className={`${styles.cell} ${styles.gameCell}`}>
              {stat.game}
            </div>
            <div className={`${styles.cell} ${styles.scoreCell}`}>
              {stat.score ?? 0}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;