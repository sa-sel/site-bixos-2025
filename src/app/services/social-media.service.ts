import { Injectable } from '@angular/core'
import { SocialMedia, SocialMediaIconMap, SocialMediaModel } from '@models'

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  available_networks = [
    SocialMedia.Facebook,
    SocialMedia.Instagram,
    SocialMedia.WhatsApp,
    SocialMedia.Email,
    SocialMedia.YouTube,
    SocialMedia.GitHub,
    SocialMedia.LinkedIn,
  ]

  private getWhatsAppURL(phoneNumber: string, message: string): string {
    const apiURL: string = 'https://api.whatsapp.com/send?phone=$PHONE&text=$MESSAGE'

    return apiURL
      .replace('$PHONE', phoneNumber.replace(/[()\s-+]/g, ''))
      .replace('$MESSAGE', message.replace('\n', ' '))
  }

  private getLink(network: SocialMediaModel, message: string = ''): string {
    const { name, url } = network
    return name === SocialMedia.WhatsApp
      ? this.getWhatsAppURL(url, message)
      : url.replace(/\s/g, '')
  }

  getTooltipText(): string {
    return navigator.clipboard ? 'Copiar Email' : 'Enviar Email'
  }

  copyEmailToClipboard(email: string): void {
    email = email.replace(/\s/g, '')

    navigator.clipboard
      ? navigator.clipboard.writeText(email)
      : window.open(`mailto:${email}`, '_self')
  }

  formatSocialMedia(social_networks: SocialMediaModel[]): SocialMediaModel[] {
    const index = (network_name: SocialMedia) =>
      this.available_networks.indexOf(network_name)

    return social_networks
      .filter(network => network.url && this.available_networks.includes(network.name))
      .map(
        network =>
          <SocialMediaModel>{
            name: network.name,
            url: this.getLink(network, 'Olá, SA-SEL! Tudo bem?'),
            icon: SocialMediaIconMap[network.name],
          }
      )
      .sort((a, b) => index(a.name) - index(b.name))
  }
}
