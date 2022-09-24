import Project from '../../../../shared/models/Project.model';

interface Props {
  project: Project
}

const ProjectDetails = ({project}: Props) => {
  return (
    <div className={ 'space-y-10 px-0 md:px-10 max-w-6xl' }>
      <h4 className={ 'text-4xl font-semibold text-center' }>{ project.name }</h4>
      <p className={ 'text-lg text-center md:text-left' }>{ project.description }</p>
      <p className={ 'text-sm text-right font-bold' }>{ project.stacks }</p>
    </div>
  )
}

export default ProjectDetails
