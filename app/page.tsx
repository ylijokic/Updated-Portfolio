import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className='container mx-auto py-20'>
      <h2 className='text-7xl font-extrabold text-eggshell'>
        Hello I&apos;m{' '}
        <span className='bg-orange bg-clip-text text-transparent'>Charlie</span>
      </h2>
      <h3 className='mt-24 text-3xl font-bold text-eggshell'>My Projects</h3>
      <div className='mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: Project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className='rounded-lg border border-eggshell p-1 transition hover:scale-105 hover:border-orange'
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
            <div className='m-1 bg-eggshell bg-clip-text pl-3 font-extrabold text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
