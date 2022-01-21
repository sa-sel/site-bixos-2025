import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges {
  @ViewChild('modal') modal!: TemplateRef<any>

  // two-way data binding
  @Input() isOpen!: boolean
  @Output() isOpenChange = new EventEmitter<boolean>()

  modalRef?: BsModalRef

  constructor(private modalService: BsModalService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line
    if (changes['isOpen'].currentValue) {
      this.modalRef?.onHide?.unsubscribe()
      this.modalRef = this.modalService.show(this.modal)

      this.modalRef.onHide?.subscribe(() => {
        this.isOpen = false
        this.isOpenChange.emit(this.isOpen)
      })
    }
  }

  hide() {
    this.modalRef?.hide()
  }
}
