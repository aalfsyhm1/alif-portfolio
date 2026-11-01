import type { Project } from '../data/projects';
import { ExtLink, Placeholder, Tags } from './ui';

export function ProjectCard({ project }: { project: Project }) {
  const { featured, inProgress } = project;
  return (
    <article className={`card rise ${featured ? 'card-feature' : 'card-col'}`}>
      <Placeholder className={featured ? 'feature-media' : 'card-media'}>{project.media}</Placeholder>
      <div className={featured ? 'feature-body' : 'card-body'}>
        <div className="kicker">
          {inProgress && <span className="dot" aria-hidden="true" />}
          {project.kicker}
        </div>
        {featured ? <h3 className="card-title lg">{project.title}</h3> : <h3 className="card-title">{project.title}</h3>}
        <p className="card-text">{project.blurb}</p>
        <Tags items={project.tags} />
        {project.link && (
          <div className="text-link push">
            <ExtLink href={project.link.href}>{project.link.label}</ExtLink>
          </div>
        )}
      </div>
    </article>
  );
}
