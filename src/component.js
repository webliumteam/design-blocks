import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Logo, Text, Map, SocialIcons, Icon}, style} = this.props

    const textWithSocials = (
      !this.getModifierValue('logo') &&
      !this.getModifierValue('phone') &&
      !this.getModifierValue('email') &&
      !this.getModifierValue('map')
    ) && (this.getModifierValue('address') && this.getModifierValue('social'))

    const emailWithSocials = (
      !this.getModifierValue('logo') &&
      !this.getModifierValue('phone') &&
      !this.getModifierValue('address') &&
      !this.getModifierValue('map')
    ) && (this.getModifierValue('email') && this.getModifierValue('social'))

    const phoneWithSocials = (
      !this.getModifierValue('logo') &&
      !this.getModifierValue('email') &&
      !this.getModifierValue('address') &&
      !this.getModifierValue('map')
    ) && (this.getModifierValue('phone') && this.getModifierValue('social'))

    const mapWithSocials = (
      !this.getModifierValue('logo') &&
      !this.getModifierValue('phone') &&
      !this.getModifierValue('email') &&
      !this.getModifierValue('address')
    ) && (this.getModifierValue('map') && this.getModifierValue('social'))

    const onlyMap = !(
      this.getModifierValue('logo') ||
      this.getModifierValue('phone') ||
      this.getModifierValue('email') ||
      this.getModifierValue('address') ||
      this.getModifierValue('social')
    ) && this.getModifierValue('map')

    const title = <h1 className={style.title}><Text bind="title" /></h1>

    return (
      <section className={classNames(style.section, {
        [style['section--state-8']]: (textWithSocials || emailWithSocials || phoneWithSocials),
        [style['section--column']]: mapWithSocials})}
      >
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {!this.getOptionValue('title-in-contacts') && title}
          <div className={style.section__main}>
            {this.getModifierValue('map') && (
              <div className={style['map-wrapper']}>
                <div className={style.map}>
                  <Map className={style.map__preview} bind="map" />
                </div>
              </div>
            )}
            {!onlyMap && (
              <div className={style.contacts}>
                {this.getOptionValue('title-in-contacts') && title}
                {this.getModifierValue('logo') && (
                  <div className={style['logo-wrapper']}>
                    <Logo bind="logo" className={style.logo} textClassName={style.logo__title} />
                  </div>
                )}
                <ul className={style['contacts-list']}>
                  {this.getModifierValue('address') && (
                    <li className={style['contacts-list__item']}>
                      {!this.getOptionValue('hidden-address-title') && (
                        <h3 className={style.contacts__title}>
                          <Text bind="address-title" />
                        </h3>
                      )}
                      <p className={classNames(style.contacts__desc, style['contacts__desc--adress'])}>
                        <Text bind="address-content" />
                      </p>
                    </li>
                  )}
                  {this.getModifierValue('phone') && (
                    <li className={style['contacts-list__item']}>
                      {!this.getOptionValue('hidden-phone-title') && (
                        <h3 className={style.contacts__title}>
                          <Text bind="phone-title" />
                        </h3>
                      )}
                      <p className={classNames(style.contacts__desc, style['contacts__desc--phone'])}>
                        <Text bind="phone-link" />
                      </p>
                    </li>
                  )}
                  {this.getModifierValue('email') && (
                    <li className={style['contacts-list__item']}>
                      {!this.getOptionValue('hidden-email-title') && (
                        <h3 className={style.contacts__title}>
                          <Text bind="email-title" />
                        </h3>
                      )}
                      <p className={classNames(style.contacts__desc, style['contacts__desc--email'])}>
                        <Text bind="email-link" />
                      </p>
                    </li>
                  )}
                </ul>
                {this.getModifierValue('social') && (
                  <SocialIcons className={style.socials} bind="socialIcons" />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Logo', 'Text', 'Map', 'SocialIcons', 'Icon'])($editor.components)

Block.defaultContent = {
  title: 'Contacts',
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2',
    },
  },
  'address-title': 'Address',
  'phone-title': 'Phone',
  'email-title': 'E-mail',
  'address-content': 'Head office in London - 36 Regent St.',
  'phone-link': '<a href="tel:+1 (234) 567 89 00">+1 (234) 567 89 00</a>',
  'email-link': '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
  map: {
    preset: 'silver',
    height: '100%',
    center: {
      lat: 50.4589633,
      lng: 30.5247585,
    },
    zoom: 18,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: true,
    allowZoomOnScroll: false,
    markers: [
      {
        position: {
          lat: 50.4589633,
          lng: 30.5247585,
        },
        name: 'Address',
        description: 'This is marker description',
        address: 'Head office in London - 36 Regent St.',
        id: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      },
    ],
  },
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: '#9b9b9b',
      sizes: [10, 20, 30, 40],
      size: '30px',
    },
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  address: {defaultValue: true, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail text block', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Logo', type: 'checkbox'},
  map: {defaultValue: true, label: 'Map', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social Media Buttons', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
