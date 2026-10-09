export const ISLANDS_CONFIG = {
  overview: {
    id: 'overview',
    camera: {
      position: [-30, 66, 72],
      target: [-20, 0, 2],
    }
  },
  about: {
    id: 'about',
    name: 'About Me',
    center: [-24, 0, 8],
    camera: {
      position: [-24, 20, 34],
      target: [-24, 2, 8],
    },
    pois: {
      forest: {
        id: 'forest',
        islandId: 'about',
        position: [-32.3, 1.9, 11.6],
        label: 'Quem sou eu',
      },
      mountain: {
        id: 'mountain',
        islandId: 'about',
        position: [-24.8, 4.2, 6.1],
        label: 'Formação',
      },
      village: {
        id: 'village',
        islandId: 'about',
        position: [-17.3, 2.1, 9.9],
        label: 'Stacks & Tecnologias',
      },
      districtGeo: {
        id: 'districtGeo',
        islandId: 'about',
        position: [-22, 2.4, 6.8],
        label: 'Geotecnologia GIS',
      },
      districtBackend: {
        id: 'districtBackend',
        islandId: 'about',
        position: [-18.9, 2.4, 5.7],
        label: 'Backend e Bancos',
      },
      districtCloud: {
        id: 'districtCloud',
        islandId: 'about',
        position: [-15.7, 2.4, 8.8],
        label: 'Cloud ETL',
      },
      districtAi: {
        id: 'districtAi',
        islandId: 'about',
        position: [-19.1, 2.4, 12.2],
        label: 'IA ML',
      },
      districtFuture: {
        id: 'districtFuture',
        islandId: 'about',
        position: [-13.8, 2.4, 6.5],
        label: 'Tecnologias Futuras',
      }
    }
  },
  aboutCity: {
    id: 'aboutCity',
    parentId: 'about',
    name: 'Stack City',
    center: [-17.9, 2, 8.45],
    camera: {
      position: [-17.9, 12, 22.8],
      target: [-17.9, 2.15, 8.5],
    }
  },
  resume: {
    id: 'resume',
    name: 'Resume',
    center: [48, 0, 2],
    camera: {
      position: [46.5, 24, 30],
      target: [46.5, 2.2, 2.2],
    },
    pois: {
      exp1: {
        id: 'exp1',
        islandId: 'resume',
        position: [43.8, 2.6, -6.3],
        label: 'Atual/Ultima Experiencia',
      },
      exp2: {
        id: 'exp2',
        islandId: 'resume',
        position: [48.2, 2.8, 0.1],
        label: 'Experiencias Anteriores',
      },
      exp3: {
        id: 'exp3',
        islandId: 'resume',
        position: [49.2, 2.4, 4.4],
        label: 'Docência',
      },
      exp4: {
        id: 'exp4',
        islandId: 'resume',
        position: [44.4, 2.6, 10.5],
        label: 'Projetos Próprios',
      }
    }
  },
  portfolio: {
    id: 'portfolio',
    name: 'Portfolio',
    center: [0, 0, -18],
    camera: {
      position: [0, 46, 24],
      target: [0, 3, -23],
    },
    pois: {
      proj1: {
        id: 'proj1',
        islandId: 'portfolio',
        position: [-22, 2.35, -14.2],
        label: 'MapGenPlus',
      },
      proj2: {
        id: 'proj2',
        islandId: 'portfolio',
        position: [19, 2.65, -20.4],
        label: 'Projetos Github',
      },
      proj3: {
        id: 'proj3',
        islandId: 'portfolio',
        position: [5.8, 2.35, -14.5],
        label: 'GeoBrasil',
      },
      proj5: {
        id: 'proj5',
        islandId: 'portfolio',
        position: [0, 2.65, -40],
        label: 'LLM Local Llama',
      },
      proj7: {
        id: 'proj7',
        islandId: 'portfolio',
        position: [-7.2, 2.35, -27],
        label: 'Circula',
      }
    }
  },
  contact: {
    id: 'contact',
    name: 'Contact',
    center: [12, 0, 22],
    camera: {
      position: [12, 12, 34],
      target: [12, 2, 22],
    },
    pois: {
      beacon: {
        id: 'beacon',
        islandId: 'contact',
        position: [12, 3, 22],
        label: 'Farol de Contato',
      }
    }
  }
};
