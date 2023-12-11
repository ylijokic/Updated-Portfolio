import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className='mx-auto max-w-5xl py-20'>
      <h2 className='text-7xl font-extrabold'>
        Hello I&apos;m{' '}
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          Charlie
        </span>
        !
      </h2>
      <p className='mt-3 text-xl text-gray-600'>Check out my Projects</p>
      <h3 className='mt-24 text-3xl font-bold text-gray-700'>Projects:</h3>
      <div className='mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: Project) => (
          <div
            key={project._id}
            className='rounded-lg border border-gray-500 p-3'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={500}
                className='rounded-lg border border-gray-500 object-cover'
              />
            )}
            <div className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold text-transparent'>
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
