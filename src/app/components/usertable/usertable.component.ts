import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {
  faCalendarDays = faCalendarDays;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  temp = this.fb.group({
    username: [{ value: '', disabled: false }, Validators.required],
  });
  btnd = 'medium1btn';
  btnda = "medium1btn medactive";
  outline = "foroutline"
  boutline = "forbtnoutline";
  val = true;
  fordaysactive = "active";
  // val1=false;
  component1() {
    if (this.val) {
      this.val = false;
    }

  }
  component2() {
    if (!this.val) {
      this.val = true;
    }
  }
  mon = true;
  tue = false;
  wed = false;
  th = false;
  fri = false;
  sat = false;
  sun = false;
  fordaysbtn(value: any) {
    if (value == "mon") {
      this.mon = true;
      this.tue = false;
      this.wed = false;
      this.th = false;
      this.fri = false;
      this.sat = false;
      this.sun = false;
    }
    else if (value == "tue") {
      this.mon = false;
      this.tue = true;
      this.wed = false;
      this.th = false;
      this.fri = false;
      this.sat = false;
      this.sun = false;
    }
    else if (value == "wed") {
      this.mon = false;
      this.tue = false;
      this.wed = true;
      this.th = false;
      this.fri = false;
      this.sat = false;
      this.sun = false;
    }
    else if (value == "th") {
      this.mon = false;
      this.tue = false;
      this.wed = false;
      this.th = true;
      this.fri = false;
      this.sat = false;
      this.sun = false;
    }
    else if (value == "fri") {
      this.mon = false;
      this.tue = false;
      this.wed = false;
      this.th = false;
      this.fri = true;
      this.sat = false;
      this.sun = false;
    }
    else if (value == "sat") {
      this.mon = false;
      this.tue = false;
      this.wed = false;
      this.th = false;
      this.fri = false;
      this.sat = true;
      this.sun = false;
    }
    else if (value == "sun") {
      this.mon = false;
      this.tue = false;
      this.wed = false;
      this.th = false;
      this.fri = false;
      this.sat = false;
      this.sun = true;
    }
  }
  // isPopupOpen = false;
  // popupId: string = "";

  // openPopup(id: string) {
  //   this.popupId = id;
  //   this.isPopupOpen = true;
  //   console.log(this.popupId)
  // }
  // closePopup() {
  //   this.isPopupOpen = false;
  // }
  // openScrollableContent(longContent: any, value: any) {
  //   this.modalService.open(longContent, { scrollable: true });
  //   console.log(this.mon)
  // }
  open(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with result: ${result}`);
    }, (reason) => {
      console.log(`Dismissed with reason: ${reason}`);
    });
  }
//   zIndex = 1040 + (10 * ('.modal:visible').length);
// css('z-index', zIndex);
// setTimeout(function () {
//   $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
// }, 0);
}
