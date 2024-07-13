# angular-dropdown-select
<p>Multiple Dropdown Select - <b>You can use this angular-dropdown-select apart from data tables as well.</b></p>
<br/>

<table>
  <tr>
    <td align="center">
      <img alt="Angular Dropdown Select"
        src="projects/angular-dropdown-select/Screenshots/dropdown-select.gif" />
        <p align="center">Instance: A way to bind it with tables.</p>
    </td>
   </tr>
</table>

## Installation

```sh
npm i angular-dropdown-select
```

## Usage

## Import
```ts
import { AngularDropdownSelectModule } from 'angular-dropdown-select';
```

## Fundamental Usage
```html
<lib-angular-dropdown-select 
      [headings]="headings" 
      [extras]="extras" 
      (onCheckBoxStatusChanged)="selectedColumnChange($event)" 
      (onUnselectAll)="getStatusOfUnselectedAll($event)">
</lib-angular-dropdown-select>
```

# Configuration - Props
```ts
  selectedColumnChange(event: any){
    console.log(event);
  }

  getStatusOfUnselectedAll(event: any){
    console.log(event);
  }

headings = [
      { id: 1, name: 'id', checked: true },
      { id: 2, name: 'name', checked: true },
      { id: 3, name: 'age', checked: false },
      { id: 4, name: 'email', checked: true },
      { id: 5, name: 'emp_number', checked: true }
];

extras = {
      uncheckAllStatus: false,
      dropdownButtonText: 'Title'
}
```

## Fundamentals / Mandatories

| Property/Method             |  Type   | Description                                                             |
| --------------------------- | :-----: | ----------------------------------------------------------------------- |
| headings.id                 | number  | IDs of dropdown select items                                            |
| headings.name               | string  | Names of dropdown select items Or Headings of table shown in example    |
| headings.checked            | boolean | Status/Visibility of dropdown select                                    |
| extras.uncheckAllStatus     | boolean | Boolean flag to handle all checked/unchecked state                      |
| extras.dropdownButtonText   | boolean | To update Button text, else default text is 'Table Columns'             |
| selectedColumnChange(e)     | method  | Recieve emitted value for "onCheckBoxStatusChanged"                     |
| getStatusOfUnselectedAll(e) | method  | Recieve emitted value for "onUnselectAll"                               |


## Future Plans
- [ ] More decorative Approach in terms of CSS.
- [ ] Will come up with search functionality.

## Author
Suraj Motwani - Email: suraj.motwani1306@gmail.com

## License

Angular Dropdown Select is available under the MIT license. See the LICENSE file for more info.

