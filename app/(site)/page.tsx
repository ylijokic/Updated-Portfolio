import Image from 'next/image';

export default async function Home() {
  return (
    <div className='container mx-auto py-10'>
      <div className=''>
        <div className='align-center flex flex-wrap items-center justify-evenly rounded-lg border-2 border-blue p-2 shadow-md shadow-blue'>
          <div className='flex flex-col items-center justify-center p-5'>
            <h2 className='bg-blue bg-clip-text text-6xl font-extrabold text-transparent'>
              Hello!{' '}
            </h2>
            <h2 className='whitespace-nowrap border-b-2 border-blue bg-dark text-4xl font-extrabold text-light'>
              My Name is Charlie
            </h2>
          </div>
          <Image
            src='/portrait.jpg'
            alt='Charlie Ylijoki'
            width={400}
            height={200}
            className='rounded-lg'
          />
        </div>
        <p className='py-10 text-xl text-light'>
          I studied Computer Science at Oregon State University and I am most
          interested in Frontend/Full Stack Web Development and Mobile
          Development.
          <br />
          <br />
          I love Software Engineering because there are endless learning
          opportunities. It's amazing to be able to learn a new technology and
          apply that knowledge to create a unique application. I also really
          enjoy the collaborative nature of working on a software development
          team.
          <br />
          <br />
          Take a look at some of my projects, my github page and my blog posts.
          Also, connect with me on LinkedIn or reach out if you think I would be
          a good fit for your team. Thank you for visiting my website!
        </p>
      </div>
    </div>
  );
}
