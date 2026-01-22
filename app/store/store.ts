import { OpenWeatherResponse } from '@/types/CardType';
import { create } from 'zustand';

interface WeatherStore {
  cards: OpenWeatherResponse[];
  addCard: (card: OpenWeatherResponse) => void;
}

const useWeatherCards = create<WeatherStore>((set) => ({
  cards: [],
  addCard: (card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),
}));

export default useWeatherCards;
