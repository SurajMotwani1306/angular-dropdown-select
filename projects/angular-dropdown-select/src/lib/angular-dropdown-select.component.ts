import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-angular-dropdown-select',
  templateUrl:'./angular-dropdown-select.component.html',
  styleUrl: './angular-dropdown-select.component.css'
})
export class AngularDropdownSelectComponent {

  @Input() headings: any;
  @Output() headingsCheckedUpdate = new EventEmitter<{ id: number, checked: boolean }>();

  dropdownOpen = false;
  items: any;
  selectedCount: number = 0;
  selectAll: boolean = false; //New

  constructor(){}

  ngOnInit(){
   this.items = this.headings;
   this.countOfSelectedCheckboxes();
   this.iterateForSelectAllChecked(); //New
  }

  //New
  iterateForSelectAllChecked(){
    this.selectAll = Object.values(this.items).every((item:any) => item.checked === true)
  }

  //New
  countOfSelectedCheckboxes(){
    this.selectedCount = 0;
    this.items.forEach((element: any) => {
      element.checked === true ? this.selectedCount++ : null;
    });
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onSelectAll(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    console.log(checkbox);
    
    this.items.forEach((item:any) => {
      item.checked = checkbox.checked;
      this.headingsCheckedUpdate.emit({ id: item.id, checked: item.checked }); //New
    });

    this.countOfSelectedCheckboxes(); //New
    this.iterateForSelectAllChecked(); //New
  }

  onItemSelected(item: any): void {
    // item.checked = !item.checked;
    this.countOfSelectedCheckboxes(); //New
    this.headingsCheckedUpdate.emit({ id: item.id, checked: !item.checked }); //New
    this.iterateForSelectAllChecked(); //New
  }
}
