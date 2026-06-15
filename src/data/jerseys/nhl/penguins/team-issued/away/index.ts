import heroCrest from "@/assets/hero-crest.jpg";
import jerseyPenguins from "@/assets/jersey-penguins.jpg";
import twillDetail from "@/assets/twill-detail.jpg";
import type { Jersey } from "../../../../types";

export const roboPenAway: Jersey = {
  id: "pit-92",
  name: "Robo-Pen Away",
  team: "Penguins",
  player: "Team Issued",
  type: "Away",
  season: "1992-93",
  inventory: "PIT-92-A",
  league: "NHL",
  notes:
    "Back-to-back Cup season road sweater. Heavy twill numbering with the short-lived skating penguin.",
  description:
    "A Penguins away record for storing the jersey photo set, catalog copy, and inventory details together. Future player-specific or alternate-angle photos can be added to this style folder's image list.",
  imageAlt: "Pittsburgh Penguins away jersey laid flat on a dark surface",
  images: [jerseyPenguins, twillDetail, heroCrest],
};
