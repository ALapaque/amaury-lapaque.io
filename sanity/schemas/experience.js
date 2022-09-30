export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string'
    },
    {
      name: 'companyImage',
      title: 'Company image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'text'
    },
    {
      name: 'dateStarted',
      title: 'Date of start',
      type: 'date'
    },
    {
      name: 'dateEnded',
      title: 'Date of end',
      type: 'date'
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'Is currently working here',
      type: 'boolean'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
};
