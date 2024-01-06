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
        <p className='py-10 text-xl text-light text-center'>
          My name is Charlie Ylijoki and I'm a Software Engineer specializing in Frontend and Full-stack web development.
          I studied Computer Science at Oregon State University and I have 3 years of professional experience working with technologies such as TypeScript, React, Angular, HTML/CSS, and Java Spring Boot.
          <br />
          <br />
          I love Software Engineering because there are endless learning
          opportunities. It's amazing to be able to learn a new technology and
          apply that knowledge to create a unique application. I also really
          enjoy the collaborative nature of working on a software development
          team.
          <br />
          <br />
          Take a look at some of my projects and my GitHub page.
          Also, feel free to connect with me on LinkedIn or reach out if you think I would be
          a good fit for your team.
          <br />
          <br />
          <br />
          Thank you for visiting my website!
        </p>
      </div>
    </div>
  );
}
