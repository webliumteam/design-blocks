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
    const {
      components: {Text, Icon, Button},
      style,
    } = this.props
    const hiddenIcon = !this.getModifierValue('icon')

    return (
      <div className={classNames(style.item, hiddenIcon && style['item--icon-hidden'], className)}>
        {children}
        {this.getModifierValue('icon') && (
          <Icon
            bind={`collection[${index}].icon`}
            className={classNames(style.icon, style.item__icon, this.ui('ui-icon'))}
          />
        )}
        <div className={style.item__text}>
          {this.getModifierValue('heading') && (
            <Text
              tagName="h3"
              className={classNames(style.item__heading, this.ui('ui-heading'), this.ui('ui-text-center'), this.ui('ui-text-md-left'))}
              bind={`collection[${index}].heading`}
            />
          )}
          {this.getModifierValue('text') && (
            <Text
              tagName="p"
              className={classNames(style.item__description, this.ui('ui-body'), this.ui('ui-text-center'), this.ui('ui-text-md-left'))}
              bind={`collection[${index}].text`}
            />
          )}
          {this.getModifierValue('itemButton') && (
            <Button
              className={style.item__button}
              linkClassName={style.item__link}
              bind={`collection[${index}].button`}
            />
          )}
        </div>
      </div>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {
      components: {Text, Collection, Button},
      style,
      $block,
    } = this.props
    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const btnsGroup =
      this.getModifierValue('mainButton') || this.getModifierValue('additionalButton')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {header && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text
                  bind="title"
                  className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'), this.ui('ui-text-md-left'))}
                  tagName="h2"
                />
              )}
              {this.getModifierValue('subtitle') && (
                <Text
                  bind="subtitle"
                  className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'), this.ui('ui-text-md-left'))}
                  tagName="p"
                />
              )}
            </div>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {btnsGroup && (
            <div className={classNames(style['btns-group'], this.ui('ui-btns-group'))}>
              <div className={classNames(style['btns-group__inner'], this.ui('ui-btns-group__inner'))}>
                {this.getModifierValue('mainButton') && (
                  <Button
                    className={classNames(style['btns-group__button'], style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style['btns-group__link']}
                    bind="mainButton"
                  />
                )}
                {this.getModifierValue('additionalButton') && (
                  <Button
                    className={classNames(style['btns-group__button'], style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style['btns-group__link']}
                    bind="additionalButton"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Icon', 'Button', 'Collection'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Services We Provide',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'We deliver all kind of services that support small and micro businesses. Here are some of them:',
    type: 'subtitle',
  },
  collection: {
    items: [
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 303.216c-53.744 0-97.468 43.724-97.468 97.468 0 30.532 14.115 57.825 36.159 75.71.417.398.869.761 1.354 1.084 16.547 12.947 37.365 20.674 59.955 20.674 22.59 0 43.408-7.727 59.955-20.674a9.882 9.882 0 0 0 1.354-1.084c22.043-17.885 36.159-45.178 36.159-75.71 0-53.745-43.724-97.468-97.468-97.468zm0 174.936c-15.809 0-30.522-4.77-42.791-12.933 6.576-16.892 23.632-28.603 42.791-28.603s36.215 11.711 42.791 28.603c-12.27 8.163-26.982 12.933-42.791 12.933zm-17.616-77.469c0-8.786 7.147-15.933 15.932-15.933s15.933 7.147 15.933 15.933-7.148 15.933-15.933 15.933-15.932-7.147-15.932-15.933zm76.061 50.762c-6.835-12.9-18.034-23.157-31.474-29.111a35.742 35.742 0 0 0 7.277-21.65c0-19.813-16.119-35.933-35.933-35.933-19.813 0-35.932 16.119-35.932 35.933 0 8.65 3.073 16.594 8.183 22.802-12.343 6.08-22.599 15.856-29.012 27.96-11.834-13.607-19.023-31.355-19.023-50.762 0-42.716 34.752-77.468 77.468-77.468s77.468 34.752 77.468 77.468c.001 19.406-7.188 37.154-19.022 50.761zM97.468 13.847C43.724 13.847 0 57.572 0 111.316c0 30.533 14.116 57.826 36.16 75.711.416.397.867.759 1.351 1.082 16.547 12.948 37.366 20.675 59.957 20.675s43.41-7.728 59.957-20.676a9.886 9.886 0 0 0 1.35-1.081c22.044-17.885 36.161-45.179 36.161-75.712 0-53.744-43.724-97.468-97.468-97.468zm0 174.938c-15.809-.001-30.521-4.771-42.791-12.933 6.576-16.892 23.632-28.603 42.791-28.603s36.215 11.711 42.791 28.603c-12.27 8.163-26.981 12.933-42.791 12.933zm-17.617-77.468c0-8.785 7.147-15.933 15.933-15.933s15.933 7.147 15.933 15.933-7.148 15.932-15.933 15.932-15.933-7.147-15.933-15.932zm76.062 50.76c-6.834-12.9-18.034-23.156-31.474-29.111a35.74 35.74 0 0 0 7.277-21.65c0-19.813-16.119-35.933-35.933-35.933S59.85 91.502 59.85 111.316c0 8.649 3.073 16.594 8.183 22.802-12.343 6.08-22.599 15.856-29.011 27.96C27.189 148.471 20 130.723 20 111.316 20 68.6 54.752 33.848 97.468 33.848s77.468 34.752 77.468 77.468c0 19.406-7.189 37.154-19.023 50.761zM414.532 13.848c-53.744 0-97.468 43.724-97.468 97.468 0 30.534 14.117 57.828 36.162 75.713.415.396.864.757 1.347 1.079 16.547 12.948 37.367 20.676 59.958 20.676s43.41-7.727 59.957-20.675a9.988 9.988 0 0 0 1.352-1.082c22.044-17.884 36.16-45.178 36.16-75.711 0-53.744-43.724-97.468-97.468-97.468zm0 174.937c-15.81-.001-30.522-4.771-42.791-12.933 6.576-16.892 23.631-28.603 42.791-28.603s36.215 11.711 42.791 28.603c-12.27 8.163-26.982 12.933-42.791 12.933zm-17.617-77.468c0-8.785 7.147-15.933 15.933-15.933s15.932 7.147 15.932 15.933-7.147 15.932-15.932 15.932-15.933-7.147-15.933-15.932zm76.062 50.76c-6.835-12.9-18.034-23.157-31.474-29.111a35.74 35.74 0 0 0 7.277-21.65c0-19.813-16.119-35.933-35.932-35.933s-35.933 16.119-35.933 35.933c0 8.649 3.073 16.594 8.183 22.801-12.344 6.08-22.599 15.856-29.012 27.96-11.833-13.606-19.023-31.354-19.023-50.761 0-42.716 34.752-77.468 77.468-77.468S492 68.6 492 111.316c0 19.406-7.189 37.154-19.023 50.761zM140.977 355.435l-.121-.104c-4.216-3.567-10.526-3.041-14.093 1.174-3.544 4.188-3.048 10.442 1.091 14.022l.121.104a9.96 9.96 0 0 0 6.455 2.366 9.977 9.977 0 0 0 7.639-3.541c3.542-4.187 3.047-10.442-1.092-14.021zM121.466 335.379l-.124-.149c-3.551-4.213-9.825-4.741-14.049-1.204-4.225 3.536-4.778 9.841-1.256 14.078l.016.02a9.978 9.978 0 0 0 7.712 3.628 9.959 9.959 0 0 0 6.367-2.294c4.256-3.52 4.854-9.823 1.334-14.079zM105.253 312.447a12.374 12.374 0 0 0-.115-.194c-2.854-4.729-9.013-6.27-13.741-3.416-4.729 2.854-6.261 8.98-3.408 13.708l.01.016a9.993 9.993 0 0 0 13.684 3.569c4.765-2.792 6.363-8.918 3.57-13.683zM84.514 260.303c-1.164-5.399-6.482-8.834-11.881-7.67-5.399 1.163-8.833 6.482-7.67 11.881l.046.207c1.055 4.641 5.18 7.793 9.747 7.793a10.1 10.1 0 0 0 2.221-.251c5.385-1.224 8.761-6.575 7.537-11.96zM92.804 287.183l-.057-.143c-2.065-5.12-7.885-7.593-13.006-5.532s-7.601 7.888-5.543 13.01l.017.042a10.004 10.004 0 0 0 9.298 6.314 9.982 9.982 0 0 0 3.686-.708c5.132-2.037 7.642-7.85 5.605-12.983zM385.238 356.506c-3.568-4.217-9.877-4.742-14.094-1.175a6.283 6.283 0 0 0-.119.102c-4.142 3.579-4.637 9.834-1.093 14.023a9.977 9.977 0 0 0 7.639 3.541 9.965 9.965 0 0 0 6.574-2.468c4.142-3.579 4.637-9.834 1.093-14.023zM432.267 281.505c-5.125-2.066-10.949.412-13.014 5.535l-.057.143c-2.033 5.124.481 10.88 5.599 12.927a9.894 9.894 0 0 0 3.682.711c3.976 0 7.75-2.396 9.325-6.302 2.065-5.122-.413-10.949-5.535-13.014zM404.749 334.031c-4.223-3.56-10.531-3.023-14.091 1.199l-.125.149c-3.507 4.242-2.896 10.483 1.329 14.011a9.919 9.919 0 0 0 6.38 2.309 10.06 10.06 0 0 0 7.706-3.577c3.56-4.223 3.024-10.532-1.199-14.091zM439.407 252.668c-5.374-1.186-10.704 2.227-11.913 7.598l-.005.021c-1.224 5.386 2.15 10.744 7.535 11.968.746.169 1.491.25 2.226.25 4.564 0 8.688-3.146 9.742-7.786l.046-.207c1.159-5.38-2.255-10.66-7.631-11.844zM420.591 308.857c-4.728-2.852-10.875-1.333-13.729 3.396l-.115.194c-2.793 4.765-1.202 10.903 3.563 13.696a9.965 9.965 0 0 0 5.056 1.378 9.973 9.973 0 0 0 8.621-4.936c2.853-4.728 1.332-10.874-3.396-13.728zM441.974 223.061c-5.524-.316-10.233 3.922-10.544 9.435l-.001.034c-.307 5.514 3.917 10.207 9.431 10.513.188.01.375.016.561.016 5.27 0 9.684-4.145 9.98-9.472.306-5.513-3.914-10.218-9.427-10.526zM318.223 31.92l-.095-.031c-5.257-1.7-10.893 1.186-12.59 6.441-1.699 5.255 1.185 10.892 6.441 12.59l.095.031a9.997 9.997 0 0 0 3.076.487c4.222 0 8.146-2.695 9.514-6.928 1.698-5.255-1.186-10.892-6.441-12.59zM287.492 24.702l-.264-.041c-5.468-.803-10.578 2.969-11.382 8.433-.802 5.464 2.943 10.539 8.407 11.343.548.09 1.094.134 1.632.134 4.81 0 9.051-3.48 9.855-8.381.895-5.45-2.798-10.593-8.248-11.488zM255.88 22.442l-.247.002c-5.522.082-9.957 4.624-9.875 10.146.08 5.473 4.518 9.853 9.972 9.853l.15-.001c5.523 0 10-4.477 10-10s-4.477-10-10-10zM206.094 38.637c-1.602-5.286-7.188-8.272-12.47-6.67l-.137.042c-5.279 1.624-8.213 7.211-6.589 12.49 1.322 4.296 5.295 7.053 9.575 7.053.977 0 1.97-.144 2.951-.445 5.286-1.602 8.272-7.185 6.67-12.47zM235.801 33.473c-.882-5.452-5.997-9.162-11.448-8.278l1.457 9.894-1.476-9.891c-5.462.815-9.229 5.904-8.415 11.367.741 4.962 5.008 8.525 9.878 8.525.491 0 .989-.036 1.489-.111l.219-.034c5.452-.882 9.178-6.02 8.296-11.472zM80.357 230.32c-1.164-5.399-6.482-8.834-11.881-7.67-5.399 1.163-8.833 6.482-7.67 11.881l.046.207c1.055 4.641 5.18 7.793 9.747 7.793.731 0 1.476-.082 2.221-.251 5.385-1.224 8.761-6.575 7.537-11.96z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Service 1',
        },
        text: {
          type: 'text',
          content: 'Multipurpose assistance for online stores and offline retail businesses.',
        },
        button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M305.553 410.719h-38.799c-5.522 0-9.999 4.476-9.999 9.999 0 5.523 4.477 9.999 9.999 9.999h38.799c5.988 0 10.86 4.871 10.86 10.859 0 5.988-4.871 10.859-10.86 10.859H201.109c-15.7 0-30.464-6.922-40.504-18.992l-24.977-30.022c-13.402-16.11-32.907-25.545-53.777-26.142v-59.067h36.816c18.156 0 35.347 6.944 48.408 19.552l53.908 52.035c3.811 3.679 3.989 9.839.396 13.731-3.662 3.966-9.878 4.225-13.857.578l-42.323-38.796c-4.069-3.731-10.395-3.457-14.126.614-3.732 4.071-3.457 10.396.614 14.127l42.323 38.796c5.708 5.232 12.931 7.816 20.136 7.816 8.044 0 16.065-3.221 21.928-9.572 10.906-11.815 10.367-30.513-1.202-41.681l-53.908-52.035c-16.809-16.226-38.933-25.162-62.297-25.162H79.909c-3.762-8.904-12.585-15.169-22.843-15.169H9.999c-5.522 0-9.999 4.476-9.999 9.999v73.117c0 5.522 4.477 9.999 9.999 9.999s9.999-4.476 9.999-9.999v-63.119h37.069a4.792 4.792 0 0 1 4.787 4.787v80.143a4.792 4.792 0 0 1-4.787 4.787H46.682c-5.522 0-9.999 4.476-9.999 9.999 0 5.522 4.477 9.999 9.999 9.999h10.384c10.396 0 19.311-6.436 22.986-15.531 15.588.089 30.227 6.992 40.203 18.984l24.977 30.022c13.852 16.651 34.218 26.2 55.877 26.2h104.444c17.014 0 30.857-13.842 30.857-30.857s-13.843-30.857-30.857-30.857zM502.001 131.934c-5.522 0-9.999 4.476-9.999 9.999v67.025h-37.069a4.792 4.792 0 0 1-4.787-4.787v-80.143a4.792 4.792 0 0 1 4.787-4.787h9.651c5.522 0 9.999-4.476 9.999-9.999 0-5.522-4.477-9.999-9.999-9.999h-9.651c-10.396 0-19.311 6.436-22.986 15.531-15.588-.089-30.227-6.992-40.203-18.984l-24.977-30.021c-13.851-16.651-34.218-26.201-55.878-26.201H206.447c-17.014 0-30.857 13.842-30.857 30.856 0 17.014 13.843 30.856 30.857 30.856h42.708c5.522 0 9.999-4.476 9.999-9.999s-4.477-9.999-9.999-9.999h-42.708c-5.988 0-10.86-4.871-10.86-10.859 0-5.987 4.871-10.859 10.86-10.859H310.89c15.701 0 30.465 6.922 40.505 18.992l24.977 30.021c13.401 16.11 32.907 25.545 53.777 26.143v59.067h-36.816c-18.156 0-35.347-6.944-48.408-19.552L291.017 122.2c-3.811-3.679-3.989-9.838-.396-13.731 3.662-3.967 9.878-4.225 13.857-.578l42.324 38.796a9.999 9.999 0 1 0 13.512-14.741L317.99 93.151c-12.08-11.073-30.948-10.284-42.064 1.756-10.906 11.816-10.367 30.514 1.202 41.681l53.908 52.035c16.809 16.226 38.933 25.162 62.297 25.162h38.758c3.762 8.904 12.585 15.169 22.843 15.169h47.068c5.522 0 9.999-4.476 9.999-9.999v-77.024c-.001-5.521-4.478-9.997-10-9.997zM322.838 379.643c-2.274-5.032-8.184-7.277-13.212-5.004-5.064 2.205-7.38 8.097-5.175 13.159a10 10 0 0 0 9.172 6.009 9.965 9.965 0 0 0 3.987-.834l.215-.095c5.033-2.273 7.286-8.202 5.013-13.235zM347.693 362.809c-3.269-4.44-9.552-5.364-13.997-2.11-4.455 3.262-5.423 9.519-2.161 13.974a9.984 9.984 0 0 0 8.075 4.093c2.05 0 4.119-.628 5.899-1.931l.125-.092c4.429-3.28 5.327-9.496 2.059-13.934z"/><path d="M294.884 390.868c-1.139-5.385-6.426-8.833-11.816-7.719-5.384 1.069-8.904 6.284-7.872 11.684.916 4.79 5.107 8.123 9.81 8.123a10.062 10.062 0 0 0 2.183-.24c5.4-1.145 8.838-6.447 7.695-11.848zM368.581 341.061c-4.1-3.698-10.421-3.373-14.121.728l-.212.24c-3.608 4.181-3.142 10.495 1.039 14.102a9.957 9.957 0 0 0 6.526 2.428 9.977 9.977 0 0 0 7.512-3.394c3.682-4.101 3.351-10.411-.744-14.104zm-5.584 8.431l-1.112-1.006 1.204 1.086-.092-.08zM394.031 286.873c-5.284-1.603-10.874 1.412-12.477 6.697-1.624 5.278 1.338 10.873 6.616 12.497a9.969 9.969 0 0 0 2.943.445c4.274 0 8.231-2.762 9.553-7.061l.042-.137c1.602-5.285-1.393-10.839-6.677-12.441zM406.838 235.267a10.216 10.216 0 0 0-.073-.381c-1.129-5.404-6.425-8.861-11.827-7.734-5.383 1.122-8.844 6.386-7.76 11.768.917 4.771 5.098 8.11 9.806 8.11.585 0 1.179-.051 1.774-.158 5.436-.973 9.053-6.169 8.08-11.605zM397.668 256.962c-5.483-.484-10.353 3.581-10.838 9.081-.009.097-.023.294-.029.391-.324 5.513 3.881 10.245 9.394 10.569.2.012.398.018.596.018 5.206 0 9.581-4.026 9.964-9.269.456-5.48-3.602-10.306-9.087-10.79zM384.243 315.325c-4.8-2.721-10.906-1.035-13.628 3.77l-.139.25c-2.633 4.854-.856 10.967 3.997 13.6a10.02 10.02 0 0 0 4.789 1.221 9.918 9.918 0 0 0 8.743-5.2l-8.692-4.942 8.699 4.93c2.723-4.805 1.036-10.906-3.769-13.629zM202.895 124.9c-2.469-4.94-8.478-6.943-13.414-4.472l-.089.044c-4.94 2.47-6.897 8.453-4.427 13.392 1.749 3.499 5.293 5.513 8.967 5.513 1.514 0 3.05-.342 4.491-1.062 4.94-2.469 6.941-8.475 4.472-13.415zM231.822 116.563a9.996 9.996 0 0 0-12.308-7.302c-5.348 1.378-8.587 6.835-7.21 12.182a9.99 9.99 0 0 0 9.659 7.511c.824 0 1.662-.103 2.498-.318 5.366-1.301 8.662-6.706 7.361-12.073zM176.456 139.319c-3.458-4.297-9.754-4.972-14.056-1.522l6.199 7.845-6.229-7.822c-4.32 3.44-5.033 9.73-1.594 14.05a9.984 9.984 0 0 0 7.83 3.771 9.963 9.963 0 0 0 6.222-2.177l.132-.106c4.29-3.465 4.954-9.742 1.496-14.039zM123.143 210.461c-5.328-1.452-10.824 1.687-12.277 7.015-.025.091-.073.28-.096.372-1.3 5.365 1.996 10.76 7.36 12.063.792.192 1.584.284 2.364.284 4.486 0 8.562-3.044 9.698-7.581 1.371-5.288-1.762-10.711-7.049-12.153zM116.773 239.84c-5.527-.307-10.241 3.892-10.561 9.404-.008.129-.013.257-.017.385-.162 5.517 4.179 10.114 9.697 10.279.102.003.202.005.303.005 5.36 0 9.789-4.253 9.987-9.637.25-5.459-3.938-10.118-9.409-10.436zM135.727 183.136c-4.891-2.566-10.934-.681-13.499 4.209l-.163.322c-2.437 4.953-.393 10.935 4.559 13.374a9.932 9.932 0 0 0 4.404 1.029c3.672 0 7.207-2.032 8.959-5.532 2.49-4.873.598-10.853-4.26-13.402zM153.785 159.079c-4.249-3.527-10.553-2.942-14.08 1.306l-.206.254c-3.428 4.327-2.695 10.605 1.63 14.035a9.943 9.943 0 0 0 6.202 2.163 9.997 9.997 0 0 0 7.816-3.746c3.464-4.247 2.864-10.503-1.362-14.012zM128.073 278.028c-.973-5.436-6.172-9.053-11.605-8.079-5.436.974-9.053 6.169-8.08 11.605l.018.098c.866 4.833 5.063 8.19 9.804 8.19.591 0 1.19-.052 1.792-.16 5.436-.973 9.045-6.218 8.071-11.654zM290.332 202.125c-13.015 0-25.074 5.367-33.667 14.424-8.594-9.057-20.652-14.424-33.667-14.424-25.603 0-46.432 20.829-46.432 46.432 0 13.815 6.093 26.817 16.715 35.673.064.054.13.107.196.16l56.981 45.112a9.977 9.977 0 0 0 6.206 2.159 9.98 9.98 0 0 0 6.23-2.178l59.395-47.31a9.9 9.9 0 0 0 .831-.741c8.799-8.775 13.644-20.45 13.644-32.875 0-25.603-20.829-46.432-46.432-46.432zm19.028 64.783l-52.713 41.988-50.65-40.099a26.383 26.383 0 0 1-9.433-20.238c-.001-14.577 11.858-26.436 26.434-26.436a26.37 26.37 0 0 1 24.43 16.327 10 10 0 0 0 18.474 0 26.37 26.37 0 0 1 24.43-16.327c14.576 0 26.435 11.859 26.435 26.435 0 6.902-2.627 13.398-7.407 18.35z"/><circle cx="9.999" cy="402.76" r="9.964"/><circle cx="502" cy="109.24" r="9.964"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Service 2',
        },
        text: {
          type: 'text',
          content: 'Developing marketing and business strategy to help company grow fast.',
        },
        button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="118.41" cy="320.841" r="10"/><path d="M512 237.309v-1.036c0-23.155-18.838-41.994-41.994-41.994H350.149c15.413-26.735 23.735-56.703 24.227-87.684.083-5.196.042-10.56-.002-16.239-.028-3.669-.058-7.549-.058-11.741 0-21.667-17.585-39.3-39.221-39.354-4.035-.04-17.479.625-28.057 11.673-4.815 5.029-8.141 11.369-9.618 18.332-2.858 13.467-6.424 24.965-10.902 35.151-16.412 37.332-39.801 68.519-69.516 92.694-7.91 6.435-16.312 12.369-25.085 17.76-3.292-11.86-14.177-20.593-27.071-20.593H10c-5.523 0-10 4.478-10 10v258.463c0 5.522 4.477 10 10 10h154.846c14.674 0 26.748-11.309 27.984-25.667 19.205 16.591 43.505 25.667 69.06 25.667h208.115c23.156 0 41.995-18.839 41.995-41.994 0-12.803-5.758-24.285-14.822-31.994 9.064-7.709 14.822-19.191 14.822-31.995v-1.254c0-12.803-5.758-24.285-14.822-31.994 9.063-7.709 14.822-19.192 14.822-31.994v-.218c0-12.803-5.758-24.285-14.822-31.994 9.064-7.708 14.822-19.191 14.822-31.995zm-339.058-5.945v213.283c0 4.463-3.631 8.095-8.096 8.095h-36.439v-87.127c0-5.522-4.477-10-10-10s-10 4.478-10 10v87.127H20V214.279h144.846c4.464 0 8.096 3.632 8.096 8.096v8.989zm269.366 47.94h27.697c12.128 0 21.995 9.866 21.995 21.994v.218c0 12.128-9.867 21.994-21.995 21.994h-27.697c-5.523 0-10 4.478-10 10s4.477 10 10 10h27.697c12.127 0 21.994 9.866 21.994 21.994v1.254c0 12.128-9.867 21.995-21.995 21.995h-27.697c-5.523 0-10 4.478-10 10s4.477 10 10 10h27.697c12.127 0 21.994 9.866 21.994 21.994s-9.867 21.994-21.995 21.994H261.891c-22.314 0-43.451-8.529-59.517-24.017l-9.432-9.093V237.455c12.968-7.225 25.285-15.558 36.681-24.83 32.2-26.196 57.502-59.895 75.203-100.159 5.036-11.454 9.012-24.227 12.158-39.049.715-3.368 2.229-6.28 4.5-8.652 4.922-5.141 11.357-5.508 13.088-5.508.177 0 .293.004.422.004 10.653 0 19.32 8.682 19.321 19.354 0 4.248.03 8.179.059 11.896.042 5.558.083 10.808.004 15.767-.527 33.154-11.143 65.021-30.7 92.154a9.999 9.999 0 0 0 8.112 15.847h138.215c12.127 0 21.994 9.866 21.994 21.994v1.036H492c0 12.128-9.867 21.995-21.995 21.995h-27.697c-5.523 0-10 4.478-10 10s4.477 10 10 10z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Service 3',
        },
        text: {
          type: 'text',
          content:
            'Building brand awareness for micro and small businesses to increase potential reach.',
        },
        button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M42.667 273.067a8.533 8.533 0 0 0 8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533v25.6a8.533 8.533 0 0 0 8.533 8.533zM173.087 436.947l-23.163-10.9a8.533 8.533 0 0 0-11.355 4.088 8.533 8.533 0 0 0 4.088 11.355l23.163 10.9a8.535 8.535 0 0 0 7.267-15.443zM477.867 213.333a8.533 8.533 0 0 0-17.066 0v25.6c0 4.713 3.82 8.533 8.533 8.533s8.533-3.82 8.533-8.533v-25.6zM469.333 264.533a8.533 8.533 0 0 0-8.533 8.533v25.6c0 4.713 3.82 8.533 8.533 8.533s8.533-3.82 8.533-8.533v-25.6a8.533 8.533 0 0 0-8.533-8.533zM477.867 342.189v-17.922c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533v17.922a42.53 42.53 0 0 0-19.824 9.943 8.63 8.63 0 0 0-1.043-.832l-51.2-34.133a8.534 8.534 0 1 0-9.467 14.201l51.2 34.133c.105.07.215.127.322.192a42.495 42.495 0 0 0-4.122 18.308c0 3.796.502 7.474 1.433 10.977l-27.417 12.902a8.535 8.535 0 0 0 7.267 15.443l27.766-13.066c7.81 9.985 19.96 16.411 33.618 16.411C492.896 426.667 512 407.563 512 384c0-20.64-14.659-37.858-34.133-41.811zm-8.534 67.411c-14.137 0-25.6-11.463-25.6-25.6 0-14.137 11.463-25.6 25.6-25.6 14.137 0 25.6 11.463 25.6 25.6 0 14.137-11.462 25.6-25.6 25.6zM362.076 426.047l-23.163 10.9a8.535 8.535 0 0 0 7.267 15.443l23.163-10.9a8.535 8.535 0 0 0-7.267-15.443zM308.029 451.481l-11.244 5.292c-5.363-17.432-21.593-30.106-40.784-30.106s-35.421 12.673-40.784 30.106l-11.244-5.292a8.533 8.533 0 0 0-11.355 4.088 8.533 8.533 0 0 0 4.088 11.355l17.006 8.003C216.451 495.844 234.334 512 256 512c21.666 0 39.549-16.156 42.29-37.074l17.005-8.003a8.535 8.535 0 0 0 4.088-11.355 8.532 8.532 0 0 0-11.354-4.087zM256 494.933c-14.137 0-25.6-11.463-25.6-25.6 0-14.137 11.463-25.6 25.6-25.6 14.137 0 25.6 11.463 25.6 25.6 0 14.138-11.463 25.6-25.6 25.6zM337.264 62.768l23.672 9.747a8.534 8.534 0 0 0 6.499-15.782l-23.672-9.747a8.534 8.534 0 0 0-6.499 15.782zM151.064 72.516l23.672-9.747a8.534 8.534 0 0 0-6.498-15.782l-23.672 9.747a8.534 8.534 0 0 0 6.498 15.782zM206.298 49.772l7.237-2.98c2.076 21.627 20.294 38.541 42.464 38.541 22.171 0 40.388-16.914 42.464-38.541l7.237 2.98a8.534 8.534 0 0 0 6.498-15.782l-16.426-6.763C289.585 11.298 274.116 0 256 0s-33.585 11.298-39.774 27.228L199.8 33.991a8.534 8.534 0 0 0 6.498 15.781zM256 17.067c14.137 0 25.6 11.463 25.6 25.6 0 14.137-11.463 25.6-25.6 25.6-14.137 0-25.6-11.463-25.6-25.6 0-14.138 11.463-25.6 25.6-25.6zM349.71 203.239c-.032-.18-.059-.359-.103-.537-.038-.153-.091-.299-.137-.448a8.288 8.288 0 0 0-1.751-3.111c-.046-.052-.091-.104-.138-.154a8.443 8.443 0 0 0-.567-.55c-.112-.099-.229-.191-.345-.284-.16-.127-.316-.256-.488-.374a8.532 8.532 0 0 0-.995-.593c-.013-.006-.023-.015-.035-.021L259.818 154.5a8.534 8.534 0 0 0-7.632 0l-85.333 42.667c-.013.006-.023.015-.035.021a8.532 8.532 0 0 0-.995.593c-.173.118-.328.247-.489.374-.116.093-.233.184-.345.283-.2.176-.388.359-.567.55-.047.05-.092.102-.138.153a8.296 8.296 0 0 0-1.751 3.111c-.046.149-.099.295-.137.448-.044.177-.071.357-.103.537-.036.196-.073.391-.096.593-.019.177-.025.354-.034.533-.007.146-.027.287-.027.436v93.867a8.532 8.532 0 0 0 4.717 7.632l85.333 42.667c.038.019.077.03.115.048.219.106.445.195.672.283.12.046.24.1.36.141.215.072.436.124.656.178.136.034.271.077.408.104.194.038.392.055.588.079.161.02.322.05.482.06.177.011.356.002.535.002.179 0 .358.01.535-.002.16-.01.321-.041.482-.06.197-.024.395-.041.588-.079.136-.027.271-.07.408-.104.221-.054.441-.107.656-.178.121-.04.24-.094.36-.141.228-.087.453-.177.672-.283.038-.018.077-.029.115-.048l85.333-42.667a8.532 8.532 0 0 0 4.717-7.632V204.8c0-.148-.02-.29-.027-.436-.009-.178-.014-.355-.034-.533-.024-.201-.061-.396-.097-.592zM256 171.674l64.521 32.26-10.801 4.32L256 229.743l-64.521-25.808L256 171.674zm-76.8 45.73l68.267 27.307v82.815L179.2 293.393v-75.989zm153.6 75.989l-68.267 34.133v-82.815l68.267-27.307v75.989zM132.733 172.1l-51.2-34.133c-.105-.07-.215-.127-.322-.192a42.495 42.495 0 0 0 4.122-18.308 42.497 42.497 0 0 0-4.076-18.207l30.354-12.499a8.534 8.534 0 0 0-6.498-15.782L73.551 85.976a8.502 8.502 0 0 0-2.528 1.621C63.484 80.885 53.554 76.8 42.667 76.8 19.104 76.8 0 95.904 0 119.467c0 20.64 14.659 37.858 34.133 41.811v26.455c0 4.713 3.82 8.533 8.533 8.533s8.533-3.82 8.533-8.533v-26.455a42.53 42.53 0 0 0 19.824-9.943c.323.297.666.58 1.043.832l51.2 34.133a8.534 8.534 0 0 0 9.467-14.2zm-90.066-27.033c-14.137 0-25.6-11.463-25.6-25.6s11.463-25.6 25.6-25.6c14.137 0 25.6 11.463 25.6 25.6s-11.463 25.6-25.6 25.6zM388.733 186.3l51.2-34.133a8.514 8.514 0 0 0 1.043-.832 42.53 42.53 0 0 0 19.824 9.943v26.455c0 4.713 3.82 8.533 8.533 8.533s8.533-3.82 8.533-8.533v-26.455C497.341 157.324 512 140.107 512 119.467c0-23.563-19.104-42.667-42.667-42.667-10.887 0-20.817 4.085-28.356 10.797a8.502 8.502 0 0 0-2.528-1.621L406.887 72.98a8.534 8.534 0 0 0-6.498 15.782l30.354 12.499a42.483 42.483 0 0 0-4.076 18.207 42.498 42.498 0 0 0 4.122 18.308c-.107.065-.217.122-.322.192l-51.2 34.133a8.534 8.534 0 0 0 9.466 14.199zm80.6-92.433c14.137 0 25.6 11.463 25.6 25.6s-11.463 25.6-25.6 25.6c-14.137 0-25.6-11.463-25.6-25.6s11.463-25.6 25.6-25.6zM123.267 317.167l-51.2 34.133a8.514 8.514 0 0 0-1.043.832 42.53 42.53 0 0 0-19.824-9.943v-43.522c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533v43.522C14.659 346.142 0 363.36 0 384c0 23.563 19.104 42.667 42.667 42.667 13.658 0 25.809-6.426 33.618-16.411l27.766 13.066a8.533 8.533 0 0 0 11.355-4.088 8.533 8.533 0 0 0-4.088-11.355l-27.417-12.902A42.721 42.721 0 0 0 85.334 384a42.498 42.498 0 0 0-4.122-18.308c.107-.065.217-.122.322-.192l51.2-34.133a8.534 8.534 0 0 0-9.467-14.2zm-80.6 92.433c-14.137 0-25.6-11.463-25.6-25.6 0-14.137 11.463-25.6 25.6-25.6 14.137 0 25.6 11.463 25.6 25.6 0 14.137-11.463 25.6-25.6 25.6z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Service 4',
        },
        text: {
          type: 'text',
          content:
            'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        },
        button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
    ],
  },
  mainButton: {
    type: 'primary',
    textValue: 'Request a quote',
  },
  additionalButton: {
    type: 'secondary',
    textValue: 'Learn more',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  icon: {defaultValue: true, label: 'Service icon', type: 'checkbox', sortOrder: 30},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox', sortOrder: 40},
  text: {defaultValue: true, label: 'Service description', type: 'checkbox', sortOrder: 50},
  itemButton: {defaultValue: true, label: 'Service link (button)', type: 'checkbox', sortOrder: 60},
  mainButton: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 70},
  additionalButton: {
    defaultValue: true,
    label: 'Additional button (link)',
    type: 'checkbox',
    sortOrder: 80,
  },
}

export default Wireframe
