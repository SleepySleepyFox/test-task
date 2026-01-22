import { OpenWeatherResponse, ScreenInterface } from '@/types/CardType';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface WeatherStore {
  cards: OpenWeatherResponse[];
  addCard: (card: OpenWeatherResponse) => void;
  removeCard: (card: OpenWeatherResponse) => void;
  refreshCards: (card: OpenWeatherResponse) => void;
}

export const useScreens = create<ScreenInterface>((set) => ({
  screenState: {},
  setScreenState: (data) => set(() => ({ screenState: data })),
}));

export const useWeatherCards = create<WeatherStore>()(
  persist(
    (set) => ({
      cards: [],
      addCard: (card) =>
        set((state) => ({
          cards: [...state.cards, card],
        })),

      removeCard: (card) =>
        set((state) => ({
          cards: state.cards.filter((e) => card.cardID !== e.cardID),
        })),

      refreshCards: (card) =>
        set((state) => ({
          cards: state.cards.map((e) => (card.cardID === e.cardID ? card : e)),
        })),
    }),
    {
      name: 'weather-cards-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
