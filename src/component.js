import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Background, Text, Map, SocialIcons, Button}, style: css} = this.props
    const onlyMap = !this.getModifierValue('title') &&
      !this.getModifierValue('heading') &&
      !this.getModifierValue('address') &&
      !this.getModifierValue('phone') &&
      !this.getModifierValue('email') &&
      !this.getModifierValue('social') &&
      !this.getModifierValue('button')

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <div className={css['map-wrapper']}>
            <div className={css.map}>
              <Map className={css.map__preview} bind="map" />
            </div>
          </div>
          {!onlyMap && (
            <Background tagName="div" className={css.contacts} bind="contactsBackground">
              {this.getModifierValue('title') && (
                <Text tagName="h1" className={css.title} bind="title" />
              )}
              {this.getModifierValue('heading') && (
                <Text tagName="h2" className={css.heading} bind="heading" />
              )}
              <ul className={css['contacts-list']}>
                {this.getModifierValue('address') && (
                  <li className={css['contacts-list__item']}>
                    <Text bind="address-content" className={classNames(css.contacts__desc, css['contacts__desc--adress'])} tagName="p" />
                  </li>
                )}
                {this.getModifierValue('phone') && (
                  <li className={css['contacts-list__item']}>
                    <Text bind="phone-link" className={classNames(css.contacts__desc, css['contacts__desc--phone'])} tagName="p" />
                  </li>
                )}
                {this.getModifierValue('email') && (
                  <li className={css['contacts-list__item']}>
                    <Text bind="email-link" className={classNames(css.contacts__desc, css['contacts__desc--email'])} tagName="p" />
                  </li>
                )}
              </ul>
              {this.getModifierValue('social') && (
                <SocialIcons className={css.socials} bind="socialIcons" />
              )}
              {this.getModifierValue('button') && (
                <Button
                  buttonClassName={css.button}
                  linkClassName={css.link}
                  bind="button"
                />
              )}
            </Background>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Background', 'Text', 'Map', 'SocialIcons', 'Button'])($editor.components)

Block.defaultContent = {
  contactsBackground: {
    type: 'color',
    color: '#fff',
  },
  title: {
    content: 'Contacts',
    type: 'blockTitle',
  },
  heading: {
    content: 'Head office',
    type: 'heading',
  },
  'address-content': {
    content: '45 Rockefeller Plaza, New York, NY 10111, USA',
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
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      padding: 20,
      color: '#676767',
      sizes: [10, 20, 30, 40],
      size: '40px',
    },
  },
  button: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    type: 'primary',
    textValue: 'Contact us',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Location title', type: 'checkbox'},
  address: {defaultValue: true, label: 'Location address', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
}

export default Block
