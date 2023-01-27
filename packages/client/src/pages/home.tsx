import { ReactElement } from 'react';

import Card from '../components/card';
import Loader from '../components/loader';
import Stat from '../components/stat';
import Title from '../components/title';
import { CatState } from '../features/cat';
import { useGetkittensQuery } from '../serviceApi/kittensApi';

export default function Home(): ReactElement {
  const { data: kittenList = [], isLoading } = useGetkittensQuery('');

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <Title
            type="h1"
            extraClassName="text-primary text-4xl my-10 font-extrabold text-center"
          >
            My Cats
          </Title>
          <div className="avatar-group space-x-5 flex justify-center my-3">
            <Stat kittensNumber={kittenList.length} />
          </div>
          <div className="flex flex-wrap justify-center">
            {kittenList.map((item: CatState) => (
              <Card
                key={item.id}
                age={item.age}
                description={item.description}
                name={item.name}
                image={item.imageFileName}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
