import { Component, OnInit } from '@angular/core'
import { SocialMedia, SocialMediaModel } from '@models'
import { SocialMediaService } from '@services'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socialMedia: SocialMediaModel[] = [
    { name: SocialMedia.Email, url: 'sasel@eesc.usp.br' },
    { name: SocialMedia.Facebook, url: 'facebook.com' },
    { name: SocialMedia.GitHub, url: 'https://github.com/sa-sel' },
    { name: SocialMedia.Instagram, url: '@saselusp' },
    { name: SocialMedia.WhatsApp, url: '+55 (99) 99999-9999' },
    { name: SocialMedia.YouTube, url: 'youtube.com' },
  ]

  constructor(private socialMediaService: SocialMediaService) {}

  ngOnInit(): void {
    this.socialMedia = this.socialMediaService.formatSocialMedia(this.socialMedia)
  }
}
