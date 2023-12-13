import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className='container mx-auto py-20'>
      <header className='flex items-center justify-between'>
        <h1 className='mt-2 border-b-2 border-blue text-3xl font-bold text-light'>
          {project.name}
        </h1>
        <div className='items-center space-x-4 md:flex'>
          <Link
            className='rounded-lg border border-light p-2 text-lg text-light transition hover:border-blue hover:shadow-md hover:shadow-teal'
            href={project.url}
            title='View GitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub Code
          </Link>
          {project.urlTwo && (
            <Link
              className='rounded-lg border border-light p-2 text-lg text-light transition hover:border-blue hover:shadow-md hover:shadow-teal'
              href={project.urlTwo}
              title='View Project'
              target='_blank'
              rel='noopener noreferrer'
            >
              Deployed Project
            </Link>
          )}
        </div>
      </header>
      <div className='mt-5 text-lg text-light'>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className='mt-10 rounded-lg border-2 border-blue object-cover p-2 shadow-md shadow-blue'
      ></Image>
    </div>
  );
}
