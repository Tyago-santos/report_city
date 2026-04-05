export type CityIssuePost = {
  id: string;
  author: string;
  avatarUrl?: string;
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  postedAt: string; // ISO 8601 timestamp
  comments: number;
  likes: number;
  dislikes: number;
  isFollowed: boolean;
  tags: string[];
};

export const cityIssuePosts: CityIssuePost[] = [
  {
    id: "p-001",
    author: "Luana Silva",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
    title: "Buraco na avenida principal",
    description:
      "Trecho aberto em frente ao terminal de onibus; ja causou dois pneus furados esta semana.",
    location: "Av. Central, Bairro Industrial",
    postedAt: "2026-03-29T13:20:00Z",
    comments: 12,
    likes: 48,
    dislikes: 3,
    isFollowed: true,
    tags: ["pavimento", "seguranca", "transito"],
  },
  {
    id: "p-002",
    author: "Joao Mendes",
    avatarUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1505731197-3c5f277eb29f?auto=format&fit=crop&w=1200&q=80",
    title: "Luminarias apagadas",
    description: "Quadrado inteiro sem iluminacao publica desde a ultima chuva.",
    location: "Rua das Palmeiras, Quadra 8",
    postedAt: "2026-03-31T22:05:00Z",
    comments: 7,
    likes: 31,
    dislikes: 1,
    isFollowed: false,
    tags: ["iluminacao", "seguranca"],
  },
  {
    id: "p-003",
    author: "Carla Nogueira",
    avatarUrl: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    title: "Lixo acumulado",
    description: "Coleta nao passou ha cinco dias; mau cheiro forte pela manha.",
    location: "Travessa Horizonte, 210",
    postedAt: "2026-04-01T11:10:00Z",
    comments: 19,
    likes: 65,
    dislikes: 4,
    isFollowed: true,
    tags: ["coleta", "saude", "urgente"],
  },
  {
    id: "p-004",
    author: "Rafael Costa",
    avatarUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
    title: "Alagamento recorrente",
    description: "Sempre apos chuvas fortes a calcada fica intransitavel e invade garagens.",
    location: "Rua Marechal Deodoro, 155",
    postedAt: "2026-03-27T09:40:00Z",
    comments: 9,
    likes: 29,
    dislikes: 2,
    isFollowed: false,
    tags: ["drenagem", "enchente"],
  },
  {
    id: "p-005",
    author: "Bruna Araujo",
    avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Semaforo quebrado",
    description: "Luzes piscando em amarelo ha 24h; risco de acidente no cruzamento.",
    location: "Cruzamento Av. Brasil x Rua Rio Pardo",
    postedAt: "2026-04-02T07:55:00Z",
    comments: 5,
    likes: 22,
    dislikes: 0,
    isFollowed: true,
    tags: ["transito", "semaforo"],
  },
  {
    id: "p-006",
    author: "Miguel Souza",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    title: "Poste caido",
    description:
      "Poste de madeira tombou apos colisao; fios baixos impedem a passagem de onibus.",
    location: "Av. das Nacoes, ponto 34",
    postedAt: "2026-04-03T15:35:00Z",
    comments: 3,
    likes: 18,
    dislikes: 2,
    isFollowed: false,
    tags: ["energia", "risco"],
  },
  {
    id: "p-007",
    author: "Daniel Freitas",
    avatarUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
    title: "Praca sem manutencao",
    description:
      "Playground com ferros soltos e bancos quebrados; criancas sem opcao segura de lazer.",
    location: "Praca das Mangueiras",
    postedAt: "2026-03-25T18:25:00Z",
    comments: 14,
    likes: 41,
    dislikes: 5,
    isFollowed: true,
    tags: ["lazer", "manutencao"],
  },
  {
    id: "p-008",
    author: "Ana Rocha",
    avatarUrl: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=120&h=120",
    imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80",
    title: "Onibus sem acessibilidade",
    description:
      "Linha 602 circula com elevador quebrado ha semanas; cadeirantes precisam de apoio.",
    location: "Linha 602, sentido Centro",
    postedAt: "2026-04-04T06:45:00Z",
    comments: 11,
    likes: 33,
    dislikes: 1,
    isFollowed: false,
    tags: ["acessibilidade", "transporte"],
  },
];

export default cityIssuePosts;
