export const manifest = {
    "amazing-arthropods": {
        displayName: "Amazing Arthropods",
        level: "Elementary",
        groups: {
            "classes": {
                displayName: "Arthropod Classes",
                sets: {
                    "aa-arachnida": {
                        displayName: "Arachnida",
                        load: () => import("./amazing-arthropods/classes/arachnida"),
                    },
//                    "aa-branchiopoda": {
//                        displayName: "Branchiopoda",
//                        load: () => import("./amazing-arthropods/classes/branchiopoda"),
//                    },
                    "aa-chilopoda": {
                        displayName: "Chilopoda",
                        load: () => import("./amazing-arthropods/classes/chilopoda"),
                    },
                    "aa-diplopoda": {
                        displayName: "Diplopoda",
                        load: () => import("./amazing-arthropods/classes/diplopoda"),
                    },
                    "aa-insecta": {
                        displayName: "Insecta",
                        load: () => import("./amazing-arthropods/classes/insecta"),
                    },
                    "aa-malacostraca": {
                        displayName: "Malacostracta",
                        load: () => import("./amazing-arthropods/classes/malacostraca"),
                    },
                }
            },
            "orders": {
                displayName: "Insect Orders",
                sets: {
//                    "aa-blattodea": {
//                        displayName: "Blattodea",
//                        load: () => import("./amazing-arthropods/orders/blattodea"),
//                    },
                    "aa-coleoptera": {
                        displayName: "Coleoptera",
                        load: () => import("./amazing-arthropods/orders/coleoptera"),
                    },
                    "aa-diptera": {
                        displayName: "Diptera",
                        load: () => import("./amazing-arthropods/orders/diptera"),
                    },
                    "aa-ephemeroptera": {
                        displayName: "Ephemeroptera",
                        load: () => import("./amazing-arthropods/orders/ephemeroptera"),
                    },
                    "aa-hemiptera": {
                        displayName: "Hemiptera",
                        load: () => import("./amazing-arthropods/orders/hemiptera"),
                    },
                    "aa-hymenoptera": {
                        displayName: "Hymenoptera",
                        load: () => import("./amazing-arthropods/orders/hymenoptera"),
                    },
                    "aa-lepidoptera": {
                        displayName: "Lepidoptera",
                        load: () => import("./amazing-arthropods/orders/lepidoptera"),
                    },
                    "aa-mantodea": {
                        displayName: "Mantodea",
                        load: () => import("./amazing-arthropods/orders/mantodea"),
                    },
                    "aa-megaloptera": {
                        displayName: "Megaloptera",
                        load: () => import("./amazing-arthropods/orders/megaloptera"),
                    },
                    "aa-neuroptera": {
                        displayName: "Neuroptera",
                        load: () => import("./amazing-arthropods/orders/neuroptera"),
                    },
                    "aa-odonata": {
                        displayName: "Odonata",
                        load: () => import("./amazing-arthropods/orders/odonata"),
                    },
                    "aa-orthoptera": {
                        displayName: "Orthoptera",
                        load: () => import("./amazing-arthropods/orders/orthoptera"),
                    },
                    "aa-trichoptera": {
                        displayName: "Trichoptera",
                        load: () => import("./amazing-arthropods/orders/trichoptera"),
                    },
                }
            },
            "general": {
                displayName: "General",
                sets: {
                    "defense-mechanisms": {
                        displayName: "Defense Mechanisms",
                        load: () => import("./amazing-arthropods/general/defense-mechanisms"),
                    },
                    "metamorphosis": {
                        displayName: "Metamorphosis",
                        load: () => import("./amazing-arthropods/general/metamorphosis"),
                    },
                }
            },
            "2026-species": {
                displayName: "2026 Species",
                sets: {
                    "general-questions": {
                        displayName: "General Questions",
                        load: () => import("./amazing-arthropods/2026-species/general-questions"),
                    },
                    "identification": {
                        displayName: "Identification",
                        load: () => import("./amazing-arthropods/2026-species/identification"),
                    }
                },
            },
        }
    },
    "entomology-b": {
        displayName: "Entomology B",
        level: "Middle",
        groups: {
            "anatomy": {
                displayName: "Anatomy",
                sets: {
                    "leg-types": {
                        displayName: "Leg Types",
                        load: () => import("./entomology/anatomy/leg-types"),
                    },
                    "wing-types": {
                        displayName: "Wing Types",
                        load: () => import("./entomology/anatomy/wing-types"),
                    },
                }
            },
            "orders-families": {
                displayName: "Orders & Families",
                sets: {
                    "entb-blattodea": {
                        displayName: "Blattodea",
                        load: () => import("./entomology/orders-families/blattodea"),
                    },
                    "entb-coleoptera": {
                        displayName: "Coleoptera",
                        load: () => import("./entomology/orders-families/coleoptera"),
                    },
                    "entb-hymenoptera": {
                        displayName: "Hymenoptera",
                        load: () => import("./entomology/orders-families/hymenoptera"),
                    },
                    "entb-lepidoptera": {
                        displayName: "Lepidoptera",
                        load: () => import("./entomology/orders-families/lepidoptera"),
                    },
                    "entb-odonata": {
                        displayName: "Odonata",
                        load: () => import("./entomology/orders-families/odonata"),
                    },
                    "entb-orthoptera": {
                        displayName: "Orthoptera",
                        load: () => import("./entomology/orders-families/orthoptera"),
                    },
                    "entb-neuroptera": {
                        displayName: "Neuroptera",
                        load: () => import("./entomology/orders-families/neuroptera"),
                    },
                    "entb-other": {
                        displayName: "Other Orders",
                        load: () => import("./entomology/orders-families/other"),
                    },
                }
            },
        },
    },
    "potions-poisons-b": {
        displayName: "Potions and Poisons B",
        level: "Middle",
        groups: {
            "potions": {
                displayName: "Potions",
                sets: {
                    "week1-2": {
                        displayName: "Week 1 & 2",
                        load: () => import("./potions-poisons/potions/week1-2"),
                    },
                    "week3": {
                        displayName: "Week 3",
                        load: () => import("./potions-poisons/potions/week3"),
                    },
                }
            },
            "poisons": {
                displayName: "Poisons",
                sets: {
                    "animal": {
                        displayName: "Animal Toxins",
                        load: () => import("./potions-poisons/2026-poisons/animal"),
                    },
                    "plant": {
                        displayName: "Plant Toxins",
                        load: () => import("./potions-poisons/2026-poisons/plant"),
                    },
                }
            },
        },
    },
};

export function buildSetIndex(manifest) {
  const index = {};

  for (const [eventId, event] of Object.entries(manifest)) {
    for (const group of Object.values(event.groups)) {
      for (const [setId, setDef] of Object.entries(group.sets)) {
        index[setId] = { ...setDef, eventId };
      }
    }
  }

  return index;
}

export const setIndex = buildSetIndex(manifest);