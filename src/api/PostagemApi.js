class PostagemApi {
  postagens = [
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

  getAll() {
    let promise = new Promise((resolve, reject) => {
      resolve(this.postagens);
    });
    return promise;
  }
}

export default PostagemApi;
