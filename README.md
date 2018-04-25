# modifierScheme enhancements

**icon-decorator**

Modifier name: `top-icon`

Adds text decorator in `.section__inner` with `bind="topIcon"`

Possible defaultValues: `true`, `false`

Possible type: `hidden`, `checkbox`

Default value: `false`

Default type: `hidden`

Default label (*don't change it if you are not sure): `Top icon decorator`

Code example (dafault):
```
'top-caption': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
```
Code example (usage):
```
'top-caption': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
```
----------

# options

**resizer**

Option name: `min-resize`

Change min resizer value. Default **70** (same as `padding-top: 70%`). Type: **Number**

----------

Option name: `max-resize`

Change max resizer value. Default **150** (same as `padding-top: 150%`). Type: **Number**

----------

Option name: `disable-resizer`

Disable resizer for Image. Default value **false** (resizer **enabled**). Type **boolean**
