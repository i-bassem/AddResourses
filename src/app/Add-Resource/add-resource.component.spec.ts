import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceComponent } from './add-resource.component';

describe('AddResourceComponent', () => {
  let component: AddResourceComponent;
  let fixture: ComponentFixture<AddResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// sd

// <div>
//     <div class="card mb-3 rectangle-box" >
     
//     <div class="d-flex justify-content-end" style="border: 2px solid red;">
    
//       <div class="d-flex flex-column justify-content-around " style="border: 2px solid red;">
//         <span>اسم الموارد</span> 
//         <div class="w-100">
//         <b>هيثم محمد </b>
//         </div>
//       </div>
    
//       <img src="../assets/Image-100.png" class="avatar" alt="Profile picture">
//     </div>
//     </div>
    
    
//     <div>
    
//       <!-- <div class="card mb-3" >
     
//     <div class="d-flex justify-content-end" style="border: 2px solid red;">
    
//       <div class="d-flex flex-column justify-content-around " style="border: 2px solid red;">
//         <span>اسم الموارد</span> 
//         <div class="w-100">
//         <b>هيثم محمد </b>
//         </div>
//       </div>
    
//       <img src="../assets/Image-100.png" class="avatar" alt="Profile picture">
//     </div>
//     </div> -->
//     </div>
    
    
//     </div>
//     <br/>
    
    
    
    
//     <div class="form-check form-switch">
//       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
//       <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
//     </div>
    
    
//     <div class="form-check form-check-inline">
//       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
//       <label class="form-check-label" for="inlineRadio1">1</label>
//     </div>
//     <div class="form-check form-check-inline">
//       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
//       <label class="form-check-label" for="inlineRadio2">2</label>
//     </div>
    
    
    
    
    
//     <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
//       <!-- Quantity -->
//       <div class="d-flex mb-4" style="max-width: 50px; max-height: 50px;">
    
//         <button class="btn btn-primary px-3 me-2"
//           onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
//     >
//           <i class="fas fa-minus"></i>
//         </button>
    
//         <div class="form-outline">
//           <input type="number" #qunty  min="1" max="" 
//                  name="quantity" value=""
//                  class="form-control" style="width: 70px;" disabled="" />     
//         </div>
    
//         <button class="btn btn-primary px-3 ms-2"
//         onclick="this.parentNode.querySelector('input[type=number]').stepUp()" 
//         >
//         <i class="fas fa-plus"></i>
//         </button>
    
//       </div>
//     </div>
    
    
//     <a class="text-start mb-4" data-mdb-toggle="tooltip"
//     title="Remove item" >
//     <i class="fa-solid fa-trash-can"></i>
//     </a>
    
    
//     <!-- DropDown menu -->
//     <!-- <div class="input-group mb-3">
//       <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
//       <ul class="dropdown-menu">
//         <li><a class="dropdown-item" href="#">Action</a></li>
//         <li><a class="dropdown-item" href="#">Another action</a></li>
//         <li><a class="dropdown-item" href="#">Something else here</a></li>
//         <li><hr class="dropdown-divider"></li>
//         <li><a class="dropdown-item" href="#">Separated link</a></li>
//       </ul>
//       <input type="text" class="form-control" aria-label="Text input with dropdown button">
//     </div> -->