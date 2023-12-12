import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className='container mx-auto py-10'>
      <div className=''>
        <div className='align-center flex flex-wrap items-center justify-evenly rounded-lg border-2 border-blue p-2'>
          <div className='flex flex-col items-center justify-center p-5'>
            <h2 className='bg-blue bg-clip-text text-6xl font-extrabold text-transparent'>
              Hello!{' '}
            </h2>
            <h2 className='whitespace-nowrap border-b-2 border-blue bg-dark text-4xl font-extrabold text-light'>
              My Name is <span className='text-blue'>Charlie</span>
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
      <h3 className='mt-24 text-3xl font-bold text-light'>
        My{' '}
        <span className='bg-blue bg-clip-text text-transparent'>Projects</span>
      </h3>
      <div className='mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: Project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className='rounded-lg border-2 border-light p-1 transition hover:scale-105 hover:border-teal'
          >
            {project.image && (
              <div className='relative flex items-center justify-center rounded-md p-4'>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={200}
                  className='h-[200px] w-[400px] rounded-lg border border-dark object-contain object-cover'
                />
              </div>
            )}
            <div className='m-1 bg-light bg-clip-text pl-3 font-extrabold text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
