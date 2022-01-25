export enum SocialMedia { // Order is important
  LinkedIn = 'LinkedIn',
  WhatsApp = 'WhatsApp',
  GitHub = 'GitHub',
  Email = 'Email',
  Facebook = 'Facebook',
  YouTube = 'YouTube',
  Instagram = 'Instagram',
  Discord = 'Discord',
}

export const enum SocialMediaIcons { // Order is important
  LinkedIn = 'fab fa-linkedin',
  WhatsApp = 'fab fa-whatsapp',
  GitHub = 'fab fa-github',
  Email = 'fab fa-envelope',
  Facebook = 'fab fa-facebook',
  YouTube = 'fab fa-youtube',
  Instagram = 'fab fa-instagram',
  Discord = 'fab fa-discord',
}

export const SocialMediaIconMap: Record<SocialMedia, SocialMediaIcons> = { // Order is important
  [SocialMedia.LinkedIn]: SocialMediaIcons.LinkedIn,
  [SocialMedia.WhatsApp]: SocialMediaIcons.WhatsApp,
  [SocialMedia.GitHub]: SocialMediaIcons.GitHub,
  [SocialMedia.Email]: SocialMediaIcons.Email,
  [SocialMedia.Facebook]: SocialMediaIcons.Facebook,
  [SocialMedia.YouTube]: SocialMediaIcons.YouTube,
  [SocialMedia.Instagram]: SocialMediaIcons.Instagram,
  [SocialMedia.Discord]: SocialMediaIcons.Discord,
}

export interface SocialMediaModel {
  name: SocialMedia
  url: string
  icon?: SocialMediaIcons
}
