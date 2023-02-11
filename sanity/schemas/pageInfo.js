export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'useSinglePage',
      title: 'Use single page',
      type: 'boolean'
    },
    {
      name: 'maintenance',
      title: 'Under maintenance',
      type: 'boolean'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'typeWritterValue',
      title: 'Type writter value',
      type: 'string'
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string'
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }]
    }
  ]
};
