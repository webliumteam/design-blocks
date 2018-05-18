## Object entities naming convention:

1. Naming
1.1. Use existing component name if possible
1.2. If component name does not fit, use valid english words for naming

3. Words structure
3.1. Only latin alphabet characters, numbers and underscores are acceptable e. g. `A-Za-z0-9_`
3.2. Lower camelCase naming structure e.g. `lowerCamelCaseNamingStructure`

4. BEM structure
4.1. Use BEM-like compound for related Entities e. g. `block__element`
4.2. Add incrementing BEM-like suffix if there are several similar Entities e. g. `entity_0`, `entity_1` etc.
4.3. Add BEM-like suffix if the Entity has optional or decorative nature e.g. `entity_decorator`

5. Order entities correctly as they appear in design, from top to bottom and left to right

## Example of naming

| Old                    | New                    |
|------------------------|------------------------|
|------------------------|------------------------|
| title                  | title                  |
|------------------------|------------------------|
| social-title           | socials_heading        |
|------------------------|------------------------|
| subtitle               | subtitle               |
|------------------------|------------------------|
| text                   | body                   |
|------------------------|------------------------|
| text-2                 | text_decorator         |
|------------------------|------------------------|
| picture                | image                  |
|------------------------|------------------------|
| button-1               | button                 |
|------------------------|------------------------|
| button-2               | button_additional      |
|------------------------|------------------------|
| socialIcons            | socials                |
|------------------------|------------------------|
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
|                   | address       |
|                   | phone         |
|                   | email         |
|                   | price         |
|                   | weekday       |
|                   | time          |
|                   | person        |
|                   | date          |
|                   | body          |
|                   | category      |
|                   | year          |
|                   | day           |
|                   | month         |

## Prefixes

* `item_` - indicates the entity is a child element to a collection. Allowed for any component.

## Suffixes

* `_label` - indicates the entity servers as a description for another entity. Allowed for the `<Text />` component only.
* `_additional` - used for adding one more entity with conflicting key. Primarily used for `<Button />` components, but can be adopted for other cases.
* `_decorator` - marks an entity which irrelevant to the main content e.g. invisible *option* or *modificator* decorators.
