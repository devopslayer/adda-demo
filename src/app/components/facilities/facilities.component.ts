import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Shared/share.service';

interface Booking {
  facility: string;
  date: number;
  startTime: number;
  endTime: number;
  bookingAmount: number;
}

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})

export class FacilitiesComponent implements OnInit {
  facilities = [
    {id: 1, name: 'ClubHouse'},
    {id: 2, name: 'Tennis Court'}
  ];

  bookings: Booking[] = [];
  book: any[] = [];

  constructor(private shared: ShareService) { }

  ngOnInit(): void {
  }

  bookFacility(facility:any, date: any, startTime:any, endTime:any) {
    if((date!=null || date!='0') && (startTime!=null || startTime!='0') && (endTime!=null || endTime!='0')) {
      this.bookF(facility, date, startTime, endTime);
    } 
    // else {
    //   alert("Enter Valid Details");
    // }
  }

  bookF(facility: any, date: any, startTime: any, endTime: any): void {
    let s = startTime;
    let e = endTime;

    startTime = startTime.split(':')[0];
    endTime = endTime.split(':')[0];

    if (this.isAlreadyBooked(facility, date, startTime, endTime)) {
      alert('Booking Failed, Already Booked');
      return;
    }

    const bookingAmount = this.calculateBookingAmount(facility, startTime, endTime);

    if(bookingAmount!= 0) {
      this.bookings.push({
        facility,
        date,
        startTime,
        endTime,
        bookingAmount
      });

      this.book.push({
        facility,
        date,
        s,
        e,
        bookingAmount,
      });
      this.shared.setMessage(this.book);
      alert(`Booked, Rs. ${bookingAmount}`);
    } 
    // else {
    //   alert("Enter valid details");
    // }
  }

  isAlreadyBooked(facility: string, date: number, startTime: number, endTime: number): boolean {
    return this.bookings.some(booking =>
      booking.facility === facility &&
      booking.date === date &&
      (
        (startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime)
      )
    );
  }

  calculateBookingAmount(facility: string, startTime: number, endTime: number): number {
    if (facility === 'ClubHouse') {
      let bookingAmount = 0;

      if (+startTime >= 10 && +endTime <= 16) {
        bookingAmount = (endTime - startTime) * 100;
      } else if (+startTime >= 16 && +endTime <= 22) {
        bookingAmount = (endTime - startTime) * 500;
      }

      return bookingAmount;
    } else if (facility === 'Tennis Court') {
      return (endTime - startTime) * 50;
    }

    return 0;
  }


}
