const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};

export const documentDimensions = {
  mobileS: {
    paddingLeftRight: '22px',
    paddingTopBottom: '8px',
    headerHeight: '48px',
    headerTopBottomPadding: '24px',
  },
  tablet: {
    paddingLeftRight: '44px',
    paddingTopBottom: '12px',
    headerHeight: '64px',
    headerTopBottomPadding: '32px',
  },
  laptopL: {
    paddingLeftRight: '88px',
    paddingTopBottom: '24px',
    headerHeight: '64px',
    headerTopBottomPadding: '32px',
  }
}