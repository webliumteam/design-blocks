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
      !this.getModifierValue('phone') &&
      !this.getModifierValue('email') &&
      !this.getModifierValue('map')
    ) && (this.getModifierValue('address') && this.getModifierValue('social'))

    const emailWithSocials = (
      !this.getModifierValue('phone') &&
      !this.getModifierValue('address') &&
      !this.getModifierValue('map')
    ) && (this.getModifierValue('email') && this.getModifierValue('social'))

    const phoneWithSocials = (
      !this.getModifierValue('email') &&
      !this.getModifierValue('address') &&
      !this.getModifierValue('map')
    ) && (this.getModifierValue('phone') && this.getModifierValue('social'))

    const mapWithSocials = (
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

    const listWithSocials = (
      !this.getModifierValue('map') &&
      this.getModifierValue('social') && (
        this.getModifierValue('phone') ||
        this.getModifierValue('email') ||
        this.getModifierValue('address')
      )
    )

    const onlyList = !this.getModifierValue('map') &&
      !this.getModifierValue('social') && (
      this.getModifierValue('phone') ||
      this.getModifierValue('email') ||
      this.getModifierValue('address')
    )

    const blockHeader = [
      <Text bind="title" className={style.title} tagName="h1" />,
      this.getModifierValue('subtitle') && <Text bind="subtitle" className={style.subtitle} tagName="p" />,
    ]

    return (
      <section className={classNames(style.section, {
          [style['section--state-8']]: (textWithSocials || emailWithSocials || phoneWithSocials),
          [style['section--column']]: mapWithSocials,
          [style['section--state-3']]: listWithSocials,
          [style['section--state-4']]: onlyList,
          [style['section--state-11']]: this.getModifierValue('map-arrangement') === 'right',
        })}
      >
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {!this.getOptionValue('title-in-contacts') && blockHeader}
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
                {this.getOptionValue('title-in-contacts') && blockHeader}
                {this.getModifierValue('logo') && (
                  <div className={style['logo-wrapper']}>
                    <Logo
                      bind="logo"
                      className={style.logo}
                      textClassName={style.logo__title}
                      maxWidth={this.getOptionValue('logo-max-width')}
                      maxHeight={this.getOptionValue('logo-max-height')}
                    />
                  </div>
                )}
                <ul className={style['contacts-list']}>
                  {this.getModifierValue('address') && (
                    <li className={style['contacts-list__item']}>
                      {!this.getOptionValue('hidden-address-title') && (
                        <Text bind="address-title" className={style.contacts__title} tagName="h3" />
                      )}
                      <Text bind="address-content" className={classNames(style.contacts__desc, style['contacts__desc--adress'])} tagName="p" />
                    </li>
                  )}
                  {this.getModifierValue('phone') && (
                    <li className={style['contacts-list__item']}>
                      {!this.getOptionValue('hidden-phone-title') && (
                        <Text bind="phone-title" className={style.contacts__title} tagName="h3" />
                      )}
                      <Text bind="phone-link" className={classNames(style.contacts__desc, style['contacts__desc--phone'])} tagName="p" />
                    </li>
                  )}
                  {this.getModifierValue('email') && (
                    <li className={style['contacts-list__item']}>
                      {!this.getOptionValue('hidden-email-title') && (
                        <Text bind="email-title" className={style.contacts__title} tagName="h3" />
                      )}
                      <Text bind="email-link" className={classNames(style.contacts__desc, style['contacts__desc--email'])} tagName="p" />
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
  title: {
    content: 'Contacts',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Case nulla deserunt ut eos. Magna persecuti ut vis, ex legimus civibus complectitur mea. Sumo vitae definitionem in nam.',
    type: 'subtitle',
  },
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2',
      fontSize: 24,
    },
  },
  'address-title': {
    content: 'Address',
    type: 'heading',
  },
  'phone-title': {
    content: 'Phone',
    type: 'heading',
  },
  'email-title': {
    content: 'E-mail',
    type: 'heading',
  },
  'address-content': {
    content: 'Head office in London - 36 Regent St.',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:+1 (234) 567 89 00">+1 (234) 567 89 00</a>',
    type: 'text',
  },
  'email-link': {
    content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
    type: 'text',
  },
  map: {
    preset: 'silver',
    height: '100%',
    center: {
      lat: 51.509572,
      lng: -0.134223,
    },
    zoom: 18,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: true,
    allowZoomOnScroll: false,
    markers: [
      {
        position: {
          lat: 51.509572,
          lng: -0.134223,
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
      sizes: [20, 30, 40],
      size: 30,
    },
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  map: {defaultValue: true, label: 'Map', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Logo', type: 'checkbox'},
  address: {defaultValue: true, label: 'Address text block', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone text block', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail text block', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social Media Buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  'map-arrangement': {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Map arrangement',
    type: 'radio-button-group',
    style: 'buttons',
  },
}


export default Block
