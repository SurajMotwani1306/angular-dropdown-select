import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-angular-dropdown-select',
  templateUrl:'./angular-dropdown-select.component.html',
  styleUrl: './angular-dropdown-select.component.css'
})
export class AngularDropdownSelectComponent {

  @Input() headings: any;
  @Input() extras: any;
  @Output() onCheckBoxStatusChanged = new EventEmitter<{ id: number, checked: boolean }>();
  @Output() onUnselectAll = new EventEmitter<Boolean>();

  dropdownOpen = false;
  items: any;
  selectedCount: number = 0;
  selectAll: boolean = false;
  extra: any;
  uncheckAllStatus: boolean = false;
  dropdownButtonText : string = '';

  constructor(){}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;    
    if (!target.nextElementSibling?.classList.contains('show')) {
      this.dropdownOpen = false;
    }
  }

  ngOnInit(){
   this.items = this.headings;
   this.extra = this.extras;
   this.uncheckAllStatus = this.extra.uncheckAllStatus;
   this.dropdownButtonText = this.extra.dropdownButtonText ? this.extra.dropdownButtonText : 'Table Columns';
   this.countOfSelectedCheckboxes();
   this.iterateForSelectAllChecked();
   this.iterateForSelectAllUnChecked();
  }

  iterateForSelectAllChecked(){
    this.selectAll = Object.values(this.items).every((item:any) => item.checked === true)
  }

  iterateForSelectAllUnChecked(){
    this.uncheckAllStatus = Object.values(this.headings).every((item:any) => item.checked === false)
    if(this.uncheckAllStatus === true){
      this.onUnselectAll.emit(true);
    }else{
      this.onUnselectAll.emit(false);
    }
  }

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
    
    this.items.forEach((item:any) => {
      item.checked = checkbox.checked;
      this.onCheckBoxStatusChanged.emit(item);
    });

    this.countOfSelectedCheckboxes();
    this.iterateForSelectAllChecked();
    this.iterateForSelectAllUnChecked();
  }

  onItemSelected(item: any): void {
    this.countOfSelectedCheckboxes();
    this.onCheckBoxStatusChanged.emit(item);
    this.iterateForSelectAllChecked();
    this.iterateForSelectAllUnChecked();
  }
}
