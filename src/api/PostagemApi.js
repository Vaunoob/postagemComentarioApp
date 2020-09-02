class PostagemApi {
  static postagens = [
    {
      id: 1,
      titulo: "Bayern Campeão",
      texto: "O Bayer foi campeão",
      like: 0,
      dislike: 0,
      comentarios: [
        "Kimmich melhor lateral direito do mundo",
        "Muller cansado",
      ],
    },
    {
      id: 2,
      titulo: "Paris Saint-Germain vice",
      texto: "O pai ta off",
      like: 0,
      dislike: 0,
      comentarios: undefined,
    },
  ];

  static getAll() {
    return this.postagens;
  }

  static add(postagem) {
    this.postagens.push(postagem);
  }
}

export default PostagemApi;
