## Object entities naming convention:

## Example of naming

| Old                    | New                    |
|------------------------|------------------------|
| title                  | title                  |
| social-title           | socials_heading        |
| subtitle               | subtitle               |
| text                   | body                   |
| text-2                 | text_decorator         |
| picture                | image                  |
| button-1               | button                 |
| button-2               | button_additional      |
| socialIcons            | socials                |
| topIcon                | icon_decorator         |

## Keys

| Component         | Key           |
|-------------------|---------------|
|`<Image />`        | image         |
|`<Icon />`         | icon          |
|`<Socials>`        | socials       |
|`<Button />`       | button        |
|`<Map />`          | map           |
|`<Form />`         | form          |
|`<Logo />`         | logo          |
|`<Collection />`   | collection    |
|`<Text />`         | title         |
|                   | subtitle      |
|                   | heading       |
|                   | subheading    |
|                   | body          |
|                   | price         |
|                   | category      |
|                   | date          |
|                   | address       |
|                   | phone         |
|                   | email         |
|                   | weekday       |
|                   | time          |
|                   | person        |
|                   | year          |
|                   | day           |
|                   | month         |

## Prefixes

* `item_` - indicates the entity is a child element to a collection. Allowed for any component.

## Suffixes

* `_label` - indicates the entity servers as a description for another entity. Allowed for the `<Text />` component only.
* `_additional` - used for adding one more entity with conflicting key. Primarily used for `<Button />` components, but can be adopted for other cases.
* `_decorator` - marks an entity which irrelevant to the main content e.g. invisible *option* or *modificator* decorators.
