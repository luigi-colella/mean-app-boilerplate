import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { faCalendarAlt, faEuroSign, faMapMarkedAlt, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import iRide from 'src/app/interfaces/ride';
import iUser from 'src/app/interfaces/user';
import { RideService } from 'src/app/services/ride.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: iUser = { id: '', name: '', surname: '', email: '', img: '', number: '' }
  userRides: iRide[] = []
  faIcons: { [key: string]: IconDefinition } = {
    faCalendarAlt,
    faEuroSign,
    faMapMarkedAlt,
    faUsers
  }
  newRideFormIsOpen: boolean = false
  newRideForm = this.formBuilder.group({
    date: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    departure_address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    destination_address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
  })
  newRideFormError?: string = undefined

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private rideService: RideService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      error: (err) => { alert('Error during the fetching of user data.') },
      next: (data) => {
        this.user = data.user
        this.rideService.getUserRides(this.user.id).subscribe({
          error: (err) => { alert('Error during the fetching of user data.') },
          next: (data) => {
            this.userRides = data.rides
          }
        })
      }
    })
  }


  /**
   * Callback invoked when the the form to create a new ride is opened.
   */
  onClickNewRideBtn(): void {
    this.newRideFormIsOpen = true
  }

  /**
   * Callback invoked when the the form to create a new ride is closed.
   */
  onCloseNewRideForm(): void {
    this.newRideFormIsOpen = false
    this.newRideForm.reset()
  }

  /**
   * Callback invoked when the user submits the form for a new ride.
   */
  onSubmitNewRideForm(): void {
    let formValues = this.newRideForm.value

    let date = new Date(formValues?.date)
    if (isNaN(date.getTime())) {
      this.newRideFormError = 'Il formato della data non è valido'
      return
    }

    let departure_address = formValues?.departure_address.trim()
    if (!departure_address || departure_address === '') {
      this.newRideFormError = 'Il campo "Partenza" è vuoto'
      return
    }

    let destination_address = formValues?.destination_address.trim()
    if (!destination_address || destination_address === '') {
      this.newRideFormError = 'Il campo "Destinazione" è vuoto'
      return
    }

    let userPrice = Number(formValues?.price)
    if (isNaN(userPrice)) {
      this.newRideFormError = 'Il campo "Prezzo" non è valido'
      return
    }
    let price = userPrice * 100

    let newRide: Omit<iRide, 'id'> = {
      user_id: this.user.id,
      date,
      departure_address,
      destination_address,
      price
    }

    this.rideService.saveNewRide(newRide)
      .subscribe({
        error: (err) => { this.newRideFormError = 'Errore durante il salvataggio della nuova corsa' },
        next: (data) => {
          if (data.status === 'success') {
            this.userRides.push(data.ride)
            this.onCloseNewRideForm()
          } else {
            this.newRideFormError = 'Errore durante il salvataggio della nuova corsa'
          }
        }
      })
  }

  /**
   * Check if an error message should be showed for the given form field.
   */
  shouldErrorBeShowed(fieldName: string): boolean {
    let formControl = this.newRideForm.get(fieldName)

    return (!!formControl) && formControl.touched && formControl.invalid
  }
}
