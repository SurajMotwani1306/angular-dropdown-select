import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-angular-dropdown-select',
  templateUrl:'./angular-dropdown-select.component.html',
  styleUrl: './angular-dropdown-select.component.css'
})
export class AngularDropdownSelectComponent {

  @Input() headings: any;
  dropdownOpen = false;
  items: any;

  constructor(){}

  ngOnInit(){
   this.items = this.headings;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onSelectAll(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.items.forEach((item:any) => item.checked = checkbox.checked);
  }

  onItemSelected(item: any): void {
    item.checked = !item.checked;
  }
}
