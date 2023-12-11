import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
       <h2>My Projects:</h2>
       {projects.map((project: any) => (
        <div key={project._id}>
          {project.name}
        </div>
       ))}
    </div>
  )
}
