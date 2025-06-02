import { useState, useEffect } from "react";

type LossCounterConfig = {
  maxLosses?: number;
  onThirdLoss?: () => Promise<void> | void;
};

export const useLossCounter = (config?: LossCounterConfig) => {
  const { maxLosses = 3, onThirdLoss } = config || {};
  const [lossCount, setLossCount] = useState(0);

  const addLoss = () => {
    setLossCount((prev) => prev + 1);
  };

  const resetLosses = () => {
    setLossCount(0);
  };

  // При достижении maxLosses вызываем колбэк
  useEffect(() => {
    if (lossCount >= maxLosses) {
      onThirdLoss?.();
      resetLosses(); // Сбрасываем после отправки
    }
  }, [lossCount]);

  return { lossCount, addLoss, resetLosses };
};
