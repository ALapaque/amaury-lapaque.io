export default {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    {
      name: 'darkMode',
      title: 'Dark mode',
      description: 'Set dark mode',
      type: 'boolean'
    },
    {
      name: 'darkPrimary',
      title: 'Dark primary',
      description: 'Primary color of the website dark-mode',
      type: 'color'
    },
    {
      name: 'darkBackground',
      title: 'Dark background',
      description: 'Background color of the website dark-mode',
      type: 'color'
    },
    {
      name: 'darkText',
      title: 'Dark Text',
      description: 'Text color of the website dark-mode',
      type: 'color'
    },
    {
      name: 'lightPrimary',
      title: 'Light primary',
      description: 'Primary color of the website light-mode',
      type: 'color'
    },
    {
      name: 'lightBackground',
      title: 'Light background',
      description: 'Background color of the website dark-mode',
      type: 'color'
    },
    {
      name: 'lightText',
      title: 'Light Text',
      description: 'Text color of the website dark-mode',
      type: 'color'
    }
  ]
};
