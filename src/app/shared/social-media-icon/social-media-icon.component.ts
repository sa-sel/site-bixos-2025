import { Component, Input, OnInit } from '@angular/core'
import { SocialMediaModel } from '@models'
import { SocialMediaService } from '@services'

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss'],
})
export class SocialMediaIconComponent implements OnInit {
  @Input() network!: SocialMediaModel
  @Input() colorClass = ''
  @Input() size = ''

  tooltip = ''
  tooltipTimeout?: any

  constructor(private socialMediaService: SocialMediaService) {}

  ngOnInit(): void {
    if (!this.colorClass.startsWith('text-')) {
      this.colorClass = ''
    }

    this.tooltip = this.socialMediaService.getTooltipText()
  }

  copyToClipboard(email: string): void {
    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout)
    }

    this.socialMediaService.copyEmailToClipboard(email)

    this.tooltip = 'Copiado!'
    this.tooltipTimeout = setTimeout(() => {
      this.tooltip = this.socialMediaService.getTooltipText()
    }, 300)
  }
}