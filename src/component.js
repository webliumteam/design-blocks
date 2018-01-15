import $editor from 'weblium/editor'
import css from './style.css'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
  }

  getModifierValue = (path) => _.get(['modifier', path], this.props.$block)



  render() {
    const {components: {Logo, Text, Map, SocialIcons}} = this.props

    const textWithSocials = !(
      this.getModifierValue('logo') ||
      this.getModifierValue('phone') ||
      this.getModifierValue('email') ||
      this.getModifierValue('socialIcons')
    )

    return (
      <section className={classNames(css.section, {[css['section--state-8']]: textWithSocials})}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          <div className={css.section__main}>
            {this.getModifierValue('map') && <div className={css['map-wrapper']}>
              <div className={css.map}>
                <Map className={css.map__preview} bind="map" />
              </div>
            </div>}
            <div className={css.contacts}>
              {this.getModifierValue('logo') && <div className={css['logo-wrapper']}>
                <Logo bind="logo" className={css.logo} textClassName={css.logo__title} />
              </div>}
              <ul className={css['contacts-list']}>
                <li className={css['contacts-list__item']}>
                  <h3 className={css.contacts__title}>
                    <Text bind="address-title" />
                  </h3>
                  <p className={css.contacts__desc}>
                    <Text bind="address-content" />
                  </p>
                </li>
                {this.getModifierValue('phone') && <li className={css['contacts-list__item']}>
                  <h3 className={css.contacts__title}>
                    <Text bind="phone-title" />
                  </h3>
                  <p className={css.contacts__desc}>
                    <Text bind="phone-content" />
                  </p>
                </li>}
                {this.getModifierValue('email') && <li className={css['contacts-list__item']}>
                  <h3 className={css.contacts__title}>
                    <Text bind="email-title" />
                  </h3>
                  <p className={css.contacts__desc}>
                    <Text bind="email-content" />
                  </p>
                </li>}
              </ul>
              {this.getModifierValue('social') && <SocialIcons className={css.socials} bind="socialIcons" />}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Logo', 'Text', 'Map', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  title: 'Contacts',
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2'
    },
  },
  'address-title': 'Address',
  'phone-title': 'Phone',
  'email-title': 'E-mail',
  'address-content': 'Head office in London - 36 Regent St.',
  'phone-content': '+1 (234) 567 89 00',
  'email-content': 'mysite@weblium.com',
  map: {
    preset: 'default',
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
        name: 'Best Marker',
        description: 'This is marker description',
        address: 'Kiev Poshtova Ploshcha',
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
      marginRight: 20,
      color: '',
      sizes: [10, 20, 30, 40],
      size: '40px',
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
    id: 'social',
    type: 'checkbox',
    label: 'Social Media Buttons',
    defaultValue: true,
  },
]

export default Block