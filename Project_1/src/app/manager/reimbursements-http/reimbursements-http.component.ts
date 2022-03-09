import { Component, OnInit } from '@angular/core';
import {Requests} from '../requests.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-reimbursements-http',
  templateUrl: './reimbursements-http.component.html',
  styleUrls: ['./reimbursements-http.component.css']
})
export class ReimbursementsHttpComponent implements OnInit {

  allPending: Requests[] = [];
 
  constructor(private managerService: ManagerService) {
    this.managerService = managerService;
     }

  
  oneRequest: Requests = {
    reimbursementId: 3,
    employeeId: 4,
    reimbursementAmount: 500,
    reimbursementReason: "Bad weather",
    status: "pending",
    reimbursementDate: "11/14/21"
  };
   // allResolved: Request[]= [
    //  {
     //   reimbursementId: 3,
       // employeeId: 4,
    //    reimbursementAmount: 500,
      //  reimbursementReason: "flu",
      //  reimbursementDate: "11/4/21"
    //  },
     //  {
      //  reimbursementId: 4,
     //   employeeId: 5,
     //   reimbursementAmount: 80,
      //  reimbursementReason: "flat tire",
     //   reimbursementDate: "10/4/22"
    //  },
     // {
     //   reimbursementId: 5,
       // employeeId: 6,
      //  reimbursementAmount: 5000,
      //  reimbursementReason: "I want a new car",
      //  reimbursementDate: "12/1/22"
    //  }
   // ]

  

  ngOnInit(): void {
    this.allPending = this.managerService.fetchAllPending();

   

    
  }


  //approve(employeeId: number){
   // this.allPending = this.managerService.
  //}
}