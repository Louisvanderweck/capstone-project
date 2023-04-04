import kette from "../public/kette.webp";
import bulletRing from "../public/bulletRing.webp";
import fatBullet from "../public/fatBullet.webp";
import tankRing from "../public/tankRing.webp";
import tankNack from "../public/tankNack.webp";
import earringtank from "../public/earringtank.webp";
import ketteV from "../public/ketteV.webp";
import Ketteconnected from "../public/halsketteConnect.webp";

export const products = [
  {
    id: 1,
    name: "GoldRing",
    materials: ["gold", "silver", "platinum"],
    type: "ring",
    price: "150 €",
    description: "A beautiful gold ring with a diamond accent.",
    Image: kette,
  },
  {
    id: 2,
    name: "Halskette Connect",
    materials: ["silver"],
    type: "nack",
    price: "200 €",
    description:
      "Die Halskette Connect besteht aus vielen kleinen Herzen. Sie liegt schön am Hals an und strahlt etwas verspieltes aus. Sie lässt sich super Layern mit anderen Halsketten. Aufgrund der Glieder lässt sich die Länge beliebig verstellen. Die Kette kann man aber auch super doppelt um das Handgelenk tragen.  ",
    Image: Ketteconnected,
  },
  {
    id: 3,
    name: "Silver Nacklace",
    materials: ["gold", "silver"],
    type: "nack",
    price: 130,
    description: "A beautiful silver Nack.",
    Image: "",
  },
  {
    id: 4,
    name: "Platinum Ring",
    materials: ["platinum"],
    type: "ring",
    price: 130,
    description: "A beautiful Plartinum Ring with a diamond accent.",
    Image: "",
  },
  {
    id: 5,
    name: "Kette V",
    materials: ["gold", "silver"],
    type: "nack",
    price: 110,
    description:
      "V wie Venezianer. Eine feine Kette für jedes Hals und jeden Anlass. Der Verschluss ist nicht nur funktional sondern optisch eine Zirde.",
    Image: ketteV,
  },
  {
    id: 6,
    name: "Halskette Tank 4",
    materials: ["platinum", "silver"],
    type: "nack",
    price: 220,
    description:
      "Die genderless Kette ist für jeden Geschmack und jede Vorliebe. Klassisch zu weißem Shirt und Jeans, sagt sie mehr als tausend Worte: I AM HERE. ",
    Image: tankNack,
  },
  {
    id: 7,
    name: "Ohrringe Tank 4",
    materials: ["gold", "silver"],
    type: "earring",
    price: 50,
    description:
      "Die einzelen Glieder des Ohrrings Tank 4 lassen den Ohrring weich wirken. Er schwingt mit jeder Bewegung mit.",
    Image: earringtank,
  },
  {
    id: 8,
    name: "Tank Ring",
    materials: ["gold", "silver"],
    type: "ring",
    price: 85,
    description:
      "Die Kette besteht aus einzelen losen Gliedern und schmiegt sie an den Finger an. In Silber als auch in Gold ein Hingucker, der jedes Outfit pusht. ",
    Image: tankRing,
  },
  {
    id: 9,
    name: "Bullet Ring",
    materials: ["gold", "silver"],
    type: "ring",
    price: 40,
    description:
      "Simple + Basic. Der Ring Bullet besteht aus kleinen aneinandergereihten Kugeln in Silber oder in Gold. Je nach Größe kann man ihn beliebig am Finger oder sogar Fuß tragen.",
    Image: bulletRing,
  },
  {
    id: 10,
    name: "fat Bullet",
    materials: ["gold", "silver"],
    type: "earring",
    price: 30,
    description:
      "Der Ohrring fat Bullet in Silber oder in Gold mit 5 Kugeln. Dieser Ohrring ist schlicht und passt zu jedem Anlass.",
    Image: fatBullet,
  },
];
