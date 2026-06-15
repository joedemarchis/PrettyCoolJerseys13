import heroCrest from "@/assets/hero-crest.jpg";
import jerseyRangers from "@/assets/jersey-rangers.jpg";
import twillDetail from "@/assets/twill-detail.jpg";
import type { Jersey } from "../../../../types";

export const empireStateClassic: Jersey = {
  id: "nyr-85",
  name: "Empire State Classic",
  team: "Rangers",
  player: "Team Issued",
  type: "Home",
  season: "1985-86",
  inventory: "NYR-85-H",
  league: "NHL",
  notes:
    "Custom mesh build featuring the rare block-shadow lettering. Worn during the mid-eighties resurgence.",
  description:
    "A Rangers home specimen organized with its primary lay-flat photo, textile detail, and archive crest in one record. Use this folder for additional Rangers team-issued home images, condition notes, and provenance updates.",
  imageAlt: "New York Rangers home jersey laid flat on a dark surface",
  images: [jerseyRangers, twillDetail, heroCrest],
};
