import { Component, OnInit } from '@angular/core';
import { Soba } from 'src/app/model/soba';
import { SobaService } from 'src/app/services/soba.service';

@Component({
  selector: 'app-soba-list',
  templateUrl: './soba-list.component.html',
  styleUrls: ['./soba-list.component.css']
})
export class SobaListComponent implements OnInit {

  public sobe: Soba[];

  constructor(private sobaService: SobaService) { }

  ngOnInit() {
    this.sobaService.getSobe().subscribe(sobe => {this.sobe = sobe});
  }

}
