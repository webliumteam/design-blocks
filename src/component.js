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

  collectionItem = planIndex => ({index, children, className}) => {
    const {components: {Text}, style} = this.props
    return (
      <li className={classNames(style['plan__list-item'], className)}>
        {children}
        <Text bind={`plan-list-${planIndex}[${index}].text`} />
      </li>
    )
  }

  planHeader = (itemNumber) => {
    const {components: {Text, Icon}, style} = this.props
    return [
      <h2 className={style.plan__title}>
        <Text bind={`plan-title-${itemNumber}`} />
      </h2>,
      this.getModifierValue('plan-icon') && (
        <div className={style['plan__icon-wrapper']}>
          <Icon bind={`plan-icon-${itemNumber}`} />
        </div>
      ),
      this.getModifierValue('plan-price') && (
        <p className={style.plan__price}>
          <strong className={style['plan__price-count']}>
            <Text bind={`plan-price-count-${itemNumber}`} />
          </strong>
          {this.getModifierValue('plan-additional-info') && (
            <span className={style['plan__price-text']}>
              <Text bind={`plan-price-text-${itemNumber}`} />
            </span>
          )}
        </p>
      ),
    ]
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, $block: {options}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {this.getModifierValue('block-title') && (
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="description" />
            </p>
          )}
          <div className={style['plans-wrapper']}>
            <article className={style.plan}>
              {this.getOptionValue('price-wrapper') ? (<div className={style['price-wrapper']}>{this.planHeader('1')}</div>) : this.planHeader('1')}
              {this.getModifierValue('plan-description') && (
                <Collection
                  className={style.plan__list}
                  TagName="ul"
                  bind="plan-list-1"
                  Item={this.collectionItem('1')}
                />
              )}
              {this.getModifierValue('plan-button') && (
                <Button
                  className={classNames(
                    style.button,
                    style['button--primary'],
                    style['button--size-sm'],
                    style.plan__button,
                  )}
                  bind="plan-cta-1"
                />
              )}
            </article>
            <article className={classNames(style.plan, style['plan--main'])}>
              {this.getOptionValue('price-wrapper') ? (<div className={style['price-wrapper']}>{this.planHeader('2')}</div>) : this.planHeader('2')}
              {this.getModifierValue('plan-description') && (
                <Collection
                  className={style.plan__list}
                  TagName="ul"
                  bind="plan-list-2"
                  Item={this.collectionItem('2')}
                />
              )}
              {this.getModifierValue('plan-button') && (
                <Button
                  className={classNames(
                    style.button,
                    style['button--primary'],
                    style['button--size-md'],
                    style.plan__button,
                  )}
                  bind="plan-cta-2"
                />
              )}
            </article>
            <article className={style.plan}>
              {this.getOptionValue('price-wrapper') ? (<div className={style['price-wrapper']}>{this.planHeader('3')}</div>) : this.planHeader('3')}
              {this.getModifierValue('plan-description') && (
                <Collection
                  className={style.plan__list}
                  TagName="ul"
                  bind="plan-list-3"
                  Item={this.collectionItem('3')}
                />
              )}
              {this.getModifierValue('plan-button') && (
                <Button
                  className={classNames(
                    style.button,
                    style['button--primary'],
                    style['button--size-sm'],
                    style.plan__button,
                  )}
                  bind="plan-cta-3"
                />
              )}
            </article>
          </div>
          {this.getModifierValue('additional-btn') && (
            <div className={style['btns-group']}>
              <Button
                className={classNames(
                  style.button,
                  style['button--secondary'],
                  style['button--size-md'],
                )}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  'plan-list-1': [
    {
      id: 'f94f2f82-0727-4237-9f19-97a34f210e55',
      text: '100 Max Connections',
    },
    {
      id: '51b10491-1f3f-4a36-ac3f-e295f010589a',
      text: '3 features',
    },
    {
      id: '0e123e72-fccb-48d7-ba4f-5107126f7fd3',
      text: '10 requests per month',
    },
  ],
  'plan-list-2': [
    {
      id: '8dc2c1fe-f6ef-455d-bf2f-4ecd45772afb',
      text: '120 Max Connections',
    },
    {
      id: '5adbf7f8-9c0e-4032-9d2d-297344657843',
      text: '15 features',
    },
    {
      id: '5ee6b361-c602-410f-afe9-4fdc7f86c6bf',
      text: '200 requests per month',
    },
  ],
  'plan-list-3': [
    {
      id: '78417aad-0f0a-49ca-8c58-a50f1d837dfe',
      text: '150 Max Connections',
    },
    {
      id: 'f7da9246-3adc-485e-ab25-5c792af0b036',
      text: '30 features',
    },
    {
      id: 'b30486fc-e1a1-401a-b98c-ca5da7c2fffb',
      text: 'Unlimited requests',
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: 'Pricing',
  'plan-title-1': 'Basic',
  'plan-title-2': 'Premium',
  'plan-title-3': 'Pro',
  'plan-icon-1': {
    id: '12345',
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
  },
  'plan-icon-2': {
    id: '12345',
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
  },
  'plan-icon-3': {
    id: '12345',
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
  },
  description: '100% money back guarantee. Cancel if you are not satisfied',
  'plan-price-text-1': 'For all period',
  'plan-price-text-2': 'per month',
  'plan-price-text-3': 'per month',
  'plan-price-count-1': 'Free',
  'plan-price-count-2': '$50',
  'plan-price-count-3': '$100',
  'plan-cta-1': {
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
    textValue: 'Main button (S)',
  },
  'plan-cta-2': {
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
    textValue: 'Main button (M)',
  },
  'plan-cta-3': {
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
    textValue: 'Main button (S)',
  },
  cta: {
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
    textValue: 'Additional button (M)',
  },
}

Block.modifierScheme = [
  {
    id: 'block-title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: false,
  },
  {
    id: 'additional-btn',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: false,
  },
  {
    id: 'plan-icon',
    type: 'checkbox',
    label: 'Product icon',
    defaultValue: false,
  },
  {
    id: 'plan-price',
    type: 'checkbox',
    label: 'Product price',
    defaultValue: true,
  },
  {
    id: 'plan-additional-info',
    type: 'checkbox',
    label: 'Product additional information',
    defaultValue: true,
  },
  {
    id: 'plan-description',
    type: 'checkbox',
    label: 'Product description',
    defaultValue: true,
  },
  {
    id: 'plan-button',
    type: 'checkbox',
    label: 'Package button',
    defaultValue: true,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default Block
