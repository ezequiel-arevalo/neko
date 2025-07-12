export const HomePage = () => {
  return (
    <section className="my-40">
      <h1 className="text-3xl font-bold underline mb-8">This is Neko!</h1>

      <article className="flex flex-col gap-1.5">
        <h2>Top List</h2>
        <section className="grid grid-cols-3 gap-4">
          <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">One Piece</h2>
              <p>Monkey D. Luffy se niega a permitir que nada ni nadie se interponga en su camino para convertirse en el Rey de los Piratas. Con sus poderes otorgados por la sobrenatural Fruta del Diablo, el joven y enérgico pirata busca el tesoro legendario conocido como One Piece. Él trazará un rumbo hacia las traicioneras aguas de Grand Line y reclutará un grupo variopinto para conformar sus Piratas de Sombrero de Paja. ¡Este es un capitán que nunca echará anclas hasta que él y sus amigos alcancen sus sueños!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
                <button className="btn btn-primary">Read</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/6e008ad5211c3998b8f3e4bc166821cd.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">My Hero Academia</h2>
              <p>En un mundo en el que la mayor parte de la población nace con un Don, una habilidad extraordinaria diferente en cada cual, no tardaron en aparecer tanto villanos como héroes dispuestos a detenerlos. Con el tiempo los héroes pasaron a ser funcionarios del gobierno, estando regulados y viviendo de su trabajo, además de convertirse en objeto de admiración de muchos. Ahora, ser héroe es el sueño de la gran mayoría de niños, que esperan desde muy pequeños a que su Don se manifieste para comenzar a entrenar y soñar con convertirse en los héroes número uno.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
                <button className="btn btn-primary">Read</button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};
