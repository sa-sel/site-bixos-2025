import { Component } from '@angular/core'
import { ImageModel } from './image.model'

export interface RouteModel {
  path: string
  component: Component
  data: {
    background: ImageModel[]
    logo?: ImageModel
    title: string
  }
}
