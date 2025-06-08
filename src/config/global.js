export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Prácticas de crianza en las familias campesinas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pautas de crianza ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'La familia como actor fundamental en las pautas de crianza',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Reflexiones sobre el rol de los padres ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estilos de crianza',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'El papel del apego en la crianza',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Pautas de crianza en contextos rurales y campesinos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medio de vida ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cualidades de los medios de vida',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Componentes de los medios de vida',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Los medios de vida y su incidencia en las infancias rurales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Medios de subsistencia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ABA (2015). <i>Meeting the Challenge of Child Maltreatment in Rural Areas</i>. The American Bar Association.',
      link:
        'https://www.americanbar.org/groups/public_interest/child_law/resources/child_law_practiceonline/child_law_practice/vol-34/march-2015/meeting-the-challenge-of-child-maltreatment-in-rural-areas/',
    },
    {
      referencia:
        'Acosta Valdeleón, W., Ángel Pardo, N. C. & Pérez Pérez, T. (2020). <i>Liderazgo en la educación rural con enfoque territorial</i>. Universidad de La Salle - Ediciones Unisalle. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/21570',
    },
    {
      referencia:
        'ÁVILA, L.  (2024). Infancia y Ruralidad. Editorial UPTC. 10.19053/uptc.9789586608503',
      link:
        'https://revistas.uptc.edu.co/index.php/derecho_realidad/article/download/4981/4059',
    },
    {
      referencia:
        'Bejarano, A., Beltrán, A. & Pineda, N. (2021). Pautas de crianza en el sector rural. <i>Revista Estudios Psicológicos, 1</i>(2), 66-73. ',
      link:
        'https://www.researchgate.net/publication/351647628_Pautas_de_crianza_en_el_sector_rural',
    },
    {
      referencia:
        'Bustos Jiménez, A. (2014). <i>La escuela rural</i>. Ediciones Octaedro, S.L.',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59807?fs_q=rural&prev=fs',
    },
    {
      referencia:
        'Lang, D. (s.f.). <i>Estilos de crianza de Diana Baumrind</i>. ',
      link:
        'https://espanol.libretexts.org/Ciencias_Sociales/Libro%3A_Problemas_de_crianza_y_diversidad_familiar_(Lang)/04%3A_Estilos_de_crianza/04.1%3A_Estilos_de_crianza_de_Baumrind',
    },
    {
      referencia:
        'De Marco, C. (2021). ¿Qué es la niñez rural para la historia? Una revisión y una propuesta desde Argentina. <i>Historia Caribe</i>, 16(39), 189-223. ',
      link: 'https://doi.org/10.15648/hc.39.2021.2964',
    },
    {
      referencia:
        'López Herrera, F. E., Gil Villa, A. M., Carmona Jiménez, D. Y., Moreno Vásquez, A. M. & Jaramillo Parra, E. (2017). Prácticas familiares en el cuidado de los menores de la zona rural de Sopetrán, Antioquia. <i>Medicina UPB</i>, 36(1), 24-33.',
      link: 'https://revistas.upb.edu.co/index.php/medicina/article/view/1023',
    },
    {
      referencia:
        'Llevot Calvet, N. (2008). <i>Escuela rural y sociedad</i>. Ediciones de la Universitat de Lleida. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5455',
    },
    {
      referencia:
        'Seguí León, G. C., García Román, M. & Hernández Arencibia, L. (2016). El desarrollo de la infancia en la comunidad rural Vivero: ¿Un fenómeno cultural? <i>Estudios del Desarrollo Social</i>, 4(3), 52-59. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2308-01322016000300005&lng=es&nrm=isO',
    },
    {
      referencia:
        'Tilano Vega, L. M., Londoño Arredondo, N. H. & Tobón Mora, K. J. (2018). Crianza en Colombia: Relevancia y avances de investigación. <i>Psicología desde el Caribe</i>, 2(35), 156-170. ',
      link:
        'https://rcientificas.uninorte.edu.co/index.php/psicologia/article/view/8175/214421446441',
    },
    {
      referencia:
        'UNDP. INTERNATIONAL RECOVERY PLATFORM. (s.f.). <i>Documento de apoyo. Medios de Vida</i>. ',
      link:
        'https://eird.org/pr14/cd/documentos/espanol/Publicacionesrelevantes/Recuperacion/8-MediosdeVida.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Medios de vida',
      significado:
        'Son el conjunto de actividades, capacidades, activos y estrategias que las personas y los hogares emplean para satisfacer sus necesidades básicas y asegurar una vida digna dentro de su contexto social, económico y ambiental.',
    },
    {
      termino: 'Medios de subsistencia',
      significado:
        'Comprende las habilidades, los activos (tanto materiales como sociales) y las actividades necesarias para los medios de vida. ',
    },
    {
      termino: 'Negligencia',
      significado:
        'Hace referencia al descuido, la falta de cuidado o la ausencia de aplicación en la realización de una tarea o en el cumplimiento de una obligación.',
    },
    {
      termino: 'Obediencia',
      significado:
        'Es el acto de acatar o cumplir la voluntad, instrucciones o mandatos de una autoridad, ya sea una persona, una ley, una doctrina, una comunidad, una idea o incluso la propia conciencia.',
    },
    {
      termino: 'Pautas de crianza',
      significado:
        'Son normas o modelos que guían el cuidado, educación y desarrollo de los niños dentro de la familia, transmitidas normalmente, de generación en generación. Su objetivo principal es promover un desarrollo saludable físico, mental y emocional, estableciendo hábitos como alimentación, sueño, comportamiento y límites claros.',
    },
    {
      termino: 'Primera infancia',
      significado:
        'Es la etapa del desarrollo humano que va desde el nacimiento hasta los 5 o 6 años, considerada crítica para el desarrollo integral del niño en aspectos físicos, cognitivos, emocionales y sociales.',
    },
    {
      termino: 'Reglas',
      significado:
        'Son un conjunto de normas, códigos o directrices que regulan el comportamiento o el funcionamiento dentro de una sociedad, grupo o actividad.',
    },
    {
      termino: 'Ruralidad',
      significado:
        'Conjunto de fenómenos sociales y culturales que ocurren en zonas rurales, especialmente vinculadas a las actividades agropecuarias, y que generan una identidad y sentido de pertenencia en las comunidades que habitan esos espacios.',
    },
    {
      termino: 'Tradiciones culturales',
      significado:
        'Son un conjunto de costumbres, prácticas, creencias y rituales transmitidos de generación en generación, dentro de una comunidad o sociedad, que contribuyen a la identidad cultural y social de un grupo. Incluyen festividades, modos de vestir, formas de cocinar, canciones, danzas y ceremonias que refuerzan el sentido de pertenencia y continuidad histórica.',
    },
    {
      termino: 'Tradiciones ancestrales',
      significado:
        'Son prácticas, creencias, rituales y costumbres, transmitidas de generación en generación, que forman parte esencial de la identidad cultural de pueblos y comunidades, especialmente indígenas.',
    },
  ],
}
