import nessBack from "@/assets/jerseys/ncaa/arizona-state-sun-devils/tucker-ness/home/back.jpg";
import nessFront from "@/assets/jerseys/ncaa/arizona-state-sun-devils/tucker-ness/home/front.jpg";
import type { Jersey } from "../../../../types";

export const tuckerNessMaroon: Jersey = {
  id: "asu-ness-maroon-home",
  name: "Tucker Ness ASU Maroon",
  team: "Arizona State Sun Devils",
  player: "Tucker Ness",
  type: "Home",
  season: "2024-2026",
  inventory: "ASU-NESS-10-MRN",
  league: "NCAA",
  notes:
    "CCM maroon and gold Arizona State Sun Devils jersey worn by Tucker Ness (#10) across the 2024-2025 and 2025-2026 NCHC seasons.",
  description:
    "An Arizona State Sun Devils home jersey by CCM, game-worn by Tucker Ness (#10) during the 2024-2025 and 2025-2026 seasons. The front carries the block ARIZONA STATE wordmark in gold twill with the NCHC shield on the right chest; the back features a gold NESS nameplate above a bold #10 in gold twill on maroon mesh.",
  imageAlt: "Arizona State Sun Devils Tucker Ness #10 maroon home jersey front and back",
  images: [nessFront, nessBack],
};
