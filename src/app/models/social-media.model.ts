export enum SocialMedia {
  LinkedIn = 'LinkedIn',
  WhatsApp = 'WhatsApp',
  GitHub = 'GitHub',
  Email = 'Email',
  Facebook = 'Facebook',
  YouTube = 'YouTube',
  Instagram = 'Instagram',
}

export const enum SocialMediaIcons {
  LinkedIn = 'fab fa-linkedin',
  WhatsApp = 'fab fa-whatsapp',
  GitHub = 'fab fa-github',
  Email = 'fab fa-envelope',
  Facebook = 'fab fa-facebook',
  YouTube = 'fab fa-youtube',
  Instagram = 'fab fa-instagram',
}

export const SocialMediaIconMap: Record<SocialMedia, SocialMediaIcons> = {
  [SocialMedia.LinkedIn]: SocialMediaIcons.LinkedIn,
  [SocialMedia.WhatsApp]: SocialMediaIcons.WhatsApp,
  [SocialMedia.GitHub]: SocialMediaIcons.GitHub,
  [SocialMedia.Email]: SocialMediaIcons.Email,
  [SocialMedia.Facebook]: SocialMediaIcons.Facebook,
  [SocialMedia.YouTube]: SocialMediaIcons.YouTube,
  [SocialMedia.Instagram]: SocialMediaIcons.Instagram,
}

export interface SocialMediaModel {
  name: SocialMedia
  url: string
  icon?: SocialMediaIcons
}
