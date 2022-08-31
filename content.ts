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
        logoUrl: '/avatar.png',
        email: 'wade.cooper@oslash.com'
      },
      {
        name: 'Arlene Mccoy',
        logoUrl: 'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg',
        email: 'arlene.mccoy@gmail.com'
      },
      {
        name: 'Tom cook',
        logoUrl: '/avatar.png',
        email: 'tom.cook@oslash.com'
      },
      {
        name: 'John E. Bowers',
        logoUrl: '/avatar.png',
        email: 'john.bowers@gmail.com'
      },
      {
        name: 'Glenn L. Harjo',
        logoUrl: '/avatar.png',
        email: 'glenn.harjo@oslash.com'
      },
      {
        name: 'Jennifer C. Beaty',
        logoUrl: '/avatar.png',
        email: 'jennifer.beaty@oslash.com'
      },
      {
        name: 'Toni B. Lacoste',
        logoUrl: '/avatar.png',
        email: 'toni.lacoste@oslash.com'
      },
      {
        name: 'Vernon K. Ward',
        logoUrl: '/avatar.png',
        email: 'vernon.ward@oslash.com'
      },
      {
        name: 'Michael B. Self',
        logoUrl: '/avatar.png',
        email: 'michael.self@oslash.com'
      },
      {
        name: 'Patrick S. Shreve',
        logoUrl: '/avatar.png',
        email: 'patrick.shreve@oslash.com'
      }
    ],
    group: [
      {
        name: 'Product',
        logoUrl: '/avatar.png'
      },
      {
        name: 'Engineering',
        logoUrl: '/avatar.png'
      },
      {
        name: 'Human Resource',
        logoUrl: '/avatar.png'
      },
      {
        name: 'Infrastructure',
        logoUrl: '/avatar.png'
      },
      {
        name: 'Supply Chain',
        logoUrl: '/avatar.png'
      }

    ]
  }
}
