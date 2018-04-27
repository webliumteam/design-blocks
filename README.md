# modifierScheme enhancements

**caption-decorator**

Modifier name: `top-caption`

Adds text decorator in `.section__header` with `bind="top-caption"`

Possible defaultValues: `true`, `false`

Possible type: `hidden`, `checkbox`

Default value: `false`

Default type: `hidden`

Default label (*don't change it if you are not sure): `Top caption`

Code example (dafault):
```
'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
```
Code example (usage):
```
'top-caption': {defaultValue: true, label: 'Top caption', type: 'checkbox'},
```
----------

# options

**image-hidden**

Option name: `image-hidden`

Disabled Image in items

Possible values: `false` or `true`

Default value: `false` (Image enabled)

Code example (usage):

```
{
    "image-hidden": true
}
```