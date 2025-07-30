
import { Link } from 'react-router';
import errorIcon from '../assets/rocket-icon.png';

const ErrorPage = ({message="Page not found", code=404}) => {
   return (
      <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-5">
         <img src={errorIcon} alt="Rocket Icon" />
         <h1 className='text-4xl font-bold to-gray-700'>{message}</h1>
         <p className='text-[#21272A] md:w-2/3 w-full mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam necessitatibus exercitationem culpa error atque, voluptas, repellat sunt aut similique iure consequatur magni perferendis numquam enim ex reprehenderit nostrum. Nihil aspernatur vitae error eligendi, eos velit reprehenderit maiores placeat aliquid modi dolorum odio voluptas necessitatibus maxime voluptate explicabo obcaecati minima totam?</p>
         <Link to="/" className=' btn btn-primary'>Go to Home</Link>
      </div>
   )
}

export default ErrorPage;