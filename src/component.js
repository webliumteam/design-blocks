import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Logo, Text, Map, SocialIcons, Button}, style} = this.props

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

    return (
      <section className={classNames(style.section, {
        [style['section--state-8']]: (textWithSocials || emailWithSocials || phoneWithSocials),
        [style['section--column']]: mapWithSocials})}
      >
        <div className={style.section__inner}>
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          <div className={style.section__main}>
            {this.getModifierValue('map') && (
              <div className={style['map-wrapper']}>
                <div className={style.map}>
                  <Map className={style.map__preview} bind="map" />
                </div>
              </div>
            )}
            <div className={style.contacts}>
              {this.getModifierValue('logo') && (
                <div className={style['logo-wrapper']}>
                  <Logo bind="logo" className={style.logo} textClassName={style.logo__title} />
                </div>
              )}
              <ul className={style['contacts-list']}>
                {this.getModifierValue('address') && (
                  <li className={style['contacts-list__item']}>
                    <h3 className={style.contacts__title}>
                      <Text bind="address-title" />
                    </h3>
                    <p className={style.contacts__desc}>
                      <Text bind="address-content" />
                    </p>
                  </li>
                )}
                {this.getModifierValue('phone') && (
                  <li className={style['contacts-list__item']}>
                    <h3 className={style.contacts__title}>
                      <Text bind="phone-title" />
                    </h3>
                    <p className={style.contacts__desc}>
                      <Button bind="phone-link" />
                    </p>
                  </li>
                )}
                {this.getModifierValue('email') && (
                  <li className={style['contacts-list__item']}>
                    <h3 className={style.contacts__title}>
                      <Text bind="email-title" />
                    </h3>
                    <p className={style.contacts__desc}>
                      <Button bind="email-link" />
                    </p>
                  </li>
                )}
              </ul>
              {this.getModifierValue('social') && (
                <SocialIcons className={style.socials} bind="socialIcons" />
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Logo', 'Text', 'Map', 'SocialIcons', 'Button'])($editor.components)

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
  'phone-link': {
    actionConfig: {
      action: 'external',
      actions: {
        external: {
          url: 'tel:+12345678900',
        },
      },
    },
    textValue: '+1 (234) 567 89 00',
  },
  'email-link': {
    actionConfig: {
      action: 'external',
      actions: {
        external: {
          url: 'mailto:mysite@weblium.com',
        },
      },
    },
    textValue: 'mysite@weblium.com',
  },
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
      marginRight: 15,
      color: '#9B9B9B',
      sizes: [10, 20, 30, 40],
      size: '30px',
    },
  },
}

Block.modifierScheme = [
  {
    id: 'map',
    type: 'checkbox',
    label: 'Map',
    defaultValue: true,
  },
  {
    id: 'logo',
    type: 'checkbox',
    label: 'Logo',
    defaultValue: true,
  },
  {
    id: 'phone',
    type: 'checkbox',
    label: 'Phone text block',
    defaultValue: true,
  },
  {
    id: 'email',
    type: 'checkbox',
    label: 'E-mail text block',
    defaultValue: true,
  },
  {
    id: 'address',
    type: 'checkbox',
    label: 'Address text block',
    defaultValue: true,
  },
  {
    id: 'social',
    type: 'checkbox',
    label: 'Social Media Buttons',
    defaultValue: true,
  },
]

export default Block
