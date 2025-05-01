import heroBG from '../assets/images/Top-banner.jpg'
import mobileHeroBG from '../assets/images/Top-banner-mobile.jpg'

function HeroSection() {
    return (
      <>
      {/* Large Device */}
      <section className="relative w-full bg-cover bg-center py-20 hidden md:block" style={{ backgroundImage: `url(${heroBG})` }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className='bg-yellow-400 lg:w-2/5 md:w-2/3 p-10 rounded-xl'>
            <span className='text-lg uppercase' style={{fontFamily: "Gotham Book"}}>open 24 hours</span>
            <h1 className='text-5xl my-3' style={{fontFamily:"Expend Bold"}}>lou's coney island</h1>
            <p className='text-[1rem]' style={{fontFamily:"Gotham Book"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis laborum fugit quaerat magni, explicabo quasi doloribus voluptates, fuga autem dicta. Adipisci quam veniam aperiam!
            </p>
            <div className='flex gap-4 mt-5'>
              <button className='bg-white px-6 py-2 rounded-full cursor-pointer border border-transparent hover:border-black hover:bg-transparent transition duration-300 ease-in-out' style={{fontFamily: "Gotham Medium"}}>Explopre Menu</button>
              <button className='px-6 py-2 rounded-full cursor-pointer border border-black hover:bg-white hover:border-white transition duration-300 ease-in-out' style={{fontFamily: "Gotham Medium"}}>Get Direction</button>
            </div>
          </div>
        </div>
      </section>

      {/* Small Device */}
      <section className='md:hidden'>
        <div>
          <img src={mobileHeroBG} alt="Hero Banner" />
        </div>
        <div className='bg-yellow-400 p-10'>
            <span className='text-sm uppercase' style={{fontFamily: "Gotham Book"}}>open 24 hours</span>
            <h1 className='text-4xl my-3' style={{fontFamily:"Expend Bold"}}>lou's coney island</h1>
            <p className='text-[0.8rem]' style={{fontFamily:"Gotham Book"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis laborum fugit quaerat magni, explicabo quasi doloribus voluptates, fuga autem dicta. Adipisci quam veniam aperiam!
            </p>
            <div className='flex gap-4 mt-5'>
              <button className='text-sm bg-white px-6 py-2 rounded-full cursor-pointer border border-transparent hover:border-black hover:bg-transparent transition duration-300 ease-in-out' style={{fontFamily: "Gotham Medium"}}>Explopre Menu</button>
              <button className='text-sm px-6 py-2 rounded-full cursor-pointer border border-black hover:bg-white hover:border-white transition duration-300 ease-in-out' style={{fontFamily: "Gotham Medium"}}>Get Direction</button>
            </div>
          </div>
      </section>
      </>
    );
}
  
export default HeroSection;