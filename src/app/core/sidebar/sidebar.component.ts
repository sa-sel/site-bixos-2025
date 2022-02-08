import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { SidebarItemModel } from '@models'
import { SidebarService } from '@services'
import * as bootstrap from 'bootstrap'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  route = ''
  fragment = ''
  startsOpen = this.sidebarService.isOpen()
  subscriptions: Subscription[] = []
  sidebar!: bootstrap.Offcanvas

  items: SidebarItemModel[] = [
    {
      title: 'Página Inicial',
      icon: 'fas fa-home',
      route: '',
      collapsed: true,
    },
    {
      title: 'Semana de Recepção',
      icon: 'fas fa-calendar-week',
      route: 'semana-de-recepcao',
      collapsed: true,
    },
    // {
    //   title: 'Kit Bixo',
    //   icon: 'fas fa-tshirt',
    //   route: 'kit-bixo',
    //   collapsed: true,
    // },
    {
      title: 'Matrícula',
      icon: 'fas fa-passport',
      route: 'matricula',
      collapsed: true,
      subitems: [
        {
          title: 'Fluxograma',
          id: 'flowchart',
        },
        {
          title: 'Datas das chamadas',
          id: 'dates',
        },
        {
          title: 'Matrícula',
          id: 'enrollment',
        },
        {
          title: 'Local de matrícula',
          id: 'places',
        },
      ],
    },
    {
      title: 'Sobre o curso',
      icon: 'fas fa-graduation-cap',
      route: 'curso',
      collapsed: true,
    },
    {
      title: 'Projeto Ampére',
      icon: 'fab fa-youtube',
      route: 'projeto-ampere',
      collapsed: true,
    },
    {
      title: 'Preparação Estudos',
      icon: 'fas fa-book',
      route: 'preparacao-estudos',
      collapsed: true,
      subitems: [
        {
          title: 'Introdução',
          id: 'introducao',
        },
        {
          title: 'Sites e Softwares',
          id: 'ferramentas',
        },
      ],
    },
    {
      title: 'Serviços Acadêmicos',
      icon: 'fas fa-user-graduate',
      route: 'servicos-academicos',
      collapsed: true,
    },
    {
      title: 'ICs e Extracurriculares',
      icon: 'fas fa-microscope',
      route: 'ics-extras',
      collapsed: true,
    },
    {
      title: 'Conheça o Campus',
      icon: 'fas fa-map-marked',
      route: 'campus',
      collapsed: true,
    },
    {
      title: 'Bandejão',
      icon: 'fas fa-utensils',
      route: 'bandejao',
      collapsed: true,
    },
    {
      title: 'Bibliotecas',
      icon: 'fas fa-book-reader',
      route: 'bibliotecas',
      collapsed: true,
    },
    {
      title: 'Moradias',
      icon: 'fas fa-house-user',
      route: 'moradias',
      collapsed: true,
    },
  ]

  private expanded?: SidebarItemModel

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    // eslint-disable-next-line
    const sidebarElement = document.querySelector('#sidebar')

    if (sidebarElement) {
      this.sidebar = new bootstrap.Offcanvas(sidebarElement)

      // when the sidebar is hidden through Bootstrap scripts
      // (e.g.: by clicking in the backdrop or pressing <ESC>)
      // set the `isOpen` attribute to false
      sidebarElement.addEventListener('hidden.bs.offcanvas', () => {
        this.sidebarService.close()

        if (this.expanded) {
          this.expanded.collapsed = true
        }
      })
    }

    this.subscriptions.push(
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          const regexp = /\/(?<route>\w*)(?<fragment>#.+)?/
          const groups = regexp.exec(e.urlAfterRedirects)?.groups ?? {}

          /* eslint-disable dot-notation */
          this.route = groups['route']
          this.fragment = groups['fragment']?.replace('#', '')
          /* eslint-enable dot-notation */

          this.sidebar.hide()
        }
      })
    )

    this.subscriptions.push(
      this.sidebarService.visibility$.subscribe(isOpen => {
        isOpen ? this.sidebar.show() : this.sidebar.hide()
      })
    )

    this.expanded = this.items.find(item => !item.collapsed)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })
  }

  toggleCollapsed(item: SidebarItemModel): void {
    if (item.collapsed) {
      if (this.expanded) {
        this.expanded.collapsed = true
      }

      this.expanded = item
      item.collapsed = false
    } else {
      this.expanded = undefined
      item.collapsed = true
    }
  }
}
