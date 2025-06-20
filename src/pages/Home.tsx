import Card from "../components/Card";
import "../App.css";

const Home = () => {
  return (
    <main className='min-h-screen bg-gray-950 text-white py-16 px-6 flex justify-center items-start'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full'>
        <Card
          image='./saga.jpg'
          name='Films'
          description='Experience the epic Star Wars saga that spans generations and galaxies.'
          link='/films'
        />
        <Card
          image='./species.jpg'
          name='Species'
          description='Discover the diverse beings that populate the Star Wars universe.'
          link='/species'
        />
        <Card
          image='./people.jpg'
          name='People'
          description='Meet the heroes, villains, and legends who shape the galaxy’s fate.'
          link='/people'
        />
        <Card
          image='./planets.jpg'
          name='Planets'
          description='Explore the exotic worlds and planets across the Star Wars galaxy.'
          link='/planets'
        />
        <Card
          image='./starships.png'
          name='Starships'
          description='Get to know the iconic starships that soar through the stars.'
          link='/starships'
        />
        <Card
          image='./vehicles.png'
          name='Vehicles'
          description='Discover the powerful vehicles used in battles and travels across the galaxy.'
          link='/vehicles'
        />
      </div>
    </main>
  );
};

export default Home;
