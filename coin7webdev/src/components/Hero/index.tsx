import bgimage from '../../assets/image (1).png'
import logo from '../../assets/logo 1.png'
import brand1 from '../../assets/image 4.png'
import brand2 from '../../assets/image 6.png'
import brand3 from '../../assets/image 9.png'
import brand4 from '../../assets/image 11.png'


const index = () => {
  return (
    <div className='bg-slate-700 px-12 py-10 flex flex-col gap-10 items-center'>
        {/* <div className='w-full h-[300px] bg-gray-700/90 relative'>
           <img className='w-full h-full object-cover mix-blend-overlay' src={bgimage} alt="" />
        </div> */}
        <div className='max-w-[1240px] mx-auto items-center flex gap-[50rem]'>
           <input type="text" name="seach" id="search" placeholder='search' className='p-4 rounded-full w-[40rem] outline-none'/>
        </div>
        <div className='flex flex-row gap-8'>
            <div className='bg-white h-[100%] p-2 rounded-xl'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </div>

            <div className='bg-white h-[100%] p-2 rounded-xl'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </div>

            <div className='bg-white h-[100%] p-2 rounded-xl'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </div>

            <div className='bg-white h-[100%] p-2 rounded-xl'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </div>

            <div className='bg-white h-[100%] p-2 rounded-xl'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </div>
        </div>

        <div className='absolute right-36 '>
            <img src={logo} alt="logo" /> 
        </div>
    </div>
  )
}

export default index