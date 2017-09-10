import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "../account.service";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    //this.id = Number(this.route.snapshot.paramMap.get('id'));

  }

}
