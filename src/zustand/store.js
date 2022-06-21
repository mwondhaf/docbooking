import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const dateStore = (set) => ({
  date: new Date(),
  time: null,
  setDate: (date) => set((state) => ({ date })),
  setTime: (time) => set((state) => ({ time })),
  removeTime: () => set((state) => ({ time: null })),
  removeDate: () => set((state) => ({ date: null, time: null })),
  // remove date and
});

const useDateStore = create(
  devtools(
    persist(dateStore, {
      name: "storedDate",
      getStorage: () => AsyncStorage,
    })
  )
);

export default useDateStore;
