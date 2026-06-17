import IdeaCard from '@/components/IdeaCard';
import SearchSection from '@/components/SearchSection';
const page = async () => {
    const res = await fetch("http://localhost:5000/allcollections");
    const data = await res.json();
  return (
    <div>
      <h1 className='text-2xl md:text-3xl font-bold text-center mt-8'>Explore Innovative Ideas</h1>
      <h2 className='text-md md:text-lg text-gray-500 text-center mt-2'>Discover creative startup concepts, share your feedback, and help shape ideas into successful ventures.</h2>
      <SearchSection />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
        {
        data.map(idea => <IdeaCard key={idea._id} idea={idea} />)
      }
      </div>
      
     
    </div>
  )
}

export default page
