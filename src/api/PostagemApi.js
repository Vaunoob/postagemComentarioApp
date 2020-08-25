class PostagemApi {
  getAll() {
    let promise = new Promise((resolve, reject) => {
      resolve([
        {
          titulo: "Bayern Campeão",
          texto: "O Bayer foi campeão, o pai ta off",
        },
        {
          titulo: "Paris Saint-German vice",
          texto: "O Neymar não jogou nada",
        },
      ]);
    });
    return promise;
  }
}

export default PostagemApi;
