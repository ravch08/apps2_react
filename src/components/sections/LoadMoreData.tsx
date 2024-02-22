import { useEffect, useState } from "react";

import { number, string, z } from "zod";
import { BackHome } from "../../utils/helper";

export const photoSchema = z.object({
  id: number().optional(),
  title: string().min(5, { message: "Atleast 5 characters are required!" }),
  url: string().url(),
});

export type photoProps = z.infer<typeof photoSchema>;

const LoadMoreData = () => {
  const [photos, setPhotos] = useState([]);
  const [photosPerLoad, setPhotosPerLoad] = useState(20);

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos`,
      );

      const data = await response.json();
      const requiredData = data.slice(0, 100);
      const photosOnLoad = requiredData.slice(0, photosPerLoad);
      setPhotos(photosOnLoad);
    }
    getPhotos();
  }, [photosPerLoad]);

  const loadMore = () => setPhotosPerLoad((prev) => prev + 20);

  return (
    <>
      <BackHome />
      <section aria-labelledby="Products Load More">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {photos.length === 0 ? (
              <h2 className="mt-5 font-bold">Loading...</h2>
            ) : null}
            {photos?.map((item: photoProps) => (
              <div className="w-[20%] bg-slate-100 p-4" key={item.id}>
                <img src={item.url} alt={item.title} />
                <h2 className="mt-4">{item.title}</h2>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={loadMore}
              className="btn-link mt-20"
              disabled={photos.length >= 100 ? true : false}
            >
              {photos.length >= 100 ? "No More to Load" : "Load More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadMoreData;
