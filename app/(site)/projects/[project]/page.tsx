import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className='container mx-auto py-20'>
      <header className='flex items-center justify-between'>
        <h1 className='bg-teal bg-clip-text text-3xl text-transparent'>
          {project.name}
        </h1>
        <a
          className='whitespace-nowrap rounded-lg border border-dark p-2 text-light transition hover:border-teal'
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Project
        </a>
      </header>
      <div className='mt-5 text-lg text-light'>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className='mt-10 rounded-xl border-2 object-cover'
      ></Image>
    </div>
  );
}
