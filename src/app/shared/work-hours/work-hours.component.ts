import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.css']
})
export class WorkHoursComponent {

  @Input() day! : string
  @ViewChild('workingHours') workHoursSection!: ElementRef;
  @ViewChild('workingHoursParent') workingHoursParent!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;
  protected swt :boolean = true;
  protected counter:number= 0;

constructor(){}

ngOnInit(){

}

ngAfterViewInit(){
  // console.log(this.daySwitch);
}

switchFn(){
   this.swt != this.swt
}

addSection(event:any){
  // console.log(this.workHoursSection.nativeElement);
  let section = this.workHoursSection.nativeElement.cloneNode(true);
  let child = section.childNodes[0].childNodes[0]
  this.workingHoursParent.nativeElement.appendChild(section)
  child.removeChild(child.childNodes[0])
  // child.appendChild(this.btn);
  // this.btn.nativeElement.addEventListener('click',this.removeSection.bind(this));
  // console.log(this.btn);
  // this.btn.nativeElement.removeAttribute("hidden")
  // child.appendChild(btn);
  //  child.setAttribute("id", this.counter)
  child.innerHTML = "<button class=\"btn backbtn\"><i class=\"fa-solid fa-minus\"></i></button>";  
  child.firstChild.setAttribute("id", this.counter)
  child.firstChild.addEventListener('click',this.removeSection.bind(this));
 this.counter++;
}

removeSection(event:any){

console.log(event.target.parentElement.parentElement);
  event.target.parentElement.parentElement.remove();
  this.counter--;
}



}
