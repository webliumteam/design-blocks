import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Background, ContactForm, Text, Map, SocialIcons, Button}, style: css} = this.props

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <div className={css.contacts}>
            <Text tagName="h1" className={css.title} bind="title" />
            {this.getModifierValue('subtitle') && (
              <Text tagName="p" className={css.subtitle} bind="subtitle" />
            )}
            <ul className={css['contacts-list']}>
              {this.getModifierValue('address') && (
                <li className={css['contacts-list__item']}>
                  <Text bind="address-title" className={css.contacts__title} tagName="h2" />
                  <Text bind="address-content" className={classNames(css.contacts__desc, css['contacts__desc--address'])} tagName="p" />
                </li>
              )}
              {this.getModifierValue('hours') && (
                <li className={css['contacts-list__item']}>
                  <Text bind="hours-title" className={css.contacts__title} tagName="h2" />
                  <Text bind="hours-content" className={classNames(css.contacts__desc, css['contacts__desc--hours'])} tagName="p" />
                </li>
              )}
              {this.getModifierValue('contacts') && (
                <li className={css['contacts-list__item']}>
                  <Text bind="contacts-title" className={css.contacts__title} tagName="h2" />
                  <div className={css.contacts__desc}>
                    <Text bind="phone-link" className={css['contacts__desc--phone']} tagName="p" />
                    <Text bind="email-link" className={css['contacts__desc--email']} tagName="p" />
                    {this.getModifierValue('social') && (
                      <SocialIcons className={css.socials} bind="socialIcons" />
                    )}
                  </div>
                </li>
              )}
            </ul>
          </div>
          <Background className={css.form__wrapper} bind="formBackground">
            <ContactForm
              bind="contactForm"
              className={css.form}
              labelClassName={css.form__item}
              descriptionClassName={css['form__item-description']}
              fieldClassName={css.form__field}
              buttonClassName={css.form__button}
            />
          </Background>
        </div>
        {/* <div className={css['map-wrapper']}>
          <div className={css.map}>
            <Map className={css.map__preview} bind="map" />
          </div>
        </div> */}
      </section>
    )
  }
}

Wireframe.components = _.pick(['Background', 'ContactForm', 'Text', 'Map', 'SocialIcons', 'Button'])($editor.components)

Wireframe.defaultContent = {
  formBackground: {
    type: 'color',
    color: '#F0F0F0',
  },
  title: {
    content: 'Contacts Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'If you are planning on visiting us it’s advisable to call ahead for and appointment. We got some beer in case you need to wait.',
    type: 'subtitle',
  },
  'address-title': {
    content: 'Address',
    type: 'heading',
  },
  'hours-title': {
    content: 'Hours',
    type: 'heading',
  },
  'contacts-title': {
    content: 'Contacts',
    type: 'heading',
  },
  'address-content': {
    content: '3611 Silas Trail Suite 927<br>Port Yasmeenland, PY 20061',
    type: 'text',
  },
  'hours-content': {
    content: 'Monday - Saturday:   11 AM - 9 PM<br>Sunday:   11 AM - 7 PM',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:(222) 111 11 11">(222) 111 11 11</a>',
    type: 'text',
  },
  'email-link': {
    content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
    type: 'text',
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
      offset: 24,
      color: '#676767',
      sizes: [10, 20, 30, 40],
      size: 40,
    },
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'Enter your full name*',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'Enter your phone number*',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '',
        placeholder: 'Enter your e-mail*',
        required: true,
      },
      {
        type: 'textArea',
        id: 'contactForm_textarea',
        title: '',
        placeholder: 'Type your message',
        required: false,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
    },
    className: 'form',
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
}

Wireframe.modifierScheme = {
  heading: {defaultValue: true, label: 'Location title', type: 'checkbox'},
  address: {defaultValue: true, label: 'Location address', type: 'checkbox'},
  hours: {defaultValue: true, label: 'Working hours', type: 'checkbox'},
  contacts: {defaultValue: true, label: 'E-mail', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social Media Buttons', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default Wireframe
