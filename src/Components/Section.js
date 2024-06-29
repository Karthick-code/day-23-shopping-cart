import { Card } from './Card';

export function Section({ count, setCount, details }) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {details.map((y, index) => 
            <Card
              count={count}
              setCount={setCount}
              key={index}
              name={y.name}
              price={y.price}
              rating={y.rating}
              poster={y.poster} 
              />
            )}
          </div>
        </div>
      </section>

    </>

  );
}
