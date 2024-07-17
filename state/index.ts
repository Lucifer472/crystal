import { create } from "zustand";

interface useNavStoreProps {
  isShow: boolean;
  toggle: (b: boolean) => void;
}

export const useNavStore = create<useNavStoreProps>((set) => ({
  isShow: true,
  toggle: (b) => set({ isShow: b }),
}));

interface useAdStateProp {
  adCode: {
    label: string;
    id: string;
    size: googletag.GeneralSize;
  }[];
  setAdCode: (
    code: {
      label: string;
      id: string;
      size: googletag.GeneralSize;
    }[]
  ) => void;
}

export const useAdState = create<useAdStateProp>((set) => ({
  adCode: [
    {
      label: "/22989548286/1_336X280",
      id: "div-gpt-ad-1721042904447-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/2_336X280",
      id: "div-gpt-ad-1721042960568-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/3_336X280",
      id: "div-gpt-ad-1721042994893-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/4_336X280",
      id: "div-gpt-ad-1721043031989-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/5_336X280",
      id: "div-gpt-ad-1721043069692-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/300X75",
      id: "div-gpt-ad-1721045260799-0",
      size: [300, 75],
    },
    {
      label: "/22989548286/1_50x320",
      id: "div-gpt-ad-1721043327568-0",
      size: [320, 50],
    },
    {
      label: "/22989548286/INTERSTITIAL",
      id: "div-gpt-ad-1721043480545-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/7_336X280",
      id: "div-gpt-ad-1721197747164-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/8_336X280",
      id: "div-gpt-ad-1721197971333-0",
      size: [336, 280],
    },
    {
      label: "/22989548286/9_336X280",
      id: "div-gpt-ad-1721198092934-0",
      size: [336, 280],
    },
  ],
  setAdCode: (code) => set({ adCode: code }),
}));
