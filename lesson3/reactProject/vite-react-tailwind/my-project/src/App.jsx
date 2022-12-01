import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>Yuasys</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi!<br />
              I'm Yu<br />
              Web Developper Gorilla.
            </h1>
            <p className='mb-8 leading-relaxed'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe facere aliquid nihil similique voluptates libero, perferendis dicta error sequi?
            </p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/icon.jpg" alt />
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About me</h1>
            <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni error fugiat quo repellendus, doloremque aperiam dignissimos omnis quod eum.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum quam architecto assumenda aut praesentium! Sint laboriosam accusamus assumenda sapiente quia consectetur quos ratione consequatur illo sed dolore soluta consequuntur, inventore enim, eos error eaque cupiditate! Adipisci odio nulla quia ipsum, voluptatibus sed eligendi vel praesentium, accusamus ducimus dolorem iste earum. Voluptatum culpa aspernatur quia, distinctio odio nisi sint, modi rem at accusantium deleniti! Officiis velit libero magni sit. Esse modi explicabo aliquam, ducimus amet perspiciatis eaque, rerum laudantium reiciendis voluptas corrupti temporibus! Voluptas vel est quos distinctio. Omnis, id eligendi rerum vel enim nihil ipsam cumque tempora recusandae dolorem.</p>
          </div>

          {/*カードのdivタグ*/}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z"
    fill="currentColor"
  />
</svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developper</h2>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis id non minus illum aut, explicabo officia nihil temporibus aliquid.</p>
                  <a className='flex mt-3 text-green-500 items-center' href="#">もっと見る
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z"
    fill="currentColor"
  />
</svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developper</h2>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis id non minus illum aut, explicabo officia nihil temporibus aliquid.</p>
                  <a className='flex mt-3 text-green-500 items-center' href="#">もっと見る
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z"
    fill="currentColor"
  />
</svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developper</h2>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis id non minus illum aut, explicabo officia nihil temporibus aliquid.</p>
                  <a className='flex mt-3 text-green-500 items-center' href="#">もっと見る
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/*left side*/}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="pc" className='rounded'/>
          </div>

          {/*right side*/}
          <div className='lg:pl-12 py-6 w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10'>My Skills</h1>
            <div className='w-full'>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"85%" }}>85%</div>
              </div>
            </div>
            <div className='w-full'>
              <h2>CSS</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"75%" }}>75%</div>
              </div>
            </div>
            <div className='w-full'>
              <h2>Javascript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"80%" }}>80%</div>
              </div>
            </div>
            <div className='w-full'>
              <h2>PHP</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"70%" }}>70%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
