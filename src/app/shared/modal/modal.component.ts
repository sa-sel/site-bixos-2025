import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { ImageModel } from 'models/image.model'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  @ViewChild('modal') modal!: TemplateRef<any>

  @Input() image?: ImageModel
  @Input() isOpen!: boolean
  @Input() text?: string
  @Input() title!: string
  @Input() url?: string

  // for two-way data binding
  @Output() isOpenChange = new EventEmitter<boolean>()

  modalRef?: BsModalRef
  paragraphs?: string[]

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.paragraphs = this.text?.split('\n')
  }

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
}
