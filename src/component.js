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

  collectionItem = ({index, children, className}) => {
    const {components: {Icon, Text, Button}, style} = this.props

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__icon}>
          <Icon bind={`collection[${index}].icon`} />
        </div>
        <div className={style.item__text}>
          <Text tagName="h3" className={style.item__heading} bind={`collection[${index}].title`} />
          {this.getModifierValue('item-body') && (
            <Text tagName="p" className={style.item__desc} bind={`collection[${index}].desc`} />
          )}
        </div>
        <ul className={style.advantages}>
          <li className={style.advantages__item}>
            <div className={style.advantages__icon}>
              <Icon bind={`collection[${index}].advantages[0].icon`} />
            </div>
            <Text tagName="p" className={style.advantages__desc} bind={`collection[${index}].advantages[0].desc`} />
          </li>
          <li className={style.advantages__item}>
            <div className={style.advantages__icon}>
              <Icon bind={`collection[${index}].advantages[0].icon`} />
            </div>
            <Text tagName="p" className={style.advantages__desc} bind={`collection[${index}].advantages[1].desc`} />
          </li>
          <li className={style.advantages__item}>
            <div className={style.advantages__icon}>
              <Icon bind={`collection[${index}].advantages[0].icon`} />
            </div>
            <Text tagName="p" className={style.advantages__desc} bind={`collection[${index}].advantages[2].desc`} />
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h2" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
          </div>
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                linkClassName={style.link}
                className={style.button}
                bind="cta"
              />
              <Button
                linkClassName={style.link}
                className={style.button}
                bind="cta-2"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Icon', 'Collection', 'Button'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Why Choose Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Still have some hesitations whether cooperation with us is worth the trouble? Check the reasons why you should choose us among other companies!',
    type: 'subtitle',
  },
  collection: {
    items: [
      {
        icon: {
          svg:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z'/><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z'/><circle cx='112.909' cy='417.49' r='10'/></svg>",
        },
        title: {
          type: 'heading',
          content: 'Experience',
        },
        desc: {
          type: 'text',
          content: 'We have a considerable experience and already completed more than 10 000 projects.',
        },
        advantages: [
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Automatic Code Detection',
            },
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Plug & Play Services',
            },
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'HTTPS and HTTP/2 out of the box',
            },
          },
        ],
      },
      {
        icon: {
          svg:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z'/><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z'/><circle cx='112.909' cy='417.49' r='10'/></svg>",
        },
        title: {
          type: 'heading',
          content: 'Support',
        },
        desc: {
          type: 'text',
          content: 'We value each client and always respond to feedback throughout our cooperation.',
        },
        advantages: [
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Log Management',
            },
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Zero Downtime Deployments',
            },
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Private Networks',
            },
          },
        ],
      },
      {
        icon: {
          svg:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z'/><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z'/><circle cx='112.909' cy='417.49' r='10'/></svg>",
        },
        title: {
          type: 'heading',
          content: 'Technologies',
        },
        desc: {
          type: 'text',
          content: 'We create our products using the latest technologies to ensure the best experience.',
        },
        advantages: [
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Application Metrics',
            },
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Global DNS',
            },
          },
          {
            icon: {
              svg: '<svg viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z"/></svg>',
              fill: '#676767',
            },
            desc: {
              type: 'text',
              content: 'Elastic Scalability',
            },
          },
        ],
      },
    ],
  },
  cta: {
    textValue: 'Request a quote',
    type: 'secondary',
  },
  'cta-2': {
    textValue: 'Learn more',
    type: 'primary',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Partners description', type: 'checkbox'},
  'item-body': {defaultValue: true, label: 'Partner info', type: 'checkbox'},
  button: {defaultValue: false, label: 'Secondary button', type: 'hidden'},
}

export default Wireframe
