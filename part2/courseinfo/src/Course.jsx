const Header = ({ text }) => <h2>{text}</h2>;

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((p) => (
      <Part key={p.id} part={p.name} exercises={p.exercises} />
    ))}
  </>
);

const Total = ({ total }) => <p>Number of exercises {total}</p>;

export const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <div>
      <Header text={name} />
      <Content parts={parts} />
      <Total total={parts.reduce((acc, part) => acc + part.exercises, 0)} />
    </div>
  );
};
