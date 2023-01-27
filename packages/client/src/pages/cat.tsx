import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/loader';
import Motion from '../components/motion';
import Title from '../components/title';
import { CatState } from '../features/cat';
import { useGetSingleKittenQuery } from '../serviceApi/kittensApi';

export default function CatProfile(): ReactElement {
  const { id } = useParams();
  const emptyData: CatState = {
    age: '',
    description: '',
    gender: '',
    id: null,
    imageFileName: '',
    name: '',
  };
  const { data: kitty = emptyData, isLoading } = useGetSingleKittenQuery(id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Motion extraClassName="flex max-w-xl">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <div className="avatar">
                <div className="w-44 rounded-full mt-6">
                  <img src={`/${kitty.imageFileName}`} alt="Movie" />
                </div>
              </div>
            </figure>
            <div className="card-body">
              <Title extraClassName="font-extrabold text-3xl" type="h2">
                <>{kitty.name}</>
              </Title>
              <div className="card-actions justify-start">
                <div className="badge badge-secondary">{kitty.age}</div>
                <div className="badge badge-primary">{kitty.gender}</div>
              </div>
              <p>{kitty.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Addopt me ❤️</button>
              </div>
            </div>
          </div>
        </Motion>
      )}
    </>
  );
}
