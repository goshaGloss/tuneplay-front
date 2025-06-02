"use client";
import React from 'react';
import styles from './leaderboard.module.css';

const LeaderBoard = ({myStats}: {myStats:{game:string, score:number}[]}) => {
const bestStats = Object.values(
  myStats.reduce((acc, stat) => {
    if (!acc[stat.game] || stat.score > acc[stat.game].score) {
      acc[stat.game] = stat;
    }
    return acc;
  }, {} as Record<string, { game: string; score: number }>)
);

  return (
    <div className={styles.statsContainer}>
      <h2 className={styles.statsTitle}>МОЯ СТАТИСТИКА</h2>
      
      <div className={styles.statsGrid}>
        <div className={`${styles.gridHeader} ${styles.gameHeader}`}>Игра</div>
        <div className={`${styles.gridHeader} ${styles.bestHeader}`}>Рекорд</div>
        
        {bestStats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className={`${styles.gridCell} ${styles.gameCell}`}>{stat.game === "guess-lyric" ? "Угадай мелодию" : stat.game === "guess-artist" ? "Угадай артиста" : "Повтори мелодию"}</div>
            <div className={`${styles.gridCell} ${styles.lastCell}`}>{stat.score}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;