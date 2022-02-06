import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel } from '@models'

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.component.html',
})
export class BibliotecasComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Salas de Estudos',
      subtitle: true,
      image: {
        alt: 'interior do aquario',
        src: 'assets/images/bibliotecas/aquario.png',
        caption: 'Interior do Aquário',
      },
      text: 'As bibliotecas da EESC, ICMC, e IFSC possuem salas de estudo 24h. A da EESC fica logo ao lado da biblioteca e é chamada de "aquário".<br><br>Durante o horário de funcionamento das bibliotecas, há também áreas de estudo adicionais. Na biblioteca do ICMC e IFSC, há salas fechadas que podem ser utilizadas por grupos de estudantes.',
    },
    {
      title: 'Pró Aluno - EESC',
      subtitle: true,
      image: {
        alt: 'pro aluno eesc',
        src: 'assets/images/bibliotecas/proaluno.png',
        caption: 'Entrada do Pró Aluno - EESC',
      },
      text: 'Pertinho da biblioteca da EESC e do aquário, está o espaço Pró-Aluno. Lá há 2 salas informatizadas para uso de computadores. Para acessa-los basta fazer login com sua conta USP.<br><br>Cada computador está conectado à impressora do espaço. Todo semestre, cada aluno pode realizar <strong>gratuitamente</strong> a impressão de <strong>100 páginas</strong>.<br><br>No bloco 6 do ICMC, também há salas informatizadas no último andar que podem ser acessadas por alunos.',
    },
  ]

  libraries: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/bibliotecas/eesc.png',
        alt: 'biblioteca eesc',
        caption: 'Biblioteca EESC',
      },
    },
    {
      image: {
        src: '/assets/images/bibliotecas/icmc.png',
        alt: 'biblioteca icmc',
        caption: 'Biblioteca ICMC',
      },
    },
    {
      image: {
        src: '/assets/images/bibliotecas/ifsc.png',
        alt: 'biblioteca ifsc',
        caption: 'Biblioteca IFSC',
      },
    },
  ]

  searchOptions: ImageGridItemModel[] = [
    {
      image: {
        alt: 'aplicativo biblioteca usp',
        src: 'assets/images/bibliotecas/aplicativo.png',
        caption:
          'Aplicativo <a target="_blank" rel="noopener noreferrer" href="http://www.sti.usp.br/appusp/">Bibliotecas USP</a>.',
      },
    },
    {
      image: {
        alt: 'site dedalus usp',
        src: 'assets/images/bibliotecas/dedalus.png',
        caption:
          'Site  <a target="_blank" rel="noopener noreferrer" href="http://dedalus.usp.br/F/24J2UMLMSA1FE9XG6TJ7E1R7Q7QK7QCQXDJ31V5UYEXRH2SR1I-61364?RN=53343508&pds_handle=GUEST">Dedalus</a>, que permite buscas mais avançados.',
      },
    },
  ]
}