import { OpenWeatherResponse, ScreenType } from '@/types/CardType';
import { create } from 'zustand';

interface WeatherStore {
  cards: OpenWeatherResponse[];
  addCard: (card: OpenWeatherResponse) => void;
}

export const useScreens = create<ScreenType>((set) => ({
  screenState: true,
  setScreenState: (screenState) =>
    set(() => ({
      screenState,
    })),
}));

export const useWeatherCards = create<WeatherStore>((set) => ({
  cards: [],
  addCard: (card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),
}));
