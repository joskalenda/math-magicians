/* eslint-disable max-len */
const Home = () => {
  const welcome = {
    padding: '20px 0',
    lineHeight: '1.5em',
    fontSize: '28px',
    color: 'antiquewhite',
    margin: '0 70px',
  };
  const para = {
    padding: '20px 0',
    lineHeight: '1.5em',
    fontSize: '18px',
    color: 'antiquewhite',
    margin: '0 70px',
  };

  return (
    <div>
      <h1 style={welcome}>Welcome to our blog!</h1>
      <p style={para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio fugiat debitis quia quod laborum officiis nam. Doloribus corrupti, veritatis accusamus autem nesciunt, nisi consequatur, laborum reprehenderit sequi itaque maxime.
        aliquam sapiente neque dicta asperiores reprehenderit accusamus, in, natus nesciunt cum, mollitia quis facere obcaecati perferendis voluptatibus. Itaque natus possimus, rerum facere quis ut?
      </p>
      <p style={para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio fugiat debitis quia quod laborum officiis nam. Doloribus corrupti, veritatis accusamus autem nesciunt, nisi consequatur, laborum reprehenderit sequi itaque maxime.
        At doloribus dignissimos itaque blanditiis expedita numquam odio eveniet repellat voluptatibus voluptatem non ratione, ea quas deleniti perspiciatis facere animi eius placeat obcaecati asperiores ex! Ex velit laboriosam praesentium numquam!
        Ea tenetur beatae inventore adipisci porro aliquam sapiente neque dicta asperiores reprehenderit accusamus, in, natus nesciunt cum, mollitia quis facere obcaecati perferendis voluptatibus. Itaque natus possimus, rerum facere quis ut?
      </p>
    </div>

  );
};

export default Home;
