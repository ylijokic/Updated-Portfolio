import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className='container mx-auto py-10'>
      <span className='mt-2 border-b-2 border-blue text-3xl font-bold text-light'>
        My Projects
      </span>
      <div className='mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: Project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className='rounded-lg border-2 border-light p-1 transition hover:scale-105 hover:border-blue hover:shadow-lg hover:shadow-teal'
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
