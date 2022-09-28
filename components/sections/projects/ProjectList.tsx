import Project from '../../../shared/models/Project.model';
import ProjectItem from './project-item';

const ProjectList = () => {
  const projets: Project[] = [ {
    name: 'ESG-Core',
    img: 'https://sustainabilityknowledgegroup.com/wp-content/uploads/2021/10/ESG-LOGO-COLOR.jpg',
    description: 'Development of a ESG solution\n' +
                 '\n' +
                 ' - Refactoring the whole app architecture in order to have re-usable components\n' +
                 ' - Improving the performances of the app\n' +
                 ' - Implementation of the Redux pattern using NgRx\n' +
                 ' - @ngrx/entities\n' +
                 ' - @ngrx/store-components\n' +
                 ' - Development of a theme module with components matching the UX designer mocks',
    stacks: 'Angular - NgRx - TypeScript'
  },
    {
      name: 'ESG-Core',
      img: 'https://sustainabilityknowledgegroup.com/wp-content/uploads/2021/10/ESG-LOGO-COLOR.jpg',
      description: 'Development of a ESG solution\n' +
                   '\n' +
                   ' - Refactoring the whole app architecture in order to have re-usable components\n' +
                   ' - Improving the performances of the app\n' +
                   ' - Implementation of the Redux pattern using NgRx\n' +
                   ' - @ngrx/entities\n' +
                   ' - @ngrx/store-components\n' +
                   ' - Development of a theme module with components matching the UX designer mocks',
      stacks: 'Angular - NgRx - TypeScript'
    },
    {
      name: 'ESG-Core',
      img: 'https://sustainabilityknowledgegroup.com/wp-content/uploads/2021/10/ESG-LOGO-COLOR.jpg',
      description: 'Development of a ESG solution\n' +
                   '\n' +
                   ' - Refactoring the whole app architecture in order to have re-usable components\n' +
                   ' - Improving the performances of the app\n' +
                   ' - Implementation of the Redux pattern using NgRx\n' +
                   ' - @ngrx/entities\n' +
                   ' - @ngrx/store-components\n' +
                   ' - Development of a theme module with components matching the UX designer mocks',
      stacks: 'Angular - NgRx - TypeScript'
    },
    {
      name: 'ESG-Core',
      img: 'https://sustainabilityknowledgegroup.com/wp-content/uploads/2021/10/ESG-LOGO-COLOR.jpg',
      description: 'Development of a ESG solution\n' +
                   '\n' +
                   ' - Refactoring the whole app architecture in order to have re-usable components\n' +
                   ' - Improving the performances of the app\n' +
                   ' - Implementation of the Redux pattern using NgRx\n' +
                   ' - @ngrx/entities\n' +
                   ' - @ngrx/store-components\n' +
                   ' - Development of a theme module with components matching the UX designer mocks',
      stacks: 'Angular - NgRx - TypeScript'
    },
    {
      name: 'ESG-Core',
      img: 'https://sustainabilityknowledgegroup.com/wp-content/uploads/2021/10/ESG-LOGO-COLOR.jpg',
      description: 'Development of a ESG solution\n' +
                   '\n' +
                   ' - Refactoring the whole app architecture in order to have re-usable components\n' +
                   ' - Improving the performances of the app\n' +
                   ' - Implementation of the Redux pattern using NgRx\n' +
                   ' - @ngrx/entities\n' +
                   ' - @ngrx/store-components\n' +
                   ' - Development of a theme module with components matching the UX designer mocks',
      stacks: 'Angular - NgRx - TypeScript'
    },
    {
      name: 'ESG-Core',
      img: 'https://sustainabilityknowledgegroup.com/wp-content/uploads/2021/10/ESG-LOGO-COLOR.jpg',
      description: 'Development of a ESG solution\n' +
                   '\n' +
                   ' - Refactoring the whole app architecture in order to have re-usable components\n' +
                   ' - Improving the performances of the app\n' +
                   ' - Implementation of the Redux pattern using NgRx\n' +
                   ' - @ngrx/entities\n' +
                   ' - @ngrx/store-components\n' +
                   ' - Development of a theme module with components matching the UX designer mocks' +
                   ' - Development of a theme module with components matching the UX designer mocks' +
                   ' - Development of a theme module with components matching the UX designer mocks' +
                   ' - Development of a theme module with components matching the UX designer mocks' +
                   ' - Development of a theme module with components matching the UX designer mocks',
      stacks: 'Angular - NgRx - TypeScript'
    }
  ];

  return (
    <div className={ 'relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' +
                     ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin' +
                     ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#F7AB0A]/60 ' }>
      { projets.map((project: Project, index: number) => (
        <ProjectItem key={ index }
                     project={ project } />
      )) }
    </div>
  );
};

export default ProjectList;
