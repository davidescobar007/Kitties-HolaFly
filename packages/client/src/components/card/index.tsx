import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Motion from '../motion';

type Props = {
  name: string;
  description: string;
  age: string;
  image: string;
};

export default function Card({
  image,
  name,
  description,
  age,
}: Props): ReactElement {
  return (
    <Motion extraClassName="card max-w-xs md:w-2/4 bg-base-100 shadow-xl m-5">
      <div data-testid="catCard">
        <figure className="px-5 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body -m-2 py-5">
          <div className="card-actiohns flex justify-between">
            <h2 className="card-title">{name}</h2>
            <div className="badge badge-secondary mt-1">{age}</div>
          </div>
          <p className="card-truncate w-full text-justify">{description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/cat/profile/${name}`}
              role="button"
              className="btn btn-primary"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </Motion>
  );
}
