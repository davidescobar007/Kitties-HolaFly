import { ReactElement } from 'react';
type Props = {
  kittensNumber: number;
};
export default function Stat({ kittensNumber }: Props): ReactElement {
  return (
    <div className="stats shadow my-7">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img alt="cat image" src="/cat3.jpg" />
            </div>
          </div>
        </div>
        <div className="stat-value">{kittensNumber} cats</div>
        <div className="stat-title">To be addopted</div>
        <div className="stat-desc text-secondary">And looking for home</div>
      </div>
    </div>
  );
}
