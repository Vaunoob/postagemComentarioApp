class PostagemApi {
  getAll() {
    let promise = new Promise((resolve, reject) => {
      resolve([
        {
          titulo: "Bayern Campeão",
          texto: "O Bayer foi campeão",
        },
        {
          titulo: "Paris Saint-Germain vice",
          texto: "O pai ta off",
        },
      ]);
    });
    return promise;
  }
}

export default PostagemApi;
