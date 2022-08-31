export const share = {
  shareBtn: 'Share',
  modal1: {
    header: {
      logoUrl: '/globeIcon.svg',
      title: 'Share to web',
      subtitle: 'Publish and share link with anyone'
    },
    inputField: {
      input: {
        placeholder: 'People, emails, groups'
      },
      invite: 'Invite'
    },
    footer: {
      about: {
        logoUrl: '/question.svg',
        ctaText: 'learn about sharing',
        ctaUrl: 'https://www.google.com/'
      },
      copyLink: {
        logoUrl: '/copyLink.svg',
        ctaText: 'Copy link'
      }
    }
  }

}

export const bookmarked = {
  profileInfo: {
    variant: 'medium',
    logoUrl: '/oSlashLogo.svg',
    name: 'Everyone at OSlash',
    description: '25 workspace members'
  },
  dropdown: {
    textVariant: 'caption',
    options: [
      'Full access',
      'Can edit',
      'Can view',
      'No access'
    ]
  }
}

export const searchWindowHeader = {
  inputField: {
    placeholder: 'Search emails, names or groups'
  },
  dropdown: {
    options: [
      'Full access',
      'Can edit',
      'Can view',
      'No access'
    ],
    size: 'small'
  },
  button: 'Invite'
}

export const searchWindow = {
  header: {
    ...searchWindowHeader
  },
  footer: {
    about: {
      logoUrl: '/question.svg',
      ctaText: 'learn about sharing',
      ctaUrl: 'https://www.google.com/'
    }
  }
}

export const searchResults = {
  entity: {
    person: [
      {
        name: 'Wade Cooper',
        logoUrl: '/Avatar.png',
        email: 'wade.cooper@oslash.com'
      },
      {
        name: 'Arlene Mccoy',
        logoUrl: 'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg',
        email: 'arlene.mccoy@gmail.com'
      },
      {
        name: 'Tom cook',
        logoUrl: '/Avatar.png',
        email: 'tom.cook@oslash.com'
      },
      {
        name: 'John E. Bowers',
        logoUrl: '/Avatar.png',
        email: 'john.bowers@gmail.com'
      },
      {
        name: 'Glenn L. Harjo',
        logoUrl: '/Avatar.png',
        email: 'glenn.harjo@oslash.com'
      },
      {
        name: 'Jennifer C. Beaty',
        logoUrl: '/Avatar.png',
        email: 'jennifer.beaty@oslash.com'
      },
      {
        name: 'Toni B. Lacoste',
        logoUrl: '/Avatar.png',
        email: 'toni.lacoste@oslash.com'
      },
      {
        name: 'Vernon K. Ward',
        logoUrl: '/Avatar.png',
        email: 'vernon.ward@oslash.com'
      },
      {
        name: 'Michael B. Self',
        logoUrl: '/Avatar.png',
        email: 'michael.self@oslash.com'
      },
      {
        name: 'Patrick S. Shreve',
        logoUrl: '/Avatar.png',
        email: 'patrick.shreve@oslash.com'
      }
    ],
    group: [
      {
        name: 'Product',
        logoUrl: '/Avatar.png'
      },
      {
        name: 'Engineering',
        logoUrl: '/Avatar.png'
      },
      {
        name: 'Human Resource',
        logoUrl: '/Avatar.png'
      },
      {
        name: 'Infrastructure',
        logoUrl: '/Avatar.png'
      },
      {
        name: 'Supply Chain',
        logoUrl: '/Avatar.png'
      }

    ]
  }
}
