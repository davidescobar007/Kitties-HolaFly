import { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export default function Form({ ...rest }: Props): ReactElement {
  return (
    <div className="flex justify-center">
      <div className="bg-white flex p-3  rounded-xl my-10">
        <input
          {...rest}
          type="text"
          placeholder="Search a cat"
          className="input w-full max-w-xs"
        />
        <button className="btn btn-circle ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
